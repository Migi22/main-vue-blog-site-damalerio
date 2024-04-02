<template>
    <button @click="toggleLike" :class="{ 'liked': liked }">
      {{ liked ? 'Liked' : 'Like' }}
    </button>
  </template>
  
  <script>
  export default {
    data() {
      return {
        liked: false,
      };
    },
    methods: {
      toggleLike() {
        this.liked = !this.liked; 
        this.$emit('like', this.liked);
      },
    },
  };
  </script>
  
  <style scoped>
  .liked {
    color: rgb(255, 255, 255);
    background-color: rgb(66, 66, 173);
  }

    

  </style>
  