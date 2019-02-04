<template>
    <div v-if="!loading">
        <v-container fluid>
            <v-layout row>
                <v-flex xs12>
                    <v-carousel
                            delimiter-icon="stop"
                            prev-icon="mdi-arrow-left"
                            next-icon="mdi-arrow-right"
                    >
                        <v-carousel-item
                                v-for="(product, index) in promoProducts"
                                :key="index"
                                :src="product.imageSrc"
                        ></v-carousel-item>
                    </v-carousel>
                </v-flex>
            </v-layout>
        </v-container>
        <v-container grid-list-lg>
            <v-layout row wrap>
                <v-flex
                        xs12
                        sm6
                        md4
                        lg3
                        v-for="(product, i) in products"
                        :key="i"
                >
                    <router-link
                            :area-label="product.title"
                            :to="'/product/'+product.id"
                    >
                        <v-card-media
                                :src="product.imageSrc"
                                height="350px"
                        ></v-card-media>
                    </router-link>
                    <v-card>
                        <v-card-title primary-title>
                            <div>
                                <h3 class="card_heading heading">{{product.title}}</h3>
                                <div class="card_describe">
                                    <p class="subheading">{{product.description.substring(0, 60)}}</p>
                                    <p class="subheading card_price"><span class="title">Price: </span>{{product.price}} $
                                    </p>
                                </div>
                            </div>
                        </v-card-title>

                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn dark color="light-blue darken-4" round outline :to="'/product/'+product.id">
                                Description
                            </v-btn>
                            <app-buy-dialog :product="product"></app-buy-dialog>
                        </v-card-actions>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
    <div v-else>
        <v-container>
            <v-layout>
                <v-flex xs12 class="text-xs-center pt-5">
                    <v-progress-circular
                            :size="70"
                            :width="7"
                            color="purple"
                            indeterminate>
                    </v-progress-circular>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>

  export default{
      /*        data () {
       return {
       name: 'sasa',
       products: [
       {
       id: '1',
       title: 'Lenovo Legion Y520',
       vendor: 'Lenovo',
       color: 'black',
       material: 'metal/plastic',
       description: 'Intel Core i5 7300HQ 2500 MHz/15.6"/1920x1080/8Gb/1000Gb HDD/DVD нет/NVIDIA GeForce GTX 1050, 4096 МБ/Wi-Fi/Bluetooth/Win 10 Home',
       price: 760,
       promo: false,
       imageSrc: 'https://image.ibb.co/fZzq1o/Lenovo_Legion_Y520.jpg'
       },
       {
       id: '2',
       title: 'Asus FX503VD',
       vendor: 'Asus',
       color: 'white',
       material: 'plastic',
       description: 'Intel Core i5 7300HQ 2500 MHz/15.6"/1920x1080/8Gb/256Gb SSD/DVD нет/NVIDIA GeForce GTX 1050/Wi-Fi/Bluetooth/Windows 10 Home',
       price: 984,
       promo: true,
       imageSrc: 'https://image.ibb.co/cpScgo/ASUS_FX503_VD.jpg'
       },
       {
       id: '3',
       title: 'ASUS TUF Gaming FX504GD',
       vendor: 'Asus',
       color: 'black',
       material: 'metal/plastic',
       description: 'Intel Core i7 8750H 2300 MHz/15.6"/1920x1080/12Gb/1000Gb HDD/DVD нет/NVIDIA GeForce GTX 1050, 4096 МБ/Wi-Fi/Bluetooth/Win 10 Home',
       price: 1220,
       promo: true,
       imageSrc: 'https://image.ibb.co/jBZOMo/ASUS_TUF_Gaming_FX504_GD.jpg'
       },
       {
       id: '4',
       title: 'HP Omen 17',
       vendor: 'Hp',
       color: 'black',
       material: 'metal/plastic',
       description: 'Intel Core i7 7700HQ 2800 MHz/17.3"/1920x1080/12Gb/1128Gb HDD+SSD/DVD-RW/NVIDIA GeForce GTX 1060/Wi-Fi/Bluetooth/Windows 10 Home',
       price: 1600,
       promo: false,
       imageSrc: 'https://image.ibb.co/g6czu8/HP_Omen_17.jpg'
       },
       {
       id: '5',
       title: 'Acer Swift 5 SF514',
       vendor: 'Acer',
       color: 'gold',
       material: 'metal',
       description: 'Intel Core i7 8550U 1800 MHz/14"/1920x1080/16Gb/512Gb SSD/DVD нет/Intel HD Graphics 620/Wi-Fi/Bluetooth/Windows 10 Home',
       price: 1100,
       promo: true,
       imageSrc: 'https://image.ibb.co/mrOsgo/Acer_Swift_5.jpg'
       },
       {

       id: '6',
       title: 'Apple MacBook (MLHC2RU/A)',
       vendor: 'Apple',
       color: 'silver',
       material: 'metal',
       description: 'Intel Core m3 1200 MHz/12"/2304x1440/8Gb/256Gb SSD/DVD нет/Intel HD Graphics 615/Wi-Fi/Bluetooth/MacOS X',
       price: 980,
       promo: true,
       imageSrc: 'https://image.ibb.co/fxDsgo/Apple_macbook.jpg'
       }
       ]
       }
       }*/
    computed: {
      promoProducts () {
        return this.$store.getters.promoProducts
      },
      products () {
        return this.$store.getters.products
      },
      loading(){
        return this.$store.getters.loading
      }
    }
  }

</script>

<style scoped>
    .card_heading {
        font-weight: bold;
        word-wrap: break-word;
        text-align: center;
        margin-bottom: 1.5rem;
    }

    .card_describe {
        margin-top: auto;
        padding-left: 1rem;
    }

    .card_price {
        color: #c00f1b;
        font-size: 18px;
    }
</style>
