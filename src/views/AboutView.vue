<script setup>
import {RouterLink} from 'vue-router'
import {useScrollReveal} from '@/composables/useScrollReveal'
import Atmosphere from '@/components/features/Atmosphere.vue'
import SiteNav from '@/components/layout/SiteNav.vue'
import SiteFooter from '@/components/layout/SiteFooter.vue'

useScrollReveal()

// photo: optional path to an image in public/, e.g. '/team/petra.jpg' — shown instead of the initials
const team = [
  {i: 'PP', n: 'Petra Palinkas', r: 'Founder', c: '#1d3d72', photo: ''},
  {i: 'EV', n: 'Elias Vavra', r: 'Co-founder', c: '#b8924f', photo: ''},
  {i: 'EW', n: 'Erik Weidenauer', r: 'App & Website', c: '#6f93b5', photo: ''},
  {i: 'CS', n: 'Clemens Saurugg', r: 'Firmware & Hardware', c: '#3f9d6d', photo: ''},
  {i: 'AP', n: 'Amritpal Padda', r: 'Kamera Tracking', c: '#8aa6c2', photo: ''},
  {i: 'T', n: 'Tobias Weidmann', r: 'Hardware & PCB', c: '#b8924f', photo: ''}
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
        <h1 class="reveal" data-d="1">Built by players. <em>Made for players.</em></h1>
        <p class="lp-container" data-d="2">
          SmartDisc started as a diploma project driven by a simple idea: bring data-driven training to Ultimate
          Frisbee. Combining engineering, software development, and a passion for the sport, we turned that idea into a
          real product.
        </p>
      </section>

      <!-- story -->
      <section class="lp-section lp-section--tight" id="story">
        <div class="lp-container">
          <div>
            <h2 class="lp-h2" style="margin-top:16px">It started with a simple question - How can you improve a throw
              if you can't measure it? </h2>
            <p class="lp-body" style="font-size:17px;margin-top:18px">
              As Ultimate Frisbee players and technology enthusiasts, we noticed that while many sports rely on data
              and analytics, Ultimate still depends largely on observation and experience. We wanted to change that.

              What started as a diploma project quickly became an ambitious challenge: developing a smart disc capable
              of collecting real-time performance data without changing the feel or flight characteristics of a
              regulation 175 g Ultimate Frisbee.

              By combining mechatronics, software development, data analytics, and design, we transformed an idea into
              a working prototype: SmartDisc.
            </p>
          </div>

          <div class="lp-container" style="margin-top:clamp(48px,10vw,80px)">
            <div>
              <h2 class="lp-h2" style="margin-top:16px">Technology should support the game, not change it. </h2>
              <p class="lp-body" style="font-size:17px;margin-top:18px">
                We didn't want players to adapt to technology. We wanted technology to adapt to players.
                SmartDisc is designed to feel, fly, and perform like a regulation 175 g Ultimate Frisbee. The sensors
                work silently in the background, capturing valuable performance data without affecting the game itself.
                Technology shouldn't interrupt the game—it should help players get better.
              </p>

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
              <div class="lp-team-card__avatar"
                   :style="m.photo ? null : { background: `linear-gradient(135deg,${m.c},${m.c}cc)` }">
                <img v-if="m.photo" :src="m.photo" :alt="m.n"/>
                <template v-else>{{ m.i }}</template>
              </div>
              <h4>{{ m.n }}</h4>
              <p>{{ m.r }}</p>
            </div>
          </div>
        </div>
      </section>

    </main>
    <SiteFooter/>
  </div>
</template>
