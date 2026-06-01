<script setup>
import Atmosphere from '@/components/features/Atmosphere.vue'
import SiteNav from '@/components/layout/SiteNav.vue'
import SiteFooter from '@/components/layout/SiteFooter.vue'
</script>

<template>
  <Atmosphere />
  <div class="lp-page">
    <SiteNav />
    <main>

      <section class="lp-container lp-pagehero" style="text-align:left">
        <h1 style="font-size:clamp(36px,5vw,64px);margin-left:0">Terms of Service</h1>
        <p style="margin:0;text-align:left">The rules that govern using SmartDisc products and services.</p>
      </section>

      <section class="lp-section lp-section--tight">
        <div class="lp-container">
          <div class="lp-prose">
            <span class="lp-prose__meta">Last updated: 1 June 2026</span>

            <h2>1. Agreement</h2>
            <p>
              These Terms of Service ("Terms") form a contract between you and SmartDisc GmbH,
              Stresemannstraße 374, 22761 Hamburg, Germany ("SmartDisc"). By placing a pre-order,
              downloading the app, or using the website at smartdisc.io, you agree to these Terms.
              If you do not agree, do not use our products or services.
            </p>

            <h2>2. Pre-orders</h2>
            <h3>What a pre-order is</h3>
            <p>
              A pre-order is a reservation, not an immediate purchase. You provide a payment method,
              which we authorise but do not charge until your disc is ready to ship. Your place in the
              fulfilment queue is set by the date and time of your reservation.
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
              The SmartDisc app is licensed, not sold. We grant you a personal, non-transferable,
              non-exclusive licence to use the app on devices you own, subject to these Terms and the
              applicable App Store or Google Play terms. The licence is valid for the lifetime of the
              paired disc and does not require any recurring payment.
            </p>
            <p>
              You may not reverse-engineer, decompile, or distribute the app. You may not attempt to
              intercept, replay, or spoof the Bluetooth signals emitted by a SmartDisc device.
            </p>

            <h2>4. Acceptable use</h2>
            <p>You agree not to use SmartDisc products or services to:</p>
            <ul>
              <li>Violate any applicable law or regulation</li>
              <li>Infringe the intellectual property rights of SmartDisc or any third party</li>
              <li>Transmit malware or interfere with the security of our infrastructure</li>
              <li>Scrape, crawl, or systematically access the website without prior written permission</li>
            </ul>

            <h2>5. Returns and warranty</h2>
            <h3>30-day return right</h3>
            <p>
              You may return your disc within 30 days of delivery for a full refund of the disc price
              plus original shipping. The disc must be in working condition. Normal play wear is accepted.
              Email <a href="mailto:orders@smartdisc.io">orders@smartdisc.io</a> to initiate a return;
              we will provide a prepaid return label.
            </p>
            <h3>Two-year limited warranty</h3>
            <p>
              SmartDisc warrants each disc against defects in sensors and battery for two years from
              the date of delivery. This warranty does not cover physical damage from impacts, water
              immersion beyond normal play conditions, or unauthorised modifications. To make a warranty
              claim, email <a href="mailto:support@smartdisc.io">support@smartdisc.io</a> with a
              description and photo of the defect.
            </p>

            <h2>6. Intellectual property</h2>
            <p>
              All content on smartdisc.io — including text, design, graphics, and code — is the
              property of SmartDisc GmbH and is protected by EU and international copyright law.
              The SmartDisc name and logo are registered trademarks. You may not use them without
              prior written consent.
            </p>

            <h2>7. Limitation of liability</h2>
            <p>
              To the maximum extent permitted by applicable law, SmartDisc's total liability to you
              for any claim arising out of or related to these Terms or your use of our products shall
              not exceed the amount you paid for the product giving rise to the claim. SmartDisc is not
              liable for indirect, incidental, or consequential damages. Nothing in these Terms limits
              liability that cannot be excluded under German consumer protection law.
            </p>

            <h2>8. Governing law and dispute resolution</h2>
            <p>
              These Terms are governed by the laws of Germany, excluding conflict-of-law provisions.
              The European Commission's Online Dispute Resolution platform is available at
              ec.europa.eu/consumers/odr. We are not obliged to participate in alternative dispute
              resolution proceedings but will attempt to resolve disputes amicably first. If no
              resolution is reached, the courts of Hamburg, Germany shall have exclusive jurisdiction.
            </p>

            <h2>9. Changes to these Terms</h2>
            <p>
              We may update these Terms from time to time. Material changes will be notified by email
              to registered customers at least 14 days before taking effect. Continued use after the
              effective date constitutes acceptance.
            </p>

            <h2>10. Contact</h2>
            <p>
              For questions about these Terms:
              <a href="mailto:hello@smartdisc.io">hello@smartdisc.io</a><br />
              SmartDisc GmbH · Stresemannstraße 374 · 22761 Hamburg · Germany
            </p>
          </div>
        </div>
      </section>

    </main>
    <SiteFooter />
  </div>
</template>
