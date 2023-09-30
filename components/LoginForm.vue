<template>
    <form class="form">
        <img src="/logo.png" alt="Application logo" class="logo">

        <h1 class="text">Log In</h1>

        <div class="form-row">
            <label class="label-text">
                Login

                <input :class="{active: isWrong}" type="text" placeholder="Fill in the login" v-model="login">
            </label>
        </div>
        
        <div class="form-row">
            <label class="label-text">
                Password
            
                <input :class="{active: isWrong}" type="password" placeholder="Fill in the password" v-model="password">
            </label>
            
            <div :class="{'wrong-input': isWrong}" class="visible">Password or username entered incorrectly.</div>
        </div>

        <button @click="logIn" type="button">Log In</button>
    </form>
</template>

<script>
    import SignForm from '~/mixins/SignForm.js'

    export default {
        mixins: [SignForm],
        methods: {
            logIn() {
                if (this.isLoginDataWrong) {
                    this.isWrong = true;
                    return;
                }
                this.isWrong = false;
                window.location.href = '/profile'
            }
        },
        computed: {
            isLoginDataWrong() {
                if (this.login != localStorage.login) {
                    return true
                }
                else if (this.password != localStorage.password) {
                    return true
                }
                else {
                    return false
                }
            }
        }
    }
</script>
