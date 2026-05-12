export function calculateAudit(
  tool: string,
  plan: string,
  seats: number
) {
  let recommendation = "";
  let savings = 0;

  if (tool === "chatgpt" && plan === "team" && seats <= 2) {
    recommendation = "Downgrade to Plus";
    savings = 10 * seats;
  }

  if (tool === "cursor" && plan === "business" && seats <= 3) {
    recommendation = "Use Pro Plan";
    savings = 20 * seats;
  }

  return {
    recommendation,
    savings,
  };
}