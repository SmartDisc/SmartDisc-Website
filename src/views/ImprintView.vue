<script setup>
import Atmosphere from '@/components/features/Atmosphere.vue'
import SiteNav from '@/components/layout/SiteNav.vue'
import SiteFooter from '@/components/layout/SiteFooter.vue'
</script>

<template>
  <Atmosphere/>
  <div class="lp-page">
    <SiteNav/>
    <main>

      <section class="lp-container lp-pagehero" style="text-align:left">
        <h1 style="font-size:clamp(36px,5vw,64px);margin-left:0">Imprint</h1>
        <p style="margin:0;text-align:left">Legal disclosure as required by § 5 TMG (German Telemedia Act).</p>
      </section>

      <section class="lp-section lp-section--tight">
        <div class="lp-container">
          <div class="lp-prose">

            <h2>Company information</h2>
            <p>
              <strong>SmartDisc</strong><br/>
              Vienna, Austria
            </p>

            <h2>Contact</h2>
            <p>
              Email: <a href="mailto:smartdisc@mailo.com">smartdisc@mailo.com</a>
            </p>

            <h2>Legal representatives</h2>
            <p>
              Managing Directors: Managing Directors: Petra Palinkas, Elias Vavra
            </p>

            <h2>Responsible for editorial content</h2>
            <p>
              Petra Palinkas, Erik Weidernauer, Elias Vavra<br/>
              SmartDisc · Vienna, Austria
            </p>

            <h2>Dispute resolution</h2>
            <p>
              The European Commission provides an Online Dispute Resolution (ODR) platform:
              <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer">
                ec.europa.eu/consumers/odr
              </a>.
              Our email address for this purpose: <a href="mailto:hello@smartdisc.io">hello@smartdisc.io</a>
            </p>
            <p>
              Consumers may submit complaints through this platform.
            </p>
            <p>
              We are neither obliged nor willing to participate in dispute resolution proceedings
              before a consumer arbitration board.
            </p>

            <h2>Liability for content</h2>
            <p>
              We make every effort to ensure that the information provided on this website is
              accurate and up to date. However, we assume no liability for the completeness,
              accuracy, or timeliness of the content.As soon as we become aware of any unlawful content, it will be
              removed without delay.
            </p>

            <h2>Liability for links</h2>
            <p>
              This website may contain links to external websites operated by third parties. We have
              no influence over the content of these websites and therefore assume no responsibility
              for their content.
              Responsibility for linked websites lies solely with their respective operators.
            </p>

            <h2>Copyright</h2>
            <p>
              All content, graphics, images, texts, software, and other materials published on this
              website are protected by Austrian, European Union, and international copyright laws.
              Any reproduction, distribution, modification, or commercial use requires the prior
              written consent of the respective rights holder.
              Third-party content is identified accordingly. If you believe that any content infringes
              copyright, please contact us so that the matter can be reviewed and addressed
              promptly.
            </p>

          </div>
        </div>
      </section>

    </main>
    <SiteFooter/>
  </div>
</template>
