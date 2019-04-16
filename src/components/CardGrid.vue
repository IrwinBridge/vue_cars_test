<template>
  <div>
    <!-- Sorting buttons -->
    <car-card v-for="car in cars" :key="car.id" :car="car"></car-card>
  </div>
</template>

<script>
import CarCard from '@/components/CarCard.vue';

export default {
  components: {
    name: 'card-grid',
    CarCard,
  },
};
</script>
