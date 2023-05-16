<template>
    <div class="profile-info">
        <div class="full-name">
            <div class="name">
                <label for="first-name">First name</label>
                
                <input type="text" placeholder="Enter your first name" v-model="name" id="first-name">
            </div>

            <div class="name">
                <label for="last-name">Last name</label>

                <input type="text" placeholder="Enter your last name" v-model="surname" id="last-name">
            </div>
        </div>

        <div class="email-field">
            <div class="email-container">
                <label for="email-input">Email</label>
                
                <div class="email" id="email-input">
                    <img src="/email.png" alt="Значёк email" class="searchIcon">

                    <input type="text" placeholder="Enter your email" v-model="email">
                </div>
            </div>
            
            <div class="email-container">
                <label for="role">Role</label>
                
                <div class="email" id="role">
                    <input type="text" placeholder="Enter your role" v-model="role" class="aaa">
                </div>
            </div>
        </div>

        <div class="buttons">
            <button class="cancel-button">Cancel</button>
            
            <button @click="save">Save</button>
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
            save() {
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

<style src="~/assets/detailsForm.scss"></style>
