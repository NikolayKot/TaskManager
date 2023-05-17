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
            <ul class="user-list">
                <li :class="{active: detailsForm}" @click="transformDetails" class="user-details">My details</li>
                <li :class="{active: profileForm}" @click="transformProfile" class="user-details">Profile</li>
            </ul>
        </div>

        <DetailsForm v-if="detailsForm"/>
        <ProfileForm v-else/>
    </div>
</template>

<style src="~/assets/pages/profile.scss"></style>

<script>
    import DetailsForm from "@/components/DetailsForm.vue";
    import ProfileForm from "@/components/ProfileForm.vue";
    
    definePageMeta({
        layout: "navigation",
    });
    
    export default {
        component: {
            DetailsForm,
            ProfileForm
        },
        data: () => {
            return {
                detailsForm: true,
                profileForm: false,
            }
        },
        methods: {
            transformDetails() {
                this.detailsForm  = true
                this.profileForm = false
            },
            transformProfile() {
                this.detailsForm  = false
                this.profileForm = true
            }
        },
        beforeMount() {
            if (localStorage.login == undefined || localStorage.login == ' ' || localStorage.login == '') {
                window.location.href = '/'
            }
        }
    }
</script>

<script setup>
    import { onMounted, onUnmounted, unref } from "vue";

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
