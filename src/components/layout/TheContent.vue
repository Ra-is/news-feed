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
       if(this.$route.name == 'home')
        {
            return ""
        }
        if(this.$route.name == 'notfound')
        {
          return ""
        }
        else
        {
            return "News For " + this.$route.name
        }
        
        
    }
  },
  watch:{
    $route (to, from){
        if(to.name == 'home')
        {
           
        }
         if(to.name == 'notfound')
        {
           
        }
        else{
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
