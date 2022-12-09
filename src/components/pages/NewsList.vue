<template>
     <div v-if="hasNews && showlist" class="grid md:grid-cols-3 grid-cols-1 gap-4 mt-3">
        <news-card 
        v-for="news in latestNews" 
        :key="news.id"
        :id="news.id"
        :content="truncateContent(news.content,100)"
        :author="news.author"
        :description="truncateContent(news.description,100)"
        ></news-card>
        </div>
        
        <router-view></router-view>
     
</template>

<script>
import NewsCard from '../UI/NewsCard.vue'
import NewsDetail from '../pages/NewsDetail.vue'
export default {
components: {
    NewsCard,
    NewsDetail,
},
 data(){
  return {
    showlist:true
  }
 },
 computed: {
    latestNews(){
     return this.$store.getters['news/newsdata'];
    },
     hasNews() {
      return this.$store.getters['news/hasNews'];
    }
  },
  methods: {
     truncateContent(text, length, clamp){
    clamp = clamp || '...';
    var node = document.createElement('div');
    node.innerHTML = text;
    var content = node.textContent;
    return content.length > length ? content.slice(0, length) + clamp : content;

    },
    isEmptyObject(obj){
    return JSON.stringify(obj) === '{}'
    }
  },
   watch:{
    $route (to, from){
      if(!this.isEmptyObject(to.params))
      {
       this.showlist = false
      console.log('this is a route to')
      console.log(to)
      console.log('end this is a route to')
      }
      else{
         this.showlist = true
        console.log('no')
      }
      
       
    }
}


}
</script>