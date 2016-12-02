<template>
  <nav id="navigator">
    <ol class="left items">
      <li><a href="/"><icon name="terminal"></icon></i></a></li>
      <li><a href="https://github.com/jsantiagoh/"><icon name="github"></icon></a></li>
      <li><a href="https://linkedin.com/in/santiagohirschfeld"><icon name="linkedin"></icon></a></li>
    </ol>
    <div class="right">
      <clock />
    </div>
  </nav>
</template>

<style>
nav {
  padding: 3px;
  margin-left: 0px;
  font-size: 14px;
  border-bottom: 1px solid;
}

a {
  text-decoration: none;
  color: inherit;
}

li:hover {
  background-color: orange;
  box-sizing: border-box;
}

ol {
  display: inline;
  vertical-align: middle;
  padding: 5px;
}

li {
  display: inline;
}

.left {
  display: inline;
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
