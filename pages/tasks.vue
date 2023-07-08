<template>
    <div class="content-container">
        <header class="header">
            <img src="/tasks-logo.png" alt="Header image" class="header__image">
            
            <h1 class="header__logo">Task</h1>
        </header>

        <div class="new-tasks">
            <div>
                <div class="new-tasks__creater">
                    Backlog
    
                    <img @click="showModal(); catchbacklogId()" src="/new-tasks.png" alt="Image to create new task" class="new-tasks__image">
                </div>

                <ul class="new-tasks__task-list">
                    <li v-for="task in tasksList" :key="task.id" v-show="task.sectionId  === 1"  class="new-tasks__task-box"> 
                        <div v-if="task.tag === 'Design'" class="new-tasks__design-tag__color new-tasks__tags">{{ task.tag }}</div>
                        
                        <div v-if="task.tag === 'Planning'" class="new-tasks__planning-tag__color new-tasks__tags">{{ task.tag }}</div>
                        
                        <div v-if="task.tag === 'Research'" class="new-tasks__research-tag__color new-tasks__tags">{{ task.tag }}</div>
                        
                        <div v-if="task.tag === 'Content'" class="new-tasks__content-tag__color new-tasks__tags">{{ task.tag }}</div>
                        
                        <div class="new-tasks__task-title">{{ task.title }}</div>
                        
                        <div class="new-tasks__task-description">{{ task.description }}</div>

                        <div class="new-tasks__task-date">{{ new Date (task.createdAt).toLocaleString('en-US', { month: 'short' }) }} {{ new Date (task.createdAt).getDate() }}, {{ new Date (task.createdAt).getFullYear() }}</div>
                    </li>
                </ul>
            </div>

            <div>
                <div class="new-tasks__creater">
                    To do
    
                    <img @click="showModal(); catchtodoId()" src="/new-tasks.png" alt="Image to create new task" class="new-tasks__image">
                </div>

                <ul class="new-tasks__task-list">
                    <li v-for="task in tasksList" :key="task.id" v-show="task.sectionId  === 2" class="new-tasks__task-box"> 
                        <div v-if="task.tag === 'Design'" class="new-tasks__design-tag__color new-tasks__tags">{{ task.tag }}</div>
                        
                        <div v-if="task.tag === 'Planning'" class="new-tasks__planning-tag__color new-tasks__tags">{{ task.tag }}</div>
                        
                        <div v-if="task.tag === 'Research'" class="new-tasks__research-tag__color new-tasks__tags">{{ task.tag }}</div>
                        
                        <div v-if="task.tag === 'Content'" class="new-tasks__content-tag__color new-tasks__tags">{{ task.tag }}</div>
                        
                        <div class="new-tasks__task-title">{{ task.title }}</div>
                        
                        <div class="new-tasks__task-description">{{ task.description }}</div>

                        <div class="new-tasks__task-date">{{ new Date (task.createdAt).toLocaleString('en-US', { month: 'short' }) }} {{ new Date (task.createdAt).getDate() }}, {{ new Date (task.createdAt).getFullYear() }}</div>
                    </li>
                </ul>
            </div>

            <div>
                <div class="new-tasks__creater">
                    In progress
    
                    <img @click="showModal(); catchinprogresId()" src="/new-tasks.png" alt="Image to create new task" class="new-tasks__image">
                </div>

                <ul class="new-tasks__task-list">
                    <li v-for="task in tasksList" :key="task.id" v-show="task.sectionId  === 3" class="new-tasks__task-box"> 
                        <div v-if="task.tag === 'Design'" class="new-tasks__design-tag__color new-tasks__tags">{{ task.tag }}</div>
                        
                        <div v-if="task.tag === 'Planning'" class="new-tasks__planning-tag__color new-tasks__tags">{{ task.tag }}</div>
                        
                        <div v-if="task.tag === 'Research'" class="new-tasks__research-tag__color new-tasks__tags">{{ task.tag }}</div>
                        
                        <div v-if="task.tag === 'Content'" class="new-tasks__content-tag__color new-tasks__tags">{{ task.tag }}</div>
                        
                        <div class="new-tasks__task-title">{{ task.title }}</div>
                        
                        <div class="new-tasks__task-description">{{ task.description }}</div>

                        <div class="new-tasks__task-date">{{ new Date (task.createdAt).toLocaleString('en-US', { month: 'short' }) }} {{ new Date (task.createdAt).getDate() }}, {{ new Date (task.createdAt).getFullYear() }}</div>
                    </li>
                </ul>
            </div>
            
            <div>
                <div class="new-tasks__creater">
                    Tasks review
    
                    <img @click="showModal(); catchtasksReviewId()" src="/new-tasks.png" alt="Image to create new task" class="new-tasks__image">
                </div>

                <ul class="new-tasks__task-list">
                    <li v-for="task in tasksList" :key="task.id" v-show="task.sectionId  === 4" class="new-tasks__task-box"> 
                        <div v-if="task.tag === 'Design'" class="new-tasks__design-tag__color new-tasks__tags">{{ task.tag }}</div>
                        
                        <div v-if="task.tag === 'Planning'" class="new-tasks__planning-tag__color new-tasks__tags">{{ task.tag }}</div>
                        
                        <div v-if="task.tag === 'Research'" class="new-tasks__research-tag__color new-tasks__tags">{{ task.tag }}</div>
                        
                        <div v-if="task.tag === 'Content'" class="new-tasks__content-tag__color new-tasks__tags">{{ task.tag }}</div>
                        
                        <div class="new-tasks__task-title">{{ task.title }}</div>
                        
                        <div class="new-tasks__task-description">{{ task.description }}</div>

                        <div class="new-tasks__task-date">{{ new Date (task.createdAt).toLocaleString('en-US', { month: 'short' }) }} {{ new Date (task.createdAt).getDate() }}, {{ new Date (task.createdAt).getFullYear() }}</div>
                    </li>
                </ul>
            </div>
        </div>
    </div>

    <modal-window ref="modal"></modal-window>
</template>

<style src="~/assets/pages/tasks.scss"></style>

<script>
    import ModalWindow from '@/components/modal-window.vue'
    import axios from 'axios'

    definePageMeta({
        layout: "navigation",
    });
 
    export default {
        name: 'App',
        data() {
            return {
                tasksList: [],
                errors: [],
            }
        },

        components: {
            ModalWindow
        },

        created() {
            axios.get("http://localhost:5000/tasks")
            .then(response => {
                this.tasksList = response.data
            })
            .catch(err => {
                this.errors.push(err)
            })
        },

        methods: {
            showModal: function () {
                this.$refs.modal.show = true
            },

            catchbacklogId() {
                this.$refs.modal.sectionId = 1;
            },

            catchtodoId() {
                this.$refs.modal.sectionId = 2;
            },

            catchinprogresId() {
                this.$refs.modal.sectionId = 3;
            },

            catchtasksReviewId() {
                this.$refs.modal.sectionId = 4;
            },
        },
    }
</script>
