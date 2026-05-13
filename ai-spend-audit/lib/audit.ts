export function calculateAudit(
  tool: string,
  plan: string,
  seats: number,
  data?: any
) {
  let recommendation = "";
  let savings = 0;
  let score = 80;

  const suggestions: string[] = [];

  if (tool === "chatgpt" && plan === "team" && seats <= 2) {
    recommendation = "Downgrade to Plus";
    savings = 10 * seats;
    suggestions.push("Switch ChatGPT Team to Plus Plan");
  }

  if (tool === "cursor" && plan === "business" && seats <= 3) {
    recommendation = "Use Pro Plan";
    savings = 20 * seats;
    suggestions.push("Downgrade Cursor Business Plan");
  }

  if (suggestions.length === 0) {
    suggestions.push("No major savings found");
  }

  return {
    recommendation,
    savings,
    score,
    suggestions,
    data,
  };
}