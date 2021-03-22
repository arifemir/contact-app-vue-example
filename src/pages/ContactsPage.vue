<template>
  <div class="ma-4">
    <v-container fluid>
      <v-text-field prepend-icon="mdi-account-search" :label="$t('searching')" v-model="search" />
      <v-subheader>{{ $t('contacts') }}</v-subheader>
      <v-expansion-panels v-if="getUsers">
        <Contact :key="i" v-for="(contact, i) in contacts" :contact="contact" />
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
  data: () => ({
    search: '',
    contacts: [],
  }),
  created() {
    this.contacts = this.getContacts;
  },
  watch: {
    search(e) {
      this.contacts = this.getContacts.filter((contact) => (contact.name.toLowerCase().includes(e)
        || contact.surname.toLowerCase().includes(e)
        || contact.email.toLowerCase().includes(e)
        || contact.phone.toLowerCase().includes(e)));
    },
  },
  computed: {
    ...mapGetters(['getContacts', 'getUsers']),
  },
};
</script>

<style scoped>

</style>
