import { createRouter, createWebHistory } from 'vue-router';
import newsList from './components/pages/NewsList.vue'
import home from './components/pages/Home.vue'
import NotFound from './components/pages/NotFound.vue'
import newsDetail from './components/pages/NewsDetail.vue'

const router = createRouter({
history: createWebHistory(),
linkActiveClass: "active",
linkExactActiveClass: "exact-active",
routes: [
    { 
        path: '/', redirect: '/business' 
    }, 
    { 
        path: '/home', 
        component:  home ,
        name: 'home',
    }, 
    { path: '/business', 
    component:  newsList ,
    name: 'business',
    children:[
        {
            path: ':id',
            name: 'business-detail',
            component: newsDetail,
            props: true,
        }
    ]
    }, 
    { path: '/heath', component:  newsList , name: 'health'},
    { path: '/sports', component:  newsList, name:'sports' },
    { path: '/entertainment', component:  newsList, name: 'entertainment'},
    { path: '/technology', component:  newsList, name:"technology"},
    { path: '/science', component:  newsList, name:'science'},
    { path: '/:pathMatch(.*)*', component:  NotFound, name:'notfound'},
]
});

export default router;