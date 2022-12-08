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
        meta: {
            needApi:false
        }
    }, 
    {
     path: '/business', 
    component:  newsList ,
    name: 'business',
    meta: {
        needApi:true
    },
    children:[
        {
            path: ':id',
            name: 'business-detail',
            component: newsDetail,
            props: true,
            meta: {
                needApi:false
            },
        }
    ]
    }, 
    { path: '/heath',
     component:  newsList ,
      name: 'health',
      meta: {
        needApi:true
    },
      children:[
        {
            path: ':id',
            name: 'health-detail',
            component: newsDetail,
            props: true,
            meta: {
                needApi:false
            },
        }
    ]
    },
    { 
        path: '/sports',
        component:  newsList, 
        name:'sports',
        meta: {
            needApi:true
        },
        children:[
            {
                path: ':id',
                name: 'sports-detail',
                component: newsDetail,
                props: true,
                meta: {
                    needApi:false
                },
            }
        ] 
    },
    {
        path: '/entertainment', 
        component:  newsList, 
        name: 'entertainment',
        meta: {
            needApi:true
        },
        children:[
            {
                path: ':id',
                name: 'entertainment-detail',
                component: newsDetail,
                props: true,
                meta: {
                    needApi:false
                },
            }
        ]
    },
    { path: '/technology',
     component:  newsList, 
     name:"technology",
     meta: {
        needApi:true
    },
     children:[
        {
            path: ':id',
            name: 'technology-detail',
            component: newsDetail,
            props: true,
            meta: {
                needApi:false
            },
        }
    ]
    },
    { path: '/science', 
    component:  newsList,
    meta: {
        needApi:true
    },
    name:'science',
    children:[
        {
            path: ':id',
            name: 'science-detail',
            component: newsDetail,
            props: true,
            meta: {
                needApi:false
            },
        }
    ]
    },
    { 
    path: '/:pathMatch(.*)*',
    component:  NotFound,
    name:'notfound',
    meta: {
        needApi:false
    },
    },
]
});

export default router;