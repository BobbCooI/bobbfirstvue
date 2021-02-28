<template>
<nav class="navbar">
      <div class="navbar__container">
          
       <router-link :to="{name: 'homePage'}" id="navbar__logo">
         <img alt="Bobb" src="https://cdn.glitch.com/545c6a09-83e2-4c7a-a235-61a147f78bd8%2F734F1757-795B-4442-9DA0-C2AC93E29183.png?v=1612316577670" width="250" height="75"                                                                   ></router-link>
        <div class="navbar__toggle" id="mobile-menu" @click=mobileMenu>
          <span class="bar"></span> <span class="bar"></span>
          <span class="bar"></span>
        </div>    
        <ul class=navbar__menu>
          <li class="navbar__item">         
            <router-link :to="{name: 'homePage'}" class="navbar__links" id="home-page" ontouchstart="">Home</router-link>
          </li>
          <li class="navbar__item">
            <a class="navbar__links" href="javascript:void(0)" id="about-page" :class="{'router-link-active': subIsActive(['/faq', '/contact', '/help', '/statistics'])}" ontouchstart="" @click="aboutDrop=!aboutDrop">About <i class="fas fa-angle-down"></i></a>
            <ul id="about-dropdown" class="dropdown" v-if="aboutDrop">
              <li>
                 <router-link :to="{name: 'contactPage'}" class="dropdown-item" >Contact</router-link>
              <li>   <router-link :to="{name: 'FAQpage'}" class="dropdown-item" >FAQ</router-link></li>
            <li>  <a class="dropdown-item" >Help</a></li>
           <li> <router-link :to="{name: 'statisticsPage'}" class="dropdown-item" >Statistics</router-link></li>
              </li>  
            </ul>
        <!--    <router-link :to="{path: '/', hash: '#about'}" class="navbar__links" id="about-page" @click="log">About</router-link>-->
          </li>
          <li class="navbar__item">
            <a class="navbar__links" href="javascript:void(0)" id="services-page" ontouchstart="" @click="servicesDrop=!servicesDrop">Services <i class="fas fa-angle-down"></i></a>
            <ul id="services-dropdown" class="dropdown" v-if="servicesDrop">
             <li><router-link class="dropdown-item" :to="{name: 'animesPage'}">Vid</router-link></li> 
             <li>  <a class="dropdown-item" >Discord</a></li>
             <li><router-link class="dropdown-item" :to="{name: 'converterPage'}">Converter</router-link></li> 
           <li><router-link class="dropdown-item" :to="{name: 'codeBoxPage'}">Code</router-link></li> 
  </ul>
          </li>
         <li v-if="loggedIn" class = "navbar__item">
            <a class="navbar__links" href="javascript:void(0)" ontouchstart="" @click="accountDrop=!accountDrop"><i class="fas fa-user-check"></i> Account <i class="fas fa-angle-down"></i></a>
        <ul id="account-dropdown" class="dropdown" v-if="accountDrop">
          <li><router-link class="dropdown-item" :to="{name: 'profilePage'}">Profile</router-link></li>
          <li><a class="dropdown-item" @click=logout>Logout</a></li>
        </ul>
          </li>
          <li v-else class="navbar__btn">    
            <router-link :to="{name: 'loginPage'}" class="button" id="signup">Sign Up</router-link>
          </li>
        </ul>
  </div>
    </nav>

<Notify v-if="loggedOut" description="Successfully logged out."></Notify>
</template>

<script>
  import { mapState } from 'vuex';
  import Notify from './Notify.vue';
  export default {

  name: "navBar",
    data() {
      return {
        aboutDrop: false,
        servicesDrop: false,
        accountDrop: false,
        loggedOut: false,
        logoutBar: null
      }
    },
    components:{Notify},
        mounted() {
          console.log(document.querySelector('.mdc-snackbar'));
   //       this.logoutBar
      //    const log= new MDCSnackbar(document.querySelector('.mdc-snackbar'));
        },


methods: {
      logout () {
      this.$store.dispatch('setToken', null);
      this.$store.dispatch('setUser', null);
        this.loggedOut = true;
      this.$router.push({
        name: 'homePage'
      });
   },
   mobileMenu (event) {
     document.querySelector('#mobile-menu').classList.toggle('is-active');
     document.querySelector(".navbar__menu").classList.toggle('active');
   },
    subIsActive(input) {
    const paths = Array.isArray(input) ? input : [input] 
    return paths.some(path => {
      return this.$route.path.indexOf(path) === 0 // current path starts with this path string
    }) 
  }
  
},
    computed: {
         ...mapState([
      'loggedIn',
      'userInfo'
    ])
    }
}
</script>
<style >
  *{
    margin: 0;
  }
</style>
<style scoped>
  i {
    margin-left: 6px;
  }
 .router-link-exact-active, .highlight, .router-link-active {
   color: #85b4ff !important;
    border-bottom: 4px solid #85b4ff !important;
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
  -webkit-box-shadow:0px 2px 2px #2b3c4e;-moz-box-shadow:0px 2px 2px #2b3c4e;box-shadow:0px 2px 2px #2b3c4e;
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
  -moz-background-clip: text;
  -moz-text-fill-color: transparent; 
  display: flex; 
  align-items: center; 
  cursor: pointer;
  text-decoration: none !important;
  font-size: 2rem;
  border-style: none !important;
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
  .fa-user-check {
    margin-right: 3px;
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
  .dropdown:after {
    display: none;
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
    justify-content: space-between; 
    height: 80px;
    z-index: 1;
    width: 100%;
   max-width: 1300px;
    padding: 0;
  }

  .navbar__menu {
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