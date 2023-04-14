export default{
    beforeMount(){
        if(localStorage.login == undefined){
            window.location.href = '/'
        }
        document.title = 'Profile';
    }
}