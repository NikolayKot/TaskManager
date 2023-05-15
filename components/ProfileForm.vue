<template>
    <div class="profile-info">
        <div>
            <label for="login">Login</label>
            
            <input type="text" placeholder="Enter your login" v-model="login" id="login">
        </div>

        <div>
            <label>Password</label>
            
            <input type="password" placeholder="Enter your password" v-model="password">
        </div>

        <div class="buttons">
            <button class="cancel-button">Cancel</button>
            
            <button @click="save">Save</button>
        </div>
    </div>
</template>

<script>
    import SignForm from '~/mixins/SignForm.js'

    export default {
        mixins: [SignForm],
        methods: {
            save() {
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
