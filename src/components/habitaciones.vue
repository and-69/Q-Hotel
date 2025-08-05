<template>
    <div class="all">
        <div>
            <img src="/public/img/habitacion5.jpg" alt="" style="width: 100%;">
            <div class="encima">
                <h1 id="textollamativo">EL MEJOR ATARDECER LO TIENES DESDE TU HABITACION.</h1>
            </div>
        </div>
        <div class="centrar">
            <h1 class="textos">Despierta con el sonido de las olas y duérme bajo las estrellas.</h1>
        </div>

        <div class="infocenter">
            <div class="cardsinfo">
                <cards
                    v-for="hab in habitaciones"
                    :key="hab.title"
                    :img="hab.img"
                    :title="hab.title"
                    label="RESERVA AQUI!"
                    @button-click="modalReserv = true"
                />
                <modalReserva v-model="modalReserv" />
                
            </div>
        </div>

        
    </div>
</template>
<script setup>
import { ref } from 'vue'
import cards from './cards.vue'
import modalReserva from './modalReserva.vue'

const modalReserv = ref(false)

const habitaciones = [
  { title: 'Refugio de Coral', img: '/img/habitacion1.jpg' },
  { title: 'Suite Aurora', img: '/img/habitacion2.jpg' },
  { title: 'Selva Esmeralda', img: '/img/habitacion3.jpg' },
  { title: 'Terraza Maya', img: '/img/habitacion4.jpg' },
  { title: 'Cascada de Sedas', img: '/img/habitacion6.jpg' },
  { title: 'Nido de Colibrí', img: '/img/habt-hotel.jpg' }
]
</script>

<style scoped>
.textos {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 50px;
    color: #5e00b6;
    width: 700px;
}

.centrar {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-bottom: 30px;
    margin-top: 30px;
}

.all {
    background-color: #F5F0CD;
    font-family: 'Super Impacto', Impact, sans-serif;
}


.infocenter {
    display: flex;
    justify-content: center;
    align-items: center;

}

.cardsinfo {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    justify-content: center;
    align-items: center;
    width: 70%;
    margin-bottom: 5%;
}


.encima {
    width: 650px;
    position: absolute;
    top: 17%;
    left: 25%;
    transform: translate(-50%, -50%);
    color: #5e00b6;
    text-shadow: 2px 2px 4px rgba(255, 255, 255, 0.5);
}

#textollamativo:hover {
    filter: brightness(1.8);
    transition: 0.2s ease;
}
</style>