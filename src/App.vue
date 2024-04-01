<template>
  <div id="app">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/gallery">Gallery</router-link> |
    <router-link to="/hobbies">Hobbies</router-link>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

