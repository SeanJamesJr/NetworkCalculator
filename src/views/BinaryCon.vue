<script>

async function findit(){
  const result = await fetch ("https://networkcalc.com/api/binary/{number}")
  console.log(result)
}

</script>

<template>
<h1>Binary Converter</h1>

</template>