<template lang="">
    <v-container>
        <div style="padding: 120px">
            <h3 style="color: black">Nueva Boleta de Venta Electrónica</h3>
            <v-card class="mt-5">
                <h3 style="color: black; padding:20px">Boleta de Venta Electrónica - B003-00001538</h3>
                <v-form class="style_form_display">
                    <v-row>
                        <v-col cols="12" md="2">
                            <v-text-field label="DNI" required>                                
                            </v-text-field>
                        </v-col>
                        <v-col cols="12" md="5">
                            <v-text-field label="RAZÓN SOCIAL" required>                                
                            </v-text-field>
                        </v-col>
                        <v-col cols="12" md="5">
                            <v-text-field  label="DIRECCIÓN" required>                                
                            </v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="12" md="3">
                            <v-select  :items="['SOLES', 'DÓLARES']" label="MONEDA" required>                                
                            </v-select>
                        </v-col>
                        <v-col cols="12" md="3">
                            <v-select :items="['CONTADO', 'DÉBITO']" label="CONDICIÓN DE PAGO" required>                                
                            </v-select>
                        </v-col>
                        <v-col cols="12" md="6">
                            <v-text-field label="OBSERVACIÓN" required>                                
                            </v-text-field>
                        </v-col>
                    </v-row>
                    <v-table class="table_style" fixed-header>
                    <thead>
                        <tr>
                            <th class="text-center">
                                N°
                            </th>
                            <th class="text-center">
                                DESCRIPCIÓN
                            </th>
                            <th class="text-center">
                                PRECIO UNIT.
                            </th>
                            <th class="text-center">
                                CANTIDAD
                            </th>
                            <th class="text-center">
                                PRECIO TOTAL
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="product of products" height="55px">
                            <td class="text-center">{{product.nro}}</td>
                            <td class="text-center">{{product.description}}</td>
                            <td class="text-center">{{product.unit_price}}</td>
                            <td class="text-center">
                                <v-btn v-if="product.nro === 1" class="me-5" icon="mdi-minus" color="secondary" @click="add_or_minus_amount_1('n')"></v-btn>
                                <v-btn v-else class="me-5" icon="mdi-minus" color="secondary" @click="add_or_minus_amount_2('n')"></v-btn>
                                <span v-if="product.nro === 1">{{val_amount_1}}</span>
                                <span v-else>{{val_amount_2}}</span>
                                <v-btn v-if="product.nro === 1" class="ms-5" icon="mdi-plus" color="secondary" @click="add_or_minus_amount_1('add')"></v-btn>
                                <v-btn v-else class="ms-5" icon="mdi-plus" color="secondary" @click="add_or_minus_amount_2('add')"></v-btn>
                            </td>
                            <td class="text-center">
                                <span v-if="product.nro === 1">{{total_price_1}}</span>
                                <span v-else>{{total_price_2}}</span>
                            </td>
                        </tr>
                    </tbody>
                </v-table>
                <v-row class="d-flex flex-row-reverse">
                    <v-col cols="12" md="2">
                        <v-text-field class="p-2" label="TOTAL" v-model="total" required>                                
                        </v-text-field>
                    </v-col>
                </v-row>
                    <div class="d-flex flex-row-reverse">
                        <v-btn class="p-2" color="primary" @click="returnList">Cancelar</v-btn>
                        <v-btn class="p-2 me-3" color="secondary" @click="confirmateCreate">Crear Boleta</v-btn>
                    </div>
                </v-form>
            </v-card>
        </div>
    </v-container>
</template>
<script>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import Swal from 'sweetalert2'

export default {

    setup() {
        const amount_1 = ref(1);
        const amount_2 = ref(1);
        const val_amount_1 = computed(() => amount_1.value);
        const val_amount_2 = computed(() => amount_2.value);
        const products = [
            {
                nro: 1,
                description: 'ZAPATOS NEGROS SOCKSO',
                unit_price: 125,
            },
            {
                nro: 2,
                description: 'ZAPATILLAS NEGRAS',
                unit_price: 150,
            },
        ]

        const add_or_minus_amount_1 = ((operation) => {
            if (operation === 'add') {
                amount_1.value = amount_1.value + 1;
            } else {
                amount_1.value = amount_1.value - 1;
            }
        })

        const add_or_minus_amount_2 = ((operation) => {
            if (operation === 'add') {
                amount_2.value = amount_2.value + 1;
            } else {
                amount_2.value = amount_2.value - 1;
            }
        })

        const total_price_1 = computed(() => amount_1.value * 125)

        const total_price_2 = computed(() => amount_2.value * 150)

        const total = computed(() => total_price_1.value + total_price_2.value)

        const router = useRouter();
        const returnList = () => {
            router.push({ name: 'list-bills' });
        }

        const confirmateCreate = () => {
            Swal.fire({
                title: 'Confirmación',
                text: 'Se ha creado correctamente la boleta',
                icon: 'success',
                confirmButtonText: 'Listo',
            }).then((result) => {

            })
            router.push({ name: 'list-bills' });
        }

        return {
            products,
            val_amount_1,
            val_amount_2,
            add_or_minus_amount_1,
            add_or_minus_amount_2,
            total_price_1,
            total_price_2,
            total,
            returnList,
            confirmateCreate

        }
    }
}
</script>
<style scoped>
.style_form_display {
    padding: 50px;
}

.table_style {
    padding: 80px;
}
</style>