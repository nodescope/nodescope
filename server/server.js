import express from 'express'
import os from 'os'
import cors from 'cors'

const app = express()
app.use(cors())

// Endpoint to get local IP address
app.get('/api/local-ip', (req, res) => {
  const networkInterfaces = os.networkInterfaces()
  const addresses = []

  for (const interfaceName in networkInterfaces) {
    for (const address of networkInterfaces[interfaceName]) {
      if (address.family === 'IPv4' && !address.internal) {
        addresses.push(address.address)
      }
    }
  }

  res.json({ localIp: addresses[0] })
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
