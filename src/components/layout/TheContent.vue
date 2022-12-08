<template>
    <div class="text-xl font-serif text-center">
        {{newsTitle}}
    </div>
     <router-view></router-view>
    
</template>

<script>
export default {
    created(){
    this.loadNews('business');
    
  },
  computed: {
    newsTitle(){
      
       if(this.$route.meta.needApi == true)
        {
           return "News For " + this.$route.name
        }
        
        
        
    }
  },
  watch:{
    $route (to, from){
       
         if(to.meta.needApi == true)
        {
           this.loadNews(to.name);
        }
       
    }
} ,

  methods: {
    async loadNews(category) {
      
      try {
         await this.$store.dispatch('news/getAllNews',{
            category:category
         });


      } catch (error) {
        console.log(error.message);
      }
  
    },

    
  },
}
</script>
