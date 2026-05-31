<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { useScrollReveal } from '@/composables/useScrollReveal'
import Atmosphere from '@/components/Atmosphere.vue'
import SiteNav from '@/components/SiteNav.vue'
import SiteFooter from '@/components/SiteFooter.vue'
import Eyebrow from '@/components/Eyebrow.vue'
import LIcon from '@/components/LIcon.vue'
import StoreBadgeRow from '@/components/StoreBadgeRow.vue'

useScrollReveal()

const sent = ref(false)
const form = ref({ name: '', email: '', topic: 'Pre-order', message: '' })

function submit(e) {
  e.preventDefault()
  sent.value = true
}
</script>

<template>
  <Atmosphere />
  <div class="lp-page">
    <SiteNav active="contact" />
    <main>

      <!-- hero -->
      <section class="lp-container lp-pagehero">
        <h1 class="reveal" data-d="1">Let's <em>talk.</em></h1>
        <p class="reveal" data-d="2">
          Pre-order question, tournament-use clearance, team bundle, press kit, or just curious — write to us.
          We answer every email, usually within one business day.
        </p>
      </section>

      <!-- form + side -->
      <section class="lp-section lp-section--tight" id="form">
        <div class="lp-container">
          <div class="lp-contact">
            <form class="lp-contact__form reveal" @submit="submit">
              <div style="display:grid;grid-template-columns:1fr 1fr;gap:14px">
                <div class="lp-contact__field">
                  <label class="lp-contact__label" for="cn">Your name</label>
                  <input id="cn" v-model="form.name" required placeholder="Alex Rivera" />
                </div>
                <div class="lp-contact__field">
                  <label class="lp-contact__label" for="ce">Email</label>
                  <input id="ce" type="email" v-model="form.email" required placeholder="you@example.com" />
                </div>
              </div>
              <div class="lp-contact__field">
                <label class="lp-contact__label" for="ct">Topic</label>
                <select id="ct" v-model="form.topic">
                  <option>Pre-order</option>
                  <option>Team bundle</option>
                  <option>Press</option>
                  <option>Partnerships</option>
                  <option>Tournament use</option>
                  <option>Other</option>
                </select>
              </div>
              <div class="lp-contact__field">
                <label class="lp-contact__label" for="cm">Message</label>
                <textarea id="cm" v-model="form.message" required placeholder="Tell us what you need." />
              </div>
              <div style="display:flex;align-items:center;justify-content:space-between;gap:16px;flex-wrap:wrap">
                <span style="font-family:var(--font-display);font-size:12.5px;color:var(--fg3)">
                  We reply within one business day.
                </span>
                <button type="submit" class="lp-btn lp-btn--gold lp-btn--md">
                  {{ sent ? 'Thanks — we\'re on it' : 'Send message' }}
                </button>
              </div>
            </form>

            <div class="lp-contact__side">
              <div class="lp-contact__card reveal" data-d="1">
                <span class="ic"><LIcon name="mail" :size="20" :stroke="2"/></span>
                <div>
                  <h4>Email</h4>
                  <p>
                    General: <a href="mailto:hello@smartdisc.io">hello@smartdisc.io</a><br/>
                    Pre-orders: <a href="mailto:orders@smartdisc.io">orders@smartdisc.io</a><br/>
                    Press: <a href="mailto:press@smartdisc.io">press@smartdisc.io</a>
                  </p>
                </div>
              </div>
              <div class="lp-contact__card reveal" data-d="2">
                <span class="ic"><LIcon name="map-pin" :size="20" :stroke="2"/></span>
                <div>
                  <h4>Workshop</h4>
                  <p>
                    SmartDisc GmbH · Stresemannstraße 374<br/>
                    22761 Hamburg · Germany
                  </p>
                </div>
              </div>
              <div class="lp-contact__card reveal" data-d="3">
                <span class="ic"><LIcon name="users" :size="20" :stroke="2"/></span>
                <div>
                  <h4>Team bundles</h4>
                  <p>
                    Pre-ordering five or more discs for your club?
                    Email <a href="mailto:teams@smartdisc.io">teams@smartdisc.io</a> for volume pricing and a single-invoice option.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- app CTA -->
      <section class="lp-section lp-section--tight" id="app">
        <div class="lp-container">
          <div style="padding:48px;border-radius:var(--r-xl);background:var(--glass-light-bg);backdrop-filter:var(--glass-blur);-webkit-backdrop-filter:var(--glass-blur);border:1px solid var(--glass-light-border);box-shadow:var(--shadow-glass);display:grid;grid-template-columns:1fr auto;gap:32px;align-items:center" class="reveal">
            <div>
              <Eyebrow>The app</Eyebrow>
              <h3 style="margin:12px 0 10px;font-family:var(--font-display);font-weight:600;font-size:28px;letter-spacing:-.02em;color:var(--ink)">
                Get notified when the app goes live.
              </h3>
              <p style="margin:0;font-family:var(--font-body);font-size:16px;color:var(--fg2);max-width:44ch">
                The SmartDisc app launches alongside the disc.
                Tap the badges to be notified the day it lands on the App Store and Google Play.
              </p>
            </div>
            <StoreBadgeRow />
          </div>
        </div>
      </section>

    </main>
    <SiteFooter />
  </div>
</template>
