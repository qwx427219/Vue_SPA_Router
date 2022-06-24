<template>
  <h1>这是MyNews的内容 - {{id}}</h1>
</template>

<script>
  export default {
    name: 'MyNews',
    props: ['id'],
    beforeRouteEnter(to, from, next){
      console.log('beforeRouteEnter:', from.path, '=>', to.path);
      next()
    },
    beforeRouteUpdate(to, from, next){
      console.log('beforeRouteUpdate:', from.path, '=>', to.path);
      next()
    },
    beforeRouteLeave(to, from, next) {
      console.log('beforeRouteLeave:', from.path, '=>', to.path);
      next()
    }
  }
</script>