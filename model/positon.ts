export const position = ["FRONT_END", "BACK_END", "IOS", "ANDROID", "AI", "EMBEDDED", "GAME"] as const;
export type PositionType = typeof position[number]  