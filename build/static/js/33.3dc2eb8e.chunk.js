(this.webpackJsonpGreatLakes=this.webpackJsonpGreatLakes||[]).push([[33],{1575:function(e,o,t){"use strict";t.r(o);t(0);var r=t(1597),n=t(595),a=t(3);o.default=function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)("h2",{children:"Firebase"}),Object(a.jsx)("p",{children:"Emilus comes with Firebase integration and uses it as default authentication option in demo, you can use or remove it depend on your project fit."}),Object(a.jsxs)("div",{className:"mt-4",children:[Object(a.jsx)("h4",{children:"Config Firebase"}),Object(a.jsxs)("p",{children:["Go to ",Object(a.jsx)("code",{children:"FirebaseConfig.js"})," located at directory ",Object(a.jsx)("code",{children:"configs/"})," and enter the config value that able to acquire from your firebase account."]}),Object(a.jsx)(r.a,{className:"hl-code",language:"javascript",style:n.a,children:"export default {\n\tapiKey: '<API_KEY>',\n\tauthDomain: '<PROJECT_ID>.firebaseapp.com',\n\tdatabaseURL: 'https://<DATABASE_NAME>.firebaseio.com',\n\tprojectId: '<PROJECT_ID>',\n\tstorageBucket: '<BUCKET>.appspot.com',\n\tmessagingSenderId: '<SENDER_ID>',\n\tappId: '<APP_ID>',\n\tmeasurementId: '<MEASUREMENT_ID>'\n};\n"})]}),Object(a.jsxs)("div",{className:"mt-4",children:[Object(a.jsx)("h4",{children:"Setup"}),Object(a.jsxs)("p",{children:["You can set your own authentication provider at ",Object(a.jsx)("code",{children:"auth/FirebaseAuth.js"}),". The following code is the default for Firebase."]}),Object(a.jsx)(r.a,{className:"hl-code",language:"javascript",style:n.a,children:"import firebase from 'firebase';\nimport firebaseConfig from 'configs/FirebaseConfig';\n\nfirebase.initializeApp(firebaseConfig);\n\n// firebase utils\nconst db = firebase.firestore()\nconst auth = firebase.auth();\nconst currentUser = auth.currentUser\nconst googleAuthProvider = new firebase.auth.GoogleAuthProvider();\nconst facebookAuthProvider = new firebase.auth.FacebookAuthProvider();\nconst twitterAuthProvider = new firebase.auth.TwitterAuthProvider();\nconst githubAuthProvider = new firebase.auth.GithubAuthProvider();\n\nexport {\n\tdb,\n\tauth,\n\tcurrentUser,\n\tgoogleAuthProvider,\n\tfacebookAuthProvider,\n\ttwitterAuthProvider,\n\tgithubAuthProvider\n};"})]})]})}},595:function(e,o,t){"use strict";o.a={'code[class*="language-"]':{color:"#c5c8c6",textShadow:"0 1px rgba(0, 0, 0, 0.3)",fontFamily:"Inconsolata, Monaco, Consolas, 'Courier New', Courier, monospace",direction:"ltr",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none"},'pre[class*="language-"]':{color:"#c5c8c6",textShadow:"0 1px rgba(0, 0, 0, 0.3)",fontFamily:"Inconsolata, Monaco, Consolas, 'Courier New', Courier, monospace",direction:"ltr",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",padding:"1em",margin:".5em 0",overflow:"auto",borderRadius:"0.3em",background:"#1d1f21"},':not(pre) > code[class*="language-"]':{background:"#1d1f21",padding:".1em",borderRadius:".3em"},comment:{color:"#7C7C7C"},prolog:{color:"#7C7C7C"},doctype:{color:"#7C7C7C"},cdata:{color:"#7C7C7C"},punctuation:{color:"#c5c8c6"},".namespace":{Opacity:".7"},property:{color:"#96CBFE"},keyword:{color:"#96CBFE"},tag:{color:"#96CBFE"},"class-name":{color:"#FFFFB6",textDecoration:"underline"},boolean:{color:"#99CC99"},constant:{color:"#99CC99"},symbol:{color:"#f92672"},deleted:{color:"#f92672"},number:{color:"#FF73FD"},selector:{color:"#A8FF60"},"attr-name":{color:"#A8FF60"},string:{color:"#A8FF60"},char:{color:"#A8FF60"},builtin:{color:"#A8FF60"},inserted:{color:"#A8FF60"},variable:{color:"#C6C5FE"},operator:{color:"#EDEDED"},entity:{color:"#FFFFB6",cursor:"help"},url:{color:"#96CBFE"},".language-css .token.string":{color:"#87C38A"},".style .token.string":{color:"#87C38A"},atrule:{color:"#F9EE98"},"attr-value":{color:"#F9EE98"},function:{color:"#DAD085"},regex:{color:"#E9C062"},important:{color:"#fd971f",fontWeight:"bold"},bold:{fontWeight:"bold"},italic:{fontStyle:"italic"}}}}]);
//# sourceMappingURL=33.3dc2eb8e.chunk.js.map