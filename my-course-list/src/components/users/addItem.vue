<template>
    <div>
        <button v-if="!isAdd" class="btn btn-success" @click="isAdd=true">Add User</button>
        <div v-else>
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text">Add name</span>
                </div>
                <input type="text" class="form-control" placeholder="Name"
                       aria-label="Name"
                       aria-describedby="basic-addon2"
                       v-model="addName"
                >
            </div>
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text">Add email</span>
                </div>
                <input type="email" class="form-control" placeholder="Email"
                       aria-label="Email"
                       aria-describedby="basic-addon3"
                       v-model="addEmail"
                >
            </div>
            <div class="input-group mb-3">
                <div class="input-group-prepend mr-2">
                    <span class="input-group-text">Add Status</span>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="true" v-model="addStatus">
                    <label class="form-check-label" for="inlineRadio1">Active</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="false" v-model="addStatus">
                    <label class="form-check-label" for="inlineRadio2">Inactive</label>
                </div>
            </div>
            <button class="btn btn-success" @click="addUser">Add</button>
            <button class="btn btn-danger ml-3" @click="cancelAdd">Cancel</button>
        </div>
    </div>
</template>

<script>
  import {mapActions} from 'vuex';
  
  function clearFeld(...arg) {
    for(let i = 0; i < arg.length; i++){
      arg[i] = '';
    }
  }
  
  export default{
    data(){
      return {
        addName: '',
        addEmail: '',
        addStatus: false,
        isAdd: false
      }
    },
    methods: {
      ...mapActions([
        'addUserSt'
      ]),
      addUser: function () {
        const objAdd = {
          name: this.addName,
          email: this.addEmail,
          status: !!this.addStatus
        };
        this.addUserSt(objAdd);
        clearFeld(this.addName,this.addEmail, this.addStatus);
      },
      cancelAdd: function () {
        this.isAdd = false;
        clearFeld(this.addName,this.addEmail, this.addStatus);
      },
    }
  }
</script>