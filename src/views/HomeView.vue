<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { useScrollReveal } from '@/composables/useScrollReveal'
import Atmosphere from '@/components/Atmosphere.vue'
import SiteNav from '@/components/SiteNav.vue'
import SiteFooter from '@/components/SiteFooter.vue'
import Eyebrow from '@/components/Eyebrow.vue'
import CheckIcon from '@/components/CheckIcon.vue'
import LIcon from '@/components/LIcon.vue'
import MobileApp from '@/components/MobileApp.vue'
import StoreBadgeRow from '@/components/StoreBadgeRow.vue'

useScrollReveal()

const faqOpen = ref(0)
const faqItems = [
  { q: 'When does SmartDisc ship?', a: 'All current orders are pre-orders. We start shipping in early fall 2026 — exact date depends on your region and shipping window. Pre-orders ship in the order they were placed.' },
  { q: 'Is the app available now?', a: 'The SmartDisc app for iOS and Android arrives alongside the disc. Pre-order customers get TestFlight and Play Console early access roughly two weeks before shipping.' },
  { q: 'Does the disc feel different than a regular 175?', a: 'It weighs the same 175 grams with identical flight characteristics. The sensors and battery are distributed so the center of mass is exactly where the disc council expects it.' },
]

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
    <SiteNav active="home" />
    <main>

      <!-- ===== HERO ===== -->
      <section class="lp-hero lp-container" id="top">
        <div class="lp-hero__top">
          <h1 class="lp-display reveal" data-d="1" style="max-width:14ch;text-wrap:balance;text-align:center">
            Every throw, <em>measured.</em>
          </h1>
          <p class="lp-lede reveal" data-d="2" style="text-align:center">
            SmartDisc is the first Ultimate Frisbee disc with sensors inside —
            paired with a beautiful companion app for iOS and Android.
            Every throw, named and ready to review by the time you get home.
          </p>
          <div class="lp-hero__cta reveal" data-d="3">
            <RouterLink class="lp-btn lp-btn--gold lp-btn--lg" to="/products">
              Reserve yours — from €129
            </RouterLink>
            <a class="lp-btn lp-btn--glass lp-btn--lg" href="#how">See how it works</a>
          </div>
          <div class="reveal" data-d="4" style="margin-top:8px">
            <StoreBadgeRow justify="center" :small="true" />
          </div>
        </div>

        <!-- phone trio -->
        <div class="lp-phone-rail reveal" data-d="2">
          <div class="lp-phone-rail__side lp-phone-rail__side--left">
            <MobileApp screen="detail" :width="260" platform="ios" />
          </div>
          <div class="lp-phone-rail__center">
            <MobileApp screen="discs" :width="340" platform="ios" />
          </div>
          <div class="lp-phone-rail__side lp-phone-rail__side--right">
            <MobileApp screen="shared" :width="260" platform="android" />
          </div>

          <!-- floating badges -->
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
              The moment after the throw is suddenly worth remembering.
            </h2>
            <p class="lp-lede reveal" data-d="2" style="margin-top:22px;margin-left:auto;margin-right:auto">
              Three quiet rituals built into the app — no notifications, no streaks, no nagging.
              Just your discs, your throws, and the friends you share them with.
            </p>
          </div>
          <div class="lp-story-strip">
            <div class="lp-story-cell reveal" data-d="1">
              <div class="lp-story-cell__cap">
                <Eyebrow>After practice</Eyebrow>
                <h3>Walk off the field. Open one screen.</h3>
                <p>Every disc in your bag is on the home screen, sorted by last throw. Tap one and the practice is laid out for you, throw by throw.</p>
              </div>
            </div>
            <div class="lp-story-cell reveal" data-d="2">
              <div class="lp-story-cell__cap">
                <Eyebrow>On the bus home</Eyebrow>
                <h3>Name the throws worth remembering.</h3>
                <p>The big huck. The first flick that finally landed. Rename them, star them, hold onto them. Forget the in-betweens.</p>
              </div>
            </div>
            <div class="lp-story-cell reveal" data-d="3">
              <div class="lp-story-cell__cap">
                <Eyebrow>Before the next tournament</Eyebrow>
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
            <Eyebrow>The app</Eyebrow>
            <h2 class="lp-h1 reveal" data-d="1" style="margin-top:16px;text-wrap:balance">
              Your bag, your throws, your team — quietly composed.
            </h2>
            <p class="lp-lede reveal" data-d="2" style="margin-top:22px;margin-left:auto;margin-right:auto">
              One app for iOS and Android. No accounts to manage, no sensors to charge,
              no settings to fight with. It already knows which disc just flew.
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
            <!-- Step 1 -->
            <div class="lp-step reveal" data-d="1">
              <span class="lp-step__no">1</span>
              <Eyebrow>Pair</Eyebrow>
              <h3>Scan the disc, pair the app.</h3>
              <p>Each SmartDisc ships with a unique QR code laser-etched into the rim. Scan it from the app, enter the disc password printed on the inside of the box, and your disc is paired in seconds.</p>
              <div class="lp-step__art">
                <svg viewBox="0 0 200 96" preserveAspectRatio="xMidYMid meet" style="width:100%;height:100%">
                  <defs><linearGradient id="qrG" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#102a57"/><stop offset="1" stop-color="#1d3d72"/></linearGradient></defs>
                  <rect x="62" y="14" width="68" height="68" rx="10" fill="#fff" stroke="rgba(16,42,87,.18)"/>
                  <template v-for="i in 36" :key="i">
                    <rect v-if="((i*7+3)%10)>4" :x="68+((i-1)%6)*10" :y="20+Math.floor((i-1)/6)*10" width="8" height="8" rx="1.5" fill="url(#qrG)"/>
                  </template>
                  <rect x="68" y="20" width="20" height="20" rx="3" fill="none" stroke="url(#qrG)" stroke-width="3"/>
                  <rect x="104" y="20" width="20" height="20" rx="3" fill="none" stroke="url(#qrG)" stroke-width="3"/>
                  <rect x="68" y="56" width="20" height="20" rx="3" fill="none" stroke="url(#qrG)" stroke-width="3"/>
                </svg>
              </div>
            </div>
            <!-- Step 2 -->
            <div class="lp-step reveal" data-d="2">
              <span class="lp-step__no">2</span>
              <Eyebrow>Throw</Eyebrow>
              <h3>Take it to practice, forget about it.</h3>
              <p>The disc keeps the feel of a regulation 175 g. Sensors inside read distance, speed and spin on every throw and sync the moment your phone is within Bluetooth range.</p>
              <div class="lp-step__art">
                <svg viewBox="0 0 200 96" preserveAspectRatio="xMidYMid meet" style="width:100%;height:100%">
                  <defs><linearGradient id="gG" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#f0e3c0"/><stop offset=".4" stop-color="#dec38c"/><stop offset="1" stop-color="#b8924f"/></linearGradient></defs>
                  <path d="M10 80 Q 60 30 130 50 T 195 28" stroke="rgba(16,42,87,.25)" stroke-width="1.5" fill="none" stroke-dasharray="3 4"/>
                  <ellipse cx="155" cy="42" rx="22" ry="9" fill="url(#gG)"/>
                  <ellipse cx="155" cy="40" rx="13" ry="5" fill="rgba(255,255,255,.4)"/>
                  <circle cx="30" cy="78" r="3" fill="#b8924f"/>
                  <circle cx="60" cy="62" r="3" fill="#dec38c"/>
                  <circle cx="100" cy="50" r="3" fill="#f0e3c0"/>
                </svg>
              </div>
            </div>
            <!-- Step 3 -->
            <div class="lp-step reveal" data-d="3">
              <span class="lp-step__no">3</span>
              <Eyebrow>Review</Eyebrow>
              <h3>Open the app. Re-live the session.</h3>
              <p>Every throw lands in the app named by timestamp. Rename the ones that mattered, favorite the ones worth showing, share the disc with your line.</p>
              <div class="lp-step__art">
                <svg viewBox="0 0 200 96" preserveAspectRatio="xMidYMid meet" style="width:100%;height:100%">
                  <defs>
                    <linearGradient id="bG" x1="0" y1="1" x2="0" y2="0"><stop offset="0" stop-color="#1d3d72"/><stop offset="1" stop-color="#6f93b5"/></linearGradient>
                    <linearGradient id="gG2" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#f0e3c0"/><stop offset=".4" stop-color="#dec38c"/><stop offset="1" stop-color="#b8924f"/></linearGradient>
                  </defs>
                  <rect v-for="(bh,bi) in [40,64,50,88,70,92,58,76,84,66]" :key="bi"
                        :x="14+bi*18" :y="92-bh" width="11" :height="bh" rx="2"
                        :fill="(bi===3||bi===5)?'url(#gG2)':'url(#bG)'"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ===== BENTO ===== -->
      <section class="lp-section" id="why">
        <div class="lp-container">
          <div style="text-align:center;max-width:720px;margin:0 auto">
            <Eyebrow>Why people stay</Eyebrow>
            <h2 class="lp-h1 reveal" data-d="1" style="margin-top:16px">
              Built around the experience of owning a disc, not a gadget.
            </h2>
          </div>
          <div class="lp-bento">
            <div class="lp-bento__cell lp-bento__cell--lg lp-bento__cell--ink reveal" data-d="1">
              <div class="lp-bento__cell__body">
                <Eyebrow :ondark="true">The ritual</Eyebrow>
                <h3>It feels like opening a journal, not a dashboard.</h3>
                <p>Every throw is already there when you tap in — sorted, named, and waiting for the ones you'll remember. No empty states, no setup, no streaks to keep.</p>
              </div>
              <div class="lp-bento__cell__art">
                <svg viewBox="0 0 600 140" preserveAspectRatio="none" style="width:100%;height:100%;display:block">
                  <defs><linearGradient id="bl1" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0" stop-color="#6f93b5" stop-opacity="0"/>
                    <stop offset=".4" stop-color="#dec38c" stop-opacity=".8"/>
                    <stop offset="1" stop-color="#6f93b5" stop-opacity="0"/>
                  </linearGradient></defs>
                  <path v-for="(y,i) in [20,50,80,110]" :key="i"
                        :d="`M0 ${y} Q 200 ${y-10-i*4} 400 ${y+5+i*2} T 800 ${y}`"
                        stroke="url(#bl1)" stroke-width="1.5" fill="none"/>
                </svg>
              </div>
            </div>
            <div class="lp-bento__cell lp-bento__cell--sm reveal" data-d="2">
              <div class="lp-bento__cell__body">
                <span class="lp-feature__icon" style="width:40px;height:40px"><LIcon name="feather" :size="20" :stroke="2"/></span>
                <h3>Still 175 grams.</h3>
                <p>The disc you throw, the disc the WFDF tested. The sensors are invisible to your hand.</p>
              </div>
            </div>
            <div class="lp-bento__cell lp-bento__cell--md lp-bento__cell--gold reveal" data-d="3">
              <div class="lp-bento__cell__body">
                <Eyebrow :gold="true">Owned, not subscribed</Eyebrow>
                <h3 style="color:#4a3712">One disc. One app. Yours for life.</h3>
                <p style="color:#4a3712">No monthly fee. No premium tier. The app is included with the disc, on iOS and Android, forever.</p>
              </div>
            </div>
            <div class="lp-bento__cell lp-bento__cell--md reveal" data-d="4">
              <div class="lp-bento__cell__body">
                <span class="lp-feature__icon" style="width:40px;height:40px"><LIcon name="users" :size="20" :stroke="2"/></span>
                <h3>Read-only sharing.</h3>
                <p>Send the disc, not the data. Teammates and coaches see throws, never settings. Revoke any time.</p>
              </div>
            </div>
            <div class="lp-bento__cell lp-bento__cell--sm reveal" data-d="5">
              <div class="lp-bento__cell__body">
                <span class="lp-feature__icon" style="width:40px;height:40px"><LIcon name="battery-charging" :size="20" :stroke="2"/></span>
                <h3>A full season per charge.</h3>
                <p>Roughly 10,000 throws between charges. Sits on the inductive dock between sessions.</p>
              </div>
            </div>
            <div class="lp-bento__cell lp-bento__cell--sm reveal" data-d="6">
              <div class="lp-bento__cell__body">
                <span class="lp-feature__icon" style="width:40px;height:40px"><LIcon name="shield-check" :size="20" :stroke="2"/></span>
                <h3>Your data, exportable.</h3>
                <p>Export every throw as CSV from Settings. No ads, no data sales — ever.</p>
              </div>
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

      <!-- ===== FAQ PREVIEW ===== -->
      <section class="lp-section" id="faq">
        <div class="lp-container">
          <div style="text-align:center;max-width:680px;margin:0 auto">
            <Eyebrow>FAQ</Eyebrow>
            <h2 class="lp-h1 reveal" data-d="1" style="margin-top:16px">
              Questions worth answering.
            </h2>
          </div>
          <div class="lp-faq">
            <div v-for="(it,i) in faqItems" :key="i"
                 :class="['lp-faq__item reveal', faqOpen===i && 'is-open']" :data-d="String((i%3)+1)">
              <button class="lp-faq__q" @click="faqOpen = (faqOpen===i ? -1 : i)">
                {{it.q}}
                <span class="lp-faq__plus">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
                    <path d="M12 5v14M5 12h14"/>
                  </svg>
                </span>
              </button>
              <div class="lp-faq__a">
                <div class="lp-faq__a-inner">{{it.a}}</div>
              </div>
            </div>
          </div>
          <div style="text-align:center;margin-top:28px">
            <RouterLink class="lp-btn lp-btn--glass lp-btn--md" to="/faq">Read all questions</RouterLink>
          </div>
        </div>
      </section>

      <!-- ===== FINAL CTA ===== -->
      <section class="lp-section" id="cta">
        <div class="lp-container">
          <div class="lp-cta-final reveal">
            <div class="lp-cta-final__disc"><img src="/SmartDisc_Mark.png" alt=""/></div>
            <div class="lp-cta-final__inner">
              <Eyebrow :ondark="true">One disc away</Eyebrow>
              <h2>Reserve a disc. <em>Get the app early.</em></h2>
              <p>Pre-orders ship fall 2026. App invites land in your inbox roughly two weeks before your disc.</p>
              <div class="lp-hero__cta">
                <RouterLink class="lp-btn lp-btn--gold lp-btn--lg" to="/products">
                  Reserve yours — from €129
                </RouterLink>
              </div>
              <div style="margin-top:4px">
                <StoreBadgeRow justify="center" />
              </div>
              <div class="lp-hero__sub" style="color:var(--fg2-on-dark)">
                <span><CheckIcon /> 30-day return</span>
                <span class="sep"/>
                <span><CheckIcon /> Tournament-legal at 175 g</span>
                <span class="sep"/>
                <span><CheckIcon /> Lifetime app access</span>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
    <SiteFooter />
  </div>
</template>
