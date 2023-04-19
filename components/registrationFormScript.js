export default {
    data: () => {
        return {
            isRegistrationWrong: false,
            login: '',
            password: '',
            repeatPassword: '',
        }
    },
    methods: {
        register() {
            if (this.password != this.repeatPassword || this.login == '') {
                this.isRegistrationWrong = true;
                return;
            } 
            localStorage.login = this.login;
            localStorage.password = this.password;
            this.isRegistrationWrong = false;
            window.location.href = '/profile';
        }
    }
}
