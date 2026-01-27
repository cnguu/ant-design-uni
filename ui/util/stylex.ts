import { isArr, isDefined, isObject, isString } from './is'

export type StyleValue = StyleArray | StyleDictionary | string | null | boolean | undefined
interface StyleDictionary {
  [key: string]: string | number | null | undefined | boolean
}
type StyleArray = StyleValue[]

/**
 * 驼峰转短横线：backgroundColor -> background-color
 * 同时处理 vendor 前缀，如 Webkit -> -webkit
 */
function toKebab(str: string): string {
  return str.replace(/[A-Z]/g, (m) => `-${m.toLowerCase()}`).replace(/^ms-/, '-ms-')
}

function toVal(mix: StyleValue): string {
  let k: number
  let y: any
  let str: string = ''
  if (isString(mix)) {
    str += mix
  } else if (isObject(mix)) {
    if (isArr(mix)) {
      const len = mix.length
      for (k = 0; k < len; k++) {
        if (mix[k]) {
          const val = toVal(mix[k])
          if (val) {
            if (str) {
              str += str.endsWith(';') ? '' : ';'
            }
            str += val
          }
        }
      }
    } else {
      for (y in mix) {
        const val = mix[y]
        if (isDefined(val) && val !== false) {
          if (str) {
            str += str.endsWith(';') ? '' : ';'
          }
          str += `${toKebab(y)}:${val}`
        }
      }
    }
  }
  return str
}

/**
 * 生成内联样式字符串
 */
export function stylex(...inputs: StyleValue[]): string {
  let i: number = 0
  let x: string
  let str: string = ''
  const len = inputs.length
  for (; i < len; i++) {
    const tmp = inputs[i]
    if (tmp) {
      x = toVal(tmp)
      if (x) {
        if (str) {
          str += str.endsWith(';') ? '' : ';'
        }
        str += x
      }
    }
  }
  return str ? (str.endsWith(';') ? str : `${str};`) : ''
}
