<script setup>

async function findit(){
  const result = await fetch ("https://networkcalc.com/api/security/certificate/example.com")
  console.log(result)
}
</script>

<template>

    <v-btn @click="findit">Data</v-btn>
    <div class="About">
    
    <h1>About</h1>
    
    </div>
<v-btn @click="findit">Retrieve</v-btn>


</template>