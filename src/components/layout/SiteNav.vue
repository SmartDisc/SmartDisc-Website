<script setup>
import { ref, watch, onMounted, onBeforeUnmount, nextTick } from 'vue'
import { useRoute, RouterLink } from 'vue-router'

const route = useRoute()
const menuOpen = ref(false)
const menuRef = ref(null)
const hamburgerRef = ref(null)

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

function toggleMenu() {
  menuOpen.value = !menuOpen.value
}

// `restoreFocus` is only set for user-initiated closes (Escape / backdrop
// click) so a route-change close doesn't yank focus away from the new page.
function closeMenu(restoreFocus = false) {
  if (!menuOpen.value) return
  menuOpen.value = false
  if (restoreFocus) hamburgerRef.value?.focus()
}

function onKeydown(e) {
  if (e.key === 'Escape' && menuOpen.value) closeMenu(true)
}

watch(() => route.path, () => { menuOpen.value = false })

watch(menuOpen, async (open) => {
  // Lock/restore body scroll whenever the overlay opens or closes, no
  // matter what triggered the close, so it can never get stuck locked.
  document.body.style.overflow = open ? 'hidden' : ''
  if (open) {
    await nextTick()
    menuRef.value?.focus()
  }
})

onMounted(() => window.addEventListener('keydown', onKeydown))
onBeforeUnmount(() => {
  window.removeEventListener('keydown', onKeydown)
  document.body.style.overflow = ''
})
</script>

<template>
  <div class="lp-nav-wrap">
    <nav class="lp-nav" aria-label="Primary">
      <RouterLink to="/" class="lp-nav__brand" :class="{ 'is-hidden': menuOpen }" aria-label="SmartDisc — Home">
        <img class="lp-nav__mark" src="/logo-blue.png" alt="" />
      </RouterLink>
      <div class="lp-nav__links">
        <RouterLink
          v-for="l in links" :key="l.to"
          :to="l.to"
          :class="['lp-nav__link', isActive(l.to) && 'is-active']">
          {{ l.label }}
        </RouterLink>
      </div>
      <button
        ref="hamburgerRef"
        class="lp-nav__hamburger"
        :class="{ 'is-open': menuOpen }"
        :aria-label="menuOpen ? 'Close menu' : 'Open menu'"
        :aria-expanded="String(menuOpen)"
        aria-controls="lp-mobile-menu"
        @click="toggleMenu">
        <span /><span /><span />
      </button>
    </nav>
    <div
      id="lp-mobile-menu"
      ref="menuRef"
      class="lp-mobile-menu"
      :class="{ 'is-open': menuOpen }"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile navigation"
      :aria-hidden="String(!menuOpen)"
      :inert="!menuOpen"
      tabindex="-1"
      @click.self="closeMenu(true)">
      <RouterLink
        v-for="(l, i) in links" :key="l.to"
        :to="l.to"
        :style="{ '--i': i }"
        :class="['lp-mobile-menu__link', isActive(l.to) && 'is-active']">
        {{ l.label }}
      </RouterLink>
    </div>
  </div>
</template>
