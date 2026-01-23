import type { PropDefaults } from '../types'
import { PROP_DEFAULTS } from '../constants'
import { isDefined, isPlainObject } from './is.ts'

/**
 * 合并全局配置
 */
function mergeGlobalConfig<T extends PropDefaults>(source: T, target: Partial<T>): void {
  Object.keys(target).forEach((_key) => {
    const key = _key as keyof T
    const sourceValue = source[key]
    const targetValue = target[key]
    if (isDefined(targetValue)) {
      if (!isPlainObject(sourceValue)) {
        source[key] = targetValue
      }
      else if (isPlainObject(targetValue)) {
        mergeGlobalConfig(sourceValue as T, targetValue as Partial<T>)
      }
    }
  })
}

export function setupGlobalConfig(...args: PropDefaults[]): void {
  args.forEach((arg) => {
    mergeGlobalConfig(PROP_DEFAULTS, arg)
  })
}
