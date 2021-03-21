import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import colors from 'vuetify/src/util/colors.ts';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: colors.teal.darken3, // #00695C
        secondary: colors.blueGrey.darken1, // #546e7a
        accent: colors.deepPurple.lighten1, // #7e57c2
      },
    },
  },
});
