<template>
  <div id="app" class="background">
    <card-grid/>
  </div>
</template>

<script>
import CardGrid from '@/components/CardGrid.vue';

export default {
  name: 'app',
  components: {
    CardGrid,
  },
};
</script>
