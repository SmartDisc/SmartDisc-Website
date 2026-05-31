<script setup>
import { RouterLink } from 'vue-router'
import { useScrollReveal } from '@/composables/useScrollReveal'
import Atmosphere from '@/components/Atmosphere.vue'
import SiteNav from '@/components/SiteNav.vue'
import SiteFooter from '@/components/SiteFooter.vue'
import Eyebrow from '@/components/Eyebrow.vue'

useScrollReveal()

const team = [
  { i: 'TK', n: 'Tomi Kestilä',  r: 'Co-founder · Hardware',  c: '#1d3d72' },
  { i: 'LP', n: 'Lena Petersen', r: 'Co-founder · Software',  c: '#b8924f' },
  { i: 'JB', n: 'Jonas Berg',    r: 'Industrial design',       c: '#6f93b5' },
  { i: 'MC', n: 'Mira Chen',     r: 'Player relations',        c: '#3f9d6d' },
  { i: 'RA', n: 'Rohan Ahuja',   r: 'Firmware',                c: '#8aa6c2' },
  { i: 'FB', n: 'Frida Bauer',   r: 'App design',              c: '#cfb276' },
  { i: 'DS', n: 'Diego Soto',    r: 'Manufacturing',           c: '#1d3d72' },
  { i: 'AK', n: 'Aino Korhonen', r: 'Operations',              c: '#b8924f' },
]

const timeline = [
  { year: '2023', h: 'The sketch on the bus home', p: 'Two founders sketch a sensor module after losing a longest-huck argument to a phone stopwatch.' },
  { year: '2024', h: 'Prototype 01 — "the brick"', p: 'First working sensor disc. Too heavy. Flies like a frisbee from a vending machine. But it records.' },
  { year: '2024', h: 'WFDF tolerance, finally', p: 'Prototype 03 hits 175 g and lands within tournament flight tolerance for the first time.' },
  { year: '2025', h: 'Beta with 21 club teams', p: 'Three continents, two seasons. We learn that nobody wants notifications and everybody wants CSV export.' },
  { year: '2026', h: 'Pre-orders open', p: 'SmartDisc Ultimate and Pro go live for pre-order. Manufacturing begins. App enters App Store and Play review.' },
]
</script>

