<template>
    <div class="all">
        <div>
            <img src="/img/fondorestaurante.jpg" alt="" style="width: 100%;">
            <div class="encima">
                <h1 id="textollamativo">GASTRONOMIA FRESCA CON SABOR A SAL Y LIBERTAD.</h1>
            </div>
        </div>
        <div class="centrar">
            <h1 class="textos">Cena con los pies en la arena y el alma en el paraíso.</h1>
        </div>

        <div class="infocenter">
            <div class="cardsinfo">
                <cards img="/img/comidasrapidas.jpg" title="COMIDAS RAPIDAS" label="Visitar Sitio"
                    @button-click="modalListaRp = true" />
                <modalList v-model="modalListaRp" :menuSections="menuRapidas" />

                <cards img="/img/comidaitaliana.jpg" title="COMIDAS ITALIANA" label="Visitar Sitio"
                    @button-click="modalListaIt = true" />
                <modalList v-model="modalListaIt" :menuSections="menuItaliana" />

                <cards img="/img/comidaasiatica.jpg" title="COMIDAS ASIATICA" label="Visitar Sitio"
                    @button-click="modalListaAs = true" />
                <modalList v-model="modalListaAs" :menuSections="menuAsiatica" />

                <cards img="/img/bares.jpg" title="BAR Y BEBIDAS" label="Visitar Sitio"
                    @button-click="modalListaBr = true" />
                <modalList v-model="modalListaBr" :menuSections="menuBares" />

                <cards img="/img/comidavegeyvega.jpg" title="COMIDAS VEGETARIANA Y VEGANA" label="Visitar Sitio"
                    @button-click="modalListaVv = true" />
                <modalList v-model="modalListaVv" :menuSections="menuVegetariano" />

                <cards img="/img/comidatradicional.jpg" title="COMIDA TRADICIONAL" label="Visitar Sitio"
                    @button-click="modalListaTr = true" />
                <modalList v-model="modalListaTr" :menuSections="menuTradicional" />

            </div>
        </div>


    </div>
</template>
<script setup>
import { ref } from 'vue'
import cards from './cards.vue'
import modalList from './modalList.vue'

const modalListaRp = ref(false)
const modalListaIt = ref(false)
const modalListaAs = ref(false)
const modalListaBr = ref(false)
const modalListaVv = ref(false)
const modalListaTr = ref(false)

