

"use client";
import { useState, useEffect } from "react";

const McqComponent = () => {
  const [mcqs, setMcqs] = useState<
    Array<{ question: string; options: string[]; correctAnswer: string }>
  >([]);
  const [selectedAnswers, setSelectedAnswers] = useState<{
    [key: number]: string;
  }>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [reward, setReward] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Fetch MCQs from the API
  const fetchMcqs = async () => {
    try {
      // const res = await fetch("/api/mcqs");
      const res = await fetch("https://skc-udayasishbora-ai-powered-python-tutor-pykids.vercel.app/api/mcqs");
      if (!res.ok) throw new Error("Failed to fetch MCQs");
      const data = await res.json();

      if (data.error) {
        throw new Error(data.error);
      }

      // The API now returns data.mcqs directly
      setMcqs(data.mcqs);
      setIsLoading(false);
      setError(null);
    } catch (error) {
      console.error("Error fetching MCQs:", error);
      setError("Failed to load questions. Please try again later.");
    }
  };

  // Fetch MCQs on component mount
  useEffect(() => {
    fetchMcqs();
  }, []);

  // Handle option selection
  const handleOptionSelect = (questionIndex: number, option: string) => {
    setSelectedAnswers((prev) => ({ ...prev, [questionIndex]: option }));
  };

  // Handle form submission
  const handleSubmit = () => {
    let correctCount = 0;
    mcqs.forEach((mcq, index) => {
      if (selectedAnswers[index] === mcq.correctAnswer) {
        correctCount++;
      }
    });
    setScore(correctCount);
    setIsSubmitted(true);

    // Reward system
    if (correctCount === mcqs.length) {
      setReward(
        "🎉 Hurray! You got all answers correct! Here's a gold star: ⭐"
      );
    } else if (correctCount >= mcqs.length / 2) {
      setReward("👍 Good job! You're doing great! Keep it up!");
    } else {
      setReward("😊 Don't worry! Practice makes perfect. Try again!");
    }
  };

  // Reset the quiz
  const resetQuiz = () => {
    setIsLoading(true);
    setSelectedAnswers({});
    setIsSubmitted(false);
    setScore(0);
    setReward("");
    fetchMcqs(); // Fetch new MCQs
  };

  return (
    <div className="flex flex-col items-center p-6 bg-gradient-to-br from-indigo-900 to-purple-900 text-white rounded-lg shadow-lg">
      <h1 className="text-4xl font-bold mb-6 text-yellow-400 animate-bounce">
        Python MCQs for Kids 🐍
      </h1>

      {error && (
        <div className="w-full bg-red-600 p-4 rounded-lg mb-4 text-center">
          <p className="text-white">{error}</p>
          <button
            onClick={resetQuiz}
            className="w-full bg-yellow-400 text-indigo-900 py-3 rounded-lg mt-4 font-bold text-lg hover:bg-yellow-500 active:bg-yellow-600 transition-all"
          >
            Try Again
          </button>
        </div>
      )}

      {/* MCQs */}
      {mcqs.length > 0
        ? mcqs.map((mcq, index) => (
            <div
              key={index}
              className="w-full bg-white/10 p-6 rounded-lg shadow mb-4 hover:bg-white/20 transition-all"
            >
              <h2 className="text-2xl font-semibold mb-4 text-yellow-300">
                {mcq.question}
              </h2>
              <div className="space-y-3">
                {mcq.options.map((option, optionIndex) => (
                  <label
                    key={optionIndex}
                    className={`flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-all ${
                      selectedAnswers[index] === option
                        ? "bg-indigo-600 text-white"
                        : "bg-white/10 hover:bg-white/20"
                    }`}
                  >
                    <input
                      type="radio"
                      name={`question-${index}`}
                      value={option}
                      checked={selectedAnswers[index] === option}
                      onChange={() => handleOptionSelect(index, option)}
                      disabled={isSubmitted}
                      className="form-radio h-5 w-5 text-indigo-600 cursor-pointer"
                    />
                    <span className="text-lg">{option}</span>
                  </label>
                ))}
              </div>
            </div>
          ))
        : !error && (
            <div className="flex flex-col items-center justify-center min-h-[200px] p-8">
              <div className="flex items-center gap-3">
                <svg
                  className="animate-spin h-8 w-8 text-yellow-400"
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
                <p className="text-lg font-medium text-yellow-400">
                  Loading questions...
                </p>
              </div>
              <div className="mt-4 text-neutral-300">
                Preparing your Python quiz... 🐍
              </div>
            </div>
          )}

      {/* Submit Button */}
      {!isSubmitted && !isLoading && mcqs.length > 0 && (
        <button
          onClick={handleSubmit}
          className="w-full bg-yellow-400 text-indigo-900 py-3 rounded-lg mt-4 font-bold text-lg hover:bg-yellow-500 active:bg-yellow-600 transition-all disabled:bg-yellow-400/50 disabled:cursor-not-allowed"
          disabled={Object.keys(selectedAnswers).length !== mcqs.length}
        >
          Submit Answers
        </button>
      )}

      {/* Results */}
      {isSubmitted && (
        <div className="w-full bg-white/10 p-6 rounded-lg shadow mt-4">
          <h2 className="text-2xl font-bold mb-4 text-yellow-300">Results</h2>
          <p className="text-lg">
            You scored {score} out of {mcqs.length}! 🎉
          </p>
          <p className="text-lg mt-2">{reward}</p>
          <button
            onClick={resetQuiz}
            className="w-full bg-yellow-400 text-indigo-900 py-3 rounded-lg mt-4 font-bold text-lg hover:bg-yellow-500 active:bg-yellow-600 transition-all"
          >
            Try Again
          </button>
        </div>
      )}

      {/* {isLoading && (
        <div className="w-full bg-white/10 p-6 rounded-lg shadow mt-4">
          <h2 className="text-2xl font-bold mb-4 text-yellow-300">Results</h2>
          <p className="text-lg">
            You scored {score} out of {mcqs.length}! 🎉
          </p>
          <p className="text-lg mt-2">{reward}</p>
          <button
            onClick={resetQuiz}
            className="w-full bg-yellow-400 text-indigo-900 py-3 rounded-lg mt-4 font-bold text-lg hover:bg-yellow-500 active:bg-yellow-600 transition-all"
          >
            Loading...
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
          </button>
        </div>
      )} */}

{
  isLoading && (
  <button
  onClick={resetQuiz}
  disabled={isLoading}
  className="w-full bg-yellow-400 text-indigo-900 py-3 rounded-lg mt-4 font-bold text-lg hover:bg-yellow-500 active:bg-yellow-600 transition-all disabled:bg-yellow-400/50 disabled:cursor-not-allowed"
>
 
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
  
</button>
  )
}
    </div>
  );
};

export default McqComponent;
