<template>
    <!-- Hero/Home Section -->
    <div class="hero" id="home">
      <div class="hero__container">
        <h1 class="hero__heading">Website <span>Bobb's Buddy</span></h1>
        <p class="hero__description">bruh</p>
        <img width="200" height="200" src=
"https://cdn.glitch.com/1ec6aac2-e4bc-4077-ad9d-fd3f4c45d2a5%2Fc4a77ea7-d89a-4f27-bd4b-c042f5f653d8.image.jpeg?v=1610821975373">        <button class="main__btn"><a href="#">button</a></button>
      </div>
    </div>

    <!-- About Section -->
    <div class="main" id="about">
      <div class="main__container">
        <div class="main__img--container">
          <div class="main__img--card"><i class="fas fa-layer-group"></i></div>
        </div>
        <div class="main__content">
          <h1>bruh heading 1</h1>
          <h2>heading 2nbrih</h2>
          <p>paragraph bruh</p>
          <button class="main__btn"><a href="#">button bruh</a></button>
        </div>
      </div>
    </div>

    <!-- Services Section -->
    <div class="services" id="services">
      <h1>Our Services</h1>
      <div class="services__wrapper">
        <div class="services__card">
          <h2>heading 2 bruh</h2>
          <p>paragraph bruh</p>
          <div class="services__btn"><button>button bruh</button></div>
        </div>
        <div class="services__card">
          <h2>hruh heading 2</h2>
          <p>paragraph bruh</p>
          <div class="services__btn"><button>bruh button</button></div>
        </div>
        <div class="services__card">
          <h2>heading 2 bruh</h2>
          <p>paragraph 2 bruh</p>
          <div class="services__btn"><button>btn bruh</button></div>
        </div>
        <div class="services__card">
          <h2>heading 2 bruh</h2>
          <p>paragraph 2nbruh</p>
          <div class="services__btn"><button>another button bruh</button></div>
        </div>
      </div>
    </div>

    <!-- Features Section -->
    <div class="main" id="sign-up">
      <div class="main__container">
        <div class="main__content">
          <h1>bruh headingn1</h1>
          <h2>bruh</h2>
          <p>bruh pargaph</p>
          <button class="main__btn">
          <router-link :to="{name: 'loginPage'}">SIGN UP</router-link>
          </button>
        </div>
        <div class="main__img--container">
          <div class="main__img--card" id="card-2">
            <i class="fas fa-users"></i>
          </div>
        </div>
      </div>
    </div>
    <section>
      <div class="extras">
        <div class="extras__container">
          <div class="extras__content">
            <h1>
              Rocket league
            </h1>
          </div>
          <div class="extras__img-container">
            <img
              src="https://cdn.glitch.com/1ec6aac2-e4bc-4077-ad9d-fd3f4c45d2a5%2F7601cf29-4127-48ed-8c74-41608301a070.image.jpeg?v=1610488806349"
              width="550"
              height="350"
            />
          </div>
        </div>
      </div>
    </section>
    <!-- Footer Section -->
    <div class="footer__container">
      <div class="footer__links">
        <div class="footer__link--wrapper">
          <div class="footer__link--items">
            <h2>About Us</h2>
            <a href="signup/login.html">Signup</a> <a href="/">Testimonials</a>
            <a href="/">Careers</a> <a href="/">Terms of Service</a>
          </div>
          <div class="footer__link--items">
            <h2>Contact Us</h2>
            <a href="/">Contact</a> <a href="/">Support</a>
            <a href="/">Stuff Bruh</a>
          </div>
        </div>
        <div class="footer__link--wrapper">
          <div class="footer__link--items">
            <h2>Videos</h2>
            <a href="/">Submit Video</a> <a href="/">Amb</a>
            <a href="/">Here</a> <a href="/client/index.html">Secondary</a>
          </div>
          <div class="footer__link--items">
            <h2>Social Media</h2>
            <a href="/">Instagram</a> <a href="/">Facebook</a>
            <a href="/">Youtube</a> <a href="/">Twitter</a>
            <a href="/">Discord</a>
          </div>
        </div>
      </div>
      <section class="social__media">
        <div class="social__media--wrap">
          <div class="footer__logo">
            <a href="/" id="footer__logo">BRUH</a>
          </div>
          <p class="website__rights">© RYAN 2020. All rights reserved</p>
          <div class="social__icons">
            <a href="/" class="social__icon--link" target="_blank"
              ><i class="fab fa-facebook"></i
            ></a>
            <a href="/" class="social__icon--link"
              ><i class="fab fa-instagram"></i
            ></a>
            <a href="/" class="social__icon--link"
              ><i class="fab fa-youtube"></i
            ></a>
            <a href="/" class="social__icon--link"
              ><i class="fab fa-linkedin"></i
            ></a>
            <a href="/" class="social__icon--link"
              ><i class="fab fa-twitter"></i
            ></a>
            <a href="/" class="social__icon--link"
              ><i class="fab fa-discord"></i
            ></a>
          </div>
        </div>
      </section>
    </div>
