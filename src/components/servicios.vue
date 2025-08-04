<template>
    <div class="all">
        <div>
            <img src="/public/img/serviciosbg.jpg" alt="" style="width: 100%;">
            <div class="encima">
                <h1 id="textollamativo">MAS QUE UN HOTEL, UNA EXPERIENCIA FRNTE AL MAR.</h1>
            </div>
        </div>
        <div class="centrar">
            <h1 class="textos">¿Listo para desconectar? Aqui te recibimos con los brazos abiertos.</h1>
        </div>

        <div class="infocenter">
            <div class="cardsinfo">
                <q-card class="my-card">
                    <q-img src="/public/img/spaservicio.jpg" class="img-card">
                        <div class="absolute-bottom">
                            <div class="text-h6">SPA</div>
                        </div>
                    </q-img>

                    <q-card-actions>
                        <q-btn class="button-34" flat @click="modal1 = true">Consultar informacion</q-btn>
                    </q-card-actions>
                </q-card>
                <q-card class="my-card">
                    <q-img src="/public/img/yoga.jpg" class="img-card">
                        <div class="absolute-bottom">
                            <div class="text-h6">YOGA</div>
                        </div>
                    </q-img>

                    <q-card-actions>
                        <q-btn class="button-34" flat @click="modal2 = true">Consultar informacion</q-btn>
                    </q-card-actions>
                </q-card>
                <q-card class="my-card">
                    <q-img src="/public/img/piscina.jpg" class="img-card">
                        <div class="absolute-bottom">
                            <div class="text-h6">PISCINA</div>
                        </div>
                    </q-img>

                    <q-card-actions>
                        <q-btn class="button-34" flat @click="modal3 = true">Consultar informacion</q-btn>
                    </q-card-actions>
                </q-card>
                <q-card class="my-card">
                    <q-img src="/public/img/salon.jpg" class="img-card">
                        <div class="absolute-bottom">
                            <div class="text-h6">SALON SOCIAL/ SALON DE EVENTOS</div>
                        </div>
                    </q-img>

                    <q-card-actions>
                        <q-btn class="button-34" flat @click="modal4 = true">Consultar informacion</q-btn>
                    </q-card-actions>
                </q-card>
                <q-card class="my-card">
                    <q-img src="/public/img/jacuzzi.jpg" class="img-card">
                        <div class="absolute-bottom">
                            <div class="text-h6">JACUZZI</div>
                        </div>
                    </q-img>

                    <q-card-actions>
                        <q-btn class="button-34" flat @click="modal5 = true">Consultar informacion</q-btn>
                    </q-card-actions>
                </q-card><q-card class="my-card">
                    <q-img src="/public/img/gym.jpg" class="img-card">
                        <div class="absolute-bottom">
                            <div class="text-h6">GIMNASIO</div>
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
                        <h3 style="color: #9b59b6; margin: 5px 0;">💆‍♀️ Spa "Serenidad"</h3>
                    </q-card-section>

                    <q-card-section class="q-pt-none">
                        <div style="font-family: Arial, sans-serif; max-width: 100%;">
                            <div style="margin-bottom: 15px;">

                                <p style="margin: 5px 0; text-align: justify;">
                                    Sumérgete en un oasis de relajación en nuestro spa premium. Con tratamientos
                                    personalizados
                                    usando productos orgánicos y técnicas ancestrales, te ofrecemos una experiencia de
                                    bienestar
                                    integral. Ambiente tranquilo con aromaterapia, música relajante y profesionales
                                    certificados.
                                </p>
                            </div>

                            <div style="margin-bottom: 15px;">
                                <h3 style="color: #9b59b6; margin: 5px 0;">⏰ Horario de Atención</h3>
                                <ul style="padding-left: 20px; margin: 5px 0;">
                                    <li><strong>Lunes a Viernes:</strong> 9:00 AM - 8:00 PM</li>
                                    <li><strong>Sábado y Domingo:</strong> 8:00 AM - 9:00 PM</li>
                                    <li><strong>Última reservación:</strong> 2 horas antes del cierre</li>
                                </ul>
                            </div>

                            <div style="margin-bottom: 15px;">
                                <h3 style="color: #9b59b6; margin: 5px 0;">✨ Tratamientos Estrella</h3>
                                <ul style="padding-left: 20px; margin: 5px 0;">
                                    <li><strong>Masaje Balinés (90 min):</strong> $120 USD</li>
                                    <li><strong>Ritual de Chocolate (2h):</strong> $150 USD</li>
                                    <li><strong>Terapia de Piedras Calientes:</strong> $95 USD</li>
                                    <li><strong>Facial Rejuvenecedor:</strong> $80 USD</li>
                                    <li><strong>Pack "Día Completo":</strong> $250 USD (incluye 3 tratamientos +
                                        almuerzo saludable)</li>
                                </ul>
                            </div>

                            <div style="margin-bottom: 15px;">
                                <h3 style="color: #9b59b6; margin: 5px 0;">🏛 Instalaciones</h3>
                                <ul style="padding-left: 20px; margin: 5px 0;">
                                    <li>4 salas de masaje privadas</li>
                                    <li>Sauna finlandés y baño de vapor</li>
                                    <li>Piscina de hidroterapia</li>
                                    <li>Sala de relajación con té de hierbas</li>
                                    <li>Área de pedicura/manicura orgánica</li>
                                </ul>
                            </div>

                            <div>
                                <h3 style="color: #9b59b6; margin: 5px 0;">📌 Recomendaciones</h3>
                                <ul style="padding-left: 20px; margin: 5px 0;">
                                    <li>Reservar con 24h de anticipación</li>
                                    <li>Llegar 15 minutos antes de su cita</li>
                                    <li>Traer traje de baño para tratamientos acuáticos</li>
                                    <li>Paquetes especiales para parejas disponibles</li>
                                    <li>Descuento del 15% para huéspedes del hotel</li>
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
                        <h3 style="color: #4CAF50; margin: 5px 0;">🧘‍♀️ Yoga & Bienestar</h3>
                    </q-card-section>

                    <q-card-section class="q-pt-none">
                        <div style="font-family: Arial, sans-serif; max-width: 100%;">
                            <div style="margin-bottom: 15px;">

                                <p style="margin: 5px 0; text-align: justify;">
                                    Conecta cuerpo y mente en nuestras sesiones de yoga con instructores certificados.
                                    Clases para todos los niveles en un espacio diseñado para la armonía, con vista al
                                    mar
                                    y equipamiento profesional. Disfruta de diferentes estilos desde Hatha hasta Vinyasa
                                    Flow.
                                </p>
                            </div>

                            <div style="margin-bottom: 15px;">
                                <h3 style="color: #4CAF50; margin: 5px 0;">⏰ Horario de Clases</h3>
                                <ul style="padding-left: 20px; margin: 5px 0;">
                                    <li><strong>Lunes a Viernes:</strong></li>
                                    <ul style="padding-left: 20px; margin: 5px 0;">
                                        <li><strong>Mañana:</strong> 7:00 AM - 8:00 AM (Hatha Yoga)</li>
                                        <li><strong>Tarde:</strong> 6:00 PM - 7:00 PM (Vinyasa Flow)</li>
                                    </ul>
                                    <li><strong>Fin de Semana:</strong></li>
                                    <ul style="padding-left: 20px; margin: 5px 0;">
                                        <li><strong>Sábado:</strong> 8:00 AM - 9:30 AM (Yoga Restaurativo)</li>
                                        <li><strong>Domingo:</strong> 9:00 AM - 10:30 AM (Yoga en la Playa)</li>
                                    </ul>
                                </ul>
                            </div>

                            <div style="margin-bottom: 15px;">
                                <h3 style="color: #4CAF50; margin: 5px 0;">💰 Tarifas</h3>
                                <ul style="padding-left: 20px; margin: 5px 0;">
                                    <li><strong>Clase individual:</strong> $20 USD</li>
                                    <li><strong>Pack 5 clases:</strong> $85 USD (15% descuento)</li>
                                    <li><strong>Clase privada (1h):</strong> $50 USD</li>
                                    <li><strong>Yoga en pareja:</strong> $30 USD por sesión</li>
                                    <li><strong>Gratis para huéspedes:</strong> 1 clase de iniciación</li>
                                </ul>
                            </div>

                            <div style="margin-bottom: 15px;">
                                <h3 style="color: #4CAF50; margin: 5px 0;">🛍️ Incluye</h3>
                                <ul style="padding-left: 20px; margin: 5px 0;">
                                    <li>Mat de yoga profesional (o trae el tuyo)</li>
                                    <li>Toalla aromatizada</li>
                                    <li>Té herbal post-clase</li>
                                    <li>Acceso a vestuarios con duchas</li>
                                    <li>Lockers seguros para pertenencias</li>
                                </ul>
                            </div>

                            <div>
                                <h3 style="color: #4CAF50; margin: 5px 0;">📌 Recomendaciones</h3>
                                <ul style="padding-left: 20px; margin: 5px 0;">
                                    <li>Usar ropa cómoda y ajustada</li>
                                    <li>Evitar comer 1 hora antes de clase</li>
                                    <li>Llegar 10 minutos antes</li>
                                    <li>Informar al instructor sobre lesiones</li>
                                    <li>Clases limitadas a 15 personas (reserva con anticipación)</li>
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
                        <h3 style="color: #3498db; margin: 5px 0;">🏊‍♂️ Piscina</h3>
                    </q-card-section>

                    <q-card-section class="q-pt-none">
                        <div style="font-family: Arial, sans-serif; max-width: 100%;">
                            <div style="margin-bottom: 15px;">

                                <p style="margin: 5px 0; text-align: justify;">
                                    Disfruta de nuestra espectacular piscina con vista al mar, perfecta para relajarse y
                                    refrescarse.
                                    Contamos con área de hidromasaje, tumbonas premium y servicio de bar. Ambiente
                                    familiar con zona
                                    infantil separada. ¡Todo lo necesario para un día perfecto bajo el sol!
                                </p>
                            </div>

                            <div style="margin-bottom: 15px;">
                                <h3 style="color: #3498db; margin: 5px 0;">⏰ Horario</h3>
                                <ul style="padding-left: 20px; margin: 5px 0;">
                                    <li><strong>Lunes a Domingo:</strong></li>
                                    <ul style="padding-left: 20px; margin: 5px 0;">
                                        <li><strong>Mañana:</strong> 7:00 AM - 12:00 PM</li>
                                        <li><strong>Tarde:</strong> 2:00 PM - 8:00 PM</li>
                                    </ul>
                                    <li><strong>Horario especial adultos:</strong> 6:00 PM - 8:00 PM</li>
                                </ul>
                            </div>

                            <div style="margin-bottom: 15px;">
                                <h3 style="color: #3498db; margin: 5px 0;">💧 Normas de Uso</h3>
                                <ul style="padding-left: 20px; margin: 5px 0;">
                                    <li>Uso obligatorio de gorro de baño (disponible en recepción)</li>
                                    <li>Prohibido correr en los bordillos</li>
                                    <li>Los niños menores de 12 años deben estar supervisados</li>
                                    <li>No se permite comida en el área de la piscina</li>
                                    <li>Ducharse antes de ingresar</li>
                                </ul>
                            </div>

                            <div style="margin-bottom: 15px;">
                                <h3 style="color: #3498db; margin: 5px 0;">🍹 Servicios Adicionales</h3>
                                <ul style="padding-left: 20px; margin: 5px 0;">
                                    <li><strong>Alquiler de toallas:</strong> $5 USD</li>
                                    <li><strong>Kit premium:</strong> Toalla, bata y pantuflas ($15 USD)</li>
                                    <li><strong>Servicio de bar:</strong> Bebidas y snacks sin alcohol</li>
                                    <li><strong>Clases de aquagym:</strong> 9:00 AM y 5:00 PM (gratis para huéspedes)
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h3 style="color: #3498db; margin: 5px 0;">🏆 Características</h3>
                                <ul style="padding-left: 20px; margin: 5px 0;">
                                    <li>Temperatura controlada (28°C)</li>
                                    <li>Sistema de filtrado salino (sin cloro agresivo)</li>
                                    <li>Profundidad: 1.20m a 2.40m</li>
                                    <li>Zona de hidromasaje con capacidad para 8 personas</li>
                                    <li>Área infantil con profundidad de 0.60m</li>
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
                        <h3 style="color: #8e44ad; margin: 5px 0;">🎪 Salón de Eventos "Gala"</h3>
                    </q-card-section>

                    <q-card-section class="q-pt-none">
                        <div style="font-family: Arial, sans-serif; max-width: 100%;">
                            <div style="margin-bottom: 15px;">

                                <p style="margin: 5px 0; text-align: justify;">
                                    Nuestro exclusivo salón para eventos es el espacio perfecto para bodas,
                                    conferencias, fiestas y reuniones empresariales.
                                    Con capacidad para hasta 200 personas, tecnología de última generación y servicio
                                    personalizado,
                                    garantizamos eventos memorables con el sello de calidad de nuestro hotel.
                                </p>
                            </div>

                            <div style="margin-bottom: 15px;">
                                <h3 style="color: #8e44ad; margin: 5px 0;">🏛 Características del Espacio</h3>
                                <ul style="padding-left: 20px; margin: 5px 0;">
                                    <li><strong>Capacidad:</strong> 200 personas (configuración banquetes) / 300 (estilo
                                        teatro)</li>
                                    <li><strong>Área total:</strong> 350 m² con divisores modulares</li>
                                    <li><strong>Tecnología:</strong> Sistema de sonido profesional, pantallas LED y
                                        videoconferencia</li>
                                    <li><strong>Iluminación:</strong> Sistema inteligente con escenarios preconfigurados
                                    </li>
                                    <li><strong>Vista:</strong> Panorámica al jardín tropical y fuentes</li>
                                </ul>
                            </div>

                            <div style="margin-bottom: 15px;">
                                <h3 style="color: #8e44ad; margin: 5px 0;">⏰ Horarios de Alquiler</h3>
                                <ul style="padding-left: 20px; margin: 5px 0;">
                                    <li><strong>Paquete Matutino:</strong> 8:00 AM - 2:00 PM</li>
                                    <li><strong>Paquete Vespertino:</strong> 3:00 PM - 9:00 PM</li>
                                    <li><strong>Jornada Completa:</strong> 8:00 AM - 12:00 AM</li>
                                    <li><strong>Eventos Nocturnos:</strong> 8:00 PM - 2:00 AM (costo adicional)</li>
                                </ul>
                            </div>

                            <div style="margin-bottom: 15px;">
                                <h3 style="color: #8e44ad; margin: 5px 0;">💰 Paquetes Incluidos</h3>
                                <ul style="padding-left: 20px; margin: 5px 0;">
                                    <li><strong>Básico:</strong> $1,200 USD (4 horas, mobiliario básico y sonido)</li>
                                    <li><strong>Premium:</strong> $2,500 USD (8 horas, decoración floral y catering para
                                        50 personas)</li>
                                    <li><strong>Empresarial:</strong> $1,800 USD (6 horas, videoconferencia y coffee
                                        break)</li>
                                    <li><strong>Boda:</strong> $3,500 USD (12 horas, coordinador de evento y suite
                                        nupcial)</li>
                                </ul>
                            </div>

                            <div style="margin-bottom: 15px;">
                                <h3 style="color: #8e44ad; margin: 5px 0;">🍽 Servicios Adicionales</h3>
                                <ul style="padding-left: 20px; margin: 5px 0;">
                                    <li>Catering gourmet (desde $25 USD por persona)</li>
                                    <li>Decoración temática profesional</li>
                                    <li>Servicio de fotografía/video</li>
                                    <li>Animación y DJ</li>
                                    <li>Transporte especial para invitados</li>
                                </ul>
                            </div>

                            <div>
                                <h3 style="color: #8e44ad; margin: 5px 0;">📌 Políticas</h3>
                                <ul style="padding-left: 20px; margin: 5px 0;">
                                    <li>Reserva mínima con 30 días de anticipación</li>
                                    <li>50% de depósito no reembolsable</li>
                                    <li>Capacidad según normativas de seguridad</li>
                                    <li>Lista de proveedores aprobados disponible</li>
                                    <li>Descuento del 10% para eventos de lunes a jueves</li>
                                </ul>
                            </div>
                        </div>
                    </q-card-section>
                </q-card>
            </q-dialog>

            <q-dialog v-model="modal5">
                <q-card style="width: 700px; max-width: 80vw;">
                    <q-card-section>
                        <h3 style="color: #3498db; margin: 5px 0;">♨️ Jacuzzi Premium</h3>
                    </q-card-section>

                    <q-card-section class="q-pt-none">
                        <div style="font-family: Arial, sans-serif; max-width: 100%;">
                            <div style="margin-bottom: 15px;">

                                <p style="margin: 5px 0; text-align: justify;">
                                    Relájese en nuestro lujoso jacuzzi con sistema de hidromasaje, iluminación LED y
                                    vistas panorámicas.
                                    Agua termal mantenida a 38°C con sistema de purificación avanzado.
                                    Perfecto para parejas o grupos pequeños, disponible tanto en áreas privadas como en
                                    la zona spa.
                                </p>
                            </div>

                            <div style="margin-bottom: 15px;">
                                <h3 style="color: #3498db; margin: 5px 0;">⏰ Horario de Uso</h3>
                                <ul style="padding-left: 20px; margin: 5px 0;">
                                    <li><strong>Lunes a Domingo:</strong> 8:00 AM - 10:00 PM</li>
                                    <li><strong>Sesiones privadas:</strong> 6:00 PM - 10:00 PM (reserva requerida)</li>
                                    <li><strong>Duración:</strong> Sesiones de 45 minutos (renovable según
                                        disponibilidad)</li>
                                </ul>
                            </div>

                            <div style="margin-bottom: 15px;">
                                <h3 style="color: #3498db; margin: 5px 0;">💲 Tarifas</h3>
                                <ul style="padding-left: 20px; margin: 5px 0;">
                                    <li><strong>Uso estándar:</strong> $25 USD por persona (acceso a área compartida)
                                    </li>
                                    <li><strong>Sesión privada (hasta 4 personas):</strong> $80 USD/45 min</li>
                                    <li><strong>Pack romántico:</strong> $120 USD (flores, champán y chocolate
                                        incluidos)</li>
                                    <li><strong>Terapia acuática:</strong> $60 USD (con fisioterapeuta certificado)</li>
                                </ul>
                            </div>

                            <div style="margin-bottom: 15px;">
                                <h3 style="color: #3498db; margin: 5px 0;">🌿 Beneficios</h3>
                                <ul style="padding-left: 20px; margin: 5px 0;">
                                    <li>Alivio para dolores musculares y estrés</li>
                                    <li>Mejora la circulación sanguínea</li>
                                    <li>Sistema de hidroterapia con 32 jets</li>
                                    <li>Aromaterapia opcional (lavanda o eucalipto)</li>
                                    <li>Toallas y albornoz de algodón egipcio incluidos</li>
                                </ul>
                            </div>

                            <div style="margin-bottom: 15px;">
                                <h3 style="color: #3498db; margin: 5px 0;">🚨 Normas de Seguridad</h3>
                                <ul style="padding-left: 20px; margin: 5px 0;">
                                    <li>Máximo 6 personas en jacuzzi compartido</li>
                                    <li>No apto para menores de 12 años</li>
                                    <li>Ducharse antes de ingresar</li>
                                    <li>Prohibido el uso bajo efectos del alcohol</li>
                                    <li>Tiempo máximo continuo: 20 minutos</li>
                                </ul>
                            </div>

                            <div>
                                <h3 style="color: #3498db; margin: 5px 0;">🌟 Experiencias Premium</h3>
                                <ul style="padding-left: 20px; margin: 5px 0;">
                                    <li><strong>Noche estrellada:</strong> Uso nocturno con decoración luminosa</li>
                                    <li><strong>Terapia de contrastes:</strong> Alternancia jacuzzi/baño de hielo</li>
                                    <li><strong>Masaje en el agua:</strong> Combinación con shiatsu acuático</li>
                                    <li><strong>Descuentos:</strong> 15% para huéspedes en paquetes spa</li>
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
                        <h3 style="color: #e74c3c; margin: 5px 0;">💪 Gimnasio "Energía Vital"</h3>
                    </q-card-section>

                    <q-card-section class="q-pt-none">
                        <div style="font-family: Arial, sans-serif; max-width: 100%;">
                            <div style="margin-bottom: 15px;">

                                <p style="margin: 5px 0; text-align: justify;">
                                    Nuestro gimnasio premium cuenta con equipos de última generación y espacios
                                    diseñados para entrenamiento funcional.
                                    Con vista al mar y ambiente climatizado, ofrecemos todo lo necesario para mantener
                                    tu rutina de ejercicios
                                    mientras disfrutas de tu estadía. ¡Incluye acceso a entrenador virtual y clases
                                    grupales!
                                </p>
                            </div>

                            <div style="margin-bottom: 15px;">
                                <h3 style="color: #e74c3c; margin: 5px 0;">⏰ Horario</h3>
                                <ul style="padding-left: 20px; margin: 5px 0;">
                                    <li><strong>Lunes a Viernes:</strong> 5:30 AM - 10:00 PM</li>
                                    <li><strong>Sábado y Domingo:</strong> 7:00 AM - 9:00 PM</li>
                                    <li><strong>Horario pico:</strong> 6:00 AM - 8:00 AM | 5:00 PM - 7:00 PM</li>
                                </ul>
                            </div>

                            <div style="margin-bottom: 15px;">
                                <h3 style="color: #e74c3c; margin: 5px 0;">🏋️ Equipamiento</h3>
                                <div style="display: flex; flex-wrap: wrap;">
                                    <div style="flex: 50%;">
                                        <ul style="padding-left: 20px; margin: 5px 0;">
                                            <li>Cintas de correr TechnoGym</li>
                                            <li>Elípticas con pantallas táctiles</li>
                                            <li>Pesas libres hasta 50kg</li>
                                            <li>Máquinas de resistencia</li>
                                        </ul>
                                    </div>
                                    <div style="flex: 50%;">
                                        <ul style="padding-left: 20px; margin: 5px 0;">
                                            <li>Estación de Functional Training</li>
                                            <li>Bicicletas spinning</li>
                                            <li>Área de stretching</li>
                                            <li>Box de CrossFit</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div style="margin-bottom: 15px;">
                                <h3 style="color: #e74c3c; margin: 5px 0;">🚿 Servicios</h3>
                                <ul style="padding-left: 20px; margin: 5px 0;">
                                    <li><strong>Toallas y botellas de agua:</strong> Incluidas</li>
                                    <li><strong>Vestuarios:</strong> Con duchas y lockers</li>
                                    <li><strong>Evaluación física:</strong> Gratis para huéspedes (+3 noches)</li>
                                    <li><strong>Tienda de suplementos:</strong> Proteínas y bebidas energéticas</li>
                                </ul>
                            </div>

                            <div style="margin-bottom: 15px;">
                                <h3 style="color: #e74c3c; margin: 5px 0;">🧑‍🏫 Clases Grupales</h3>
                                <ul style="padding-left: 20px; margin: 5px 0;">
                                    <li><strong>Spinning:</strong> Lunes, Miércoles, Viernes 7:00 AM</li>
                                    <li><strong>HIIT:</strong> Martes y Jueves 6:30 PM</li>
                                    <li><strong>Yoga Fitness:</strong> Diario 8:00 AM</li>
                                    <li><strong>Boxeo:</strong> Sábados 9:00 AM</li>
                                </ul>
                            </div>

                            <div>
                                <h3 style="color: #e74c3c; margin: 5px 0;">📌 Normas</h3>
                                <ul style="padding-left: 20px; margin: 5px 0;">
                                    <li>Uso obligatorio de calzado deportivo</li>
                                    <li>Llevar toalla para usar los equipos</li>
                                    <li>Prohibido ingresar con alimentos</li>
                                    <li>Menores de 16 años acompañados</li>
                                    <li>Desinfección obligatoria post-uso</li>
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