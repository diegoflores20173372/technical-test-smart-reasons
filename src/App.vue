<template>
  <v-app>
    <router-view></router-view>
  </v-app>
</template>

<script>
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';

export default {
  setup() {
    const router = useRouter();

    const pushToElectronicBilling = async () => {
      router.push({ name: 'list-bills' });
    }

    onMounted(() => {
      pushToElectronicBilling();
    })

  }
}


</script>