</template>

<script>

export default {
  name: 'Main',
  
}
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: "Kumbh Sans", sans-serif;
  scroll-behavior: smooth;
  }
  .hidden {
  display: none;
}
  /* Hero Section */
.hero {
  background: #000000;
  background: linear-gradient(to right, #161616, #000000);
  padding: 200px 0;
  border-bottom: 3px ridge red;
}

.hero__container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  height: 90%;
  text-align: center;
  padding: 30px;
}

.hero__heading {
  font-size: 70px;
  margin-bottom: 24px;
  color: #fff;
}

.hero__heading span {
  background: #ee0979; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #ff6a00,
    #ee0979
  ); /* Chrome 10-25, Safari 5.1-6 */
  
  background: linear-gradient(
    to right,
    #ff6a00,
    #ee0979
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -mo-text-fill-color: transparent;
}
.hero__heading img {
z-index: 20;}
.hero__description {
  font-size: 60px;
  background: #da22ff; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #9114ff,
    #da22ff
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #8f0eff,
    #da22ff
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}

.highlight {
  border-bottom: 4px solid rgb(132, 0, 255);
}

@media screen and (max-width: 768px) {
  .hero__heading {
    font-size: 60px;
  }

  .hero__description {
    font-size: 40px;
  }
}

/* About Section */
.main {
  background-color: #131313;
  padding: 10rem 0;
  border-bottom: 3px ridge red;
}

.main__container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  height: 90%;
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  padding: 0 50px;
}

.main__content {
  color: #fff;
  width: 100%;
}

