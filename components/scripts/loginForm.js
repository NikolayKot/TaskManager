export default {
    data: () => {
        return {
            isLoginWrong: false,
            login: '',
            password: '',
        }
        
    },
    methods: {
        logining() {
            if ((this.login != localStorage.login)||(this.password != localStorage.password)) {
                this.isLoginWrong = true;
                return;
            }
    
            else{
                this.isLoginWrong = false;
                window.location.href = '/profile'
            }
        }
    },
    mounted() {
        if (localStorage.login) {
            this.login = localStorage.login;
        }
        if (localStorage.password) {
            this.password = localStorage.password;
        }
    }
}