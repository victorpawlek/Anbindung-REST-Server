<template>
    <v-card class="mx-auto ma-5" max-width="400" >
      <v-img class="white--text align-end" height="200px" :src="car.image"> </v-img>
      <v-card-title>{{ car.title }}</v-card-title>

      <div class=" pa-3">
        <v-card-text>
          <p>
            Owner:
            <span class="font-weight-bold text--primary"
              >{{ car.owner.firstName }} {{ car.owner.lastName }}</span
            >
          </p>
          <p>
            Year: <span class="font-weight-bold text--primary">{{ car.yearOfMake }}</span
            ><br />Miles: <span class="font-weight-bold text--primary">{{ car.miles }}</span>
          </p>
          <p>
            Price: <span class="font-weight-bold text--primary">{{ car.price }}</span>
          </p>
          <p>
            {{ car.description }}
          </p>
        </v-card-text>
  
        <v-card-actions>
          <v-btn class="green white--text" :to = "`/details/${car.id}`">
            Details
          </v-btn>
        </v-card-actions>
      </div>
    </v-card>
</template>

<script>

export default {
  props: {
    car: {
      type: Object,
    },
  },
  methods: {
    
  },
};
</script>

<style lang="scss" scoped></style>
