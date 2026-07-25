<script setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { useScrollReveal } from '@/composables/useScrollReveal'
import Atmosphere from '@/components/features/Atmosphere.vue'
import SiteNav from '@/components/layout/SiteNav.vue'
import SiteFooter from '@/components/layout/SiteFooter.vue'

useScrollReveal()

const { t } = useI18n()

const pains = computed(() => ['01', '02', '03', '04'].map((no, i) => ({
  no,
  h: t(`home.problem.items.${i}.h`),
  p: t(`home.problem.items.${i}.p`),
})))

const metricValues = [
  { v: '+35', wordUnit: false },
  { v: '100', wordUnit: false },
  { v: '4',   wordUnit: true  },
  { v: '1',   wordUnit: true  },
]

const metrics = computed(() => metricValues.map((m, i) => ({
  ...m,
  u: t(`home.metrics.items.${i}.u`),
  k: t(`home.metrics.items.${i}.k`),
})))

// Used by the commented-out social-proof section below.
const testimonials = [
  { featured: true, q: 'The first time I saw my flick land at 32 m and not 25 like I\'d been telling myself, I knew this thing was going to change how I train.', n: 'Mira Solberg', r: 'Captain · Oslo Skywalkers', c: '#1d3d72', stars: 5 },
  { q: 'We finally have a way to settle the longest-huck argument with data instead of beer.', n: 'Diego Marín', r: 'Coach · Bogotá Cóndores', c: '#b8924f', stars: 5 },
  { q: 'It feels like a normal 175 in your hand. You forget about the sensors until you open the app.', n: 'Hana Watanabe', r: 'Mixed division · Tokyo Layout', c: '#6f93b5', stars: 5 },
]

const logos = [
  { name: 'OSLO SKYWALKERS', serif: false },
  { name: 'Bogotá Cóndores', serif: true },
  { name: 'TOKYO LAYOUT', serif: false },
  { name: 'Berlin Reset', serif: true },
  { name: 'AUSTIN HEAT', serif: false },
  { name: 'Dublin Drift', serif: true },
]
</script>

