(this.webpackJsonpemilus=this.webpackJsonpemilus||[]).push([[15],{526:function(e,t,s){"use strict";s.d(t,"a",(function(){return i})),s.d(t,"b",(function(){return a})),s.d(t,"c",(function(){return c}));s(60),s(61);var n=s(82);const i=e=>({type:n.a,payload:e}),a=e=>({type:n.e,payload:e}),c=e=>({type:n.f,payload:e})},539:function(e,t,s){"use strict";s.r(t),s.d(t,"Setting",(function(){return M}));var n=s(2),i=s(0),a=s.n(i),c=s(497),r=s(153),d=s(50),l=s(45),o=s(481),j=s(489),m=s(58),b=s(561),h=s(5);const{useBreakpoint:u}=o.a,x=e=>{const{sideContent:t,sideContentWidth:s=250,border:n}=e;return Object(h.jsx)("div",{className:"side-content ".concat(n?"with-border":""),style:{width:"".concat(s,"px")},children:t})},p=e=>{const{sideContent:t,visible:s,onSideContentClose:n}=e;return Object(h.jsx)(j.a,{width:320,placement:"left",closable:!1,onClose:n,visible:s,bodyStyle:{paddingLeft:0,paddingRight:0},children:Object(h.jsx)("div",{className:"h-100",children:t})})};var O=e=>{const{mainContent:t,pageHeader:s,sideContentGutter:a=!0}=e,c=!m.a.getBreakPoint(u()).includes("lg"),[r,d]=Object(i.useState)(!1);return Object(h.jsxs)("div",{className:"inner-app-layout",children:[c?Object(h.jsx)(p,Object(n.a)({visible:r,onSideContentClose:e=>{d(!1)}},e)):Object(h.jsx)(x,Object(n.a)({},e)),Object(h.jsxs)("div",{className:"main-content ".concat(s?"has-page-header":""," ").concat(a?"gutter":"no-gutter"),children:[c?Object(h.jsx)("div",{className:"font-size-lg mb-3 ".concat(a?"":"pt-3 px-3"),children:Object(h.jsx)(b.a,{onClick:()=>{d(!0)}})}):null,t]})]})},f=s(552),y=s(530),g=s(531),C=s(484),v=s(550),S=s(129),I=s(31),F=s(526),N=s(40),w=s(118);class U extends i.Component{constructor(){super(...arguments),this.formRef=a.a.createRef(),this._isMounted=!1,this.state={isSubmitting:!1},this.onFinish=e=>{this.setState({isSubmitting:!0}),setTimeout((()=>{this.props.updateUser(e),this.setState({isSubmitting:!1}),this.props.history.push("/app/main/clients/list")}),1e3)},this.onFinishFailed=e=>{console.log("Failed:",e)}}componentDidMount(){this._isMounted=!0;const{userId:e,findUser:t}=this.props;t(e)}componentDidUpdate(e){if(e.user!==this.props.user){const{user:e}=this.props;e&&this.formRef.current.setFieldsValue({name:e.name,username:e.username,email:e.email,phoneNumber:e.phone,website:e.website,address:e.address.street,city:e.address.city,postcode:e.address.zipcode,dateOfBirth:null})}}componentWillUnmount(){this._isMounted=!1}render(){const{isSubmitting:e}=this.state;return e?Object(h.jsx)(w.a,{}):Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("div",{className:"mt-4",children:Object(h.jsx)(f.a,{ref:this.formRef,name:"basicInformation",layout:"vertical",onFinish:this.onFinish,onFinishFailed:this.onFinishFailed,children:Object(h.jsx)(y.a,{children:Object(h.jsxs)(g.a,{xs:24,sm:24,md:24,lg:16,children:[Object(h.jsxs)(y.a,{gutter:I.c,children:[Object(h.jsx)(g.a,{xs:24,sm:24,md:12,children:Object(h.jsx)(f.a.Item,{label:"Name",name:"name",rules:[{required:!0,message:"Please input your name!"}],children:Object(h.jsx)(C.a,{})})}),Object(h.jsx)(g.a,{xs:24,sm:24,md:12,children:Object(h.jsx)(f.a.Item,{label:"Username",name:"username",rules:[{required:!0,message:"Please input your username!"}],children:Object(h.jsx)(C.a,{})})}),Object(h.jsx)(g.a,{xs:24,sm:24,md:12,children:Object(h.jsx)(f.a.Item,{label:"Email",name:"email",rules:[{required:!0,type:"email",message:"Please enter a valid email!"}],children:Object(h.jsx)(C.a,{})})}),Object(h.jsx)(g.a,{xs:24,sm:24,md:12,children:Object(h.jsx)(f.a.Item,{label:"Date of Birth",name:"dateOfBirth",children:Object(h.jsx)(v.a,{className:"w-100"})})}),Object(h.jsx)(g.a,{xs:24,sm:24,md:12,children:Object(h.jsx)(f.a.Item,{label:"Phone Number",name:"phoneNumber",children:Object(h.jsx)(C.a,{})})}),Object(h.jsx)(g.a,{xs:24,sm:24,md:12,children:Object(h.jsx)(f.a.Item,{label:"Website",name:"website",children:Object(h.jsx)(C.a,{})})}),Object(h.jsx)(g.a,{xs:24,sm:24,md:24,children:Object(h.jsx)(f.a.Item,{label:"Address",name:"address",children:Object(h.jsx)(C.a,{})})}),Object(h.jsx)(g.a,{xs:24,sm:24,md:12,children:Object(h.jsx)(f.a.Item,{label:"City",name:"city",children:Object(h.jsx)(C.a,{})})}),Object(h.jsx)(g.a,{xs:24,sm:24,md:12,children:Object(h.jsx)(f.a.Item,{label:"Post code",name:"postcode",children:Object(h.jsx)(C.a,{})})})]}),Object(h.jsx)(S.a,{type:"primary",htmlType:"submit",children:"Save Change"})]})})})})})}}const P={findUser:F.b,updateUser:F.c};var R=Object(N.b)((e=>({user:e.user.currentUser})),P)(U);const k=e=>{let{match:t,location:s}=e;return Object(h.jsx)(r.a,{defaultSelectedKeys:["".concat(t.url,"/edit-profile")],mode:"inline",selectedKeys:[s.pathname],children:Object(h.jsxs)(r.a.Item,{children:[Object(h.jsx)(c.a,{}),Object(h.jsx)("span",{children:"Edit Profile"}),Object(h.jsx)(d.b,{to:"".concat(t.url,"/edit-profile")})]},"".concat(t.url,"/edit-profile"))})},B=e=>{let{match:t}=e;const s=t.params.id;return Object(h.jsxs)(l.Switch,{children:[Object(h.jsx)(l.Redirect,{exact:!0,from:"".concat(t.url),to:"".concat(t.url,"/edit-profile")}),Object(h.jsx)(l.Route,{path:"".concat(t.url,"/edit-profile"),render:e=>Object(h.jsx)(R,Object(n.a)(Object(n.a)({},e),{},{userId:s}))})]})};class M extends i.Component{render(){return Object(h.jsx)(O,{sideContentWidth:320,sideContent:Object(h.jsx)(k,Object(n.a)({},this.props)),mainContent:Object(h.jsx)(B,Object(n.a)({},this.props))})}}t.default=M}}]);
//# sourceMappingURL=15.d8fbfa47.chunk.js.map