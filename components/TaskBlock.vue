<template>
    <div class="new-tasks__container">

        <div class="new-tasks__creater">
            {{categotyName}}

            <img @click="showModal" src="/new-tasks.png" alt="Image to create new task" class="new-tasks__image">
        </div>

        <ul class="new-tasks__task-list">
            <li v-for="task in tasksList" :key="task.id" v-show="task.sectionId  === section" class="new-tasks__task-box"> 
                <div :class="[`new-tasks__${task.tag.toLowerCase()}-tag__color`, 'new-tasks__tags']">{{ task.tag }}</div>
                
                <div class="new-tasks__task-title">{{ task.title }}</div>
                
                <div class="new-tasks__task-description">{{ task.description }}</div>
        
                <div class="new-tasks__task-date">{{ createDate(task.createdAt) }}</div>
            </li>
        </ul>
    </div>

    <ModalWindow ref="modal"></ModalWindow>
</template>

<script>
    import TaskApi from '~/mixins/TaskApi.js'
    import ModalWindow from '@/components/ModalWindow.vue'

    export default {
        mixins: [TaskApi], 
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
            createDate(date) {
                let month = new Date (date).toLocaleString('en-US', { month: 'short' })
                let day = new Date(date).getDate()
                let year = new Date(date).getFullYear()
                return `${month} ${day}, ${year}`
            },
            showModal() {
                this.$refs.modal.isModalWindowActive = true
                this.$refs.modal.sectionId = this.section;
            }
        }
    }
</script>
