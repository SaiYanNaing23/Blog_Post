import Vue from 'vue'
import VueRouter from 'vue-router'
import BlogPost from "@/components/BlogPost"
import ShowBlog from "@/components/ShowBlog"
import BlogDetail from "@/components/BlogDetail"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'blogPost',
    component: BlogPost
  },
  {
    path: '/showBlog',
    name: 'showBlog',
    component : ShowBlog,
  },
  {
    path : "/blogDetail/:id",
    name : "blogDetail",
    component : BlogDetail,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
