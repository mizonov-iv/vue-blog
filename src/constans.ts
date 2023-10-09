export const periods = ["today", "this week", "this month"] as const
export type Period = typeof periods[number];