<template>
  <v-form @submit="addContactSubmit">
    <v-container>
      <v-col class="ma-auto" cols="12" md="8" lg="6">
        <v-row>
          <v-text-field
            v-model="name"
            :label="$t('name')"
            required
          />
        </v-row>

        <v-row>
          <v-text-field
            v-model="surname"
            :label="$t('surname')"
            required
          />
        </v-row>

        <v-row>
          <v-text-field
            v-model="email"
            :label="$t('email')"
            required
            type="email"
          />
        </v-row>

        <v-row>
          <v-text-field
            v-model="phone"
            :label="$t('phone')"
            required
            type="tel"
          />
        </v-row>

        <v-row>
          <v-file-input
            prepend-icon="mdi-camera"
            accept="image/png, image/jpeg, image/bmp, image/jpg"
            :label="$t('photo')"
            @change="loadPhoto"
            @click:clear="photo = ''"
          />
        </v-row>

        <v-row>
          <v-btn type="submit" :disabled="isButtonDisabled" >
            {{$t('addContact')}}
          </v-btn>
        </v-row>
      </v-col>
    </v-container>
  </v-form>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'AddContactPage',
  data: () => ({
    name: '',
    surname: '',
    email: '',
    phone: '',
    photo: '',
  }),
  methods: {
    ...mapActions(['addContact']),
    addContactSubmit() {
      this.addContact({
        name: this.name,
        surname: this.surname,
        email: this.email,
        phone: this.phone,
        photo: this.photo,
      });
    },
    loadPhoto(file) {
      if (!file) return;
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (e) => {
        this.photo = e.target.result;
      };
    },
  },
  computed: {
    isButtonDisabled() {
      return (!this.name || !this.surname || !this.email || !this.phone);
    },
  },
};
</script>

<style scoped>

</style>
