<template>
  <div class="gallery-page">
    <div id = "page-title">
      <h1>Gallery Page</h1>
      <h3>Dive into my world through my captured moments</h3>
    </div>
    
    <h2>Academic</h2>
    <div class="image-container">
      
      <div class="image-item">
        <img src="../assets/images/hack4gov.jpg" alt="hack4gov">
        <p class="image-title">Hack4Gov</p>
        <p class="image-subtitle">I joined the team for competing the Hack4Gov regional competion.</p>
        <LikeButton @like="handleLike" />
      </div>
      <div class="image-item">
        <img src="../assets/images/pitching.jpg" alt="Pitching Pic">
        <p class="image-title">Pitching</p>
        <p class="image-subtitle">I am one of the participant of our school for pitching regional competion.</p>
        <LikeButton @like="handleLike" />
      </div>
      <div class="image-item">
        <img src="../assets/images/Hack4GovCert.jpg" alt="Hack4GovCert">
        <p class="image-title">HAck4Gov Certificate</p>
        <p class="image-subtitle">Certification of Participation for hack4gov</p>
        <LikeButton @like="handleLike" />
      </div>
      <div class="image-item">
        <img src="../assets/images/PitchingCert.jpg" alt="Pitching Certificate">
        <p class="image-title">Pitching Certificate</p>
        <p class="image-subtitle">Certification of Participation for Pitching</p>
        <LikeButton @like="handleLike" />
      </div>
      <div class="image-item">
        <img src="../assets/images/cisco1.jpg" alt="Cisco Certificate">
        <p class="image-title">Cisco Certificate</p>
        <p class="image-subtitle">Certification of Course Completion <br> for Introduction to Cybersecurity</p>
        <LikeButton @like="handleLike" />
      </div>
      <div class="image-item">
        <img src="../assets/images/cisco2.jpg" alt="Cisco Certificate">
        <p class="image-title">Cisco Certificate</p>
        <p class="image-subtitle">Certification of Course Completion <br> for Cyber Threat Management</p>
        <LikeButton @like="handleLike" />
      </div>
    </div>
  </div>
</template>


<script>
import LikeButton from '@/components/LikeEvent.vue';

export default {
  components: {
    LikeButton,
  },
};
</script>



<style scoped>
.gallery-page {
  padding: 20px;
}

#page-title {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 70px;
}

h1 {
  font-size: 65px;
}

h2 {
  font-size: 40px;
}

h3 {
  font-size: 25px;
}

.image-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.image-item {
  flex-basis: 30%;
  text-align: center;
  margin-bottom: 20px;
}

img {
  max-width: 100%;
  height: 55%;
  border-radius: 10px;
}

.image-title {
  font-weight: bold;
  margin-top: 10px;
  color: #76ABAE;
  font-size: 35px;
}

.image-subtitle {
  font-size: 25px;
  color: #EEEEEE;
}
</style>
