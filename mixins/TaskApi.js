export default {
    name: "ModalWindow",
    methods: {
        async createTask() {
            if (this.form.title.trim() == '' || this.form.description.trim() == '') {
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
    }
}
