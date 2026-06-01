<script setup>
import { RouterLink } from 'vue-router'
import { useScrollReveal } from '@/composables/useScrollReveal'
import Atmosphere from '@/components/features/Atmosphere.vue'
import SiteNav from '@/components/layout/SiteNav.vue'
import SiteFooter from '@/components/layout/SiteFooter.vue'
import Eyebrow from '@/components/ui/Eyebrow.vue'
import LIcon from '@/components/ui/LIcon.vue'
import MobileApp from '@/components/features/MobileApp.vue'

useScrollReveal()

const pains = [
  { no: '01', h: 'You throw, you guess.', p: 'Was that 25 meters or 40? Did your flick really pick up speed this week? Without data, every "feels good" is just a feeling.' },
  { no: '02', h: 'Practice plateaus quietly.', p: 'You repeat the same drills for months without knowing what is improving, what is regressing, and where your real ceiling sits.' },
  { no: '03', h: 'Team progress lives in one head.', p: 'Coaches scribble on clipboards. Players forget the cue by the next tournament. Nothing carries over from one season to the next.' },
  { no: '04', h: 'Sports tech skips Ultimate.', p: 'Every other sport has wearables, sensors, dashboards. Ultimate has stopwatches and stories. You deserve better tools.' },
]

const metrics = [
  { v: '+38', u: '%', k: 'more meaningful reps per practice, across our pilot teams.' },
  { v: '30', u: 's', k: 'to pair a new disc, from unboxing to first throw recorded.' },
  { v: '0', u: '', k: 'subscriptions. SmartDisc is yours when you buy it — no monthly fee, ever.' },
  { v: '12', u: 'wks', k: 'median time to a new personal-best distance once players started tracking.' },
]

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

