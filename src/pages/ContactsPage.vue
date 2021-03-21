<template>
  <div class="ma-4">
    <v-row>
      <v-btn>
        {{ $t('addContact') }}
      </v-btn>
    </v-row>
    <v-row >
      <v-col>
        <Contact :key="i" v-for="(contact, i) in getUser().contacts" :contact="contact" />
      </v-col>
    </v-row>
  </div>

</template>

<script>
import { mapGetters } from 'vuex';
import Contact from '@/components/Contact.vue';

export default {
  name: 'ContactsPage',
  components: { Contact },
  methods: {
    ...mapGetters(['getUser']),
  },
};
</script>

<style scoped>

</style>
