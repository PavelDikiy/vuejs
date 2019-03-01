<template>
   <div>
       <button v-if="!isAdd" class="btn btn-success" @click="isAdd=true">Add Course</button>
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
       </div>
   </div>
</template>

<script>
  export default{

  }
</script>