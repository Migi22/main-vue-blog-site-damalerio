<template>
    <div class="home-page">
      <h1>Home Page</h1>
      <p>This is the home page.</p>
      <HomePage /> <!-- Using the HomePage component -->
    </div>
  </template>
  
  <script>
  
  export default {
    name: 'HomePage',
    components: {
      
    }
  }
  </script>
  
  <style scoped>
  .home-page {
    padding: 20px;
  }
  </style>
  