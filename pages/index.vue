<template>
    <title>Authorization</title>

    <div class="Container">
        <div v-if="isElemVisible" class="SignUp">
            <form class="LogInForm ">

            <img src="../img/Logo.png" alt="Логотип приложения" class="logo">

            <H2 class="FormText">Sign Up</H2>

            <div class="FormContainer">
                <label for="Authorization" class="labelText">Login</label>

                <input type="text" placeholder="Login"  class="FormInput FormText">
            </div>

            <div class="FormContainer">
                <label for="Authorization" class="labelText">Password</label>

                <input type="text" placeholder="Password" class="FormInput FormText">
            </div>

            <div class="FormContainer">
                <label for="Authorization" class="labelText">Repeat the password</label>

                <input type="text" placeholder="Password" class="FormInput FormText">
            </div>

            <button class="FormRegButton FormButton"> 
                <NuxtLink to="/Profile" class="FormButton FormText">Sign Up</NuxtLink>
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

                    <input type="text" placeholder="Login"  class="FormInput FormText">
                </div>
                
                <div class="FormContainer">
                    <label for="Authorization" class="labelText">Password</label>
                
                    <input type="text" placeholder="Password" class="FormInput FormText">
                </div>

                <button class="Button FormButton"> 
                    <NuxtLink to="/Profile" class="FormButton FormText">Log In</NuxtLink>
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

<script>
    export default {
        data: () => {
            return {
                isElemVisible: false
            }
            
        }
    }
</script>