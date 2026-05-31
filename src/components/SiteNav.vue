<script setup>
import { useRoute, RouterLink } from 'vue-router'

const route = useRoute()

const links = [
  { to: '/',         label: 'Home'     },
  { to: '/products', label: 'Products' },
  { to: '/about',    label: 'About'    },
  { to: '/faq',      label: 'FAQ'      },
  { to: '/contact',  label: 'Contact'  },
]

function isActive(to) {
  return to === '/' ? route.path === '/' : route.path.startsWith(to)
}
</script>

<template>
  <div class="lp-nav-wrap">
    <nav class="lp-nav" aria-label="Primary">
      <RouterLink to="/" class="lp-nav__brand">
        <img class="lp-nav__mark" src="/logo.png" alt="" />
        <span class="lp-nav__name">SMARTDISC</span>
      </RouterLink>
      <div class="lp-nav__links">
        <RouterLink
          v-for="l in links" :key="l.to"
          :to="l.to"
          :class="['lp-nav__link', isActive(l.to) && 'is-active']">
          {{ l.label }}
        </RouterLink>
      </div>
    </nav>
  </div>
</template>
