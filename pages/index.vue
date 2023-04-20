<template>
    <div class="container">
        <div v-if="isRegistrationVisible" class="signup">
            <RegistrationForm/>

            <div class="switch-container">
                <button @click="switchForm" class="switch-button">Log In</button> 
            </div>
        </div>               
        <div v-else class="login">
            <LoginForm/>

            <div class="switch-container">
                <button @click="switchForm">Sign Up</button> 
            </div>
        </div>
    </div>
</template>

<style src="~/assets/pages/index.scss"></style>

<script>
    import LoginForm from "@/components/LoginForm.vue";
    import RegistrationForm from "@/components/RegistrationForm.vue";

    export default {
        components: {
            LoginForm,
            RegistrationForm
        },
        data: () => {
            return {
                isRegistrationVisible: false,
            }
        },
        methods: {
            switchForm() {
                this.isRegistrationVisible  =! this.isRegistrationVisible
            }
        },
        beforeMount() {
            if (localStorage.login != undefined) {
                window.location.href = '/profile'
            }
        }    
    }
</script>
