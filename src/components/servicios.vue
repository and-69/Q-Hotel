<template>
    <div class="all">
        <div>
            <img src="/img/serviciosbg.jpg" alt="" style="width: 100%;">
            <div class="encima">
                <h1 id="textollamativo">MAS QUE UN HOTEL, UNA EXPERIENCIA FRNTE AL MAR.</h1>
            </div>
        </div>
        <div class="centrar">
            <h1 class="textos">¿Listo para desconectar? Aqui te recibimos con los brazos abiertos.</h1>
        </div>

        <div class="infocenter">
            <div class="cardsinfo">
                <cards img="/img/spaservicio.jpg" title="SPA" label="Consultar informacion"
                    @button-click="modalListaSp = true" />
                <modalList v-model="modalListaSp" :menuSections="menuSpa" />

                <cards img="/img/yoga.jpg" title="YOGA" label="Consultar informacion"
                    @button-click="modalListaYg = true" />
                <modalList v-model="modalListaYg" :menuSections="menuYoga" />

                <cards img="/img/piscina.jpg" title="PISCINA" label="Consultar informacion"
                    @button-click="modalListaPs = true" />
                <modalList v-model="modalListaPs" :menuSections="menuPiscina" />

                <cards img="/img/salon.jpg" title="SALON SOCIAL / SALON DE EVENTOS" label="Consultar informacion"
                    @button-click="modalListaSe = true" />
                <modalList v-model="modalListaSe" :menuSections="menuEventos" />

                <cards img="/img/jacuzzi.jpg" title="JACUZZI" label="Consultar informacion"
                    @button-click="modalListaJz = true" />
                <modalList v-model="modalListaJz" :menuSections="menuJacuzzi" />

                <cards img="/img/gym.jpg" title="GIMNASIO" label="Consultar informacion"
                    @button-click="modalListaGm = true" />
                <modalList v-model="modalListaGm" :menuSections="menuGimnasio" />
            </div>
        </div> 
    </div>
</template>

<script setup>
import { ref } from 'vue'
import cards from './cards.vue'
import modalList from './modalList.vue'


const modalListaSp = ref(false)
const modalListaYg = ref(false)
const modalListaPs = ref(false)
const modalListaSe = ref(false)
const modalListaJz = ref(false)
const modalListaGm = ref(false)

const menuSpa = [
    {
        title: "Spa 'Serenidad'",
        icon: "💆‍♀️",
        items: [
            {
                name: "Descripción",
                description: "Sumérgete en un oasis de relajación en nuestro spa premium. Con tratamientos personalizados usando productos orgánicos y técnicas ancestrales, te ofrecemos una experiencia de bienestar integral."
            },
            {
                name: "Horario de Atención",
                description: "Lunes a Viernes: 9:00 AM - 8:00 PM | Sábado y Domingo: 8:00 AM - 9:00 PM | Última reservación: 2 horas antes del cierre"
            },
            {
                name: "Tratamientos Estrella",
                description: "Masaje Balinés (90 min): $120 USD | Ritual de Chocolate (2h): $150 USD | Terapia de Piedras Calientes: $95 USD | Facial Rejuvenecedor: $80 USD | Pack 'Día Completo': $250 USD"
            },
            {
                name: "Instalaciones",
                description: "4 salas de masaje privadas | Sauna finlandés y baño de vapor | Piscina de hidroterapia | Sala de relajación con té de hierbas | Área de pedicura/manicura orgánica"
            },
            {
                name: "Recomendaciones",
                description: "Reservar con 24h de anticipación | Llegar 15 minutos antes | Traer traje de baño | Paquetes para parejas | Descuento del 15% para huéspedes"
            }
        ]
    }
];

