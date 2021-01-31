<template>
<nav class="navbar">
      <div class="navbar__container">
          
       <router-link :to="{name: 'homePage'}" id="navbar__logo">Bobb</router-link>
        <div class="navbar__toggle" id="mobile-menu" @click=mobileMenu>
          <span class="bar"></span> <span class="bar"></span>
          <span class="bar"></span>
  </div>    
                  <ul class=navbar__menu>
          <li class="navbar__item">         
            <router-link :to="{name: 'homePage'}" class="navbar__links" id="home-page">Home</router-link>
          </li>
          <li class="navbar__item">
            <a class="navbar__links" href="javascript:void(0)" id="about-page">About <i class="fas fa-angle-down"></i></a>

            <ul id="about-dropdown" class="dropdown">
              <li>
                 <a class="dropdown-item" >Contact</a>
              <li>   <a class="dropdown-item" >FAQ</a></li>
            <li>  <a class="dropdown-item" >Help</a></li>
           <li> <a class="dropdown-item" >Statistics</a></li>
              </li>  
            </ul>
        <!--    <router-link :to="{path: '/', hash: '#about'}" class="navbar__links" id="about-page" @click="log">About</router-link>-->
          </li>
          <li class="navbar__item">
            <a class="navbar__links" href="javascript:void(0)" id="services-page">Services <i class="fas fa-angle-down"></i></a>
            <ul id="services-dropdown" class="dropdown">
             <li><a class="dropdown-item">Anime</a></li> 
            <li>  <a class="dropdown-item" >Discord</a></li>
            </ul>
          </li>
          <li class="navbar__btn">
            <router-link :to="{name: 'loginPage'}" class="button" id="signup">Sign Up</router-link>
          </li>
        </ul>
  </div>
    </nav>
</template>

<script>
  export default {

  name: "navBar",
    data() {
      return {
        inDrop: false
      }
    },
methods: {
   mobileMenu (event) {
  event.target.classList.toggle('is-active');
  document.querySelector(".navbar__menu").classList.toggle('active');
    
  },
   highlightMenu (event) {
  const elem = document.querySelector('.highlight');
  const hero = document.querySelector('.hero'); // to make sure user is in homepage
     if(hero) {
       const aboutMenu = document.querySelector('#about-page');
       const servicesMenu = document.querySelector('#services-page');
       const aboutDropdown = document.querySelector('#about-dropdown');
       const servicesDropdown = document.querySelector('#services-dropdown');
       const homeMenu = document.querySelector('#home-page');
  let scrollPos = window.scrollY;
  // adds 'highlight' class to my menu items
  if (window.innerWidth > 960 && scrollPos < 600) {
    homeMenu.classList.add('highlight');
    aboutMenu.classList.remove('highlight');
    servicesMenu.classList.remove('highlight');
    return;
  } else if (window.innerWidth > 960 && scrollPos < 1400) {
    aboutMenu.classList.add('highlight');
    homeMenu.classList.remove('highlight');
    servicesMenu.classList.remove('highlight');
    return;
  } else if (window.innerWidth > 960 && scrollPos < 2345) {
    servicesMenu.classList.add('highlight');
    aboutMenu.classList.remove('highlight');
    homeMenu.classList.remove('highlight');
    return;
  }

  if ((elem && window.innerWidth < 960 && scrollPos < 600) || elem) {
    elem.classList.remove('highlight');
  }
}
   }
},
    
    created() {

      window.addEventListener('scroll', this.highlightMenu);   
      window.addEventListener('click', this.highlightMenu);
      
      },
    unmounted() {

            window.removeEventListener('scroll', this.highlightMenu);    
      window.removeEventListener('click', this.highlightMenu);
      }
      
  
   
}
</script>
<style >
  *{
    margin: 0;
  }
</style>
<style scoped>
/** {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: "Kumbh Sans", sans-serif;scroll-behavior: smooth;
}*/

  
  i {
    margin-left: 6px;
  }
  .highlight {
  border-bottom: 4px solid rgb(132, 0, 255);
}
.hidden {
  display: none;
}
.navbar {
  background: #34495e;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  position: fixed !important;
  top: 0;
  width: 100%;
  font-family: "Kumbh Sans", sans-serif;scroll-behavior: smooth;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  z-index: 999;
  -webkit-box-shadow:0px 2px 2px #2b3c4e;
  -moz-box-shadow:0px 2px 2px #2b3c4e;
  box-shadow:0px 2px 2px #2b3c4e;
}

