<template>
    <div class="clock">
        <span>{{ time }}</span>
    </div>
</template>

<script>
export default {
  name: 'clock',
  data () {
    return {
      time: ''
    }
  },
  methods: {
    updateTime () {
      let now = new Date()
      const options = {
        weekday: 'short',
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      }
      this.time = now.toLocaleTimeString('en-gb', options).replace(/,/g, ' ')
    }
  },
  mounted () {
    setInterval(this.updateTime, 1000)
  }
}
</script>

<style>
</style>
