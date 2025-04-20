<template>
    <v-navigation-drawer expand-on-hover rail v-model="drawer">
        <v-list v-if="status === 'authenticated'">
           <v-list-item :prepend-avatar="data.user.image" :subtitle="data.user.email" :title="data.user.name"></v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list density="compact" nav>
            <v-list-item prepend-icon="mdi-home" title="Home" value="home" to="/"></v-list-item>
            <v-list-item prepend-icon="mdi-message-text" title="Sobre" value="sobre" to="/sobre"></v-list-item>
            <v-list-item prepend-icon="mdi-swap-vertical-bold" title="Emprestimo" value="emprestimo" to="/emprestimo"></v-list-item>
            <v-list-item prepend-icon="mdi-table-account" title="Usuarios" value="usuarios" to="/usuarios"></v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

<script setup>
const { status, data } = useAuth()
const drawer = useState('drawer', ()=>true)

</script>
<style scoped></style>
