<script setup>
import { useScrollReveal } from '@/composables/useScrollReveal'
import Atmosphere from '@/components/features/Atmosphere.vue'
import SiteNav from '@/components/layout/SiteNav.vue'
import SiteFooter from '@/components/layout/SiteFooter.vue'
import Eyebrow from '@/components/ui/Eyebrow.vue'
import LIcon from '@/components/ui/LIcon.vue'

useScrollReveal()
</script>

<template>
  <Atmosphere />
  <div class="lp-page">
    <SiteNav />
    <main>

      <!-- hero -->
      <section class="lp-container lp-pagehero">
        <h1 class="reveal" data-d="1">Let's <em>talk.</em></h1>
        <p class="reveal" data-d="2">
          Two ways to reach us. We answer every message,
          usually within one business day.
        </p>
      </section>

      <!-- contact cards -->
      <section class="lp-section lp-section--tight">
        <div class="lp-container">
          <div class="lp-contact-grid">

            <!-- email -->
            <div class="lp-contact-feature reveal" data-d="1">
              <div class="lp-contact-feature__glow lp-contact-feature__glow--gold" />
              <div class="lp-contact-feature__glow lp-contact-feature__glow--azure" />
              <div style="position:relative">
                <span class="lp-contact-feature__ic">
                  <LIcon name="mail" :size="22" :stroke="1.75"/>
                </span>
                <h2 class="lp-contact-feature__heading">smartdisc@mailo.com</h2>
                <p class="lp-contact-feature__body">
                  Pre-order questions, team bundles, press, partnerships —
                  one inbox, one team, fast replies.
                </p>
                <div class="lp-contact-feature__promise">
                  <LIcon name="zap" :size="12" :stroke="2"/>
                  Replies within one business day
                </div>
              </div>
            </div>

            <!-- phone -->
            <div class="lp-contact-feature lp-contact-feature--light reveal" data-d="2">
              <div style="position:relative">
                <span class="lp-contact-feature__ic lp-contact-feature__ic--ink">
                  <LIcon name="phone" :size="22" :stroke="1.75"/>
                </span>
                <h2 class="lp-contact-feature__heading lp-contact-feature__heading--ink">+43 677 6209 2117</h2>
                <p class="lp-contact-feature__body lp-contact-feature__body--ink">
                  Prefer to talk? Give us a call during business hours.
                  Monday to Friday, 9 am – 5 pm CET.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

    </main>
    <SiteFooter />
  </div>
</template>
