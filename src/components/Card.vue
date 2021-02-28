<template>
  <div class="bb-card mdc-card">
    <div class="mdc-card__primary-action" tabindex="0">
      <div class="card-header">
        <div class="card-icon"><i class="fab fa-uncharted"></i></div>
        <div class="card-title">
          <h2 class="mdc-typography--headline6">Welcome to Bobb's Site</h2>
          <h3 class="mdc-typography--subtitle2">Find the best quality &lt;&gt;</h3>
        </div>
      </div>
      <span class="bb-line"></span>
      <div class="mdc-card__content">       
        <div class="bb-devs">
        <div v-for="dev in devs" class="bb-dev">
          <img class="avatar" :src="`https://cdn.discordapp.com/avatars/${dev.id}/${dev.avatar}.png`" height="50" width="50">
        {{dev.username}}#{{dev.discriminator}}
  </div>
  </div>
  </div>
      <div class="mdc-card__media mdc-card__media--square">
        <div class="mdc-card__media-content">Placeholder Image</div>
      </div>
    </div>
    <div class="card-body mdc-typography--body2">
Current time: {{currTime}}
  </div>
    <div class="mdc-card__actions">
      <div class="mdc-card__action-buttons">
                         <router-link :to="{name: 'loginPage'}" class="nodeco">
        <button class="mdc-button mdc-card__action mdc-card__action--button">
          <span class="mdc-button__ripple"></span>
          <span class="mdc-button__label">Auth</span>
  </button>
    </router-link>
                           <button class="mdc-button mdc-card__action mdc-card__action--button" @click="discordGet">
       <span class="mdc-button__ripple"></span>
       <span class="mdc-button__label">Discord</span>
  </button>
      </div>
      <div class="mdc-card__action-icons">
        <button class="material-icons mdc-icon-button mdc-card__action mdc-card__action--icon" title="Share">share</button>
        <button class="material-icons mdc-icon-button mdc-card__action mdc-card__action--icon" title="More options">more_vert</button>
      </div>
    </div>
  </div>
</template>

<script>
  import moment from 'moment';
  import {MDCRipple} from '@material/ripple';
  import Api from '../services/Api.js';
 export default {
 name: "Card",
   data() {
     return {
       currTime: new Date().toTimeString(),
       ripple: null,
       devs: []
     }
   },
   methods: {
   async discordGet() {//443145161057370122
     let av = "https://cdn.discordapp.com/avatars/443145161057370122/1c66d40634006a96b15fddc6584fa7d4.png"
    let b = "https://cdn.discordapp.com/avatars/800952633241501696/c6eb8c12d3623a6ca5575fdbb81892db.png"
     const disc =await Api.server.post('/discord/devs', {developers: ["443145161057370122", "@me"]}).catch(e => console.log(e));
     this.devs = disc.data.developers;
     console.log(this.devs)
   }
   },
   mounted() {
    setInterval(() => {
      this.currTime = new Date().toTimeString()
    }, 1000);
       this.ripple = [].map.call(document.querySelectorAll('.mdc-button'), el => new MDCRipple(el));
   }
 }
</script>
<style>
.bb-card {
  background: #34495e;
  height: 500px;
  color: white;
  width: 400px;
}
  .bb-line {
    display: grid;
    place-items: center;
    margin-top: 5px;
    margin-bottom: 5px;
    border-top: 1px solid white;
    color: white;
    width: 80%;
  margin-left: auto;
    margin-right: auto;
    align-text: center;
  }
  .nodeco {
    text-decoration: none;
  }
  .avatar {
    border-radius: 50%;
  margin-right: auto;
    margin-top: auto;
  }
  .av__cont {
    padding-top: 100px;
  }
  .bb-devs {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
  }
  .bb-dev {
    display: flex;
align-content: center;
    justify-content: flex-start;
    margin: 10px auto;
    background: gray;
    text-align: center;
    width: 350px;
    height: 100px;
  }
  
</style>