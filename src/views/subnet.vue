<script setup>
import { ref } from 'vue';


async function findit(){
  const result = await fetch ("https://networkcalc.com/api/ip/"+value1.value)
  storage.value= await result.json()
}

let storage =ref('')
let value1=ref('')

</script>


<template>
<h1>Subnet</h1>

<v-text-field v-model="number"  label="Place text Here" variant="solo-filled"></v-text-field>
<v-btn @click="findit">Sumbit</v-btn>
{{storage?.address?.octet_1}}
{{storage?.address?.octet_2}}
{{storage?.address?.octet_3}}
{{storage?.address?.octet_4}}
{{storage?.address?.subnet_bits}}
{{storage?.address?.cider_notation}}
{{storage?.address?.subnet_mask.octet_1}}
</template>