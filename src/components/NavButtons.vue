<template>
  <div class="responsive">
    <slot v-if="!getUser">
      <router-link to="/login">
        <v-btn
          text
        >
          <span class="mr-2">{{ $t('login') }}</span>
          <v-icon>mdi-login</v-icon>
        </v-btn>
      </router-link>
      <router-link to="/register">
        <v-btn
          text
        >
          <span class="mr-2">{{ $t('register') }}</span>
          <v-icon>mdi-account-plus</v-icon>
        </v-btn>
      </router-link>
    </slot>
    <slot v-else>
      <router-link to="/addcontact">
        <v-btn
          text
        >
          <span class="mr-2">{{ $t('addContact') }}</span>
          <v-icon>mdi-contacts</v-icon>
        </v-btn>
      </router-link>
      <v-btn
        text
        @click="logout"
      >
        <span class="mr-2">{{ $t('logout') }}</span>
        <v-icon>mdi-logout</v-icon>
      </v-btn>
    </slot>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'NavButtons',
  methods: {
    ...mapActions(['logout']),
  },
  computed: {
    ...mapGetters(['getUser']),
  },
};
</script>

<style scoped>
@media (max-width: 540px) {
  .responsive {
    display: none;
  }
}
</style>
