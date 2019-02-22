<template>
    <div>
        <div class="row">
            <h1>Резудьтат</h1>
        </div>
        <div class="row">
            <h3>И так, на что Вы подписались</h3>
            <table class="table">
                <tr>
                    <th>Наименование</th>
                    <th>Значение</th>
                </tr>
                <tr v-for="(item, ind) in resultObj" :key="ind">
                    <td>{{item.name}} </td>
                    <td>{{item.value | spaceNumber}} {{item.symbol}}</td>
                </tr>
            </table>
            <router-link
                    :to="{ name: 'calculator'}"
                    class="badge badge-light mt-3"
            >← Верунуться к выбору ставок
            </router-link>
        </div>
    </div>
</template>

<script>
  export default{
    props: ['resultObj'],
    data(){
      return {}
    },
    created(){
      if(!this.resultObj){
        this.$router.push({ name: 'calculator'})
      }
    }
  }
</script>