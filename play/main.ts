import type { App } from '@vue/runtime-core'

import { createSSRApp } from 'vue'

import AppComp from './App.vue'

import 'virtual:uno.css'

export function createApp(): { app: App } {
  const app = createSSRApp(AppComp)
  return {
    app,
  }
}
