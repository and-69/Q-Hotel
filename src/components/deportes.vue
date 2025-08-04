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
                <q-card class="my-card">
                    <q-img src="/public/img/jetski.jpg" class="img-card">
                        <div class="absolute-bottom">
                            <div class="text-h6">JETKSY</div>
                        </div>
                    </q-img>

                    <q-card-actions>
                        <q-btn class="button-34" flat @click="modal1 = true">Consultar informacion</q-btn>
                    </q-card-actions>
                </q-card>
                <q-card class="my-card">
                    <q-img src="/public/img/badminton.jpg" class="img-card">
                        <div class="absolute-bottom">
                            <div class="text-h6">BADMINTON</div>
                        </div>
                    </q-img>

                    <q-card-actions>
                        <q-btn class="button-34" flat @click="modal2 = true">Consultar informacion</q-btn>
                    </q-card-actions>
                </q-card>
                <q-card class="my-card">
                    <q-img src="/public/img/squash.jpg" class="img-card">
                        <div class="absolute-bottom">
                            <div class="text-h6">SQUASH</div>
                        </div>
                    </q-img>

                    <q-card-actions>
                        <q-btn class="button-34" flat @click="modal3 = true">Consultar informacion</q-btn>
                    </q-card-actions>
                </q-card>
                <q-card class="my-card">
                    <q-img src="/public/img/paddleboard.jpg" class="img-card">
                        <div class="absolute-bottom">
                            <div class="text-h6">PADDLEBOARD</div>
                        </div>
                    </q-img>

                    <q-card-actions>
                        <q-btn class="button-34" flat @click="modal4 = true">Consultar informacion</q-btn>
                    </q-card-actions>
                </q-card>
                <q-card class="my-card">
                    <q-img src="/public/img/tennis.jpg" class="img-card">
                        <div class="absolute-bottom">
                            <div class="text-h6">TENNIS</div>
                        </div>
                    </q-img>

                    <q-card-actions>
                        <q-btn class="button-34" flat @click="modal5 = true">Consultar informacion</q-btn>
                    </q-card-actions>
                </q-card><q-card class="my-card">
                    <q-img src="/public/img/pinpon.jpg" class="img-card">
                        <div class="absolute-bottom">
                            <div class="text-h6">PINPON</div>
                        </div>
                    </q-img>

                    <q-card-actions>
                        <q-btn class="button-34" flat @click="modal6 = true">Consultar informacion</q-btn>
                    </q-card-actions>
                </q-card>
            </div>
        </div>

        <div>
            <q-dialog v-model="modal1">
                <q-card style="width: 700px; max-width: 80vw;">
                    <q-card-section>
                        <h3 style="color: #3498db; margin: 5px 0;">🚤 Jetski (Moto Acuática)</h3>
                    </q-card-section>

                    <q-card-section class="q-pt-none">
                        <div style="font-family: Arial, sans-serif; max-width: 100%;">
                            <div style="margin-bottom: 15px;">

                                <p style="margin: 5px 0; text-align: justify;">
                                    Disfruta de la emoción y adrenalina del jetski en aguas abiertas.
                                    Nuestras motos acuáticas son fáciles de manejar, ideales para principiantes
                                    y expertos. Incluye breve inducción de seguridad y chaleco salvavidas.
                                </p>
                            </div>

                            <div style="margin-bottom: 15px;">
                                <h3 style="color: #3498db; margin: 5px 0;">⏰ Horarios Disponibles</h3>
                                <ul style="padding-left: 20px; margin: 5px 0;">
                                    <li><strong>Lunes a Domingo:</strong></li>
                                    <ul style="padding-left: 20px; margin: 5px 0;">
                                        <li><strong>Mañana:</strong> 9:00 AM – 10:30 AM | 11:00 AM – 12:30 PM</li>
                                        <li><strong>Tarde:</strong> 2:00 PM – 3:30 PM | 4:00 PM – 5:30 PM</li>
                                    </ul>
                                </ul>
                            </div>

                            <div style="margin-bottom: 15px;">
                                <h3 style="color: #3498db; margin: 5px 0;">💰 Precios</h3>
                                <ul style="padding-left: 20px; margin: 5px 0;">
                                    <li><strong>30 minutos:</strong> $50 USD por persona</li>
                                    <li><strong>1 hora:</strong> $90 USD por persona</li>
                                    <li><strong>Pack grupal (2 personas, 1 hora):</strong> $150 USD</li>
                                </ul>
                            </div>

                            <div>
                                <h3 style="color: #3498db; margin: 5px 0;">📌 Requisitos</h3>
                                <ul style="padding-left: 20px; margin: 5px 0;">
                                    <li>Edad mínima: 16 años (menores con autorización)</li>
                                    <li>Uso obligatorio de chaleco salvavidas</li>
                                    <li>No se permite el consumo de alcohol antes de la actividad</li>
                                </ul>
                            </div>
                        </div>
                    </q-card-section>

                    <q-card-actions align="right" class="bg-white text-teal">
                        <q-btn flat label="OK" v-close-popup />
                    </q-card-actions>
                </q-card>
            </q-dialog>

            <q-dialog v-model="modal2">
                <q-card style="width: 700px; max-width: 80vw;">
                    <q-card-section>
                        <h3 style="color: #e74c3c; margin: 5px 0;">🏸 Badminton</h3>
                    </q-card-section>

                    <q-card-section class="q-pt-none">
                        <div style="font-family: Arial, sans-serif; max-width: 100%;">
                            <div style="margin-bottom: 15px;">

                                <p style="margin: 5px 0; text-align: justify;">
                                    Diviértete con este deporte rápido y dinámico, perfecto para jugar en parejas o
                                    individual.
                                    El badminton mejora la coordinación, resistencia y reflejos. Incluye raquetas
                                    profesionales,
                                    volantes (plumillas) y red. ¡Ideal para todas las edades!
                                </p>
                            </div>

                            <div style="margin-bottom: 15px;">
                                <h3 style="color: #e74c3c; margin: 5px 0;">⏰ Horarios Disponibles</h3>
                                <ul style="padding-left: 20px; margin: 5px 0;">
                                    <li><strong>Lunes a Viernes:</strong></li>
                                    <ul style="padding-left: 20px; margin: 5px 0;">
                                        <li><strong>Mañana:</strong> 8:00 AM – 10:00 AM | 11:00 AM – 1:00 PM</li>
                                        <li><strong>Tarde:</strong> 4:00 PM – 6:00 PM | 7:00 PM – 9:00 PM</li>
                                    </ul>
                                    <li><strong>Sábado y Domingo:</strong></li>
                                    <ul style="padding-left: 20px; margin: 5px 0;">
                                        <li><strong>Mañana:</strong> 9:00 AM – 12:00 PM</li>
                                        <li><strong>Tarde:</strong> 3:00 PM – 7:00 PM</li>
                                    </ul>
                                </ul>
                            </div>

                            <div style="margin-bottom: 15px;">
                                <h3 style="color: #e74c3c; margin: 5px 0;">💰 Precios</h3>
                                <ul style="padding-left: 20px; margin: 5px 0;">
                                    <li><strong>1 hora (individual):</strong> $15 USD</li>
                                    <li><strong>1 hora (parejas):</strong> $25 USD</li>
                                    <li><strong>Clase con instructor (1 hora):</strong> $30 USD</li>
                                    <li><strong>Pack familiar (2 adultos + 2 niños, 2 horas):</strong> $50 USD</li>
                                </ul>
                            </div>

                            <div>
                                <h3 style="color: #e74c3c; margin: 5px 0;">📌 Requisitos y Notas</h3>
                                <ul style="padding-left: 20px; margin: 5px 0;">
                                    <li>Se recomienda ropa deportiva y calzado cómodo.</li>
                                    <li>Edad mínima para jugar sin supervisión: 12 años.</li>
                                    <li>Reserva previa requerida (máximo 4 personas por cancha).</li>
                                    <li>¡Las raquetas y volantes están incluidos!</li>
                                </ul>
                            </div>
                        </div>
                    </q-card-section>

                    <q-card-actions align="right" class="bg-white text-teal">
                        <q-btn flat label="OK" v-close-popup />
                    </q-card-actions>
                </q-card>
            </q-dialog>

            <q-dialog v-model="modal3">
                <q-card style="width: 700px; max-width: 80vw;">
                    <q-card-section>
                        <h3 style="color: #9b59b6; margin: 5px 0;">🎾 Squash</h3>
                    </q-card-section>

                    <q-card-section class="q-pt-none">
                        <div style="font-family: Arial, sans-serif; max-width: 100%;">
                            <div style="margin-bottom: 15px;">

                                <p style="margin: 5px 0; text-align: justify;">
                                    Disfruta del squash, un deporte de alta intensidad que mejora tu condición física,
                                    reflejos y coordinación. Se juega en una cancha cerrada con raquetas especiales
                                    y pelotas de alta velocidad. ¡Perfecto para liberar estrés y quemar calorías!
                                </p>
                            </div>

                            <div style="margin-bottom: 15px;">
                                <h3 style="color: #9b59b6; margin: 5px 0;">⏰ Horarios Disponibles</h3>
                                <ul style="padding-left: 20px; margin: 5px 0;">
                                    <li><strong>Lunes a Viernes:</strong></li>
                                    <ul style="padding-left: 20px; margin: 5px 0;">
                                        <li><strong>Mañana:</strong> 7:00 AM – 10:00 AM</li>
                                        <li><strong>Tarde:</strong> 4:00 PM – 10:00 PM</li>
                                    </ul>
                                    <li><strong>Sábado y Domingo:</strong></li>
                                    <ul style="padding-left: 20px; margin: 5px 0;">
                                        <li><strong>Jornada continua:</strong> 8:00 AM – 8:00 PM</li>
                                    </ul>
                                </ul>
                            </div>

                            <div style="margin-bottom: 15px;">
                                <h3 style="color: #9b59b6; margin: 5px 0;">💰 Tarifas</h3>
                                <ul style="padding-left: 20px; margin: 5px 0;">
                                    <li><strong>Sesión individual (40 min):</strong> $20 USD</li>
                                    <li><strong>Sesión doble (2 personas, 1 hora):</strong> $35 USD</li>
                                    <li><strong>Clase con entrenador (1 hora):</strong> $45 USD</li>
                                    <li><strong>Pack 5 sesiones (individual):</strong> $85 USD (15% de descuento)</li>
                                </ul>
                            </div>

                            <div>
                                <h3 style="color: #9b59b6; margin: 5px 0;">📌 Normativas y Equipamiento</h3>
                                <ul style="padding-left: 20px; margin: 5px 0;">
                                    <li>Uso obligatorio de zapatos deportivos de suela no marcante.</li>
                                    <li>Se proporcionan raquetas y pelotas (o puedes traer las tuyas).</li>
                                    <li>Recomendado para mayores de 14 años (niños con supervisión).</li>
                                    <li>Reservas con 24 horas de anticipación.</li>
                                </ul>
                            </div>
                        </div>
                    </q-card-section>

                    <q-card-actions align="right" class="bg-white text-teal">
                        <q-btn flat label="OK" v-close-popup />
                    </q-card-actions>
                </q-card>
            </q-dialog>

            <q-dialog v-model="modal4">
                <q-card style="width: 700px; max-width: 80vw;">
                    <q-card-section>
                        <h3 style="color: #1abc9c; margin: 5px 0;">🏄‍♂️ Paddleboard (SUP)</h3>
                    </q-card-section>

                    <q-card-section class="q-pt-none">
                        <div style="font-family: Arial, sans-serif; max-width: 100%;">
                            <div style="margin-bottom: 15px;">

                                <p style="margin: 5px 0; text-align: justify;">
                                    Navega con estilo sobre las aguas con nuestro paddleboard (Stand Up Paddle).
                                    Una actividad relajante que combina ejercicio, equilibrio y conexión con la
                                    naturaleza.
                                    Ideal para disfrutar del atardecer o explorar la costa. ¡Perfecto para todas las
                                    edades!
                                </p>
                            </div>

                            <div style="margin-bottom: 15px;">
                                <h3 style="color: #1abc9c; margin: 5px 0;">⏰ Horarios Disponibles</h3>
                                <ul style="padding-left: 20px; margin: 5px 0;">
                                    <li><strong>Lunes a Domingo:</strong></li>
                                    <ul style="padding-left: 20px; margin: 5px 0;">
                                        <li><strong>Mañana (calma):</strong> 7:00 AM – 10:00 AM</li>
                                        <li><strong>Tarde (vistas al atardecer):</strong> 4:00 PM – 7:00 PM</li>
                                    </ul>
                                    <li><strong>Tour guiado (sábados):</strong> 8:00 AM – 10:00 AM</li>
                                </ul>
                            </div>

                            <div style="margin-bottom: 15px;">
                                <h3 style="color: #1abc9c; margin: 5px 0;">💰 Tarifas</h3>
                                <ul style="padding-left: 20px; margin: 5px 0;">
                                    <li><strong>1 hora (alquiler básico):</strong> $25 USD</li>
                                    <li><strong>2 horas (experiencia premium):</strong> $40 USD</li>
                                    <li><strong>Tour grupal (2h + guía):</strong> $55 USD/persona</li>
                                    <li><strong>Clase introductoria (30 min + equipo):</strong> $35 USD</li>
                                </ul>
                            </div>

                            <div>
                                <h3 style="color: #1abc9c; margin: 5px 0;">📌 Recomendaciones y Equipo</h3>
                                <ul style="padding-left: 20px; margin: 5px 0;">
                                    <li>Incluye tabla, remo y chaleco salvavidas.</li>
                                    <li>Traer ropa cómoda, protector solar y gorra.</li>
                                    <li>Nivel principiante: Aguas tranquilas (bahía protegida).</li>
                                    <li>Fotos profesionales disponibles (+$15 USD).</li>
                                </ul>
                            </div>
                        </div>
                    </q-card-section>

                    <q-card-actions align="right" class="bg-white text-teal">
                        <q-btn flat label="OK" v-close-popup />
                    </q-card-actions>
                </q-card>
            </q-dialog>

            <q-dialog v-model="modal5">
                <q-card style="width: 700px; max-width: 80vw;">
                    <q-card-section>
                        <h3 style="color: #27ae60; margin: 5px 0;">🎾 Tenis</h3>
                    </q-card-section>

                    <q-card-section class="q-pt-none">
                        <div style="font-family: Arial, sans-serif; max-width: 100%;">
                            <div style="margin-bottom: 15px;">

                                <p style="margin: 5px 0; text-align: justify;">
                                    Disfruta de nuestro exclusivo club de tenis con canchas profesionales de superficie
                                    dura.
                                    Perfecto para partidos individuales o dobles, con equipamiento de primera calidad.
                                    Ofrecemos clases para todos los niveles, desde principiantes hasta avanzados.
                                </p>
                            </div>

                            <div style="margin-bottom: 15px;">
                                <h3 style="color: #27ae60; margin: 5px 0;">⏰ Horarios de Cancha</h3>
                                <ul style="padding-left: 20px; margin: 5px 0;">
                                    <li><strong>Lunes a Viernes:</strong></li>
                                    <ul style="padding-left: 20px; margin: 5px 0;">
                                        <li><strong>Mañana:</strong> 6:00 AM - 12:00 PM</li>
                                        <li><strong>Tarde:</strong> 3:00 PM - 10:00 PM</li>
                                    </ul>
                                    <li><strong>Fin de Semana:</strong></li>
                                    <ul style="padding-left: 20px; margin: 5px 0;">
                                        <li><strong>Sábado:</strong> 7:00 AM - 8:00 PM</li>
                                        <li><strong>Domingo:</strong> 8:00 AM - 6:00 PM</li>
                                    </ul>
                                </ul>
                            </div>

                            <div style="margin-bottom: 15px;">
                                <h3 style="color: #27ae60; margin: 5px 0;">💲 Tarifas</h3>
                                <ul style="padding-left: 20px; margin: 5px 0;">
                                    <li><strong>Alquiler de cancha (1 hora):</strong> $30 USD</li>
                                    <li><strong>Clase individual (1 hora):</strong> $50 USD</li>
                                    <li><strong>Clase grupal (máx. 4 personas):</strong> $25 USD/persona</li>
                                    <li><strong>Pack mensual (8 horas):</strong> $200 USD (20% descuento)</li>
                                </ul>
                            </div>

                            <div>
                                <h3 style="color: #27ae60; margin: 5px 0;">📌 Servicios Incluidos</h3>
                                <ul style="padding-left: 20px; margin: 5px 0;">
                                    <li>Raquetas profesionales disponibles (sin costo adicional)</li>
                                    <li>Pelotas de tenis incluidas en el alquiler</li>
                                    <li>Área de descanso con bebidas frías</li>
                                    <li>Vestuarios con duchas disponibles</li>
                                    <li>Iluminación nocturna para partidos vespertinos</li>
                                </ul>
                            </div>
                        </div>
                    </q-card-section>

                    <q-card-actions align="right" class="bg-white text-teal">
                        <q-btn flat label="OK" v-close-popup />
                    </q-card-actions>
                </q-card>
            </q-dialog>

            <q-dialog v-model="modal6">
                <q-card style="width: 700px; max-width: 80vw;">
                    <q-card-section>
                        <h3 style="color: #e74c3c; margin: 5px 0;">🏓 Ping Pong</h3>
                    </q-card-section>

                    <q-card-section class="q-pt-none">
                        <div style="font-family: Arial, sans-serif; max-width: 100%;">
                            <div style="margin-bottom: 15px;">

                                <p style="margin: 5px 0; text-align: justify;">
                                    ¡Diversión rápida y emocionante en nuestras mesas profesionales de ping pong!
                                    Perfecto para jugar en parejas o individual. Disponemos de equipos de alta calidad
                                    en un espacio climatizado. Ideal para torneos casuales o práctica seria.
                                </p>
                            </div>

                            <div style="margin-bottom: 15px;">
                                <h3 style="color: #e74c3c; margin: 5px 0;">⏰ Horarios Disponibles</h3>
                                <ul style="padding-left: 20px; margin: 5px 0;">
                                    <li><strong>Lunes a Viernes:</strong></li>
                                    <ul style="padding-left: 20px; margin: 5px 0;">
                                        <li><strong>Mañana:</strong> 9:00 AM - 1:00 PM</li>
                                        <li><strong>Tarde/Noche:</strong> 4:00 PM - 10:00 PM</li>
                                    </ul>
                                    <li><strong>Sábado y Domingo:</strong></li>
                                    <ul style="padding-left: 20px; margin: 5px 0;">
                                        <li><strong>Jornada continua:</strong> 10:00 AM - 8:00 PM</li>
                                    </ul>
                                </ul>
                            </div>

                            <div style="margin-bottom: 15px;">
                                <h3 style="color: #e74c3c; margin: 5px 0;">💰 Tarifas</h3>
                                <ul style="padding-left: 20px; margin: 5px 0;">
                                    <li><strong>30 minutos:</strong> $10 USD</li>
                                    <li><strong>1 hora:</strong> $15 USD</li>
                                    <li><strong>Hora grupal (máx. 4 personas):</strong> $25 USD</li>
                                    <li><strong>Torneo semanal (inscripción):</strong> $8 USD/persona</li>
                                </ul>
                            </div>

                            <div>
                                <h3 style="color: #e74c3c; margin: 5px 0;">🎯 Servicios Incluidos</h3>
                                <ul style="padding-left: 20px; margin: 5px 0;">
                                    <li>Raquetas profesionales (Donic, Butterfly)</li>
                                    <li>Pelotas de 3 estrellas (calidad torneo)</li>
                                    <li>Marcador electrónico automático</li>
                                    <li>Área lounge con bebidas</li>
                                    <li>Clases rápidas de iniciación (gratis los miércoles)</li>
                                </ul>
                            </div>
                        </div>
                    </q-card-section>

                    <q-card-actions align="right" class="bg-white text-teal">
                        <q-btn flat label="OK" v-close-popup />
                    </q-card-actions>
                </q-card>
            </q-dialog>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue'

const modal1 = ref(false)
const modal2 = ref(false)
const modal3 = ref(false)
const modal4 = ref(false)
const modal5 = ref(false)
const modal6 = ref(false)
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