<template>
  <Atmosphere />
  <div class="lp-page">
    <SiteNav active="about" />
    <main>

      <!-- hero -->
      <section class="lp-container lp-pagehero">
        <h1 class="reveal" data-d="1">Made by people who still <em>play.</em></h1>
        <p class="reveal" data-d="2">
          SmartDisc started in a basement workshop in Hamburg, between two club seasons,
          because nobody believed Ultimate would ever get the tools every other sport already has.
          We didn't wait for permission.
        </p>
      </section>

      <!-- story -->
      <section class="lp-section lp-section--tight" id="story">
        <div class="lp-container">
          <div class="lp-story-grid">
            <div class="reveal">
              <Eyebrow>Our story</Eyebrow>
              <h2 class="lp-h2" style="margin-top:16px">It started with a stopwatch and a disagreement.</h2>
              <p class="lp-body" style="font-size:17px;margin-top:18px">
                In the summer of 2023, two of us were trying to settle a longest-huck argument
                with a measuring tape and a phone stopwatch.
                The numbers were wrong. The argument got worse.
                On the bus home we sketched the sensor module that would later become SmartDisc.
              </p>
              <p class="lp-body" style="font-size:17px;margin-top:12px">
                Three years, four prototypes and one very patient disc manufacturer later,
                we have a 175-gram disc that flies like a regulation Discraft and remembers every throw.
                Pre-orders open today. The first ones ship this fall.
              </p>
            </div>
            <div class="reveal" data-d="1">
              <div class="lp-story-photo">
                <span class="lp-story-photo__label">Hamburg · Summer 2023</span>
              </div>
            </div>
          </div>

          <div class="lp-story-grid lp-story-grid--rev" style="margin-top:80px">
            <div class="reveal">
              <Eyebrow>What we believe</Eyebrow>
              <h2 class="lp-h2" style="margin-top:16px">Tools should disappear when the game starts.</h2>
              <p class="lp-body" style="font-size:17px;margin-top:18px">
                We didn't want another wearable. We didn't want another subscription.
                We wanted a disc that feels like a disc — and an app that earns its place by
                quietly being useful when you sit down after a session.
              </p>
              <p class="lp-body" style="font-size:17px;margin-top:12px">
                That belief shows up in every decision: no accounts, no streaks, no notifications,
                no upsell tier. Buy the disc, get the app. Forever.
              </p>
            </div>
            <div class="reveal" data-d="1">
              <div class="lp-story-photo" style="background:linear-gradient(135deg,var(--gold-300),var(--gold-500));color:#4a3712">
                <span class="lp-story-photo__label">Belief · 02</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- stat line -->
      <section class="lp-section lp-section--tight">
        <div class="lp-container">
          <div style="text-align:center;max-width:720px;margin:0 auto">
            <Eyebrow>By the numbers</Eyebrow>
            <h2 class="lp-h2 reveal" data-d="1" style="margin-top:16px">Small team, real work.</h2>
          </div>
          <div class="lp-statline reveal" data-d="1">
            <div>
              <div class="v">9</div>
              <div class="k">people on the team</div>
            </div>
            <div>
              <div class="v">4</div>
              <div class="k">prototype generations shipped</div>
            </div>
            <div>
              <div class="v">21</div>
              <div class="k">beta teams across three continents</div>
            </div>
          </div>
        </div>
      </section>

      <!-- timeline -->
      <section class="lp-section lp-section--tight" id="timeline">
        <div class="lp-container">
          <div style="text-align:center;max-width:720px;margin:0 auto">
            <Eyebrow>How we got here</Eyebrow>
            <h2 class="lp-h2 reveal" data-d="1" style="margin-top:16px">Three years from sketch to shipped.</h2>
          </div>
          <div class="lp-timeline">
            <div v-for="(it,i) in timeline" :key="i" class="lp-timeline__item reveal" data-d="1">
              <div class="lp-timeline__year">{{it.year}}</div>
              <div class="lp-timeline__body">
                <h4>{{it.h}}</h4>
                <p>{{it.p}}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- team -->
      <section class="lp-section lp-section--tight" id="team">
        <div class="lp-container">
          <div style="text-align:center;max-width:720px;margin:0 auto">
            <Eyebrow>The team</Eyebrow>
            <h2 class="lp-h2 reveal" data-d="1" style="margin-top:16px">Builders, players, coaches.</h2>
            <p class="lp-lede reveal" data-d="2" style="margin-top:16px;margin-left:auto;margin-right:auto">
              Most of us still play in a league. A few of us never picked up a disc until we joined.
              All of us care about how this thing feels in your hand.
            </p>
          </div>
          <div class="lp-team">
            <div v-for="m in team" :key="m.n" class="lp-team-card reveal" data-d="1">
              <div class="lp-team-card__avatar" :style="{ background: `linear-gradient(135deg,${m.c},${m.c}cc)` }">{{m.i}}</div>
              <h4>{{m.n}}</h4>
              <p>{{m.r}}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA -->
      <section class="lp-section" id="cta">
        <div class="lp-container">
          <div class="lp-cta-final reveal">
            <div class="lp-cta-final__disc"><img src="/SmartDisc_Mark.png" alt=""/></div>
            <div class="lp-cta-final__inner">
              <Eyebrow :ondark="true">Join the first wave</Eyebrow>
              <h2>Pre-order a disc. <em>Get the app early.</em></h2>
              <p>Pre-orders ship in the order placed, starting fall 2026. App invites land two weeks before your disc.</p>
              <div class="lp-hero__cta">
                <RouterLink class="lp-btn lp-btn--gold lp-btn--lg" to="/products">Browse the lineup</RouterLink>
                <RouterLink class="lp-btn lp-btn--glass lp-btn--lg" to="/contact"
                  style="color:var(--fg-on-dark);background:rgba(255,255,255,.08);border-color:rgba(255,255,255,.2)">
                  Talk to us
                </RouterLink>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
    <SiteFooter />
  </div>
</template>
