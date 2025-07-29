<template>
    <div class="all">
        <div>
            <img src="/public/img/fondorestaurante.jpg" alt="" style="width: 100%;">
            <div class="encima">
                <h1 id="textollamativo">GASTRONOMIA FRESCA CON SABOR A SAL Y LIBERTAD.</h1>
            </div>
        </div>
        <div class="infocenter">
            <div class="cardsinfo">
                <q-card class="my-card">
                    <q-img src="/public/img/comidasrapidas.jpg">
                        <div class="absolute-bottom">
                            <div class="text-h6">Bungalows y Habitaciones</div>
                        </div>
                    </q-img>

                    <q-card-actions>
                        <q-btn class="button-34" flat>Visitar Sitio</q-btn>
                    </q-card-actions>
                </q-card>
                <q-card class="my-card">
                    <q-img src="/public/img/comidaitaliana.jpg">
                        <div class="absolute-bottom">
                            <div class="text-h6">Bungalows y Habitaciones</div>
                        </div>
                    </q-img>

                    <q-card-actions>
                        <q-btn class="button-34" flat>Visitar Sitio</q-btn>
                    </q-card-actions>
                </q-card>
                <q-card class="my-card">
                    <q-img src="/public/img/comidaasiatica.jpg">
                        <div class="absolute-bottom">
                            <div class="text-h6">Bungalows y Habitaciones</div>
                        </div>
                    </q-img>

                    <q-card-actions>
                        <q-btn class="button-34" flat>Visitar Sitio</q-btn>
                    </q-card-actions>
                </q-card>
                <q-card class="my-card">
                    <q-img src="/public/img/bares.jpg">
                        <div class="absolute-bottom">
                            <div class="text-h6">Bungalows y Habitaciones</div>
                        </div>
                    </q-img>

                    <q-card-actions>
                        <q-btn class="button-34" flat>Visitar Sitio</q-btn>
                    </q-card-actions>
                </q-card>
                <q-card class="my-card">
                    <q-img src="/public/img/comidavegeyvega.jpg">
                        <div class="absolute-bottom">
                            <div class="text-h6">Bungalows y Habitaciones</div>
                        </div>
                    </q-img>

                    <q-card-actions>
                        <q-btn class="button-34" flat>Visitar Sitio</q-btn>
                    </q-card-actions>
                </q-card><q-card class="my-card">
                    <q-img src="/public/img/comidatradicional.jpg">
                        <div class="absolute-bottom">
                            <div class="text-h6">Bungalows y Habitaciones</div>
                        </div>
                    </q-img>

                    <q-card-actions>
                        <q-btn class="button-34" flat>Visitar Sitio</q-btn>
                    </q-card-actions>
                </q-card>
            </div>
        </div>

    </div>
</template>
<style scoped>
.all {
    background-color: #F5F0CD;
    font-family: 'Super Impacto', Impact, sans-serif;
}
.infoCenter {
    display: flex;
    justify-content: center;
    align-items: center;
}

.cardsinfo {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    justify-content: center;
    align-items: center;
    width: 70%;
    height: auto;
    margin-bottom: 5%;
}
.encima {
    width: 650px;
    position: absolute;
    top: 15%;
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