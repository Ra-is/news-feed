<template>
    <div class="text-2xl font-serif text-center">
        New Detail {{hasId}}

    </div>
</template>

<script>
export default {
    props: ['id'],
     data(){
        return {
            newsdetail: null
        }
     },
     computed: {
    hasId()
    {
       console.log('news details')
      console.log(this.newsdetail)
      console.log('end news details')
    }
  },
  created(){
    // let us get the news detail
    const allnews = this.$store.getters['news/newsdata'];

     const searchresult = null
    for (const key in allnews) {
        
         if(allnews[key].id == this.id)
         {
            this.newsdetail = allnews[key]
            break;
         }
      
    }

    
    
  }

}
</script>