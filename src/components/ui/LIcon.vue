<script setup>
import {
  Zap, Users,
  QrCode, BarChart3, List, Share2, ChevronLeft, Check, Info, Mail,
  Star, CalendarClock, Phone,
} from 'lucide-vue-next'

const props = defineProps({
  name:   { type: String, required: true },
  size:   { type: Number, default: 16 },
  stroke: { type: Number, default: 1.75 },
  fill:   { type: String, default: 'none' },
})

const icons = {
  'zap':          Zap,
  'users':        Users,
  'qr-code':      QrCode,
  'bar-chart-3':  BarChart3,
  'list':         List,
  'share-2':      Share2,
  'chevron-left': ChevronLeft,
  'check':        Check,
  'info':         Info,
  'mail':         Mail,
  'star':         Star,
  'calendar-clock': CalendarClock,
  'phone':        Phone,
}
</script>

<template>
  <span style="display:inline-flex;line-height:0;">
    <component :is="icons[name]" :size="size" :stroke-width="stroke" :fill="fill" />
  </span>
</template>
