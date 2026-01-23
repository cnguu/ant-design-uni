import { isArr, isNumber, isObject, isString } from './is.ts'

export type ClassValue
  = | ClassArray
    | ClassDictionary
    | string
    | number
    | null
    | boolean
    | undefined
interface ClassDictionary { [id: string]: any }
type ClassArray = ClassValue[]

function toVal(mix: ClassValue): string {
  let k: number
  let y: string
  let str: string = ''
  if (isString(mix) || isNumber(mix)) {
    str += mix
  }
  else if (isObject(mix)) {
    if (isArr(mix)) {
      const len = mix.length
      for (k = 0; k < len; k++) {
        if (mix[k]) {
          y = toVal(mix[k])
          if (y) {
            str && (str += ' ')
            str += y
          }
        }
      }
    }
    else {
      for (y in mix) {
        if (mix[y]) {
          str && (str += ' ')
          str += y
        }
      }
    }
  }
  return str
}

export function clsx(...inputs: ClassValue[]): string {
  let i: number = 0
  let tmp: ClassValue
  let x: string
  let str: string = ''
  const len = inputs.length
  for (; i < len; i++) {
    tmp = inputs[i]
    if (tmp) {
      x = toVal(tmp)
      if (x) {
        str && (str += ' ')
        str += x
      }
    }
  }
  return str
}
