export default {
    data: () => {
        return {
            isWrong: false,
            login: '',
            password: '',
            repeatPassword: '',
        }
    },
    methods: {
        register() {
            if (this.password != this.repeatPassword || this.login == '') {
                this.isWrong = true;
                return;
            } 
            localStorage.login = this.login;
            localStorage.password = this.password;
            this.isWrong = false;
            window.location.href = '/profile';
        }
    }
}
