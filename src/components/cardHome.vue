<template>
    <q-card class="my-card">
    <q-img :src="img" class="img-card">
      <div class="absolute-bottom">
        <div class="text-h6">{{ title }}</div>
      </div>
    </q-img>
    <q-card-actions>
      <button34 :label="label" :to="to" />
    </q-card-actions>
  </q-card>
</template>

<script setup>
import button34 from './button34.vue'
const props = defineProps({
    img: { type: String, required: true },
    title: { type: String, required: true },
    label: { type: String, required: true },
    to: { type: String, required: true }
})
</script>

<style scoped>
.q-card {
    padding: 20px;
    font-family: 'Super Impacto', Impact, sans-serif;
}
.q-card__actions {
    background-color: #000;
}
</style>