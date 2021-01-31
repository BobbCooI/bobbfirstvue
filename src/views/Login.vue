  <template >

<div id="authSection">

<form class="auth__box" action="....." method="post">
        <input
          type="button"
          value="Back"
          onclick="history.back()"
          class="back__btn"
         />

        <h1>Login</h1>
        <input
          type="text"
          id="pUsername"
          name="pUsername"
          placeholder="Username"
          pattern="[a-zA-Z0-9]+"
          title="Usernames should only have letters a-Z and/or numbers."
          class="inputBox"
          autocomplete="on"
          required
        />
        <input
          id="pPassword"
          type="password"
          name="pPassword"
          placeholder="Password"
          class="inputBox"              
          autocomplete="on"
          required
        />
        <input id="pSubmit" type="submit" name="pSubmit" value="Login"/>
        <p id="forgot__pass">
          Forgot your password?
          <router-link :to="{name: 'homePage'}" id="reset">Reset</router-link> it!
          <br>
          Don't have an account? <router-link :to="{name: 'registerPage'}" id="register">Register</router-link>!
        </p>
      </form> 
    </div>
</template>

<script>
 // import Nav from '../components/Nav.vue';
export default {
  //beforeCreate() { document.body.className = 'loginPage'; },
  name: "loginPage",
  components: {

  }
  //unmounted() {document.body.classList.remove('loginPage');}
}
</script>

<style>
  
body {
  margin: 0;
  padding: 0; 
  font-family: sans-serif; 
  width: 100%;
  min-height: 100%;
text-align: center; 
  margin-top: 80px;
  }
  #authSection {
    display: flex;
    text-align: center;
    justify-content: center;
    align-content: center;
  }
.auth__box {
    margin-top: 80px;


  width: 400px;
  padding: 60px;
  top: 50%;
 /* left: 50%;
  transform: translate(-50%, -50%);*/
  background: #191919;
  text-align: center;
 display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 100px;
  }

.back__btn {
margin-bottom: 20px;
  width: 20%; 
  text-align: center;
  background: none;
  padding: 3px;
  border: 2px solid #555555;
  font-size: 12px;
  color: white;
  transition: 0.25s;
  border-radius: 24px;
}
.back__btn:hover {
  background-color: #555555;
  background: none;
  text-align: center;
}

.auth__box h1 {
  color: white;
  text-transform: uppercase;
  font-weight: 500;
}
#forgot__pass {
  font-size: 10px;
  color: white;
}
#reset {
  color: #3498db;
}
.inputBox {
  display: flex;
  flex-direction: column;
  border: 0;
  background: none;
  display: block;
 margin: 20px auto;
  text-align: center;
  border: 2px solid #555555;
 padding: 14px 10px;
  font-size: 13px;
  width: 200px;
  outline: none;
  color: white;
  border-radius: 24px;
  transition: 0.25s;
}

.inputBox:focus{ 
  transform: scale(1.15);
  transition: 0.2s ease-out;

  font-size: 13px;
  border-color: #3498db;
}

.inputBox:not(:placeholder-shown):invalid {
  border-color: red;
}


#pSubmit  {
  background: none;
  text-align: center;
  margin: 20px auto;
  border: 2px solid #2ecc71;
  width: 200px;
  outline: none;
  color: white;
  padding: 14px 40px;
  border-radius: 24px;
  transition: 0.25s; 
  cursor: pointer;
}

#pSubmit:hover  {
  background-color: #2ecc71;
  background: none;
  margin: 20px auto;
  text-align: center;
  border: 2px solid #2ecc71;
  padding: 14px 40px;
  width: 200px;
  outline: none;
  color: white;
  border-radius: 24px;
  transition: 0.25s; 
  cursor: pointer;


  }

.animated {
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}

.animated.infinite {
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
}

.animated.hinge {
  -webkit-animation-duration: 2s;
  animation-duration: 2s;
}

.animated.bounceIn,
.animated.bounceOut {
  -webkit-animation-duration: .75s;
  animation-duration: .75s;
}

.animated.flipOutX,
.animated.flipOutY {
  -webkit-animation-duration: .75s;
  animation-duration: .75s;
}

@-webkit-keyframes shake {
  from, to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  10%, 30%, 50%, 70%, 90% {
    -webkit-transform: translate3d(-10px, 0, 0);
    transform: translate3d(-10px, 0, 0);
  }

  20%, 40%, 60%, 80% {
    -webkit-transform: translate3d(10px, 0, 0);
    transform: translate3d(10px, 0, 0);
  }
}

@keyframes shake {
  from, to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  10%, 30%, 50%, 70%, 90% {
    -webkit-transform: translate3d(-10px, 0, 0);
    transform: translate3d(-10px, 0, 0);
  }

  20%, 40%, 60%, 80% {
    -webkit-transform: translate3d(10px, 0, 0);
    transform: translate3d(10px, 0, 0);
  }
}

.shake {
  -webkit-animation-name: shake;
  animation-name: shake;
}
</style>