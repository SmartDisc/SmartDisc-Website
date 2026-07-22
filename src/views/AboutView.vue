<script setup>
import {RouterLink} from 'vue-router'
import {useScrollReveal} from '@/composables/useScrollReveal'
import Atmosphere from '@/components/features/Atmosphere.vue'
import SiteNav from '@/components/layout/SiteNav.vue'
import SiteFooter from '@/components/layout/SiteFooter.vue'

useScrollReveal()

const team = [
  {i: 'PP', n: 'Petra Palinkas', r: 'Founder', c: '#1d3d72'},
  {i: 'EV', n: 'Elias Vavra', r: 'Co-founder', c: '#b8924f'},
  {i: 'EW', n: 'Erik Weidenauer', r: 'App & Website', c: '#6f93b5'},
  {i: 'CS', n: 'Clemens Saurugg', r: 'Firmware & Hardware', c: '#3f9d6d'},
  {i: 'AP', n: 'Amritpal Padda', r: 'Kamera Tracking', c: '#8aa6c2'},
  {i: 'T', n: 'Tobias Weidmann', r: 'Hardware & PCB', c: '#b8924f'}
]

const timeline = [
  {
    year: '2024',
    h: 'The idea is born ',
    p: 'While working on Ultimate Frisbee training and performance analysis, we realized that players and coaches lacked objective data to evaluate throws and track progress. '
  },
  {
    year: '2025',
    h: 'Research & concept development ',
    p: 'We analyzed existing sports technologies, defined the technical requirements, and developed the first concepts for a smart disc capable of collecting real-time performance data. '
  },
  {
    year: '2025',
    h: 'Hardware & software development ',
    p: 'The first electronic components, sensor systems, backend infrastructure, and app prototypes were developed. The focus was on integrating technology without affecting the flight characteristics of a regulation 175 g disc. '
  },
  {
    year: '2025',
    h: 'Working prototype ',
    p: 'The first fully functional SmartDisc prototype successfully captured and transmitted performance data to the mobile application, proving the concept in practice. '
  },
  {
    year: '2026',
    h: 'Diploma project completed',
    p: 'SmartDisc evolved into a complete system consisting of intelligent hardware, data analytics, and a user-friendly mobile application, creating the foundation for future development and potential commercialization. '
  }
]
</script>

<template>
  <Atmosphere/>
  <div class="lp-page">
    <SiteNav/>
    <main>

      <!-- hero -->
      <section class="lp-container lp-pagehero">
        <h1 class="reveal" data-d="1">Built by players. Made for players. </h1>
        <p class="reveal" data-d="2">
          SmartDisc started as a diploma project driven by a simple idea: bring data-driven training to Ultimate
          Frisbee. Combining engineering, software development, and a passion for the sport, we turned that idea into a
          real product.
        </p>
      </section>

      <!-- story -->
      <section class="lp-section lp-section--tight" id="story">
        <div class="lp-container">
          <div class="lp-story-grid">
            <div class="reveal">
              <h2 class="lp-h2" style="margin-top:16px">It started with a simple question - How can you improve a throw
                if you can't measure it? </h2>
              <p class="lp-body" style="font-size:17px;margin-top:18px">
                As Ultimate Frisbee players and technology enthusiasts, we noticed that while many sports rely on data
                and analytics, Ultimate still depends largely on observation and experience. We wanted to change that.
              </p>
              <p class="lp-body" style="font-size:17px;margin-top:12px">
                What started as a diploma project quickly became an ambitious challenge: developing a smart disc capable
                of collecting real-time performance data without changing the feel or flight characteristics of a
                regulation 175 g Ultimate Frisbee.
              </p>
              <p class="lp-body" style="font-size:17px;margin-top:12px">
                By combining mechatronics, software development, data analytics, and design, we transformed an idea into
                a working prototype: SmartDisc.
              </p>
            </div>
            <div class="reveal" data-d="1">
              <div class="lp-story-photo">
                <span class="lp-story-photo__label">Vienna · 2025</span>
              </div>
            </div>
          </div>

          <div class="lp-story-grid lp-story-grid--rev" style="margin-top:80px">
            <div class="reveal">
              <h2 class="lp-h2" style="margin-top:16px">Technology should support the game, not change it. </h2>
              <p class="lp-body" style="font-size:17px;margin-top:18px">
                We didn't want players to adapt to technology. We wanted technology to adapt to players.
              </p>
              <p class="lp-body" style="font-size:17px;margin-top:12px">
                SmartDisc is designed to feel, fly, and perform like a regulation 175 g Ultimate Frisbee. The sensors
                work silently in the background, capturing valuable performance data without affecting the game itself.
              </p>
              <p class="lp-body" style="font-size:17px;margin-top:12px">
                Technology shouldn't interrupt the game—it should help players get better.
              </p>
            </div>
            <div class="reveal" data-d="1">
              <div class="lp-story-photo"
                   style="background:linear-gradient(135deg,var(--gold-300),var(--gold-500));color:#4a3712">
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
            <h2 class="lp-h2 reveal" data-d="1" style="margin-top:16px">Small team, real work.</h2>
          </div>
          <div class="lp-statline reveal" data-d="1">
            <div>
              <div class="v">9</div>
              <div class="k">people on the team</div>
            </div>
            <div>
              <div class="v">1</div>
              <div class="k">gen ship</div>
            </div>
            <div>
              <div class="v">1</div>
              <div class="k">beta team</div>
            </div>
          </div>
        </div>
      </section>

      <!-- timeline -->
      <section class="lp-section lp-section--tight" id="timeline">
        <div class="lp-container">
          <div style="text-align:center;max-width:720px;margin:0 auto">
            <h2 class="lp-h2 reveal" data-d="1" style="margin-top:16px">From idea to SmartDisc.</h2>
          </div>
          <div class="lp-timeline">
            <div v-for="(it,i) in timeline" :key="i" class="lp-timeline__item reveal" data-d="1">
              <div class="lp-timeline__year">{{ it.year }}</div>
              <div class="lp-timeline__body">
                <h4>{{ it.h }}</h4>
                <p>{{ it.p }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- team -->
      <section class="lp-section lp-section--tight" id="team">
        <div class="lp-container">
          <div style="text-align:center;max-width:720px;margin:0 auto">
            <h2 class="lp-h2 reveal" data-d="1" style="margin-top:16px">Builders, players, coaches.</h2>
            <p class="lp-lede reveal" data-d="2" style="margin-top:16px;margin-left:auto;margin-right:auto">
              Most of us still play in a league. A few of us never picked up a disc until we joined.
              All of us care about how this thing feels in your hand.
            </p>
          </div>
          <div class="lp-team">
            <div v-for="m in team" :key="m.n" class="lp-team-card reveal" data-d="1">
              <div class="lp-team-card__avatar" :style="{ background: `linear-gradient(135deg,${m.c},${m.c}cc)` }">
                {{ m.i }}
              </div>
              <h4>{{ m.n }}</h4>
              <p>{{ m.r }}</p>
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
              <h2>Pre-order a disc. <em>Get the app early.</em></h2>
              <p>Pre-orders ship in the order placed, starting fall 2026. App invites land two weeks before your
                disc.</p>
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
    <SiteFooter/>
  </div>
</template>
