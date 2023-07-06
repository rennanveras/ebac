<script setup>
  import { reactive } from 'vue';

  const estado = reactive({
    operacao: '+',
    num: {
      num1: 0,
      num2: 0,
      resultado: 0,
    }
  })
  const {num1} = estado.num
  const {num2} = estado.num
  
  function calcular(n1, n2){
    if(n1, n2){
      const {operacao} = estado;
      switch (operacao){
        case '+':
          return parseInt(n1) + parseInt(n2);
        case '-':
          return parseInt(n1) - parseInt(n2);
        case '/':
          return parseInt(n1) / parseInt(n2);
        case '*':
          return parseInt(n1) * parseInt(n2);
      }
    }
  }

  function getValueN1(e){
    estado.num.num1 = e.target.value;
    if(num1 && num2){
      estado.num.resultado = calcular(num1, num2);
    }
  }

  function getValueN2(e){
    estado.num.num2 = e.target.value;
    if(num1 && num2){
      estado.num.resultado = calcular(num1, num2);
    }
  }

  function getOperacao(e){
    estado.operacao = e.target.value;
    if(num1 && num2){
      estado.num.resultado = calcular(num1, num2);
    }
  }
</script>

<template>
  <div class="container  text-center">
    <header>
      <h1>Calculadora</h1>
    </header>
    <div class="row">
      <form action="" class="form-control ">
        <input @keyup="getValueN1" type="number">
        <span  class="fs-1 px-1">{{ estado.operacao}}</span>
        <input @keyup="getValueN2" type="number">
        <span class="fs-1 px-1">=</span>
        <span @change="showResult" class="fs-1 px-1">{{ estado.num.resultado }}</span>
      </form>
    </div>
    <div class="row">
      <h5>Selecione a operação</h5>
      <select @change="getOperacao" class="d-flex justify-content-center">
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="/">/</option>
        <option value="*">*</option>
      </select>
    </div>
  </div>
</template>

<style scoped>
  input{
    text-align: center;
    border: none;
    border-bottom: 3px solid #0d6efd;
    font-size: 26px;
    width:10%;
  }
  input:focus {
    box-shadow: 0 0 0 0;
    outline: 0;
  }
  select{
    font-size: 30px;
    border-color: transparent;
    width:75px;
    margin:0 auto
  }
</style>
