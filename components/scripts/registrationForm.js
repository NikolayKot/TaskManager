export default {
    data: () => {
        return {
            isRegistrationWrong: false,
            registrationLogin: '',
            registrationPassword: '',
            repeatRegistrationPassword: '',
        }
        
    },
    watch: {
        registrationLogin(login) {
            sessionStorage.registrationLogin = login;
        },
        registrationPassword(password) {
            sessionStorage.registrationPassword = password;
        },
        repeatRegistrationPassword(repeatPassword) {
            sessionStorage.repeatRegistrationPassword = repeatPassword;
        }
    },  
    methods: {
        register() {
            if (sessionStorage.registrationPassword != sessionStorage.repeatRegistrationPassword) {
                this.isRegistrationWrong = true;
            } 
            else {
                localStorage.login = sessionStorage.registrationLogin
                localStorage.password = sessionStorage.registrationPassword
                this.isRegistrationWrong = false;
                window.location.href = '/profile'
            }
        }
    },
    mounted() {
        if (sessionStorage.registrationLogin) {
            this.registrationLogin = sessionStorage.registrationLogin;
        }
        if (sessionStorage.registrationPassword) {
            this.registrationPassword = sessionStorage.registrationPassword;
        }
        if (sessionStorage.repeatRegistrationPassword) {
            this.repeatRegistrationPassword = sessionStorage.repeatRegistrationPassword;
        }
    }
}
