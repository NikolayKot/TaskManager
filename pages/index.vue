<template>
    <title>Authorization</title>

    <div class="Container">
        <div class="LogIn">            
            <form v-if="isElemVisible" class="LogInForm SignUp">

                <img src="../img/Logo.png" alt="Логотип приложения" class="logo">

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
                    <NuxtLink to="/Profile" class="FormButton FormText">Зарегистрироваться</NuxtLink>
                </button>

                <div class="CreateAccount">
                    <div class="CreateAccountText">Есть аккаунт ?</div>
                    
                    <div @click="isElemVisible = !isElemVisible">
                        <a href="#" class="AccontLink">Войти</a>
                    </div>
                </div>
            </form>
            
            
            <form v-else class="LogInForm">
                <img src="../img/Logo.png" alt="Логотип приложения" class="logo">

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

                <div class="CreateAccount">
                    <div class="CreateAccountText">Нет аккаунта ?</div>
                    
                    <div @click="isElemVisible = !isElemVisible">
                        <a href="#" class="AccontLink">Создайть аккаунт</a>
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