<script setup>
import { ref } from 'vue';

async function findit(){
  const result = await fetch ("https://networkcalc.com/api/binary/"+number.value)
  storage.value= await result.json()
}

let number=ref('')
let storage =ref('')

</script>

<template>
<h1>Binary Converter</h1>


<v-text-field v-model="number"  label="Place text Here" variant="solo-filled"></v-text-field>
<v-btn @click="findit">Sumbit</v-btn>
{{ Storage }}
</template>