<template>
  <div>Current Count: {{ counter.count }}</div>
  <button @click="counter.increment">+1</button>
  <button @click="counter.count += 2">+2</button>
  <button @click="counter.$patch({ count: counter.count + 3 })">+3</button>
</template>

<script setup lang="ts">
const counter = useCounterStore()
</script>
