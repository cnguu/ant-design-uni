import type { Palette } from '@ant-design/colors/es/types'
import {
  blue,
  cyan,
  geekblue,
  gold,
  gray,
  green,
  grey,
  lime,
  magenta,
  orange,
  purple,
  red,
  volcano,
  yellow,
} from '@ant-design/colors'
import { isMp } from '@uni-helper/uni-env'
import { presetUni } from '@uni-helper/unocss-preset-uni'
import presetLegacyCompat from '@unocss/preset-legacy-compat'
import { defineConfig, transformerDirectives, transformerVariantGroup } from 'unocss'

// 转换 Ant Design 颜色数组为 UnoCSS 所需的对象结构
function convertAntdColors(colors: Record<string, string[]>) {
  const converted: Record<string, Record<string, string>> = {}
  for (const [colorName, shades] of Object.entries(colors)) {
    converted[colorName] = shades.reduce(
      (acc, shade, index) => {
        acc[`${index + 1}`] = shade
        return acc
      },
      {} as Record<string, string>,
    )
  }
  return converted
}

// 转换色板为 UnoCSS 所需要的对象结构
function convertThemeColors(key: string, colors: Palette) {
  return colors.reduce((acc, color, index) => {
    if (!Number.isNaN(index)) {
      acc[`${key}-${index + 1}`] = color
    }
    return acc
  }, {} as Record<string, string>)
}

export default defineConfig({
  shortcuts: [],
  rules: [
    [
      /^safe-area-inset-(top|right|bottom|left)$/,
      ([, d]) => {
        return [
          [`padding-${d}`, 0],
          [`padding-${d}`, `constant(safe-area-inset-${d})`],
          [`padding-${d}`, `env(safe-area-inset-${d})`],
        ]
      },
    ],
  ],
  theme: {
    colors: {
      ...convertAntdColors({
        blue,
        cyan,
        geekblue,
        gold,
        gray,
        green,
        grey,
        lime,
        magenta,
        orange,
        purple,
        red,
        volcano,
        yellow,
      }),

      primary: blue[5],
      ...convertThemeColors('primary', blue),
      success: green[5],
      ...convertThemeColors('success', green),
      warning: gold[5],
      ...convertThemeColors('warning', gold),
      error: red[4],
      ...convertThemeColors('error', red),
    },
    fontWeight: {
      thin: 100,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      heavy: 900,
      black: 950,
    },
  },
  presets: [
    presetUni({
      uno: true,
      remRpx: isMp,
      attributify: false,
    }),
    presetLegacyCompat({
      commaStyleColorFunction: true,
      legacyColorSpace: true,
    }),
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
  content: {
    pipeline: {
      exclude: ['node_modules', 'dist', 'uni_modules', 'unpackage'],
    },
  },
})
