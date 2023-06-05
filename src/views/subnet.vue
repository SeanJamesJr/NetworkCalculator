<script>
async function findit(){
  const result = await fetch ("https://networkcalc.com/api/ip/{subnet}")
  console.log(result)
}
</script>


<template>
<h1>Subnet</h1>


</template>