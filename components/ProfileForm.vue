<template>
    <div class="profile-info">
        <div>
            <label for="login-input" class="field-lable">Login</label>
            
            <input type="text" placeholder="Enter your login" v-model="login" id="login-input" class="field-input">
        </div>

        <div>
            <label for="password-input" class="field-lable">Password</label>
            
            <input type="password" placeholder="Enter your password" v-model="password" id="password-input" class="field-input">
        </div>

        <div class="buttons">
            <button class="cancel-button">Cancel</button>
            
            <button @click="save" class="save-button">Save</button>
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
