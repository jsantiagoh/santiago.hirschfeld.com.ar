<template>
  <i v-bind:class="awesomeClasses" aria-hidden="true"></i>
</template>

<script>
import 'font-awesome/css/font-awesome.min.css'

export default {
  name: 'awesome-icon',
  props: {
    name: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      awesomeClasses: `fa fa-${this.name}`
    }
  }
}
</script>
