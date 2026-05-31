<script setup>
const props = defineProps({
  platform: { type: String, default: 'ios' },
  small: Boolean,
  comingSoon: { type: Boolean, default: true },
})
const h = computed(() => props.small ? 44 : 56)
const labelTop = computed(() => props.comingSoon
  ? (props.platform === 'ios' ? 'Coming soon to' : 'Coming soon to')
  : (props.platform === 'ios' ? 'Download on the' : 'Get it on'))
const name = computed(() => props.platform === 'ios' ? 'App Store' : 'Google Play')

import { computed } from 'vue'
</script>

<template>
  <a class="lp-store-badge" href="#" aria-disabled="comingSoon"
     :style="{
       height: h + 'px',
       display: 'inline-flex',
       alignItems: 'center',
       gap: small ? '10px' : '12px',
       padding: `0 ${small ? 14 : 18}px`,
       borderRadius: '12px',
       background: '#000',
       color: '#fff',
       fontFamily: '-apple-system, system-ui, sans-serif',
       border: '1px solid rgba(255,255,255,.08)',
       boxShadow: '0 6px 18px rgba(10,28,61,.18), inset 0 1px 0 rgba(255,255,255,.08)',
       transition: 'transform 160ms cubic-bezier(.22,1,.36,1), box-shadow 260ms',
       textDecoration: 'none',
       minWidth: small ? '140px' : '180px',
       cursor: comingSoon ? 'default' : 'pointer',
       position: 'relative',
       overflow: 'hidden',
     }">
    <!-- Apple glyph -->
    <svg v-if="platform === 'ios'" :width="small ? 22 : 28" :height="small ? 22 : 28" viewBox="0 0 24 24" fill="#fff" aria-hidden="true">
      <path d="M16.4 12.7c-.02-2.18 1.78-3.23 1.86-3.28-1.02-1.49-2.6-1.7-3.16-1.72-1.34-.14-2.62.79-3.3.79-.69 0-1.74-.78-2.86-.76-1.47.02-2.83.86-3.59 2.18-1.53 2.66-.39 6.6 1.1 8.77.73 1.06 1.6 2.25 2.74 2.21 1.1-.04 1.51-.71 2.84-.71 1.32 0 1.7.71 2.86.69 1.18-.02 1.93-1.07 2.65-2.14.84-1.22 1.18-2.4 1.2-2.47-.03-.01-2.29-.88-2.31-3.49zM14.3 6.16c.6-.73 1.01-1.76.9-2.78-.87.04-1.94.58-2.56 1.31-.56.65-1.05 1.69-.92 2.7.97.07 1.97-.49 2.58-1.23z"/>
    </svg>
    <!-- Play glyph -->
    <svg v-else :width="small ? 22 : 28" :height="small ? 22 : 28" viewBox="0 0 24 24" aria-hidden="true">
      <defs>
        <linearGradient id="pg1" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#00d4ff"/><stop offset="1" stop-color="#0090ff"/></linearGradient>
        <linearGradient id="pg2" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffd60a"/><stop offset="1" stop-color="#ffb000"/></linearGradient>
        <linearGradient id="pg3" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ff5d4d"/><stop offset="1" stop-color="#c0302d"/></linearGradient>
        <linearGradient id="pg4" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#34c759"/><stop offset="1" stop-color="#0a8b3a"/></linearGradient>
      </defs>
      <path d="M4 3v18l9-9z" fill="url(#pg1)"/>
      <path d="M13 12l5.6-5.6c.5.3.9.7 1.1 1.3.3.8 0 1.6-.7 2L13 12z" fill="url(#pg2)"/>
      <path d="M13 12l-9 9c.4.2.9.2 1.4 0L18.6 14 13 12z" fill="url(#pg3)"/>
      <path d="M13 12L5.4 3c-.5-.2-1-.2-1.4 0l9 9z" fill="url(#pg4)"/>
    </svg>
    <span :style="{ display:'flex', flexDirection:'column', lineHeight:1.1, textAlign:'left' }">
      <span :style="{ fontSize: small ? '9px' : '10px', opacity:.8, fontWeight:500, letterSpacing:'.02em' }">{{ labelTop }}</span>
      <span :style="{ fontSize: small ? '16px' : '19px', fontWeight:600, letterSpacing:'-.01em', marginTop:'2px' }">{{ name }}</span>
    </span>
    <span v-if="comingSoon" :style="{
      position:'absolute', top:'6px', right:'8px',
      fontSize: small ? '9px' : '10px', fontWeight:600, letterSpacing:'.06em', textTransform:'uppercase',
      padding:'2px 6px', borderRadius:'4px',
      background:'linear-gradient(135deg,#f0e3c0,#dec38c,#b8924f)',
      color:'#4a3712',
    }"></span>
  </a>
</template>
