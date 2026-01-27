import type { AButtonProps } from '../component/a-button'
import type { InferDefaults } from '../type'
import type { LooseRequired } from '@vue/shared'

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
