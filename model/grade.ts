export const grade = ["FIRST", "SECOND", "THIRD"] as const;
export type GradeType = typeof grade[number];
