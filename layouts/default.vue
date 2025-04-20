<template>
    <v-app>
        <InternalDrawer />
        <InternalNavbar />
        <v-main class="d-flex justify-center">
            <slot></slot>
        </v-main>
        <InternalFooter />
    </v-app>
</template>