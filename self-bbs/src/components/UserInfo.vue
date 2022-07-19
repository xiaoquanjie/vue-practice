<template>
    <div v-if="obj.isLoading">
        Loading......
    </div>
    <div class="main" :style="obj.style">
        <real-user :name="$route.params.name" @userLoadFinish="userLoadFinish"></real-user>
    </div>
</template>

<style scoped>
.main {
    margin-left: 15%;
    margin-right: 15%;
    margin-top: 5px;
}
</style>

<script>
import RealUser from './User.vue'
import { reactive } from 'vue'

export default {
    name: 'UserInfo',
    setup() {
        const obj = reactive({isLoading: true, style: 'visibility: hidden;'})
        
        function userLoadFinish() {
            obj.isLoading = false
            obj.style = ''    
        }

        return { obj, userLoadFinish }
    },
    data() {
        return {
        }
    },
    components: {
        RealUser
    },
    beforeMount() {
        this.obj.isLoading = true
    }
}
</script>