

"use client";
import { useState, useEffect, useRef } from "react";

const AiTutorSection = ({ setIsMcq, isMcq }: { setIsMcq: (isMcq: boolean) => void; isMcq: boolean }) => {
  const [subject, setSubject] = useState("Python");
  const [level, setLevel] = useState("Any level");
  const [question, setQuestion] = useState("");
  const [response, setResponse] = useState<{ answer?: string; explanation?: string; steps?: string }>({});
  const [isLoading, setIsLoading] = useState(false);

  // Refs for text areas
  const answerTextareaRef = useRef<HTMLTextAreaElement>(null);
  const explanationTextareaRef = useRef<HTMLTextAreaElement>(null);
  const stepsTextareaRef = useRef<HTMLTextAreaElement>(null);

  // Function to auto-resize text areas
  const resizeTextarea = (textarea: HTMLTextAreaElement | null) => {
    if (textarea) {
      textarea.style.height = "auto"; // Reset height to auto
      textarea.style.height = `${textarea.scrollHeight}px`; // Set height to scroll height
    }
  };

  // Resize text areas when response changes
  useEffect(() => {
    resizeTextarea(answerTextareaRef.current);
    resizeTextarea(explanationTextareaRef.current);
    resizeTextarea(stepsTextareaRef.current);
  }, [response]);

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      // const res = await fetch("/api/ai", {
      const res = await fetch("https://skc-udayasishbora-ai-powered-python-tutor-pykids.vercel.app/api/ai", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ subject, level, question }),
      });

      if (!res.ok) {
        throw new Error("Failed to fetch response");
      }

      const data = await res.json();
      setResponse(data);
    } catch (error) {
      console.error("Error:", error);
      setResponse({ answer: "An error occurred. Please try again." });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col md:flex-row gap-6 p-6 bg-gradient-to-br from-indigo-900 to-purple-600 text-white rounded-lg shadow-lg">
      {/* Left Side - Question Input */}
      <div className="w-full md:w-1/2 bg-white/10 p-6 rounded-lg shadow hover:bg-white/20 transition-all">
        <h2 className="text-2xl font-bold mb-4 text-yellow-300">Question</h2>
        {/* <h2 className="text-2xl font-bold mb-4 text-[#4F46E5]">Question</h2> */}

        {/* Category Selection */}
        <div className="flex gap-2 mb-4">
          {["Homework", "MCQs"].map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded transition-all ${
                (category === "Homework" && !isMcq) || (category === "MCQs" && isMcq)
                  ? "bg-yellow-400 text-indigo-900 hover:bg-yellow-500"
                  : "bg-white/10 hover:bg-white/20"
              }`}
              onClick={() => setIsMcq(category === "MCQs")}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Subject & Level */}
        <div className="flex gap-4 mb-4">
          <div className="flex-1">
            <label className="block text-sm font-medium mb-1 text-yellow-300">📖 Subject</label>
            <select
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="w-full p-2 rounded bg-white/10 text-white hover:bg-white/20 transition-all cursor-pointer"
            >
              <option>Python</option>
            </select>
          </div>

          <div className="flex-1">
            <label className="block text-sm font-medium mb-1 text-yellow-300">🎓 Level</label>
            <select
              value={level}
              onChange={(e) => setLevel(e.target.value)}
              className="w-full p-2 rounded bg-white/10 text-white hover:bg-white/20 transition-all cursor-pointer"
            >
              <option>Any level</option>
              <option>Beginner</option>
              <option>Intermediate</option>
              <option>Advanced</option>
            </select>
          </div>
        </div>

        {/* Homework Question */}
        <label className="block text-sm font-medium mb-1 text-yellow-300">💬 Your Question *</label>
        <textarea
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          className="w-full p-3 h-32 bg-white/10 rounded mb-4 text-white hover:bg-white/20 transition-all placeholder:text-neutral-300"
          placeholder="Type your question here..."
        ></textarea>

        {/* Answer Button */}
        <button
          onClick={handleSubmit}
          disabled={isLoading}
          className="w-full bg-yellow-400 text-indigo-900 py-3 rounded-lg mt-4 font-bold text-lg hover:bg-yellow-500 active:bg-yellow-600 transition-all disabled:bg-yellow-400/50 disabled:cursor-not-allowed"
        >
          {isLoading ? (
            <span className="flex items-center justify-center gap-2">
              Loading...
              <svg
                className="animate-spin h-5 w-5 text-indigo-900"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
            </span>
          ) : (
            "✅ Answer"
          )}
        </button>
      </div>

      {/* Right Side - Result */}
      <div className="w-full md:w-1/2 bg-white/10 p-6 rounded-lg shadow hover:bg-white/20 transition-all">
        <h2 className="text-2xl font-bold mb-4 text-yellow-300">Result</h2>

        {/* Answer Section */}
        <div className="mb-4">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold text-yellow-300">Answer</h3>
            <button
              className="bg-yellow-400 text-indigo-900 px-2 py-1 text-sm rounded hover:bg-yellow-500 active:bg-yellow-600 transition-all"
              onClick={() => navigator.clipboard.writeText(response.answer || "")}
            >
              Copy
            </button>
          </div>
          <textarea
            ref={answerTextareaRef}
            className="w-full p-3 bg-white/10 rounded mt-2 resize-none overflow-hidden text-white hover:bg-white/20 transition-all"
            disabled
            value={response.answer}
          ></textarea>
        </div>

        {/* Explanation Section */}
        <div className="mb-4">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold text-yellow-300">Explanation</h3>
            <button
              className="bg-yellow-400 text-indigo-900 px-2 py-1 text-sm rounded hover:bg-yellow-500 active:bg-yellow-600 transition-all"
              onClick={() => navigator.clipboard.writeText(response.explanation || "")}
            >
              Copy
            </button>
          </div>
          <textarea
            ref={explanationTextareaRef}
            className="w-full p-3 bg-white/10 rounded mt-2 resize-none overflow-hidden text-white hover:bg-white/20 transition-all"
            disabled
            value={response.explanation}
          ></textarea>
        </div>

        {/* Steps Section */}
        <div className="mb-4">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold text-yellow-300">Steps</h3>
            <button
              className="bg-yellow-400 text-indigo-900 px-2 py-1 text-sm rounded hover:bg-yellow-500 active:bg-yellow-600 transition-all"
              onClick={() => navigator.clipboard.writeText(response.steps || "")}
            >
              Copy
            </button>
          </div>
          <textarea
            ref={stepsTextareaRef}
            className="w-full p-3 bg-white/10 rounded mt-2 resize-none overflow-hidden text-white hover:bg-white/20 transition-all"
            disabled
            value={response.steps}
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default AiTutorSection;

