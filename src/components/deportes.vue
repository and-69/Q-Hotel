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
                        <q-btn class="button-34" flat @click="modal1 = true">Visitar Sitio</q-btn>
                    </q-card-actions>
                </q-card>
                <q-card class="my-card">
                    <q-img src="/public/img/badminton.jpg" class="img-card">
                        <div class="absolute-bottom">
                            <div class="text-h6">COMIDA ITALIANA</div>
                        </div>
                    </q-img>

                    <q-card-actions>
                        <q-btn class="button-34" flat @click="modal2 = true">Visitar Sitio</q-btn>
                    </q-card-actions>
                </q-card>
                <q-card class="my-card">
                    <q-img src="/public/img/squash.jpg" class="img-card">
                        <div class="absolute-bottom">
                            <div class="text-h6">COMIDA ASIATICA</div>
                        </div>
                    </q-img>

                    <q-card-actions>
                        <q-btn class="button-34" flat @click="modal3 = true">Visitar Sitio</q-btn>
                    </q-card-actions>
                </q-card>
                <q-card class="my-card">
                    <q-img src="/public/img/paddleboard.jpg" class="img-card">
                        <div class="absolute-bottom">
                            <div class="text-h6">BARES Y BEBIDAS</div>
                        </div>
                    </q-img>

                    <q-card-actions>
                        <q-btn class="button-34" flat @click="modal4 = true">Visitar Sitio</q-btn>
                    </q-card-actions>
                </q-card>
                <q-card class="my-card">
                    <q-img src="/public/img/tennis.jpg" class="img-card">
                        <div class="absolute-bottom">
                            <div class="text-h6">COMIDA VEGETARIANA Y VEGANA</div>
                        </div>
                    </q-img>

                    <q-card-actions>
                        <q-btn class="button-34" flat @click="modal5 = true">Visitar Sitio</q-btn>
                    </q-card-actions>
                </q-card><q-card class="my-card">
                    <q-img src="/public/img/pinpon.jpg" class="img-card">
                        <div class="absolute-bottom">
                            <div class="text-h6">COMIDA TRADICIONAL</div>
                        </div>
                    </q-img>

                    <q-card-actions>
                        <q-btn class="button-34" flat @click="modal6 = true">Visitar Sitio</q-btn>
                    </q-card-actions>
                </q-card>
            </div>
        </div>

        <div>
            <q-dialog v-model="modal1">
                <q-card style="width: 700px; max-width: 80vw;">
                    <q-card-section>
                        <div class="text-h6">MENU COMIDAS RAPIDAS</div>
                    </q-card-section>

                    <q-card-section class="q-pt-none">
                        <div style="font-family: Arial, sans-serif; max-width: 100%;">
                            <div style="margin-bottom: 15px;">
                                <h3 style="color: #e67e22; margin: 5px 0;">🥪 Bocados & Snacks</h3>
                                <ul style="padding-left: 20px; margin: 5px 0;">
                                    <li><strong>Ceviche express</strong> - Trozos de pescado fresco marinado en limón,
                                        con ají, cebolla y tostadas</li>
                                    <li><strong>Tacos de camarón</strong> - Tortillas suaves con camarones salteados,
                                        pico de gallo y guacamole</li>
                                    <li><strong>Ensalada César con pollo grillé</strong> - Crujiente lechuga romana,
                                        croutons, parmesano y aderezo cremoso</li>
                                    <li><strong>Pinchos de fruta tropical</strong> - Piña, mango, sandía y kiwi
                                        (opcional con chilito y limón)</li>
                                </ul>
                            </div>

                            <div style="margin-bottom: 15px;">
                                <h3 style="color: #e67e22; margin: 5px 0;">🍔 Hamburguesas & Sándwiches</h3>
                                <ul style="padding-left: 20px; margin: 5px 0;">
                                    <li><strong>Burger "Paraíso"</strong> - Carne 100% res, queso cheddar, aguacate y
                                        salsa chipotle</li>
                                    <li><strong>Sándwich club</strong> - Pan tostado con pollo, tocino, lechuga, tomate
                                        y mayonesa</li>
                                    <li><strong>Wrap vegano</strong> - Hummus, espinaca, aguacate, zanahoria y
                                        germinados</li>
                                </ul>
                            </div>

                            <div style="margin-bottom: 15px;">
                                <h3 style="color: #e67e22; margin: 5px 0;">🌮 Especialidades Playeras</h3>
                                <ul style="padding-left: 20px; margin: 5px 0;">
                                    <li><strong>Fish & Chips</strong> - Filete de pescado empanizado con papas fritas
                                        crujientes</li>
                                    <li><strong>Tostadas de aguachile</strong> - Camarones en salsa picante de pepino y
                                        limón</li>
                                    <li><strong>Quesadillas de mariscos</strong> - Tortilla de harina rellena de queso y
                                        mix de mariscos</li>
                                </ul>
                            </div>

                            <div>
                                <h3 style="color: #e67e22; margin: 5px 0;">🥤 Bebidas Refrescantes</h3>
                                <ul style="padding-left: 20px; margin: 5px 0;">
                                    <li><strong>Limonada de coco</strong> - Fresca y cremosa</li>
                                    <li><strong>Jugo verde detox</strong> - Pepino, piña, espinaca y jengibre</li>
                                    <li><strong>Michelada clásica</strong> - Cerveza, limón, salsa inglesa y chile en
                                        polvo</li>
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
                        <div class="text-h6">MENU COMIDA ITALIANA</div>
                    </q-card-section>

                    <q-card-section class="q-pt-none">
                        <div style="font-family: Arial, sans-serif; max-width: 100%;">
                            <div style="margin-bottom: 15px;">
                                <h3 style="color: #e67e22; margin: 5px 0;">🍝 Antipasti & Primi</h3>
                                <ul style="padding-left: 20px; margin: 5px 0;">
                                    <li><strong>Bruschetta al Pomodoro</strong> - Pan tostado con tomate fresco,
                                        albahaca y ajo</li>
                                    <li><strong>Carpaccio di Manzo</strong> - Finas láminas de res con rúcula,
                                        parmesano y aderezo de limón</li>
                                    <li><strong>Spaghetti Aglio e Olio</strong> - Espaguetis con ajo, aceite de oliva
                                        y guindilla</li>
                                </ul>
                            </div>

                            <div style="margin-bottom: 15px;">
                                <h3 style="color: #e67e22; margin: 5px 0;">🍕 Pizze</h3>
                                <ul style="padding-left: 20px; margin: 5px 0;">
                                    <li><strong>Margherita</strong> - Salsa de tomate, mozzarella fresca y albahaca</li>
                                    <li><strong>Diavola</strong> - Salsa de tomate, mozzarella, salami picante y
                                        orégano</li>
                                    <li><strong>Caprichosa</strong> - Salsa de tomate, mozzarella, jamón, champiñones
                                        y alcachofas</li>
                                </ul>
                            </div>

                            <div style="margin-bottom: 15px;">
                                <h3 style="color: #e67e22; margin: 5px 0;">🍷 Vini</h3>
                                <ul style="padding-left: 20px; margin: 5px 0;">
                                    <li><strong>Chianti</strong> - Vino tinto de la Toscana, seco y afrutado</li>
                                    <li><strong>Prosecco</strong> - Vino espumoso italiano, fresco y floral</li>
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
                        <div class="text-h6">MENU COMIDA ASIATICA</div>
                    </q-card-section>

                    <q-card-section class="q-pt-none">
                        <div style="font-family: Arial, sans-serif; max-width: 100%;">
                            <div style="margin-bottom: 15px;">
                                <h3 style="color: #e67e22; margin: 5px 0;">🍣 Sushi & Sashimi</h3>
                                <ul style="padding-left: 20px; margin: 5px 0;">
                                    <li><strong>Sushi variado</strong> - Selección de nigiri, maki y sashimi</li>
                                    <li><strong>Rollos especiales</strong> - Con ingredientes frescos y salsas
                                        exóticas</li>
                                </ul>
                            </div>

                            <div style="margin-bottom: 15px;">
                                <h3 style="color: #e67e22; margin: 5px 0;">🍜 Platos Calientes</h3>
                                <ul style="padding-left: 20px; margin: 5px 0;">
                                    <li><strong>Ramen</strong> - Fideos en caldo con carne, huevo y verduras</li>
                                    <li><strong>Pad Thai</strong> - Fideos de arroz salteados con camarones,
                                        pollo y cacahuate</li>
                                </ul>
                            </div>

                            <div style="margin-bottom: 15px;">
                                <h3 style="color: #e67e22; margin: 5px 0;">🥢 Acompañamientos</h3>
                                <ul style="padding-left: 20px; margin: 5px 0;">
                                    <li><strong>Edamame</strong> - Habas de soja al vapor con sal</li>
                                    <li><strong>Rollitos primavera</strong> - Con salsa agridulce</li>
                                </ul>
                            </div>

                            <div>
                                <h3 style="color: #e67e22; margin: 5px 0;">🥤 Bebidas Asiáticas</h3>
                                <ul style="padding-left: 20px; margin: 5px 0;">
                                    <li><strong>Té verde</strong> - Refrescante y antioxidante</li>
                                    <li><strong>Ramune</strong> - Refresco japonés con sabor a frutas</li>
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
                        <div class="text-h6">MENU BARES</div>
                    </q-card-section>

                    <q-card-section class="q-pt-none">
                        <div style="font-family: Arial, sans-serif; max-width: 100%;">
                            <div style="margin-bottom: 15px;">
                                <h3 style="color: #e67e22; margin: 5px 0;">🍹 Cocteles</h3>
                                <ul style="padding-left: 20px; margin: 5px 0;">
                                    <li><strong>Mojito</strong> - Ron, menta, azúcar, limón y soda</li>
                                    <li><strong>Piña Colada</strong> - Ron, crema de coco y piña</li>
                                    <li><strong>Caipirinha</strong> - Cachaça, azúcar y lima</li>
                                </ul>
                            </div>

                            <div style="margin-bottom: 15px;">
                                <h3 style="color: #e67e22; margin: 5px 0;">🍺 Cervezas</h3>
                                <ul style="padding-left: 20px; margin: 5px 0;">
                                    <li><strong>Rubia</strong> - Ligera y refrescante</li>
                                    <li><strong>Roja</strong> - Con cuerpo y sabor intenso</li>
                                    <li><strong>Negra</strong> - Suave y cremosa</li>
                                </ul>
                            </div>

                            <div style="margin-bottom: 15px;">
                                <h3 style="color: #e67e22; margin: 5px 0;">🥃 Licores</h3>
                                <ul style="padding-left: 20px; margin: 5px 0;">
                                    <li><strong>Whisky</strong> - Escocés, suave y ahumado</li>
                                    <li><strong>Vodka</strong> - Neutro y puro</li>
                                    <li><strong>Ron</strong> - Dulce y aromático</li>
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
                        <div class="text-h6">MENU COMIDA VEGETARIANA & VEGANA</div>
                    </q-card-section>

                    <q-card-section class="q-pt-none">
                        <div style="font-family: 'Arial', sans-serif; max-width: 100%; color: #333;">
                            <div style="margin-bottom: 20px; border-bottom: 1px dashed #4CAF50; padding-bottom: 10px;">
                                <h3 style="color: #4CAF50; margin: 5px 0;">🥗 ENTRADAS VEGGIE</h3>
                                <ul style="padding-left: 20px; margin: 5px 0; list-style-type: none;">
                                    <li><strong>Ceviche de champiñones</strong> - <span
                                            style="color: #8BC34A;">[Vegano]</span><br>Hongos marinados en limón,
                                        cilantro, cebolla morada y camote</li>
                                    <li><strong>Bruschettas mediterráneas</strong> - <span
                                            style="color: #FFC107;">[Vegetariano]</span><br>Pan tostado con tomate,
                                        albahaca y queso de cabra</li>
                                </ul>
                            </div>

                            <div style="margin-bottom: 20px; border-bottom: 1px dashed #4CAF50; padding-bottom: 10px;">
                                <h3 style="color: #4CAF50; margin: 5px 0;">🌯 PLATOS PRINCIPALES</h3>
                                <ul style="padding-left: 20px; margin: 5px 0; list-style-type: none;">
                                    <li><strong>Buddha Bowl player</strong> - <span
                                            style="color: #8BC34A;">[Vegano]</span><br>Quinoa, aguacate, garbanzos,
                                        espinaca y tahini</li>
                                    <li><strong>Tacos de jackfruit</strong> - <span
                                            style="color: #8BC34A;">[Vegano]</span><br>"Carne" de jaca desmenuzada con
                                        piña y salsa BBQ</li>
                                </ul>
                            </div>

                            <div style="margin-bottom: 20px; border-bottom: 1px dashed #4CAF50; padding-bottom: 10px;">
                                <h3 style="color: #4CAF50; margin: 5px 0;">🍔 HAMBURGUESAS</h3>
                                <ul style="padding-left: 20px; margin: 5px 0; list-style-type: none;">
                                    <li><strong>Burger de lentejas</strong> - <span
                                            style="color: #8BC34A;">[Vegano]</span><br>Hamburguesa casera con quinoa y
                                        hongos</li>
                                    <li><strong>Sándwich caprese</strong> - <span
                                            style="color: #FFC107;">[Vegetariano]</span><br>Pan ciabatta con tomate,
                                        mozzarella y pesto</li>
                                </ul>
                            </div>

                            <div style="margin-bottom: 20px; border-bottom: 1px dashed #4CAF50; padding-bottom: 10px;">
                                <h3 style="color: #4CAF50; margin: 5px 0;">🥤 BEBIDAS</h3>
                                <ul style="padding-left: 20px; margin: 5px 0; list-style-type: none;">
                                    <li><strong>Smoothie verde</strong> - <span
                                            style="color: #8BC34A;">[Vegano]</span><br>Espinaca, piña, plátano y leche
                                        de almendras</li>
                                    <li><strong>Limonada de lavanda</strong> - <span
                                            style="color: #8BC34A;">[Vegano]</span></li>
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
                        <div class="text-h6">MENU COMIDA TRADICIONAL</div>
                    </q-card-section>

                    <q-card-section class="q-pt-none">
                        <div style="font-family: 'Arial', sans-serif; max-width: 100%; color: #333; line-height: 1.5; max-height: 60vh; overflow-y: auto;">

                            <h4
                                style="color: #F44336; border-bottom: 2px solid #F44336; padding-bottom: 5px; margin-top: 20px;">
                                🍛 Platos Fuertes</h4>
                            <ul style="padding-left: 20px; list-style-type: none; margin-top: 10px;">
                                <li style="margin-bottom: 15px; padding-bottom: 10px; border-bottom: 1px dashed #eee;">
                                    <strong>Bandeja Paisa</strong>
                                    <div style="font-size: 0.9em; color: #666; margin-top: 5px;">
                                        Frijoles, arroz, chicharrón, carne molida, chorizo, huevo, aguacate y arepa
                                    </div>
                                </li>
                                <li style="margin-bottom: 15px; padding-bottom: 10px; border-bottom: 1px dashed #eee;">
                                    <strong>Ajiaco Santafereño</strong>
                                    <div style="font-size: 0.9em; color: #666; margin-top: 5px;">
                                        Sopa de pollo con tres papas, guascas, crema de leche y alcaparras
                                    </div>
                                </li>
                                <li style="margin-bottom: 15px; padding-bottom: 10px; border-bottom: 1px dashed #eee;">
                                    <strong>Sancocho Trifásico</strong>
                                    <div style="font-size: 0.9em; color: #666; margin-top: 5px;">
                                        Carne de res, cerdo y pollo con yuca, plátano y ñame
                                    </div>
                                </li>
                            </ul>

                            <h4
                                style="color: #4CAF50; border-bottom: 2px solid #4CAF50; padding-bottom: 5px; margin-top: 20px;">
                                🌽 Acompañamientos</h4>
                            <ul style="padding-left: 20px; list-style-type: none; margin-top: 10px;">
                                <li style="margin-bottom: 15px; padding-bottom: 10px; border-bottom: 1px dashed #eee;">
                                    <strong>Arepas</strong>
                                    <div style="font-size: 0.9em; color: #666; margin-top: 5px;">
                                        Blancas, de queso o de choclo (maíz tierno)
                                    </div>
                                </li>
                                <li style="margin-bottom: 15px; padding-bottom: 10px; border-bottom: 1px dashed #eee;">
                                    <strong>Patacones</strong>
                                    <div style="font-size: 0.9em; color: #666; margin-top: 5px;">
                                        Plátano verde aplastado y frito dos veces
                                    </div>
                                </li>
                                <li style="margin-bottom: 15px; padding-bottom: 10px; border-bottom: 1px dashed #eee;">
                                    <strong>Arroz con Coco</strong>
                                    <div style="font-size: 0.9em; color: #666; margin-top: 5px;">
                                        Típico de la costa Caribe
                                    </div>
                                </li>
                            </ul>

                            <h4
                                style="color: #9C27B0; border-bottom: 2px solid #9C27B0; padding-bottom: 5px; margin-top: 20px;">
                                🍮 Postres</h4>
                            <ul style="padding-left: 20px; list-style-type: none; margin-top: 10px;">
                                <li style="margin-bottom: 15px; padding-bottom: 10px; border-bottom: 1px dashed #eee;">
                                    <strong>Postre de Natas</strong>
                                    <div style="font-size: 0.9em; color: #666; margin-top: 5px;">
                                        Dulce tradicional antioqueño
                                    </div>
                                </li>
                                <li style="margin-bottom: 15px; padding-bottom: 10px; border-bottom: 1px dashed #eee;">
                                    <strong>Mogolla Bogotana</strong>
                                    <div style="font-size: 0.9em; color: #666; margin-top: 5px;">
                                        Pan dulce esponjoso
                                    </div>
                                </li>
                            </ul>

                            <h4
                                style="color: #2196F3; border-bottom: 2px solid #2196F3; padding-bottom: 5px; margin-top: 20px;">
                                🥤 Bebidas Típicas</h4>
                            <ul style="padding-left: 20px; list-style-type: none; margin-top: 10px;">
                                <li style="margin-bottom: 15px; padding-bottom: 10px; border-bottom: 1px dashed #eee;">
                                    <strong>Aguapanela con queso</strong>
                                    <div style="font-size: 0.9em; color: #666; margin-top: 5px;">
                                        Bebida caliente de panela con trozos de queso campesino
                                    </div>
                                </li>
                                <li style="margin-bottom: 15px; padding-bottom: 10px; border-bottom: 1px dashed #eee;">
                                    <strong>Lulada</strong>
                                    <div style="font-size: 0.9em; color: #666; margin-top: 5px;">
                                        Refresco de lulo con trozos de fruta (Valle del Cauca)
                                    </div>
                                </li>
                            </ul>
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