<template>
    <form class="form">

        <img src="/logo.png" alt="logotype" class="logo">

        <h1 class="text">Sign Up</h1>

        <div class="box">
            <label for="input" class="labelText">Login</label>
            
            <input :class="{active: isRegistrationWrong}" type="text" placeholder="Login" v-model="registrationLogin">
        </div>

        <div class="box">
            <label for="input" class="labelText">Password</label>

            <input  :class="{active: isRegistrationWrong}" type="password" placeholder="Password" v-model="registrationPassword">
        </div>

        <div class="box">
            <label for="input" class="labelText">Repeat the password</label>

            <input :class="{active: isRegistrationWrong}" type="password" placeholder="Repeat the password" v-model="repeatRegistrationPassword">
            
            <div :class="{wrongInputText: isRegistrationWrong}" class="visible">Passwords do not match, check the correctness of the input.</div>
        </div>

        <button type="button" @click="register">Sign Up</button>

    </form>
</template>

<script src="./scripts/registrationForm"></script>