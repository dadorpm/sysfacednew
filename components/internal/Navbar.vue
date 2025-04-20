<template>
    <v-app-bar scroll-behavior="fade-image" color="primary" scroll-threshold="1000">
        <template v-slot:prepend>
          <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        </template>
        <v-app-bar-title>SysSEI</v-app-bar-title>
        <v-spacer></v-spacer>
        <v-btn icon>
            <v-icon>mdi-magnify</v-icon>
        </v-btn>
        <v-btn icon>
            <v-icon>mdi-heart</v-icon>
        </v-btn>
        <v-menu v-if="status === 'authenticated'">
            <template v-slot:activator="{ props }">
                <v-btn icon v-bind="props">
                    <v-avatar>
                       <v-img :alt="data.user.name" :src="data.user.image"></v-img>
                    </v-avatar>
                </v-btn>
            </template>
            <v-list>
                <v-list-item v-for="(item, index) in itensLogado" :key="index" :value="index">
                    <v-list-item-title @click="item.acao">{{ item.title }}<v-icon class="mx-1" size="small">{{ item.icon }}</v-icon></v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>
        <v-menu v-else>
            <template v-slot:activator="{ props }">
                <v-btn icon v-bind="props">
                    <v-icon icon="mdi-account"></v-icon>
                </v-btn>
            </template>
            <v-list>
                <v-list-item v-for="(item, index) in itensDeslogado" :key="index" :value="index">
                    <v-list-item-title @click="item.acao">{{ item.title }}<v-icon class="mx-1" size="small">{{ item.icon }}</v-icon></v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>
    </v-app-bar>
</template>

<script setup>
    const drawer = useState('drawer',()=>true)

    const { data, signOut, status} = useAuth();
    const router = useRouter();
    const itensLogado = [
        { title: 'Sair', icon: 'mdi-logout', acao: () => { signOut({ callbackUrl: '/' }); router.push('/'); } },
    ];
    const itensDeslogado = [
        { title: 'Login',icon: 'mdi-login', acao: () => { router.push('/login'); } },

    ];
</script>
