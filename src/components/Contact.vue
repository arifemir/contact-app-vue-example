<template>
  <div>
    <v-img size="30" :src="contact.photo" />
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
