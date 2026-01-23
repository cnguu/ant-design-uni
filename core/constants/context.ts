import type { LooseRequired } from '@vue/shared'
import type { AButtonProps } from '../components/a-button'
import type { InferDefaults } from '../types'

export interface PropDefaults {
  button: InferDefaults<LooseRequired<AButtonProps>>
}

export const PROP_DEFAULTS: PropDefaults = {
  button: {
    block: false,
    color: 'default',
    danger: false,
    disabled: false,
    ghost: false,
    iconName: '',
    iconPlacement: 'start',
    loading: false,
    shape: 'default',
    size: 'middle',
    type: 'default',
    variant: 'outlined',
  },
}
