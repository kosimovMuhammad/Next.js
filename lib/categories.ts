export const CATEGORIES = {
  news: "News",
  transfer: "Transfers",
  "match-report": "Match Reports",
  analysis: "Analysis",
  interview: "Interviews",
} as const;

export type Category = keyof typeof CATEGORIES;
