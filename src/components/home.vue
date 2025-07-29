<template>

    <div class="all">
        <div>
            <img src="/public/img/hotelhome.jpg" alt="" style="width: 100%;">
            <div class="encima">
                <h1 id="textollamativo">LUJO, TRANQUILIDAD Y BRISA MARINA... TODO EN UN MISMO LUGAR.</h1>
                <q-btn class="button-34" to="/habitaciones">RESERVA AQUI!</q-btn>
            </div>

        </div>
        <div class="centrar">
            <div class="textos">Diseñado para quienes aman el mar tanto como nosotros.</div>
        </div>
        
        <div class="pngs">
            <img src="/public/img/pngegg.png" alt="">
            <img src="/public/img/pngegg (1).png" alt="">
            <img src="/public/img/playita.png" alt="">
            <img src="/public/img/pngegg (2).png" alt="">
        </div>
        <div class="centrar">
            <div class="textos">Diversión, relax y sabor: jetski al amanecer, spa al atardecer y cena bajo las estrellas.</div>
        </div>
        
        <div class="infoCenter">
            <div class="cardsinfo">
                <q-card class="my-card">
                    <q-img src="/public/img/habt-hotel.jpg">
                        <div class="absolute-bottom">
                            <div class="text-h6">Bungalows y Habitaciones</div>
                        </div>
                    </q-img>

                    <q-card-actions>
                        <q-btn class="button-34" flat to="/habitaciones">Visitar Sitio</q-btn>
                    </q-card-actions>
                </q-card>
                <q-card class="my-card">
                    <q-img src="/public/img/restaurante.jpg">
                        <div class="absolute-bottom">
                            <div class="text-h6">Bares y Restaurantes</div>
                        </div>
                    </q-img>

                    <q-card-actions>
                        <q-btn class="button-34" flat to="/gastronomia">Visitar Sitio</q-btn>
                    </q-card-actions>
                </q-card>
                <q-card class="my-card">
                    <q-img src="/public/img/spa-home.jpg">
                        <div class="absolute-bottom">
                            <div class="text-h6">Recreacion y Servicios</div>
                        </div>
                    </q-img>

                    <q-card-actions>
                        <q-btn class="button-34" flat to="/servicios">Visitar Sitio</q-btn>
                    </q-card-actions>
                </q-card>
                <q-card class="my-card">
                    <q-img src="/public/img/jetsky.jpg">
                        <div class="absolute-bottom">
                            <div class="text-h6">Deportes y diversion extrema</div>
                        </div>
                    </q-img>

                    <q-card-actions>
                        <q-btn class="button-34" flat to="/deportes">Visitar Sitio</q-btn>
                    </q-card-actions>
                </q-card>
            </div>
        </div>

    </div>
</template>
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


.all {
    background-color: #F5F0CD;
    font-family: 'Super Impacto', Impact, sans-serif;
}

body,
#q-app {
    cursor: url('/img/pulpo.png'), auto;
}

#textollamativo:hover {
    filter: brightness(1.8);
    transition: 0.2s ease;
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

.pngs {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 40px;
    margin: 2% 10%;
    padding: 40px 20px;
    border-radius: 40px;
    background: linear-gradient(135deg, #ffe066 0%, #a677ff 100%);
    box-shadow: 0 8px 32px 0 rgba(94,0,182,0.15), 0 1.5px 8px 0 rgba(255, 208, 102, 0.15);
}
.pngs img {
    width: 320px;
    height: 220px;
    border-radius: 30px;
    box-shadow: 0 4px 24px 0 rgba(69,0,134,0.18);
    border: 4px solid #fffbe6;
    transition: transform 0.35s cubic-bezier(.25,1.7,.45,.87), box-shadow 0.25s, filter 0.2s;
    filter: brightness(0.95) saturate(1.1);
}
.pngs img:hover {
    filter: brightness(1.15) saturate(1.3);
    transform: scale(1.08) rotate(-3deg);
    box-shadow: 0 8px 32px 0 #a677ff99, 0 1.5px 8px 0 #ffd06699;
    z-index: 2;
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
</style>