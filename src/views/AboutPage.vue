<template>
    <div class="about-page">
      <h1>About Page</h1>
      <img src="../assets/images/me_pic_2.jpg" alt="Profile Picture" class="profile-picture">
      <p>I am Lance Miguel P. Damalerio and I am 21 years old. I am a BSIT 3rd-year Jose Maria College Foundation, Inc. student. I am a secretary of the Alliance of Information 
        Technology Education Students (AITES) of CITE (College of Information Technology Education). I dreamed of knowing and being good at everything in backend and frontend development. I like to play online games, 
        I am interested to watch videos especially if it talks about cybersecurity. I am a good team player on group projects. I like to help teach other people when they are struggling with coding.
      </p>
     
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
  display: flex;
  flex-direction: column;
  align-items: center;
}

h1 {
  font-size: 65px;
  
}


.profile-picture {
  max-width: 400px;
  margin-bottom: 20px; 
  border-radius: 50%;
}


p {
  text-align: justify;
  font-size: 30px;
  color: #e7e7e7;
  line-height: 35px;

  font-family: "Lato", sans-serif;
  font-weight: 100;
  font-style: normal;
}






</style>
  