<script setup lang="ts">
definePage({
  type: 'home',
  style: {
    navigationBarTitleText: '首页',
  },
})

onLoad(() => {
  uni.hideTabBar()
})
</script>

<template>
  <view>
    <view>首页</view>
  </view>
</template>
