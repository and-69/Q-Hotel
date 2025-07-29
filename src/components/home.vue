<template>

    <div class="all">
        <div>
            <img src="/public/img/hotelhome.jpg" alt="" style="width: 100%;">
            <div class="encima">
                <h1 id="textollamativo">LUJO, TRANQUILIDAD Y BRISA MARINA... TODO EN UN MISMO LUGAR.</h1>
                <button class="button-34">RESERVA AQUI!</button>
            </div>

        </div>
        <div>Diseñado para quienes aman el mar tanto como nosotros.</div>
        <div class="pngs">
            <img src="/public/img/pngegg.png" alt="">
            <img src="/public/img/pngegg (1).png" alt="">
            <img src="/public/img/playita.png" alt="">
            <img src="/public/img/pngegg (2).png" alt="">
        </div>
        <div>Diversión, relax y sabor: jetski al amanecer, spa al atardecer y cena bajo las estrellas.</div>
    </div>
</template>
<style scoped>
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
    transition: 0.2s ease;}
.encima {
    width: 650px;
    position: absolute;
    top: 35%;
    left: 25%;
    transform: translate(-50%, -50%);
    color: #5e00b6;
    text-shadow: 2px 2px 4px rgba(255, 255, 255, 0.5);
}

.pngs {
    display: flex;
    flex-direction: row;
    justify-content: center;

    img {
        width: 400px;
        height: 300px;
    }
    img:hover {
    filter: brightness(1.2);
    transition: 0.2s ease;}
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
}
.button-34:hover {
  box-shadow: 
    #ffd23f 0 -25px 18px -14px inset,
    #ffb627 0 1px 2px,
    #ffb627 0 2px 4px;
  background-color: #a677ff !important; /* Más brillante al pasar el mouse */
  color: #450086;
  transform: scale(1.05) rotate(-1deg);
}
</style>