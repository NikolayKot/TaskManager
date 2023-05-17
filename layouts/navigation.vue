<template>
    <div class="container">
        <div class="nav-bar">
            <img src="/logo.png" alt="Application logo" class="application-logo">

            <ul class="navigation-icons">
                <li :class="{active: profileActive}" class="navigation-icon">
                    <img src="/settings.svg" alt="Settings icon" class="nevigation-icon-picture">
                </li>

                <li :class="{active: messageActive}" class="navigation-icon">
                    <img src="/message.svg" alt="Message icon" class="nevigation-icon-picture">
                </li>

                <li :class="{active: tasksActive}" class="navigation-icon">
                    <img src="/tasks.svg" alt="Tasks icon" class="nevigation-icon-picture">
                </li>
            </ul>
        </div>
 
        <div class="content">
            <div class="search-bar">
                <div class="search-container">
                    <div class="search">
                        <input type="text" placeholder="Search anything..." class="search-field">
                        
                        <img src="/lupe.png" alt="Lupe icon" class="lupe-icon">
                    </div>
                </div>

                <div @click="quit" class="exit">
                    <div :class="{active: rotation}" class="wand"></div>
                    
                    <div :class="{'active-wand' : rotateWand}" class="wand exit-wand"></div>
                </div>

                <div :class="{'exit-button-active': rotation}" class="exit-container">
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
                profileActive: false,
                messageActive: false,
                tasksActive: false,
                rotation: false,
                rotateWand: false,
            }
        },
        methods: {
            quit() {
                this.rotation  =! this.rotation
                this.rotateWand  =! this.rotateWand
            },
            logout() {
                localStorage.clear();
                window.location.href = '/'
            }
        },
        mounted() {
            if (window.location.pathname == '/profile'){
                this.profileActive = true
            }
            else if (window.location.pathname == '/tasks'){
                this.tasksActive = true
            }
            else if (window.location.pathname == '/message'){
                this.messageActive = true
            }
            else {
                this.profileActive = false
                this.tasksActive = false
                this.messageActive = false
            };
        },
    }
</script>
