export async function generateSummary(
  tool: string,
  plan: string,
  savings: number
) {

  return `
  Your ${tool} ${plan} setup has optimization opportunities.

  Estimated monthly savings: $${savings}.

  You can reduce unnecessary AI spending by switching
  to lower-cost plans and discounted AI infrastructure credits.

  SpendWise AI recommends reviewing your team usage
  and removing overpowered plans for small teams.
  `;
}