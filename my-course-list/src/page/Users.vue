<template>
    <div>
        <h1 class="mb-3">Users</h1>
        <div class="row">
            <div class="col-sm">
                <Search @search="onSearch" title="users"></Search>
            </div>
            <div class="col-sm">
                <AddUsers></AddUsers>
            </div>
            <div class="col-sm">
                <div class="input-group mb-3" v-if="FiltListUsers.length > 0">
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

        <ListUsers v-if="FiltListUsers.length > 0" :arrayObj="FiltListUsers" :size="size"></ListUsers>
        <div v-else>На данный момент пользователей нет. </div>
    </div>

</template>

<script>
  import {mapGetters} from 'vuex';
  import Search from '../components/search.vue';
  import AddUsers from '../components/users/addItem.vue';
  import ListUsers from '../components/users/listItems.vue';

  export default{
    components: {
      Search,
      AddUsers,
      ListUsers
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
        'listUsers'
      ]),
      FiltListUsers(){
        return this.listUsers.filter((item) => {
          return item.name.includes(this.yourSearch);
        });
      }
    }
  }
</script>