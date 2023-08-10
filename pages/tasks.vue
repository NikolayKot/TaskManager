<template>
    <div class="content-container">
        <header class="header">
            <img src="/tasks-logo.png" alt="Header image" class="header__image">
            
            <h1 class="header__logo">Task</h1>
        </header>

        <div class="new-tasks">
            <TaskBlock v-bind="{ section: 1 , categotyName: 'Backlog'}"/>

            <TaskBlock v-bind="{ section: 2 , categotyName: 'To do'}"/>

            <TaskBlock v-bind="{ section: 3 , categotyName: 'In progress'}"/>

            <TaskBlock v-bind="{ section: 4 , categotyName: 'Tasks review'}"/>
        </div>
    </div>
</template>

<style src="~/assets/pages/tasks.scss"></style>

<script>
    import TaskBlock from "@/components/TaskBlock.vue";

    definePageMeta({
        layout: "navigation",
    });
 
    export default {
        name: 'App',
        components: {
            TaskBlock
        }
    }
</script>
