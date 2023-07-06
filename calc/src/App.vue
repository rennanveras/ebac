<script setup>
  import { reactive } from 'vue';

  import Cabecalho from './components/Cabecalho.vue'
  import Calculadora from './components/Calculadora.vue'; 

  const estado = reactive({
    operacao: '+',
    num: {
      num1: 0,
      num2: 0,
      resultado: 0,
    }
  })
  
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

  function condicionalCal() {
    if (estado.num.num1 && estado.num.num2) {
    estado.num.resultado = calcular(estado.num.num1, estado.num.num2);
    }
  } 

  function getValueN1(e){
    estado.num.num1 = e.target.value;
    condicionalCal();
  }

  function getValueN2(e){
    estado.num.num2 = e.target.value;
    condicionalCal();
  }

  function getOperacao(e){
    estado.operacao = e.target.value;
    condicionalCal();
  }
</script>

<template>
  <div class="container  text-center">   
    <Cabecalho/>
    <Calculadora :get-n1="getValueN1" :get-n2="getValueN2" :get-operacao="getOperacao" :show-result="estado.num.resultado" :operacao="estado.operacao" />
  </div>
</template>

<style scoped>

</style>
