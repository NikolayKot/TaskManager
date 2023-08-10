<template>
    <div class="new-tasks__container">

        <div class="new-tasks__creater">
            {{categotyName}}

            <img @click="showModal(); catchId()" src="/new-tasks.png" alt="Image to create new task" class="new-tasks__image">
        </div>

        <ul class="new-tasks__task-list">
            <li v-for="task in tasksList" :key="task.id" v-show="task.sectionId  === section" class="new-tasks__task-box"> 
                <div v-if="task.tag === 'Design'" class="new-tasks__design-tag__color new-tasks__tags">{{ task.tag }}</div>
                
                <div v-if="task.tag === 'Planning'" class="new-tasks__planning-tag__color new-tasks__tags">{{ task.tag }}</div>
                
                <div v-if="task.tag === 'Research'" class="new-tasks__research-tag__color new-tasks__tags">{{ task.tag }}</div>
                
                <div v-if="task.tag === 'Content'" class="new-tasks__content-tag__color new-tasks__tags">{{ task.tag }}</div>
                
                <div class="new-tasks__task-title">{{ task.title }}</div>
                
                <div class="new-tasks__task-description">{{ task.description }}</div>
        
                <div class="new-tasks__task-date">{{ createDate(task.createdAt) }}</div>
            </li>
        </ul>
    </div>

    <ModalWindow ref="modal"></ModalWindow>
</template>

<script>
    import axios from 'axios'
    import ModalWindow from '@/components/ModalWindow.vue'

    export default {
        name: 'App',
        data: () => {
            return {
                tasksList: [],
                errors: [],
            }
        },
        components: {
            ModalWindow
        },
        props: {
            section: "Number",
            categotyName: "String",
        },
        methods: {
            createDate: (date) => {
                return `${new Date (date).toLocaleString('en-US', { month: 'short' })} ${new Date(date).getDate()}, ${new Date(date).getFullYear()}`
            },
            showModal: function () {
                this.$refs.modal.isModalWindowActive = true
            },
            catchId() {
                this.$refs.modal.sectionId = this.section;
            }
        },
        created() {
            axios.get("http://localhost:5000/tasks")
            .then(response => {
                this.tasksList = response.data
            })
            .catch(err => {
                this.errors.push(err)
            })
        }
    }
</script>
