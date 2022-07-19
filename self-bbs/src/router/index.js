import { createRouter,  createWebHashHistory } from 'vue-router'
import MainContent from '../components/MainContent.vue'
import Article from '../components/Article.vue'
import UserInfo from '../components/UserInfo.vue'

const routes = [
    {
        path: '/',
        name: 'root',
        components: {
            main: MainContent
        }
    },
    {
        path: '/article/:id/:loginname',
        name: 'article',
        components: {
            main: Article
        }
    },
    {
        path: '/userinfo/:name',
        name: 'userinfo',
        components: {
            main: UserInfo
        }
    }
]

const router = createRouter({
    routes,
    history: createWebHashHistory()
})

export default router