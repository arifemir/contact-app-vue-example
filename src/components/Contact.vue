<template>
  <v-expansion-panel>
    <v-expansion-panel-header disable-icon-rotate :style="{cursor: 'unset'}">
      <template v-slot:actions>
        <v-icon class="contact-action" color="blue">
          mdi-share-variant
        </v-icon>
        <v-icon @click="deleteContact(contact.id)" class="contact-action ml-2" color="red">
          mdi-delete
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
              :src="contact.photo"
            >
          </v-avatar>
        </v-col>

        <v-col
          cols="8"
          sm="4"
          md="2"
          lg="2"
        >
          <strong v-html="contact.name"></strong>
        </v-col>

        <v-col
          cols="2"
          class="hidden-sm-and-down"
        >
          <strong v-html="contact.surname"></strong>
        </v-col>

        <v-col
          cols="3"
          sm="6"
          md="3"
          lg="3"
          class="text-no-wrap hidden-xs-only"
        >
          <strong>{{contact.email}}</strong>
        </v-col>

        <v-col
          cols="3"
          class="grey--text text-truncate hidden-sm-and-down"
        >
          {{ contact.phone }}
        </v-col>
      </v-row>
    </v-expansion-panel-header>
  </v-expansion-panel>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'Contact',
  props: ['contact'],
  methods: {
    ...mapActions(['deleteContact']),
  },
};
</script>

<style scoped>
  .contact-action {
    cursor: pointer;
  }
  .contact-action:hover {
    opacity: 0.7;
  }
</style>
