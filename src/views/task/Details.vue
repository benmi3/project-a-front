<script setup lang="ts">

import { defineProps } from "vue";

defineProps(["event"]);
</script>

<template>
  <p>{{ event.time }} on {{ event.date }} @ {{ event.location }}</p>
  <p>{{ event.description }}</p>
</template>


<style scoped>

</style>