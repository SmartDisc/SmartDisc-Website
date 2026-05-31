<script setup>
import { RouterLink } from 'vue-router'
import StoreBadge from './StoreBadge.vue'
</script>

<template>
  <footer class="lp-footer">
    <div class="lp-container">
      <div class="lp-footer__top">
        <div>
          <div class="lp-footer__brand">
            <img src="../../public/logo.png" alt="" />
            <b>SMART DISC</b>
          </div>
          <p class="lp-footer__about">
            Smart sensor frisbees and the mobile app that goes with them.
            Built for Ultimate, by people who still play it.
          </p>
          <div class="lp-footer__badges">
            <StoreBadge platform="ios" :small="true" :coming-soon="true" />
            <StoreBadge platform="android" :small="true" :coming-soon="true" />
          </div>
        </div>
        <div class="lp-footer__col">
          <h4>Shop</h4>
          <ul>
            <li><RouterLink to="/products">All products</RouterLink></li>
            <li><RouterLink to="/products#disc">SmartDisc Ultimate</RouterLink></li>
            <li><RouterLink to="/products#pro">SmartDisc Pro</RouterLink></li>
            <li><RouterLink to="/products#dock">Charging Dock</RouterLink></li>
            <li><RouterLink to="/products#bundle">Team Bundle</RouterLink></li>
          </ul>
        </div>
        <div class="lp-footer__col">
          <h4>Company</h4>
          <ul>
            <li><RouterLink to="/about">About</RouterLink></li>
            <li><RouterLink to="/about#story">Our story</RouterLink></li>
            <li><RouterLink to="/about#team">Team</RouterLink></li>
            <li><RouterLink to="/contact">Contact</RouterLink></li>
            <li><a href="#">Press kit</a></li>
          </ul>
        </div>
        <div class="lp-footer__col">
          <h4>Support</h4>
          <ul>
            <li><RouterLink to="/faq">FAQ</RouterLink></li>
            <li><RouterLink to="/contact">Pre-order help</RouterLink></li>
            <li><a href="#">Shipping</a></li>
            <li><a href="#">Warranty</a></li>
            <li><a href="#">Tournament use</a></li>
          </ul>
        </div>
      </div>
      <div class="lp-footer__bot">
        <span>© 2026 SmartDisc · Built in Vienna</span>
        <div class="lp-footer__social">
          <a href="#" aria-label="Instagram">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".6" fill="currentColor"/>
            </svg>
          </a>
          <a href="#" aria-label="YouTube">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M2.5 8.5c0-1.7 1.3-3 3-3h13c1.7 0 3 1.3 3 3v7c0 1.7-1.3 3-3 3h-13c-1.7 0-3-1.3-3-3z"/>
              <path d="M10 9.5l5 2.5-5 2.5z" fill="currentColor" stroke="none"/>
            </svg>
          </a>
          <a href="#" aria-label="X">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M4 4l16 16M20 4L4 20"/>
            </svg>
          </a>
          <a href="#" aria-label="LinkedIn">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <rect x="3" y="3" width="18" height="18" rx="3"/>
              <path d="M7 10v7M7 7.5v.01M11 17v-7M11 13c0-1.7 1.3-3 3-3s3 1.3 3 3v4"/>
            </svg>
          </a>
        </div>
        <span>Privacy · Terms · Imprint</span>
      </div>
    </div>
  </footer>
</template>
