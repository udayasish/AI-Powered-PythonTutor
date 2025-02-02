"use client";
import { useState } from "react";
import AiTutorSection from "@/components/AiTutorSection";
import McqComponent from "@/components/McqComponent";

export default function AiTutorPage() {
  const [isMcq, setIsMcq] = useState(false);

  return (
<>
      {isMcq ? (
        <McqComponent />
      ) : (
        <AiTutorSection setIsMcq={setIsMcq} isMcq={isMcq} />
      )}
    </>
  );
}
