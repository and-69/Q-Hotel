<template>
  <q-btn class="button-33" :label="label" :to="to" />
</template>

<script setup>

const props = defineProps({
  label: {
    type: String,
    required: true
  },
  to: {
    type: String,
    required: true
  }
})

</script>

<style scoped>
.button-33 {
  background-color: #3674B5;
  border: none;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  font-family: 'Super Impacto', Impact, sans-serif;
  font-size: 16px;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  transition: background-color 0.3s;
}

.button-33:hover {
  background-color: #285a8c;
}
</style>