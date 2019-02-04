/* eslint-disable */
<template>
    <v-app>
        <Navbar></Navbar>
        <template v-if="error">
            <v-snackbar
                    :multi-line="true"
                    :timeout="5000"
                    color="error"
                    @input="closeError"
                    :value="true"
            >
                {{ error }}
                <v-btn
                        dark
                        flat
                        @click.native="closeError"
                >
                    Close
                </v-btn>
            </v-snackbar>
        </template>
    </v-app>
</template>

<script>
  import Navbar from './components/Navbar.vue'
  export default{
    components: {
      Navbar: Navbar
    },
    methods: {
      closeError () {
        this.$store.dispatch('clearError')
      }
    },
    computed: {
      error () {
        return this.$store.getters.error
      }
    }
  }
</script>

<style>

</style>
