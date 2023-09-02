<template>
    <div class="content-container">
        <header class="header">
            <img src="/tasks-logo.png" alt="Header image" class="header__image">
            
            <h1 class="header__logo">Task</h1>
        </header>

        <div class="new-tasks">
            <TaskBlock v-for="taskCategory in tasksCategories" :key="taskCategory" v-bind="{ section: taskCategory.section , categotyName: taskCategory.categotyName}"/>
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
        components: {
            TaskBlock
        }
    }
</script>

<script setup>
    const tasksCategories = [
        { section: 1 , categotyName: 'Backlog'},
        { section: 2 , categotyName: 'To do'},
        { section: 3 , categotyName: 'In progress'},
        { section: 4 , categotyName: 'Tasks review'}
    ]
</script>
