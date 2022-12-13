import mutations from './mutations.js'
import actions from './actions.js'
import getters from './getters.js'

export default {
    namespaced: true,
    state(){
        return {
            apikey: import.meta.env.VITE_API_NEWS_FEED_TOKEN,
            newsdata: [],
        }
    },
    mutations,
    actions,
    getters
}


