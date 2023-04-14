<template>
    <div class="container">
        <div v-if="isRegistrationVisible" class="signUp">
            <registrationForm/>

            <button @click="registrationVisible">Переключить</button>
        </div>            
            
        <div v-else class="logIn">
           <loginForm/>

           <button @click="registrationVisible">Переключить</button> 
        </div>
    </div>
</template>

<style src="~/assets/index.css"></style>

<script src="./scripts/index.js"></script>

