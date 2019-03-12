<template>
    <div class="vuex-container">
        <h1>Vuex - State Management</h1>
        <div v-if="!user">
            <div>Login</div>
            <div>Username:</div>
            <input v-model="username" type="text">
            <div>Password:</div>
            <input v-model="password" type="password">
            <button @click="login()">Login</button>
        </div>
        <div v-if="user">
            <div>Welcome, {{ user.username }}</div>
            <button @click="logout()">Logout</button>
        </div>
    </div>
</template>

<script>
/* eslint-disable */

export default {
    data() {
        return {
            username: 'jaredpotter',
            password: 'password',
        };
    },
    computed: {
        user() {
            return this.$store.getters.user;
        }
    },
    methods: {
        login() {
            let payload = {
                username: this.username,
                password: this.password,
            };

            this.$store.dispatch('login', payload);
        },
        logout() {
            this.$store.dispatch('logout');
        }
    }
}
</script>
