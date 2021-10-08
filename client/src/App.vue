<template>
  <v-app><LogoBar />
    <v-main> <router-view :cars="cars"></router-view></v-main>
  </v-app>
</template>

<script>
import LogoBar from '@/components/LogoBar.vue';
// import CarCards from '@/components/CarCards.vue';

import axios from 'axios';

export default {
  name: 'Home',

  components: {
    LogoBar,
    // CarCards,
  },

  data() {
    return {
      cars: [],
    };
  },
  methods: {
    async getCars() {
      const a = await axios({
        method: 'GET',
        url: 'http://localhost:3000/cars',
      });
      this.cars = a.data;
    },
  },
  created() {
    this.getCars();
  },
};
</script>
