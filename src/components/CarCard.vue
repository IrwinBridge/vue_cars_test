<template>
  <div class="card card-borders p-0">
    <img :src="car.images[0]" :alt="car.model_name" class="card-img-top">
    <div class="card-body p-0 px-3">
      <a href="#" class="card-link">
        <h5 class="card-title mb-1">{{ car.model_name }}</h5>
      </a>
      <h5 class="card-title">{{ price }}</h5>
      <div class="card-text text-secondary features">
        <p class="mb-1">Особенности:</p>
        <ul class="pl-0">
          <li v-for="feature in car.features.slice(0, 3)" :key="feature">
            <span>{{ feature }}</span>
          </li>
          <a v-if="car.features.length > 3" href="#" class="card-link">{{ features_link }}</a>
        </ul>
      </div>
    </div>
    <hr class="m-0">
    <div class="d-flex align-items-center p-2 pr-4">
      <div class="mr-2">
        <icon-pin class="pin" :fillColor="'#6c757d'"></icon-pin>
      </div>
      <a :href="car.dealer.url" class="card-link text-truncate pl-0 location">
        {{ car_link }}
      </a>
    </div>
  </div>
</template>

<script>
import IconPin from '@/components/IconPin.vue';

export default {
  components: {
    name: 'car-card',
    IconPin,
  },
  props: {
    car: Object,
  },
  computed: {
    car_link() {
      let dist = this.distance(this.location, this.car.dealer);
      dist = !isNaN(dist) ? `${dist} км` : undefined;
      let strings = [this.car.dealer.name, this.car.dealer.city, this.car.dealer.address, dist];
      return strings.filter(el => el !== undefined).map(el => el.trim()).join(', ');
    },
    price() {
      const priceStr = this.car.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
      return `${priceStr}₽`;
    },
    features_link() {
      const length = this.car.features.length;
      const ending = (length < 5) ? 'и' : 'ей';
      return `еще ${length} особенност${length > 1 ? ending : 'ь'}`;
    },
  },
}
</script>

<style scoped>
  .card-borders {
    border-color: #ffffff !important;
    border-radius: 5% !important;
  }

  ul {
    list-style-type: none;
    min-height: 6.5em !important;
  }

  li:before {
    content: "\25CF";
    margin-right: 0.5em;
  }

  .pin {
    height: 1.5em;
    width: 1.5em;
  }

  .features {
    font-size: 12.5px !important;
  }

  .location {
    font-size: 14px !important;
  }
</style>
