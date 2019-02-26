<template>
    <logic
            storage="cachePhotoSand"
            :urlsAr="urlsAr"
            title="Sand"
            :radius="150"
            nextStep="clouds"
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
        urlsAr: JSON.parse(localStorage.getItem("cachePhotoSand")) || []
      }
    },
    created(){
      if (!localStorage.getItem("cachePhotoSand")) {
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
      localStorage.setItem("cachePhotoSand", JSON.stringify(this.urlsAr));
    }
  }
</script>