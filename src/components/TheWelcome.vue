<script setup>
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
</script>

<template>
  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>Documentation</template>

    Nodescope’s
    <a href="https://nodescope.site/documentation" target="_blank" rel="noopener"
      >official documentation</a
    >
    provides you with all information you need to get started.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>Terminal</template>

    Access the command-line interface to fully unlock your node’s potential. Customize settings and
    adapt Nodescope to meet your unique needs.
    <br />
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <EcosystemIcon />
    </template>
    <template #heading>Node Management</template>

    Monitor the live status of your Bitcoin and Lightning nodes. Get real-time blockchain updates
    and detailed insights into your Lightning network.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <i class="pi pi-wallet" style="font-size: 1.4rem"></i>
    </template>
    <template #heading>Connect Wallet</template>

    Securely manage your funds by connecting your wallet to your Lightning node. Follow our
    step-by-step guide to enable secure and convenient fund management directly from Nodescope.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <CommunityIcon />
    </template>
    <template #heading>Feedback</template>

    Got stuck? For assistance, feedback, or feature requests, don't hesitate to reach out to us. You
    can contact us directly through our
    <a href="https://nodescope.site/contact">contact page</a>, where you'll find all our contact
    details.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <SupportIcon />
    </template>
    <template #heading>Community</template>

    Stay updated on our journey. Don't miss out on our exciting events! Join our growing community
    of developers, enthusiasts, and node operators.

    <!-- Links to social media platforms -->

    Follow us on
    <a href="https://www.instagram.com/nodescope/" target="_blank" rel="noopener">Instagram</a>,
    <a href="https://twitter.com/Nodescope_" target="_blank" rel="noopener">Twitter</a>, and
    <a
      href="https://nostr.band/npub1yj69jq9f977y2f7vl96m6stf3rjyf3hym8ekf3g4senlqamz8l3qfsvhk7"
      target="_blank"
      rel="noopener"
      >Nostr</a
    >
    to stay connected.
  </WelcomeItem>
</template>