const menuYoga = [
    {
        title: "Yoga & Bienestar",
        icon: "🧘‍♀️",
        items: [
            {
                name: "Descripción",
                description: "Conecta cuerpo y mente en nuestras sesiones de yoga con instructores certificados. Clases para todos los niveles en un espacio diseñado para la armonía, con vista al mar."
            },
            {
                name: "Horario de Clases",
                description: "Lunes a Viernes: Mañana 7:00 AM - 8:00 AM (Hatha) | Tarde 6:00 PM - 7:00 PM (Vinyasa) | Sábado: 8:00 AM - 9:30 AM (Restaurativo) | Domingo: 9:00 AM - 10:30 AM (Playa)"
            },
            {
                name: "Tarifas",
                description: "Clase individual: $20 USD | Pack 5 clases: $85 USD | Clase privada: $50 USD | Yoga en pareja: $30 USD | 1 clase gratis para huéspedes"
            },
            {
                name: "Incluye",
                description: "Mat de yoga profesional | Toalla aromatizada | Té herbal post-clase | Acceso a vestuarios | Lockers seguros"
            },
            {
                name: "Recomendaciones",
                description: "Ropa cómoda | No comer 1 hora antes | Llegar 10 minutos antes | Informar lesiones | Máximo 15 personas por clase"
            }
        ]
    }
];

const menuPiscina = [
    {
        title: "Piscina",
        icon: "🏊‍♂️",
        items: [
            {
                name: "Descripción",
                description: "Espectacular piscina con vista al mar, perfecta para relajarse y refrescarse. Con área de hidromasaje, tumbonas premium y servicio de bar."
            },
            {
                name: "Horario",
                description: "Lunes a Domingo: Mañana 7:00 AM - 12:00 PM | Tarde 2:00 PM - 8:00 PM | Horario especial adultos: 6:00 PM - 8:00 PM"
            },
            {
                name: "Normas de Uso",
                description: "Gorro de baño obligatorio | No correr | Menores de 12 supervisados | No comida en el área | Ducharse antes de ingresar"
            },
            {
                name: "Servicios Adicionales",
                description: "Alquiler de toallas: $5 USD | Kit premium: $15 USD | Servicio de bar | Clases de aquagym gratis"
            },
            {
                name: "Características",
                description: "Temperatura controlada (28°C) | Sistema de filtrado salino | Profundidad 1.20m-2.40m | Zona de hidromasaje | Área infantil (0.60m)"
            }
        ]
    }
];

const menuEventos = [
    {
        title: "Salón de Eventos 'Gala'",
        icon: "🎭",
        items: [
            {
                name: "Descripción",
                description: "Espacio perfecto para bodas, conferencias y reuniones empresariales. Capacidad para 200 personas, tecnología de última generación y servicio personalizado."
            },
            {
                name: "Características",
                description: "Capacidad: 200-300 personas | Área: 350 m² | Tecnología profesional | Iluminación inteligente | Vista al jardín tropical"
            },
            {
                name: "Horarios de Alquiler",
                description: "Matutino: 8AM-2PM | Vespertino: 3PM-9PM | Jornada Completa: 8AM-12AM | Nocturnos: 8PM-2AM (adicional)"
            },
            {
                name: "Paquetes Incluidos",
                description: "Básico: $1,200 USD | Premium: $2,500 USD | Empresarial: $1,800 USD | Boda: $3,500 USD"
            },
            {
                name: "Servicios Adicionales",
                description: "Catering desde $25/p | Decoración temática | Fotografía/video | Animación/DJ | Transporte especial"
            },
            {
                name: "Políticas",
                description: "Reserva con 30 días | 50% depósito no reembolsable | Capacidad según normativas | Proveedores aprobados | 10% descuento lun-jue"
            }
        ]
    }
];

