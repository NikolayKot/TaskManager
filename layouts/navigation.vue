<template>
    <div class="container">
        <div :class="{'nav-bar-active': isBurgerActive}" class="nav-bar">
            <img src="/logo.png" alt="Application logo" class="application-logo">

            <ul class="navigation-icons">
                <li :class="{active: windowLocation == '/profile'}" class="navigation-icon" @click="goToProfile">
                    <img src="/settings.svg" alt="Settings icon" class="nevigation-icon-picture">
                </li>

                <li :class="{active: windowLocation == '/message'}" class="navigation-icon">
                    <img src="/message.svg" alt="Message icon" class="nevigation-icon-picture">
                </li>

                <li :class="{active: windowLocation == '/tasks'}" class="navigation-icon" @click="goToTasks">
                    <img src="/tasks.svg" alt="Tasks icon" class="nevigation-icon-picture">
                </li>
            </ul>
        </div>
 
        <div class="content">
            <div class="search-bar">
                <div @click="interactBurgerMenu" class="burger-menu">
                    <div :class="{'burger-wand-top': isBurgerActive}" class="burger-wand"></div>
                    <div :class="{'burger-wand-middle': isBurgerActive}" class="burger-wand"></div>
                    <div :class="{'burger-wand-bottom': isBurgerActive}" class="burger-wand"></div>
                </div>

                <div class="search-container">
                    <div class="search">
                        <input type="text" placeholder="Search anything..." class="search-field">
                        
                        <img src="/lupe.png" alt="Lupe icon" class="lupe-icon">
                    </div>
                </div>

                <div @click="showLogoutButton" class="exit">
                    <div :class="{active: isRotating}" class="wand"></div>
                    
                    <div :class="{'active-wand' : isRotating}" class="wand exit-wand"></div>
                </div>

                <div :class="{'exit-button-active': isRotating}" class="exit-container">
                    <div class="exit-text" @click="logout">Log Out</div>
                </div>
            </div>

            <slot/>
        </div>
    </div>
</template>
<style src="~/assets/navigation.scss"></style>

<script>
    export default {
        data: () => {
            return {
                windowLocation: '',
                isRotating: false,
                isBurgerActive: false,
            }
        },
        methods: {
            showLogoutButton() {
                this.isRotating  =! this.isRotating
            },
            logout() {
                localStorage.clear();
                window.location.href = '/'
            },
            interactBurgerMenu() {
                this.isBurgerActive  =! this.isBurgerActive
            },
            goToTasks() {
                window.location.href = '/tasks'
            },
            goToProfile() {
                window.location.href = '/profile'
            }
        },
        mounted() {
            this.windowLocation = window.location.pathname
        },
    }
</script>
