/**
 * 简单深拷贝
 */
export function clonePlain<T>(obj: T): T {
  return JSON.parse(JSON.stringify(obj))
}
