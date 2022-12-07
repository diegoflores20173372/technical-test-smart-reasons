<template>
    <v-app-bar color="primary">
        <v-app-bar-nav-icon @click.stop="(drawNavDrawer = !drawNavDrawer)"></v-app-bar-nav-icon>
        <v-toolbar-title>Sistema de Facturación Electrónica</v-toolbar-title>
        <v-spacer></v-spacer>
        <img class="endImage"
            src="https://smartclic.pe/wp-content/uploads/2021/09/Logo-Oficial-Smart-Clic-blanco.png" />
    </v-app-bar>
    <v-navigation-drawer width="300" color="primary" v-model="drawNavDrawer" temporary>
        <v-list>
            <v-list-item>
                <v-list-item-avatar>
                    <v-img class="user_img"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZPwe5d-GUlhKYcaBAp7BcDndV_cLAO3GGull63fFlJ58Ey8q_R7Sme0Qz2kd9ARhh3A8&usqp=CAU"></v-img>
                </v-list-item-avatar>
            </v-list-item>
            <div class="text_style">
                <b>user@smartreasons.com</b><br />
                <small>Administrador</small>
            </div>
            <v-list density="compact" nav>
                <v-list-item prepend-icon="mdi-cash" title="Facturación Electrónica" value=""></v-list-item>
            </v-list>
        </v-list>
    </v-navigation-drawer>

</template>
<script>

import { ref } from 'vue';

export default {
    setup() {
        const drawNavDrawer = ref(false);

        return {
            drawNavDrawer,

        }
    }
}
</script>
<style scoped>
.endImage {
    width: 70px;
    height: 40px;
    margin-right: 30px;
}

.user_img {
    border-radius: 50%;
    width: 70%;
    justify-content: center;
    margin-left: 40px;
}

.text_style {
    text-align: center;
}
</style>
