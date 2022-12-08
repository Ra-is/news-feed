<template>
   <the-header></the-header>
  <div class="flex flex-row w-full mt-20">
  <the-sidebar></the-sidebar>
  <div class="flex-1 ml-4">
  <the-content>
  </the-content>    
 </div>
  
  </div>
 
  


  
</template>

<script>
import TheSidebar from './components/layout/TheSidebar.vue'
import TheContent from './components/layout/TheContent.vue'
import TheHeader from './components/layout/TheHeader.vue'
export default {
  components: {
    TheSidebar,
    TheContent,
    TheHeader
  },
 
  

}
</script>
