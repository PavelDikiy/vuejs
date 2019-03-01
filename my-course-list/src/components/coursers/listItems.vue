<template>
    <table class="table mt-4" v-if="arrayObj.length > 0">
        <thead class="thead-light">
        <tr>
            <th scope="col">Name</th>
            <th scope="col">Code</th>
            <th scope="col">Action</th>
        </tr>
        </thead>
        <tbody>
        <tr is="Course" v-for="course in arrayObj" :course="course" :key="course.id"></tr>
<!--        <tr v-for="course in arrayObj" :key="course.id">
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
        </tr>-->
        </tbody>
    </table>
    <div v-else>На данный момент курсов нет. </div>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex';
  import Course from './item.vue';

  export default{
    props: ['arrayObj'],
    components: {
      Course
    },
    data(){
      return {
        editObj: {},
      }
    },
    methods: {
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

