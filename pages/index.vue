<template>
    <div class="container">
        <div v-if="isRegistrationVisible" class="signup">
            <RegistrationForm/>

            <button @click="switchForm">switchForm</button>
        </div>               
        <div v-else class="login">
           <LoginForm/>

           <button @click="switchForm">switchForm</button> 
        </div>
    </div>
</template>

<style src="~/assets/pages/index.scss"></style>

<script src="~/pages/indexScript.js"></script>
