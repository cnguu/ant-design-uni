import type { ClassValue, StyleValue } from '../util'

export interface CommonProps {
  class?: ClassValue
  style?: StyleValue
}

export type PresetColorType =
  | 'blue'
  | 'purple'
  | 'cyan'
  | 'green'
  | 'magenta'
  | 'pink'
  | 'red'
  | 'orange'
  | 'yellow'
  | 'volcano'
  | 'geekblue'
  | 'lime'
  | 'gold'
