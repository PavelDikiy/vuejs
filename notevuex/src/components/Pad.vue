<template>
    <div class="pad">

        <input type="text" class="pad__title" placeholder="Введите заголовок" v-model="note.title"
               @keydown="save">
        <textarea class="pad__text" placeholder="Пишите сюда свой текст" v-model="note.body"
                  @keydown="save">

        </textarea>


        <footer class="pad__footer">
            <ul class="pad__footer-items">
                <li class="pad__footer-item">Слов: {{ wordCount }}</li>
                <li class="pad__footer-item pad__footer-item--right">Последнее сохранение: {{lastSaved}}</li>
            </ul>
        </footer>

    </div>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex'

  export default {
    computed: {
      ...mapGetters([
        'note',
        'lastSaved',
        'wordCount'
      ])
    },
    methods: {
      ...mapActions([
        'saveNote',
        'startSaveTimeout'
      ]),
      save() {
        if (!this.note.id) {
          this.saveNote();
          return
        }

        this.startSaveTimeout();
      }
    }
  }
</script>

<style lang="scss" scoped>
    @import '../assets/scss/placeholders';

    .pad {
        flex: 4;
        display: flex;
        flex-direction: column;
        overflow: hidden;

        &__title {
            width: 97%;
            border: 0;
            font: inherit;
            font-size: 1.6em;
            outline: none;
            padding: 25px 20px 20px 30px;
            cursor: pointer;

            &:hover {
                background-color: #f9f9f9;
            }
        }

        &__text {
            flex: 1;
            width: 97%;
            margin: 0;
            padding: 20px 30px;
            border: 0;
            font: inherit;
            outline: none;
            resize: none;
            line-height: 2;
            mask-image: linear-gradient(
                            to bottom,
                            transparent 0%,
                            #fff 5%,
                            #fff 95%,
                            transparent 100%
            );

            &:hover {
                background-color: #f9f9f9;
            }

        }

        &__footer {
            padding: 20px 30px;

            &-items {
                @extend %inline-list;
                flex: 1;
                font-size: .9em;

            }

            &-item {
                &--right {
                    margin-left: auto;
                    text-align: right;
                }
            }
        }

    }

</style>