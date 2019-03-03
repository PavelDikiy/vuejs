<template>
    <div>
        <table class="table mt-4">
            <thead class="thead-light">
            <tr>
                <th scope="col">Name</th>
                <th scope="col">E-mail</th>
                <th scope="col">Status</th>
                <th scope="col">Action</th>
            </tr>
            </thead>
            <tbody>
            <tr is="User" v-for="user in paginatedData" :user="user" :key="user.id"></tr>
            </tbody>
        </table>
        <Pagination
                v-if="isHide"
                :pageNumber="pageNumber"
                :pageCount="pageCount"
                @nowPageNumber="onNowPageNumber"
        ></Pagination>
    </div>


</template>

<script>
  import User from './item.vue';
  import Pagination from '../pagination.vue';

  export default{
    props: {
      arrayObj: {
        type: Array,
        required: true
      },
      size: {
        type: Number,
        required: false,
        default: 2
      }
    },
    components: {
      User,
      Pagination
    },
    data(){
      return {
        editObj: {},
        pageNumber: 1
      }
    },
    methods: {
      onNowPageNumber(data){
        this.pageNumber = data;
      }
    },
    computed: {
      isHide(){
        return this.paginatedData.length < this.arrayObj.length;
      },
      pageCount(){
        let l = this.arrayObj.length,
          s = this.size;
        return Math.ceil(l / s);
      },
      paginatedData(){
        const start = (this.pageNumber - 1) * this.size,
          end = start + this.size;
        return this.arrayObj.slice(start, end);
      }
    }
  }
</script>

