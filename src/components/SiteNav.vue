<script setup>
import { RouterLink } from 'vue-router'
import LIcon from './LIcon.vue'

defineProps({ active: { type: String, default: 'home' } })

const links = [
  { id: 'home',     label: 'Home',     to: '/' },
  { id: 'products', label: 'Products', to: '/products' },
  { id: 'about',    label: 'About',    to: '/about' },
  { id: 'faq',      label: 'FAQ',      to: '/faq' },
  { id: 'contact',  label: 'Contact',  to: '/contact' },
]
</script>

<template>
  <div class="lp-nav-wrap">
    <nav class="lp-nav" aria-label="Primary">
      <RouterLink to="/" class="lp-nav__brand">
        <img class="lp-nav__mark" src="../../public/logo.png" alt="" />
        <span class="lp-nav__name">SMART DISC</span>
      </RouterLink>
      <div class="lp-nav__links">
        <RouterLink
          v-for="l in links" :key="l.id"
          :to="l.to"
          :class="['lp-nav__link', active === l.id && 'is-active']">
          {{ l.label }}
        </RouterLink>
      </div>
      <div class="lp-nav__cta">
        <RouterLink class="lp-btn lp-btn--gold lp-btn--sm" to="/products">
          Pre-order
        </RouterLink>
      </div>
    </nav>
  </div>
</template>
