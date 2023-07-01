<script setup lang="ts">

const response = ref()

response.value = await useFetch('/api/hello')

</script>
<template>
  <div>
    {{ response.data }}
  </div>
</template>
