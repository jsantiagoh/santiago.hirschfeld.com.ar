<template>
  <div id="navigator">
      <div class="left">
          <a href="/"><icon name="terminal"></icon></i></a>
          <a href="https://github.com/jsantiagoh/"><icon name="github"></icon></a>
          <a href="https://linkedin.com/in/santiagohirschfeld"><icon name="linkedin"></icon></a>
      </div>
      <div class="right">
          <clock />
      </div>
  </div>
</template>

<script>
  import Clock from './Clock.vue'
  import Icon from 'vue-awesome/components/Icon.vue'

  import 'vue-awesome/icons/terminal'
  import 'vue-awesome/icons/github'
  import 'vue-awesome/icons/linkedin'

  export default {
    name: 'navigator',
    components: {
      Clock,
      Icon
    }
  }
</script>

<style>
#navigator {
    margin-bottom: 5px;
    font-size: 13px;
}

a {
    text-decoration: none;
    color: inherit;
}

a:hover {
    background-color: orange;
}

.left {
    display: inline;
}

.right {
    float: right;
}
</style>
