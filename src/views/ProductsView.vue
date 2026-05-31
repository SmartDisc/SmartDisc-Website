<script setup>
import { RouterLink } from 'vue-router'
import { useScrollReveal } from '@/composables/useScrollReveal'
import Atmosphere from '@/components/Atmosphere.vue'
import SiteNav from '@/components/SiteNav.vue'
import SiteFooter from '@/components/SiteFooter.vue'
import Eyebrow from '@/components/Eyebrow.vue'
import CheckIcon from '@/components/CheckIcon.vue'
import LIcon from '@/components/LIcon.vue'
import MobileApp from '@/components/MobileApp.vue'

useScrollReveal()

const products = [
  {
    id: 'disc', cat: 'Smart Disc', name: 'SmartDisc Ultimate', featured: true,
    tag: 'The flagship 175 g sensor disc. WFDF-tolerant flight, lifetime app access, ships paired.',
    price: '€129', priceSuffix: 'Pre-order today, billed when it ships', status: 'preorder',
    highlights: ['175 g · WFDF flight tolerance', 'Distance, speed and spin per throw', '~10,000 throws per charge', 'Includes lifetime app access'],
    art: 'disc',
  },
  {
    id: 'pro', cat: 'Smart Disc · Pro', name: 'SmartDisc Pro', featured: false,
    tag: 'Tournament-spec edition with a higher-resolution gyroscope and a matte championship-gold finish.',
    price: '€169', priceSuffix: 'Pre-order today, billed when it ships', status: 'preorder',
    highlights: ['2x faster sample rate', 'Tighter manufacturing tolerance', 'Matte championship-gold finish', 'Hard travel sleeve included'],
    art: 'disc-pro',
  },
  {
    id: 'app', cat: 'Mobile app', name: 'SmartDisc for iOS & Android', featured: false,
    tag: 'The companion app — the only way to read what your disc captured. Pairs in seconds, no account required.',
    free: true, status: 'soon',
    highlights: ['iOS 17 and Android 13 (or newer)', 'Read-only sharing with teammates', 'CSV export of every throw', 'Free for the life of the disc'],
    art: 'phone',
  },
  {
    id: 'dock', cat: 'Accessory', name: 'Inductive Charging Dock', featured: false,
    tag: 'Charges up to four discs at once. Lives quietly on a shelf and takes the lowest-friction route to a full battery.',
    price: '€49', priceSuffix: 'Pre-order today, billed when it ships', status: 'preorder',
    highlights: ['4-disc inductive charging', 'USB-C powered', 'Anti-slip silicone base', 'Pairs with v1 and Pro discs'],
    art: 'dock',
  },
  {
    id: 'case', cat: 'Accessory', name: 'Field Case · 2-disc', featured: false,
    tag: 'A weatherproof padded case that protects two discs and a charge cable. Slips into any kit bag without comment.',
    price: '€39', priceSuffix: 'Pre-order today, billed when it ships', status: 'preorder',
    highlights: ['Holds 2 discs + cable', 'Weatherproof shell', 'Internal mesh pocket', 'Recycled-polyester lining'],
    art: 'case',
  },
  {
    id: 'bundle', cat: 'Team bundle', name: 'Squad Pack — 5 discs + dock + case', featured: true,
    tag: 'Everything a starting line needs, at a quieter team-pack price. Each disc pre-paired to the captain\'s account.',
    price: '€599', priceSuffix: 'Save €85 vs. individually', status: 'preorder',
    highlights: ['5 × SmartDisc Ultimate', '1 × Inductive Charging Dock', '1 × Field Case', 'Captain-paired out of the box'],
    art: 'bundle',
  },
]

const compareRows = [
  ['Weight', '175 g', '175 g', '—', '—'],
  ['Sample rate', 'Standard', '2× standard', '—', '—'],
  ['Sensor finish', 'Pearl cream', 'Championship matte', '—', '—'],
  ['Lifetime app access', true, true, 'Included', '—'],
  ['Inductive charging', true, true, 'Adapter', '—'],
  ['Hard travel sleeve', false, true, '—', '—'],
]
const compareCols = [
  { name: 'Ultimate', price: 'From €129' },
  { name: 'Pro', price: 'From €169' },
  { name: 'App', price: 'Free' },
  { name: 'Dock', price: 'From €49' },
]
</script>

