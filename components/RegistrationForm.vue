<template>
    <form class="form">
        <img src="/logo.png" alt="Application logo" class="logo">

        <h1 class="text">Sign Up</h1>

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
        </div>

        <div class="form-row">
            <label class="label-text">
                Repeat the password

                <input :class="{active: isWrong}" type="password" placeholder="Fill in the password again" v-model="repeatPassword">
            </label>
            
            <div :class="{'wrong-input': isWrong}" class="visible">Passwords do not match, check the correctness of the input.</div>
        </div>

        <button type="button" @click="register">Sign Up</button>
    </form>
</template>

<script>
    import SignForm from '~/mixins/SignForm.js'
    
    export default {
        mixins: [SignForm],  
        data: () => {
            return {
                repeatPassword: '',
            }
        },
        methods: {
            register() {
                if (this.isRegistrationDataWrong) {
                    this.isWrong = true;
                    return;
                }
                localStorage.login = this.login.trim();
                localStorage.password = this.password.trim();
                this.isWrong = false;
                window.location.href = '/profile';
            },
            
        },
        computed: {
            isRegistrationDataWrong() {
                if (this.password != this.repeatPassword) {
                    return true
                }
                else if (this.login.trim() == '' || this.password.trim() == '') {
                    return true
                }
                else {
                    return false
                }
            }
        }
    }
</script>