const menuRapidas = [
    {
        title: "Bocados & Snacks",
        icon: "🥪",
        items: [
            {
                name: "Ceviche express",
                description: "Trozos de pescado fresco marinado en limón, con ají, cebolla y tostadas"
            },
            {
                name: "Tacos de camarón",
                description: "Tortillas suaves con camarones salteados, pico de gallo y guacamole"
            },
            {
                name: "Ensalada César con pollo grillé",
                description: "Crujiente lechuga romana, croutons, parmesano y aderezo cremoso"
            },
            {
                name: "Pinchos de fruta tropical",
                description: "Piña, mango, sandía y kiwi (opcional con chilito y limón)"
            }
        ]
    },
    {
        title: "Hamburguesas & Sándwiches",
        icon: "🍔",
        items: [
            {
                name: "Burger \"Paraíso\"",
                description: "Carne 100% res, queso cheddar, aguacate y salsa chipotle"
            },
            {
                name: "Sándwich club",
                description: "Pan tostado con pollo, tocino, lechuga, tomate y mayonesa"
            },
            {
                name: "Wrap vegano",
                description: "Hummus, espinaca, aguacate, zanahoria y germinados"
            }
        ]
    },
    {
        title: "Especialidades Playeras",
        icon: "🌮",
        items: [
            {
                name: "Fish & Chips",
                description: "Filete de pescado empanizado con papas fritas crujientes"
            },
            {
                name: "Tostadas de aguachile",
                description: "Camarones en salsa picante de pepino y limón"
            },
            {
                name: "Quesadillas de mariscos",
                description: "Tortilla de harina rellena de queso y mix de mariscos"
            }
        ]
    },
    {
        title: "Bebidas Refrescantes",
        icon: "🥤",
        items: [
            {
                name: "Limonada de coco",
                description: "Fresca y cremosa"
            },
            {
                name: "Jugo verde detox",
                description: "Pepino, piña, espinaca y jengibre"
            },
            {
                name: "Michelada clásica",
                description: "Cerveza, limón, salsa inglesa y chile en polvo"
            }
        ]
    }
]
const menuItaliana = [
    {
        title: "Antipasti & Primi",
        icon: "🍝",
        items: [
            {
                name: "Bruschetta al Pomodoro",
                description: "Pan tostado con tomate fresco, albahaca y ajo"
            },
            {
                name: "Carpaccio di Manzo",
                description: "Finas láminas de res con rúcula, parmesano y aderezo de limón"
            },
            {
                name: "Spaghetti Aglio e Olio",
                description: "Espaguetis con ajo, aceite de oliva y guindilla"
            }
        ]
    },
    {
        title: "Pizze",
        icon: "🍕",
        items: [
            {
                name: "Margherita",
                description: "Salsa de tomate, mozzarella fresca y albahaca"
            },
            {
                name: "Diavola",
                description: "Salsa de tomate, mozzarella, salami picante y orégano"
            },
            {
                name: "Caprichosa",
                description: "Salsa de tomate, mozzarella, jamón, champiñones y alcachofas"
            }
        ]
    },
    {
        title: "Vini",
        icon: "🍷",
        items: [
            {
                name: "Chianti",
                description: "Vino tinto de la Toscana, seco y afrutado"
            },
            {
                name: "Prosecco",
                description: "Vino espumoso italiano, fresco y floral"
            }
        ]
    }
]
const menuAsiatica = [
    {
        title: "Sushi & Sashimi",
        icon: "🍣",
        items: [
            {
                name: "Sushi variado",
                description: "Selección de nigiri, maki y sashimi"
            },
            {
                name: "Rollos especiales",
                description: "Con ingredientes frescos y salsas exóticas"
            }
        ]
    },
    {
        title: "Platos Calientes",
        icon: "🍜",
        items: [
            {
                name: "Ramen",
                description: "Fideos en caldo con carne, huevo y verduras"
            },
            {
                name: "Pad Thai",
                description: "Fideos de arroz salteados con camarones, pollo y cacahuate"
            }
        ]
    },
    {
        title: "Acompañamientos",
        icon: "🥢",
        items: [
            {
                name: "Edamame",
                description: "Habas de soja al vapor con sal"
            },
            {
                name: "Rollitos primavera",
                description: "Con salsa agridulce"
            }
        ]
    },
    {
        title: "Bebidas Asiáticas",
        icon: "🥤",
        items: [
            {
                name: "Té verde",
                description: "Refrescante y antioxidante"
            },
            {
                name: "Ramune",
                description: "Refresco japonés con sabor a frutas"
            }
        ]
    }
]
const menuBares = [
    {
        title: "Cocteles",
        icon: "🍹",
        items: [
            {
                name: "Mojito",
                description: "Ron, menta, azúcar, limón y soda"
            },
            {
                name: "Piña Colada",
                description: "Ron, crema de coco y piña"
            },
            {
                name: "Caipirinha",
                description: "Cachaça, azúcar y lima"
            }
        ]
    },
    {
        title: "Cervezas",
        icon: "🍺",
        items: [
            {
                name: "Rubia",
                description: "Ligera y refrescante"
            },
            {
                name: "Roja",
                description: "Con cuerpo y sabor intenso"
            },
            {
                name: "Negra",
                description: "Suave y cremosa"
            }
        ]
    },
    {
        title: "Licores",
        icon: "🥃",
        items: [
            {
                name: "Whisky",
                description: "Escocés, suave y ahumado"
            },
            {
                name: "Vodka",
                description: "Neutro y puro"
            },
            {
                name: "Ron",
                description: "Dulce y aromático"
            }
        ]
    }
]
const menuVegetariano = [
    {
        title: "Entradas Veggie",
        icon: "🥗",
        items: [
            {
                name: "Ceviche de champiñones",
                description: "Hongos marinados en limón, cilantro, cebolla morada y camote",
                tags: ["Vegano"]
            },
            {
                name: "Bruschettas mediterráneas",
                description: "Pan tostado con tomate, albahaca y queso de cabra",
                tags: ["Vegetariano"]
            }
        ]
    },
    {
        title: "Platos Principales",
        icon: "🌯",
        items: [
            {
                name: "Buddha Bowl player",
                description: "Quinoa, aguacate, garbanzos, espinaca y tahini",
                tags: ["Vegano"]
            },
            {
                name: "Tacos de jackfruit",
                description: "\"Carne\" de jaca desmenuzada con piña y salsa BBQ",
                tags: ["Vegano"]
            }
        ]
    },
    {
        title: "Hamburguesas",
        icon: "🍔",
        items: [
            {
                name: "Burger de lentejas",
                description: "Hamburguesa casera con quinoa y hongos",
                tags: ["Vegano"]
            },
            {
                name: "Sándwich caprese",
                description: "Pan ciabatta con tomate, mozzarella y pesto",
                tags: ["Vegetariano"]
            }
        ]
    },
    {
        title: "Bebidas",
        icon: "🥤",
        items: [
            {
                name: "Smoothie verde",
                description: "Espinaca, piña, plátano y leche de almendras",
                tags: ["Vegano"]
            },
            {
                name: "Limonada de lavanda",
                description: "",
                tags: ["Vegano"]
            }
        ]
    }
]
const menuTradicional = [
    {
        title: "Platos Fuertes",
        icon: "🍛",
        items: [
            {
                name: "Bandeja Paisa",
                description: "Frijoles, arroz, chicharrón, carne molida, chorizo, huevo, aguacate y arepa"
            },
            {
                name: "Ajiaco Santafereño",
                description: "Sopa de pollo con tres papas, guascas, crema de leche y alcaparras"
            },
            {
                name: "Sancocho Trifásico",
                description: "Carne de res, cerdo y pollo con yuca, plátano y ñame"
            }
        ]
    },
    {
        title: "Acompañamientos",
        icon: "🌽",
        items: [
            {
                name: "Arepas",
                description: "Blancas, de queso o de choclo (maíz tierno)"
            },
            {
                name: "Patacones",
                description: "Plátano verde aplastado y frito dos veces"
            },
            {
                name: "Arroz con Coco",
                description: "Típico de la costa Caribe"
            }
        ]
    },
    {
        title: "Postres",
        icon: "🍮",
        items: [
            {
                name: "Postre de Natas",
                description: "Dulce tradicional antioqueño"
            },
            {
                name: "Mogolla Bogotana",
                description: "Pan dulce esponjoso"
            }
        ]
    },
    {
        title: "Bebidas Típicas",
        icon: "🥤",
        items: [
            {
                name: "Aguapanela con queso",
                description: "Bebida caliente de panela con trozos de queso campesino"
            },
            {
                name: "Lulada",
                description: "Refresco de lulo con trozos de fruta (Valle del Cauca)"
            }
        ]
    }
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
