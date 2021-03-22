<template>
  <div class="ma-4">
    <v-container fluid>
      <v-subheader>{{ $t('contacts') }}</v-subheader>
      <v-expansion-panels v-if="getUsers">
        <Contact :key="i" v-for="(contact, i) in getUser.contacts" :contact="contact" />
      </v-expansion-panels>
    </v-container>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Contact from '@/components/Contact.vue';

export default {
  name: 'ContactsPage',
  components: { Contact },
  computed: {
    ...mapGetters(['getUser', 'getUsers']),
  },
};
</script>

<style scoped>

</style>
