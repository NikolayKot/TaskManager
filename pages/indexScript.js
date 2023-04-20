import LoginForm from "@/components/LoginForm.vue";
import RegistrationForm from "@/components/RegistrationForm.vue";
export default {
    components: {
        LoginForm,
        RegistrationForm
    },
    data: () => {
        return {
            isRegistrationVisible: false,
        }
    },
    methods: {
        switchForm() {
            this.isRegistrationVisible  =! this.isRegistrationVisible
        }
    },
    beforeMount() {
        if (localStorage.login != undefined) {
            window.location.href = '/profile'
        }
    }    
}
