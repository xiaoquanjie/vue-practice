<template>
    <div v-if="isLoading">
        Loading.....
    </div>
    <div class="main" v-else>
        <div class="data" v-for="data of datas" :key="data.author_id">
            <div class="sub1">
                <router-link :to="{name: 'userinfo', params: {name: data.author.loginname}}">
                    <img :src="data.author.avatar_url" style="width: 25px; height: 25px;">
                </router-link>
            </div>
            <div class="sub2" :title="data.reply_count + '/' + data.visit_count">
                {{data.reply_count}}/{{ data.visit_count }}    
            </div>
            <div class="sub3">
                <router-link :to="{name: 'article', params: {id: data.id, loginname: data.author.loginname}}" :title="data.title">
                    {{ data.title }}
                </router-link>
            </div>
            <div class="sub4" :title="data.last_reply_at">
                {{$filters.formatDate(data.last_reply_at)}}
            </div>
        </div>
    </div>
</template>

<style scoped>
router-link {
    padding: 0; 
    margin: 0;
}
.main {
    background-color: white;
	margin-top: 5px;
    margin-left: 10%;
    margin-right: 10%;
    padding-left: 50px;
}
.main .data {
    display: flex;
    height: 50px;
    align-items: baseline;
    border-bottom: 1px solid #DDDDDD;
}
.sub1 {
    flex: 0 0 75px;
    margin-top: 20px;
}
.sub2 {
    flex: 0 0 100px;
    font-size: 13px;
    margin-top: 30px;
}
.sub3 {
    flex: 8 7 200px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.sub4 {
    flex: 2 2 100px;
    font-size: 13px;
    display: flex;
    margin-right: 50px;
    justify-content: flex-end;
}
a {
    text-decoration: none;
    color: black;
}
</style>

<script>
export default {
    name: 'MainContent',
    data() {
        return {
            isLoading: true,
            datas: []
        }
    },
    beforeMount() {
        this.isLoading = true
        this.$http({
            url: 'https://cnodejs.org/api/v1/topics',
            method: 'get'
        })
        .then((data)=> {
            if (data.data.success === true) {
                this.datas = data.data.data
                this.isLoading = false
            }   
            else {
                console.log('get https://cnodejs.org/api/v1/topics fail', data.data)
            }
        })
        .catch((err)=> {
            console.log(err)
        })
    }
}
</script>