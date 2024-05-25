<template>
  <div class="terminal-view">
    <!-- Installation Instructions -->
    <div class="installation-instructions">
      <h2>Install Termius</h2>
      <p>
        <a href="https://www.termius.com/" target="_blank" rel="noopener" style="font-weight: bold"
          >Termius</a
        >
        is an SSH client available on various platforms like Windows, macOS, Linux, iOS, and
        Android. It offers a straightforward interface for managing SSH connections securely. Key
        features include autocompletion of saved sessions and quick access to connection history,
        simplifying user interaction. Termius allows one-click connectivity across devices,
        eliminating the need for manual entry of IP addresses, ports, and passwords.
      </p>
      <p style="text-align: center">
        To download Termius, follow the instructions in one of the sections below 👇<br />

        <a
          href="https://support.termius.com/hc/en-us/articles/900007733143-Installation#:~:text=The%20website%C2%A0%20version%20of%20Termius%20will%20auto%2Dupdate.%20Termius%20in%20Mac%20App%20Store%20may%20or%20may%20not%20auto%2Dupdate%2C%20depending%20on%20your%20settings%20in%20Mac%20App%20Store."
          target="_blank"
          rel="noopener"
          >MacOS</a
        >
        -
        <a
          href="https://support.termius.com/hc/en-us/articles/900007733143-Installation#:~:text=The%20website%20version%20of%20Termius%20will%20auto%2Dupdate.%20Termius%20in%20Microsoft%20Store%20may%20or%20may%20not%20auto%2Dupdate%2C%20depending%20on%20your%20settings%20in%20Microsoft%20Store."
          target="_blank"
          rel="noopener"
          >Windows</a
        >
        -
        <a
          href="https://support.termius.com/hc/en-us/articles/900007733143-Installation#:~:text=in%20Microsoft%20Store.-,Linux,-Termius%20for%20Linux"
          target="_blank"
          rel="noopener"
          >Linux</a
        >
        -
        <a
          href="https://support.termius.com/hc/en-us/articles/900007733143-Installation#:~:text=an%20SFTP%20session.-,iOS%2C%20iPadOS,-Download%20Termius%20from"
          target="_blank"
          rel="noopener"
          >iOS, iPadOS</a
        >
        -
        <a
          href="https://support.termius.com/hc/en-us/articles/900007733143-Installation#:~:text=from%20App%20Store-,Android,-Download%20Termius%20from"
          target="_blank"
          rel="noopener"
          >Android</a
        >
        -
        <a
          href="https://support.termius.com/hc/en-us/articles/900007733143-Installation#:~:text=5%20and%20newer.-,ChromeOS,-On%20Chrome%20OS"
          target="_blank"
          rel="noopener"
          >ChromeOS</a
        >
      </p>

      <p>
        Alternatively, you may set up a remote SSH connection using your operating system's default
        SSH client, such as PowerShell or Command Prompt on Windows, or using the 'ssh' commands in
        Linux or macOS terminals respectively.
      </p>
      <!-- Include the Termius image -->
      <img src="@/assets/termius.png" alt="Termius" class="termius-image" />
    </div>

    <!-- Connection Details -->
    <div class="connection-details">
      <h2>Connection Details</h2>
      <!-- Display Generated Connection Details Here -->
      <h2>Local IP Address</h2>
      <p>{{ localIp }}</p>
      <!-- Add more connection details as needed -->
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      response: null
    }
  },
  async created() {
    try {
      const res = await axios.get('http://localhost:3000/api/local-ip')
      this.response = res.data
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }
}
</script>

<style>
/* CSS rules for the Termius image */
.termius-image {
  max-width: 100%; /* Ensures the image fills its container */
  height: auto; /* Maintains aspect ratio */
  display: block; /* Ensures proper spacing */
  margin: 20px auto; /* Adds margin for spacing */
}
</style>
