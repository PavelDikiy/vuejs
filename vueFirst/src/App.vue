<template>
    <div>
        <input type="text" v-model="name">


        <hr>
        <!--        <h2 v-show="false\false">hello {{ name }}</h2>-->


            <h2>Привет {{ name }}, проверь свою удачу</h2>

        <hr>
        <h3>У тебя {{ 10-сountt }} попыток</h3>
        <app-progress
                v-bind:max="maxNumbers"
                v-bind:val="numbers.length">
        </app-progress>

        <hr>
        <h3>Твоя удача: {{ sum }} с 50 очков</h3>
        <app-progress
                v-bind:max="maxNumbers * 5"
                v-bind:val="sum">
        </app-progress>
        <hr>
        <button class="btn btn-primary"
                v-on:click=" showH2 = !showH2"
                v-bind:title="1+1"
        >
            {{btnText}}
        </button>
        <button class="btn btn-success"
                v-on:click="addNumber"
                v-bind:disabled="done"
        >
            Добавить следующее число
        </button>
        <transition name="slide">
        <ul v-show="showH2" class="list-group">
            <li class="list-group-item"
                v-for="number in numbers"
            >
                {{number}}
            </li>
        </ul>
        </transition>
    </div>
</template>
<script>
    import Progress from'./Progress.vue';

    export default{
        data(){
            return {
                name: 'лох',
                name2: 'лох222',
                showH2: true,
                numbers: [],
                maxNumbers: 10,
                сountt: 0
            }
        },
        methods: {
            addNumber(){
                if (!this.done) {
                    if(this.сountt >= this.maxNumbers){this.сountt = this.maxNumbers;}
                    else{this.сountt++;}
                    let rng = Math.floor(Math.random() * 11) - 5;
                    this.numbers.push(rng);
                }

            },

        },
        computed: {
            sum(){
                let sum = 0;
                for (let i = 0; i < this.numbers.length; i++) {
                    sum += this.numbers[i];
                }
                return sum;
            },
            btnText(){
                return this.showH2 ? "Скрыть числа" : "Показать числа";
            },
            done(){
                return this.numbers.length >= this.maxNumbers;
            }
        },
        components:{
            AppProgress: Progress
        }

    }
</script>
<style scoped>
    .slide-enter {
        opacity: 0;
    }

    .slide-enter-active {
        transition: opacity 0.5s;
    }

    .slide-leave-active {
        transition: opacity 0.5s;
    }

    .slide-leave-to {
        opacity: 0;
    }
</style>