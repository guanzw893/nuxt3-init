<template>
  <div class="container">
    <template v-if="!pending">
      <div class="avatar">
        <img :src="data?.avatar" alt="" />
      </div>
      <div>{{ data?.username }}</div>
    </template>
    <template v-else>loading...</template>
  </div>
</template>

<script setup lang="ts">
const { user } = useApi()

const id = 1

const { data, pending } = user.getUserInfo(id)
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  align-items: center;
  padding-top: 100px;
  width: 100vw;
  height: 100vh;
  flex-direction: column;

  .avatar {
    overflow: hidden;
    width: 100px;
    height: 100px;
    border-radius: 50%;

    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }
  }
}
</style>
