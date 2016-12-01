<template>
  <div id="navigator">
      <div class="left">
          <a href="/"><i class="fa fa-terminal" aria-hidden="true"></i></a>
          <a href="https://github.com/jsantiagoh/"><i class="fa fa-github" aria-hidden="true"></i></a>
          <a href="https://linkedin.com/in/santiagohirschfeld"><i class="fa fa-linkedin" aria-hidden="true"></i></a>
      </div>
      <div class="right">
          <clock />
      </div>
  </div>
</template>

<script>
  import Clock from './Clock.vue'
  export default {
    name: 'navigator',
    components: {
      Clock
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
