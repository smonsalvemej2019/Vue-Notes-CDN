//we have access to this script thanks to the cdn
//everything is processed trough the the script 
const app = Vue.createApp({
    data(){//data is a function!!! not an object
        return {
            firstName: 'John',
            lastName: 'Doe',
            email: 'john@gmail.com',
            gender: 'male',
            picture: 'https://randomuser.me/api/portraits/men/10.jpg'
        }
    },
    methods:{
        getUser(){//we can access the data above with the 'this' keyword
            console.log(this.firstName);
        }
    }
});

app.mount('#app');//this will pass the information to the tags with the ID of app 