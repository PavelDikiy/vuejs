<template>
    <div class="input-group mb-3">
        <div class="input-group-prepend">
            <span class="input-group-text">Search by {{title}}</span>
        </div>
        <input type="text" class="form-control" placeholder="Search"
               aria-label="Search"
               aria-describedby="basic-addon1"
               v-model="yourSearch"
               @input="search"
        >
    </div>
</template>

<script>
  export default{
    props:['title'],
    data(){
      return {
        yourSearch: ''
      }
    },
    methods: {
      search(){
        this.$emit('search', this.yourSearch);
      }
    }
  }
</script>