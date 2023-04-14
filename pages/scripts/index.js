import  loginForm  from "@/components/loginForm.vue";
import  registrationForm  from "@/components/registrationForm.vue";
export default {
    components: {
        loginForm,
        registrationForm
    },
    data: () => {
        return {
            isRegistrationVisible: false,
        }
    },
    methods: {
        registrationVisible() {
            this.isRegistrationVisible  =! this.isRegistrationVisible
        }
    },
    beforeMount(){
        document.title = 'Authorization';
    }    
}
