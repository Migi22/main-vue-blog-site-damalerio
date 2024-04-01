<template>
    <div class="gallery-page">
      <h1>Gallery Page</h1>
      <p>This is the home page.</p>
      <GalleryPage /> <!-- Using the HomePage component -->
    </div>
  </template>
  
  <script>
  
  export default {
    name: 'GalleryPage',
    components: {
      
    }
  }
  </script>
  
  <style scoped>
  .gallery-page {
    padding: 20px;
  }
  </style>
  