const avatarColors = ['#1d3d72', '#b8924f', '#6f93b5', '#3f9d6d']
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
            Every throw, <em>measured.</em>
          </h1>
          <p class="lp-lede reveal" data-d="2" style="text-align:center">
            SmartDisc is the first Ultimate Frisbee disc with sensors built inside —
            distance, speed, and spin captured on every throw, automatically.
            Open the companion app when you're done and everything is already there.
          </p>
          <div class="lp-hero__cta reveal" data-d="3">
            <RouterLink class="lp-btn lp-btn--gold lp-btn--lg" to="/products">
              Reserve yours — from €129
            </RouterLink>
            <a class="lp-btn lp-btn--glass lp-btn--lg" href="#how">See how it works</a>
          </div>
        </div>

        <!-- disc hero -->
        <div class="lp-disc-hero reveal" data-d="2">
          <div class="lp-disc-hero__glow" />
          <div class="lp-disc-hero__disc">
            <img src="/SmartDisc_Mark.png" alt="SmartDisc sensor disc" />
          </div>

          <div class="lp-floating-badge lp-floating-badge--a">
            <span class="lp-floating-badge__icon"><LIcon name="zap" :size="18" :stroke="2"/></span>
            <div>
              <div class="lp-floating-badge__l">27 m/s</div>
              <div class="lp-floating-badge__s">top speed today</div>
            </div>
          </div>
          <div class="lp-floating-badge lp-floating-badge--b">
            <span class="lp-floating-badge__icon lp-floating-badge__icon--ink"><LIcon name="target" :size="18" :stroke="2"/></span>
            <div>
              <div class="lp-floating-badge__l">+ 41 m</div>
              <div class="lp-floating-badge__s">personal record</div>
            </div>
          </div>
          <div class="lp-floating-badge lp-floating-badge--c">
            <span class="lp-floating-badge__icon lp-floating-badge__icon--azure"><LIcon name="rotate-cw" :size="18" :stroke="2"/></span>
            <div>
              <div class="lp-floating-badge__l">1,320 rpm</div>
              <div class="lp-floating-badge__s">spin captured</div>
            </div>
          </div>
        </div>
      </section>

      <!-- ===== STORY STRIP ===== -->
      <section class="lp-section" id="story">
        <div class="lp-container">
          <div style="text-align:center;max-width:760px;margin:0 auto">
            <Eyebrow>How it feels</Eyebrow>
            <h2 class="lp-h1 reveal" data-d="1" style="margin-top:16px;text-wrap:balance">
              The disc was already keeping score.
            </h2>
          </div>
          <div class="lp-story-strip">
            <div class="lp-story-cell reveal" data-d="1">
              <div class="lp-story-cell__cap">
                <h3>Throw like you always have.</h3>
                <p>The disc is 175 g and flies exactly like you expect — sensors are sealed inside, out of the way. No wearable, no clip, no warm-up ritual.</p>
              </div>
            </div>
            <div class="lp-story-cell reveal" data-d="2">
              <div class="lp-story-cell__cap">
                <h3>Every throw is captured, automatically.</h3>
                <p>Distance, speed, and spin — recorded the instant the disc leaves your hand, on every throw in every session. Walk off the field. Everything is already there.</p>
              </div>
            </div>
            <div class="lp-story-cell reveal" data-d="3">
              <div class="lp-story-cell__cap">
                <h3>Hand the disc to your line. Keep the data.</h3>
                <p>Share a disc with up to twelve teammates in read-only mode. Coaches see the season. Players see their own throws. Nobody argues.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ===== ECOSYSTEM ===== -->
      <section class="lp-section" id="app">
        <div class="lp-container">
          <div style="text-align:center;max-width:780px;margin:0 auto">
            <Eyebrow>The disc</Eyebrow>
            <h2 class="lp-h1 reveal" data-d="1" style="margin-top:16px;text-wrap:balance">
              Inside the disc, everything you threw.
            </h2>
            <p class="lp-lede reveal" data-d="2" style="margin-top:22px;margin-left:auto;margin-right:auto">
              Every sensor is sealed inside the disc itself — nothing on your wrist, nothing to clip on.
              When you're ready to review, the companion app connects and every throw is waiting.
            </p>
          </div>
          <div class="lp-ecosystem">
            <div class="lp-ecosystem__phone reveal" data-d="2">
              <MobileApp screen="discs" :width="340" platform="ios" />
            </div>
            <div class="lp-ecosystem__panel lp-ecosystem__panel--a reveal" data-d="1">
              <Eyebrow>Personal record</Eyebrow>
              <div style="margin-top:4px"><span class="big">+41<small>m</small></span></div>
              <p>Beat your March longest huck by four meters this week.</p>
            </div>
            <div class="lp-ecosystem__panel lp-ecosystem__panel--b reveal" data-d="2">
              <div class="row">
                <span class="ic"><LIcon name="zap" :size="18" :stroke="2"/></span>
                <div>
                  <h4>Top speed · today</h4>
                  <p style="margin:0">27 m/s flick across the endzone.</p>
                </div>
              </div>
            </div>
            <div class="lp-ecosystem__panel lp-ecosystem__panel--c reveal" data-d="3">
              <Eyebrow>Sky Hammer · sharing</Eyebrow>
              <div class="row" style="margin-top:10px">
                <div style="display:inline-flex;flex:none">
                  <span v-for="(n,ni) in ['MC','JB','LK']" :key="n"
                        :style="{ width:'32px',height:'32px',borderRadius:'50%',background:avatarColors[ni%4],color:'#fff',display:'inline-flex',alignItems:'center',justifyContent:'center',fontFamily:'var(--font-display)',fontWeight:600,fontSize:'12px',marginLeft:ni===0?'0':'-10px',border:'2px solid rgba(255,255,255,.9)' }">
                    {{n}}
                  </span>
                </div>
                <p style="margin:0">Mia, Jonas and Lars have read-only access.</p>
              </div>
            </div>
            <div class="lp-ecosystem__panel lp-ecosystem__panel--d reveal" data-d="4">
              <div class="row">
                <span class="ic ic--ink"><LIcon name="qr-code" :size="18" :stroke="2"/></span>
                <div>
                  <h4>Add a disc</h4>
                  <p style="margin:0">Scan the QR on the rim, enter the password, done.</p>
                </div>
              </div>
            </div>
            <div class="lp-ecosystem__panel--disc">
              <img src="/SmartDisc_Mark.png" alt="" />
            </div>
          </div>
        </div>
      </section>

      <!-- ===== PROBLEM (dark) ===== -->
      <section class="lp-section lp-section--dark" id="problem">
        <div class="lp-container">
          <div class="lp-problem-grid">
            <div>
              <Eyebrow :ondark="true">The problem</Eyebrow>
              <h2 class="lp-h1 reveal" data-d="1" style="margin-top:16px;max-width:16ch;text-wrap:balance">
                Ultimate is a precision sport played without precision tools.
              </h2>
              <p class="lp-lede reveal" data-d="2" style="margin-top:22px">
                The throw that wins a final and the throw that loses it look almost identical.
                The difference is measurable — but until now, no one was measuring.
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
            <Eyebrow>How it works</Eyebrow>
            <h2 class="lp-h1 reveal" data-d="1" style="margin-top:16px">
              A disc that <span class="lp-kicker">remembers</span> what you did with it.
            </h2>
          </div>
          <div class="lp-solution-steps">
            <div class="lp-step reveal" data-d="1">
              <span class="lp-step__no">1</span>
              <Eyebrow>Pair once</Eyebrow>
              <h3>Scan the rim. Done forever.</h3>
              <p>Each SmartDisc has a unique QR code laser-etched into its rim. Scan it from the companion app once, enter the disc password from the box, and the disc is yours — paired in seconds, remembered permanently.</p>
            </div>
            <div class="lp-step reveal" data-d="2">
              <span class="lp-step__no">2</span>
              <Eyebrow>Throw</Eyebrow>
              <h3>The disc captures everything. You just throw.</h3>
              <p>Sensors sealed inside the disc read distance, speed, and spin on every throw — silently, automatically, with no input from you. The disc feels like a regulation 175 g because it is one.</p>
            </div>
            <div class="lp-step reveal" data-d="3">
              <span class="lp-step__no">3</span>
              <Eyebrow>Read</Eyebrow>
              <h3>The app reads what the disc recorded.</h3>
              <p>Walk off the field and open the companion app. Every throw is already there, sorted by session. Rename the ones that mattered, share the disc with your line.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- ===== METRICS (dark) ===== -->
      <section class="lp-section lp-section--dark" id="metrics">
        <div class="lp-container">
          <div style="display:flex;align-items:flex-end;justify-content:space-between;gap:32px;flex-wrap:wrap">
            <div>
              <Eyebrow :ondark="true">Why it works</Eyebrow>
              <h2 class="lp-h1 reveal" data-d="1" style="margin-top:16px;max-width:18ch;text-wrap:balance">
                The numbers stop being feelings.
              </h2>
            </div>
            <p class="lp-body reveal" data-d="2" style="max-width:44ch;color:var(--fg2-on-dark)">
              From two seasons of beta with club and college teams across three continents.
            </p>
          </div>
          <div class="lp-metrics">
            <div v-for="(m,i) in metrics" :key="i"
                 class="lp-metric reveal" :data-d="String((i%4)+1)">
              <div class="lp-metric__v">{{m.v}}<span class="lp-metric__u">{{m.u}}</span></div>
              <div class="lp-metric__k">{{m.k}}</div>
            </div>
          </div>
        </div>
      </section>

      <!-- ===== SOCIAL PROOF ===== -->
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

    </main>
    <SiteFooter />
  </div>
</template>

<style scoped>
.lp-disc-hero {
  position: relative;
  margin-top: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 560px;
}
.lp-disc-hero__glow {
  position: absolute;
  width: 580px;
  height: 580px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(146,178,220,.22) 0%, rgba(222,195,140,.12) 55%, transparent 75%);
  pointer-events: none;
  filter: blur(2px);
}
.lp-disc-hero__disc {
  width: 420px;
  height: 420px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 3;
}
.lp-disc-hero__disc img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  animation: discBob 8s ease-in-out infinite;
  filter: drop-shadow(0 50px 80px rgba(10,28,61,.35)) drop-shadow(0 0 48px rgba(184,146,79,.2));
}
@media (max-width: 980px) {
  .lp-disc-hero { min-height: 420px; }
  .lp-disc-hero__disc { width: 320px; height: 320px; }
  .lp-disc-hero__glow { width: 400px; height: 400px; }
}
@media (max-width: 720px) {
  .lp-disc-hero { min-height: 300px; margin-top: 40px; }
  .lp-disc-hero__disc { width: 240px; height: 240px; }
  .lp-disc-hero__glow { width: 300px; height: 300px; }
}
</style>
