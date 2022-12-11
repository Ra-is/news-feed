<template>
    <div class="text-2xl font-serif text-center">
        New Detail  Author By {{newsdetail.author}}
       


<div v-if="hasData" class="block mt-10 max-w-6xl p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{newsdetail.title}}</h5>
    <p class="font-normal text-gray-700 dark:text-gray-400">{{newsdetail.description}}</p>
</div>


    </div>
</template>

<script>
export default {
    props: ['id'],
     data(){
        return {
            newsdetail: null,
        }
     },
     computed: {
    hasData(){
        return !!this.newsdetail
    }
  },
  created(){
    // let us get the news detail
    console.log('detail page created');
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