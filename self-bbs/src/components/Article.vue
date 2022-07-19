<template>
    <div v-if="isLoading">
        Loading....
    </div>
    <div v-else class="main">
        <div class="article">
            <p>{{data.title}}</p>
            <ul class="article-u">
                <li>分类:{{data.tab}}</li>
                <li>访问:{{data.visit_count}}</li>
                <li>发布于:{{$filters.formatDate(data.create_at)}}</li>
                <li>
                    作者:
                    <router-link :to="{name: 'userinfo', params: {name: data.author.loginname}}">{{data.author.loginname}}</router-link>
                </li>
            </ul>
            <div v-html="data.content"></div>
        </div>
        <div class="userinfo">
            <real-user :name="data.author.loginname" @userLoadFinish="userLoadFinish"></real-user>
        </div>
    </div>
</template>

<style scoped>
@import url("../assets/markdown-github.css");
.article, .userinfo {
    background-color: white;
    padding: 20px;
}
.main {
    margin: 10px 50px 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.article {
    flex: 7 7 0;
    max-width: 70%;
}
.userinfo {
    flex: 3 3 0;
    max-width: 30%;
    margin-left: 20px;
}
.article-u li {
    display: inline-block;
    font-size: 13px;
    color: gray;
    margin-left: 5px;
}
a {
    text-decoration: none;
    color: gray;
}
</style>

<script>
import RealUser from './User.vue'

export default {
    name: 'UserArticle',
    setup() {
        function userLoadFinish() {
        }

        return { userLoadFinish }
    },
    data() {
        return {
            data: {},
            isLoading: false
        }
    },
    beforeMount() {
        this.isLoading = true;
        this.getData()
        
    },
    methods: {
        getData() {
            this.$http({
                url: 'https://cnodejs.org/api/v1/topic/' + this.$route.params.id,
                method: 'get'
            })
            .then((data)=> {
                if (data.data.success === true) {
                    this.data = data.data.data
                    this.isLoading = false
                }
            })
            .catch((err)=> {
                console.log(err)
            })
        }
    },
    watch: {
        $route() {
            this.getData()
        }
    },
    components: {
        RealUser
    }
} 
</script>