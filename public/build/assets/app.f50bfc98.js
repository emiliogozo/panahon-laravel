var J=Object.defineProperty,K=Object.defineProperties;var Q=Object.getOwnPropertyDescriptors;var Y=Object.getOwnPropertySymbols;var W=Object.prototype.hasOwnProperty,Z=Object.prototype.propertyIsEnumerable;var z=(e,o,l)=>o in e?J(e,o,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[o]=l,U=(e,o)=>{for(var l in o||(o={}))W.call(o,l)&&z(e,l,o[l]);if(Y)for(var l of Y(o))Z.call(o,l)&&z(e,l,o[l]);return e},C=(e,o)=>K(e,Q(o));import{d as $,r as _,c as r,a as t,t as c,w as M,n as k,b as P,o as a,F as p,e as h,f as m,g as N,h as V,i as A,j as B,k as S,l as q,m as I,p as ee,q as T,s as j,v as F,u as X,x as O,y as te,z as H,_ as se,A as oe,B as ae,C as re,D as le}from"./vendor.5d387f7f.js";var y=(e,o)=>{const l=e.__vccOpts||e;for(const[d,i]of o)l[d]=i;return l};const ne=$({props:["title"],setup(){return{open:_(!1)}}}),ie={class:"flex flex-wrap justify-between md:justify-end items-center bg-white shadow-lg px-2 md:px-6 py-2"},de={class:"block md:hidden flex items-center flex-no-shrink mr-6"},ue={class:"font-semibold text-gray-900 text-lg md:text-2xl"},ce={class:"flex md:hidden"},me=t("i",{class:"fas fa-bars"},null,-1),pe=[me];function fe(e,o,l,d,i,u){return a(),r("nav",ie,[t("div",de,[t("span",ue,c(e.title),1)]),t("div",ce,[t("button",{onClick:o[0]||(o[0]=M(s=>e.open=!e.open,["prevent"])),class:"flex items-center px-3 py-2 border rounded hover:text-white hover:border-white hover:bg-black"},pe)]),t("div",{class:k([[e.open?"relative w-full":"hidden"],"md:flex"])},[t("div",{class:k(["flex flex-col flex-grow items-center md:flex md:flex-row",{"absolute right-0 bg-white shadow-lg":e.open}])},[P(e.$slots,"default")],2)],2)])}var he=y(ne,[["render",fe]]);const ve=$({props:{title:{type:String,required:!0},className:{type:String,required:!0},btnClassName:{type:String,required:!0},href:{type:String,default:"#"}},emits:["btnClicked"]}),be=["title","href"],_e=["title"];function $e(e,o,l,d,i,u){return e.href!=="#"?(a(),r("a",{key:0,class:k(e.className),title:e.title,href:e.href},[t("i",{class:k(e.btnClassName)},null,2)],10,be)):(a(),r("a",{key:1,class:k(e.className),title:e.title,href:"#",onClick:o[0]||(o[0]=M(s=>e.$emit("btnClicked"),["prevent"]))},[t("i",{class:k(e.btnClassName)},null,2)],10,_e))}var ye=y(ve,[["render",$e]]);const ge=$({name:"Modal",props:{btnLabel:{default:"Delete"}},emits:["btnClick","close"]}),we={class:"h-screen w-full fixed left-0 top-0 flex justify-center items-center bg-black bg-opacity-50"},ke={class:"relative flex flex-col p-8 bg-white shadow-md hover:shadow-lg rounded-2xl"},De=t("i",{class:"fas fa-times"},null,-1),Ue=[De],Ce={class:"flex items-center justify-between"},Se={class:"flex items-center"},Ie=t("div",{class:"border rounded-2xl p-3 border border-blue-100 text-blue-400 bg-blue-50"},[t("div",{class:"flex justify-center items-center border-4 border-blue-400 rounded-full w-8 h-8"},[t("i",{class:"fas fa-info stroke-current"})])],-1),Ne={class:"flex flex-col ml-3"};function Ae(e,o,l,d,i,u){return a(),r("div",we,[t("div",ke,[t("div",{class:"absolute top-1 right-2.5 cursor-pointer",onClick:o[0]||(o[0]=M(s=>e.$emit("close"),["prevent"]))},Ue),t("div",Ce,[t("div",Se,[Ie,t("div",Ne,[P(e.$slots,"default")])]),t("a",{class:"flex-no-shrink bg-red-500 px-5 ml-4 py-2 text-sm shadow-sm hover:shadow-lg font-medium tracking-wider border-2 border-red-500 text-white rounded-full",role:"button",href:"#",onClick:o[1]||(o[1]=M(s=>e.$emit("btnClick"),["prevent"]))},c(e.btnLabel),1)])])])}var Me=y(ge,[["render",Ae]]);const xe=$({props:["data"]}),Be={class:"flex"},Re={class:"flex h-8 font-medium rounded-full bg-gray-200"},je=["aria-disabled"],Fe={key:0,class:"w-8 md:flex justify-center items-center hidden leading-5 rounded-full","aria-disabled":"true"},qe=["aria-disabled","onClick"],Te=["aria-disabled"];function Ee(e,o,l,d,i,u){return a(),r("nav",Be,[t("ul",Re,[t("li",{class:k(["h-8 w-8 mr-1 flex justify-center items-center rounded-full bg-gray-200",{"cursor-pointer":e.data.prev_page_url!==null}]),"aria-disabled":e.data.prev_page_url===null,onClick:o[0]||(o[0]=s=>e.$emit("fetchData",e.data.prev_page_url))}," < ",10,je),(a(!0),r(p,null,h(e.data.links,s=>(a(),r(p,{key:s.label},[s.label==="..."?(a(),r("li",Fe,c(s.label),1)):isNaN(+s.label)?m("",!0):(a(),r("li",{key:1,class:k(["w-8 md:flex justify-center items-center hidden leading-5 rounded-full",[s.active?"bg-blue-600 text-white":"cursor-pointer"]]),"aria-disabled":s.url===null,onClick:n=>e.$emit("fetchData",s.url)},c(s.label),11,qe))],64))),128)),t("li",{class:k(["h-8 w-8 ml-1 flex justify-center items-center rounded-full bg-gray-200",{"cursor-pointer":e.data.next_page_url!==null}]),"aria-disabled":e.data.next_page_url===null,onClick:o[1]||(o[1]=s=>e.$emit("fetchData",e.data.next_page_url))}," > ",10,Te)])])}var Le=y(xe,[["render",Ee]]);const Pe=$({props:{data:{type:Object,required:!0},showIdColumn:{type:Boolean,default:!0},showAction:{type:Boolean,default:!1}},components:{ActionBtn:ye,Modal:Me,Pagination:Le},emits:["fetchData","modalBtnClick"],setup(e){const{data:o}=N(e),l=_(!1),d=_(-1),i=_(""),u=_(""),s=V(()=>Object.prototype.hasOwnProperty.call(o.value,"links")&&o.value.links.length>3);return{activeItemId:d,activeModalType:i,activeModalMessage:u,showPagination:s,showModal:l}}}),Ve={class:"table-auto space-y-6 text-sm mb-2"},Xe={class:"text-center"},Oe={key:0,class:"p-2 border border-gray-300",scope:"col"},Ye={key:1,class:"p-2 border border-gray-300",scope:"col"},ze={key:0,class:"p-2 text-justify border border-gray-300"},He=["href"],Ge={key:1},Je={key:1,class:"p-2 text-center border border-gray-300 space-x-2"},Ke={class:"font-medium leading-none"};function Qe(e,o,l,d,i,u){const s=S("ActionBtn"),n=S("Pagination"),g=S("Modal");return a(),r("div",null,[t("table",Ve,[t("thead",null,[t("tr",Xe,[e.showIdColumn?(a(),r("th",Oe,"#")):m("",!0),(a(!0),r(p,null,h(e.data.columns,f=>(a(),r("th",{key:f.name,class:"p-2 border border-gray-300",scope:"col"},c(f.title),1))),128)),e.showAction?(a(),r("th",Ye,"Action")):m("",!0)])]),t("tbody",null,[(a(!0),r(p,null,h(e.data.data,f=>(a(),r("tr",{key:f.id},[e.showIdColumn?(a(),r("td",ze,c(f.id),1)):m("",!0),(a(!0),r(p,null,h(e.data.columns,b=>(a(),r("td",{key:b.name,class:"p-2 text-justify border border-gray-300"},[b.href?(a(),r("a",{key:0,class:"underline text-blue-600 hover:text-blue-800 visited:text-purple-600",href:f[b.href]},c(f[b.name]),9,He)):(a(),r("span",Ge,c(f[b.name]),1))]))),128)),e.showAction?(a(),r("td",Je,[(a(!0),r(p,null,h(f.action,b=>(a(),A(s,{key:b.title,title:b.title,"class-name":b.className,"btn-class-name":b.btnClassName,href:b.href,onBtnClicked:w=>{e.activeItemId=f.id,e.activeModalType=b.type,e.activeModalMessage=b.modalMessage||"Delete?",e.showModal=!0}},null,8,["title","class-name","btn-class-name","href","onBtnClicked"]))),128))])):m("",!0)]))),128))])]),e.showPagination?(a(),A(n,{key:0,data:e.data,onFetchData:o[0]||(o[0]=f=>e.$emit("fetchData",f))},null,8,["data"])):m("",!0),e.showModal?(a(),A(g,{key:1,onClose:o[1]||(o[1]=f=>e.showModal=!1),onBtnClick:o[2]||(o[2]=f=>(e.$emit("modalBtnClick",{type:e.activeModalType,id:e.activeItemId}),e.showModal=!1))},{default:B(()=>[t("div",Ke,c(e.activeModalMessage),1)]),_:1})):m("",!0)])}var We=y(Pe,[["render",Qe]]);const Ze=$({props:{fetchUrl:{type:String,required:!0},baseUrl:{type:String,required:!0},isAdmin:{type:Boolean,default:!1},showIdColumn:{type:Boolean,default:!0},formatData:{type:Function}},components:{DataTable:We},setup(e){const o=_({}),{fetchUrl:l,baseUrl:d,formatData:i}=N(e),u=async n=>{if(n){const g=await I.get(n).then(({data:f})=>f);o.value=i.value?i.value(g):g}},s=n=>{n.type==="delete"&&I.delete(`${d.value}/${n.id}`).then(()=>{const{current_page:g,links:f,data:b}=o.value,w=f.find(({label:G})=>`${g}`===G)||{url:""},L=b.length===1?l.value:w.url;u(L)})};return q(()=>u(l.value)),{tableData:o,fetchData:u,handleModalBtnClick:s}}}),et={class:"w-max flex flex-col space-y-2 items-center mx-auto"},tt={class:"w-full flex justify-between items-end p-2"},st={class:"text-2xl"},ot={class:"flex"},at=["href"],rt=t("i",{class:"fa fa-plus"},null,-1),lt=[rt];function nt(e,o,l,d,i,u){const s=S("DataTable");return a(),r("div",et,[t("div",tt,[t("h2",st,[P(e.$slots,"header")]),t("div",ot,[e.isAdmin?(a(),r("a",{key:0,class:"rounded px-3 py-2 m-1 shadow-lg bg-blue-600 border-blue-700",href:`${e.baseUrl}/create`,role:"button"},lt,8,at)):m("",!0)])]),ee(s,{class:"w-full",data:e.tableData,showAction:e.isAdmin,showIdColumn:e.showIdColumn,onFetchData:e.fetchData,onModalBtnClick:e.handleModalBtnClick},null,8,["data","showAction","showIdColumn","onFetchData","onModalBtnClick"])])}var E=y(Ze,[["render",nt]]);const it=$({props:{fetchUrl:{type:String,required:!0},baseUrl:{type:String,required:!0},isAdmin:{type:Boolean,default:!1}},components:{Default:E},setup(e){const{baseUrl:o}=N(e),l=[{name:"name",title:"Name"},{name:"address",title:"Address"},{name:"station_type",title:"Type"},{name:"status",title:"Status",href:"statusUrl"},{name:"date_installed",title:"Install Date"}];return{formatData:i=>{const u=i.data.map(s=>C(U({},s),{statusUrl:`${o.value}/${s.id}/logs`,action:[{className:"stroke-current hover:text-blue-600",title:"Edit",href:`${o.value}/${s.id}/edit`,btnClassName:"fas fa-edit"},{className:"stroke-current hover:text-red-600",title:"Delete",type:"delete",modalMessage:`delete '${s.name}' station?`,btnClassName:"fas fa-trash"}]}));return C(U({},i),{data:u,columns:l})}}}}),dt=T("Station "),ut=t("span",{class:"font-bold"},"Details",-1);function ct(e,o,l,d,i,u){const s=S("Default");return a(),A(s,{fetchUrl:e.fetchUrl,baseUrl:e.baseUrl,isAdmin:e.isAdmin,formatData:e.formatData},{header:B(()=>[dt,ut]),_:1},8,["fetchUrl","baseUrl","isAdmin","formatData"])}var mt=y(it,[["render",ct]]);const pt=$({props:["data","baseUrl"],setup(e){const{data:o,baseUrl:l}=N(e),d=_({name:"",address:""}),i=_({}),u=_(!1),s=V(()=>d.value.station_type==="SMS"),n=()=>{u.value=!1,d.value.id?(console.log("patch"),console.log(d.value),I.patch(`${l.value}/${d.value.id}`,d.value).then(()=>u.value=!0).catch(({response:{data:{errors:g}}})=>i.value=g)):(console.log("post"),console.log(d.value),I.post(l.value,d.value).then(()=>u.value=!0).catch(({response:{data:{errors:g}}})=>i.value=g))};return q(()=>{o.value.id&&(d.value=o.value)}),{station:d,success:u,errors:i,mobileNumberInputEnabled:s,handleFormSubmit:n}}}),v=e=>(X("data-v-b6219bdc"),e=e(),O(),e),ft={class:"flex items-center min-h-screen bg-white dark:bg-gray-900"},ht={class:"container mx-auto"},vt={class:"max-w-md mx-auto"},bt={class:"text-center"},_t={class:"my-3 text-3xl font-semibold text-gray-700 dark:text-gray-200"},$t={class:"flex justify-center items-center m-1 font-medium py-1 px-2 bg-white rounded-md text-green-700 bg-green-100 border border-green-300"},yt=v(()=>t("div",null,[t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"feather feather-check-circle w-5 h-5 mx-2"},[t("path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14"}),t("polyline",{points:"22 4 12 14.01 9 11.01"})])],-1)),gt=v(()=>t("div",{class:"text-xl font-normal max-w-full flex-initial"},"Updated successfully",-1)),wt={class:"flex flex-auto flex-row-reverse"},kt=v(()=>t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"feather feather-x cursor-pointer hover:text-green-400 rounded-full w-5 h-5 ml-2"},[t("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),t("line",{x1:"6",y1:"6",x2:"18",y2:"18"})],-1)),Dt=[kt],Ut={class:"m-7"},Ct={class:"mb-3"},St=v(()=>t("label",{for:"name",class:"form-label"},"Station Name",-1)),It=["value"],Nt={class:"flex mb-3 space-x-2"},At={class:"w-1/3"},Mt=v(()=>t("label",{for:"lat",class:"form-label"},"Latitude",-1)),xt=["value"],Bt={class:"w-1/3"},Rt=v(()=>t("label",{for:"lon",class:"form-label"},"Longitude",-1)),jt=["value"],Ft={class:"w-1/3"},qt=v(()=>t("label",{for:"elevation",class:"form-label"},"Elevation",-1)),Tt=["value"],Et={class:"flex mb-3 space-x-2"},Lt={class:"w-2/5"},Pt=v(()=>t("label",{for:"station_type",class:"form-label"},"Station Type",-1)),Vt=["value"],Xt=v(()=>t("option",null,"SMS",-1)),Ot=v(()=>t("option",null,"MO",-1)),Yt=[Xt,Ot],zt={class:"w-3/5"},Ht=v(()=>t("label",{for:"mobile_number",class:"form-label"},"Mobile Number",-1)),Gt=["disabled","value"],Jt={class:"flex mb-3 space-x-2"},Kt={class:"w-2/5"},Qt=v(()=>t("label",{for:"status",class:"form-label"},"Status",-1)),Wt=["value"],Zt=v(()=>t("option",null,"ACTIVE",-1)),es=v(()=>t("option",null,"INACTIVE",-1)),ts=[Zt,es],ss={class:"w-3/5"},os=v(()=>t("label",{for:"date_installed",class:"form-label"},"Date Installed",-1)),as=["value"],rs={class:"mb-3"},ls=v(()=>t("label",{for:"address",class:"form-label"},"Address",-1)),ns=["value"],is={class:"flex mb-4 space-x-2"},ds={class:"w-1/2"},us=v(()=>t("label",{for:"province",class:"form-label"},"Province",-1)),cs=["value"],ms={class:"w-1/2"},ps=v(()=>t("label",{for:"region",class:"form-label"},"Region",-1)),fs=["value"],hs={class:"mb-3"},vs={type:"submit",class:"form-button"};function bs(e,o,l,d,i,u){return a(),r("div",ft,[t("div",ht,[t("div",vt,[t("div",bt,[t("h1",_t,c(e.station.id?`Update ${e.station.name}`:"Add new station"),1)]),j(t("div",$t,[yt,gt,t("div",wt,[t("div",{onClick:o[0]||(o[0]=s=>e.success=!1)},Dt)])],512),[[F,e.success]]),t("div",Ut,[t("form",{onSubmit:o[11]||(o[11]=M((...s)=>e.handleFormSubmit&&e.handleFormSubmit(...s),["prevent"]))},[t("div",Ct,[St,t("input",{type:"text",class:"form-control",placeholder:"Station Name",name:"name",value:e.station.name,onInput:o[1]||(o[1]=s=>e.station.name=s.target.value)},null,40,It),e.errors?(a(!0),r(p,{key:0},h(e.errors.name,(s,n)=>(a(),r("span",{class:"form-error",role:"alert",key:n},c(s),1))),128)):m("",!0)]),t("div",Nt,[t("div",At,[Mt,t("input",{type:"text",class:"form-control",id:"lat",placeholder:"Lat",name:"lat",value:e.station.lat,onInput:o[2]||(o[2]=s=>e.station.lat=s.target.value)},null,40,xt),e.errors?(a(!0),r(p,{key:0},h(e.errors.lat,(s,n)=>(a(),r("span",{class:"form-error",role:"alert",key:n},c(s),1))),128)):m("",!0)]),t("div",Bt,[Rt,t("input",{type:"text",class:"form-control",id:"lon",placeholder:"Lon",name:"lon",value:e.station.lon,onInput:o[3]||(o[3]=s=>e.station.lon=s.target.value)},null,40,jt),e.errors?(a(!0),r(p,{key:0},h(e.errors.lon,(s,n)=>(a(),r("span",{class:"form-error",role:"alert",key:n},c(s),1))),128)):m("",!0)]),t("div",Ft,[qt,t("input",{type:"text",class:"form-control",id:"elevation",placeholder:"Elevation",name:"elevation",value:e.station.elevation,onInput:o[4]||(o[4]=s=>e.station.elevation=s.target.value)},null,40,Tt),e.errors?(a(!0),r(p,{key:0},h(e.errors.elevation,(s,n)=>(a(),r("span",{class:"form-error",role:"alert",key:n},c(s),1))),128)):m("",!0)])]),t("div",Et,[t("div",Lt,[Pt,t("select",{class:"form-control",id:"station_type",name:"station_type","aria-label":"Station Type",value:e.station.station_type,onChange:o[5]||(o[5]=s=>e.station.station_type=s.target.value)},Yt,40,Vt)]),t("div",zt,[Ht,t("input",{type:"text",class:"form-control",disabled:!e.mobileNumberInputEnabled,id:"mobile_number",placeholder:"63XXXXXXXXXX",name:"mobile_number",pattern:"63[0-9]{10}",value:e.station.mobile_number},null,8,Gt),e.errors?(a(!0),r(p,{key:0},h(e.errors.mobile_number,(s,n)=>(a(),r("span",{class:"form-error",role:"alert",key:n},c(s),1))),128)):m("",!0)])]),t("div",Jt,[t("div",Kt,[Qt,t("select",{class:"form-control",id:"status",name:"status","aria-label":"Station Status",value:e.station.status,onChange:o[6]||(o[6]=s=>e.station.status=s.target.value)},ts,40,Wt)]),t("div",ss,[os,t("input",{type:"date",class:"form-control",id:"date_installed",placeholder:"YYYY-MM-dd",name:"date_installed",value:e.station.date_installed,onChange:o[7]||(o[7]=s=>e.station.date_installed=s.target.value)},null,40,as),e.errors?(a(!0),r(p,{key:0},h(e.errors.date_installed,(s,n)=>(a(),r("span",{class:"form-error",role:"alert",key:n},c(s),1))),128)):m("",!0)])]),t("div",rs,[ls,t("input",{type:"text",class:"form-control",id:"address",name:"address",placeholder:"Address",value:e.station.address,onInput:o[8]||(o[8]=s=>e.station.address=s.target.value)},null,40,ns),e.errors?(a(!0),r(p,{key:0},h(e.errors.address,(s,n)=>(a(),r("span",{class:"form-error",role:"alert",key:n},c(s),1))),128)):m("",!0)]),t("div",is,[t("div",ds,[us,t("input",{type:"text",class:"form-control",id:"province",placeholder:"Province",name:"province",value:e.station.province,onInput:o[9]||(o[9]=s=>e.station.province=s.target.value)},null,40,cs),e.errors?(a(!0),r(p,{key:0},h(e.errors.province,(s,n)=>(a(),r("span",{class:"form-error",role:"alert",key:n},c(s),1))),128)):m("",!0)]),t("div",ms,[ps,t("input",{type:"text",class:"form-control",id:"region",placeholder:"Region",name:"region",value:e.station.region,onInput:o[10]||(o[10]=s=>e.station.region=s.target.value)},null,40,fs),e.errors?(a(!0),r(p,{key:0},h(e.errors.region,(s,n)=>(a(),r("span",{class:"form-error",role:"alert",key:n},c(s),1))),128)):m("",!0)])]),t("div",hs,[t("button",vs,c(e.station.id?"Update":"Add"),1)])],32)])])])])}var _s=y(pt,[["render",bs],["__scopeId","data-v-b6219bdc"]]);const $s=$({props:{fetchUrl:{type:String,required:!0},baseUrl:{type:String,required:!0},isAdmin:{type:Boolean,default:!1}},components:{Default:E},setup(){const e=[{name:"timestamp",title:"Timestamp"},{name:"message",title:"Message"}];return{formatData:l=>C(U({},l),{columns:e})}}}),ys=T("Station "),gs=t("span",{class:"font-bold"},"Logs",-1);function ws(e,o,l,d,i,u){const s=S("Default");return a(),A(s,{fetchUrl:e.fetchUrl,baseUrl:e.baseUrl,isAdmin:!1,showIdColumn:!1,formatData:e.formatData},{header:B(()=>[ys,gs]),_:1},8,["fetchUrl","baseUrl","formatData"])}var ks=y($s,[["render",ws]]);const Ds=$({props:{fetchUrl:{type:String,required:!0},baseUrl:{type:String,required:!0},isAdmin:{type:Boolean,default:!1}},components:{Default:E},setup(e){const{baseUrl:o}=N(e),l=[{name:"name",title:"Name"},{name:"roleList",title:"Roles"}];return{formatData:i=>{const u=i.data.map(s=>C(U({},s),{statusUrl:`${o.value}/${s.id}/logs`,action:[{className:"stroke-current hover:text-blue-600",title:"Edit",href:`${o.value}/${s.id}/edit`,btnClassName:"fas fa-edit"},{className:"stroke-current hover:text-red-600",title:"Delete",type:"delete",modalMessage:`delete '${s.name}' station?`,btnClassName:"fas fa-trash"}]}));return C(U({},i),{data:u,columns:l})}}}}),Us=T("User "),Cs=t("span",{class:"font-bold"},"Details",-1);function Ss(e,o,l,d,i,u){const s=S("Default");return a(),A(s,{fetchUrl:e.fetchUrl,baseUrl:e.baseUrl,isAdmin:e.isAdmin,formatData:e.formatData},{header:B(()=>[Us,Cs]),_:1},8,["fetchUrl","baseUrl","isAdmin","formatData"])}var Is=y(Ds,[["render",Ss]]);const Ns=$({props:["data","roles","baseUrl"],setup(e){const{data:o,roles:l,baseUrl:d}=N(e),i=_({name:"",roles:[]}),u=_([]),s=_({}),n=_(!1),g=_(!1),f=V(()=>u.value.map(w=>l.value.filter(L=>L.id===w)[0].name)),b=()=>{n.value=!1,i.value.roles=u.value,i.value.id?I.patch(`${d.value}/${i.value.id}`,i.value).then(()=>n.value=!0).catch(({response:{data:{errors:w}}})=>s.value=w):I.post(d.value,i.value).then(()=>n.value=!0).catch(({response:{data:{errors:w}}})=>s.value=w)};return q(()=>{o.value.id&&(i.value=o.value),o.value.roles&&(u.value=o.value.roles.map(({id:w})=>w))}),{user:i,userRoleIds:u,userRoleNames:f,success:n,errors:s,showRoleDrpDwn:g,handleFormSubmit:b}}}),x=e=>(X("data-v-2a87358f"),e=e(),O(),e),As={class:"flex items-center min-h-screen bg-white dark:bg-gray-900"},Ms={class:"container mx-auto"},xs={class:"max-w-md mx-auto"},Bs={class:"text-center"},Rs={class:"my-3 text-3xl font-semibold text-gray-700 dark:text-gray-200"},js={class:"flex justify-center items-center m-1 font-medium py-1 px-2 bg-white rounded-md text-green-700 bg-green-100 border border-green-300"},Fs=x(()=>t("div",null,[t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"feather feather-check-circle w-5 h-5 mx-2"},[t("path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14"}),t("polyline",{points:"22 4 12 14.01 9 11.01"})])],-1)),qs=x(()=>t("div",{class:"text-xl font-normal max-w-full flex-initial"},"Updated successfully",-1)),Ts={class:"flex flex-auto flex-row-reverse"},Es=x(()=>t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"feather feather-x cursor-pointer hover:text-green-400 rounded-full w-5 h-5 ml-2"},[t("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),t("line",{x1:"6",y1:"6",x2:"18",y2:"18"})],-1)),Ls=[Es],Ps={class:"m-7"},Vs={class:"mb-3"},Xs=x(()=>t("label",{for:"name",class:"form-label"},"User Name",-1)),Os=["value"],Ys={class:"mb-3"},zs=x(()=>t("label",{for:"email",class:"form-label"},"Email",-1)),Hs=["value"],Gs={class:"mb-3"},Js=x(()=>t("label",{for:"password",class:"form-label"},"Password",-1)),Ks=["value","required"],Qs=x(()=>t("label",{for:"roles",class:"form-label"},"Roles",-1)),Ws={class:"w-full flex"},Zs=["value"],eo=["value"],to={class:"mb-3"},so={type:"submit",class:"form-button"};function oo(e,o,l,d,i,u){return a(),r("div",As,[t("div",Ms,[t("div",xs,[t("div",Bs,[t("h1",Rs,c(e.user.id?`Update ${e.user.name}`:"Add new user"),1)]),j(t("div",js,[Fs,qs,t("div",Ts,[t("div",{onClick:o[0]||(o[0]=s=>e.success=!1)},Ls)])],512),[[F,e.success]]),t("div",Ps,[t("form",{onSubmit:o[9]||(o[9]=M((...s)=>e.handleFormSubmit&&e.handleFormSubmit(...s),["prevent"]))},[t("div",Vs,[Xs,t("input",{type:"text",class:"form-control",placeholder:"User Name",name:"name",value:e.user.name,onInput:o[1]||(o[1]=s=>e.user.name=s.target.value),required:""},null,40,Os),e.errors?(a(!0),r(p,{key:0},h(e.errors.name,(s,n)=>(a(),r("span",{class:"form-error",role:"alert",key:n},c(s),1))),128)):m("",!0)]),t("div",Ys,[zs,t("input",{type:"email",class:"form-control",placeholder:"Email",name:"email",value:e.user.email,onInput:o[2]||(o[2]=s=>e.user.email=s.target.value),required:""},null,40,Hs),e.errors?(a(!0),r(p,{key:0},h(e.errors.email,(s,n)=>(a(),r("span",{class:"form-error",role:"alert",key:n},c(s),1))),128)):m("",!0)]),t("div",Gs,[Js,t("input",{type:"password",class:"form-control",placeholder:"Password",name:"password",value:e.user.password,onInput:o[3]||(o[3]=s=>e.user.password=s.target.value),required:e.user.id===null},null,40,Ks),e.errors?(a(!0),r(p,{key:0},h(e.errors.password,(s,n)=>(a(),r("span",{class:"form-error",role:"alert",key:n},c(s),1))),128)):m("",!0)]),t("div",{class:"mb-3",onMouseleave:o[8]||(o[8]=s=>e.showRoleDrpDwn=!1)},[Qs,t("div",Ws,[t("input",{type:"text",class:"form-control",placeholder:"Roles",id:"roles",onFocus:o[4]||(o[4]=s=>e.showRoleDrpDwn=!0),value:e.userRoleNames,readonly:""},null,40,Zs),t("button",{class:"px-3 py-2 border bg-blue-300 border-blue-400 rounded-r-md",type:"button",id:"roleDrpDwnBtn",onClick:o[5]||(o[5]=s=>e.showRoleDrpDwn=!e.showRoleDrpDwn)},[t("i",{class:k(["fas",e.showRoleDrpDwn?"fa-chevron-up":"fa-chevron-down"])},null,2)])]),j(t("select",{class:"form-control","onUpdate:modelValue":o[6]||(o[6]=s=>e.userRoleIds=s),onBlur:o[7]||(o[7]=s=>e.showRoleDrpDwn=!1),multiple:""},[(a(!0),r(p,null,h(e.roles,s=>(a(),r("option",{key:s.id,value:s.id},c(s.name),9,eo))),128))],544),[[te,e.userRoleIds],[F,e.showRoleDrpDwn]])],32),t("div",to,[t("button",so,c(e.user.id?"Update":"Add"),1)])],32)])])])])}var ao=y(Ns,[["render",oo],["__scopeId","data-v-2a87358f"]]);const ro=$({props:{fetchUrl:{type:String,required:!0},baseUrl:{type:String,required:!0},isAdmin:{type:Boolean,default:!1}},components:{Default:E},setup(e){const{baseUrl:o}=N(e),l=[{name:"name",title:"Name"},{name:"description",title:"Description"}];return{formatData:i=>{const u=i.data.map(s=>C(U({},s),{statusUrl:`${o.value}/${s.id}/logs`,action:[{className:"stroke-current hover:text-blue-600",title:"Edit",href:`${o.value}/${s.id}/edit`,btnClassName:"fas fa-edit"},{className:"stroke-current hover:text-red-600",title:"Delete",type:"delete",modalMessage:`delete '${s.name}' station?`,btnClassName:"fas fa-trash"}]}));return C(U({},i),{data:u,columns:l})}}}}),lo=T("Role "),no=t("span",{class:"font-bold"},"Details",-1);function io(e,o,l,d,i,u){const s=S("Default");return a(),A(s,{fetchUrl:e.fetchUrl,baseUrl:e.baseUrl,isAdmin:e.isAdmin,formatData:e.formatData},{header:B(()=>[lo,no]),_:1},8,["fetchUrl","baseUrl","isAdmin","formatData"])}var uo=y(ro,[["render",io]]);const co=$({props:["data","baseUrl"],setup(e){const{data:o,baseUrl:l}=N(e),d=_({name:""}),i=_({}),u=_(!1),s=()=>{u.value=!1,d.value.id?I.patch(`${l.value}/${d.value.id}`,d.value).then(()=>u.value=!0).catch(({response:{data:{errors:n}}})=>i.value=n):I.post(l.value,d.value).then(()=>u.value=!0).catch(({response:{data:{errors:n}}})=>i.value=n)};return q(()=>{o.value.id&&(d.value=o.value)}),{role:d,success:u,errors:i,handleFormSubmit:s}}}),R=e=>(X("data-v-4bd9c9fa"),e=e(),O(),e),mo={class:"flex items-center min-h-screen bg-white dark:bg-gray-900"},po={class:"container mx-auto"},fo={class:"max-w-md mx-auto"},ho={class:"text-center"},vo={class:"my-3 text-3xl font-semibold text-gray-700 dark:text-gray-200"},bo={class:"flex justify-center items-center m-1 font-medium py-1 px-2 bg-white rounded-md text-green-700 bg-green-100 border border-green-300"},_o=R(()=>t("div",null,[t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"feather feather-check-circle w-5 h-5 mx-2"},[t("path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14"}),t("polyline",{points:"22 4 12 14.01 9 11.01"})])],-1)),$o=R(()=>t("div",{class:"text-xl font-normal max-w-full flex-initial"},"Updated successfully",-1)),yo={class:"flex flex-auto flex-row-reverse"},go=R(()=>t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"feather feather-x cursor-pointer hover:text-green-400 rounded-full w-5 h-5 ml-2"},[t("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),t("line",{x1:"6",y1:"6",x2:"18",y2:"18"})],-1)),wo=[go],ko={class:"m-7"},Do={class:"mb-3"},Uo=R(()=>t("label",{for:"name",class:"form-label"},"Role Name",-1)),Co=["value"],So={class:"mb-3"},Io=R(()=>t("label",{for:"description",class:"form-label"},"Description",-1)),No=["value"],Ao={class:"mb-3"},Mo={type:"submit",class:"form-button"};function xo(e,o,l,d,i,u){return a(),r("div",mo,[t("div",po,[t("div",fo,[t("div",ho,[t("h1",vo,c(e.role.id?`Update ${e.role.name}`:"Add new role"),1)]),j(t("div",bo,[_o,$o,t("div",yo,[t("div",{onClick:o[0]||(o[0]=s=>e.success=!1)},wo)])],512),[[F,e.success]]),t("div",ko,[t("form",{onSubmit:o[3]||(o[3]=M((...s)=>e.handleFormSubmit&&e.handleFormSubmit(...s),["prevent"]))},[t("div",Do,[Uo,t("input",{type:"text",class:"form-control",placeholder:"Role Name",name:"name",value:e.role.name,onInput:o[1]||(o[1]=s=>e.role.name=s.target.value),required:""},null,40,Co),e.errors?(a(!0),r(p,{key:0},h(e.errors.name,(s,n)=>(a(),r("span",{class:"form-error",role:"alert",key:n},c(s),1))),128)):m("",!0)]),t("div",So,[Io,t("input",{type:"text",class:"form-control",id:"description",name:"description",placeholder:"Description",value:e.role.description,onInput:o[2]||(o[2]=s=>e.role.description=s.target.value)},null,40,No),e.errors?(a(!0),r(p,{key:0},h(e.errors.description,(s,n)=>(a(),r("span",{class:"form-error",role:"alert",key:n},c(s),1))),128)):m("",!0)]),t("div",Ao,[t("button",Mo,c(e.role.id?"Update":"Add"),1)])],32)])])])])}var Bo=y(co,[["render",xo],["__scopeId","data-v-4bd9c9fa"]]);H.add(se);H.add(oe);ae.watch();const D=re({});D.component("font-awesome-icon",le);D.component("v-header",he);D.component("station-default",mt);D.component("station-form",_s);D.component("station-logs",ks);D.component("user-default",Is);D.component("user-form",ao);D.component("role-default",uo);D.component("role-form",Bo);D.mount("#app");
