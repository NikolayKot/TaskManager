<template>
    <div class="content-container">
        <div class="settings-container">
            <img src="/profileBackground.png" alt="Background Profile picture" class="background-picture">
            
            <div class="avatar-zone">
                <img :src="imageUrl" 
                    alt="User avatar"
                    v-if="imageUrl"
                    class="avatar"
                >

                <label :class="{active: imageUrl}" for="upload-photo" class="avatar-label">Change Avatar</label>   
                <input type="file" 
                    ref="input"
                    id="upload-photo"
                    class="avatar-input"
                >       
            </div>

            <div class="block-of-changes">
                <h1 class="settings-caption">Settings</h1>
            </div>
        </div>

        <div class="user-information">
            <div class="user-list">
                <div>   
                    <button v-for="(_, form) in forms" :key="form" :class="['user-details', { active: currentForm === form }]" @click="currentForm = form">
                        {{ form }}
                    </button>
                    
                    <keep-alive>
                        <component :is="forms[currentForm]"></component>
                    </keep-alive>
                </div>
            </div>
        </div>
    </div>
</template>
<style src="~/assets/pages/profile.scss"></style>

<script>   
    definePageMeta({
        layout: "navigation",
    });
    
    export default {
        beforeMount() {
            if (localStorage.login == undefined || localStorage.login.trim() == '') {
                window.location.href = '/'
            }
        }
    }
</script>

<script setup>
    import { onMounted, onUnmounted, unref, ref } from "vue";
    import {default as Details} from "@/components/DetailsForm.vue";
    import {default as Profile} from "@/components/ProfileForm.vue";
 
    const currentForm = ref('Details')

    const forms = {
        Details,
        Profile
    }

    const emit = defineEmits ([
        'image-set'
    ]);

    const input = ref();

    const imageUrl = ref('');

    function changeАvatar(files) {
        const file = files[0];
        if(!['image/jpeg', 'image/png'].includes(file.type)) {
            alert('The file must be an image');
            return;
        }
        imageUrl.value = URL.createObjectURL(file);
        emit('image-set', file);
    }

    function useEventHandler (event, target, callback) {
        onMounted(()=>unref(target).addEventListener(event, callback))
        onUnmounted(()=>unref(target).removeEventListener(event,callback))
    };

    useEventHandler('change', input, () => changeАvatar(input.value.files));
</script>
