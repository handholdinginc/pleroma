(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{709:function(e,t,n){"use strict";n.r(t);var o,i,s=n(1),a=n(6),c=n(0),l=n(2),r=n(3),u=n.n(r),h=n(20),d=n(37),p=n(627),m=n(431),b=n(429),O=n(206),j=n(7),f=n(919),g=Object(j.g)(o=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.settings,n=e.onChange;return Object(s.a)("div",{},void 0,Object(s.a)("span",{className:"column-settings__section"},void 0,Object(s.a)(j.b,{id:"home.column_settings.basic",defaultMessage:"Basic"})),Object(s.a)("div",{className:"column-settings__row"},void 0,Object(s.a)(f.a,{prefix:"home_timeline",settings:t,settingPath:["shows","reblog"],onChange:n,label:Object(s.a)(j.b,{id:"home.column_settings.show_reblogs",defaultMessage:"Show boosts"})})),Object(s.a)("div",{className:"column-settings__row"},void 0,Object(s.a)(f.a,{prefix:"home_timeline",settings:t,settingPath:["shows","reply"],onChange:n,label:Object(s.a)(j.b,{id:"home.column_settings.show_replies",defaultMessage:"Show replies"})})))},t}(u.a.PureComponent))||o,v=n(85),_=Object(h.connect)(function(e){return{settings:e.getIn(["settings","home"])}},function(n){return{onChange:function(e,t){n(Object(v.c)(["home"].concat(e),t))},onSave:function(){n(Object(v.d)())}}})(g),M=n(388);n.d(t,"default",function(){return P});var w=Object(j.f)({title:{id:"column.home",defaultMessage:"Home"}}),P=Object(h.connect)(function(e){return{hasUnread:0<e.getIn(["timelines","home","unread"]),isPartial:null===e.getIn(["timelines","home","items",0],null)}})(i=Object(j.g)(i=function(i){function e(){for(var o,e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return o=i.call.apply(i,[this].concat(t))||this,Object(l.a)(Object(c.a)(Object(c.a)(o)),"handlePin",function(){var e=o.props,t=e.columnId,n=e.dispatch;n(t?Object(O.h)(t):Object(O.e)("HOME",{}))}),Object(l.a)(Object(c.a)(Object(c.a)(o)),"handleMove",function(e){var t=o.props,n=t.columnId;(0,t.dispatch)(Object(O.g)(n,e))}),Object(l.a)(Object(c.a)(Object(c.a)(o)),"handleHeaderClick",function(){o.column.scrollTop()}),Object(l.a)(Object(c.a)(Object(c.a)(o)),"setRef",function(e){o.column=e}),Object(l.a)(Object(c.a)(Object(c.a)(o)),"handleLoadMore",function(e){o.props.dispatch(Object(d.q)({maxId:e}))}),o}Object(a.a)(e,i);var t=e.prototype;return t.componentDidMount=function(){this._checkIfReloadNeeded(!1,this.props.isPartial)},t.componentDidUpdate=function(e){this._checkIfReloadNeeded(e.isPartial,this.props.isPartial)},t.componentWillUnmount=function(){this._stopPolling()},t._checkIfReloadNeeded=function(e,t){var n=this.props.dispatch;e!==t&&(!e&&t?this.polling=setInterval(function(){n(Object(d.q)())},3e3):e&&!t&&this._stopPolling())},t._stopPolling=function(){this.polling&&(clearInterval(this.polling),this.polling=null)},t.render=function(){var e=this.props,t=e.intl,n=e.shouldUpdateScroll,o=e.hasUnread,i=e.columnId,a=e.multiColumn,c=!!i;return u.a.createElement(m.a,{ref:this.setRef,label:t.formatMessage(w.title)},Object(s.a)(b.a,{icon:"home",active:o,title:t.formatMessage(w.title),onPin:this.handlePin,onMove:this.handleMove,onClick:this.handleHeaderClick,pinned:c,multiColumn:a},void 0,Object(s.a)(_,{})),Object(s.a)(p.a,{trackScroll:!c,scrollKey:"home_timeline-"+i,onLoadMore:this.handleLoadMore,timelineId:"home",emptyMessage:Object(s.a)(j.b,{id:"empty_column.home",defaultMessage:"Your home timeline is empty! Visit {public} or use search to get started and meet other users.",values:{public:Object(s.a)(M.a,{to:"/timelines/public"},void 0,Object(s.a)(j.b,{id:"empty_column.home.public_timeline",defaultMessage:"the public timeline"}))}}),shouldUpdateScroll:n}))},e}(u.a.PureComponent))||i)||i}}]);
//# sourceMappingURL=home_timeline.js.map