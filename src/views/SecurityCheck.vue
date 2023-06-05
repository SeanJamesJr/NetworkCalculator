<script>
async function findit(){
  const result = await fetch ("https://networkcalc.com/api/security/certificate/{hostname}")
  console.log(result)
}
</script>

<template>
<h1>Security Check</h1>

</template>