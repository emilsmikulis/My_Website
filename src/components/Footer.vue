<template>
    <footer class="footer">
      
      <p>{{ $t('footer-copyright') }}</p>

      <!-- Sociālo tīklu ikonu bloks -->
      <div class="social-icons">
      <!-- YouTube saite ar bildi -->
      <a href="https://youtube.com/@emilsmikulis" target="_blank">
        <img src="@/assets/icons/youtube.png" alt="YouTube" class="icon" />
      </a>
      
      <!-- Instagram saite ar bildi -->
      <a href="https://instagram.com/emiilsmikulis" target="_blank">
        <img src="@/assets/icons/instagram.png" alt="Instagram" class="icon" />
      </a>
      
      <!-- GitHub saite ar bildi -->
      <a href="https://github.com/emilsmikulis" target="_blank">
        <img src="@/assets/icons/github.png" alt="GitHub" class="icon github-icon" />
      </a>
    </div>
    </footer>
  </template>
  
  <style scoped>
  .footer {
    padding: 20px;
    background-color: #00bcd4;
    color: white;
    text-align: center;
    margin-top: 20px;
  }

  .social-links {
  margin-top: 10px;
}

.social-links a {
  color: white;
  margin: 0 10px;
  text-decoration: none;
  font-weight: bold;
}

.social-links a:hover {
  text-decoration: underline;
  color: #ffcc00; /* Maina krāsu, kad uzbrauc ar peli */
}

.icon {
  width: 30px;  /* Jaunais platums */
  height: 20px; /* Jaunais augstums */
  object-fit: contain; /* Ļoti svarīgi! Nodrošina, ka bilde netiek izstiepta, bet gan iepildīta šajos izmēros, saglabājot proporcijas. */
}

/* Īpaši palielinām GitHub ikonu, lai tā vizuāli atbilstu */
.github-icon {
  height: 25px !important; /* Nedaudz lielāks augstums */
  width: 25px !important;  /* Padarām to par kvadrātu */
  margin-bottom: -3px;
  padding-left: -4px;
}

  </style>