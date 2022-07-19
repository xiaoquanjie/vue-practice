<template>
    <div if="isLoading">
        <div class="authorinfo">
            <div class="info">
                <img :src="data.avatar_url">
                <span class="name">{{ data.loginname }}</span>
            </div>
            <div class="info">
                <span class="score">积分</span>
                <span class="small-font">{{data.score}}</span>
            </div>
            <div class="info">
                <span class="time">注册时间</span>
                <span class="small-font">{{$filters.formatDate(data.create_at)}}</span>
            </div>
            <div class="info" style="margin-bottom: 0px"></div>
        </div>
        <div class="reply-topics">
            <div class="title">创建的主题</div>
            <div>
                <div class="topic" v-for="topic of data.recent_topics" :key="topic.id">
                    <router-link :to="{name: 'article', params: {id: topic.id, loginname: data.loginname}}">
                        {{topic.title}}
                    </router-link>
                </div>
            </div>
        </div>
        <div class="create-topics">
            <div class="title">回复的主题</div>
            <div>
                <div class="topic" v-for="topic of data.recent_replies" :key="topic.id">
                    <router-link :to="{name: 'article', params: {id: topic.id, loginname: data.loginname}}">
                        {{topic.title}}
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.authorinfo, .reply-topics, .create-topics {
    background-color: white;
    margin-bottom: 10px;
    border-radius: 5px;
    padding-top: 10px;
}
.authorinfo {
    padding-left: 10px;
    color: gray;
}
.reply-topics, .create-topics {
    padding-bottom: 20px;
}
.authorinfo .info {
    display: flex;
    align-items: baseline;
    margin-bottom: 30px;
}
.authorinfo .info .name {
    margin-left: 10px;
}
.authorinfo .info img {
    width: 100px;
    height: 100px;
}
.authorinfo .info .score {
    width: 110px;
}
.authorinfo .info .time {
    width: 110px;
}
.small-font {
    font-size: 0.5em;
}
.title {
    font-size: 0.75rem;
    padding: 10px;
    background-color: rgba(212, 205, 205, 0.17);
}
a {
    text-decoration: none;
    font-size: 13px;
    color: gray;
}
.topic {
    margin: 10px 50px;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>

<script>
export default {
    name: 'RealUser',
    setup(props, {emit}) {
        function loadFinish() {
            emit('userLoadFinish')
        }
        return {loadFinish}
    },
    data() {
        return {
            data: {
                isLoading: true
            }
        }
    },
    props: {
        name: String
    },
    methods: {
        getData() {
            this.$http({
                url: 'https://cnodejs.org/api/v1/user/' + this.name,
                method: 'get'
            })
            .then((data)=> {
                if (data.data.success === true) {
                    this.data = data.data.data
                    this.isLoading = false
                    this.loadFinish()
                }
            })
            .catch((err)=> {
                console.log('failed to http get userinfo', err)
            })
        }
    },
    watch: {
    },
    beforeMount() {
        this.isLoading = true
        this.getData()
    }
}
</script>