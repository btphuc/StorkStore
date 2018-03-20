<template>
  <div class="wrapper bg-white fix">
    <Header />
    <nuxt/>
  </div>
</template>

<script>
import Header from '@/components/Layout/Header';
export default {
  components: {
    Header,
  },
  head: {
    script: [
      { src: 'js/vendor/jquery-1.12.0.min.js', body: true },
      { src: 'js/bootstrap.min.js', body: true },
      { src: 'js/plugins.js', body: true },
      { src: 'js/app.js', body: true },
      { src: 'js/main.js', body: true },      
    ]
  }
}
</script>

<style>

</style>
