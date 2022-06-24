<template>
  <div style="padding:20px; margin-left:20px; background-color: seagreen;">
    <ul>
      <li>
        <router-link to="/home/news?id=001">news</router-link>
        <!-- <router-link 
          :to="{
            path: '/home/news',
            query: {
              id: '001'
            }
          }"
        >
          news
        </router-link> -->
        <!-- <button 
          @click="$router.push({
            path: '/home/news',
            query: {
              id: '001'
            }
          })"
        >
          news
        </button> -->
      </li>
      <li>
        <router-link to="/home/message">message</router-link>
      </li>
    </ul>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
  export default {
    name: 'MyHome'
  }
</script>