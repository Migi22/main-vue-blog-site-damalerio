<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/gallery">Gallery</router-link> |
      <router-link to="/hobbies">Hobbies</router-link>
    </nav>
    
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>


<style>
nav {
  background-color: #31363F;
  color: #fff;
  padding: 10px;
}
nav a {
  color: #fff;
  text-decoration: none;
  margin-right: 10px;
}
nav a:hover {
  text-decoration: underline;
}
</style>