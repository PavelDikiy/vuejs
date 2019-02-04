<template>
    <v-dialog width="400px" v-model="dialog">
        <v-btn dark color="light-blue darken-4" round slot="activator">Buy</v-btn>
        <v-card>
            <v-container>
                <v-layout row>
                    <v-flex xs12>
                        <v-card-title>
                            <h1 class="text--primary">Do you wan't to buy it?</h1>
                        </v-card-title>
                    </v-flex>
                </v-layout>
                <v-divider></v-divider>
                <v-layout row>
                    <v-flex xs12>
                        <v-card-text>
                            <v-text-field
                                    name="name"
                                    label="Your name"
                                    type="text"
                                    v-model="name"
                            ></v-text-field>
                            <v-text-field
                                    name="phone"
                                    label="Your phone"
                                    type="text"
                                    v-model="phone"
                            ></v-text-field>
                        </v-card-text>
                    </v-flex>
                </v-layout>
                <v-divider></v-divider>
                <v-layout row>
                    <v-flex xs12>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn
                                    flat
                                    outline
                                    @click="onCancel"
                                    :disabled="localLoading"
                            >Close</v-btn>
                            <v-btn
                                    flat
                                    class="success"
                                    @click="onSave"
                                    :disabled="localLoading"
                                    :loading="localLoading"
                            >Buy It!</v-btn>
                        </v-card-actions>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-card>
    </v-dialog>
</template>

<script>
  export default {
    props: ['product'],
    data () {
      return {
        dialog: false,
        name: '',
        phone: '',
        localLoading: false
      }
    },
    methods: {
      onCancel () {
        this.name = ''
        this.phone = ''
        this.dialog = false
      },
      onSave () {
        if (this.name !== '' && this.phone !== '') {
          this.localLoading = true
          this.$store.dispatch('createOrder', {
            name: this.name,
            phone: this.phone,
            productId: this.product.id,
            ownerId: this.product.ownerId
          })
            .finally(() => {
              this.name = ''
              this.phone = ''
              this.localLoading = false
              this.dialog = false
            })
        }
      }
    }
  }
</script>
