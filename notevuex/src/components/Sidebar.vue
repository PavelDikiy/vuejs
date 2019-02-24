<template>
    <div class="sidebar">
        <div class="sidebar__content sidebar__content-add">
            <a href="#" @click.prevent="clearCurrentNote">Добавить новую заметку</a>
        </div>
        <div v-if="notes.length">
            <note v-for="(note, ind) in notes" :note="note" :key="ind"></note>
        </div>
        <div class="sidebar__content" v-else>
            Нет заметок!
        </div>
    </div>
</template>

<script>
  import Note from './Note'
  import {mapGetters, mapActions} from 'vuex'

  export default {
    components: {
      Note
    },
    computed: {
      ...mapGetters([
        'notes'
      ])
    },
    methods: {
      ...mapActions([
        'clearCurrentNote'
      ])
    }
  }
</script>

<style lang="scss" scoped>
    .sidebar {
        background-color: #f9f9f9;
        flex: 1;
        height: 100%;
        min-width: 28%;
        border-right: 2px solid #eee;

        &__content {
            padding: 30px;
            a {
                text-decoration: none;
                color: inherit;
            }

            &-add {
                background-color: #eee;
                font-weight: 600;
                a {
                    &:hover {
                        color: black;
                    }
                }
            }
        }

    }
</style>