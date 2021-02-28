<template>
   <div id="codeContainer">
     <div id="inputCont">
            <textarea id="codeMirror" @keyup="shorten"></textarea>
  </div>
     <div id="outputCont">
       <textarea id="codeOutput"></textarea>
  </div>
  </div>
  
</template>


<script>
export default {
    data() {
      return {
        codeMirror: null,
        codeOutput: null
               }
    },
  /*created() {
        this.setAttributes(document.createElement('link'),{rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.59.1/addon/scroll/simplescrollbars.min.css"});
        this.setAttributes(document.createElement('link'),{rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.59.1/codemirror.min.css"});
            this.setAttributes(document.createElement('link'),{rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.59.1/theme/dracula.min.css"});
            this.setAttributes(document.createElement('script'),{src: "https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.59.1/codemirror.min.js"});
            this.setAttributes(document.createElement('script'),{src: "https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.59.1/mode/javascript/javascript.min.js"});
            this.setAttributes(document.createElement('script'),{src: "https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.59.1/mode/meta.min.js"});
    this.setAttributes(document.createElement('script'),{src: "https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.59.1/addon/scroll/simplescrollbars.min.js"});
    this.setAttributes(document.createElement('script'),{src: "https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.59.1/addon/edit/closebrackets.min.js"});
  },*/
  mounted() {
    this.codeMirror = new CodeMirror.fromTextArea(document.querySelector("#codeMirror"), {
  mode: "javascript",
     lineNumbers: true,
  theme: "dracula",
  lineWrapping: true,
  scrollbarStyle: "overlay",
  autoCloseBrackets: true,
});
      this.codeMirror.setValue(
  `
function greet(name) {
  console.log("Hello, " + name + "!");
}
greet("wo" + 'r' + "ld")
`.trim() + "\n"
);
    this.codeOutput=new CodeMirror.fromTextArea(document.getElementById("codeOutput"), {
  lineNumbers: true,
  mode: "javascript",
  theme: "dracula",
  lineWrapping: true,
  scrollbarStyle: "overlay",
  autoCloseBrackets: true,
  readOnly: true,
});
    this.shorten();

},
methods: {
 setAttributes(el, attrs) {
  for(var key in attrs) {
    el.setAttribute(key, attrs[key]);
  };
   document.head.appendChild(el);
},
   shorten() {
  const code = this.codeMirror.getValue();
  const result = UglifyJS.minify(code);
  if (result.error !== undefined) {
    this.codeOutput.setValue(`${result.error}`);
  } else {
    this.codeOutput.setValue(`${result.code}`);
  }
}
}
};
</script>

<style>
  #codeContainer {
    max-width: 45%;
    margin-left: 20px;
  }
 .CodeMirror { text-align: left!important; } /* Aligns code to left */
</style>