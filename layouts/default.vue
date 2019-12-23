<template>
  <div>
    <TheHeader />
    <TheSideNav />
    <nuxt />
  </div>
  
</template>

<style>
html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
}

</style>

<script>
import TheHeader from '@/components/Navigation/TheHeader';
import TheSideNav from '@/components/Navigation/TheSideNav';


export default {
  components: {
    TheHeader,
    TheSideNav
  }
}
</script>
