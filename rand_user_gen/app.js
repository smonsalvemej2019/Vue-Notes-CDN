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
        async getUser(){//we can access the data above with the 'this' keyword

        const res = await fetch('https://randomuser.me/api');
        //the response will be an array with an info object, result object and a prototype object (__proto__)
        //the { result } will just pick the result object in the array
        //this is called object deconstruction
        const  { results }  = await res.json();
        //console.log(results)
        this.firstName = results[0].name.first
        this.lastName= results[0].name.last
        this.email= results[0].email
        this.gender= results[0].gender
        this.picture= results[0].picture.large
        }
    }
});

app.mount('#app');//this will pass the information to the tags with the ID of app 