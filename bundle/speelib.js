class Spee{constructor(){this.sr=new webkitSpeechRecognition,this.sr.continuous=!0,this.sr.onresult=(t=>{this.ontext(t.results[t.results.length-1][0].transcript)}),this.ontext=null}start(){this.sr.start()}stop(){this.sr.stop()}}

