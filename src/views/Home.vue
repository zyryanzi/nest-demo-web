<template>
    <div>home.page</div>
</template>

<script lang="ts">
    // import {Options, Vue, setup} from 'vue-class-component'; // @ is an alias to /src
    import {defineComponent} from 'vue'

    const Home = defineComponent({
        created() {
            console.log('routerList', this.$route)
            console.log(this)
        },
        methods: {
            hello() {
                console.log('hello')
                return '你好'
            }
        }
    })

    /*@Options({
        components: {},
    })*/
    export default Home
</script>
