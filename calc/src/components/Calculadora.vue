<script setup>
const props = defineProps(['getN1', 'getN2', 'showResult', 'getOperacao', 'operacao'])
</script>

<template>
    <div class="row my-5">
        <form action="" class=" ">
            <input @keyup="props.getN1" type="number">
            <span class="fs-1 px-1">{{ props.operacao }}</span>
            <input @keyup="props.getN2" type="number">
            <span class="fs-1 px-1">=</span>
            <span class="fs-2 px-1">{{ props.showResult }}</span>
        </form>
    </div>
    <div class="row">
        <h5>Selecione a operação</h5>
        <select @change="props.getOperacao" class="d-flex justify-content-center">
            <option value="+">+</option>
            <option value="-">-</option>
            <option value="/">/</option>
            <option value="*">*</option>
        </select>
    </div>
</template>

<style scoped>
input {
    text-align: center;
    border: none;
    border-bottom: 3px solid #0d6efd;
    font-size: 26px;
    width: 10%;
}

input:focus {
    box-shadow: 0 0 0 0;
    outline: 0;
}

select {
    font-size: 30px;
    border-color: transparent;
    width: 75px;
    margin: 0 auto
}
</style>