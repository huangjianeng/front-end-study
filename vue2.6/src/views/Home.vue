<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <button @click="changeCar">修车</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import {debounce} from '@/utils/debounce.js'

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
  methods: {
    getData() {
      console.log("已经点了一次");
    },
    // changeCar() {
    //   debounce(this.getData, 1000);
    // },
    changeCar:function(){
      debounce(this.getData, 1000);
    },
    // changeCar:debounce('getData', 1000)
  },
};
</script>
