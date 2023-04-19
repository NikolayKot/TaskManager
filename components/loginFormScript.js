export default {
    data: () => {
        return {
            isLoginWrong: false,
            login: '',
            password: '',
        }
    },
    methods: {
        logIn() {
            if (this.login != localStorage.login || this.password != localStorage.password) {
                this.isLoginWrong = true;
                return;
            }
            this.isLoginWrong = false;
            window.location.href = '/profile'
        }
    }
}
