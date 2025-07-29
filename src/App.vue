<template>
  <q-layout view="hHh lpR fFf">

    <q-header elevated class="bg-primary text-white">
      <div class="header">
        <q-toolbar class="tm">
          <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

          <q-toolbar-title>
            <q-avatar>
              <img src="/public/img/tortuga (2).png">
            </q-avatar>
            TURTLE ISLAND HOTEL
          </q-toolbar-title>
        </q-toolbar>
      </div>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" side="left" behavior="mobile" bordered style="background-color: #ffefaa ">
      <div>
        <div class="drawer">
          <div class="bonyur1">
          <q-btn class="button-33" label="home" to="/" />
          </div>
          <div class="bonyur">
            <q-btn class="button-33" label="habitaciones" to="/habitaciones" />
            <q-btn class="button-33" label="deportes" to="/deportes" />
            <q-btn class="button-33" label="gastronomia" to="/gastronomia" />
            <q-btn class="button-33" label="servicios" to="/servicios" />
          </div>
        </div>
      </div>
    </q-drawer>

    <q-page-container>

      <router-view />
    </q-page-container>

    <q-footer elevated class="bg-grey-8 text-white">
      <div class="footer">
        <q-toolbar>
          <q-toolbar-title>
          </q-toolbar-title>
          <div class="q-ml-auto">
            <q-avatar>
              <img src="/public/img/tortuga (2).png">
            </q-avatar>
          </div>
        </q-toolbar>
      </div>
    </q-footer>

  </q-layout>
  <!-- https://colorhunt.co/palette/3674b5578fcaf5f0cdfada7a -->
</template>

<script setup>
import { ref } from 'vue'

const leftDrawerOpen = ref(false)

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value
}

</script>
<style scoped>
@font-face {
  font-family: 'Super Impacto';
  src: url('/fonts/SuperImpacto.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}
.bonyur, .bonyur1 {
  display: flex;
  flex-direction: column; 
  gap: 30px;
  margin-top: 20px;
}


.drawer {
  display: flex;
  flex-direction: column;
  gap: 200px;
  padding: 15px;
}

.footer, .header {
  background-color: #ffe59d;
  font-family: 'Super Impacto', Impact, sans-serif;
  color: #450086 !important;
}



.tm {
  height: 80px;
  font-family: 'Super Impacto', Impact, sans-serif;
}

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