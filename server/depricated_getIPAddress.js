const { execSync } = require('child_process')

function getIPAddress() {
  try {
    // Execute shell command to get IP address
    const ipOutput = execSync(
      "ip a | grep 'inet ' | grep -v '127.0.0.1' | awk '{print $2}' | cut -d '/' -f1 | head -n 1"
    )

    // Convert buffer to string and extract IP address
    const ipAddress = ipOutput.toString().trim()

    return ipAddress
  } catch (error) {
    console.error('Error getting IP address:', error)
    return null
  }
}

// Usage
const ipAddress = getIPAddress()
console.log('IP Address:', ipAddress)
