<template>
    <div class="input-group mb-3">
        <div class="input-group-prepend">
            <span class="input-group-text" id="basic-addon1">Search for Courses</span>
        </div>
        <input type="text" class="form-control" placeholder="Search"
               aria-label="Search"
               aria-describedby="basic-addon1"
               v-model="yourSearch"
        >
    </div>
</template>

<script>
    export default{

    }
</script>