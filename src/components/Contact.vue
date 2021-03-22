<template>
  <v-expansion-panel>
    <v-expansion-panel-header disable-icon-rotate :style="{cursor: 'unset'}">
      <template v-slot:actions>
        <v-icon @click="shareDialog = true" class="contact-action" color="blue">
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

    <v-dialog
      v-model="shareDialog"
      max-width="500px"
    >
      <v-card>
        <v-card-title>
          {{$t('selectForShare', {name: contact.name})}}
        </v-card-title>
        <v-card-text>
          <v-select
            :items="getUsers.filter((u) => u.id !== getUser.id).map((u) => u.email)"
            item-value="text"
            v-model="selectedShare"
            :label="$t('selectUserForSharing', {name: contact.name})"
          />
        </v-card-text>
        <v-card-actions>
          <v-btn
            color="secondary"
            @click="shareContact(
              {
                sent: contact,
                sentTo: getUsers.filter((u) => u.email === selectedShare)
              })"
          >
            {{$t('share')}}
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-expansion-panel>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'Contact',
  props: ['contact'],
  data: () => ({
    shareDialog: false,
    selectedShare: '',
  }),
  methods: {
    ...mapActions(['deleteContact', 'shareContact']),
  },
  computed: {
    ...mapGetters(['getUsers', 'getUser']),
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
