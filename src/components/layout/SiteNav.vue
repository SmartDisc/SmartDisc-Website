<script setup>
import { ref, watch } from 'vue'
import { useRoute, RouterLink } from 'vue-router'

const route = useRoute()
const menuOpen = ref(false)

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

watch(() => route.path, () => { menuOpen.value = false })
</script>

<template>
  <div class="lp-nav-wrap">
    <nav class="lp-nav" aria-label="Primary">
      <div class="lp-nav__links">
        <RouterLink
          v-for="l in links" :key="l.to"
          :to="l.to"
          :class="['lp-nav__link', isActive(l.to) && 'is-active']">
          {{ l.label }}
        </RouterLink>
      </div>
      <button
        class="lp-nav__hamburger"
        :class="{ 'is-open': menuOpen }"
        :aria-label="menuOpen ? 'Close menu' : 'Open menu'"
        :aria-expanded="String(menuOpen)"
        @click="menuOpen = !menuOpen">
        <span /><span /><span />
      </button>
    </nav>
    <div class="lp-mobile-menu" :class="{ 'is-open': menuOpen }" :aria-hidden="String(!menuOpen)">
      <RouterLink
        v-for="l in links" :key="l.to"
        :to="l.to"
        :class="['lp-mobile-menu__link', isActive(l.to) && 'is-active']">
        {{ l.label }}
      </RouterLink>
    </div>
  </div>
</template>
