(this.webpackJsonpblog=this.webpackJsonpblog||[]).push([[0],{18:function(t,e,a){t.exports={PostItem:"Post_PostItem__bGyyf"}},19:function(t,e,a){t.exports=a(43)},24:function(t,e,a){},43:function(t,e,a){"use strict";a.r(e);var n=a(0),s=a.n(n),l=a(16),i=a.n(l),o=(a(24),a(2)),r=a(3),c=a(5),u=a(4),m=a(6),p=a(17),d=a.n(p).a.create({baseURL:"https://5dfa5e8538678a00145fa1ae.mockapi.io/app/",timeout:5e4}),h=a(18),v=a.n(h),b=function(t){function e(t){var a;return Object(o.a)(this,e),(a=Object(c.a)(this,Object(u.a)(e).call(this,t))).state={posts:a.props.posts},a}return Object(m.a)(e,t),Object(r.a)(e,[{key:"componentDidUpdate",value:function(t,e){t.posts&&this.props.posts.length!==e.posts.length&&this.setState({posts:this.props.posts})}},{key:"render",value:function(){var t=this;return s.a.createElement("div",null,this.state.posts.map((function(e){var a=["media"];return a.push(v.a.PostItem),s.a.createElement("div",{className:a.join(" "),key:e.id},s.a.createElement("img",{src:e.image,className:"mr-3 img-thumbnail",alt:e.title}),s.a.createElement("div",{className:"media-body"},s.a.createElement("h5",{onClick:function(a){return t.props.clicked(e.id)},className:"mt-0"},e.title),e.details.slice(0,100)))})))}}]),e}(s.a.Component),f=function(t){function e(t){var a;return Object(o.a)(this,e),(a=Object(c.a)(this,Object(u.a)(e).call(this,t))).state={inputs:{title:"",details:""}},a}return Object(m.a)(e,t),Object(r.a)(e,[{key:"inputChangeHandler",value:function(t,e){var a=this.state.inputs;a[e]=t.target.value,this.setState({inputs:a})}},{key:"formSubmitHandler",value:function(t){var e=this;t.preventDefault(),console.log(this.state.inputs),d.post("/blogs",this.state.inputs).then((function(t){console.log(t),e.props.created(t.data)}))}},{key:"render",value:function(){var t=this;return s.a.createElement("div",null,s.a.createElement("form",{onSubmit:this.formSubmitHandler.bind(this)},s.a.createElement("div",{className:"form-group"},s.a.createElement("label",{htmlFor:"title"},"Post Title"),s.a.createElement("input",{type:"text",className:"form-control",id:"title",placeholder:"Title....",value:this.state.inputs.title,required:!0,onChange:function(e){return t.inputChangeHandler(e,"title")}})),s.a.createElement("div",{className:"form-group"},s.a.createElement("label",{htmlFor:"details"},"Post Details"),s.a.createElement("textarea",{onChange:function(e){return t.inputChangeHandler(e,"details")},className:"form-control",id:"details",rows:"3",defaultValue:this.state.inputs.details,placeholder:"Write something..."})),s.a.createElement("div",{className:"form-group"},s.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Submit"))))}}]),e}(s.a.Component),g=function(t){function e(t){var a;return Object(o.a)(this,e),(a=Object(c.a)(this,Object(u.a)(e).call(this,t))).state={post:null},a}return Object(m.a)(e,t),Object(r.a)(e,[{key:"shouldComponentUpdate",value:function(){return!this.state.post||this.props.post!==this.state.post.id}},{key:"componentDidUpdate",value:function(t,e){var a=this;d.get("/blogs/"+this.props.post).then((function(t){a.setState({post:t.data})}))}},{key:"componentDidMount",value:function(){var t=this;d.get("/blogs/"+this.props.post).then((function(e){t.setState({post:e.data})}))}},{key:"render",value:function(){return s.a.createElement("div",null,this.state.post?s.a.createElement("div",null,s.a.createElement("h1",null,this.state.post.title),s.a.createElement("h6",null,this.state.post.createdAt),s.a.createElement("div",null,this.state.post.details)):null)}}]),e}(s.a.Component),E=function(t){function e(t){var a;return Object(o.a)(this,e),(a=Object(c.a)(this,Object(u.a)(e).call(this,t))).state={active:"success",posts:[],selected:null},a}return Object(m.a)(e,t),Object(r.a)(e,[{key:"componentDidUpdate",value:function(t,e){console.log(e,t),console.log("[Main] updated")}},{key:"componentDidMount",value:function(){var t=this;console.log("[Main] mounted"),d.get("/blogs").then((function(e){t.setState({posts:e.data})}))}},{key:"postClickHandler",value:function(t){this.setState({selected:t})}},{key:"backButtonClickHandler",value:function(t){this.setState({selected:null})}},{key:"isNewPostCreated",value:function(t){if(t){var e=this.state.posts;e.push(t),this.setState({posts:e})}}},{key:"render",value:function(){return console.log("[Main] rendered"),s.a.createElement("div",null,s.a.createElement(f,{created:this.isNewPostCreated.bind(this)}),s.a.createElement("hr",null),s.a.createElement("div",null,s.a.createElement("h2",null,"All Posts"),s.a.createElement(b,{clicked:this.postClickHandler.bind(this),posts:this.state.posts})),this.state.selected?s.a.createElement("div",null,s.a.createElement("button",{className:"btn btn-warning btn-sm",onClick:this.backButtonClickHandler.bind(this)},"Close"),s.a.createElement(g,{post:this.state.selected})):null)}}]),e}(s.a.Component);var k=function(){return s.a.createElement("div",{className:"container "},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-12"},s.a.createElement(E,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(42);i.a.render(s.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))}},[[19,1,2]]]);
//# sourceMappingURL=main.d7079cd6.chunk.js.map