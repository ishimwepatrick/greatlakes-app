(this.webpackJsonpGreatLakes=this.webpackJsonpGreatLakes||[]).push([[102],{1026:function(e,s,a){"use strict";var t=a(0),c={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M832 464h-68V240c0-70.7-57.3-128-128-128H388c-70.7 0-128 57.3-128 128v224h-68c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V496c0-17.7-14.3-32-32-32zM332 240c0-30.9 25.1-56 56-56h248c30.9 0 56 25.1 56 56v224H332V240zm460 600H232V536h560v304zM484 701v53c0 4.4 3.6 8 8 8h40c4.4 0 8-3.6 8-8v-53a48.01 48.01 0 10-56 0z"}}]},name:"lock",theme:"outlined"},i=a(10),r=function(e,s){return t.createElement(i.a,Object.assign({},e,{ref:s,icon:c}))};r.displayName="LockOutlined";s.a=t.forwardRef(r)},3392:function(e,s,a){"use strict";a.r(s);var t=a(0),c=a(9),i=a(14),r=a(47),n=a(658),o=a(1026),l=a(578),d=a(1476),m=a(433),j=a(120),u=a(48),h=a(54),g=a(1474),b=a(3),x={email:[{required:!0,message:"Please input your email address"},{type:"email",message:"Please enter a validate email!"}],password:[{required:!0,message:"Please input your password"}],confirm:[{required:!0,message:"Please confirm your password!"},function(e){var s=e.getFieldValue;return{validator:function(e,a){return a&&s("password")!==a?Promise.reject("Passwords do not match!"):Promise.resolve()}}}]},f={signUp:u.k,showAuthMessage:u.e,hideAuthMessage:u.b,showSuccessMessage:u.g,hideSuccessMessage:u.c,showLoading:u.f},p=Object(r.b)((function(e){var s=e.auth;return{loading:s.loading,message:s.message,showMessage:s.showMessage,showSuccess:s.showSuccess,token:s.token,redirect:s.redirect}}),f)((function(e){var s=e.signUp,a=e.showLoading,c=e.token,r=e.loading,f=e.redirect,p=e.message,O=e.showMessage,w=e.showSuccess,v=e.hideAuthMessage,y=e.allowRedirect,k=l.a.useForm(),M=Object(i.a)(k,1)[0],P=Object(h.g)();return Object(t.useEffect)((function(){null!==c&&y&&P.push(f),O&&setTimeout((function(){v()}),3e3),w&&setTimeout((function(){Object(u.c)()}),3e3)})),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(g.a.div,{initial:{opacity:0,marginBottom:0},animate:{opacity:O?1:0,marginBottom:O?20:0},children:Object(b.jsx)(d.a,{type:"error",showIcon:!0,message:p})}),Object(b.jsx)(g.a.div,{initial:{opacity:0,marginBottom:0},animate:{opacity:w?1:0,marginBottom:w?20:0},children:Object(b.jsx)(d.a,{type:"success",showIcon:!0,message:p})}),Object(b.jsxs)(l.a,{form:M,layout:"vertical",name:"register-form",onFinish:function(){M.validateFields().then((function(e){a(),s(e)})).catch((function(e){console.log("Validate Failed:",e)}))},children:[Object(b.jsx)(l.a.Item,{name:"email",label:"Email",rules:x.email,hasFeedback:!0,children:Object(b.jsx)(m.a,{prefix:Object(b.jsx)(n.a,{className:"text-primary"})})}),Object(b.jsx)(l.a.Item,{name:"password",label:"Password",rules:x.password,hasFeedback:!0,children:Object(b.jsx)(m.a.Password,{prefix:Object(b.jsx)(o.a,{className:"text-primary"})})}),Object(b.jsx)(l.a.Item,{name:"confirm",label:"ConfirmPassword",rules:x.confirm,hasFeedback:!0,children:Object(b.jsx)(m.a.Password,{prefix:Object(b.jsx)(o.a,{className:"text-primary"})})}),Object(b.jsx)(l.a.Item,{children:Object(b.jsx)(j.a,{type:"primary",htmlType:"submit",block:!0,loading:r,children:"Sign Up"})})]})]})})),O=a(524),w=a(525),v=a(540),y={backgroundImage:"url(/img/others/img-17.jpg)",backgroundRepeat:"no-repeat",backgroundSize:"cover"},k=function(e){var s=Object(h.g)(),a=Object(r.c)((function(e){return e.theme.currentTheme}));return Object(b.jsx)("div",{className:"h-100",style:y,children:Object(b.jsx)("div",{className:"container d-flex flex-column justify-content-center h-100",children:Object(b.jsx)(O.a,{justify:"center",children:Object(b.jsx)(w.a,{xs:20,sm:20,md:18,lg:12,children:Object(b.jsx)(v.a,{children:Object(b.jsxs)("div",{className:"my-2",children:[Object(b.jsxs)("div",{className:"text-center",children:[Object(b.jsx)("img",{className:"img-fluid",src:"/img/".concat("light"===a?"logo.png":"logo-white.png"),alt:""}),Object(b.jsx)("p",{className:"text-muted",children:"Create a new account:"})]}),Object(b.jsxs)(O.a,{justify:"center",children:[Object(b.jsx)(w.a,{xs:24,sm:24,md:20,lg:20,children:Object(b.jsx)(p,Object(c.a)({},e))}),Object(b.jsxs)("p",{children:["Already have an account? ",Object(b.jsx)("a",{href:"/#",onClick:function(e){e.preventDefault(),s.push("/auth/login")},children:"Log In"})]})]})]})})})})})})};s.default=function(){return Object(b.jsx)(k,{allowRedirect:!0})}}}]);
//# sourceMappingURL=102.c0968d72.chunk.js.map