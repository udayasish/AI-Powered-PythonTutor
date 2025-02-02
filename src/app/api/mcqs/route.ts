


import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const apiKey = process.env.GEMINI_API_KEY || "";
    if (!apiKey) {
      return NextResponse.json({ error: "API key is required" }, { status: 400 });
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    // Prompt to generate Python MCQs for children
    const prompt = `
      You are a friendly AI Python tutor for children aged 8-14. Your goal is to create fun and engaging multiple-choice questions (MCQs) to teach basic Python concepts.

      Generate 5 MCQs with the following format:
      - Each question should have 4 options.
      - Only one option should be correct.
      - Use simple and child-friendly language.
      - Include emojis to make it more engaging.

      Example:
      {
          "question": "What does the 'print()' function do? 🖨️",
          "options": [
              "It adds two numbers.",
              "It displays a message on the screen.",
              "It creates a new file.",
              "It deletes a file."
          ],
          "correctAnswer": "It displays a message on the screen."
      }

      Generate 5 MCQs about basic Python concepts.
    `;

    // Generate content using the model
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const output = await response.text();

    console.log("Raw Gemini API Output:", output); // Log the raw output

    // Extract JSON objects from the output
    const jsonMatches = output.match(/\{[^{}]*\}/g);
    if (!jsonMatches) {
      throw new Error("No valid JSON found in the API response");
    }

    // Parse each JSON object
    const mcqs = jsonMatches.map((jsonStr) => JSON.parse(jsonStr));
    

    return NextResponse.json({ mcqs });
  } catch (error) {
    console.error("API Error:", error); // Log the full error
    return NextResponse.json({ error: "An error occurred while generating MCQs" }, { status: 500 });
  }
}