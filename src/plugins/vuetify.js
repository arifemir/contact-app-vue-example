import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import colors from 'vuetify/src/util/colors.ts';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: colors.teal.darken3, // #00695C
        secondary: colors.deepOrange.darken2, // #E64A19
        accent: colors.deepPurple.darken2, // #512DA8
      },
    },
  },
});
