(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{136:function(e,t,n){e.exports={component:"MessageList_component__Pi0PQ",empty:"MessageList_empty__3sEAe"}},210:function(e,t,n){e.exports={component:"UserHeader_component__Pu0tn",pulse:"UserHeader_pulse__3KZGE"}},211:function(e,t,n){e.exports={component:"EventHeader_component__2d2Gb"}},212:function(e,t,n){e.exports={component:"UserList_component__2UHmg",hint:"UserList_hint__13nCs",online:"UserList_online__3hgTm"}},213:function(e,t,n){e.exports={component:"Message_component__2qulA",online:"Message_online__29a61"}},215:function(e,t,n){e.exports={component:"CreateMessageForm_component__FGDHI"}},216:function(e,t,n){},217:function(e,t,n){e.exports={component:"WelcomeScreen_component__1jVxW",pulse:"WelcomeScreen_pulse__3pXjs"}},218:function(e,t,n){e.exports={component:"RegisterScreen_component__2A-Ej",pulse:"RegisterScreen_pulse__1Th8x"}},221:function(e,t,n){e.exports=n(532)},226:function(e,t,n){},532:function(e,t,n){"use strict";n.r(t);var a=n(69),r=n(91),s=n(205),c=n(206),l=n(219),o=n(207),i=n(220),m=n(1),u=n.n(m),v=n(208),p=n.n(v),d=(n(226),n(209)),E=n(210),g=n.n(E),h=function(e){var t=e.sidebarOpen,n=e.user,a=void 0===n?{}:n,r=e.setSidebar;return u.a.createElement("header",{className:g.a.component},u.a.createElement("button",{onClick:function(e){return r(!t)}},u.a.createElement("svg",{id:"menu",viewBox:"0 0 24 24"},u.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),u.a.createElement("path",{d:"M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"}))),u.a.createElement("img",{src:a.avatarURL||"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",alt:""}),u.a.createElement("div",null,u.a.createElement("h3",null,a.name),u.a.createElement("h5",null,a.id&&"@".concat(a.id.substring(0,15)))))},f=n(92),_=n.n(f),b=n(211),C=n.n(b),k=function(e){var t=e.state,n=t.event,a=t.user,r=e.actions,s=r.joinEvent,c=(r.leaveEvent,!!n.users&&n.users.find(function(e){return e===a.id}));return u.a.createElement("header",{className:C.a.component},c?u.a.createElement("div",null,"You're Attending"):u.a.createElement("div",{onClick:function(){return s(n)}},"Attend"),u.a.createElement("row-",null,u.a.createElement("h1",null,n.name&&n.name.replace(a.id,""))),n.users&&u.a.createElement("div",null,u.a.createElement("span",null,n.users.length),u.a.createElement("svg",{id:"members",viewBox:"0 0 24 24"},u.a.createElement("path",{d:"M9 11.75c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zm6 0c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8 0-.29.02-.58.05-.86 2.36-1.05 4.23-2.98 5.21-5.37C11.07 8.33 14.05 10 17.42 10c.78 0 1.53-.09 2.25-.26.21.71.33 1.47.33 2.26 0 4.41-3.59 8-8 8z"}),u.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}))))},A=n(212),L=n.n(A),M=function(e){var t=e.event,n=(e.current,e.users);return u.a.createElement("ul",{className:L.a.component},u.a.createElement("h2",null,"Attendees"),t.users.map(function(e){return u.a.createElement("li",{key:e},u.a.createElement("img",{src:n[e]?n[e].avatar_url:"",alt:""}),u.a.createElement("p",null,n[e]?n[e].name:"?"),u.a.createElement("h5",null,"\xa0| ",e&&"@".concat(e.substring(0,15))))}))},O=n(136),H=n.n(O),S=n(213),y=n.n(S),x=n(214),U=n.n(x),j=function(e){e.user;var t=e.users;return function(e){var n=t[e.sender]||{name:"?",avatar_url:""};return e.sender?u.a.createElement("li",{key:e.id,className:y.a.component},u.a.createElement("img",{src:n.avatar_url,alt:""}),u.a.createElement("div",null,u.a.createElement("span",null,"".concat(n.name," | ").concat(function(e){var t=new Date(1e3*e),n=t.getMinutes();return"".concat(t.getHours(),":").concat(n<10?"0"+n:n)}(e.createdAt))),u.a.createElement("p",null,u.a.createElement(U.a,{properties:{target:"_blank"}},e.text)))):null}},w=u.a.createElement("div",{className:H.a.empty},u.a.createElement("div",{role:"img","aria-label":"post"},"\ud83d\udcdd"),u.a.createElement("p",null,"Be the first to post in this event!")),z=function(e){var t=e.messages,n=void 0===t?{}:t,a=e.user,r=e.users,s=e.createConvo;return u.a.createElement("ul",{id:"messages",className:H.a.component},Object.keys(n).length>0?u.a.createElement("wrapper-",null,Object.keys(n).reverse().map(function(e){return j({user:a,createConvo:s,users:r})(n[e])})):w)},N=n(215),B=n.n(N),D=function(e){var t=e.eventId,n=e.actions,a=n.sendMessage,r=n.runCommand;return t?u.a.createElement("form",{className:B.a.component,onSubmit:function(e){e.preventDefault();var n=e.target[0].value.trim();0!==n.length&&(e.target[0].value="",n.startsWith("/")?r(n.slice(1)):a({text:n,eventId:t}))}},u.a.createElement("input",{placeholder:"Post a message to the event..."}),u.a.createElement("button",{type:"submit"},u.a.createElement("svg",{id:"send",viewBox:"0 0 24 24"},u.a.createElement("path",{d:"M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"}),u.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"})))):null},R=function(e){var t=e.state,n=e.events,a=void 0===n?[]:n,r=e.user,s=e.users,c=e.messages,l=e.current,o=e.actions;return u.a.createElement("ul",{className:_.a.component},a.map(function(e){var n=!!l.users&&l.users.find(function(e){return e===r.id}),a=[];return e.id!==l.id&&a.push(u.a.createElement("li",{key:e.id,disabled:e.id===l.id,onClick:function(t){return o.setEvent(e)}},"lock"===(e.isPrivate?"lock":"public")?u.a.createElement("svg",{id:"lock",viewBox:"0 0 24 24"},u.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),u.a.createElement("path",{d:"M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"})):u.a.createElement("svg",{id:"public",viewBox:"0 0 24 24"},u.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),u.a.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"})),u.a.createElement("col-",null,u.a.createElement("p",null,e.name.replace(r.id,"")),u.a.createElement("span",null,e.description)))),e.id===l.id&&(a.push(u.a.createElement("li",{key:"openHeader"+e.id,className:_.a.openEvent},u.a.createElement(k,{state:t,actions:o}))),a.push(u.a.createElement("li",{key:"openPanel"+e.id,className:_.a.openEvent},u.a.createElement("col-",null,u.a.createElement("h3",null,"Description"),u.a.createElement("h5",null,e.description),u.a.createElement("a",{href:e.link,target:"_blank"},e.link),n&&u.a.createElement(z,{user:r,users:s,messages:c[e.id]}),n&&u.a.createElement(D,{eventId:!!l&&l.id,actions:o})),u.a.createElement("col-",null,u.a.createElement(M,{event:l,current:r.id,users:s}))))),a}))},I=n(216),P=n.n(I),T=function(e){var t=e.submit;return u.a.createElement("form",{className:P.a.component,onSubmit:function(e){e.preventDefault();var n=e.target[0].value,a=e.target[1].value,r=e.target[2].value;0!==n.length&&(t({name:n,description:a,link:r}),e.target[0].value="",e.target[1].value="",e.target[2].value="")}}," ",u.a.createElement("label",null,"Create A New Event "),u.a.createElement("input",{placeholder:"Name..."}),u.a.createElement("input",{placeholder:"Description..."}),u.a.createElement("input",{placeholder:"Link..."}),u.a.createElement("button",{type:"submit"},"Create"))},V=n(217),G=n.n(V),J=function(e){var t=e.message;return u.a.createElement("section",null,u.a.createElement("div",{className:G.a.component},u.a.createElement("span",{role:"img","aria-label":"post"},u.a.createElement("svg",{viewBox:"0 0 59 80"},u.a.createElement("g",null,u.a.createElement("path",{d:"M48.417 49.444L38.585 73.229 36.012 71.394 41.802 56.726 31.211 59.519C31.211 59.519 26.022 42.42 26.513 30.837 26.218 22.744 27.644 16.96 30.167 13.6 34.274 8.408 42.099 3.953 49.793 7.645 54.701 9.869 57.658 13.889 58.107 17.824 59.479 34.859 38.498 41.817 38.498 41.817L38.085 38.191C38.085 38.191 44.945 35.464 49.105 29.553 53.266 23.643 51.245 15.88 46.569 14.464 42.061 13.577 37.34 18.757 36.516 27.966 34.721 41.776 39.393 52.006 39.393 52.006L48.417 49.444M0 62.396L15.402 74.372 16.522 71.783 8.26 65.71 16.853 63.305C16.853 63.305 10.998 47.535 10.597 32.251 10.229 27.354 9.896 11.684 15.924 8.975 16.976 7.213 18.743 5.903 18.743 5.903 18.743 5.903 3.467 4.584 4.184 32.453 5.706 51.166 9.451 59.821 9.451 59.821L0 62.396"}),u.a.createElement("path",{d:"M29.91,61.761 L38.969,59.263 L30.045,80 L11.998,66.538 L19.098,64.644 C19.098,64.644 3.276,20.694 21.128,5.095 C32.325,-3.789 43.164,3.999 42.965,4.872 C40.203,4.812 37.842,5.844 37.842,5.844 C37.842,5.844 31.789,3.265 27.475,12.503 C23.719,20.705 22.048,34.474 29.91,61.761"}),u.a.createElement("path",{d:"M41.806,17.606 C42.599,24.356 38.244,27.206 38.244,27.206 L37.819,30.659 C37.819,30.659 47.709,25.549 45.669,15.819 C44.566,15.913 42.212,17.242 41.806,17.606"})))),u.a.createElement("p",null,t)))},W=n(218),q=n.n(W),Z=function(e){var t=e.registerUser;return u.a.createElement("section",null,u.a.createElement("div",{className:q.a.component},u.a.createElement("span",{role:"img","aria-label":"post"},u.a.createElement("svg",{viewBox:"0 0 59 80"},u.a.createElement("g",null,u.a.createElement("path",{d:"M48.417 49.444L38.585 73.229 36.012 71.394 41.802 56.726 31.211 59.519C31.211 59.519 26.022 42.42 26.513 30.837 26.218 22.744 27.644 16.96 30.167 13.6 34.274 8.408 42.099 3.953 49.793 7.645 54.701 9.869 57.658 13.889 58.107 17.824 59.479 34.859 38.498 41.817 38.498 41.817L38.085 38.191C38.085 38.191 44.945 35.464 49.105 29.553 53.266 23.643 51.245 15.88 46.569 14.464 42.061 13.577 37.34 18.757 36.516 27.966 34.721 41.776 39.393 52.006 39.393 52.006L48.417 49.444M0 62.396L15.402 74.372 16.522 71.783 8.26 65.71 16.853 63.305C16.853 63.305 10.998 47.535 10.597 32.251 10.229 27.354 9.896 11.684 15.924 8.975 16.976 7.213 18.743 5.903 18.743 5.903 18.743 5.903 3.467 4.584 4.184 32.453 5.706 51.166 9.451 59.821 9.451 59.821L0 62.396"}),u.a.createElement("path",{d:"M29.91,61.761 L38.969,59.263 L30.045,80 L11.998,66.538 L19.098,64.644 C19.098,64.644 3.276,20.694 21.128,5.095 C32.325,-3.789 43.164,3.999 42.965,4.872 C40.203,4.812 37.842,5.844 37.842,5.844 C37.842,5.844 31.789,3.265 27.475,12.503 C23.719,20.705 22.048,34.474 29.91,61.761"}),u.a.createElement("path",{d:"M41.806,17.606 C42.599,24.356 38.244,27.206 38.244,27.206 L37.819,30.659 C37.819,30.659 47.709,25.549 45.669,15.819 C44.566,15.913 42.212,17.242 41.806,17.606"})))),u.a.createElement("p",null,"It looks like this is the first time using HOLOCHAIN EVENTS hApp with this agent. Register a handle and avatar for this agent ID."),u.a.createElement("form",{onSubmit:function(e){e.preventDefault();var n=e.target[0].value,a=e.target[1].value;0!==n.length&&t({name:n,avatarURL:a})}},u.a.createElement("input",{placeholder:"input @handle"}),u.a.createElement("br",null),u.a.createElement("input",{placeholder:"paste url for avatar image"}),u.a.createElement("br",null),u.a.createElement("button",{type:"submit"},"Register!"))))},F="test-instance",Q="ws://localhost:8888",K=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(l.a)(this,Object(o.a)(t).call(this,e))).state={holochainConnection:Object(d.connect)(Q),connected:!1,user:{},users:{},event:{},events:[],messages:{},sidebarOpen:!1},n.actions={setSidebar:function(e){return n.setState({sidebarOpen:e})},setUser:function(e){n.setState({user:e}),n.actions.getEvents()},setEvent:function(e){n.setState({event:e,sidebarOpen:!1}),n.actions.getMessages(e.id),n.actions.getEventMembers(e.id),n.actions.scrollToEnd()},joinEvent:function(e){console.log("joining event"),n.actions.setEvent(e),n.makeHolochainCall("".concat(F,"/event/join_event"),{event_address:e.id},function(e){console.log("joined event",e)})},getEventMembers:function(e){n.makeHolochainCall("".concat(F,"/event/get_members"),{event_address:e},function(e){console.log("retrieved members",e);var t=e.Ok;t.forEach(function(e){n.actions.getUserProfile(e)}),n.setState({event:Object(r.a)({},n.state.event,{users:t})})})},sendMessage:function(e){var t=e.text,a=e.eventId,r={message_type:"text",timestamp:Math.floor(Date.now()/1e3),payload:t,meta:""};n.makeHolochainCall("".concat(F,"/event/post_message"),{event_address:a,message:r},function(e){console.log("message posted",e),setTimeout(function(){return n.actions.getMessages(a)},1e3),n.actions.scrollToEnd()})},getMessages:function(e){n.makeHolochainCall("".concat(F,"/event/get_messages"),{address:e},function(t){console.log("retrieved messages",t);var s=t.Ok.map(function(e){var t=e.address,n=e.entry;return{text:n.payload,sender:n.author,createdAt:n.timestamp,id:t}});n.setState({messages:Object(r.a)({},n.state.messages,Object(a.a)({},e,s))})})},createEvent:function(e){var t={name:e.name,description:e.description,link:e.link,initial_members:[]};n.makeHolochainCall("".concat(F,"/event/create_event"),t,function(t){console.log("created event",t),n.actions.setEvent({id:t.Ok,name:e.name,description:e.description,link:e.link,users:[]}),n.actions.getEvents()})},getUserProfile:function(e){n.makeHolochainCall("".concat(F,"/event/get_member_profile"),{agent_address:e},function(t){console.log("retrieved profile",t),n.setState({users:Object(r.a)({},n.state.users,Object(a.a)({},e,t.Ok))})})},getEvents:function(){n.makeHolochainCall("".concat(F,"/event/get_all_public_events"),{},function(e){console.log("retrieved public events",e);var t=e.Ok.map(function(e){var t=e.address,n=e.entry;return{id:t,private:!n.public,name:n.name,description:n.description,link:n.link,users:[]}});n.setState({events:t})})},registerUser:function(e){var t=e.name,a=e.avatarURL;n.makeHolochainCall("".concat(F,"/event/register"),{name:t,avatar_url:a},function(e){console.log("registered user",e),n.actions.setUser({id:e.Ok,name:t,avatarURL:a})})},scrollToEnd:function(e){return setTimeout(function(){var e=document.querySelector("#messages");e&&(e.scrollTop=1e5)},0)}},n}return Object(i.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.state.holochainConnection.then(function(t){(0,t.call)("".concat(F,"/event/get_my_member_profile"))({}).then(function(t){var n=JSON.parse(t).Ok;n?(console.log("registration user found with profile:",n),e.actions.setUser({id:n.address,name:n.name,avatarURL:n.avatar_url})):console.log("User has not registered a profile. Complete the form to proceed"),e.setState({connected:!0})})})}},{key:"makeHolochainCall",value:function(e,t,n){this.state.holochainConnection.then(function(a){(0,a.call)(e)(t).then(function(e){return n(JSON.parse(e))})})}},{key:"render",value:function(){var e=this.state,t=e.user,n=e.users,a=e.event,r=e.events,s=e.messages,c=e.sidebarOpen,l=e.connected,o=this.actions,i=o.createEvent,m=o.registerUser;return u.a.createElement("main",null,u.a.createElement("section",{"data-open":c},u.a.createElement(h,{sidebarOpen:c,user:t,setSidebar:this.actions.setSidebar}),t.id&&u.a.createElement(T,{submit:i}),t.id&&u.a.createElement(R,{state:this.state,user:t,users:n,events:r,messages:s,current:a,actions:this.actions}),l?t.id?null:u.a.createElement(Z,{registerUser:m}):u.a.createElement(J,{message:"Connecting to Holochain... Make sure the conductor is running and try refreshing the page"})))}}]),t}(u.a.Component);p.a.render(u.a.createElement(K,null),document.querySelector("#root"))},92:function(e,t,n){e.exports={component:"EventList_component__3cZ8U",openEvent:"EventList_openEvent__26VZO"}}},[[221,2,1]]]);
//# sourceMappingURL=main.a7dfdbfc.chunk.js.map