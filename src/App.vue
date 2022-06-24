<template>
  <div style="padding:20px; background-color: royalblue;">
    <!-- <MyLogin></MyLogin> -->
    <!-- <hr> -->
    <button @click="$router.go(-1)">◀</button>
    <button @click="$router.go(1)">▶</button>
    <ul>
      <li>
        <router-link to="/home">home</router-link>
      </li>
      <li>
        <router-link to="/about">about</router-link>
      </li>
      <li>
        <router-link to="/login">login</router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
  // import MyLogin from '@/pages/MyLogin'
  export default {
    name: 'App',
    // components: {MyLogin}
  }
</script>

<style>
  .active {
    background-color: skyblue;
  }
</style>