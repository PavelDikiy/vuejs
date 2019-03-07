<template>
    <div>
        <h1 class="mb-3">Courses</h1>
        <div class="row">
            <div class="col-sm">
                <Search @search="onSearch" title="courses"></Search>
            </div>
            <div class="col-sm">
                <AddCourses></AddCourses>
            </div>
            <div class="col-sm">
                <div class="input-group mb-3" v-if="FiltListCourses.length > 0">
                    <div class="input-group-prepend">
                        <span class="input-group-text">Show items</span>
                    </div>
                    <select class="form-control" v-model.number="size">
                        <option>1</option>
                        <option>2</option>
                        <option>5</option>
                        <option>10</option>
                        <option>15</option>
                    </select>
                </div>
            </div>
        </div>

        <ListCourses v-if="FiltListCourses.length > 0" :arrayObj="FiltListCourses" :size="size"></ListCourses>
        <div v-else>На данный момент курсов нет. </div>
    </div>

</template>

<script>
  import {mapGetters} from 'vuex';
  import Search from '../components/search.vue';
  import AddCourses from '../components/coursers/addItem.vue';
  import ListCourses from '../components/coursers/listItems.vue';

  export default{
    components: {
      Search,
      AddCourses,
      ListCourses
    },
    data(){
      return {
        yourSearch: '',
        size: 2
      }
    },
    methods: {
      onSearch(data){
        this.yourSearch = data;
      }
    },
    computed: {
      ...mapGetters([
        'listCourses'
      ]),
      FiltListCourses(){
        return this.listCourses.filter((item) => {
          return item.name.includes(this.yourSearch);
        });
      }
    }
  }
</script>