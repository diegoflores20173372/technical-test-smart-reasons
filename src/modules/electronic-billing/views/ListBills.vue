<template lang="">
    <v-container>
        <div style="padding: 120px">
            <h3 style="color: black">Boletas de Venta Electrónicas</h3>
            <div class="d-flex flex-row-reverse">
                <v-btn class="p-2" color="secondary" @click.stop="goToForm">Crear Nueva Boleta</v-btn>
            </div>

            <v-card class="mt-5">
                <v-table class="table_style" fixed-header>
                    <thead>
                        <tr>
                            <th class="text-center">
                                DNI
                            </th>
                            <th class="text-center">
                                RAZÓN SOCIAL
                            </th>
                            <th class="text-center">
                                FECHA EMISIÓN
                            </th>
                            <th class="text-center">
                                TOTAL
                            </th>
                            <th class="text-center">
                                ACCIONES
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="user of users" height="55px">
                            <td class="text-center">{{user.dni}}</td>
                            <td class="text-center">{{user.business_name}}</td>
                            <td class="text-center">{{user.date_isuue}}</td>
                            <td class="text-center">{{user.total}}</td>
                            <td class="text-center">
                                <v-btn color="secondary">Imprimir Boleta</v-btn>
                                <v-btn class="ms-5" icon="mdi-trash-can-outline" color="secondary" @click.stop="deleteConfirmation"></v-btn>
                            </td>
                        </tr>
                    </tbody>
                </v-table>
            </v-card>
        </div>
        
    </v-container>
</template>
<script lang="ts">

import { useRouter } from 'vue-router';
import Swal from 'sweetalert2'

export default {
    setup() {
        const users = [
            {
                dni: 42336503,
                business_name: 'ROSA ESTHER ESCALANTE SALAS',
                date_isuue: '26/01/2021',
                total: 'S/. 348.00',
            },
            {
                dni: 42336503,
                business_name: 'ROSA ESTHER ESCALANTE SALAS',
                date_isuue: '26/01/2021',
                total: 'S/. 348.00',
            },
            {
                dni: 42336503,
                business_name: 'ROSA ESTHER ESCALANTE SALAS',
                date_isuue: '26/01/2021',
                total: 'S/. 348.00',
            },
            {
                dni: 42336503,
                business_name: 'ROSA ESTHER ESCALANTE SALAS',
                date_isuue: '26/01/2021',
                total: 'S/. 348.00',
            },
            {
                dni: 42336503,
                business_name: 'ROSA ESTHER ESCALANTE SALAS',
                date_isuue: '26/01/2021',
                total: 'S/. 348.00',
            },
        ]

        const router = useRouter();

        const goToForm = () => {
            router.push({ name: 'new-bill' })
        }

        const deleteConfirmation = () => {
            Swal.fire({
                title: 'Confirmación',
                text: '¿Seguro de eliminar la Boleta - B003-00001538?',
                icon: 'question',
                confirmButtonText: 'Si',
                showCancelButton: true,
                cancelButtonText: 'No'
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire('Confirmado', 'Se ha eliminado correctamente la boleta.', 'success')
                } 
            })
        }

        return {
            users,
            goToForm,
            deleteConfirmation

        }

    }
}
</script>
<style scoped>
.table_style {
    padding: 80px;
}
</style>