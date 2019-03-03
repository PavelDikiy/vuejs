<template>
    <header>
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
            <div class="container collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <router-link class="nav-link" :to="{ name : 'home'}" exact>Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" :to="{ name : 'courses'}">Courses</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" :to="{ name : 'users'}">Users</router-link>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
</template>

<script>
  export default{}
</script>