<template>
  <div>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <v-app-bar-nav-icon class="hidden-md-and-up" @click="drawer = !drawer" />

      <router-link to="/home">
        <div class="d-flex align-center" >
          <v-app-bar-title :style="{color: 'white'}">{{ $t('phoneBook') }}</v-app-bar-title>
        </div>
      </router-link>

      <v-spacer></v-spacer>

      <NavButtons/>

      <div class="ml-2">
        <div class="hovered" :class="($i18n.locale !== 'en') && 'opacity-5'">
          <v-img @click="$i18n.locale = 'en'" src="https://www.countryflags.io/US/flat/16.png"/>
        </div>
        <div class="hovered" :class="($i18n.locale !== 'tr') && 'opacity-5'">
          <v-img @click="$i18n.locale = 'tr'" src="https://www.countryflags.io/TR/flat/16.png"/>
        </div>
      </div>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      :style="{top: '56px'}"
    >
      <v-list>
        <slot v-if="getUser">
          <v-list-item link to="/addcontact">
            <v-list-item-icon>
              <v-icon>mdi-contacts</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>
                {{ $t('addContact') }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item link to="/contactrequests">
            <v-list-item-icon>
              <v-icon>mdi-share-all-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{ $t('contactRequests') }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item link>
            <v-list-item-icon>
              <v-icon>mdi-logout</v-icon>
            </v-list-item-icon>
            <v-list-item-content @click="logout">
              <v-list-item-title>{{ $t('logout') }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </slot>
        <slot v-else>
          <v-list-item link to="/login">
            <v-list-item-icon>
              <v-icon>mdi-login</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>
                {{ $t('login') }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item link to="/register">
            <v-list-item-icon>
              <v-icon>mdi-account-plus</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{ $t('register') }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </slot>

      </v-list>

    </v-navigation-drawer>
  </div>
</template>

<script>
import NavButtons from '@/components/NavButtons.vue';
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'Header',
  components: { NavButtons },
  data: () => ({
    langs: ['en', 'tr'],
    drawer: false,
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
