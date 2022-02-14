import { Context } from "./deps.ts";

export function createServerTimingMiddleware() {
  const timingValues = {} as Record<string, number>
  return {
    start: (key: string) => timingValues[key] = Date.now(),
    end: (key: string) => timingValues[key] = Date.now() - timingValues[key],
    serverTimingMiddleware: async (context: Context, next: () => Promise<unknown>) => {
      await next();
      const result = Object.keys(timingValues).reduce((acc: string, key: string) => {
        const timing = timingValues[key]
        return acc + `${key};dur=${timing}, `
      }, '')
      context.response.headers.set("Server-Timing", result);
    }
  }

}
