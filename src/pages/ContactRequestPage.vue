<template>
  <div class="ma-4">
    <v-container fluid>
      <v-subheader>{{ $t('contactRequests') }}</v-subheader>
      <v-expansion-panels v-if="getUser.contactRequests">
        <ContactRequest
          :key="i"
          v-for="(contactRequest, i) in getUser.contactRequests"
          :contactRequest="contactRequest"
        />
      </v-expansion-panels>
    </v-container>
  </div>
</template>

<script>
import ContactRequest from '@/components/ContactRequest.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'ContactRequestPage',
  components: { ContactRequest },
  computed: {
    ...mapGetters(['getUser']),
  },
};
</script>

<style scoped>

</style>
