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
                            @click="sortItem('name', $event)">{{simblname}}
                    </button>
                </th>
                <th scope="col">Location
                    <button type="button" class="btn btn-primary btn-sm" name="location"
                            @click="sortItem('location', $event)">{{simbllocation}}
                    </button>
                </th>
                <th scope="col">Currency
                    <button type="button" class="btn btn-primary btn-sm" name="currency"
                            @click="sortItem('currency', $event)">{{simblcurrency}}
                    </button>
                    <br/><span>All: {{allSum}}</span></th>
            </tr>
            </thead>
            <tr v-for="(item, ind) in filerList" :key="item.id">
                <td><span>{{ind + 1}}</span></td>
                <td><span @click="isActive">{{item.name}}</span>
                    <input type="text" :value="item.name"
                           @keyup.enter="updateProp(item.id,'name',$event)">
                </td>
                <td><span @click="isActive">{{item.location}}</span>
                    <input type="text" :value="item.location"
                           @keyup.enter="updateProp(item.id,'location',$event)"></td>
                <td><span @click="isActive">{{item.currency}}</span>
                    <input type="text" :value="item.currency"
                           @keyup.enter="updateProp(item.id,'currency',$event)"></td>
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
        simblname: '-',
        simbllocation: '-',
        simblcurrency: '-'
      }
    },
    methods: {
      sortItem(property, event){

        if (this.simblname != this['simbl' + property]) this.simblname = '-';
        if (this.simbllocation != this['simbl' + property]) this.simbllocation = '-';
        if (this.simblcurrency != this['simbl' + property]) this.simblcurrency = '-';

        let sortfunc = (a, b) => {
          if (this['simbl' + property] == '↓' || this['simbl' + property] == '-') {
            if (a[property] > b[property]) return 1;
            if (a[property] < b[property]) return -1;
          } else {
            if (b[property] > a[property]) return 1;
            if (b[property] < a[property]) return -1;
          }

        };
        switch (event.target.innerText) {
          case '-':
          case '↓':
            this.filerList.sort(sortfunc);
            this['simbl' + property] = '↑';
            break;
          case '↑':
            this.filerList.sort(sortfunc);
            this['simbl' + property] = '↓';
            break;
        }
      },
      updateProp(idEv, property, event){
        for (let i = 0; i < this.filerList.length; i++) {
          if (this.filerList[i]['id'] == idEv) {
            this.filerList[i][property] = event.target.value;
            event.target.previousSibling.classList.remove('active');
            break;
          }
        }
      },
      isActive(event){
        event.stopPropagation();

        event.target.classList.add('active');
        event.target.nextSibling.focus();
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
        color:blue;
    }

    .table .active {
        display: none;
    }

    .table input {
        display: none;
    }

    .table .active + input {
        display: inline-block;
    }
</style>