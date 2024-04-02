<template>
  <div id="app">
    <nav>
      <div class="brand" @click="goToHomePage">Damalerio's Blog Site</div>
      <div class="navigations">
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/gallery">Gallery</router-link>
        <router-link to="/hobbies">Hobbies</router-link>
      </div>
    </nav>
    
    <router-view />
  </div>
</template>

<script>
export default {
  methods: {
    goToHomePage() {
      this.$router.push('/');
    }
  }
};
</script>


<style>
nav {
  color: #fff;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  margin-top: 50px;
}

.navigations {
  font-size: 25px;
}

.brand {
  font-weight: bold;
  font-size: 45px;
  font-family: "Lexend", sans-serif;
  font-optical-sizing: auto;
  font-style: normal;
  cursor: pointer; 
}

nav a {
  color: #fff;
  text-decoration: none;
  margin-right: 70px;
}

nav a:last-child {
  margin-right: 0;
}

nav a:hover {
  text-decoration: underline;
  color: #76ABAE;
}
</style>