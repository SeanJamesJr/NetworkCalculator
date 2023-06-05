<script>
async function findit(){
  const result = await fetch ("https://networkcalc.com/api/encoder/{value}")
  console.log(result)


  function jim() {
  todos.value.push({
    text: newTodo.value,
    complete: false
  })
}


</script>


<template>
<h1>Encoder</h1>

<v-text-field label="Place text Here" variant="solo-filled"></v-text-field>
<v-btn @click="findit">Sumbit</v-btn>
</template>