  <template >

<div id="authSection">

<form class="auth__box" method="post" @submit="submitCheck" action="/api/auth">
        <input
          type="button"
          value="Back"
          onclick="history.back()"
          class="back__btn"
        />

        <h1>Register</h1>
          <input   
                 type="email"  
                 id="pEmail"  
                 name="pEmail"   
                 placeholder="Email"  
                 title="Please enter a valid email."       
                 class="inputBox"    
                 v-model="pEmail"       
                 autocomplete="on"  
                 required/>


        <input   
               type="text"     
               id="pUsername"     
               name="pUsername"     
               placeholder="Username"     
               pattern="[a-zA-Z0-9]+"      
               title="Usernames should only have letters a-Z and/or numbers."      
               class="inputBox"  
               v-model="pUsername"    
               autocomplete="on"  
               @blur="userCheck"
               required/>
        <input
          id="pPassword"
          type="password"
          name="pPassword"
          placeholder="Password"
          class="inputBox"              
          autocomplete="on"
          v-model="pPassword"
          required
        />
        <input id="pSubmit" type="submit" name="pSubmit" value="Register"/>
          <br>
      </form> 
    </div>
<div>
  {{pUsername}}
    </div>
</template>

<script>
  //import Nav from '../components/Nav.vue';

   const registerBox = document.querySelector('.auth__box');
  const pUsername = document.querySelector("#pUsername");
const pPassword = document.querySelector("#pPassword");
const pEmail = document.querySelector("#pEmail");
export default {
  beforeCreate() {document.body.className = 'registerPage'; },
  name: "registerPage",
  data() {
    return {
      elem: document.createElement("div"),
      pUsername: '',
      pPassword: '',
      pEmail: ''
    }
  },
  components: {

  },
  methods: {
    async userCheck() {
      
const data = {
  usernameCheck: true,
  pUsername: this.pUsername
};
      console.log(data);
    let req = await fetch("/api/auth", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  }).catch(e => console.log(e));
  //let res = await req.json();
      console.log(req)
/* if (res["exists"]) {
    this.elem.textContent = `Username "${pUsername.value}" is taken. Try a different one.`;
    this.elem.className = "error";
    this.elem.style.display = "block";
    this.elem.style.background = "#8b0000";
    this.elem.style.padding = "10px 4px";
    this.elem.style.color = "#D3D3D3";
    this.pUsername.style["border-color"] = "red";
  } else if (!res["exists"]) {
    pUsername.style["border-color"] = "#2ecc71";
  }*/
},
    submitCheck(event) {
      registerBox.addEventListener("submit", function(event) {
  if (pUsername.style["border-color"] === "red") {
    event.preventDefault();
    elem.classList.add("animated", "shake");
  }
});
    }
    },
  unmounted() { document.body.classList.remove('registerPage'); }
}
</script>
<style>
  body.registerPage {
    margin-top: 80px;
  }
</style>