.main__content h1 {
  font-size: 2rem;
  background-color: #fe3b6f;
  background-image: linear-gradient(to top, #ff087b 0%, #ed1a52 100%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
  text-transform: uppercase;
  margin-bottom: 32px;
}

.main__content h2 {
  font-size: 4rem;
  background: #ff8177; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #9114ff,
    #da22ff
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #8f0eff,
    #da22ff
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}

.main__content p {
  margin-top: 1rem;
  font-size: 2rem;
  font-weight: 700;
}

.main__btn {
  font-size: 1.8rem;
  background: linear-gradient(to right, #fcb045, #fd1d1d, #833ab4);
  padding: 20px 60px;
  border: none;
  border-radius: 4px;
  margin-top: 2rem;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  outline: none;
}

.main__btn a {
  position: relative;
  color: #fff;
  text-decoration: none;
  overflow: hidden;
}

btnSpan {
  position: absolute;
  background: #fff;
  transform: translate(-50%, -50%);
  pointer-events: none;
  border-radius: 50%;
  animation: animate 1s linear infinite;
}
@keyframes animate {
  0% {
    width: 0px;
    height: 0px;
    opacity: 0.5;
  }
  100% {
    width: 500px;
    height: 500px;
    opacity: 0;
  }
}

.main__img--container {
  text-align: center;
}

.main__img--card {
  margin: 10px;
  height: 500px;
  width: 500px;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #fff;
  background-image: linear-gradient(to right, #00dbde 0%, #fc00ff 100%);
}

.fa-layer-group,
.fa-users {
  font-size: 14rem;
}

#card-2 {
  background: #ff512f;
  background: -webkit-linear-gradient(to right, #dd2476, #ff512f);
  background: linear-gradient(to right, #dd2476, #ff512f);
}

/* Mobile Responsive */
@media screen and (max-width: 1100px) {
  .main__container {
    display: grid;
    grid-template-columns: 1fr;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin: 0 auto;
    height: 90%;
  }

  .main__img--container {
    display: flex;
    justify-content: center;
  }

  .main__img--card {
    height: 425px;
    width: 425px;
  }

  .main__content {
    text-align: center;
    margin-bottom: 4rem;
  }

  .main__content h1 {
    font-size: 2.5rem;
    margin-top: 2rem;
  }

  .main__content h2 {
    font-size: 3rem;
  }

  .main__content p {
    margin-top: 1rem;
    font-size: 1.5rem;
  }
}

@media screen and (max-width: 480px) {
  .main__img--card {
    width: 250px;
    height: 250px;
  }

  .fa-users,
  .fa-layer-group {
    font-size: 4rem;
  }

  .main__content h1 {
    font-size: 2rem;
    margin-top: 3rem;
  }
  .main__content h2 {
    font-size: 2rem;
  }

  .main__content p {
    margin-top: 2rem;
  }

  .main__btn {
    padding: 12px 36px;
    margin: 2.5rem 0;
  }
}

/* Services Section */
.services {
  background: #131313;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 10rem 0;
  border-bottom: 3px ridge red;
}

.services h1 {
  background-color: #ff8177;
  background-image: linear-gradient(to right, #ff0844 0%, #f7673c 100%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
  margin-bottom: 5rem;
  font-size: 2.5rem;
}

.services__wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr;
}

.services__card {
  margin: 10px;
  height: 425px;
  width: 300px;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #fff;
  background-image: linear-gradient(to right, #00dbde 0%, #fc00ff 100%);
  transition: all 0.3s ease-in;
}
.services__card:hover {
  transform: scale(1.075);transition: 0.3s ease-in;
  cursor: pointer;
}

.services__card:nth-child(2) {
  background: -webkit-linear-gradient(
    to right,
    #a6ffcb,
    #12d8fa,
    #1fa2ff
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #a6ffcb,
    #12d8fa,
    #1fa2ff
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}

.services__card:nth-child(3) {
  background-image: linear-gradient(
    -225deg,
    #231557 0%,
    #44107a 29%,
    #ff1361 67%,
    #fff800 100%
  );
}

.services__card h2 {
  text-align: center;
}

.services__card p {
  text-align: center;
  margin-top: 24px;
  font-size: 20px;
}

.services__btn {
  display: flex;
  justify-content: center;
  margin-top: 16px;
}

.services__card button {
  color: #fff;
  padding: 14px 24px;
  border: none;
  outline: none;
  border-radius: 4px;
  background: #131313;
  font-size: 1rem;
}

.services__card button:hover {
  cursor: pointer;
}

/*.services__card:hover {transform: scale(1.075);transition: 0.3s ease-in;cursor: pointer;}*/

@media screen and (max-width: 1300px) {
  .services__wrapper {
    grid-template-columns: 1fr 1fr;
  }
}

@media screen and (max-width: 768px) {
  .services__wrapper {
    grid-template-columns: 1fr;
  }
}

/* Extras CSS */
.extras__container {
  background-color: #131313;
  padding: 5rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: 3px ridge red;
}
.extras__content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 87;
  color: white;
}
/* Footer CSS */
.footer__container {
  background-color: #131313;
  padding: 5rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#footer__logo {
  color: #fff;
  display: flex;
  align-items: center;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
}

.footer__links {
  width: 100%;
  max-width: 1000px;
  display: flex;
  justify-content: center;
}

.footer__link--wrapper {
  display: flex;
}

.footer__link--items {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 16px;
  text-align: left;
  width: 160px;
  box-sizing: border-box;
}

.footer__link--items h2 {
  margin-bottom: 16px;
  color: #fff;
}

.footer__link--items a {
  color: #fff;
  text-decoration: none;
  margin-bottom: 0.5rem;
  transition: 0.3 ease-out;
}

.footer__link--items a:hover {
  color: #e9e9e9;
  transition: 0.3 ease-out;
}

.social__icon--link {
  color: #fff;
  font-size: 24px;
}

.social__media {
  max-width: 1000px;
  width: 100%;
}

.social__media--wrap {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  max-width: 1000px;
  margin: 40px auto 0 auto;
}

.social__icons {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
}

.website__rights {
  color: #fff;
}

@media screen and (max-width: 820px) {
  .footer__links {
    padding-top: 2rem;
  }

  #footer__logo {
    margin-bottom: 2rem;
  }

  .website__rights {
    margin-bottom: 2rem;
  }

  .footer__link--wrapper {
    flex-direction: column;
  }

  .social__media--wrap {
    flex-direction: column;
  }
}

@media screen and (max-width: 480px) {
  .footer__link--items {
    margin: 0;
    padding: 10px;
    width: 100%;
  }
}
</style>
