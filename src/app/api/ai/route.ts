

import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const apiKey = process.env.GEMINI_API_KEY || "";
        if (!apiKey) {
            return NextResponse.json({ error: "API key is required" }, { status: 400 });
        }

        const genAI = new GoogleGenerativeAI(apiKey);
        const model = genAI.getGenerativeModel({ model: "gemini-pro" });

        const { subject, question } = await request.json();
        const cleanedQuestion = question.trim().toLowerCase();

        // List of common greetings
        const greetings = ["hello", "hii", "hi", "hiii", "hey", "heyy", "good morning", "good afternoon", "good evening"];

        // If the input is a greeting, return a simple greeting response
        if (greetings.includes(cleanedQuestion)) {
            return NextResponse.json({ answer: "Hello! 👋" });
        }

        // Refined prompt for Python tutoring
        const fullPrompt = `
        You are a friendly and fun AI Python tutor for children aged 8-14. Your goal is to teach Python concepts in a simple, engaging, and interactive way. Use emojis to make the learning experience more fun! 🎉✨

        If the question is related to Python, provide the response in the following structured format:

        Answer:
        [Provide a simple and direct answer to the question, using emojis and child-friendly language.]

        Explanation:
        [Explain the concept in a fun and easy-to-understand way, using examples and emojis.]

        Steps:
        [Provide step-by-step instructions in a playful and interactive manner, using emojis and simple language.]

        Lesson: ${subject || "Introduction to Python"}
        Homework: ${question || "Write a simple Python program to print 'Hello, World!'"}
        `;

        // Generate content using the model
        const result = await model.generateContent(fullPrompt);
        const response = await result.response;
        const output = await response.text();

        // Extract structured parts from the response using regex
        const answerMatch = output.match(/Answer:\s*(.*?)(?=\nExplanation:|$)/s);
        const explanationMatch = output.match(/Explanation:\s*(.*?)(?=\nSteps:|$)/s);
        const stepsMatch = output.match(/Steps:\s*(.*)/s);

        // Function to clean up text (remove headings and asterisks)
        const cleanText = (text: string | undefined) => {
            if (!text) return "";
            return text
                .replace(/\*\*Explanation:\*\*|\*\*Steps:\*\*/g, "") // Remove headings
                .replace(/\*\*/g, "") // Remove asterisks
                .replace(/```/g, "") // Remove code block markers
                .trim(); // Trim extra spaces
        };



        // Construct JSON response with cleaned text
        return NextResponse.json({
            answer: cleanText(answerMatch?.[1]),
            explanation: cleanText(explanationMatch?.[1]),
            steps: cleanText(stepsMatch?.[1]),
        });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: "An error occurred while processing your request" }, { status: 500 });
    }
}
