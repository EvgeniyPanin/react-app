(this["webpackJsonpreact-kabzda-1"]=this["webpackJsonpreact-kabzda-1"]||[]).push([[3],{307:function(e,a,n){e.exports={container:"Dialogs_container__2q49Y",dialogs_container:"Dialogs_dialogs_container__6a2pX",new_message:"Dialogs_new_message__3_ZwK"}},308:function(e,a,n){e.exports={dialog:"Dialog_dialog__MXZ91"}},309:function(e,a,n){e.exports={message:"Message_message__2HZZw"}},310:function(e,a,n){e.exports={form:"NewMessageForm_form__3Yr4A",input:"NewMessageForm_input__3K0C5",button:"NewMessageForm_button__36cwp"}},311:function(e,a,n){"use strict";n.r(a);var t=n(137),s=n(0),o=n.n(s),r=n(307),c=n.n(r),i=n(308),m=n.n(i),l=n(12),u=function(e){return o.a.createElement("li",{className:m.a.dialog},o.a.createElement(l.b,{to:"/dialogs/".concat(e.id)},e.name))},g=n(309),_=n.n(g),d=function(e){return o.a.createElement("p",{className:_.a.message},e.message)},p=n(138),f=n(139),b=n(310),w=n.n(b),E=n(104),N=Object(f.a)({form:"newMessageForm"})((function(e){return o.a.createElement("form",{className:w.a.form,onSubmit:e.handleSubmit},o.a.createElement(p.a,{className:w.a.input,name:"newMessage",component:"input",type:"textarea",validate:[E.a]}),o.a.createElement("button",{className:"btn btn-primary ".concat(w.a.button),type:"submit"},"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"))})),M=function(e){var a=e.dialogs.map((function(e){return o.a.createElement(u,{name:e.name,id:e.id})})),n=e.messages.map((function(e){return o.a.createElement(d,{message:e.message})}));return o.a.createElement("div",{className:c.a.container},o.a.createElement("ul",{className:c.a.dialogs_container},a),o.a.createElement("section",null,n),o.a.createElement("section",{className:c.a.new_message},o.a.createElement(N,{onSubmit:function(a){e.addMessage(a.newMessage)}})))},x=n(10),h=n(136),k=n(6),v=function(e){return e.dialogPage.dialogs},D=function(e){return e.dialogPage.messages};a.default=Object(k.d)(Object(x.b)((function(e){return{dialogs:v(e),messages:D(e)}}),{addMessage:t.a}),h.a)(M)}}]);
//# sourceMappingURL=3.3a6b6217.chunk.js.map