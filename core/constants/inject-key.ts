import type { InjectionKey } from 'vue'
import type { PropDefaults } from '../index.ts'

export const PROP_DEFAULTS_KEY: InjectionKey<PropDefaults> = Symbol('PROP_DEFAULTS')
