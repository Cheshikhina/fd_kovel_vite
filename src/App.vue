<template>
  <app-layout>
      <router-view />
  </app-layout>
</template>

<script>
import AppLayout from '@/layouts/AppLayout.vue';

export default {
  name: 'App',

  components: { AppLayout },
};
</script>

<style lang="scss">
@import './styles/index.scss';
</style>
