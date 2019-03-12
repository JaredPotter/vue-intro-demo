<template>
    <div class="computed-properties-container">
        <h1>Computed Properties & Filters</h1>
        <div>Subtotal: <input v-model="subtotal" type="number"></div>
        <div>Tax Rate: {{ taxRate * 100 }}%</div>
        <div>Tax Amount: ${{ taxAmount | dollar }}</div>
        <div>Total: ${{ total | dollar }}</div>
    </div>
</template>

<script>
/* eslint-disable */
export default {
    data() {
        return {
            subtotal: 17.36,
            taxRate: 0.05,
        };
    },
    computed: {
        taxAmount() {
            let subtotal = parseFloat(this.subtotal);
            let taxAmount = subtotal * this.taxRate;

            return taxAmount;
        },
        total() {
            let subtotal = parseFloat(this.subtotal);
            let total = subtotal + this.taxAmount;
            
            return total;
        },
    },
    filters: {
        dollar(value) {
            let num = parseFloat(value);

            if(num && !isNaN(num)) {
                return num.toFixed(2);
            }
        }
    }
}
</script>
