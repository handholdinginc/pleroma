(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{670:function(t,a,s){"use strict";s.r(a),s.d(a,"default",function(){return g});var e,o,c,n=s(1),r=s(6),i=s(0),p=s(2),u=(s(3),s(20)),d=s(5),l=s.n(d),b=s(26),h=s.n(b),O=s(290),j=s(25),f=s(297),m=s(625),v=s(640),I=s(889),w=s(24),g=Object(u.connect)(function(t,a){return{accountIds:t.getIn(["user_lists","reblogged_by",a.params.statusId])}})((c=o=function(o){function t(){for(var t,a=arguments.length,s=new Array(a),e=0;e<a;e++)s[e]=arguments[e];return t=o.call.apply(o,[this].concat(s))||this,Object(p.a)(Object(i.a)(Object(i.a)(t)),"shouldUpdateScroll",function(t,a){var s=a.location;return!(((t||{}).location||{}).state||{}).mastodonModalOpen&&!(s.state&&s.state.mastodonModalOpen)}),t}Object(r.a)(t,o);var a=t.prototype;return a.componentWillMount=function(){this.props.dispatch(Object(j.t)(this.props.params.statusId))},a.componentWillReceiveProps=function(t){t.params.statusId!==this.props.params.statusId&&t.params.statusId&&this.props.dispatch(Object(j.t)(t.params.statusId))},a.render=function(){var t=this.props.accountIds;return t?Object(n.a)(v.a,{},void 0,Object(n.a)(I.a,{}),Object(n.a)(f.a,{scrollKey:"reblogs",shouldUpdateScroll:this.shouldUpdateScroll},void 0,Object(n.a)("div",{className:"scrollable reblogs"},void 0,t.map(function(t){return Object(n.a)(m.a,{id:t,withNote:!1},t)})))):Object(n.a)(v.a,{},void 0,Object(n.a)(O.a,{}))},t}(w.a),Object(p.a)(o,"propTypes",{params:l.a.object.isRequired,dispatch:l.a.func.isRequired,accountIds:h.a.list}),e=c))||e}}]);
//# sourceMappingURL=reblogs.js.map