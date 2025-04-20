<template>
  <div>
    <h1 class="text-h2">Usuários</h1>
    <v-data-table-virtual :headers="headers" :items="virtualBoats" height="400"
      item-value="name"></v-data-table-virtual>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const headers = ref([
  { title: 'nome', align: 'start', key: 'nome' },
  { title: 'email', align: 'end', key: 'email' },
  { title: 'criado', align: 'end', key: 'criado' }
])
const virtualBoats = ref([
{
            nome: 'Speedster',
            email: 35,
            criado: 22,
            price: 300000,
            year: 2021,
          },
          {
            nome: 'OceanMaster',
            email: 25,
            criado: 35,
          },
          {
            nome: 'Voyager',
            email: 20,
            criado: 45,
          }
])
</script>

<style></style>