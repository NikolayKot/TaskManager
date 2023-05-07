<template>
    <div class="profile-info">
        <div class="full-name">
            <label>
                First name
                
                <input type="text" placeholder="Enter your first name" v-model="name">
            </label>

            <label>
                Last name
                
                <input type="text" placeholder="Enter your last name" v-model="surname">
            </label>
        </div>

        <div class="email-field">
            <label>
                Email
                
                <div class="email">
                    <img src="/email.png" alt="Значёк email" class="searchIcon">

                    <input type="text" placeholder="Enter your email" v-model="email">
                </div>
            </label>
            
            <label>
                Role
                
                <div class="email">
                    <input type="text" placeholder="Enter your role" v-model="role">
                </div>
            </label>
        </div>

        <div class="buttons">
            <button class="cancel-button">Cancel</button>
            
            <button @click="transform">Save</button>
        </div>
    </div>
</template>

<script>
    export default {
        data: () => {
            return {
                name: '',
                surname: '',
                email: '',
                role: ''
            }
        },
        methods: {
            transform() {
                localStorage.name = this.name
                localStorage.surname = this.surname
                localStorage.email = this.email
                localStorage.role = this.role
            }
        },
        mounted() {
            if (localStorage.name) {
            this.name = localStorage.name;
            }
            if (localStorage.surname) {
            this.surname = localStorage.surname;
            }
            if (localStorage.email) {
            this.email = localStorage.email;
            }
            if (localStorage.role) {
            this.role = localStorage.role;
            }
        }
    }
</script>
