


<!-- src/components/Header.vue -->
<template>
  <nav class="navbar">
    <!-- Kreisā puse -->
    <div class="nav-links">
    <ul>
      <li><RouterLink to="/">{{ $t('home-button') }}</RouterLink></li>
      <li><RouterLink to="/about">{{ $t('about-me-button') }}</RouterLink></li>
      <li><RouterLink to="/blog">{{ $t('blog-button') }}</RouterLink></li>
      <li><RouterLink to="/shop">{{ $t('shop-button') }}</RouterLink></li>
    </ul>
  </div>


  <!-- Labā puse
    <div class="language-switcher">
      <button @click="switchLanguage('lv')">LV</button>
      <button @click="switchLanguage('en')">EN</button>
      </div> -->


<div class="language-switcher">
    <!-- Pašreizējā valoda (rādās vienmēr) -->
    <button class="current-lang">
      {{ locale.toUpperCase() }}
    </button>
    
    <!-- Nolaižamā izvēlne (parādās uz hover) -->
    <div class="dropdown-content">
      <button v-for="lang in availableLanguages" :key="lang" @click="switchLanguage(lang)">
        {{ lang.toUpperCase() }}
      </button>
    </div>
  </div>

  </nav>

 
</template>


<script setup>
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { useRouter, useRoute } from 'vue-router'; // 1. Importē arī useRoute

const { locale } = useI18n();

// Saraksts ar citām valodām (izslēdzot pašreizējo)
const availableLanguages = ref(['lv', 'en']);

const switchLanguage = (lang) => {
  locale.value = lang;

const router = useRouter();
const route = useRoute(); // 2. Pievieno šo rindiņu

// const switchLanguage = (lang) => {
//   locale.value = lang; 
//   localStorage.setItem('lang', lang); 
  
  // 3. Izmanto route.path, lai paliktu tajā pašā adresē
  // Šeit mēs pasakām: "ej uz to pašu ceļu, kur esmu, bet maini valodas kodu"
  router.push({ path: route.path, query: { lang: lang } }); 
};
</script>





<!-- #region style -->
  <style scoped>

.language-switcher {
  position: relative; /* Svarīgs punkts! */
  display: inline-block;
}

.language-switcher button {
  margin-left: 10px;
  cursor: pointer;
  position: relative;
  display: inline-block;
  width: 30px;
}

/* Sākumā paslēpjam sarakstu */
.dropdown-content {
  display: none;
  position: absolute;
  top: 100%;
  right: 0;
  background-color: white;

  
  width: 30px;
  padding: 0;
  margin: 0;
  list-style: none;
  box-shadow: 0px 8px 16px rgba(0,0,0,0.2);
  z-index: 10;
  /* Šis ir "tiltiņš", lai pele nepazaudētu kontaktu */
  padding-top: 5px;
}

.current-lang {
  width: 100%; /* Poga aizņem visu konteinera platumu */
  background: rgba(255, 255, 255, 0.2); /* Pusskaidrs balts fons */
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.3);
  /* padding: 8px 16px; */
  border-radius: 10px; /* Apaļas malas */
  font-weight: 400;
  cursor: pointer;
  transition: all 0.3s ease;
  height: 20px;
}

/* Parādām sarakstu, kad uzbrauc ar peli uz .language-switcher */
.language-switcher:hover .dropdown-content {
  display: block;
}

.dropdown-content button {
  display: block !important;
  width: 100% !important;
  margin: 0 !important;
  padding: 8px 0;
  border: none;
  background: none;
  cursor: pointer;
  text-align: center;
  box-sizing: border-box;
}

.dropdown-content button:hover {
  background-color: #f1f1f1;
}

/* Pievieno šo savam Header.vue */
html, body {
  overflow-x: hidden; /* Šis ir galvenais līdzeklis pret horizontālo bīdni */
}

  .navbar {
    background-color: #00bcd4;
    width: 100%;
    max-width: 100vw; /* Pārliecinās, ka navbar nevar būt platāks par ekrānu */ 
    box-sizing: border-box; /* Pārliecinās, ka padding netiek pieskaitīts platumam */
    position: relative; /* vai sticky, ja gribi to fiksētu */
  z-index: 1000;      /* tas liek elementam būt "virs" visa cita */
  cursor: default;    /* lai peles kursors mainās uz rociņu */

  display: flex; /* Ieslēdz Flexbox režīmu */
  justify-content: space-between; /* Izstumj elementus uz pretējām malām */
  align-items: center; /* Nolīdzina vertikāli pa vidu */
  padding: 0px 20px;



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


/* Stils navigācijas saitēm (Sākums, Par mani, u.c.) */
.nav-links a {
  text-decoration: none; /* Noņem pasvītrojumu */
  color: white;          /* Pamatkrāsa (nomaini pēc vajadzības) */
  transition: color 0.3s ease; /* Padara pāreju vienmērīgu */
}
.nav-links a:hover {
  color: #003366; /* Tumši zila krāsa uzbraucot */
}

/* Pievieno pointer tikai saitēm un pogām */
.nav-links a, 
.current-lang, 
.dropdown-content button {
  cursor: pointer;
}




  </style>
  <!-- #endregion -->