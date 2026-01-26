import AutoImport from 'unplugin-auto-import/vite'

export const UnpluginAutoImport = AutoImport({
  imports: [
    'vue',
    'uni-app',
    {
      unocss: ['uno'],
    },
    'pinia',
  ],
  dts: 'dts/auto-import.d.ts',
  dirs: [],
  ignore: [],
  eslintrc: { enabled: true },
  vueTemplate: true,
})
