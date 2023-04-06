<template>
    <title>Authorization</title>

    <div class="Container">
        <div v-if="isElemVisible" class="SignUp">
            <form class="LogInForm ">

            <img src="../img/Logo.png" alt="Логотип приложения" class="logo">

            <H2 class="FormText">Sign Up</H2>

            <div class="FormContainer">
                <label for="Authorization" class="labelText">Login</label>
                
                <input type="text" placeholder="Login" v-model="regLogin" class="FormInput FormText">
            </div>

            <div class="FormContainer">
                <label for="Authorization" class="labelText">Password</label>

                <input  v-if="isElemCorrect" type="password" placeholder="Password" v-model="regPassword" class="FormInput FormText">
                
                <input v-else type="password" placeholder="Password" v-model="regPassword" class="FormInputWrong FormText">
            </div>

            <div class="FormContainer">
                <label for="Authorization" class="labelText">Repeat the password</label>

                <input v-if="isElemCorrect" type="password" placeholder="Repeat the password" v-model="repRegPassword" class="FormInput FormText">
                
                <div v-else>
                    <input type="password" placeholder="Repeat the password" v-model="repRegPassword" class="FormText FormInputWrong">
                    
                    <div class="wrongInputText">Passwords do not match, check the correctness of the input.</div>
                </div>
            </div>

            <button type="button" @click="registration" class="FormRegButton FormButton"> 
                <div class="FormButton FormText">Sign Up</div>
            </button>

            <div class="CreateAccount">
                <div class="CreateAccountText">Have an account ?</div>
                
                <div @click="isElemVisible = !isElemVisible">
                    <a href="#" class="AccontLink">Log In</a>
                </div>
            </div>
            </form>
        </div>            
            
        <div v-else class="LogIn">
            <form class="LogInForm">
                <img src="../img/Logo.png" alt="Логотип приложения" class="logo">

                <H2 class="FormText">Log In</H2>

                <div class="FormContainer">
                    <label for="Authorization" class="labelText">Login</label>

                    <input v-if="isLoginCorrect" type="text" placeholder="Login" v-model="login" class="FormInput FormText">
                    
                    <div v-else>
                        <input type="text" placeholder="Login" v-model="login" class="FormInputWrong FormText">
                    </div>
                </div>
                
                <div class="FormContainer">
                    <label for="Authorization" class="labelText">Password</label>
                    
                    <input v-if="isLoginCorrect" type="password" placeholder="Password" v-model="password" class="FormInput FormText">
                    
                    <div v-else>
                        <input type="password" placeholder="Password" v-model="password" class="FormInputWrong FormText">
                    
                        <div class="wrongInputText">Incorrect login or password.</div>
                    </div>
                </div>

                <button v-on:click="inlet" type="button" class="Button FormButton"> 
                    <div class="FormButton FormText">Log In</div>
                </button>

                <div class="CreateAccount">
                    <div class="CreateAccountText">No account ?</div>
                    
                    <div @click="isElemVisible = !isElemVisible">
                        <a href="#" class="AccontLink">Create an account</a>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<style>

@import url(../styles/index.scss);

</style>

<script src="../scripts/index.js"></script>

