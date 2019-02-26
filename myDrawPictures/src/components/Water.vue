<template>
    <logic
            storage="cachePhotoWater"
            :urlsAr="urlsAr"
            title="Water"
            :radius="150"
            nextStep="send"
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
        urlsAr: JSON.parse(localStorage.getItem("cachePhotoWater")) || []
      }
    },
    created(){
      if (!localStorage.getItem("cachePhotoWater")) {
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
      localStorage.setItem("cachePhotoWater", JSON.stringify(this.urlsAr));
    }
  }
</script>