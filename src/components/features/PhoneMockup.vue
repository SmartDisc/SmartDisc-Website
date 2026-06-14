<script setup>
defineProps({
  src: { type: String, required: true },
  alt: { type: String, default: '' },
  width: { type: Number, default: 280 },
})
</script>

<template>
  <div class="phone-mockup" :style="{ width: width + 'px' }">
    <div class="phone-mockup__island" />
    <div class="phone-mockup__screen">
      <img :src="src" :alt="alt" loading="lazy" decoding="async" />
    </div>
    <div class="phone-mockup__btn phone-mockup__btn--side" />
    <div class="phone-mockup__btn phone-mockup__btn--vol-up" />
    <div class="phone-mockup__btn phone-mockup__btn--vol-down" />
  </div>
</template>

<style scoped>
.phone-mockup {
  position: relative;
  aspect-ratio: 9 / 19.5;
  border-radius: 13.5%/6.5%;
  padding: 3.2%;
  background: linear-gradient(160deg, #2b2f36, #0d0f12);
  box-shadow:
    0 40px 80px rgba(10, 28, 61, .35),
    inset 0 0 0 1.5px rgba(255, 255, 255, .12);
}
.phone-mockup__screen {
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 11%/5.4%;
  overflow: hidden;
  background: var(--ink);
}
.phone-mockup__screen img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
.phone-mockup__island {
  position: absolute;
  top: 2.6%;
  left: 50%;
  transform: translateX(-50%);
  width: 28%;
  height: 3.4%;
  border-radius: 100px;
  background: #050506;
  z-index: 2;
}
.phone-mockup__btn {
  position: absolute;
  background: linear-gradient(160deg, #2b2f36, #0d0f12);
  border-radius: 3px;
}
.phone-mockup__btn--side {
  right: -0.6%;
  top: 22%;
  width: 1.2%;
  height: 9%;
  border-radius: 0 3px 3px 0;
}
.phone-mockup__btn--vol-up {
  left: -0.6%;
  top: 16%;
  width: 1.2%;
  height: 6%;
  border-radius: 3px 0 0 3px;
}
.phone-mockup__btn--vol-down {
  left: -0.6%;
  top: 24%;
  width: 1.2%;
  height: 6%;
  border-radius: 3px 0 0 3px;
}
</style>
