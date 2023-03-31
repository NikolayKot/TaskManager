<template>
    <title>Authorization</title>

    <NuxtLink to="/">
        <img src="../img/Logo.png" alt="Логотип приложения" class="logo">
    </NuxtLink>

    <div class="Container">
        <div class="LogIn">
            <form v-if="isElemVisible" class="LogInForm SignUp">
                <H2 class="FormText">Регистрация</H2>

                <div class="FormContainer">
                    <label for="Authorization" class="labelText">Логин</label>

                    <input type="text" placeholder="Логин"  class="FormInput FormText">
                </div>
                
                <div class="FormContainer">
                    <label for="Authorization" class="labelText">Пароль</label>
                
                    <input type="text" placeholder="Пароль" class="FormInput FormText">
                </div>

                <div class="FormContainer">
                    <label for="Authorization" class="labelText">Повторите пароль</label>
                
                    <input type="text" placeholder="Пароль" class="FormInput FormText">
                </div>

                <button class="FormRegButton FormButton"> 
                    <NuxtLink to="/Profile" class="FormButton FormText">Регистрация</NuxtLink>
                </button>

                <button @click="isElemVisible = !isElemVisible" class="RegButton">
                    <div class="RegLine"></div>
                    
                    <div>Войти</div>
                    
                    <div class="RegLine"></div>
                </button>
            </form>

            <form v-else class="LogInForm">
                <H2 class="FormText">Вход</H2>

                <div class="FormContainer">
                    <label for="Authorization" class="labelText">Логин</label>

                    <input type="text" placeholder="Логин"  class="FormInput FormText">
                </div>
                
                <div class="FormContainer">
                    <label for="Authorization" class="labelText">Пароль</label>
                
                    <input type="text" placeholder="Пароль" class="FormInput FormText">
                </div>

                <button class="Button FormButton"> 
                    <NuxtLink to="/Profile" class="FormButton FormText">Войти</NuxtLink>
                </button>

                <button @click="isElemVisible = !isElemVisible" class="RegButton">
                    <div class="RegLine"></div>
                    
                    <div>Регистрация</div>
                    
                    <div class="RegLine"></div>
                </button>
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