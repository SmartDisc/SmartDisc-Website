<script setup>
defineProps({
  ondark: Boolean,
  gold: Boolean,
})
</script>

<template>
  <div :class="['lp-eyebrow', ondark && 'lp-eyebrow--ondark', gold && 'lp-eyebrow--gold']">
    <span class="dot" />
    <slot />
  </div>
</template>
