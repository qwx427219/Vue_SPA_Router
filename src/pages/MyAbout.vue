<template>
  <div style="padding:20px; margin-left:20px; background-color: seagreen;">
    <ul>
      <li v-for="about in abouts" :key="about.id">
        <!-- <router-link :to="`/about/${about.id}`">{{about.desc}}</router-link> -->
        <router-link 
          :to="{
            name: 'guanyu',
            params: {
              id: about.id
            }
          }"
        >
          {{about.desc}}
        </router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'MyAbout',
    data(){
      return {
        abouts: [
          {id: '001', desc: '关于1'},
          {id: '002', desc: '关于2'},
          {id: '003', desc: '关于3'}
        ]
      }
    },
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