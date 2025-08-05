<template>

    <div class="all">
        <div>
            <img src="/img/hotelhome.jpg" alt="" style="width: 100%;">
            <div class="encima">
                <h1 id="textollamativo">LUJO, TRANQUILIDAD Y BRISA MARINA... TODO EN UN MISMO LUGAR.</h1>
                <button34 label="RESERVA AQUI!" to="/habitaciones"/>
            </div>

        </div>
        <div class="centrar">
            <div class="textos">Diseñado para quienes aman el mar tanto como nosotros.</div>
        </div>
        <div class="row items-center justify-center">
        <div class="pngs col-12 col-md-6 col-lg-12">
            <img src="/img/pngegg.png" alt="">
            <img src="/img/pngegg (1).png" alt="">
            <img src="/img/playita.png" alt="">
            <img src="/img/pngegg (2).png" alt="">
        </div>
        </div>
        <div class="centrar">
            <div class="textos">Diversión, relax y sabor: jetski al amanecer, spa al atardecer y cena bajo las estrellas.</div>
        </div>
        
        <div class="infoCenter">
            <div class="cardsinfo">
                <cardHome
                    img="/img/habt-hotel.jpg"
                    title="Bungalows y Habitaciones"
                    label="Visitar Sitio"
                    to="/habitaciones"
                />
                <cardHome
                    img="/img/restaurante.jpg"
                    title="Bares y Restaurantes"
                    label="Visitar Sitio"
                    to="/gastronomia"
                />
                <cardHome
                    img="/img/spa-home.jpg"
                    title="Recreacion y Servicios"
                    label="Visitar Sitio"
                    to="/servicios"
                />
                <cardHome
                    img="/img/jetsky.jpg"
                    title="Deportes y diversion extrema"
                    label="Visitar Sitio"
                    to="/deportes"
                />
            </div>
        </div>

    </div>
</template>
<script setup>
import button34 from './button34.vue';
import cardHome from './cardHome.vue';
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
    flex-wrap: wrap;
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

</style>
