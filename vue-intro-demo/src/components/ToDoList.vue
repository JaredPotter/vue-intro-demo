<template>
    <div class="to-do-list-container">
        <div class="new-to-do-item">
            <label for="newToDoItem">New ToDo Item:</label>
            <input 
                type="text" 
                name="newToDoItem" 
                v-model="currentNewToDoItem" 
                v-on:keyup.enter="addToList(currentNewToDoItem)"
            >
            <button v-on:click="addToList(currentNewToDoItem)">Add Item</button>
            <!-- <button @click="addToList()">Add Item</button> -->
        </div>
        <ToDoItem 
            v-for="(item, index) in list" 
            :key="index" 
            :value="item" 
            v-on:deleteToDoItem="deleteToDoItem($event)"
        />
    </div>
</template>

<script>
/* eslint-disable */
import ToDoItem from './ToDoItem.vue';

export default {
    components: {
        ToDoItem
    },
    data() {
        return {
            currentNewToDoItem: '',
            list: [],
        };
    },
    methods: {
        addToList(item) {
            if(item) {
                this.list.push(item);
            }

            this.currentNewToDoItem = '';
        },
        deleteToDoItem(value) {
            this.list = this.list.filter((item) => {
                return item != value;
            });
        }
    }
}
</script>

<style lang="scss" scoped>
.to-do-list-container {
    width: 500px;
    border: 1px solid black;
    padding: 10px;

    .new-to-do-item {
        width: 400px;
        display: flex;
        // justify-content: space-evenly;
    }
}
</style>

