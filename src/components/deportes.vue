<template>
    <div class="all">
        <div>
            <img src="/public/img/portadadeportes.jpg" alt="" style="width: 100%;">
            <div class="encima">
                <h1 id="textollamativo">¿LISTO PARA LA ACCION? VIVE LA ADRENALINA DE DEPORTES PLAYEROS.</h1>
            </div>
        </div>
        <div class="centrar">
            <h1 class="textos">Aventuras a solo unos pasos de tu habitación.</h1>
        </div>

        <div class="infocenter">
            <div class="cardsinfo">
                <cards img="/public/img/jetski.jpg" title="JETKSY" label="Consultar informacion"
                    @button-click="modalListaJt = true" />
                <modalList v-model="modalListaJt" :menuSections="jetskiMenu" />

                <cards img="/public/img/badminton.jpg" title="BADMINTON" label="Consultar informacion"
                    @button-click="modalListaBd = true" />
                <modalList v-model="modalListaBd" :menuSections="badmintonMenu" />
                
                <cards img="/public/img/squash.jpg" title="SQUASH" label="Consultar informacion"
                    @button-click="modalListaSq = true" />
                <modalList v-model="modalListaSq" :menuSections="squashMenu" />

                <cards img="/public/img/paddleboard.jpg" title="PADDLEBOARD" label="Consultar informacion"
                    @button-click="modalListaPd = true" />
                <modalList v-model="modalListaPd" :menuSections="paddleboardMenu" />
                
                <cards img="/public/img/tennis.jpg" title="TENNIS" label="Consultar informacion"
                    @button-click="modalListaTn = true" />
                <modalList v-model="modalListaTn" :menuSections="tenisMenu" />

                <cards img="/public/img/pinpon.jpg" title="PIN PON" label="Consultar informacion"
                    @button-click="modalListaPp = true" />
                <modalList v-model="modalListaPp" :menuSections="pingPongMenu" />
                
            </div>
        </div>


    </div>
</template>
<script setup>
import { ref } from 'vue'
import cards from './cards.vue'
import modalList from './modalList.vue'

const modalListaJt = ref(false)
const modalListaBd = ref(false)
const modalListaSq = ref(false)
const modalListaPd = ref(false)
const modalListaTn = ref(false)
const modalListaPp = ref(false)

const jetskiMenu = [
    {
        title: "Jetski (Moto Acuática)",
        icon: "🌊",
        items: [
            {
                name: "Descripción",
                description: "Disfruta de la emoción y adrenalina del jetski en aguas abiertas. Nuestras motos acuáticas son fáciles de manejar, ideales para principiantes y expertos."
            },
            {
                name: "Horarios",
                description: "Lunes a Domingo: Mañana 9:00 AM - 12:30 PM | Tarde 2:00 PM - 5:30 PM"
            },
            {
                name: "Precios",
                description: "30 min: $50 USD | 1 hora: $90 USD | Pack grupal (2p/1h): $150 USD"
            },
            {
                name: "Requisitos",
                description: "Edad mínima 16 años, chaleco salvavidas obligatorio, sin alcohol"
            }
        ]
    }
];

const badmintonMenu = [
    {
        title: "Badminton",
        icon: "🏸",
        items: [
            {
                name: "Descripción",
                description: "Deporte rápido y dinámico que mejora coordinación y reflejos. Ideal para todas las edades."
            },
            {
                name: "Horarios",
                description: "L-V: 8AM-1PM y 4PM-9PM | S-D: 9AM-12PM y 3PM-7PM"
            },
            {
                name: "Precios",
                description: "Individual $15/h | Parejas $25/h | Clase $30/h | Familiar $50/2h"
            },
            {
                name: "Equipo incluido",
                description: "Raquetas profesionales, volantes y red disponibles"
            }
        ]
    }
];

const squashMenu = [
    {
        title: "Squash",
        icon: "🎾",
        items: [
            {
                name: "Descripción",
                description: "Deporte de alta intensidad que mejora condición física y reflejos. Perfecto para quemar calorías."
            },
            {
                name: "Horarios",
                description: "L-V: 7AM-10AM y 4PM-10PM | S-D: 8AM-8PM"
            },
            {
                name: "Precios",
                description: "Individual $20/40min | Doble $35/h | Clase $45/h | Pack 5 sesiones $85"
            },
            {
                name: "Requisitos",
                description: "Zapatos deportivos obligatorios. Raquetas y pelotas incluidas."
            }
        ]
    }
];

const paddleboardMenu = [
    {
        title: "Paddleboard (SUP)",
        icon: "🏄‍♂️",
        items: [
            {
                name: "Descripción",
                description: "Actividad relajante que combina ejercicio, equilibrio y conexión con la naturaleza."
            },
            {
                name: "Horarios",
                description: "Mañanas (calma): 7AM-10AM | Tardes (atardecer): 4PM-7PM"
            },
            {
                name: "Precios",
                description: "1h $25 | 2h $40 | Tour $55 | Clase $35"
            },
            {
                name: "Incluye",
                description: "Tabla, remo y chaleco. Traer ropa cómoda y protector solar."
            }
        ]
    }
];

const tenisMenu = [
    {
        title: "Tenis",
        icon: "🎾",
        items: [
            {
                name: "Descripción",
                description: "Canchas profesionales de superficie dura para todos los niveles."
            },
            {
                name: "Horarios",
                description: "L-V: 6AM-12PM y 3PM-10PM | S-D: 7AM-8PM"
            },
            {
                name: "Precios",
                description: "Cancha $30/h | Clase $50/h | Grupal $25/p | Mensual $200/8h"
            },
            {
                name: "Servicios",
                description: "Raquetas incluidas, vestuarios, iluminación nocturna"
            }
        ]
    }
];

const pingPongMenu = [
    {
        title: "Ping Pong",
        icon: "🏓",
        items: [
            {
                name: "Descripción",
                description: "Diversión rápida en mesas profesionales. Ideal para torneos o práctica."
            },
            {
                name: "Horarios",
                description: "L-V: 9AM-1PM y 4PM-10PM | S-D: 10AM-8PM"
            },
            {
                name: "Precios",
                description: "30min $10 | 1h $15 | Grupal $25 | Torneo $8/p"
            },
            {
                name: "Equipamiento",
                description: "Raquetas profesionales, pelotas de torneo, marcador electrónico"
            }
        ]
    }
];

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