<template>
  <Atmosphere />
  <div class="lp-page">
    <SiteNav active="products" />
    <main>

      <!-- hero -->
      <section class="lp-container lp-pagehero">
        <h1 class="reveal" data-d="1">The SmartDisc <em>lineup.</em></h1>
        <p class="reveal" data-d="2">
          One sensor disc family, one companion app, a few accessories that make ownership effortless.
          Everything currently available for early-access pre-order.
        </p>
      </section>

      <!-- pre-order banner -->
      <section class="lp-container" style="display:flex;justify-content:center;padding:8px 32px 24px">
        <div class="lp-preorder-banner reveal">
          <span style="display:inline-flex;align-items:center;gap:8px">
            <LIcon name="info" :size="14" :stroke="2"/>
            <b>Early-access pre-order.</b>
            Products are not yet generally available — reservations ship in the order placed, starting fall 2026.
          </span>
          <RouterLink to="/faq#shipping" style="display:inline-flex;align-items:center;gap:6px;color:#4a3712">
            Shipping details
            <svg class="lp-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M5 12h14M13 6l6 6-6 6"/>
            </svg>
          </RouterLink>
        </div>
      </section>

      <!-- products grid -->
      <section class="lp-section lp-section--tight">
        <div class="lp-container">
          <div style="margin-bottom:20px">
            <Eyebrow>The lineup</Eyebrow>
            <h2 class="lp-h2 reveal" data-d="1" style="margin-top:12px">Discs, the app, and the bag essentials.</h2>
          </div>

          <div class="lp-products">
            <article v-for="p in products" :key="p.id" :id="p.id"
                     :class="['lp-product reveal', p.featured && 'lp-product--featured']" data-d="1">
              <!-- pre-order badge -->
              <span v-if="p.status !== 'available'"
                    :class="['lp-preorder-badge', p.status==='soon' && 'lp-preorder-badge--soon']">
                <span class="dot"/>
                {{ p.status === 'preorder' ? 'Pre-order' : 'Coming soon' }}
              </span>

              <!-- art -->
              <div class="lp-product__art">
                <div class="lp-product__art-inner">
                  <!-- disc art -->
                  <div v-if="p.art==='disc'" class="lp-disc-art">
                    <img src="/SmartDisc_Mark.png" alt="" />
                  </div>
                  <div v-else-if="p.art==='disc-pro'" class="lp-disc-art">
                    <img src="/SmartDisc_Mark.png" alt="" style="filter:drop-shadow(0 30px 40px rgba(16,42,87,.35)) hue-rotate(-10deg) contrast(1.05)"/>
                  </div>
                  <div v-else-if="p.art==='phone'" style="display:flex;justify-content:center;padding:24px">
                    <MobileApp screen="discs" :width="200" platform="ios" />
                  </div>
                  <!-- dock art -->
                  <svg v-else-if="p.art==='dock'" viewBox="0 0 320 220" style="width:85%;max-width:360px;filter:drop-shadow(0 24px 40px rgba(10,28,61,.25))">
                    <defs>
                      <linearGradient id="dock1" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#1d3d72"/><stop offset="1" stop-color="#0a1c3d"/></linearGradient>
                      <linearGradient id="dock2" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#f0e3c0"/><stop offset=".5" stop-color="#dec38c"/><stop offset="1" stop-color="#b8924f"/></linearGradient>
                    </defs>
                    <ellipse cx="160" cy="180" rx="140" ry="14" fill="rgba(10,28,61,.18)"/>
                    <rect x="40" y="60" width="240" height="120" rx="60" fill="url(#dock1)"/>
                    <rect x="40" y="60" width="240" height="22" rx="60" fill="rgba(255,255,255,.08)"/>
                    <g v-for="x in [80,130,180,230]" :key="x">
                      <circle :cx="x" cy="120" r="22" fill="rgba(255,255,255,.06)" stroke="rgba(255,255,255,.15)"/>
                      <circle :cx="x" cy="120" r="5" fill="url(#dock2)"/>
                    </g>
                    <rect x="148" y="44" width="24" height="18" rx="3" fill="url(#dock1)"/>
                  </svg>
                  <!-- case art -->
                  <svg v-else-if="p.art==='case'" viewBox="0 0 320 220" style="width:85%;max-width:340px;filter:drop-shadow(0 22px 36px rgba(10,28,61,.25))">
                    <defs><linearGradient id="case1" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#102a57"/><stop offset="1" stop-color="#0a1c3d"/></linearGradient></defs>
                    <rect x="30" y="50" width="260" height="150" rx="22" fill="url(#case1)"/>
                    <rect x="40" y="60" width="240" height="130" rx="18" fill="none" stroke="rgba(255,255,255,.15)"/>
                    <path d="M30 95 L 290 95" stroke="rgba(255,255,255,.25)" stroke-dasharray="4 4"/>
                    <rect x="220" y="86" width="50" height="16" rx="8" fill="rgba(222,195,140,.6)"/>
                    <circle cx="240" cy="94" r="3" fill="#102a57"/>
                  </svg>
                  <!-- bundle art -->
                  <svg v-else-if="p.art==='bundle'" viewBox="0 0 320 220" style="width:85%;max-width:360px;filter:drop-shadow(0 24px 40px rgba(10,28,61,.25))">
                    <defs><linearGradient id="b1" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#f0e3c0"/><stop offset="1" stop-color="#b8924f"/></linearGradient></defs>
                    <g v-for="i in 5" :key="i" :transform="`translate(${50+(i-1)*22},${60+(i-1)*6})`">
                      <ellipse cx="120" cy="60" rx="100" ry="22" fill="url(#b1)" :opacity="0.35+(i-1)*0.13"/>
                      <ellipse cx="120" cy="56" rx="60" ry="10" fill="rgba(255,255,255,.4)" :opacity="0.35+(i-1)*0.13"/>
                    </g>
                  </svg>
                </div>
              </div>

              <!-- copy -->
              <div class="lp-product__copy">
                <div class="lp-product__cat">{{p.cat}}</div>
                <h3 class="lp-product__name">{{p.name}}</h3>
                <p class="lp-product__tag">{{p.tag}}</p>
                <ul class="lp-product__highlights">
                  <li v-for="h in p.highlights" :key="h"><CheckIcon :size="14"/> {{h}}</li>
                </ul>
                <div class="lp-product__price-row">
                  <div :class="['lp-product__price', p.free && 'lp-product__price--free']">
                    <template v-if="p.free">Free <small>with any SmartDisc</small></template>
                    <template v-else>{{p.price}}<small>{{p.priceSuffix}}</small></template>
                  </div>
                  <div class="lp-product__avail">
                    <LIcon name="calendar-clock" :size="14" :stroke="2"/>
                    {{ p.status === 'preorder' ? 'Pre-order · ships fall 2026' : p.status === 'soon' ? 'Coming soon · 2026' : 'Available now' }}
                  </div>
                </div>
                <div class="lp-product__cta">
                  <template v-if="p.art === 'phone'">
                    <StoreBadge platform="ios" :small="true" />
                    <StoreBadge platform="android" :small="true" />
                  </template>
                  <template v-else>
                    <RouterLink class="lp-btn lp-btn--gold lp-btn--md" to="/contact">Reserve yours</RouterLink>
                  </template>
                </div>
              </div>
            </article>
          </div>

          <!-- comparison table -->
          <div class="lp-compare reveal" style="margin-top:80px" data-d="1">
            <table>
              <thead>
                <tr>
                  <th style="width:200px">Compare</th>
                  <th v-for="c in compareCols" :key="c.name" class="col">
                    <span class="name">{{c.name}}</span>
                    <span class="price">{{c.price}}</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(row,ri) in compareRows" :key="ri">
                  <th>{{row[0]}}</th>
                  <td v-for="(v,vi) in row.slice(1)" :key="vi" :class="['col', v===true && 'has']">
                    <LIcon v-if="v===true" name="check" :size="18" :stroke="2.4"/>
                    <template v-else>{{v===false ? '—' : v}}</template>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <!-- app callout -->
          <div class="reveal" style="margin-top:80px">
            <div style="border-radius:var(--r-xl);background:linear-gradient(160deg,#0e2348,#0a1c3d);color:var(--fg-on-dark);padding:56px;display:grid;grid-template-columns:1.4fr 1fr;gap:40px;align-items:center;box-shadow:var(--shadow-glass-dark);border:1px solid rgba(146,178,220,.2);overflow:hidden;position:relative">
              <div style="position:absolute;width:600px;height:600px;right:-200px;top:-200px;border-radius:50%;background:radial-gradient(circle,rgba(222,195,140,.22),transparent 60%);pointer-events:none"/>
              <div style="position:relative">
                <Eyebrow :ondark="true">The companion app</Eyebrow>
                <h3 style="font-family:var(--font-display);font-weight:600;font-size:42px;letter-spacing:-.025em;line-height:1.05;margin:16px 0 14px;max-width:16ch;color:var(--fg-on-dark)">
                  One app. One bag. One season.
                </h3>
                <p style="font-family:var(--font-body);font-size:17px;color:var(--fg2-on-dark);line-height:1.55;margin:0 0 24px;max-width:44ch">
                  The SmartDisc app is the only way to read what your disc captured. It is available on the App Store and Google Play.
                </p>
              </div>
              <div style="display:flex;justify-content:center;position:relative">
                <MobileApp screen="detail" :width="240" platform="ios" />
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
    <SiteFooter />
  </div>
</template>
