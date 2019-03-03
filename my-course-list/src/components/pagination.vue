<template>
    <div class="pagination">
        <button class="btn btn-success mr-3"
                :disabled="pageNumber === 1"
                @click="prevPage">
            Previous
        </button>
        <button v-for="(page, ind) in pageCount"
                class="btn btn-success ml-1 mr-1"
                :class="{'active': (page === pageNumber)}"
                :key="ind"
                :disabled="page === pageNumber"
                @click="currentPage(page)"
        >{{page}}
        </button>
        <button class="btn btn-success ml-3"
                :disabled="pageNumber >= pageCount"
                @click="nextPage">
            Next
        </button>
    </div>
</template>

<script>
  export default{
    props: {
      pageCount: {
        type: Number,
        required: true
      },
      pageNumber: {
        type: Number,
        required: false,
        default: 1
      }
    },
    data(){
      return{
        pageNumberState: this.pageNumber
      }
    },
    methods: {
      nextPage(){
        this.$emit('nowPageNumber', ++this.pageNumberState);
      },
      prevPage(){
        this.$emit('nowPageNumber', --this.pageNumberState);
      },
      currentPage(page){
        this.$emit('nowPageNumber', this.pageNumberState=page);
      }
    }
  }
</script>

<style>
    .pagination {
        justify-content: center;
        margin: 30px auto 70px;
    }
</style>