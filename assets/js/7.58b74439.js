(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{285:function(i,n,e){"use strict";e.r(n);var t={name:"Valine",mounted:function(){const i=e(278);"undefined"!=typeof window&&(this.window=window,window.AV=e(279)),this.valine=new i,this.initValine()},watch:{$route(i,n){n.path!=i.path&&this.initValine()}},methods:{initValine(){let i=location.origin+location.pathname;this.valine.init({el:"#vcomments",appId:"YzXkUfcuV66VuaAh8cWBYrok-gzGzoHsz",appKey:"9G1qwRneSmE9oukeJmaWaqcE",notify:!1,verify:!1,path:i,enableQQ:!0,avatar:"monsterid",requiredFields:["nick","mail"],placeholder:"欢迎留言或在GitHub提交issue！"})}}},a=e(10),o=Object(a.a)(t,(function(){return(0,this._self._c)("div",{attrs:{id:"vcomments"}})}),[],!1,null,null,null);n.default=o.exports}}]);