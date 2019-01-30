<template>
    <div class="progress">
        <div class="progress-bar" v-bind:style="widthBar">
        </div>
    </div>
</template>
<script>
    export default{
        props: {
            max: Number,
            val: Number
        },
        computed: {
            widthBar(){
                //return (this.max/this.val)*100;
                let w = (this.val / this.max) * 100;
                return {
                    width: `${w}%`,
                }
            }
        },
    }
</script>