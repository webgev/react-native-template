export function safeJsonParse<T>(str?: string): T | null {
  try {
    return str ? JSON.parse(str) : null;
  } catch (e) {
    return null;
  }
}
