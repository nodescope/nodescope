module.exports = {
  apps: [
    {
      name: 'getIPAddress',
      script: './server/server.js',
      watch: true,
      ignore_watch: ['node_modules'],
      watch_options: {
        followSymlinks: false
      }
    }
  ]
}
