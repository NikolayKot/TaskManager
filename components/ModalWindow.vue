<template>
    <div v-if="isModalWindowActive" class="modal-shadow" @click.self="closeModal">
        <div class="modal-window">
            <header class="header">
                <h1 class="header__title">New task</h1>
                
                <button class="header__close-button" @click="closeModal">&#10006;</button>
            </header>

            <form class="body">
                <div class="body__content">
                    <div class="body__tags">
                        <div v-for="tag in tags" :key="tag">
                            <div :class="['body__tags-container', `body__tags-container__${tag.toLowerCase()}-color`]">
                                <input class="body__tags-input" type="radio" :id="`tag__${tag.toLowerCase()}`"
                                name="tag" :value="`${tag}`" v-model="form.tag">
                                <label :for="`tag__${tag.toLowerCase()}`" class="body_tags-label">{{ tag }}</label>
                            </div>
                        </div>
                    </div>

                    <input :class="{'body__content-input__wrong': isWrong}" class="body__content-input" type="text" placeholder="Title" v-model="form.title">

                    <textarea :class="{'body__content-input__wrong': isWrong}" class="body__content-input body__content-input__discription" placeholder="Description" v-model="form.description"></textarea>
                    
                    <div :class="{'body__content-alert__active': isWrong}" class="body__content-alert">The title and description cannot be empty</div>
                </div>
            </form>

            <footer class="footer">
                <button class="footer__button" @click="createTask">
                    Create task
                </button>
            </footer>
        </div>
    </div>
</template>

<style src="@/assets/components/modal-window.scss"></style>

<script>
    import TaskApi from '~/mixins/TaskApi.js'

    export default {
        mixins: [TaskApi], 
        data: () => {
            return {
                isWrong: false,
                sectionId: 0,
                isModalWindowActive: false,
                form: {
                    tag: '',
                    title: '',
                    description: '',
                },
                tags: [
                    "Design",
                    "Research",
                    "Planning",
                    "Content"
                ]
            }
        },
        methods: {
            closeModal() {
                this.isModalWindowActive = false
            },
        }
    }
</script>
