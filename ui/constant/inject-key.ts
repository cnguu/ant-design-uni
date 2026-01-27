import type { PropDefaults } from '../index.ts'
import type { InjectionKey } from 'vue'

export const PROP_DEFAULTS_KEY: InjectionKey<PropDefaults> = Symbol('PROP_DEFAULTS')
