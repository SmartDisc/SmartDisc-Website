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
        <h1 style="font-size:clamp(36px,5vw,64px);margin-left:0">Terms of Service</h1>
        <p style="margin:0;text-align:left">The rules that govern using SmartDisc products and services.</p>
      </section>

      <section class="lp-section lp-section--tight">
        <div class="lp-container">
          <div class="lp-prose">
            <span class="lp-prose__meta">Last updated: 13 July 2026</span>

            <h2>1. Agreement</h2>
            <p>
              These Terms of Service ("Terms") form a contract between you and SmartDisc, Austria ("SmartDisc"). By
              placing a pre-order, downloading the app, or using SmartDisc products and services, you agree to these
              Terms. If you do not agree, please do not use our products or services.
            </p>

            <h2>2. Pre-orders</h2>
            <h3>Pricing</h3>
            <p>
              Prices are shown in EUR and include VAT where required by Austrian and EU law.
            </p>
            <h3>Cancellation</h3>
            <p>
              You may cancel your pre-order at any time before we notify you that your disc has been
              dispatched. To cancel, email <a href="mailto:orders@smartdisc.io">orders@smartdisc.io</a>
              with your order reference. No charge will be made if you cancel before dispatch.
            </p>
            <h3>Pricing</h3>
            <p>
              Prices shown on the Products page are locked for pre-order customers. We will not raise
              the price between your reservation date and the charge date. All prices are shown in EUR
              and are inclusive of VAT where applicable. Currency conversion for non-EUR payments is
              handled at checkout and may vary slightly at the time of charge.
            </p>
            <h3>Delivery</h3>
            <p>
              Estimated delivery windows are provided in good faith but are not guaranteed. SmartDisc
              is not liable for delays caused by manufacturing, customs, or logistics partners.
              You will receive a tracking-window email at least two weeks before your disc is dispatched.
            </p>

            <h2>3. The app</h2>
            <p>
              The SmartDisc app is licensed, not sold. We grant you a personal, non-transferable, non-exclusive licence
              to use the app on devices you own, subject to these Terms and the applicable App Store or Google Play
              terms. The licence is valid for the lifetime of the paired disc and does not require any recurring
              payment. You may not reverse-engineer, decompile, or distribute the app. You may not attempt to intercept,
              replay, or spoof the Bluetooth signals emitted by a SmartDisc device.
            </p>
            <p>
              You may not reverse-engineer, decompile, or distribute the app. You may not attempt to
              intercept, replay, or spoof the Bluetooth signals emitted by a SmartDisc device.
            </p>

            <h2>4. Acceptable use</h2>
            <p>You agree not to use SmartDisc products or services to: </p>
            <ul>
              <li>Violate any applicable law or regulation</li>
              <li>Infringe the intellectual property rights of SmartDisc or any third party</li>
              <li>Transmit malware or interfere with the security of our infrastructure</li>
              <li>Scrape, crawl, or systematically access the website without prior written permission</li>
            </ul>

            <h2>5. Returns and warranty</h2>
            <h3>30-day return right</h3>
            <p>
              This return policy is provided in addition to any statutory consumer rights available under Austrian law.
            </p>
            <h3>Two-year limited warranty</h3>
            <p>
              SmartDisc warrants each disc against defects in sensors and battery for two years from the date of
              delivery. This warranty applies in addition to any mandatory rights under Austrian consumer protection
              legislation.
            </p>

            <h2>6. Intellectual property</h2>
            <p>
              All content, including text, graphics, software, designs, trademarks, and logos, is the property of
              SmartDisc and is protected by Austrian, European Union, and international intellectual property laws.
            </p>

            <h2>7. Limitation of liability</h2>
            <p>
              To the maximum extent permitted by Austrian law, SmartDisc's total liability for claims arising from these
              Terms or the use of our products shall not exceed the amount paid for the product giving rise to the
              claim.
            </p>
            <p>
              Nothing in these Terms limits liability for intent, gross negligence, personal injury, death,
              product liability claims, or any other liability that cannot be excluded under Austrian law.
            </p>

            <h2>8. Governing law and dispute resolution</h2>
            <p>
              These Terms shall be governed by the laws of the Republic of Austria, excluding conflict-of-law provisions
              and the UN Convention on Contracts for the International Sale of Goods (CISG).
            </p>
            <p>Consumers residing within the European Union may also rely on mandatory consumer protection provisions of
              their country of residence.
            </p>
            <p>The European Commission's Online Dispute Resolution platform is available at:
              <a href="https://ec.europa.eu/consumers/odr">https://ec.europa.eu/consumers/odr</a>
            </p>
            <p>SmartDisc will endeavour to resolve disputes amicably before legal action is taken. For disputes arising
              from these Terms, the competent courts of Austria shall have jurisdiction, unless mandatory consumer
              protection laws provide otherwise.
            </p>

            <h2>9. Changes to these Terms</h2>
            <p>
              We may update these Terms from time to time. Significant changes will be communicated to registered users
              at least 14 days before they take effect. Continued use of SmartDisc products or services after the
              effective date constitutes acceptance of the updated Terms.
            </p>

            <h2>10. Contact</h2>
            <p>
              For questions about these Terms:
              <a href="mailto:smartdisc@mailo.com">smartdisc@mailo.com</a><br/>
              SmartDisc · Austria
            </p>
          </div>
        </div>
      </section>

    </main>
    <SiteFooter/>
  </div>
</template>
