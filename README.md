# nodescope.local

## Project: Bitcoin Full Node Management App

### Objective

Develop a web-based application to manage a Bitcoin full node, accessible via https://nodescope.local. The app will guide users through setup steps, including SSH setup, Bitcoin Core and Core Lightning configuration, and connecting their node to a remote node to spend Bitcoin over Lightning from anywhere.

### Environment

* Backend: Node.js with Express
* Frontend: Vue.js with Vite
* Deployment: Debian 12 on a headless single-board computer (SBC)

### Project Structure

```lua
.
├── ecosystem.config.js
├── index.html
├── jsconfig.json
├── package.json
├── package-lock.json
├── public
│   ├── favicon.ico
│   ├── logo_cold.png
│   ├── logo_dark.png
│   └── logo_light.png
├── README.md
├── server
│   ├── depricated_getIPAddress.js
│   └── server.js
├── src
│   ├── App.vue
│   ├── assets
│   │   ├── base.css
│   │   ├── logo_dark.png
│   │   ├── main.css
│   │   ├── termius.png
│   │   └── Vue_logo.svg
│   ├── components
│   │   ├── HelloWorld.vue
│   │   ├── icons
│   │   │   ├── IconCommunity.vue
│   │   │   ├── IconDocumentation.vue
│   │   │   ├── IconEcosystem.vue
│   │   │   ├── IconSupport.vue
│   │   │   ├── IconTooling.vue
│   │   │   └── IconWallet.vue
│   │   ├── TheWelcome.vue
│   │   └── WelcomeItem.vue
│   ├── main.js
│   ├── router
│   │   └── index.js
│   └── views
│       ├── AboutView.vue
│       ├── ConnectWalletView.vue
│       ├── DocumentationView.vue
│       ├── HomeView.vue
│       ├── NodeManagementView.vue
│       └── TerminalView.vue
├── true
└── vite.config.js
```

### Concurrently Running Backend and Frontend

```sh
npm run start-dev
```

### Observations and Fixes

_Error Handling: Sentry and external resource errors are not critical for functionality and can be ignored if not using those services._
