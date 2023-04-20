<template>
    <form class="form">
        <img src="/logo.png" alt="Application logo" class="logo">

        <h1 class="text">Sign Up</h1>

        <div class="box">
            
            <label class="label-text">
                Login
                
                <input :class="{active: isWrong}" type="text" placeholder="Login" v-model="login">
            </label>
        </div>

        <div class="box">
            <label class="label-text">
                Password

                <input :class="{active: isWrong}" type="password" placeholder="Password" v-model="password">
            </label>
        </div>

        <div class="box">
            <label class="label-text">
                Repeat the password

                <input :class="{active: isWrong}" type="password" placeholder="Repeat the password" v-model="repeatPassword">
            </label>
            
            <div :class="{'wrong-input': isWrong}" class="visible">Passwords do not match, check the correctness of the input.</div>
        </div>

        <button type="button" @click="register">Sign Up</button>
    </form>
</template>

<script src="~/components/registrationFormScript.js"></script>
