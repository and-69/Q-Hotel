<template>
  <q-layout view="hHh lpR fFf">

    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
          </q-avatar>
          Title
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" side="left" behavior="mobile" bordered>
      <div>
        <div class="drawer">
          <q-btn class="glossy" rounded color="deep-orange" label="home" to="/" />
          <q-btn class="glossy" rounded color="deep-orange" label="habitaciones" to="/habitaciones" />
          <q-btn class="glossy" rounded color="deep-orange" label="deportes" to="/deportes" />
          <q-btn class="glossy" rounded color="deep-orange" label="gastronomia" to="/gastronomia" />
          <q-btn class="glossy" rounded color="deep-orange" label="servicios" to="/servicios" />
        </div>
      </div>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer elevated class="bg-grey-8 text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
          </q-avatar>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>

  </q-layout>
</template>

<script setup>
import { ref } from 'vue'

const leftDrawerOpen = ref(false)

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value
}

</script>
<style scoped>
.drawer {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 5px;
}
</style>