<template>
  <div>
    <h1 class="text-h2">Login</h1>
    <v-img class="mx-auto my-6" max-width="120" src="/image/logo/logofaced.png"/>
    <v-card class="mx-auto pa-12 pb-8" elevation="8" max-width="400" rounded="lg">
     <!--  <div class="text-subtitle-1 text-medium-emphasis">E-mail</div>

      <v-text-field density="compact" placeholder="E-mail" prepend-inner-icon="mdi-email-outline"
        variant="outlined"></v-text-field>

      <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">
        Senha

        <a class="text-caption text-decoration-none text-blue" href="#" rel="noopener noreferrer" target="_blank">
          Esqueceu a senha?</a>
      </div>

      <v-text-field :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'" :type="visible ? 'text' : 'password'"
        density="compact" placeholder="Senha" prepend-inner-icon="mdi-lock-outline" variant="outlined"
        @click:append-inner="visible = !visible"></v-text-field>

      <v-btn class="mb-8" color="blue" size="large" variant="tonal" block>
        Entrar
      </v-btn> -->
      <v-divider class="px-3"> <div class="text-caption font-weight-medium text-disabled ">Entre com sua conta:</div></v-divider>
      <div class="d-flex flex-wrap ga-2 py-3">
          <v-btn @click="signIn('google', { callbackUrl: '/usuarios/profile', redirect: true })" rounded="lg" class="mx-auto" size="x-large">
            <Icon name="logos:google" />
          </v-btn>
          <v-btn @click="signIn('github', { callbackUrl: '/usuarios/profile', redirect: true })" rounded="lg" class="mx-auto" size="x-large">
            <Icon name="logos:github-icon" /> git
          </v-btn>
      </div>
      <!-- <v-card-text class="text-center">
        <a class="text-blue text-decoration-none" href="#" rel="noopener noreferrer" target="_blank">
          Cadastrar-se?<v-icon icon="mdi-chevron-right"></v-icon>
        </a>
      </v-card-text> -->
    </v-card>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  auth: false
})
const visible = ref(false)
const {signIn, getProviders} = useAuth()
</script>

<style></style>