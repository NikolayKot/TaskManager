<template>
    <form class="form">
        <img src="/logo.png" alt="logotype" class="logo">

        <h1 class="text">Log In</h1>

        <div class="box">
            <label for="input" class="labelText">Login</label>

            <input  :class="{active: isLoginWrong}" type="text" placeholder="Login" v-model="login">
        </div>
        
        <div class="box">
            <label for="input" class="labelText">Password</label>
            
            <input :class="{active: isLoginWrong}" type="password" placeholder="Password" v-model="password">
            
            <div :class="{wrongInputText: isLoginWrong}" class="visible">Password or username entered incorrectly.</div>
        </div>

        <button @click="logining" type="button">Log In</button>

    </form>
</template>

<script src="./scripts/loginForm"></script>