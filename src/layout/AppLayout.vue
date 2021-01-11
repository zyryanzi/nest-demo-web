<template>
    <div class="app-layout">
        <router-view v-if="fullScreenMode"/>
        <div class="app-content" v-else>
            <app-header/>
            <div id="nav" class="nav">
                <router-link class="nav-btn" to="/">Home</router-link>
                <router-link class="nav-btn" to="/about">About</router-link>
                <router-link class="nav-btn" to="/contact">Contact</router-link>
            </div>
            <router-view/>
            <app-footer/>
        </div>
    </div>
</template>

<script>
    import AppFooter from './Footer'
    import AppHeader from './Header'
    import {defineComponent, ref, watch} from 'vue'
    import {useRouter} from "vue-router";

    export default defineComponent({
        components: {
            AppFooter,
            AppHeader
        },
        setup() {
            const fullscreenMode = ref(true)
            const router = useRouter()
            watch(router.currentRoute, () => {
                fullscreenMode.value = Boolean(router.currentRoute.value.meta?.fullScreen)
            })
            return {fullscreenMode}
        }
    })
</script>

<style lang="less" scoped>
    .app-layout {
        height: 100%;
    }
    .app-content {
        position: relative;
        padding: 0;
        margin: 0;
    }
    .router-view {
        margin: 0;
        padding: 0;
    }
    .nav {
        padding-right: 30px;
    }
    .nav-btn {
        margin-left: 20px;
    }
</style>