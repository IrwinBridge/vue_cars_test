import Vue from 'vue';

Vue.mixin({
  data() {
    return {
      location: {
        latitude: 55.7536232,
        longitude: 37.6199775,
      }
    };
  },
  methods: {
    deg2rad(deg) {
      return deg * (Math.PI / 180);
    },
    distance(user, dealer) {
      const earthRadius = 6371;
      const dLat = this.deg2rad(dealer.latitude - user.latitude);
      const dLon = this.deg2rad(dealer.longitude - user.longitude);
      const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
              Math.cos(this.deg2rad(user.latitude)) * Math.cos(this.deg2rad(dealer.latitude)) *
              Math.sin(dLon / 2) * Math.sin(dLon / 2);
      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      if (!dealer.hasOwnProperty('latitude') || dealer.latitude == 0)
        return NaN;
      return Math.round(earthRadius * c);
    },
  },
});

export default Vue;