<template>
    <div class="container">
        <h1>Решение задачи</h1>
        <div>
            <div v-if="rateId === -1" class="mb-3 mt-3">
                <h3>Выберите ставку</h3>
                <p>Что бы посчитать выгоды кредита, Выберите пожалуйста размер ставки</p>
            </div>
            <div v-else class="row">
                <div class="col-sm">
                    <p><strong>Расчет по кредиту:</strong></p>
                    <div class="form-group">
                        <label for="formControlRange" class="small-text">Сумма</label>
                        <p class="form-control-result">{{selectSum}}</p>
                        <input type="range" class="form-control-range" id="formControlRange" v-model.number="selectSum"
                               :min="selectedRate.minSum" :max="selectedRate.maxSum">
                    </div>
                    <div class="form-group row">
                        <div class="col-sm">
                            <label for="selectcur" class="small-text">Валюта</label>
                            <select class="form-control" id="selectcur"
                                    v-model="selectCur">
                                <option v-for="(currency, ind) in selectedRate.currency"
                                        :key="ind"
                                        :selected="currency === selectCur"
                                >{{currency}}
                                </option>
                            </select>
                        </div>
                        <div class="col-sm">
                            <label for="selectterm" class="small-text">Срок</label>
                            <select class="form-control" id="selectterm"
                                    v-model.number="selectTerm">
                                <option v-for="(term, ind) in selectedRate.arrTerm"
                                        :key="ind"
                                        :selected="term === selectTerm"
                                >{{term}}
                                </option>
                            </select>
                        </div>

                    </div>
                    <router-link
                            :to="{ name: 'results', params: {result: this.resultObj}}"
                            tag="button"
                            class="btn btn-success"
                    > Взять кредит
                    </router-link>
                </div>
                <div class="col-sm">
                    <div class="resultCredit">
                        <div class="row">
                            <div class="col-sm">
                                <span class="small-text">Ставка по кредиту</span>
                                <p>{{selectedRate.rate}}%</p>
                            </div>
                            <div class="col-sm">
                                <span class="small-text">Ежемесячный платеж</span>
                                <p>{{monthPayment | spaceNumber}} {{correctCur}}</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm">
                                <span class="small-text">Общая переплата</span>
                                <p class="big-text">{{fullSum | spaceNumber}} {{correctCur}}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

        <h3 class="mt-4">Таблица ставок</h3>
        <table class="table">
            <thead>
            <tr>
                <th scope="col">Размер ставки (%)</th>
                <th scope="col">Валюта</th>
                <th scope="col">Сума от, до</th>
                <th scope="col">Срок от, до</th>
            </tr>
            </thead>
            <tr v-for="(item, ind) in jsonData" :key="ind" :class="{'active' : ind === rateId}">
                <td>{{item.rate}}
                    <button type="button" class="btn btn-outline-primary ml-3"
                            :class="[(ind === rateId) ? 'active' : '']"
                            @click="selectRates(ind)">Выбрать
                    </button>
                </td>
                <td>{{item.activeCurrency}}</td>
                <td>{{item.minSum / 100}} - {{item.maxSum / 100}} тыс.</td>
                <td>{{item.minTerm}} - {{item.maxTerm}} мес.</td>
            </tr>
        </table>
    </div>

</template>

