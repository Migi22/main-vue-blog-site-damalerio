<template>
  <div class="hobby-page">
    <h1>Hobby Page</h1>
    <h3>Here you will know some of my hobbies</h3>

    <!-- Hobby items -->
    <div class="hobby-item">
      <img src="../assets/images/playing games.jpeg" alt="Playing Online Games">
      <div class="hobby-info">
        <h2>Playing Online Games</h2>
        <p>I enjoy playing games with my friends.</p>
      </div>
    </div>

    <div class="hobby-item">
      <img src="../assets/images/watching movies.png" alt="Watching Movies">
      <div class="hobby-info">
        <h2>Watching Movies</h2>
        <p>I like to watch movies</p>
      </div>
    </div>

    <div class="hobby-item">
      <img src="../assets/images/cybersecurity.jpg" alt="Cybersecurity topics">
      <div class="hobby-info">
        <h2>Watching Cybersecurity Video Topics</h2>
        <p>I am interested on watching videos that are related to cybersecurity.</p>
      </div>
    </div>


  </div>
</template>

<style scoped>
.hobby-page {
  padding: 20px;
  text-align: center; 
}

h1 {
  margin-bottom: 20px;
}

h3 {
  font-size: 35px;
  margin-bottom: 50px;
}

.hobby-item {
  display: flex;
  align-items: flex-start;
  margin-bottom: 50px;
}

.hobby-item img {
  width: 45%;
  height: auto;
  margin-right: 20px;
  border-radius: 5px;
}

.hobby-info {
  flex-grow: 1;
  text-align: left;
}

h2 {
  font-size: 35px;
}

p {
  font-size: 25px;
  color: #EEEE;
}
</style>
