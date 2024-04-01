<template>
    <div class="about-page">
      <h1>About Page</h1>
      <p>This is the about page.</p>
      <AboutPage /> <!-- Using the HomePage component -->
    </div>
  </template>
  
  <script>
  
  export default {
    name: 'AboutPage',
    components: {
      
    }
  }
  </script>
  
  <style scoped>
  .about-page {
    padding: 20px;
  }
  </style>
  