<script setup lang="ts">
definePage({
  style: {
    navigationBarTitleText: '首页',
  },
})

onLoad(() => {
  uni.hideTabBar()
})
</script>

<template>
  <view>首页</view>
</template>
