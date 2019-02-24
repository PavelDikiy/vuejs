<template>
    <div class="note">
        <a href="#" class="note__delete" @click.prevent="deleteNote(note.id)">
            <span class="note__delete-icon">
                &times;
            </span>
        </a>
        <div class="note__content">
            <a href="#" class="note__title" @click.prevent="openNote(note)">
                <span v-if="note.title">{{ note.title }}</span>
                <span v-else>Заголовок отсутствует</span>

            </a>
            <p class="note__body" @click.prevent="openNote(note)">
                <span v-if="note.body">{{ note.body }}</span>
                <span v-else><em>Пусто</em></span>
            </p>
        </div>
    </div>
</template>

<script>
  import {mapActions} from 'vuex';
  export default {
    props: ['note'],
    methods: {
      ...mapActions([
        'openNote',
        'deleteNote'
      ])
    }
  }
</script>

<style lang="scss" scoped>
    .note {
        display: flex;
        color: inherit;
        text-decoration: none;
        border-bottom: 1px solid #eee;
        border-top: 1px solid #eee;
        margin-bottom: -1px;
        opacity: .3;
        flex-direction: row;
        min-width: 100%;

        &:first-child {
            border-top: 0;
        }

        &:hover {
            opacity: 1;

            .note__delete {
                margin-left: 0px;
            }
        }

        &__content {
            padding: 30px;
            flex: 2;
            overflow: hidden;
        }

        &__title {
            display: block;
            font-size: 1em;
            margin: 0;
            font-weight: 500;
            text-decoration: none;
            color: inherit;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;

            &:hover {
                text-decoration: underline;
            }

        }

        &__body {
            font-size: .9em;
            margin-bottom: 0;
            text-decoration: none;
            color: inherit;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        &__delete {
            position: relative;
            margin-left: -50px;
            width: 50px;
            display: block;
            background-color: #cc4466;
            min-height: 100%;
            color: #fff;
            transition: margin-left 150ms ease-in-out;

            &:hover {
                opacity: .92;
            }

            &-icon {
                position: absolute;
                top: 50%;
                left: 50%;
                font-size: 1.5em;
                font-weight: 600;
                transform: translate(-50%, -50%);
            }
        }
    }
</style>