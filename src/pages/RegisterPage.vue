<template>
  <v-form @submit.prevent="registerSubmit">
    <v-container>
      <v-col class="ma-auto" cols="12" md="8" lg="6">
        <v-row>
          <v-text-field
            v-model="name"
            :label="$t('name')"
            required
          ></v-text-field>
        </v-row>

        <v-row>
          <v-text-field
            v-model="surname"
            :label="$t('surname')"
            required
          ></v-text-field>
        </v-row>

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
          <v-text-field
            v-model="repassword"
            :label="$t('repassword')"
            required
            type="password"
          ></v-text-field>
        </v-row>

        <v-row>
          <v-btn type="submit" :disabled="isButtonDisabled" >
            {{$t('register')}}
          </v-btn>
        </v-row>
      </v-col>
    </v-container>
  </v-form>
</template>

<script>

import { mapActions } from 'vuex';

export default {
  name: 'RegisterPage',
  data: () => ({
    name: '',
    surname: '',
    email: '',
    password: '',
    repassword: '',
  }),
  methods: {
    ...mapActions(['register']),
    registerSubmit() {
      this.register({
        name: this.name, surname: this.surname, email: this.email, password: this.password,
      });
    },
  },
  computed: {
    isButtonDisabled() {
      return (!this.name || !this.surname || !this.email || !this.password || !this.repassword)
        || (this.password !== this.repassword);
    },
  },
};
</script>

<style>

</style>
