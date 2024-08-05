<template>
    <div id="app">
      <h1>PrimeVue Demo</h1>
      
    
      <FloatLabel label="Name">
        <InputText v-model="name" placeholder="Enter your name" />
      </FloatLabel>
      
   
      <ButtonP label="Submit" icon="pi pi-check" @click="handleSubmit" v-ripple />
      
     
      <p v-if="name">Entered Name: {{ name }}</p>
  
  
      
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  
  export default {
    name: 'App',
    setup() {
      const name = ref('');
  
      const handleSubmit = () => {
        alert(`Submitted Name: ${name.value}`);
      };
  
      return {
        name,
        handleSubmit
      };
    }
  };
  </script>
  
  <style>
  #app {
    max-width: 600px;
    margin: auto;
    padding: 20px;
    text-align: center;
  }
  </style>
  