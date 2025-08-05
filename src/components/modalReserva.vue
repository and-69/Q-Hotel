<template>
    <q-dialog v-model="dialogModel">
        <q-card style="min-width: 400px; max-width: 600px;">
            <q-card-section class="bg-dark text-white">
                <div class="text-h6">Reserva tu Habitación</div>
                <div class="text-subtitle2">Complete los datos requeridos</div>
            </q-card-section>

            <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md q-pa-md">
                
                <div class="text-subtitle1 text-weight-bold">Datos Personales</div>

                <q-input filled v-model="form.nombre" label="Nombre Completo *" lazy-rules
                    :rules="[val => !!val || 'Campo obligatorio']" />

                <q-input filled type="email" v-model="form.email" label="Correo Electrónico *" lazy-rules :rules="[
                    val => !!val || 'Campo obligatorio',
                    val => /.+@.+\..+/.test(val) || 'Email no válido'
                ]" />

                <q-input filled v-model="form.telefono" label="Teléfono *" mask="(###) ### - ####" lazy-rules
                    :rules="[val => !!val || 'Campo obligatorio']" />


                <div class="text-subtitle1 text-weight-bold q-mt-md">Detalles de Reserva</div>

                <div class="row q-col-gutter-md">
                    <div class="col-xs-12 col-sm-6">
                        <q-input filled v-model="form.fechaEntrada" label="Fecha de Entrada *" mask="##/##/####"
                            :rules="[val => !!val || 'Campo obligatorio']">
                            <template v-slot:append>
                                <q-icon name="event" class="cursor-pointer">
                                    <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                                        <q-date v-model="form.fechaEntrada" minimal>
                                            <div class="row items-center justify-end">
                                                <q-btn v-close-popup label="OK" color="primary" flat />
                                            </div>
                                        </q-date>
                                    </q-popup-proxy>
                                </q-icon>
                            </template>
                        </q-input>
                    </div>

                    <div class="col-xs-12 col-sm-6">
                        <q-input filled v-model="form.fechaSalida" label="Fecha de Salida *" mask="##/##/####"
                            :rules="[val => !!val || 'Campo obligatorio']">
                            <template v-slot:append>
                                <q-icon name="event" class="cursor-pointer">
                                    <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                                        <q-date v-model="form.fechaSalida" minimal>
                                            <div class="row items-center justify-end">
                                                <q-btn v-close-popup label="OK" color="primary" flat />
                                            </div>
                                        </q-date>
                                    </q-popup-proxy>
                                </q-icon>
                            </template>
                        </q-input>
                    </div>
                </div>

                <div class="row q-col-gutter-md">
                    <div class="col-xs-6 col-sm-4">
                        <q-input filled type="number" v-model="form.adultos" label="Adultos *" min="1"
                            :rules="[val => !!val || 'Campo obligatorio']" />
                    </div>

                    <div class="col-xs-6 col-sm-4">
                        <q-input filled type="number" v-model="form.ninos" label="Niños" min="0" />
                    </div>

                    <div class="col-xs-12 col-sm-4">
                        <q-select filled v-model="form.metodoPago" :options="metodosPago" label="Método de Pago *"
                            :rules="[val => !!val || 'Seleccione una opción']" />
                    </div>
                </div>

                <q-input filled v-model="form.comentarios" label="Comentarios Especiales" type="textarea" autogrow />

                <q-checkbox v-model="form.aceptoTerminos" label="Acepto los términos y condiciones *"
                    :rules="[val => !!val || 'Debe aceptar los términos']" />

                <div class="q-mt-lg">
                    <q-btn label="Reservar" type="submit" color="dark" class="q-mr-sm" />
                    <q-btn label="Limpiar" type="reset" color="dark" flat />
                </div>
            </q-form>
        </q-card>
    </q-dialog>

    <q-dialog v-model="confirmDialog">
      <q-card class="confirm-card q-pa-xl flex flex-center column items-center">
        <q-icon name="check_circle" color="white" size="64px" class="q-mb-md" />
        <div class="text-h5 text-center q-mb-sm text-white">¡Reserva realizada con éxito!</div>
        <div class="text-subtitle2 text-center q-mb-lg text-white">Pronto recibirás un correo de confirmación.</div>
        <q-btn label="Aceptar" color="white" text-color="purple-4" @click="confirmDialog = false; onReset()" class="q-px-xl q-mt-sm" />
      </q-card>
    </q-dialog>
</template>
<script setup>

import { ref, computed } from 'vue'

const props = defineProps({
  modelValue: Boolean
})
const emit = defineEmits(['update:modelValue'])

const dialogModel=computed({
    get: () => props.modelValue,
    set: (val) => emit('update:modelValue', val)
})


const confirmDialog = ref(false)

const form = ref({
    nombre: '',
    email: '',
    telefono: '',
    tipoHabitacion: null,
    fechaEntrada: '',
    fechaSalida: '',
    adultos: 2,
    ninos: 0,
    metodoPago: null,
    comentarios: '',
    aceptoTerminos: false
})

const metodosPago = [
    'Tarjeta de Crédito', 'Transferencia Bancaria', 'Efectivo', 'PayPal'
]

function onSubmit() {
    emit('update:modelValue', false)
    confirmDialog.value = true
}

function onReset() {
    form.value = {
        nombre: '',
        email: '',
        telefono: '',
        tipoHabitacion: null,
        fechaEntrada: '',
        fechaSalida: '',
        adultos: 2,
        ninos: 0,
        metodoPago: null,
        comentarios: '',
        aceptoTerminos: false
    }
    emit('update:modelValue', false)
}
</script>
<style scoped>
.q-card {
    padding: 10px;
    font-family: 'Super Impacto', Impact, sans-serif;
}

.confirm-card {
    background: #8661c2;
    border-radius: 18px;
    box-shadow: 0 4px 24px rgba(0,0,0,0.18);
    min-width: 320px;
    max-width: 90vw;
}
</style>