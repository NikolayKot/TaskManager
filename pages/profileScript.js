export default{
    beforeMount(){
        if(localStorage.login == undefined || localStorage.login == ''){
            window.location.href = '/'
        }
    }
}
