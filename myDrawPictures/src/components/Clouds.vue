<template>
    <logic
            storage="cachePhotoClouds"
            :urlsAr="urlsAr"
            title="Clouds"
            :radius="150"
            nextStep="water"
    ></logic>
</template>


<script>
  import Logic from './logic.vue';
  export default{
    components: {
      Logic
    },
    data(){
      return {
        urlsAr: JSON.parse(localStorage.getItem("cachePhotoClouds")) || []
      }
    },
    created(){
      if (!localStorage.getItem("cachePhotoClouds")) {
        const arr = [];
        let countForDubl = 0;
        for (let i = 0; i < 150; i++) {
          ++countForDubl;
          arr.push(`/img/photo${countForDubl}.jpg`);
          if (countForDubl === 20) {
            countForDubl = 1;
          }
        }
        this.urlsAr = arr;

      }
    },
    mounted(){
      localStorage.setItem("cachePhotoClouds", JSON.stringify(this.urlsAr));
    }
  }
</script>