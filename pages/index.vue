<template>
  <div>
    <h1>Voce esta {{ status }}</h1>
    <button v-if="status === 'authenticated'" @click="signOut()"> deslogar</button>
    <button v-else @click="signIn('google')">logar</button>
    <button v-if="status === 'authenticated'" @click="signOut()"> deslogar</button>
    <button v-else @click="signIn('github')">logar</button>
  </div>
</template>

<script lang="ts" setup>
    const {status, signIn, signOut} = useAuth();
</script>

<style>

</style>