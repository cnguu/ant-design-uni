import type {
  ButtonOnAddgroupappEvent,
  ButtonOnAgreeprivacyauthorizationEvent,
  ButtonOnChooseaddressEvent,
  ButtonOnChooseavatarEvent,
  ButtonOnChooseinvoicetitleEvent,
  ButtonOnErrorEvent,
  ButtonOnGetphonenumberEvent,
  ButtonOnLaunchappEvent,
  ButtonOnLoginEvent,
  ButtonOnOpensettingEvent,
  ButtonOnSubscribeEvent,
} from '@uni-helper/uni-types'
import type { CommonProps, PresetColorType } from '../../types'

export interface AButtonProps extends CommonProps {
  /**
   * 将按钮宽度调整为其父宽度的选项
   */
  block?: boolean
  /**
   * 设置按钮的颜色
   */
  color?: 'default' | 'primary' | 'danger' | PresetColorType
  /**
   * 设置危险按钮，当设置 color 时会以后者为准
   */
  danger?: boolean
  /**
   * 设置按钮失效状态
   */
  disabled?: boolean
  /**
   * 幽灵属性，使按钮背景透明
   */
  ghost?: boolean
  /**
   * 设置按钮的图标名称
   */
  iconName?: string
  /**
   * 设置按钮图标组件的位置
   */
  iconPlacement?: 'start' | 'end'
  /**
   * 设置按钮载入状态
   */
  loading?: boolean
  /**
   * 设置按钮形状
   */
  shape?: 'default' | 'circle' | 'round'
  /**
   * 设置按钮大小
   */
  size?: 'large' | 'middle' | 'small'
  /**
   * 设置按钮类型，当设置 variant 与 color 时以后者为准
   */
  type?: 'default' | 'primary' | 'dashed' | 'link' | 'text'
  /**
   * 设置按钮的变体
   */
  variant?: 'outlined' | 'dashed' | 'solid' | 'filled' | 'text' | 'link'
}

export interface AButtonEmits {
  (e: 'click', event: PointerEvent): void
  (e: 'getphonenumber', event: ButtonOnGetphonenumberEvent): void
  (e: 'getuserinfo', event: any): void
  (e: 'error', event: ButtonOnErrorEvent): void
  (e: 'opensetting', event: ButtonOnOpensettingEvent): void
  (e: 'launchapp', event: ButtonOnLaunchappEvent): void
  (e: 'contact', event: any): void
  (e: 'chooseavatar', event: ButtonOnChooseavatarEvent): void
  (e: 'agreeprivacyauthorization', event: ButtonOnAgreeprivacyauthorizationEvent): void
  (e: 'addgroupapp', event: ButtonOnAddgroupappEvent): void
  (e: 'chooseaddress', event: ButtonOnChooseaddressEvent): void
  (e: 'chooseinvoicetitle', event: ButtonOnChooseinvoicetitleEvent): void
  (e: 'subscribe', event: ButtonOnSubscribeEvent): void
  (e: 'login', event: ButtonOnLoginEvent): void
  (e: 'im', event: any): void
}

export interface AButtonSlots {
  default?: (props: Record<string, never>) => any
}
