<template>
  <v-expansion-panel>
    <v-expansion-panel-header disable-icon-rotate :style="{cursor: 'unset'}">
      <template v-slot:actions>
        <v-icon
          v-if="!getUser.contacts.find(c => c.id === contactRequest.id)"
          @click="acceptContactRequest(contactRequest.id)"
          class="contactRequest-action"
          color="yellow">
          mdi-check-bold
        </v-icon>
        <v-icon
          @click="rejectContactRequest(contactRequest.id)"
          class="contactRequest-action ml-2"
          color="red">
          mdi-close-thick
        </v-icon>
      </template>
      <v-row
        align="center"
        class="spacer"
        no-gutters
      >
        <v-col
          cols="4"
          sm="2"
          md="2"
          lg="2"
        >
          <v-avatar
            size="36px"
          >
            <img
              alt="Avatar"
              :src="contactRequest.photo"
            >
          </v-avatar>
        </v-col>

        <v-col
          cols="8"
          sm="4"
          md="2"
          lg="2"
        >
          <strong v-html="contactRequest.name"></strong>
        </v-col>

        <v-col
          cols="2"
          class="hidden-sm-and-down"
        >
          <strong v-html="contactRequest.surname"></strong>
        </v-col>

        <v-col
          cols="3"
          sm="6"
          md="3"
          lg="3"
          class="text-no-wrap hidden-xs-only"
        >
          <strong>{{contactRequest.email}}</strong>
        </v-col>

        <v-col
          cols="3"
          class="grey--text text-truncate hidden-sm-and-down"
        >
          {{ contactRequest.phone }}
        </v-col>
      </v-row>
    </v-expansion-panel-header>
  </v-expansion-panel>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'ContactRequest',
  props: ['contactRequest'],
  methods: {
    ...mapActions(['acceptContactRequest', 'rejectContactRequest']),
  },
  computed: {
    ...mapGetters(['getUser']),
  },
};
</script>

<style scoped>

</style>
