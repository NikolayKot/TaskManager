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
                        <div class="body__tags-container body__tags-container__design-color">
                            <input class="body__tags-input" type="radio" id="tag__design"
                            name="tag" value="Design" v-model="form.tag">
                            <label for="tag__design" class="body_tags-label">Design</label>
                        </div>

                        <div class="body__tags-container body__tags-container__research-color">
                            <input class="body__tags-input" type="radio" id="tag__research"
                            name="tag" value="Research" v-model="form.tag">
                            <label for="tag__research" class="body_tags-label">Research</label>
                        </div>

                        <div class="body__tags-container body__tags-container__planning-color">
                            <input class="body__tags-input" type="radio" id="tag__planning"
                            name="tag" value="Planning" v-model="form.tag">
                            <label for="tag__planning" class="body_tags-label">Planning</label>
                        </div>
                        
                        <div class="body__tags-container body__tags-container__content-color">
                            <input class="body__tags-input" type="radio" id="tag__content"
                            name="tag" value="Content" v-model="form.tag">
                            <label for="tag__content" class="body_tags-label">Content</label>
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
                }
            }
        },
        methods: {
            closeModal() {
                this.isModalWindowActive = false
            },
        }
    }
</script>
