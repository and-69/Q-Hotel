<template>
    <div class="all">
        <div>
            <img src="/public/img/habitacion5.jpg" alt="" style="width: 100%;">
            <div class="encima">
                <h1 id="textollamativo">EL MEJOR ATARDECER LO TIENES DESDE TU HABITACION.</h1>
            </div>
        </div>
        <div class="centrar">
            <h1 class="textos">Despierta con el sonido de las olas y duérme bajo las estrellas.</h1>
        </div>

        <div class="infocenter">
            <div class="cardsinfo">
                <q-card class="my-card">
                    <q-img src="/public/img/habitacion1.jpg" class="img-card">
                        <div class="absolute-bottom">
                            <div class="text-h6">Refugio de Coral</div>
                        </div>
                    </q-img>

                    <q-card-actions>
                        <q-btn class="button-34" flat @click="modal1 = true">RESERVA AQUI!</q-btn>
                    </q-card-actions>
                </q-card>
                <q-card class="my-card">
                    <q-img src="/public/img/habitacion2.jpg" class="img-card">
                        <div class="absolute-bottom">
                            <div class="text-h6">Suite Aurora</div>
                        </div>
                    </q-img>

                    <q-card-actions>
                        <q-btn class="button-34" flat @click="modal2 = true">RESERVA AQUI!</q-btn>
                    </q-card-actions>
                </q-card>
                <q-card class="my-card">
                    <q-img src="/public/img/habitacion3.jpg" class="img-card">
                        <div class="absolute-bottom">
                            <div class="text-h6">Selva Esmeralda</div>
                        </div>
                    </q-img>

                    <q-card-actions>
                        <q-btn class="button-34" flat @click="modal3 = true">RESERVA AQUI!</q-btn>
                    </q-card-actions>
                </q-card>
                <q-card class="my-card">
                    <q-img src="/public/img/habitacion4.jpg" class="img-card">
                        <div class="absolute-bottom">
                            <div class="text-h6">Terraza Maya</div>
                        </div>
                    </q-img>

                    <q-card-actions>
                        <q-btn class="button-34" flat @click="modal4 = true">RESERVA AQUI!</q-btn>
                    </q-card-actions>
                </q-card>
                <q-card class="my-card">
                    <q-img src="/public/img/habitacion6.jpg" class="img-card">
                        <div class="absolute-bottom">
                            <div class="text-h6">Cascada de Sedas</div>
                        </div>
                    </q-img>

                    <q-card-actions>
                        <q-btn class="button-34" flat @click="modal5 = true">RESERVA AQUI!</q-btn>
                    </q-card-actions>
                </q-card><q-card class="my-card">
                    <q-img src="/public/img/habt-hotel.jpg" class="img-card">
                        <div class="absolute-bottom">
                            <div class="text-h6">Nido de Colibrí</div>
                        </div>
                    </q-img>

                    <q-card-actions>
                        <q-btn class="button-34" flat @click="modal6 = true">RESERVA AQUI!</q-btn>
                    </q-card-actions>
                </q-card>
            </div>
        </div>

        <div>
            <q-dialog v-model="modal1">
                <q-card style="min-width: 400px; max-width: 600px;">
                    <q-card-section class="bg-primary text-white">
                        <div class="text-h6">Reserva tu Habitación</div>
                        <div class="text-subtitle2">Complete los datos requeridos</div>
                    </q-card-section>

                    <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md q-pa-md">
                        <!-- Datos Personales -->
                        <div class="text-subtitle1 text-weight-bold">Datos Personales</div>

                        <q-input filled v-model="form.nombre" label="Nombre Completo *" lazy-rules
                            :rules="[val => !!val || 'Campo obligatorio']" />

                        <q-input filled type="email" v-model="form.email" label="Correo Electrónico *" lazy-rules
                            :rules="[
                                val => !!val || 'Campo obligatorio',
                                val => /.+@.+\..+/.test(val) || 'Email no válido'
                            ]" />

                        <q-input filled v-model="form.telefono" label="Teléfono *" mask="(###) ### - ####" lazy-rules
                            :rules="[val => !!val || 'Campo obligatorio']" />

                        <!-- Detalles de Reserva -->
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
                                <q-select filled v-model="form.metodoPago" :options="metodosPago"
                                    label="Método de Pago *" :rules="[val => !!val || 'Seleccione una opción']" />
                            </div>
                        </div>

                        <!-- Comentarios -->
                        <q-input filled v-model="form.comentarios" label="Comentarios Especiales" type="textarea"
                            autogrow />

                        <!-- Términos y Condiciones -->
                        <q-checkbox v-model="form.aceptoTerminos" label="Acepto los términos y condiciones *"
                            :rules="[val => !!val || 'Debe aceptar los términos']" />

                        <!-- Botones -->
                        <div class="q-mt-lg">
                            <q-btn label="Reservar" type="submit" color="primary" class="q-mr-sm" />
                            <q-btn label="Limpiar" type="reset" color="primary" flat />
                        </div>
                    </q-form>
                </q-card>
            </q-dialog>

            <q-dialog v-model="modal2">

                <q-card style="min-width: 400px; max-width: 600px;">
                    <q-card-section class="bg-primary text-white">
                        <div class="text-h6">Reserva tu Habitación</div>
                        <div class="text-subtitle2">Complete los datos requeridos</div>
                    </q-card-section>

                    <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md q-pa-md">
                        <!-- Datos Personales -->
                        <div class="text-subtitle1 text-weight-bold">Datos Personales</div>

                        <q-input filled v-model="form.nombre" label="Nombre Completo *" lazy-rules
                            :rules="[val => !!val || 'Campo obligatorio']" />

                        <q-input filled type="email" v-model="form.email" label="Correo Electrónico *" lazy-rules
                            :rules="[
                                val => !!val || 'Campo obligatorio',
                                val => /.+@.+\..+/.test(val) || 'Email no válido'
                            ]" />

                        <q-input filled v-model="form.telefono" label="Teléfono *" mask="(###) ### - ####" lazy-rules
                            :rules="[val => !!val || 'Campo obligatorio']" />

                        <!-- Detalles de Reserva -->
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
                                <q-select filled v-model="form.metodoPago" :options="metodosPago"
                                    label="Método de Pago *" :rules="[val => !!val || 'Seleccione una opción']" />
                            </div>
                        </div>

                        <!-- Comentarios -->
                        <q-input filled v-model="form.comentarios" label="Comentarios Especiales" type="textarea"
                            autogrow />

                        <!-- Términos y Condiciones -->
                        <q-checkbox v-model="form.aceptoTerminos" label="Acepto los términos y condiciones *"
                            :rules="[val => !!val || 'Debe aceptar los términos']" />

                        <!-- Botones -->
                        <div class="q-mt-lg">
                            <q-btn label="Reservar" type="submit" color="primary" class="q-mr-sm" />
                            <q-btn label="Limpiar" type="reset" color="primary" flat />
                        </div>
                    </q-form>
                </q-card>
            </q-dialog>

            <q-dialog v-model="modal3">

                <q-card style="min-width: 400px; max-width: 600px;">
                    <q-card-section class="bg-primary text-white">
                        <div class="text-h6">Reserva tu Habitación</div>
                        <div class="text-subtitle2">Complete los datos requeridos</div>
                    </q-card-section>

                    <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md q-pa-md">
                        <!-- Datos Personales -->
                        <div class="text-subtitle1 text-weight-bold">Datos Personales</div>

                        <q-input filled v-model="form.nombre" label="Nombre Completo *" lazy-rules
                            :rules="[val => !!val || 'Campo obligatorio']" />

                        <q-input filled type="email" v-model="form.email" label="Correo Electrónico *" lazy-rules
                            :rules="[
                                val => !!val || 'Campo obligatorio',
                                val => /.+@.+\..+/.test(val) || 'Email no válido'
                            ]" />

                        <q-input filled v-model="form.telefono" label="Teléfono *" mask="(###) ### - ####" lazy-rules
                            :rules="[val => !!val || 'Campo obligatorio']" />

                        <!-- Detalles de Reserva -->
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
                                <q-select filled v-model="form.metodoPago" :options="metodosPago"
                                    label="Método de Pago *" :rules="[val => !!val || 'Seleccione una opción']" />
                            </div>
                        </div>

                        <!-- Comentarios -->
                        <q-input filled v-model="form.comentarios" label="Comentarios Especiales" type="textarea"
                            autogrow />

                        <!-- Términos y Condiciones -->
                        <q-checkbox v-model="form.aceptoTerminos" label="Acepto los términos y condiciones *"
                            :rules="[val => !!val || 'Debe aceptar los términos']" />

                        <!-- Botones -->
                        <div class="q-mt-lg">
                            <q-btn label="Reservar" type="submit" color="primary" class="q-mr-sm" />
                            <q-btn label="Limpiar" type="reset" color="primary" flat />
                        </div>
                    </q-form>
                </q-card>
            </q-dialog>

            <q-dialog v-model="modal4">

                <q-card style="min-width: 400px; max-width: 600px;">
                    <q-card-section class="bg-primary text-white">
                        <div class="text-h6">Reserva tu Habitación</div>
                        <div class="text-subtitle2">Complete los datos requeridos</div>
                    </q-card-section>

                    <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md q-pa-md">
                        <!-- Datos Personales -->
                        <div class="text-subtitle1 text-weight-bold">Datos Personales</div>

                        <q-input filled v-model="form.nombre" label="Nombre Completo *" lazy-rules
                            :rules="[val => !!val || 'Campo obligatorio']" />

                        <q-input filled type="email" v-model="form.email" label="Correo Electrónico *" lazy-rules
                            :rules="[
                                val => !!val || 'Campo obligatorio',
                                val => /.+@.+\..+/.test(val) || 'Email no válido'
                            ]" />

                        <q-input filled v-model="form.telefono" label="Teléfono *" mask="(###) ### - ####" lazy-rules
                            :rules="[val => !!val || 'Campo obligatorio']" />

                        <!-- Detalles de Reserva -->
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
                                <q-select filled v-model="form.metodoPago" :options="metodosPago"
                                    label="Método de Pago *" :rules="[val => !!val || 'Seleccione una opción']" />
                            </div>
                        </div>

                        <!-- Comentarios -->
                        <q-input filled v-model="form.comentarios" label="Comentarios Especiales" type="textarea"
                            autogrow />

                        <!-- Términos y Condiciones -->
                        <q-checkbox v-model="form.aceptoTerminos" label="Acepto los términos y condiciones *"
                            :rules="[val => !!val || 'Debe aceptar los términos']" />

                        <!-- Botones -->
                        <div class="q-mt-lg">
                            <q-btn label="Reservar" type="submit" color="primary" class="q-mr-sm" />
                            <q-btn label="Limpiar" type="reset" color="primary" flat />
                        </div>
                    </q-form>
                </q-card>
            </q-dialog>

            <q-dialog v-model="modal5">

                <q-card style="min-width: 400px; max-width: 600px;">
                    <q-card-section class="bg-primary text-white">
                        <div class="text-h6">Reserva tu Habitación</div>
                        <div class="text-subtitle2">Complete los datos requeridos</div>
                    </q-card-section>

                    <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md q-pa-md">
                        <!-- Datos Personales -->
                        <div class="text-subtitle1 text-weight-bold">Datos Personales</div>

                        <q-input filled v-model="form.nombre" label="Nombre Completo *" lazy-rules
                            :rules="[val => !!val || 'Campo obligatorio']" />

                        <q-input filled type="email" v-model="form.email" label="Correo Electrónico *" lazy-rules
                            :rules="[
                                val => !!val || 'Campo obligatorio',
                                val => /.+@.+\..+/.test(val) || 'Email no válido'
                            ]" />

                        <q-input filled v-model="form.telefono" label="Teléfono *" mask="(###) ### - ####" lazy-rules
                            :rules="[val => !!val || 'Campo obligatorio']" />

                        <!-- Detalles de Reserva -->
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
                                <q-select filled v-model="form.metodoPago" :options="metodosPago"
                                    label="Método de Pago *" :rules="[val => !!val || 'Seleccione una opción']" />
                            </div>
                        </div>

                        <!-- Comentarios -->
                        <q-input filled v-model="form.comentarios" label="Comentarios Especiales" type="textarea"
                            autogrow />

                        <!-- Términos y Condiciones -->
                        <q-checkbox v-model="form.aceptoTerminos" label="Acepto los términos y condiciones *"
                            :rules="[val => !!val || 'Debe aceptar los términos']" />

                        <!-- Botones -->
                        <div class="q-mt-lg">
                            <q-btn label="Reservar" type="submit" color="primary" class="q-mr-sm" />
                            <q-btn label="Limpiar" type="reset" color="primary" flat />
                        </div>
                    </q-form>
                </q-card>
            </q-dialog>

            <q-dialog v-model="modal6">
                <q-card style="min-width: 400px; max-width: 600px;">
                    <q-card-section class="bg-primary text-white">
                        <div class="text-h6">Reserva tu Habitación</div>
                        <div class="text-subtitle2">Complete los datos requeridos</div>
                    </q-card-section>

                    <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md q-pa-md">
                        <!-- Datos Personales -->
                        <div class="text-subtitle1 text-weight-bold">Datos Personales</div>

                        <q-input filled v-model="form.nombre" label="Nombre Completo *" lazy-rules
                            :rules="[val => !!val || 'Campo obligatorio']" />

                        <q-input filled type="email" v-model="form.email" label="Correo Electrónico *" lazy-rules
                            :rules="[
                                val => !!val || 'Campo obligatorio',
                                val => /.+@.+\..+/.test(val) || 'Email no válido'
                            ]" />

                        <q-input filled v-model="form.telefono" label="Teléfono *" mask="(###) ### - ####" lazy-rules
                            :rules="[val => !!val || 'Campo obligatorio']" />

                        <!-- Detalles de Reserva -->
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
                                <q-select filled v-model="form.metodoPago" :options="metodosPago"
                                    label="Método de Pago *" :rules="[val => !!val || 'Seleccione una opción']" />
                            </div>
                        </div>

                        <!-- Comentarios -->
                        <q-input filled v-model="form.comentarios" label="Comentarios Especiales" type="textarea"
                            autogrow />

                        <!-- Términos y Condiciones -->
                        <q-checkbox v-model="form.aceptoTerminos" label="Acepto los términos y condiciones *"
                            :rules="[val => !!val || 'Debe aceptar los términos']" />

                        <!-- Botones -->
                        <div class="q-mt-lg">
                            <q-btn label="Reservar" type="submit" color="primary" class="q-mr-sm" />
                            <q-btn label="Limpiar" type="reset" color="primary" flat />
                        </div>
                    </q-form>
                </q-card>
            </q-dialog>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue'
import { useQuasar } from 'quasar'

const $q = useQuasar()
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

const habitaciones = [
    { label: 'Habitación Sencilla', value: 'sencilla' },
    { label: 'Habitación Doble', value: 'doble' },
    { label: 'Suite Junior', value: 'suite-junior' },
    { label: 'Suite Presidencial', value: 'suite-presidencial' }
]

const metodosPago = [
    'Tarjeta de Crédito', 'Transferencia Bancaria', 'Efectivo', 'PayPal'
]

function onSubmit() {
    $q.notify({
        color: 'positive',
        message: 'Reserva enviada correctamente',
        icon: 'check_circle'
    })
    // Aquí iría la lógica para enviar los datos al servidor
    console.log('Datos enviados:', form.value)
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
}
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