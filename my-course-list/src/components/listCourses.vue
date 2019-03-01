<table class="table mt-4" v-if="listCourses.length > 0">
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
<div v-else>На данный момент курсов нет. </div>