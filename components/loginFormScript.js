export default {
    data: () => {
        return {
            isWrong: false,
            login: '',
            password: '',
        }
    },
    methods: {
        logIn() {
            if (this.login != localStorage.login || this.password != localStorage.password) {
                this.isWrong = true;
                return;
            }
            this.isWrong = false;
            window.location.href = '/profile'
        }
    }
}
