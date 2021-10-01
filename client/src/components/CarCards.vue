<template>
  <v-app> <v-container class="d-flex flex-wrap justify-space-around" fluid><CarCard v-for="(c, i) of cars" :key="i" :car="c"/></v-container></v-app>
</template>

<script>
import CarCard from '@/components/CarCard.vue';

export default {
  name: 'CarCards',
  components: {
    CarCard,
  },
  props: {
    cars: {
      type: Array,
    },
  },
};
</script>

<style lang="scss" scoped></style>
