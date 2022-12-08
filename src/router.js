import { createRouter, createWebHistory } from 'vue-router';
import newsList from './components/pages/NewsList.vue'
import home from './components/pages/Home.vue'
import NotFound from './components/pages/NotFound.vue'

const router = createRouter({
history: createWebHistory(),
linkActiveClass: "active",
linkExactActiveClass: "exact-active",
routes: [
    { 
        path: '/', redirect: '/news' 
    }, 
    { path: '/home', component:  home ,name: 'home'}, 
    { path: '/news', component:  newsList ,name: 'business'}, 
    { path: '/heath', component:  newsList , name: 'health'},
    { path: '/sports', component:  newsList, name:'sports' },
    { path: '/entertainment', component:  newsList, name: 'entertainment'},
    { path: '/technology', component:  newsList, name:"technology"},
    { path: '/science', component:  newsList, name:'science'},
    { path: '/:pathMatch(.*)*', component:  NotFound, name:'notfound'},
]
});

export default router;