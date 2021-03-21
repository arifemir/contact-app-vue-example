<template>
  <v-form @submit.prevent="registerSubmit">
    <v-container>
      <v-col class="ma-auto" cols="12" md="8" lg="6">
        <v-row>
          <v-text-field
            v-model="email"
            :label="$t('email')"
            required
            type="email"
          ></v-text-field>
        </v-row>

        <v-row>
          <v-text-field
            v-model="password"
            :label="$t('password')"
            required
            type="password"
          ></v-text-field>
        </v-row>

        <v-row>
          <v-btn type="submit" :disabled="isButtonDisabled" >
            {{$t('login')}}
          </v-btn>
        </v-row>
      </v-col>
    </v-container>
  </v-form>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'LoginPage',
  data: () => ({
    email: '',
    password: '',
  }),
  methods: {
    ...mapActions(['login']),
    registerSubmit() {
      this.login({
        email: this.email, password: this.password,
      });
    },
  },
  computed: {
    isButtonDisabled() {
      return (!this.email || !this.password);
    },
  },
};
</script>

<style>

</style>