<template>
  <Atmosphere />
  <div class="lp-page">
    <SiteNav />
    <main>

      <!-- ===== HERO ===== -->
      <section class="lp-hero lp-container" id="top">
        <div class="lp-hero__top">
          <h1 class="lp-display reveal" data-d="1" style="max-width:14ch;text-wrap:balance;text-align:center">
            {{ t('home.hero.title') }}
          </h1>
          <p class="lp-lede reveal" data-d="2" style="text-align:center">
            {{ t('home.hero.lede') }}
          </p>

          <div class="lp-hero__cta reveal" data-d="3">
            <RouterLink class="lp-btn lp-btn--gold lp-btn--lg" to="/products">
              {{ t('home.hero.cta') }}
            </RouterLink>
          </div>
        </div>
      </section>

      <!-- ===== ECOSYSTEM ===== -->
      <section class="lp-section" id="disc">
        <div class="lp-container">
          <div style="text-align:center;max-width:780px;margin:0 auto">
            <h2 class="lp-h1 reveal" data-d="1" style="margin-top:16px;text-wrap:balance">
              {{ t('home.ecosystem.title') }}
            </h2>
            <p class="lp-lede reveal" data-d="2" style="margin-top:22px;margin-left:auto;margin-right:auto">
              {{ t('home.ecosystem.lede') }}
            </p>
          </div>
          <div class="lp-ecosystem">
            <div class="lp-ecosystem__disc reveal" data-d="2">
              <img src="/frisbeeHandPicture.webp" :alt="t('home.ecosystem.imgAlt')" loading="lazy" decoding="async"/>
            </div>
          </div>
        </div>
      </section>

      <!-- ===== PROBLEM (dark) ===== -->
      <section class="lp-section lp-section--dark" id="problem">
        <div class="lp-container">
          <div class="lp-problem-grid">
            <div>
              <h2 class="lp-h1 reveal" data-d="1" style="margin-top:16px;max-width:16ch;text-wrap:balance">
                {{ t('home.problem.title') }}
              </h2>
              <p class="lp-lede reveal" data-d="2" style="margin-top:22px">
                {{ t('home.problem.lede') }}
              </p>
            </div>
            <div class="lp-problem-list">
              <div v-for="(p,i) in pains" :key="p.no"
                   class="lp-problem-card reveal" :data-d="String((i%3)+1)">
                <span class="lp-problem-card__no">{{p.no}}</span>
                <h3>{{p.h}}</h3>
                <p>{{p.p}}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ===== HOW IT WORKS ===== -->
      <section class="lp-section" id="how">
        <div class="lp-container">
          <div style="text-align:center;max-width:720px;margin:0 auto">
            <i18n-t keypath="home.how.title" tag="h2" class="lp-h1 reveal" data-d="1" style="margin-top:16px">
              <template #highlight>
                <span class="lp-kicker">{{ t('home.how.titleHighlight') }}</span>
              </template>
            </i18n-t>
          </div>
          <div class="lp-solution-steps">
            <div v-for="i in 3" :key="i" class="lp-step reveal" :data-d="String(i)">
              <span class="lp-step__no">{{ i }}</span>
              <h3>{{ t(`home.how.steps.${i - 1}.h`) }}</h3>
              <p>{{ t(`home.how.steps.${i - 1}.p`) }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- ===== METRICS (dark) ===== -->
      <section class="lp-section lp-section--dark" id="metrics">
        <div class="lp-container">
          <div style="display:flex;align-items:flex-end;justify-content:space-between;gap:32px;flex-wrap:wrap">
            <div>
              <h2 class="lp-h1 reveal" data-d="1" style="margin-top:16px;max-width:18ch;text-wrap:balance">
                {{ t('home.metrics.title') }}
              </h2>
            </div>
            <p class="lp-body reveal" data-d="2" style="max-width:44ch;color:var(--fg2-on-dark)">
              {{ t('home.metrics.note') }}
            </p>
          </div>
          <div class="lp-metrics">
            <div v-for="(m,i) in metrics" :key="i"
                 class="lp-metric reveal" :data-d="String((i%4)+1)">
              <div class="lp-metric__v">{{m.v}}<span v-if="!m.wordUnit" class="lp-metric__u">{{m.u}}</span></div>
              <div v-if="m.wordUnit" class="lp-metric__u lp-metric__u--block">{{m.u}}</div>
              <div class="lp-metric__k">{{m.k}}</div>
            </div>
          </div>
        </div>
      </section>

      <!-- ===== SOCIAL PROOF ===== -->
      <!--
      <section class="lp-section" id="social">
        <div class="lp-container">
          <div style="text-align:center;max-width:720px;margin:0 auto">
            <Eyebrow>Players are saying</Eyebrow>
            <h2 class="lp-h1 reveal" data-d="1" style="margin-top:16px">
              Loved by teams that train like it matters.
            </h2>
          </div>
          <div class="lp-testimonials">
            <div v-for="(t,i) in testimonials" :key="i"
                 :class="['lp-testimonial reveal', t.featured && 'lp-testimonial--featured']" :data-d="String(i+1)">
              <div class="lp-testimonial__stars">
                <svg v-for="j in t.stars" :key="j" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style="color:var(--gold-500)" aria-hidden="true">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <p class="lp-testimonial__quote">{{t.q}}</p>
              <div class="lp-testimonial__by">
                <span class="lp-testimonial__avatar" :style="{ background: t.c }">{{t.n[0]}}</span>
                <div>
                  <div class="lp-testimonial__name">{{t.n}}</div>
                  <div class="lp-testimonial__role">{{t.r}}</div>
                </div>
              </div>
            </div>
          </div>
          <div class="lp-logos">
            <span v-for="l in logos" :key="l.name" :class="['lp-logo', l.serif && 'lp-logo--serif']">
              <span class="lp-logo__dot"/> {{l.name}}
            </span>
          </div>
        </div>
      </section>
    -->

    </main>
    <SiteFooter />
  </div>
</template>
