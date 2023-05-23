<template>
    <div class="profile-info">
        <div class="full-name">
            <div class="name">
                <label for="first-name-input" class="field-lable">First name</label>
                
                <input type="text" placeholder="Enter your first name" v-model="name" id="first-name-input" class="field-input">
            </div>

            <div class="name">
                <label for="last-name-input" class="field-lable">Last name</label>

                <input type="text" placeholder="Enter your last name" v-model="surname" id="last-name-input" class="field-input">
            </div>
        </div>

        <div class="email-field">
            <div class="email-container">
                <label for="email" class="field-lable email-label">Email</label>
                
                <div class="email" id="email">
                    <img src="/email.png" alt="Значёк email" class="search-icon">

                    <input type="text" placeholder="Enter your email" v-model="email" class="email-input">
                </div>
            </div>
            
            <div class="email-container">
                <label for="role" class="field-lable email-label">Role</label>
                
                <div class="email" id="role">
                    <input type="text" placeholder="Enter your role" v-model="role" class="email-input">
                </div>
            </div>
        </div>

        <div class="buttons">
            <button class="cancel-button">Cancel</button>
            
            <button @click="save" class="save-button">Save</button>
        </div>
    </div>
</template>
<style src="~/assets/components/detailsForm.scss"></style>

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
