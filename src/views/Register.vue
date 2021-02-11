  <template >

<div id="authSection">

<form class="auth__box" method="post" @submit="submitCheck" action="javascript:void(0)">
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
                 ref="emailBox"
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
               ref="userBox"
               @invalid="invalidUser"
               @input="inputCheck"
               @blur="userCheck"
               required/>
        <input
          id="pPassword"
          type="password"
          name="pPassword"
          placeholder="Password"
          class="inputBox"              
               ref="passBox"
               autocomplete="on"
          v-model="pPassword"
          required
        />
        <input id="pSubmit" type="submit" name="pSubmit" value="Register"/>
          <br>
  <div id="notify" ref="errBox">{{error}}</div>
      </form> 
    </div>
<div>
  {{pUsername}}
    </div>
</template>

<script>
  //import Nav from '../components/Nav.vue';
import Api from '../services/Api.js';

export default {
  beforeCreate() {
    document.body.className = 'registerPage'; 
  },
  name: "registerPage",
  data() {
    return {
      pUsername: '',
      pPassword: '',
      pEmail: '',
      errBox: document.querySelector('#notify'),
      error: ''
    }
  },
  components: {

  },
  methods: {
    async userCheck() {
      if(this.pUsername.length >= 1) {
        const data = {
          usernameCheck: true,
          pUsername: this.pUsername
        };
        try {
          let res = await Api().post('/auth/userCheck', data);
          if(res.status === 200) this.$refs.userBox.style["border-color"] = "#2ecc71";
        } catch (e) {
          this.error = e.response.data.error;
          this.$refs.errBox.style.display = "block";
          this.$refs.userBox.style["border-color"] = "red";
        }
      }
    },
    
    invalidUser() {
      event.preventDefault();
      if (!event.target.validity.valid && this.pUsername.length > 0) this.error = "Username should only contain letters and numbers. Example: John123";
    },
    
    inputCheck() {
      if ("block" === this.$refs.errBox.style.display) {
        this.$refs.errBox.style.display = "none";
      }
      this.$refs.userBox.style["border-color"] = "#3498db";
    },
       
    async submitCheck(event) {
      if (this.$refs.userBox.style["border-color"] === "red" || this.$refs.errBox.style.display==="block") {
        event.preventDefault();
        this.$refs.errBox.classList.add("animated", "shake");
      } else {
        let data = {
          pEmail: this.pEmail, 
          pUsername: this.pUsername,
          pPassword: this.pPassword,
          pSubmit: 'Register'
        };
        try {
          let res = await Api().post('/auth/register', data);
          pSubmit.disabled= true;
          this.$router.push({
             name: 'homePage'
           })
        } catch(e) {
           this.error = e.response.data.error;
        }
      }
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