<template>
    <div>
        <h1 class="mb-3">Список курсов и студентов</h1>
        <p>Нужно создать просто веб приложение</p>

        <p><strong>Стек технологий:</strong></p>
        <ul>
            <li>Front-end framework: Vue.js 2+</li>
            <li>Можно использовать другие дополнительные библиотеки.</li>
        </ul>

        <p><strong>Задача</strong></p>

        <ul>
            <li>Нужно создать одностраничное веб-приложение со списком курсов и студентов этих курсов</li>
            <li>
                Список студентов и список курсов должен быть реализован как отдельные страницы с использованием Vue.js Router
            </li>
            <li>Все элементы страницы должны быть реализованы как Vue.js компоненты</li>
            <li>
                Для списка студентов и курсов должна быть реализована возможность удаления, редактирования и добавления новых студентов/курсов. Эти изменения должны сразу же сохраняться в IndexedDB или Local Storage и выводиться даже после перезагрузки страницы.
            </li>
        </ul>

        <p><strong>Опционально (будет плюсом)</strong></p>

        <ul>
            <li>Реализовать поиск по студентам/курсам</li>
            <li>Реализовать пагинацию</li>
            <li>Реализовать фильтр по количеству отображаемых элементов на страницу</li>
            <li>Реализовать сортировку</li>
        </ul>

    </div>
</template>

<script>
  export default{}
</script>