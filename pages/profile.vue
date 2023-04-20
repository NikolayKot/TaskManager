<template>
    <button> 
        <NuxtLink to="/">Home</NuxtLink>
    </button>
</template>

<script>
    export default {
        beforeMount() {
            if (localStorage.login == undefined || localStorage.login == ' ') {
                window.location.href = '/'
            }
        }
    }
</script>
