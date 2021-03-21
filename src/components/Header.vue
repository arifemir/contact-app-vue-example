<template>
  <v-app-bar
    app
    color="primary"
    dark
  >
    <router-link to="/home">
      <div class="d-flex align-center" >
        <v-app-bar-title :style="{color: 'white'}">{{ $t('phoneBook') }}</v-app-bar-title>
      </div>
    </router-link>

    <v-spacer></v-spacer>

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

    <div class="ml-2">
      <div class="hovered" :class="($i18n.locale !== 'en') && 'opacity-5'">
        <v-img @click="$i18n.locale = 'en'" src="https://www.countryflags.io/US/flat/16.png"/>
      </div>
      <div class="hovered" :class="($i18n.locale !== 'tr') && 'opacity-5'">
        <v-img @click="$i18n.locale = 'tr'" src="https://www.countryflags.io/TR/flat/16.png"/>
      </div>
    </div>
  </v-app-bar>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'Header',
  data: () => ({
    langs: ['en', 'tr'],
  }),
  methods: {
    ...mapActions(['logout']),
  },
  computed: {
    ...mapGetters(['getUser']),
  },
};
</script>

<style scoped>
  .hovered:hover {
    cursor: pointer;
    box-shadow: 0px 0px 20px 1px rgba(255,255,255,1);
  }
  .opacity-5 {
    opacity: 0.5;
  }
</style>
