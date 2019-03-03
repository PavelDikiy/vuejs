<template>
    <tr>
        <td>
            <input v-if="editObj.id === course.id" type="text" v-model="editObj.name">
            <span v-else>{{course.name}}</span></td>
        <td>
            <input v-if="editObj.id === course.id" type="text" v-model="editObj.code">
            <span v-else>{{course.code}}</span>
        </td>
        <td>
            <button v-if="editObj.id === course.id" class="btn btn-sm btn-success mr-3"
                    @click="editCourseSave">Save
            </button>
            <button class="btn btn-sm btn-info" @click="editCourse(course.id)">Edit</button>
            <button class="btn btn-sm btn-danger ml-3" @click="delItem(course.id)">Delete</button>
        </td>
    </tr>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex';
  export default{
    props: ['course'],
    data(){
      return {
        editObj: {}
      }
    },
    methods: {
      ...mapActions([
        'editCourseSt',
        'delCourseSt',
      ]),
      editCourse(id){
        this.editObj = this.listCourses.filter((item) => {
          return item.id === id;
        })[0];
      },
      editCourseSave(){
        this.editCourseSt(this.editObj);
        this.editObj = {};
      },
      delItem(id){
        this.delCourseSt(id);
      }
    },
    computed: {
      ...mapGetters([
        'listCourses'
      ])
    }
  }
</script>