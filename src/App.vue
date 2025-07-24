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
            Title
          </q-toolbar-title>
        </q-toolbar>
      </div>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" side="left" behavior="mobile" bordered style="background-color: rgba(114, 171, 233, 0.5); ">
      <div>
        <div class="drawer">
          <q-btn class="glossy" rounded color="deep-purple-4" label="home" to="/" />
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
.drawer {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 5px;
}
.footer{
  background-color: #3674B5;
}
.header {
  background-color: #3674B5;
}

.tm {
  height: 80px;
}
</style>