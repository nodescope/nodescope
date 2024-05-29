<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <div class="logo-wrapper">
      <img
        alt="Nodescope Dark"
        class="logo"
        src="@/assets/logo_dark.png"
        width="250"
        height="250"
      />
    </div>

    <div class="wrapper">
      <HelloWorld msg="Welcome to Nodescope!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/documentation">Documentation</RouterLink>
        <RouterLink to="/terminal">Terminal</RouterLink>
        <RouterLink to="/node-management">Node Management</RouterLink>
        <RouterLink to="/connect-wallet">Connect Wallet</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
body {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  margin: 0;
}

header {
  line-height: 1.5;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.logo-wrapper {
  display: flex;
  justify-content: center;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  nav {
    font-size: 1rem;
    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
