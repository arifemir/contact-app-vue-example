<template>
  <v-app>
    <Header/>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import Header from '@/components/Header.vue';
import { mapActions } from 'vuex';

export default {
  name: 'App',

  components: {
    Header,
  },
  created() {
    this.getAllUsers();
  },
  data: () => ({
    //
  }),
  methods: {
    ...mapActions(['getAllUsers']),
  },
};
</script>
