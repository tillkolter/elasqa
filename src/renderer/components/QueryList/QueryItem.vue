<template>
  <div>{{JSON.stringify(query)}}</div>
</template>

<script>
  export default {
    name: 'QueryItem',
    props: ['query']
  }
</script>
