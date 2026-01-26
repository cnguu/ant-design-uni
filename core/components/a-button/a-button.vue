<script setup lang="ts">
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
import type {
  AButtonEmits,
  AButtonProps,
  AButtonSlots,
} from './type.ts'
import { computed } from 'vue'
import { PROP_DEFAULTS } from '../../constants'
import { BemHelper, clsx, stylex } from '../../utils'

defineOptions({
  options: {
    virtualHost: true,
    styleIsolation: 'shared',
  },
})

const props = withDefaults(defineProps<AButtonProps>(), PROP_DEFAULTS.button)

const emits = defineEmits<AButtonEmits>()

defineSlots<AButtonSlots>()

const bem = new BemHelper('button')

const buttonClass = computed<string>(() => {
  return clsx(
    bem.b(),
    bem.m(props.type),
    bem.m('block', props.block),
    props.class,
  )
})

const buttonStyle = computed<string>(() => {
  return stylex(
    props.style,
  )
})

function onClick(event: PointerEvent) {
  emits('click', event)
}

function onGetPhoneNumber(event: ButtonOnGetphonenumberEvent) {
  emits('getphonenumber', event)
}

function onGetUserinfo(event: any) {
  emits('getuserinfo', event)
}

function onError(event: ButtonOnErrorEvent) {
  emits('error', event)
}

function onOpenSetting(event: ButtonOnOpensettingEvent) {
  emits('opensetting', event)
}

function onLaunchApp(event: ButtonOnLaunchappEvent) {
  emits('launchapp', event)
}

function onContact(event: any) {
  emits('contact', event)
}

function onChooseAvatar(event: ButtonOnChooseavatarEvent) {
  emits('chooseavatar', event)
}

function onAgreePrivacyAuthorization(event: ButtonOnAgreeprivacyauthorizationEvent) {
  emits('agreeprivacyauthorization', event)
}

function onAddGroupApp(event: ButtonOnAddgroupappEvent) {
  emits('addgroupapp', event)
}

function onChooseAddress(event: ButtonOnChooseaddressEvent) {
  emits('chooseaddress', event)
}

function onChooseInvoiceTitle(event: ButtonOnChooseinvoicetitleEvent) {
  emits('chooseinvoicetitle', event)
}

function onSubscribe(event: ButtonOnSubscribeEvent) {
  emits('subscribe', event)
}

function onLogin(event: ButtonOnLoginEvent) {
  emits('login', event)
}

function onIm(event: any) {
  emits('im', event)
}
</script>

<template>
  <button
    :class="buttonClass"
    :style="buttonStyle"
    :hover-class="bem.m('hover')"
    :disabled="disabled || loading"
    @click="onClick"
    @getphonenumber="onGetPhoneNumber"
    @getuserinfo="onGetUserinfo"
    @error="onError"
    @opensetting="onOpenSetting"
    @launchapp="onLaunchApp"
    @contact="onContact"
    @chooseavatar="onChooseAvatar"
    @agreeprivacyauthorization="onAgreePrivacyAuthorization"
    @addgroupapp="onAddGroupApp"
    @chooseaddress="onChooseAddress"
    @chooseinvoicetitle="onChooseInvoiceTitle"
    @subscribe="onSubscribe"
    @login="onLogin"
    @im="onIm"
  >
    <slot />
  </button>
</template>
