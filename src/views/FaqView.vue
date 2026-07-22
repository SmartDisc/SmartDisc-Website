<script setup>
import {ref, computed} from 'vue'
import {RouterLink} from 'vue-router'
import {useScrollReveal} from '@/composables/useScrollReveal'
import Atmosphere from '@/components/features/Atmosphere.vue'
import SiteNav from '@/components/layout/SiteNav.vue'
import SiteFooter from '@/components/layout/SiteFooter.vue'

useScrollReveal()

const categories = [
  {
    cat: 'Pre-order',
    items: [
      {
        q: 'When does SmartDisc ship?',
        a: 'All current orders are pre-orders. Manufacturing starts in winter 2026 aproximatly; the first discs leave Vienna in early summer 2027 and ship in the order placed. We\'ll send you a tracking-window email two weeks before your disc heads out.'
      },
      {
        q: 'Is the price now the final price?',
        a: 'Pre-order pricing is locked in at the prices listed on the Products page. We will not retroactively raise the price between pre-order and ship. Currency-conversion totals appear at checkout.'
      },
      {
        q: 'When is my card charged?',
        a: 'Never on reservation. We authorize the card to confirm it\'s valid and then settle the charge only when your disc is boxed and ready to ship. You can cancel any time up to that moment.'
      },
      {
        q: 'Can I change my address before it ships?',
        a: 'Yes — sign in with the email you used to reserve, then update the address from Pre-order > Shipping. We freeze the address two business days before dispatch.'
      },
      {
        q: 'Do you ship outside the EU and US?',
        a: 'Yes, to most countries. Shipping for the first wave covers the EU, UK, US, Canada, Australia, New Zealand and Japan. Other regions open after the first batch lands safely.'
      },
    ],
  },
  {
    cat: 'The product',
    items: [
      {
        q: 'Does the disc feel different than a regular 175?',
        a: 'It weighs the same 175 grams, with identical flight characteristics — we worked with the equipment committee on tolerances. The sensors and battery are distributed so the center of mass is exactly where the disc council expects it.'
      },
      {
        q: 'How long does the battery last?',
        a: 'About a full day. At least 2 whole games. Drop the disc on the inductive dock between sessions and you\'ll never see a low-battery warning during a game.'
      },
      {
        q: 'Do I need to wear anything?',
        a: 'Nothing. The sensors live inside the disc itself, so distance, speed and spin attach to whoever last threw it. You can pass the disc to a teammate mid-warm-up and the next throw is still recorded.'
      },
      {
        q: 'Is SmartDisc tournament-legal?',
        a: 'For most sanctioned events, yes — the disc meets WFDF 175 g standards. We recommend keeping it in scrimmage and practice for now and checking with your local federation before a championship final.'
      },
      {
        q: 'Is it weatherproof?',
        a: 'Yes — rated for rain, mud and the occasional cleat. We do not recommend submerging it; the inductive coil prefers a dry rim.'
      },
    ],
  },
  {
    cat: 'The app',
    items: [
      {
        q: 'Is the SmartDisc app free?',
        a: 'Yes. The SmartDisc app is free for all players and includes core features such as throw tracking and performance analytics. Optional subscription plans are available for teams and clubs, offering advanced team management and coaching tools.'
      },
      {
        q: 'Which platforms is the app on?',
        a: 'Google PlayStore and Apple Store'
      },
      {
        q: 'Do I need an account?',
        a: 'Not in the usual sense. The app uses your phone\'s existing Apple/Google sign-in to remember your discs. There\'s no separate SmartDisc account, no password to forget.'
      },
      {
        q: 'Can I export my throws?',
        a: 'Yes — Settings > Export sends every throw as CSV to any email or cloud drive. Your data is yours; we never sell or share it.'
      },
      {
        q: 'Can teammates see my throws?',
        a: 'Only if you choose to share them. Sharing and team analytics are available through the Team Subscription, allowing coaches and teammates to view performance data and track progress together. Access can be managed or revoked at any time.'
      },
    ],
  },
  {
    cat: 'Shipping & returns',
    items: [
      {
        q: 'How much does shipping cost?',
        a: 'Free for EU and US pre-orders. Other regions: shipping is calculated at checkout based on weight and destination — usually €12–25 for international.'
      },
      {
        q: 'What\'s the return policy?',
        a: '30 days from delivery. If the disc isn\'t right for you, send it back and we\'ll refund the disc + original shipping. Used-condition discs are accepted as long as they pass a quick fly-test.'
      },
      {
        q: 'What if my disc arrives damaged?',
        a: 'Contact us! -> smartdisc@mailo.com'
      },
      {
        q: 'Is there a warranty?',
        a: 'Two-year limited warranty against sensor and battery failure. Wear and tear from normal play is on the disc — these are tools, not collectibles.'
      },
    ],
  },
  {
    cat: 'Privacy & data',
    items: [
      {
        q: 'Do you sell or share data?',
        a: 'No. SmartDisc does not sell, share or rent user data. We have no advertising business and no plans to build one. It would compromise the trust the disc depends on.'
      },
      {
        q: 'What happens to my data if I cancel a pre-order?',
        a: 'Nothing — pre-orders don\'t create an app account. The disc\'s throws only exist after pairing.'
      },
    ],
  },
]

