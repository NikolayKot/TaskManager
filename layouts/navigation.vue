<template>
    <div class="container">
        <div :class="{'nav-bar-active': isBurgerActive}" class="nav-bar">
            <img src="/logo.png" alt="Application logo" class="application-logo">

            <div class="navigation-icons">
                <a v-for="page in pages" :key="page" :class="['navigation-icon', {active: windowLocation == `/${page}`}]" :href="`/${page}`">
                    <img :src= "`/${page}.svg`" :alt="`${page} icon`" class="nevigation-icon-picture">
                </a>
            </div>
        </div>
 
        <div class="content">
            <div class="search-bar">
                <div class="burger-menu">
                    <img v-if="isBurgerActive" @click="interactBurgerMenu" src="/crossIcon.svg" alt="close burger menu icon">
                    
                    <img v-else @click="interactBurgerMenu" src="/burgerMenuIcon.svg" alt="burger menu icon">
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
                pages: [
                    'profile',
                    'tasks',
                ]
            }
        },
        methods: {
            showLogoutButton() {
                this.isRotating  =! this.isRotating
            },
            interactBurgerMenu() {
                this.isBurgerActive  =! this.isBurgerActive
            },
            logout() {
                localStorage.clear();
                window.location.href = '/'
            }
        },
        mounted() {
            this.windowLocation = window.location.pathname
        }
    }
</script>
