<template>
    <div id="container" @mousemove="mouseMoveEv" :class="{'complete': isComplate}">
        <h1>Clouds</h1>
        <div class="loader"
             :class="{'loadDone': loadProgress===100}"
             :style="`top:${objEvent.epy}px; left:${objEvent.epx}px`"
        >{{loadProgress}}
        </div>
        <img v-for="(imgd, ind) in arrayImages" :key="imgd.id" :src="imgd.imgurl" :width="imgd.width"
             :class="{'hide': (imgd.show===false || (imgd.trHor !== 0 && imgd.trVer !== 0))}"
             :style="`top:${imgd.toppoz}px; left:${imgd.leftpoz}px; transform:translate(${imgd.trHor}%, ${imgd.trVer}%)`"
        />
    </div>
</template>

<script>
  const RenderObj = class {
    constructor(id, imgurl, width, toppoz, leftpoz, show, trHor, trVer) {
      this.id = id,
        this.imgurl = imgurl,
        this.width = width,
        this.toppoz = toppoz,
        this.leftpoz = leftpoz,
        this.show = show,
        this.trHor = trHor,
        this.trVer = trVer
    }
  };
  export default{
    data(){
      return {
        urlsAr: JSON.parse(localStorage.getItem("cachePhotoClouds")) || "",
        loadProgress: "00",
        radius: 150,
        maxPhoto: 150,
        isComplate: false,
        objEvent: {epx: (window.clientWidth / 2) + 'px', epy: (window.clientHeight / 2) + 'px'}
      }
    },
    methods: {
      mouseMoveEv(event){
        this.objEvent.epx = event.pageX;
        this.objEvent.epy = event.pageY;

        let allActive = this.arrayImages.filter((item) => {
          return item.show === false;
        }).length;

        if (this.loadProgress === 100)
          if (allActive !== 0) {
            this.arrayImages.filter((item, ind) => {
              if (item.show === false &&
                ((item.leftpoz < this.objEvent.epx + this.radius && item.leftpoz > this.objEvent.epx - this.radius)
                && (item.toppoz < this.objEvent.epy + this.radius && item.toppoz > this.objEvent.epy - this.radius) )) {
                if (this.arrayImages[ind].id == item.id) this.arrayImages[ind].show = true;
                return true;
              }
            });
          } else {
            this.isComplate = true;
            this.complated;
          }


      }
    },
    computed: {
      arrayImages() {

        let count = 0;
        const obj = [];
        for (let i = 0; i < this.urlsAr.length; i++) {
          let tpoz, lpoz, randW;
          randW = Math.ceil(50 + Math.random() * (100 - 50));
          tpoz = Math.ceil(Math.random() * window.innerHeight);
          if (tpoz + 100 > window.innerHeight) tpoz = window.innerHeight - 100;
          lpoz = Math.ceil(Math.random() * window.innerWidth);
          if (lpoz + 100 > window.innerWidth) lpoz = window.innerWidth - 100;

          if (!localStorage.getItem("cachePhotoWater")) {
            setTimeout(() => {
              let img = new Image();

              img.onload = () => {
                this.loadProgress = Math.ceil((count * 100) / this.maxPhoto);
                this.loadProgress = (this.loadProgress < 10) ? "0" + this.loadProgress : this.loadProgress;

                obj.push(
                  new RenderObj(++count, this.urlsAr[i], randW, tpoz, lpoz, false, 0, 0)
                );
              };

              img.src = this.urlsAr[i];
            }, 10 * (i + 1));

          } else {
            this.loadProgress = 100;
            obj.push(
              new RenderObj(++count, this.urlsAr[i], randW, tpoz, lpoz, false, 0, 0)
            );
          }
        }
        return obj;

      },
      complated(){
        const arrPoz = ["-1000", "1000"];
        const rundomPoz = function () {
          return arrPoz[Math.round(Math.random())];
        };
        for (let i = 0; i < this.arrayImages.length; i++) {


          this.arrayImages[i].trHor = rundomPoz();
          this.arrayImages[i].trVer = rundomPoz();

          if (i === this.maxPhoto - 1) {
            setTimeout(() => {
              this.$router.push({name: 'water'})
            }, 1500);
          }

        }
      }
    },
    created(){
      if (!this.urlsAr) {
        const arr = [];
        let countForDubl = 0;
        for (let i = 0; i < 150; i++) {
          ++countForDubl;
          arr.push(`/img/photo${countForDubl}.jpg`);
          if (countForDubl === 20) {
            countForDubl = 1;
          }
        }
        this.urlsAr = arr;
      }
    },
    mounted(){
      localStorage.setItem("cachePhotoClouds", JSON.stringify(this.urlsAr));
    }
  }
</script>

<style scoped>
    h1 {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 10em;
        opacity: 0.5;
        line-height: normal;
        margin: 0;
    }

    .hide {
        opacity: 0;
    }
</style>