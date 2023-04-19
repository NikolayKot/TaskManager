<template>
    <form class="form">
        <img src="/logo.png" alt="Application logo" class="logo">

        <h1 class="text">Log In</h1>

        <div class="box">
            <label class="label-text">
                Login

                <input :class="{active: isLoginWrong}" type="text" placeholder="Login" v-model="login">
            </label>
        </div>
        
        <div class="box">
            <label class="label-text">
                Password
            
                <input :class="{active: isLoginWrong}" type="password" placeholder="Password" v-model="password">
            </label>
            
            <div :class="{'wrong-input': isLoginWrong}" class="visible">Password or username entered incorrectly.</div>
        </div>

        <button @click="logIn" type="button">Log In</button>
    </form>
</template>
<script src="~/components/loginFormScript.js"></script>
