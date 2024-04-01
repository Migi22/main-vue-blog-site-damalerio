<template>
  <div class="home-page">
    <div class="split-container">
      <!-- Left side with image -->
      <div class="split left">
        <img src="../assets/images/Me.jpg" alt="Me.jpg" />
      </div>
      <!-- Right side with text -->
      <div class="split right">
        <div class="content-container">
          <h1>Welcome to My Blog Site!</h1>
          <p>This is the home page of my blog site. 
            Here you can find different topics and updates about my interests and life experiences.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.home-page {
  padding: 20px;
  color: #EEEEEE;
  margin-top: 70px;
}

.split-container {
  display: flex;
  justify-content: space-between;
}

.split {
  width: 50%;
}

.left {
  display: flex;
  justify-content: center;
  align-items: center;
}

.right {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 70px;
}

.content-container {
  text-align: center;
}

.right h1 {
  font-size: 70px;
  font-family: "Lexend", sans-serif;
  font-optical-sizing: auto;
  font-style: normal;
}

.right p {
  font-size: 30px;
}

img {
  max-width: 65%;
  height: auto;
  border-radius: 5%;
}
</style>
