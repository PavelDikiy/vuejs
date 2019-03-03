<template>
    <tr>
        <td>
            <input v-if="editObj.id === user.id" type="text" v-model="editObj.name">
            <span v-else>{{user.name}}</span></td>
        <td>
            <input v-if="editObj.id === user.id" type="email" v-model="editObj.email">
            <span v-else>{{user.email}}</span>
        </td>
        <td>
            <input v-if="editObj.id === user.id" type="text" v-model="editObj.status">
            <span v-else :class="{'redcl' : !user.status}">{{user.status ? 'Active' : 'Inactive'}}</span>
        </td>
        <td>
            <button v-if="editObj.id === user.id" class="btn btn-sm btn-success mr-3"
                    @click="editUserSave">Save
            </button>
            <button class="btn btn-sm btn-info" @click="editUser(user.id)">Edit</button>
            <button class="btn btn-sm btn-danger ml-3" @click="delItem(user.id)">Delete</button>
        </td>
    </tr>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex';
  export default{
    props: ['user'],
    data(){
      return {
        editObj: {}
      }
    },
    methods: {
      ...mapActions([
        'editUserSt',
        'delUserSt',
      ]),
      editUser(id){
        this.editObj = this.listUsers.filter((item) => {
          return item.id === id;
        })[0];
      },
      editUserSave(){
        this.editUserSt(this.editObj);
        this.editObj = {};
      },
      delItem(id){
        this.delUserSt(id);
      }
    },
    computed: {
      ...mapGetters([
        'listUsers'
      ])
    }
  }
</script>

<style>
    .redcl {
        color: red;
    }
</style>