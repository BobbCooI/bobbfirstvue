<template>
<footer>
  <span id="footer-line"></span>
<section class="bb-footer">
  
      <div class="bb-logo">
        <router-link :to="{name: 'homePage'}" class="bb-logo">
          <img alt="Bobb" src="https://cdn.glitch.com/545c6a09-83e2-4c7a-a235-61a147f78bd8%2F734F1757-795B-4442-9DA0-C2AC93E29183.png?v=1612316577670" width="250" height="75">
        </router-link>
      </div>
  
  <div><p class="bb-website-rights"><b>Copyright © 2021 bobbSite</b></p></div>   
      <div class="bb-socials">
          <a href="/" class="bb-icon-link" target="_blank"
            ><i class="fab fa-facebook"></i></a
          ><a href="/" class="bb-icon-link"
            ><i class="fab fa-instagram"></i
          ></a>
          <a href="/" class="bb-icon-link"
            ><i class="fab fa-youtube"></i
          ></a>
          <a href="/" class="bb-icon-link"><i class="fab fa-linkedin"></i></a>
          <a href="/" class="bb-icon-link"
            ><i class="fab fa-twitter"></i
          ></a>
          <a href="/" class="bb-icon-link"
            ><i class="fab fa-discord"></i
          ></a>
        </div>
  </section>
  </footer>
</template>
<script>
export default {
  
}
</script>
<style>
  footer {
    min-height: 10%;
    display: flex;
    flex-direction: column;
  }
  .bb-logo {
    display: flex;
    margin: 5px auto 0 auto;
  }
  .bb-website-rights {
    display: flex;
    margin: 2.5rem auto 0 auto;
    text-transform: uppercase;
    color: white
  }
  .bb-footer {
    display: flex;
    justify-content: space-between;
    position: relative;
    bottom: 0;
    width: 100%;
    z-index: 3000;
    margin-right: 5%;
  }
  #footer-line {
    display: grid;
   place-items: center;
    border-top: 1px solid white;
    width: 86%;
    margin-left: 7%;
    align-text: center;
  }
  .bb-socials {
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 20%;
    float: right;
    margin: 20px auto 0 auto;
    margin-right: 5%
}
.bb-icon-link {
	display: flex;
	justify-content: flex-end;
	align-items: center;
  font-size: 20px;
  text-decoration: none;
  color: white;
}
@media screen and (max-width: 820px) {
	.bb-socials {
		padding-top: 2rem;
	}
	.bb-logo {
		margin-bottom: 2rem;
	}
	.bb-website-rights {
		margin-bottom: 2rem;
	}
	.bb-socials {
    position: relative;
    right: 30%;
	}
}
</style>