.navbar__container {
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 50px;
}

#navbar__logo {
  background-color: #ff8177;
  background-image: linear-gradient(to top, #ff0844 0%, #ffb199 100%);
  background-size: 100%; -webkit-background-clip: text; 
  -moz-background-clip: text;/* -webkit-text-fill-color: transparent;*/
  -moz-text-fill-color: transparent; 
  display: flex; 
  align-items: center; 
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
}
  
.navbar__menu {
  display: flex;
 align-items: center;
  list-style: none;
  justify-content: flex-end;
  float: right;
}

.navbar__item {
  height: 60px;
  border: 2px solid white;
  border-radius: 20px;
  margin: 15px;
}

.navbar__links {
  outline: none;
  background: none;
    border-radius: 20px;
  font-size: 16px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 125px;
  text-decoration: none;
  height: 100%;
  transition: all 0.3s ease;
}
  .dropdown {
    list-style: none;
    display: none;
    position: absolute;
  background-color: #2b3c4e;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 109;
  }
  .dropdown-item {
      color: white;
  padding: 12px 16px;
    font-size: 12px;
  text-decoration: none;
  display: block;
  }
.navbar__item:hover .dropdown {
   display: block;
   margin-top: 15px;
  }
.navbar__btn {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 1rem;
  width: 100%;
}

.button {
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  padding: 10px 20px;
  height: 100%;
  width: 100%;
  border: none;
  outline: none;
  border-radius: 4px;
  background: #833ab4;
  background: -webkit-linear-gradient(to right, #fcb045, #fd1d1d, #833ab4);
  background: linear-gradient(to right, #fcb045, #fd1d1d, #833ab4);
  color: #fff;
  transition: all 0.3s ease;
}

.navbar__links:hover {
  color: #85b4ff;
  transition: all 0.3s ease;
}
  .navbar__item:hover {
      border: 3px solid black;transition: all 0.3s ease;
    }



  

@media screen and (max-width: 960px) {
  .navbar__container {
    display: flex;
    /*flex-direction: column;*/
    justify-content: space-between; 
    height: 80px;
    z-index: 1;
    width: 100%;
   max-width: 1300px;
    padding: 0;
  }

  .navbar__menu {
  /*  display: grid;
    grid-template-columns: auto;*/
    padding-top: 20px;
    display: flex;
       justify-content: space-between; align-items: center;
    flex-direction: column;
    margin: 0;
    width: 100%;
    position: absolute;
    top: -1000px;
    opacity: 1;
    transition: all 0.5s ease;
    z-index: -1;
  }

  .navbar__menu.active {
    background: #131313;
    top: 100%;
    opacity: 1;
    transition: all 0.5s ease;
    z-index: 99;
    height: 60vh;
    font-size: 1.6rem;
  }

  #navbar__logo {
    padding-left: 25px;
    padding-top: 15px;
    display: block;
    position: absolute;

  }

  .navbar__toggle .bar {
    width: 25px;
    height: 3px;
    margin: 5px auto;
    transition: all 0.3s ease-in-out;
    background: #fff;
  }

  .navbar__item {
  
    width: 60%;
    text-align: center;
  }

  .navbar__links {
    text-align: center;
    width: 100%;
  }

  .navbar__btn {
    padding-bottom: 2rem;
  }

  .button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80%;
    height: 80px;
    margin: 0;
  }

  #mobile-menu {
    position: absolute;
    top: 20%;
    right: 5%;
    transform: translate(5%, 20%);
  }

  .navbar__toggle .bar {
    display: block;
    cursor: pointer;
  }

  #mobile-menu.is-active .bar:nth-child(2) {
    opacity: 0;
  }

  #mobile-menu.is-active .bar:nth-child(1) {
    transform: translateY(8px) rotate(45deg);
  }

  #mobile-menu.is-active .bar:nth-child(3) {
    transform: translateY(-8px) rotate(-45deg);
  }
}
</style>