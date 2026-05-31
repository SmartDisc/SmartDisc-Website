<script setup>
import StoreBadge from './StoreBadge.vue'
defineProps({
  small: Boolean,
  comingSoon: { type: Boolean, default: true },
  justify: { type: String, default: 'flex-start' },
})
</script>

<template>
  <div :style="{ display:'flex', gap:'12px', justifyContent:justify, flexWrap:'wrap' }">
    <StoreBadge platform="ios" :small="small" :coming-soon="comingSoon" />
    <StoreBadge platform="android" :small="small" :coming-soon="comingSoon" />
  </div>
</template>
