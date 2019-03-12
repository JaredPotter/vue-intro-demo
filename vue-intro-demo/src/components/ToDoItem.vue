<template>
    <div class="to-do-item-container">
        <input type="checkbox" v-model="isChecked"/>
        <span :class="{'done' : isChecked }">{{ value }}</span>
        <button v-on:click="deleteItem()" class="delete">X</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isChecked: false
        };
    },
    props: {
        value: {
            type: String,
            required: false,
            default: 'to-do-item'
        },
    },
    methods: {
        deleteItem() {
            this.$emit('deleteToDoItem', this.value);
        }
    }
}
</script>

<style lang="scss" scoped>
.to-do-item-container {
    display: flex;
    width: 50%;
    margin-top: 5px;
    justify-content: space-between;

    input, span {
        margin-right: 25px;
    }

    .done {
        text-decoration: line-through;        
    }

    .delete {
        color: red;
    }
}
</style>
