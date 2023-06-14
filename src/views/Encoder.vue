<script setup>
import { ref } from 'vue';

async function findit(){
  const result = await fetch ("https://networkcalc.com/api/encoder/"+value1.value)
  storage.value= await result.json()
}

let storage =ref('')
let value1=ref('')

</script>


<template>
<h1>encoder</h1>

<v-text-field v-model="value1"  label="Place text Here" variant="solo-filled"></v-text-field>
<v-btn @click="findit">Sumbit</v-btn>
{{ storage?.encoded}}
</template>