const activeCategory = ref('All')
const openKey = ref(null)

const visibleSections = computed(() =>
    activeCategory.value === 'All' ? categories : categories.filter(s => s.cat === activeCategory.value)
)

function toggle(cat, i) {
  const key = `${cat}:${i}`
  openKey.value = openKey.value === key ? null : key
}

function isOpen(cat, i) {
  return openKey.value === `${cat}:${i}`
}
</script>

<template>
  <Atmosphere/>
  <div class="lp-page">
    <SiteNav/>
    <main>

      <!-- hero -->
      <section class="lp-container lp-pagehero">
        <h1 class="reveal" data-d="1">Questions <em>worth answering.</em></h1>
        <p class="reveal" data-d="2">
          The honest version — written by humans who can't stand evasive FAQ pages either.
          Can't find what you need? Drop us a note from the Contact page.
        </p>
      </section>

      <!-- faq body -->
      <section class="lp-section lp-section--tight">
        <div class="lp-container">
          <!-- category filter -->
          <div class="lp-faq-cats">
            <button :class="['lp-faq-cat', activeCategory === 'All' && 'is-active']"
                    @click="activeCategory = 'All'">All
            </button>
            <button v-for="s in categories" :key="s.cat"
                    :class="['lp-faq-cat', activeCategory === s.cat && 'is-active']"
                    @click="activeCategory = s.cat">{{ s.cat }}
            </button>
          </div>

          <div v-for="section in visibleSections" :key="section.cat" style="margin-top:48px">
            <div class="lp-faq">
              <div v-for="(it, i) in section.items" :key="`${section.cat}:${i}`"
                   :class="['lp-faq__item', isOpen(section.cat, i) && 'is-open']">
                <button class="lp-faq__q" @click="toggle(section.cat, i)">
                  {{ it.q }}
                  <span class="lp-faq__plus">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
                         stroke-linecap="round">
                      <path d="M12 5v14M5 12h14"/>
                    </svg>
                  </span>
                </button>
                <div class="lp-faq__a">
                  <div class="lp-faq__a-inner">{{ it.a }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- still stuck -->
      <section class="lp-section" id="contact">
        <div class="lp-container">
          <div class="lp-cta-final reveal" style="padding:clamp(28px,7vw,72px) clamp(20px,6vw,56px)">
            <div class="lp-cta-final__inner">
              <h2 style="font-size:clamp(32px,4vw,56px)">We answer every email.</h2>
              <p>Usually within one business day, sometimes faster. Pre-order questions go to the same inbox.</p>
              <div class="lp-hero__cta">
                <RouterLink class="lp-btn lp-btn--gold lp-btn--lg" to="/contact">Send us a note</RouterLink>
                <a class="lp-btn lp-btn--glass lp-btn--lg" href="mailto:hello@smartdisc.io"
                   style="color:var(--fg-on-dark);background:rgba(255,255,255,.08);border-color:rgba(255,255,255,.2)">
                  hello@smartdisc.io
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
    <SiteFooter/>
  </div>
</template>
