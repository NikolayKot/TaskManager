export default {
    data: () => {
        return {
            isElemVisible: true,
            isElemCorrect: true,
            isLoginCorrect: true,
            login: '',
            password: '',
            regLogin: '',
            regPassword: '',
            repRegPassword: '',
        }
        
    },
    mounted() {
        if (localStorage.regLogin) {
        this.regLogin = localStorage.regLogin;
        }
        if (localStorage.regPassword) {
        this.regPassword = localStorage.regPassword;
        }
        if (localStorage.repRegPassword) {
        this.repRegPassword = localStorage.repRegPassword;
        }
        if (sessionStorage.login) {
        this.login = sessionStorage.login;
        }
        if (sessionStorage.password) {
        this.password = sessionStorage.password;
        }
    },
    watch: {
        login(Login) {
            sessionStorage.login = Login;
        },
        password(Password) {
            sessionStorage.password = Password;
        }
    }, 
    methods: {
        registration() {
            if (this.regPassword != this.repRegPassword){
                this.isElemCorrect = false;
            }
            else{
                localStorage.regLogin = this.regLogin;
                localStorage.regPassword = this.regPassword;
                localStorage.repRegPassword = this.repRegPassword;
                this.isElemCorrect = true;
                window.location.href = 'http://localhost:3000/profile'
            }
        },
        inlet() {
            if (sessionStorage.login != localStorage.regLogin) {
                this.isLoginCorrect = false;
            } 
            else if (sessionStorage.password != localStorage.regPassword) {
                this.isLoginCorrect = false;
            } 
            else {
                window.location.href = 'http://localhost:3000/profile'
            }
        }
    }
}