(this.webpackJsonprecipes=this.webpackJsonprecipes||[]).push([[0],{29:function(e,t,l){},30:function(e,t,l){},57:function(e,t,l){},59:function(e,t,l){},60:function(e,t,l){},61:function(e,t,l){},62:function(e,t,l){},63:function(e,t,l){},64:function(e,t,l){},65:function(e,t,l){},66:function(e,t,l){"use strict";l.r(t);var d=l(1),i=l.n(d),a=l(8),c=l.n(a),n=(l(29),l(5)),s=(l(30),l(4)),r=l(23),h=l.n(r),b=l.p+"static/media/taco.2d526556.svg",u=(l(57),l(0)),o=function(){return Object(u.jsxs)("header",{className:"App-header",children:[Object(u.jsx)("img",{src:b,className:"App-logo spin",alt:"logo"}),Object(u.jsx)("h1",{children:"Find the yummiest recipes!"}),Object(u.jsx)("img",{src:b,className:"App-logo spin-inverse",alt:"logo"})]})},m=(l(59),l(60),l.p+"static/media/vegetarian.3883f7cc.png"),p=l.p+"static/media/gluten-free.7ea2dccf.png",j=l.p+"static/media/egg-free.4f824bec.png",S=l.p+"static/media/dairy-free.c470f358.png",f=function(e){var t=e.data,l=function(e,t){return e.includes(t)};return Object(u.jsxs)("div",{className:"categories-wrap",children:[l(t,"Vegetarian")?Object(u.jsx)("img",{className:"img-health-category",src:m,alt:"veg-recipe"}):null,l(t,"Gluten-Free")?Object(u.jsx)("img",{className:"img-health-category",src:p,alt:"gluten-free-recipe"}):null,l(t,"Egg-Free")?Object(u.jsx)("img",{className:"img-health-category",src:j,alt:"egg-free-recipe"}):null,l(t,"Dairy-Free")?Object(u.jsx)("img",{className:"img-health-category",src:S,alt:"dairy-free-recipe"}):null]})},E=function(e){return Object(u.jsxs)("div",{className:"item-wrap",children:[Object(u.jsx)("div",{className:"caption",children:e.label}),Object(u.jsx)("img",{className:"item-img",src:e.image,alt:""}),Object(u.jsx)(f,{data:e.healthLabels}),Object(u.jsx)("a",{href:e.url,className:"item-button",target:"_blank",rel:"noreferrer",children:"See recipe"})]})},O=(l(61),function(e){var t,l=e.data;return l.length>0&&(t=l.map((function(e,t){return Object(u.jsx)(E,{id:t,label:e.label,url:e.url,image:e.image,healthLabels:e.healthLabels},t)}))),Object(u.jsxs)("ul",{className:"items-container",children:[" ",t," "]})}),y=(l(62),l(3)),g=l(24),T=(l(63),l(64),function(e){var t=e.title,l=e.dropdownList,i=e.handleSelectItem,a=e.listInitialState,c=Object(d.useState)(a),s=Object(n.a)(c,2),r=s[0],h=s[1],b=t;return Object(u.jsxs)("div",{className:"dd-wrapper",children:[Object(u.jsx)("button",{className:"item-button dd-button",onClick:function(){return h(!r)},children:Object(u.jsxs)("div",{className:"dd-header",children:[Object(u.jsx)("div",{className:"dd-header-title",children:b}),r?"/\\":"\\/"]})}),Object(u.jsx)("div",{className:"dd-list",children:r?l.sort((function(e,t){return e.id-t.id})).map((function(e){return Object(u.jsx)("button",{type:"button",className:"dd-list-item"+(e.isSelected?" filter-selected":""),onClick:function(){return i(e)},children:e.ddElement},e.id)})):null})]})}),x=function(e){return{type:"UPDATE_ADVANCED_SEARCH",payload:{value:e}}},v=[{id:1,ddElement:"American",isSelected:!1,label:"cuisineType"},{id:2,ddElement:"Asian",isSelected:!1,label:"cuisineType"},{id:3,ddElement:"British",isSelected:!1,label:"cuisineType"},{id:4,ddElement:"Caribbean",isSelected:!1,label:"cuisineType"},{id:5,ddElement:"Central Europe",isSelected:!1,label:"cuisineType"},{id:6,ddElement:"Chinese",isSelected:!1,label:"cuisineType"},{id:7,ddElement:"Eastern Europe",isSelected:!1,label:"cuisineType"},{id:8,ddElement:"French",isSelected:!1,label:"cuisineType"},{id:9,ddElement:"Indian",isSelected:!1,label:"cuisineType"},{id:10,ddElement:"Italian",isSelected:!1,label:"cuisineType"},{id:11,ddElement:"Japanese",isSelected:!1,label:"cuisineType"},{id:12,ddElement:"Kosher",isSelected:!1,label:"cuisineType"},{id:13,ddElement:"Mediterranean",isSelected:!1,label:"cuisineType"},{id:14,ddElement:"Mexican",isSelected:!1,label:"cuisineType"},{id:15,ddElement:"Middle Eastern",isSelected:!1,label:"cuisineType"},{id:16,ddElement:"Nordic",isSelected:!1,label:"cuisineType"},{id:17,ddElement:"South American",isSelected:!1,label:"cuisineType"},{id:18,ddElement:"South East Asian",isSelected:!1,label:"cuisineType"},{id:19,ddElement:"alcohol-free",isSelected:!1,label:"health"},{id:20,ddElement:"immuno-supportive",isSelected:!1,label:"health"},{id:21,ddElement:"celery-free",isSelected:!1,label:"health"},{id:22,ddElement:"crustacean-free",isSelected:!1,label:"health"},{id:23,ddElement:"dairy-free",isSelected:!1,label:"health"},{id:24,ddElement:"egg-free",isSelected:!1,label:"health"},{id:25,ddElement:"fish-free",isSelected:!1,label:"health"},{id:26,ddElement:"fodmap-free",isSelected:!1,label:"health"},{id:27,ddElement:"gluten-free",isSelected:!1,label:"health"},{id:28,ddElement:"keto-friendly",isSelected:!1,label:"health"},{id:29,ddElement:"kidney-friendly",isSelected:!1,label:"health"},{id:30,ddElement:"kosher",isSelected:!1,label:"health"},{id:31,ddElement:"low-potassium",isSelected:!1,label:"health"},{id:32,ddElement:"lupine-free",isSelected:!1,label:"health"},{id:33,ddElement:"mustard-free",isSelected:!1,label:"health"},{id:34,ddElement:"low-fat-abs",isSelected:!1,label:"health"},{id:35,ddElement:"No-oil-added",isSelected:!1,label:"health"},{id:36,ddElement:"low-sugar",isSelected:!1,label:"health"},{id:37,ddElement:"paleo",isSelected:!1,label:"health"},{id:38,ddElement:"peanut-free",isSelected:!1,label:"health"},{id:39,ddElement:"pecatarian",isSelected:!1,label:"health"},{id:40,ddElement:"pork-free",isSelected:!1,label:"health"},{id:41,ddElement:"red-meat-free",isSelected:!1,label:"health"},{id:42,ddElement:"sesame-free",isSelected:!1,label:"health"},{id:43,ddElement:"shellfish-free",isSelected:!1,label:"health"},{id:44,ddElement:"soy-free",isSelected:!1,label:"health"},{id:45,ddElement:"sugar-conscious",isSelected:!1,label:"health"},{id:46,ddElement:"tree-nut-free",isSelected:!1,label:"health"},{id:47,ddElement:"vegan",isSelected:!1,label:"health"},{id:48,ddElement:"vegetarian",isSelected:!1,label:"health"},{id:49,ddElement:"wheat-free",isSelected:!1,label:"health"},{id:50,ddElement:"Breakfast",isSelected:!1,label:"mealType"},{id:51,ddElement:"Lunch",isSelected:!1,label:"mealType"},{id:52,ddElement:"Dinner",isSelected:!1,label:"mealType"},{id:53,ddElement:"Snack",isSelected:!1,label:"mealType"},{id:54,ddElement:"Teatime",isSelected:!1,label:"mealType"},{id:55,ddElement:"Alcohol-cocktail",isSelected:!1,label:"dishType"},{id:56,ddElement:"Biscuits and cookies",isSelected:!1,label:"dishType"},{id:57,ddElement:"Bread",isSelected:!1,label:"dishType"},{id:58,ddElement:"Cereals",isSelected:!1,label:"dishType"},{id:59,ddElement:"Condiments and sauces",isSelected:!1,label:"dishType"},{id:60,ddElement:"Drinks",isSelected:!1,label:"dishType"},{id:61,ddElement:"Desserts",isSelected:!1,label:"dishType"},{id:62,ddElement:"Egg",isSelected:!1,label:"dishType"},{id:63,ddElement:"Main course",isSelected:!1,label:"dishType"},{id:64,ddElement:"Omelet",isSelected:!1,label:"dishType"},{id:65,ddElement:"Pancake",isSelected:!1,label:"dishType"},{id:66,ddElement:"Preps",isSelected:!1,label:"dishType"},{id:67,ddElement:"Preserve",isSelected:!1,label:"dishType"},{id:68,ddElement:"Salad",isSelected:!1,label:"dishType"},{id:69,ddElement:"Sandwiches",isSelected:!1,label:"dishType"},{id:70,ddElement:"Soup",isSelected:!1,label:"dishType"},{id:71,ddElement:"Starter",isSelected:!1,label:"dishType"}],N=function(){var e,t=Object(s.b)(),l=Object(d.useState)(!1),i=Object(n.a)(l,2),a=i[0],c=i[1],r=Object(d.useState)(0),h=Object(n.a)(r,2),b=h[0],o=h[1],m=new Map([["cuisineType","Cuisine"],["health","Health"],["mealType","Meal"],["dishType","Dish"]]),p=function(e){return E([].concat(Object(g.a)(f.filter((function(t){return t.id!==e.id}))),[Object(y.a)(Object(y.a)({},e),{},{isSelected:!e.isSelected})]))},j=Object(d.useState)(v),S=Object(n.a)(j,2),f=S[0],E=S[1];return a&&(e=["cuisineType","health","mealType","dishType"].map((function(e,t){return Object(u.jsx)(T,{id:t,title:m.get(e),listInitialState:!1,dropdownList:f.filter((function(t){return t.label===e})),handleSelectItem:p},"".concat(b).concat(t))}))),Object(u.jsxs)("div",{className:"searchadvanced-box",children:[Object(u.jsx)("button",{className:"advance-search-button "+(a?null:" unique-button-search"),onClick:function(){return c(!a)},children:"+ FILTERS"}),a?Object(u.jsxs)("div",{className:"searchadvanced-filters",children:[Object(u.jsxs)("ul",{className:"items-container",children:[" ",e," "]}),Object(u.jsxs)("div",{className:"more-filters-container",children:[Object(u.jsx)("button",{className:"advance-search-button",onClick:function(){var e=f.filter((function(e){return e.isSelected})).map((function(e){return"&".concat(e.label,"=").concat(encodeURIComponent(e.ddElement))})).join("");t(x(e)),o(b+1)},children:"Apply Filters"}),Object(u.jsx)("button",{className:"advance-search-button",onClick:function(){t(x("")),E(v),o(b+1)},children:"Reset Filters"})]})]}):null]})};l(65);var C=function(){var e=Object(s.b)();return Object(u.jsx)("form",{className:"search-form",onSubmit:function(t){t.preventDefault(),e({type:"SUBMIT_SEARCH"}),console.log(t),t.target.reset()},children:Object(u.jsx)("div",{className:"search-flexbox",children:Object(u.jsxs)("div",{className:"search",children:[Object(u.jsx)("h1",{children:"Search a recipe"}),Object(u.jsx)("h4",{children:"Click on search icon, then type your keyword."}),Object(u.jsx)("div",{className:"search-box",children:Object(u.jsx)("input",{type:"search",onChange:function(t){return e({type:"SEARCH_CHANGE",payload:{value:t.target.value}})},name:"search",placeholder:"Search..."})})]})})})},A=function(){return Object(u.jsxs)("div",{className:"search-flexbox",children:[Object(u.jsx)(C,{}),Object(u.jsx)(N,{})]})};var _=function(){var e=Object(d.useState)([]),t=Object(n.a)(e,2),l=t[0],i=t[1],a=Object(d.useState)(!0),c=Object(n.a)(a,2),r=c[0],b=c[1],m=Object(s.c)((function(e){return e.search.query})),p=Object(s.c)((function(e){return e.search.advancedSearchQuery}));return Object(d.useEffect)((function(){var e="https://api.edamam.com/search?q=".concat(m,"&app_id=").concat("ccddccff","&app_key=").concat("a3a8ac2f511a16ace35fd717243e04c1","&from=0&to=").concat(12).concat(p);console.log(e),h()(e).then((function(e){return i(e.data.hits.map((function(e){return e.recipe})))})).catch((function(e){return console.log("Error fetching and parsing data",e)})).finally((function(){return b(!1)}))}),[p,m]),Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(o,{}),Object(u.jsx)(A,{}),Object(u.jsx)("div",{className:"main-content",children:r?Object(u.jsx)("p",{children:"Loading..."}):Object(u.jsx)(O,{data:l})})]})},k=function(e){e&&e instanceof Function&&l.e(3).then(l.bind(null,67)).then((function(t){var l=t.getCLS,d=t.getFID,i=t.getFCP,a=t.getLCP,c=t.getTTFB;l(e),d(e),i(e),a(e),c(e)}))},w=l(6),D={searchText:"",query:"artichoke",advancedSearchQuery:""},I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SEARCH_CHANGE":return Object(y.a)(Object(y.a)({},e),{},{searchText:t.payload.value});case"SUBMIT_SEARCH":return Object(y.a)(Object(y.a)({},e),{},{query:e.searchText,searchText:""});case"UPDATE_ADVANCED_SEARCH":return Object(y.a)(Object(y.a)({},e),{},{advancedSearchQuery:t.payload.value});default:return e}},F=Object(w.b)({search:I}),L=Object(w.c)(F,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());c.a.render(Object(u.jsx)(i.a.StrictMode,{children:Object(u.jsx)(s.a,{store:L,children:Object(u.jsx)(_,{})})}),document.getElementById("root")),k()}},[[66,1,2]]]);
//# sourceMappingURL=main.cdf00d7d.chunk.js.map