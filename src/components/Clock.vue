<template>
    <div class="clock">
        <span>{{ time }}</span>
    </div>
</template>

<script>
  const options = {
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  }
  export default {
    name: 'clock',
    data () {
      return {
        time: (new Date()).toLocaleTimeString('en-gb', options).replace(/,/g, ' ')
      }
    },
    methods: {
      updateTime () {
        let now = new Date()
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
