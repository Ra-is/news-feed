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
       if(this.$route.meta.needApi)
        {
             return "News For " + this.$route.name
        }
        else
        {
            return ""
        }
        
        
    }
  },
  watch:{
    $route (to, from){
        if(to.meta.needApi)
        {
           this.loadNews(to.name);
        }

        else{
            
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
