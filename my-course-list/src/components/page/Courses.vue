<template>
    <div>
        <h1>Courses</h1>
        <div class="row">
            <div class="col-sm">
                <Search @search="onSearch"></Search>
<!--                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="basic-addon1">Search for Courses</span>
                    </div>
                    <input type="text" class="form-control" placeholder="Search"
                           aria-label="Search"
                           aria-describedby="basic-addon1"
                           v-model="yourSearch"
                    >
                </div>-->
            </div>
            <div class="col-sm">
                <AddCourses></AddCourses>
<!--                <button v-if="!isAdd" class="btn btn-success" @click="isAdd=true">Add Course</button>
                <div v-else>
                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="basic-addon2">Add name</span>
                        </div>
                        <input type="text" class="form-control" placeholder="Name"
                               aria-label="Name"
                               aria-describedby="basic-addon2"
                               v-model="addName"
                        >
                    </div>
                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="basic-addon3">Add code</span>
                        </div>
                        <input type="text" class="form-control" placeholder="Code"
                               aria-label="Code"
                               aria-describedby="basic-addon3"
                               v-model="addCode"
                        >
                    </div>
                    <button class="btn btn-success" @click="addCourse">Add</button>
                    <button class="btn btn-danger ml-3" @click="cancelAdd">Cancel</button>
                </div>-->
            </div>
        </div>
        <ListCourses :arrayObj="FiltListCourses"></ListCourses>
<!--        <table class="table mt-4" v-if="listCourses.length > 0">
            <thead class="thead-light">
            <tr>
                <th scope="col">Name</th>
                <th scope="col">Code</th>
                <th scope="col">Action</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="course in FiltListCourses" :key="course.id">
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
            </tbody>
        </table>
        <div v-else>На данный момент курсов нет. </div>-->
    </div>

</template>

<script>
  import {mapGetters, mapActions} from 'vuex';
  import Search from '../search.vue';
  import AddCourses from '../coursers/addItem.vue';
  import ListCourses from '../coursers/listItems.vue';

  export default{
    components:{
      Search,
      AddCourses,
      ListCourses
    },
    data(){
      return {
        yourSearch: '',
/*        addName: '',
        addCode: '',
        editObj: {},
        isAdd: false*/
      }
    },
    methods: {
/*      ...mapActions([
        'addCourseSt',
        'editCourseSt',
        'delCourseSt',
      ]),*/
      onSearch(data){
        this.yourSearch = data;
      },
/*      cancelAdd: function () {
        this.isAdd = false;
        this.addName = '';
        this.addCode = '';
      },
      addCourse: function () {
        const objAdd = {
          name: this.addName,
          code: this.addCode
        };
        this.addCourseSt(objAdd);
        this.addName = '';
        this.addCode = '';
      },
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
      }*/
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