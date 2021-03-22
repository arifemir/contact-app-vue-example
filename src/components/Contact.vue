<template>
  <div>
    <v-img :src="contact.photo" />
  </div>
</template>

<script>
export default {
  name: 'Contact',
  props: ['contact'],
};
</script>

<style scoped>

</style>
