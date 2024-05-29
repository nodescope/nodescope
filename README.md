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
nodescope.local/
├── .vscode/
├── public/
├── src/
│   ├── components/
│   │   └── Home.vue
│   ├── views/
│   │   └── TerminalView.vue
├── node_modules/
├── server/
│   ├── server.js
│   └── depricated_getIPAddress.js
├── index.html
├── jsconfig.json
├── .gitignore
├── .eslintrc.cjs
├── .prettierrc.json
├── README.md
├── package-lock.json
├── package.json
├── vite.config.js
├── ecosystem.config.js
```

### Concurrently Running Backend and Frontend

```sh
npm run start-dev
```

### Observations and Fixes

_Error Handling: Sentry and external resource errors are not critical for functionality and can be ignored if not using those services._
