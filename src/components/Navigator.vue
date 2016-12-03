<template>
  <nav id="navigator">
    <ul class="links">
      <li><a href="/"><awesome-icon name="terminal"></awesome-icon></i></a></li>
      <li><a href="https://github.com/jsantiagoh/"><awesome-icon name="github"></awesome-icon></a></li>
      <li><a href="https://linkedin.com/in/santiagohirschfeld"><awesome-icon name="linkedin"></awesome-icon></a></li>
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
  import AwesomeIcon from './AwesomeIcon.vue'

  export default {
    name: 'navigator',
    components: {
      AwesomeIcon,
      Clock
    }
  }
</script>
