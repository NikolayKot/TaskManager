<template>
    <title>Task Manager</title>

    <div class="Parent">
        <div class="child">
            <form class="LogIn">
                <H2 class="FormText">Вход</H2>
                
                <input type="text" placeholder="Логин"  class="FormInput">
                
                <input type="text" placeholder="Пароль" class="FormInput">
                
                <button class="Button FormButton"> 
                    <NuxtLink to="/Profile" class="FormButton">Войти</NuxtLink>
                </button>
            </form>
        </div>
    </div>
</template>

<style>

@import url(../styles/index.scss);

</style>