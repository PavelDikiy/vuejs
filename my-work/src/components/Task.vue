<template>
    <div>
        <h1>Решение задачи</h1>
        <div class="form-group">
            <label for="exampleInputEmail1">Search for
                <button
                        class="btn btn-sm"
                        :class="searchFor!='name' ? 'btn-secondary' : 'btn-primary'"
                        @click="searchFor = 'name'"
                >Name
                </button>
                or
                <button
                        class="btn btn-sm"
                        :class="searchFor!='location' ? 'btn-secondary' : 'btn-primary'"
                        @click="searchFor = 'location'"
                >Location
                </button>
            </label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                   :placeholder="'Your search by '+searchFor" v-model="yourSearch">
        </div>
        <table class="table">
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Name
                    <button type="button" class="btn btn-primary btn-sm" name="name"
                            :class="{'asc': (sortName == 'name' && orderT === 1),
                             'desc': (sortName == 'name' && orderT === -1)}"
                            @click="sortFuncName"></button>
                </th>
                <th scope="col">Location
                    <button type="button" class="btn btn-primary btn-sm" name="location"
                            :class="{'asc': (sortName == 'location' && orderT === 1),
                             'desc': (sortName == 'location' && orderT === -1)}"
                            @click="sortFuncLocation"></button>
                </th>
                <th scope="col">Currency
                    <button type="button" class="btn btn-primary btn-sm" name="currency"
                            :class="{'asc': (sortName == 'currency' && orderT === 1),
                             'desc': (sortName == 'currency' && orderT === -1)}"
                            @click="sortFuncCurrency"></button>
                    <br/><span>All: {{allSum}}</span></th>
            </tr>
            </thead>
            <tr v-for="(item, ind) in filerList" :key="item.id">
                <td><span>{{ind + 1}}</span></td>
                <td>
                    <input v-if="item.id === editObj.id && editObj.proper === 'name'" autofocus
                           @keyup.enter="endEdit" @change="endEdit" type="text" v-model="editObj.name">
                    <span v-else @click="goEdit(item.id, 'name')">{{item.name}}</span>
                </td>
                <td>
                    <input v-if="item.id === editObj.id && editObj.proper === 'location'" autofocus
                           @keyup.enter="endEdit" @change="endEdit" type="text"
                           v-model="editObj.location">
                    <span v-else @click="goEdit(item.id, 'location')">{{item.location}}</span>
                </td>
                <td>
                    <input v-if="item.id === editObj.id && editObj.proper === 'currency'" autofocus
                           @keyup.enter="endEdit" @change="endEdit" type="text"
                           v-model="editObj.currency">
                    <span v-else @click="goEdit(item.id, 'currency')">{{item.currency}}</span>
                </td>
            </tr>
        </table>
    </div>

</template>

<script>
  import lists from '../test.json'

  export default{
    data(){
      return {
        lists,
        searchFor: 'name',
        yourSearch: '',
        sortName: '',
        orderT: 1,
        editObj: {}
      }
    },
    methods: {
      sortFuncName(){
        this.sortName = 'name';
        this.replaceOrder();
        this.sortList();
      },
      sortFuncLocation(){
        this.sortName = 'location';
        this.replaceOrder();
        this.sortList();
      },
      sortFuncCurrency(){
        this.sortName = 'currency';
        this.replaceOrder();
        this.sortList();
      },
      replaceOrder(){
        this.orderT = this.orderT * (-1);
      },
      sortList(){
        this.filerList.sort((a, b) => {
          if (this.orderT === 1) {
            if (a[this.sortName] > b[this.sortName]) {
              return 1;
            }
            if (a[this.sortName] < b[this.sortName]) {
              return -1;
            }
          } else {
            if (b[this.sortName] > a[this.sortName]) {
              return 1;
            }
            if (b[this.sortName] < a[this.sortName]) {
              return -1;
            }
          }
        })
      },
      goEdit(id, prop){
        if (Object.keys(this.editObj).length === 0) {
          this.editObj = this.filerList.filter((thisId) => {
            return thisId.id === id;
          })[0];
          this.editObj['proper'] = prop
        } else {
          this.editObj = {}
        }
      },
      endEdit(){
        this.editObj = {}
      }
    },
    computed: {
      filerList(){
        return this.lists.filter((item) => {
          return item[this.searchFor].includes(this.yourSearch)
        })
      },
      allSum(){
        let sum = 0;
        for (let i = 0; i < this.filerList.length; i++) {
          sum += parseInt(this.filerList[i]['currency'])
        }
        return sum;
      }
    }
  }
</script>

<style scoped>
    .table th {
        vertical-align: middle;
    }

    .table span {
        cursor: pointer;
    }

    .table span:hover {
        color: blue;
    }

    .table th .btn:after {
        content: '-';
        display: inline-block;
    }

    .table th .btn.asc:after {
        content: '↓';
        display: inline-block;
    }

    .table th .btn.desc:after {
        content: '↑';
        display: inline-block;
    }
</style>