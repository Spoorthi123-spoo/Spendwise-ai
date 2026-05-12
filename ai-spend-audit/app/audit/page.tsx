"use client";

import { useState } from "react";

export default function AuditPage() {
  const [tool, setTool] = useState("");
  const [plan, setPlan] = useState("");
  const [spend, setSpend] = useState("");
  const [seats, setSeats] = useState("");

  return (
    <main className="min-h-screen bg-gray-100 p-10">

      <h1 className="text-4xl font-bold text-black">
        AI Spend Audit
      </h1>

      <p className="mt-2 text-gray-600">
        Analyze your AI subscription costs instantly.
      </p>

      <div className="mt-8 flex flex-col gap-4 max-w-md">

        <select
          className="border p-3 rounded"
          onChange={(e) => setTool(e.target.value)}
        >
          <option>Select Tool</option>
         <option value="ChatGPT">ChatGPT</option>
            <option value="Claude">Claude</option>
            <option value="Cursor">Cursor</option>
            <option value="Gemini">Gemini</option>
            <option value="Copilot">GitHub Copilot</option>
            <option value="MidJourney">MidJourney</option>
            <option value="Perplexity">Perplexity AI</option>
            <option value="Notion AI">Notion AI</option>
        </select>

        <select
          className="border p-3 rounded"
          onChange={(e) => setPlan(e.target.value)}
        >
          <option>Select Plan</option>
          <option value="Free">Free</option>
              <option value="Plus">Plus</option>
              <option value="Team">Team</option>
              <option value="Business">Business</option>
              <option value="Enterprise">Enterprise</option>
        </select>

        <input
          type="number"
          placeholder="Monthly Spend ($)"
          className="border p-3 rounded"
          onChange={(e) => setSpend(e.target.value)}
        />

        <input
          type="number"
          placeholder="Number of Seats"
          className="border p-3 rounded"
          onChange={(e) => setSeats(e.target.value)}
        />

        <button
          className="bg-black text-white p-3 rounded-xl"
          onClick={() => {
            alert(
              `Tool: ${tool}
Plan: ${plan}
Spend: $${spend}
Seats: ${seats}`
            );
          }}
        >
          Generate Audit
        </button>

      </div>

    </main>
  );
}