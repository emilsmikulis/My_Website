<!-- src/components/Header.vue -->
<template>
  <nav class="navbar">
    <ul>
      <li><RouterLink to="/">Home</RouterLink></li>
      <li><RouterLink to="/about">About me</RouterLink></li>
      <li><RouterLink to="/blog">Blog</RouterLink></li>
      <li><RouterLink to="/shop">Shop</RouterLink></li>
    </ul>
  </nav>

 
</template>
  





<!-- #region style -->
  <style scoped>

  .navbar {
    background-color: #00bcd4;
    width: 100%;
    padding: 15px 0;
    position: relative; /* vai sticky, ja gribi to fiksētu */
  z-index: 1000;      /* tas liek elementam būt "virs" visa cita */
  cursor: pointer;    /* lai peles kursors mainās uz rociņu */
  }
  .navbar ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
    gap: 20px;
    padding-left: 20px;
  }
  
  .navbar a, 
.navbar [role="link"],
.navbar .router-link-active,
.navbar .router-link-exact-active {
  cursor: pointer !important;
  pointer-events: auto !important;
  text-decoration: none;
  color: white;
  display: inline-block;
  padding: 10px;
}




  </style>
  <!-- #endregion -->