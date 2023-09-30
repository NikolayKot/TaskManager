import axios from 'axios'

export default {
    name: "ModalWindow",
    methods: {
        async createTask() {
            if (this.isRequiredFieldsEmpty) {
                this.isWrong = true;
                return
            }
            else {
                try {
                    const res = await fetch('http://localhost:5000/tasks', {
                        method: 'POST',
                        headers: {
                            'Content-Type' : 'application/json;charset=utf-8'
                        },
                        body: JSON.stringify ({
                            title: this.form.title,
                            description: this.form.description,
                            tag: this.form.tag,
                            sectionId: this.sectionId
                        })
                    })
                    
                    location.reload()
                } catch (error) {
                    console.log(error);
                    alert(`An error occurred while creating the task: ${error}`);
                }
                this.isWrong = false;
            }
        }
    },
    computed: {
        isRequiredFieldsEmpty() {
            if (this.form.title.trim() == '') {
                return true
            }
            else if (this.form.description.trim() == '') {
                return true
            }
        }
    },
    created() {
        axios.get("http://localhost:5000/tasks")
        .then(response => {
            this.tasksList = response.data
        })
        .catch(err => {
            this.errors.push(err)
        })
    }
}
