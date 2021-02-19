<template>
<div class="panel">
<button class="panel-question" @click="showPanel">
  <slot class="question-text" name="question">Default Slot</slot>
</button>
  <div v-show='isActive' class="panel-answer hidden">
<slot name="answer">Answer</slot>
  </div>
  </div>
</template>

<script>
export default {
  props: {
    question: {
      type: String,
      default: 'Tab'
    }
  },
  data () {
    return {
      isActive: true
    }
  },
  created() {
  },
  methods: {
    showPanel(event) {
        event.target.classList.toggle('active');
    
      let next = event.target.nextElementSibling;
              next.classList.toggle('hidden')
      console.log(next, next.className);
      if (next.style.maxHeight){
        console.log('maxHeight', next.style.maxHeight)
		      next.style.maxHeight = null            //`${next.style.maxHeight - next.scrollHeight}px`;
		    } else {
		      next.style.maxHeight = next.scrollHeight + "px";
		    } 
    }
  }
}
</script>
<style>
/* Style the buttons that are used to open and close the accordion panel */
  .panel {
    padding-bottom: 10px;
  }
	.panel-question {
		background-color: #144261;
    border-radius: 20px;
	  color: #FFF;
		cursor: pointer;
		padding: 14px;
		width: 60%;
		text-align: left;
		outline: none;
    transition: 0.4s;
    font: 20px Lato, sans-serif;
    padding-bottom: 20px;
    -webkit-box-shadow:2px 2px 2px #2b3c4e;
    -moz-box-shadow:2px 2px 2px #2b3c4e;
    box-shadow:2px 2px 2px #2b3c4e;
	}
  .question-text {
    text-align: center;
    margin-top: 5px;
  }
		/* Add a background color to the button if it is clicked on (add the .active class with JS), and when you move the mouse over it (hover) */
  .active {
		background-color: #52a6de;
    transition: 0.4s;
	}

		/* Style the accordion panel. Note: hidden by default */
 .panel-answer {
    display: block;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
		padding: 0 14px;
    background: none;
    max-height: 0;
    width: 60%;
		overflow: hidden;
		transition: max-height 0.2s ease-out;
    margin-top: 15px;
    margin-bottom: 30px;
    font-family: 'Verdana', sans-serif;
    font-weight: 530;
    transition: max-height 0.2s ease-out;
  }

  p {
		font: 16px Lato, sans-serif; 
	}
  .hidden {
    display: none !important;
    transition: 0.4s;
  }
	.panel-question:after {
	  content: '\142F';
    font-size: 13px;
		float: right;
		margin-left: 5px;
	}

		.active:after {
	  content: '\1431';
  }
</style>