const menuJacuzzi = [
    {
        title: "Jacuzzi Premium",
        icon: "♨️",
        items: [
            {
                name: "Descripción",
                description: "Lujoso jacuzzi con sistema de hidromasaje, iluminación LED y vistas panorámicas. Agua termal a 38°C, perfecto para parejas o grupos pequeños."
            },
            {
                name: "Horario de Uso",
                description: "Lunes a Domingo: 8:00 AM - 10:00 PM | Sesiones privadas: 6:00 PM - 10:00 PM | Duración: 45 minutos"
            },
            {
                name: "Tarifas",
                description: "Uso estándar: $25/p | Sesión privada: $80 USD | Pack romántico: $120 USD | Terapia acuática: $60 USD"
            },
            {
                name: "Beneficios",
                description: "Alivio muscular | Mejora circulación | 32 jets | Aromaterapia opcional | Toallas y albornoz incluidos"
            },
            {
                name: "Normas de Seguridad",
                description: "Máximo 6 personas | No menores de 12 | Ducharse antes | No usar con alcohol | Máximo 20 minutos continuos"
            },
            {
                name: "Experiencias Premium",
                description: "Noche estrellada | Terapia de contrastes | Masaje en el agua | 15% descuento en paquetes spa"
            }
        ]
    }
];

const menuGimnasio = [
    {
        title: "Gimnasio 'Energía Vital'",
        icon: "💪",
        items: [
            {
                name: "Descripción",
                description: "Gimnasio premium con equipos de última generación y espacios para entrenamiento funcional. Vista al mar y ambiente climatizado."
            },
            {
                name: "Horario",
                description: "Lunes a Viernes: 5:30 AM - 10:00 PM | Sábado y Domingo: 7:00 AM - 9:00 PM | Horario pico: 6-8 AM y 5-7 PM"
            },
            {
                name: "Equipamiento",
                description: "Cintas TechnoGym | Elípticas | Pesas hasta 50kg | Máquinas de resistencia | Functional Training | Spinning | Área stretching | Box CrossFit"
            },
            {
                name: "Servicios",
                description: "Toallas y agua incluídas | Vestuarios con duchas | Evaluación física gratis | Tienda de suplementos"
            },
            {
                name: "Clases Grupales",
                description: "Spinning: Lunes, Miércoles, Viernes 7AM | HIIT: Martes y Jueves 6:30PM | Yoga Fitness: Diario 8AM | Boxeo: Sábados 9AM"
            },
            {
                name: "Normas",
                description: "Calzado obligatorio | Usar toalla en equipos | No alimentos | Menores de 16 acompañados | Desinfección post-uso"
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

.q-dialog {
    padding: 20px;
    font-family: 'Super Impacto', Impact, sans-serif;
}

.all {
    background-color: #F5F0CD;
    font-family: 'Super Impacto', Impact, sans-serif;
}

.q-card {
    padding: 20px;
    font-family: 'Super Impacto', Impact, sans-serif;
}

h3 {
    font-family: 'Super Impacto', Impact, sans-serif;
    font-size: 40px
}

li {
    font-family: 'Super Impacto', Impact, sans-serif;
    font-size: 20px
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

.img-card {
    width: 100%;
    height: 300px;
    object-fit: cover;
}

.q-card__actions {
    background-color: #000;
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

.button-34 {
    background-color: #ffe066 !important;
    border-radius: 100px;
    box-shadow:
        #ffd23f 0 -25px 18px -14px inset,
        #ffb627 0 1px 2px;
    color: #450086 !important;
    cursor: pointer;
    display: inline-block;
    font-family: CerebriSans-Regular, -apple-system, system-ui, Roboto, sans-serif;
    padding: 7px 20px;
    text-align: center;
    text-decoration: none;
    transition: all 250ms;
    border: 0;
    font-size: 16px;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    width: 50%;
}

.button-34:hover {
    box-shadow:
        #ffd23f 0 -25px 18px -14px inset,
        #ffb627 0 1px 2px,
        #ffb627 0 2px 4px;
    background-color: #a677ff !important;
    /* Más brillante al pasar el mouse */
    color: #450086;
    transform: scale(1.05) rotate(-1deg);
}

#textollamativo:hover {
    filter: brightness(1.8);
    transition: 0.2s ease;
}
</style>
