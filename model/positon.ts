export const position = [
  "FRONTEND",
  "BACKEND",
  "IOS",
  "ANDROID",
  "AI",
  "EMBEDDED",
  "GAME",
] as const;
export type PositionType = typeof position[number];
