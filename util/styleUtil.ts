/***********
 * 样式相关 *
 ***********/
import { FastColor } from '@ant-design/fast-color'

/**
 * 获取增加透明度的颜色
 * @param color 需要透明的颜色
 * @param opacity 透明度 0~1
 */
export const getOpacityColor = (color: string, opacity: number = 1): string => {
  const fastColor = new FastColor(color)
  fastColor.a = opacity
  return fastColor.toRgbString()
}
