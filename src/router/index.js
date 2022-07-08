import { createRouter, createWebHistory } from 'vue-router'
// import Home from '../views/HomeView.vue'
import NewsLayout from '../layouts/NewsLayout.vue'
import BusinessLayout from '../layouts/BusinessLayout.vue'
import ProfilesLayout from '../layouts/ProfilesLayout.vue'
import AllNews from '../views/news/AllNews.vue'
// import NewsArticleView from '../views/news/ArticleView.vue'
import AllBusiness from '../views/business/AllBusiness.vue'
// import BusinessArticleView from '../views/business/ArticleView.vue'
import AllProfiles from '../views/profiles/AllProfiles.vue'
// import ProfileArticleView from '../views/profiles/ArticleView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/news',
    name: 'News Layout',
    component: NewsLayout,
    children: [
      {
        path: '',
        name: 'All News',
        component: AllNews
      },
      {
        path: ':id',
        name: 'News Article',
        component: () => import('../components/micro/BlogPost.vue')
      }
    ]
  },
  {
    path: '/business',
    name: 'Business Layout',
    component: BusinessLayout,
    children: [
      {
        path: '',
        name: 'All Business',
        component: AllBusiness
      },
      {
        path: ':id',
        name: 'Business Article',
        component: () => import('../components/micro/BlogPost.vue')
      }
    ]
  },
  {
    path: '/profiles',
    name: 'Profiles Layout',
    component: ProfilesLayout,
    children: [
      {
        path: '',
        name: 'All Profiles',
        component: AllProfiles
      },
      {
        path: ':id',
        name: 'Profile Article',
        component: () => import('../components/micro/BlogPost.vue')

        // component: ProfileArticleView
      }
    ]
  }
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