<script>
  import jsonData from '../test.json'

  export default{
    data(){
      return {
        jsonData,
        rateId: -1,
        selectSum: 0,
        selectCur: '',
        selectTerm: 0
      }
    },
    methods: {
      selectRates(id){
        this.rateId = id;
        this.selectSum = this.selectedRate["minSum"];
        this.selectCur = this.selectedRate["activeCurrency"];
        this.selectTerm = this.selectedRate["minTerm"];
      }
    },
    computed: {
      selectedRate(){
        let oneObj = jsonData.filter((item) => {
          return item.id === this.rateId;
        })[0];
        oneObj["arrTerm"] = [];
        for (let i = oneObj["minTerm"]; i <= oneObj["maxTerm"]; i++) {
          oneObj["arrTerm"].push(i);
        }
        return oneObj;
      },
      coef(){
        return this.selectedRate.rate / 100 / 12;
      },
      fullSum(){
        let result = Math.ceil(this.selectSum * this.coef * Math.pow((1 + this.coef), this.selectTerm) / (Math.pow((1 + this.coef), this.selectTerm) - 1) * this.selectTerm)
        if (this.selectedRate["activeCurrency"] == "доллары" && this.selectCur != this.selectedRate["activeCurrency"]) {
          result *= 27;
        }
        if (this.selectedRate["activeCurrency"] == "гривны" && this.selectCur != this.selectedRate["activeCurrency"]) {
          result = Math.ceil(result / 27);
        }
        return result;
      },
      monthPayment(){
        return Math.ceil(this.fullSum / this.selectTerm)
      },
      overpayment(){
        return this.fullSum - this.selectSum
      },
      correctCur(){
        return (this.selectCur == "гривны") ? 'грн.' : '$'
      },
      resultObj(){
        return [
          {name: "Ставка", value: this.selectedRate.rate, symbol: '%'},
          {name: "Сумма", value: this.selectSum, symbol: this.correctCur},
          {name: "Срок", value: this.selectTerm, symbol: 'мес.'},
          {name: "Полная сумма", value: this.fullSum, symbol: this.correctCur},
          {name: "Ежемесячный платеж", value: this.monthPayment, symbol: this.correctCur},
          {name: "Переплата", value: this.overpayment, symbol: this.correctCur}
        ]
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

    .small-text {
        color: #939393;
        font-size: 12px;
    }

    .form-control-result {
        font-weight: 600;
        font-size: 18px;
        margin: 0;
    }

    .resultCredit {
        border: 2px solid #007bff;
        border-radius: 5px;
        padding: 15px 24px;
    }

    .resultCredit p {
        font-weight: 600;
    }


    .resultCredit .big-text {
        font-size: 30px;
        font-weight:bold;
    }

    input[type=range] {
        -webkit-appearance: none; /* Hides the slider so that custom slider can be made */
        width: 100%; /* Specific width is required for Firefox. */
        background: transparent; /* Otherwise white in Chrome */
        margin-top: 10px;
    }

    input[type=range]::-webkit-slider-thumb {
        -webkit-appearance: none;
    }

    input[type=range]:focus {
        outline: none; /* Removes the blue border. You should probably do some kind of focus styling for accessibility reasons though. */
    }

    input[type=range]::-ms-track {
        width: 100%;
        cursor: pointer;

        /* Hides the slider so custom styles can be added */
        background: transparent;
        border-color: transparent;
        color: transparent;
    }

    /* Special styling for WebKit/Blink */
    input[type=range]::-webkit-slider-thumb {
        -webkit-appearance: none;
        height: 20px;
        width: 20px;
        border-radius: 50%;
        background: #ffe011;
        cursor: pointer;
        margin-top: -10px; /* You need to specify a margin in Chrome, but in Firefox and IE it is automatic */

    }

    /* All the same stuff for Firefox */
    input[type=range]::-moz-range-thumb {
        height: 20px;
        width: 20px;
        border-radius: 50%;
        background: #ffffff;
        cursor: pointer;
    }

    /* All the same stuff for IE */
    input[type=range]::-ms-thumb {
        box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
        height: 20px;
        width: 20px;
        border-radius: 50%;
        background: #ffffff;
        cursor: pointer;
    }

    input[type=range]::-webkit-slider-runnable-track {
        width: 100%;
        height: 2px;
        cursor: pointer;
        background: #007bff;
        border-radius: 1.3px;
        border: 0.2px solid #010101;
    }

    input[type=range]:focus::-webkit-slider-runnable-track {
        background: #007bff;
    }

    input[type=range]::-moz-range-track {
        width: 100%;
        height: 2px;
        cursor: pointer;
        background: #007bff;
        border-radius: 1.3px;
        border: 0.2px solid #010101;
    }

    input[type=range]::-ms-track {
        width: 100%;
        height: 2px;
        cursor: pointer;
        background: transparent;
        border-color: transparent;
        border-width: 16px 0;
        color: transparent;
    }
</style>