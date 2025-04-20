<template>
  <div>
    <h1 class="text-h2 py-10">Perfil</h1>
    <div class="py-4">
      <v-avatar color="info" size="x-large" class="">
        <v-icon v-if="!data" icon="mdi-account-circle"></v-icon>
        <v-img v-else :alt="data?.user?.name" :src="data?.user?.image"></v-img>
      </v-avatar>
      <div v-if="data?.user?.name" class="py-2">Nome: {{ data?.user?.name }}</div>
      <div v-if="data?.user?.email" class="py-2">E-mail: {{ data?.user?.email }}</div>
    </div>



  </div>
</template>

<script lang="ts" setup>
const { data } = useAuth()
</script>

<style></style>