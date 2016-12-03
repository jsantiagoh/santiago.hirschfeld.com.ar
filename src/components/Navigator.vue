<template>
  <nav id="navigator">
    <ul class="links">
      <li><a href="/"><icon name="terminal"></icon></i></a></li>
      <li><a href="https://github.com/jsantiagoh/"><icon name="github"></icon></a></li>
      <li><a href="https://linkedin.com/in/santiagohirschfeld"><icon name="linkedin"></icon></a></li>
    </ul>
    <div class="right">
      <clock />
    </div>
  </nav>
</template>


<style lang="scss">
  @import 'colors';

  nav {
    padding: 5px;
    margin-left: 0px;
    font-size: 14px;
    border-bottom: 1px solid;
    color: $color-bg;
    background-color: $color-fg;
  }

  .links {
    list-style: none;
    overflow: hidden;   display: inline;

    li {
      float: left;

      a {
        color: inherit;
	      text-decoration: none;
        padding: 0px 6px 0px 4px;
	      position: relative;
	      display: block;
	      float: left;
      }
    }
  }

  .right {
    float: right;
  }
</style>

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
