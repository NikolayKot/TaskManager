<template>
    <div class="profile-info">
        <label>
            Login
            <input type="text" placeholder="Enter your login" v-model="login">
        </label>

        <label>
            Password

            <input type="password" placeholder="Enter your password" v-model="password">
        </label>

        <div class="buttons">
            <button class="cancel-button">Cancel</button>
            
            <button @click="transform">Save</button>
        </div>
    </div>
</template>

<script>
    import SignForm from '~/mixins/SignForm.js'

    export default {
        mixins: [SignForm],
        methods: {
            transform() {
                localStorage.login = this.login
                localStorage.password = this.password
            }
        },
        mounted() {
            if (localStorage.login) {
            this.login = localStorage.login;
            }
            if (localStorage.password) {
            this.password = localStorage.password;
            }
        }
    }
</script>
