import { createRouter, createWebHashHistory } from 'vue-router'
import PostList from '@/components/PostList'
import UserInfo from '@/components/UserInfo'
import Article from '@/components/Article'
import SizeBar from '@/components/SideBar'

const routes = [
    {
        path: '/',
        name: 'root',
        components: {
            main: PostList
        }
    },
    {
        path: '/user/:name',
        name: 'userinfo',
        components: {
            main: UserInfo
        }
    },
    {
        path: '/article/:id/:name',
        name: 'article',
        components: {
            main: Article,
            sidebar: SizeBar
        }
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router