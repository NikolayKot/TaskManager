<template>
    <title>Authorization</title>

    <NuxtLink to="/">
        <img src="../img/Logo.png" alt="Логотип приложения" class="logo">
    </NuxtLink>

    <div class="Container">
        <form class="LogIn">
            <H2 class="FormText">Вход</H2>
            
            <label for="Authorization" class="labelText">Логин</label>

            <input type="text" placeholder="Логин"  class="FormInput FormText">

            <label for="Authorization" class="labelText">Пароль</label>
            
            <input type="text" placeholder="Пароль" class="FormInput FormText">
            
            <button class="Button FormButton"> 
                <NuxtLink to="/Profile" class="FormButton FormText">Войти</NuxtLink>
            </button>
        </form>
    </div>
</template>

<style>

@import url(../styles/index.scss);

</style>