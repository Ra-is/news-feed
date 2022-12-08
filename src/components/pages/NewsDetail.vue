<template>
    <div class="text-2xl font-serif text-center">
        New Detail {{hasId}}

    </div>
</template>

<script>
export default {
    props: ['id'],
     computed: {
    hasId()
    {
       console.log('id props')
      console.log(this.id)
      console.log('end id props')
    }
  },
}
</script>