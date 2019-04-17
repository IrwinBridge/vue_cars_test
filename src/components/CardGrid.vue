<template>
  <div class="container mt-5">
    <div class="btn-group btn-group-toggle mb-3">
      <label class="mr-4">Сортировать</label>
      <div class="custom-control custom-radio mr-4" @click="sortByPrice">
        <input type="radio" class="custom-control-input" id="byPrice" name="sorting" checked>
        <label class="custom-control-label" for="byPrice">По цене</label>
      </div>
      <div class="custom-control custom-radio" @click="sortByDistance">
        <input type="radio" class="custom-control-input" id="byDistance" name="sorting">
        <label class="custom-control-label" for="byDistance">По удаленности</label>
      </div>
    </div>

    <div class="row">
      <div v-for="car in cars" :key="car.id"
        class="col-xs-12 col-md-6 col-lg-3 mb-3 px-2">
        <car-card :car="car"></car-card>
      </div>
    </div>
  </div>
</template>

<script>
import CarCard from '@/components/CarCard.vue';
import Cars from '@/cars';

export default {
  components: {
    name: 'card-grid',
    CarCard,
  },
  data() {
    return {
      cars: [],
    };
  },
  created() {
    this.fetchCars();
  },
  methods: {
    fetchCars() {
      this.cars = Cars;
      this.sortByPrice();
    },
    sortByPrice() {
      this.cars.sort((a, b) => a.price - b.price);
    },
    sortByDistance() {
      const withoutLocation = this.cars.filter(el => {
        return !el.dealer.hasOwnProperty('latitude') || el.dealer.latitude == 0;
      });
      this.cars = this.cars.filter(el => !withoutLocation.includes(el));
      this.cars.sort((a, b) => this.distance(this.location, a.dealer) - this.distance(this.location, b.dealer));
      this.cars.push(...withoutLocation);
    },
  },
};
</script>
