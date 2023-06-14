<script setup>
import { ref } from 'vue';
async function findit(){
  const result = await fetch ("https://networkcalc.com/api/security/certificate/"+value1.value)
  Storage.value= await result.json()
}

let Storage =ref('')
let value1=ref('')

</script>


<template>
<h1>security Check</h1>

<v-text-field v-model="number"  label="Place text Here" variant="solo-filled"></v-text-field>
<v-btn @click="findit">Sumbit</v-btn>


<h4>Meta:</h4>
    <div>Protocol: {{ Storage?.meta?.protocol }}</div>
    <br>
    <div>Hostname: {{ Storage?.meta?.hostname }}</div>
    <br>
    <div>Port: {{ Storage?.meta?.port }}</div>
    <br>
    <v-divider :thickness="4"></v-divider>  
    <h4>Certificate:</h4>
    <div>Protocol: {{ Storage?.certificate?.protocol }}</div>
    <br>
    <div>Hostname: {{ Storage?.certificate?.hostname }}</div>
    <br>
    <div>Port: {{ Storage?.certificate?.port }}</div>
    <br>
    <div>Issued to: {{ Storage?.certificate?.issued_to }}</div>
    <br>
    <div>Issued by: {{ Storage?.certificate?.issued_by }}</div>
    <br>
    <div>Valid from: {{ Storage?.certificate?.valid_from }}</div>
    <br>
    <div>Valid to: {{ Storage?.certificate?.valid_to }}</div>
    <br>
    <div>Alternative name: {{ Storage?.certificate?.alternates_names }}</div>
    <br>
    <div>Serial number: {{ Storage?.certificate?.serial_number }}</div>
    <br>
    <div>Fingerprint: {{ Storage?.certificate?.fingerprint }}</div>
    <br>
    <v-expansion-panels>
    <v-expansion-panel  title="Raw Certificate" :text="output?.certificate?.raw">
    </v-expansion-panel>
    </v-expansion-panels>
   
</template>