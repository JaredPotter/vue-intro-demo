<template>
    <div class="two-way-binding-container">
        <h1>2 - Way Binding</h1>
        <h3>View => Model Binding</h3>
        <div class="form">
            <div>Email: </div>
            <input v-model="email" type="email">
            <div>Password: </div>
            <input v-model="password" type="password">
            <br>
            <button v-on:click="submit()">Submit</button>
        </div>
        <h3>Model => View Binding</h3>
        <div class="counter">
            <button v-on:click="startCounter()">Start Counter</button>
            <div>Current Count: {{ count }}</div>
            <button v-on:click="stopCounter()">Stop Counter</button>
        </div>
    </div>
</template>

<script>
/* eslint-disable */
export default {
    data() {
        return {
            email: '',
            password: '',
            count: 0,
            counterIsRunning: false,
        }
    },
    methods: {
        submit() {
            let email = this.email; // Access data() JavaScript variables with `this' keyword. Note: 'this' isn't required in <template>
            let password = this.password; 
            debugger;

            // Submit to server...
        },
        startCounter() {
            this.counterIsRunning = true;


        },
        stopCounter() {
            this.counterIsRunning = false;
        }
    },
    mounted() {
        // Inside any inline/callback functions, 'this' no longer represents the Vue instance. 
        // Thus, we have to create a reference the Vue instance like this.
        let vueRef = this; 

        setInterval(() => { 
            if(vueRef.counterIsRunning) {
                vueRef.count += 1;
            }
        }, 1000);        
    }
}
</script>

<style lang="scss" scoped>
.two-way-binding-container {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    .form, .counter {
        border: 1px solid black;
        padding: 10px;
        width: 350px;
        display: flex;
        flex-direction: column;
    }

    .counter {

    }

    button {
        font-size: 16px;
    }    
}

</style>
