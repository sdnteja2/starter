const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./DGVreatH.js","./Btb7ga3n.js","./VrtZl-kz.js","./entry.C__hKO_U.css","./DfaFUuVI.js","./BOpBsAzi.js","./Bq37mCrG.js","./Das0k0cT.js","./491vdw8n.js","./CmRtB-YQ.js","./CK8P7KD4.js","./-KRPW6ml.js","./j0I3LWK-.js"])))=>i.map(i=>d[i]);
import{d as Z,E as nn,G as Ln,H as tn,I as E,J as Rn,K as Mn,L as on,M as I,N as W,O as H,P as An,Q as rn,R as En,_ as x,q as In,S as an,U as Bn,i as un,V,n as Un,v as jn,W as zn,X as Hn,Y as Vn,Z as Fn,e as Nn}from"./VrtZl-kz.js";function qn(n){return{type:"root",children:n.value.map(sn)}}function sn(n){if(typeof n=="string")return{type:"text",value:n};const[e,l,...t]=n;return{type:"element",tag:e,props:l,children:t.map(sn)}}const j=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","link","main","map","mark","math","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rb","rp","rt","rtc","ruby","s","samp","script","section","select","slot","small","source","span","strong","style","sub","summary","sup","svg","table","tbody","td","template","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr"];class z{constructor(e,l,t){this.property=e,this.normal=l,t&&(this.space=t)}}z.prototype.property={};z.prototype.normal={};z.prototype.space=null;function cn(n,e){const l={},t={};let r=-1;for(;++r<n.length;)Object.assign(l,n[r].property),Object.assign(t,n[r].normal);return new z(l,t,e)}function K(n){return n.toLowerCase()}class S{constructor(e,l){this.property=e,this.attribute=l}}S.prototype.space=null;S.prototype.boolean=!1;S.prototype.booleanish=!1;S.prototype.overloadedBoolean=!1;S.prototype.number=!1;S.prototype.commaSeparated=!1;S.prototype.spaceSeparated=!1;S.prototype.commaOrSpaceSeparated=!1;S.prototype.mustUseProperty=!1;S.prototype.defined=!1;let Wn=0;const u=A(),y=A(),pn=A(),o=A(),f=A(),B=A(),C=A();function A(){return 2**++Wn}const X=Object.freeze(Object.defineProperty({__proto__:null,boolean:u,booleanish:y,commaOrSpaceSeparated:C,commaSeparated:B,number:o,overloadedBoolean:pn,spaceSeparated:f},Symbol.toStringTag,{value:"Module"})),q=Object.keys(X);class J extends S{constructor(e,l,t,r){let a=-1;if(super(e,l),en(this,"space",r),typeof t=="number")for(;++a<q.length;){const s=q[a];en(this,q[a],(t&X[s])===X[s])}}}J.prototype.defined=!0;function en(n,e,l){l&&(n[e]=l)}const Kn={}.hasOwnProperty;function U(n){const e={},l={};let t;for(t in n.properties)if(Kn.call(n.properties,t)){const r=n.properties[t],a=new J(t,n.transform(n.attributes||{},t),r,n.space);n.mustUseProperty&&n.mustUseProperty.includes(t)&&(a.mustUseProperty=!0),e[t]=a,l[K(t)]=t,l[K(a.attribute)]=t}return new z(e,l,n.space)}const dn=U({space:"xlink",transform(n,e){return"xlink:"+e.slice(5).toLowerCase()},properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null}}),gn=U({space:"xml",transform(n,e){return"xml:"+e.slice(3).toLowerCase()},properties:{xmlLang:null,xmlBase:null,xmlSpace:null}});function fn(n,e){return e in n?n[e]:e}function mn(n,e){return fn(n,e.toLowerCase())}const hn=U({space:"xmlns",attributes:{xmlnsxlink:"xmlns:xlink"},transform:mn,properties:{xmlns:null,xmlnsXLink:null}}),yn=U({transform(n,e){return e==="role"?e:"aria-"+e.slice(4).toLowerCase()},properties:{ariaActiveDescendant:null,ariaAtomic:y,ariaAutoComplete:null,ariaBusy:y,ariaChecked:y,ariaColCount:o,ariaColIndex:o,ariaColSpan:o,ariaControls:f,ariaCurrent:null,ariaDescribedBy:f,ariaDetails:null,ariaDisabled:y,ariaDropEffect:f,ariaErrorMessage:null,ariaExpanded:y,ariaFlowTo:f,ariaGrabbed:y,ariaHasPopup:null,ariaHidden:y,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:f,ariaLevel:o,ariaLive:null,ariaModal:y,ariaMultiLine:y,ariaMultiSelectable:y,ariaOrientation:null,ariaOwns:f,ariaPlaceholder:null,ariaPosInSet:o,ariaPressed:y,ariaReadOnly:y,ariaRelevant:null,ariaRequired:y,ariaRoleDescription:f,ariaRowCount:o,ariaRowIndex:o,ariaRowSpan:o,ariaSelected:y,ariaSetSize:o,ariaSort:null,ariaValueMax:o,ariaValueMin:o,ariaValueNow:o,ariaValueText:null,role:null}}),Xn=U({space:"html",attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},transform:mn,mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:B,acceptCharset:f,accessKey:f,action:null,allow:null,allowFullScreen:u,allowPaymentRequest:u,allowUserMedia:u,alt:null,as:null,async:u,autoCapitalize:null,autoComplete:f,autoFocus:u,autoPlay:u,blocking:f,capture:null,charSet:null,checked:u,cite:null,className:f,cols:o,colSpan:null,content:null,contentEditable:y,controls:u,controlsList:f,coords:o|B,crossOrigin:null,data:null,dateTime:null,decoding:null,default:u,defer:u,dir:null,dirName:null,disabled:u,download:pn,draggable:y,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:u,formTarget:null,headers:f,height:o,hidden:u,high:o,href:null,hrefLang:null,htmlFor:f,httpEquiv:f,id:null,imageSizes:null,imageSrcSet:null,inert:u,inputMode:null,integrity:null,is:null,isMap:u,itemId:null,itemProp:f,itemRef:f,itemScope:u,itemType:f,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:u,low:o,manifest:null,max:null,maxLength:o,media:null,method:null,min:null,minLength:o,multiple:u,muted:u,name:null,nonce:null,noModule:u,noValidate:u,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:u,optimum:o,pattern:null,ping:f,placeholder:null,playsInline:u,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:u,referrerPolicy:null,rel:f,required:u,reversed:u,rows:o,rowSpan:o,sandbox:f,scope:null,scoped:u,seamless:u,selected:u,shadowRootClonable:u,shadowRootDelegatesFocus:u,shadowRootMode:null,shape:null,size:o,sizes:null,slot:null,span:o,spellCheck:y,src:null,srcDoc:null,srcLang:null,srcSet:null,start:o,step:null,style:null,tabIndex:o,target:null,title:null,translate:null,type:null,typeMustMatch:u,useMap:null,value:y,width:o,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:f,axis:null,background:null,bgColor:null,border:o,borderColor:null,bottomMargin:o,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:u,declare:u,event:null,face:null,frame:null,frameBorder:null,hSpace:o,leftMargin:o,link:null,longDesc:null,lowSrc:null,marginHeight:o,marginWidth:o,noResize:u,noHref:u,noShade:u,noWrap:u,object:null,profile:null,prompt:null,rev:null,rightMargin:o,rules:null,scheme:null,scrolling:y,standby:null,summary:null,text:null,topMargin:o,valueType:null,version:null,vAlign:null,vLink:null,vSpace:o,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:u,disableRemotePlayback:u,prefix:null,property:null,results:o,security:null,unselectable:null}}),$n=U({space:"svg",attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},transform:fn,properties:{about:C,accentHeight:o,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:o,amplitude:o,arabicForm:null,ascent:o,attributeName:null,attributeType:null,azimuth:o,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:o,by:null,calcMode:null,capHeight:o,className:f,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:o,diffuseConstant:o,direction:null,display:null,dur:null,divisor:o,dominantBaseline:null,download:u,dx:null,dy:null,edgeMode:null,editable:null,elevation:o,enableBackground:null,end:null,event:null,exponent:o,externalResourcesRequired:null,fill:null,fillOpacity:o,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:B,g2:B,glyphName:B,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:o,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:o,horizOriginX:o,horizOriginY:o,id:null,ideographic:o,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:o,k:o,k1:o,k2:o,k3:o,k4:o,kernelMatrix:C,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:o,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:o,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:o,overlineThickness:o,paintOrder:null,panose1:null,path:null,pathLength:o,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:f,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:o,pointsAtY:o,pointsAtZ:o,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:C,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:C,rev:C,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:C,requiredFeatures:C,requiredFonts:C,requiredFormats:C,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:o,specularExponent:o,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:o,strikethroughThickness:o,string:null,stroke:null,strokeDashArray:C,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:o,strokeOpacity:o,strokeWidth:null,style:null,surfaceScale:o,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:C,tabIndex:o,tableValues:null,target:null,targetX:o,targetY:o,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:C,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:o,underlineThickness:o,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:o,values:null,vAlphabetic:o,vMathematical:o,vectorEffect:null,vHanging:o,vIdeographic:o,version:null,vertAdvY:o,vertOriginX:o,vertOriginY:o,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:o,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null}}),Yn=/^data[-\w.:]+$/i,ln=/-[a-z]/g,Gn=/[A-Z]/g;function Zn(n,e){const l=K(e);let t=e,r=S;if(l in n.normal)return n.property[n.normal[l]];if(l.length>4&&l.slice(0,4)==="data"&&Yn.test(e)){if(e.charAt(4)==="-"){const a=e.slice(5).replace(ln,Qn);t="data"+a.charAt(0).toUpperCase()+a.slice(1)}else{const a=e.slice(4);if(!ln.test(a)){let s=a.replace(Gn,Jn);s.charAt(0)!=="-"&&(s="-"+s),e="data"+s}}r=J}return new r(t,e)}function Jn(n){return"-"+n.toLowerCase()}function Qn(n){return n.charAt(1).toUpperCase()}const ne=cn([gn,dn,hn,yn,Xn],"html");cn([gn,dn,hn,yn,$n],"svg");const ee=["p","h1","h2","h3","h4","h5","h6","li"];function F(n,e){return n.type===e||typeof n.type=="object"&&n.type.tag===e||n.tag===e}function Q(n){return F(n,"text")||F(n,Symbol.for("v-txt"))}function vn(n){var e;return Array.isArray(n.children)||typeof n.children=="string"?n.children:typeof((e=n.children)==null?void 0:e.default)=="function"?n.children.default():[]}function $(n){if(!n)return"";if(Array.isArray(n))return n.map($).join("");if(Q(n))return n.value||n.children||"";const e=vn(n);return Array.isArray(e)?e.map($).filter(Boolean).join(""):""}function bn(n,e=[]){if(Array.isArray(n))return n.flatMap(t=>bn(t,e));let l=n;return e.some(t=>t==="*"||F(n,t))&&(l=vn(n)||n,!Array.isArray(l)&&ee.some(t=>F(n,t))&&(l=[l])),l}function Pn(n,e=[]){return n=Array.isArray(n)?n:[n],e.length?n.flatMap(l=>Pn(bn(l,[e[0]]),e.slice(1))).filter(l=>!(Q(l)&&$(l).trim()==="")):n}function Cn(n,e=[]){return typeof e=="string"&&(e=e.split(/[,\s]/).map(l=>l.trim()).filter(Boolean)),e.length?Pn(n,e).reduce((l,t)=>(Q(t)?typeof l[l.length-1]=="string"?l[l.length-1]+=t.children:l.push(t.children):l.push(t),l),[]):n}function le(n,e){return e.reduce((l,t)=>{const r=te(n,t);return r!==void 0&&(l[t]=r),l},{})}function te(n,e){return e.split(".").reduce((l,t)=>l&&l[t],n)}const Y="default",Sn=/^@|^v-on:/,kn=/^:|^v-bind:/,oe=/^v-model/,re=["select","textarea","input"],ae=["math","svg"],ue=Object.fromEntries(["p","a","blockquote","code","pre","code","em","h1","h2","h3","h4","h5","h6","hr","img","ul","ol","li","strong","table","thead","tbody","td","th","tr","script"].map(n=>[n,`prose-${n}`])),ie=Z({name:"MDCRenderer",props:{body:{type:Object,required:!0},data:{type:Object,default:()=>({})},class:{type:[String,Object],default:void 0},tag:{type:[String,Boolean],default:void 0},prose:{type:Boolean,default:void 0},components:{type:Object,default:()=>({})},unwrap:{type:[Boolean,String],default:!1}},async setup(n){var d,c,p,g,b,O,w,P;const e=(p=(c=(d=Ln())==null?void 0:d.appContext)==null?void 0:c.app)==null?void 0:p.$nuxt,l=(e==null?void 0:e.$route)||(e==null?void 0:e._route),{mdc:t}=((g=e==null?void 0:e.$config)==null?void 0:g.public)||{},r={...(b=t==null?void 0:t.components)!=null&&b.prose&&n.prose!==!1?ue:{},...((O=t==null?void 0:t.components)==null?void 0:O.map)||{},...tn(((P=(w=n.data)==null?void 0:w.mdc)==null?void 0:P.components)||{}),...n.components},a=E(()=>{var M;const k=(((M=n.body)==null?void 0:M.children)||[]).map(D=>D.tag||D.type).filter(D=>!j.includes(D));return Array.from(new Set(k)).sort().join(".")}),s=Rn({...n.data});Mn(()=>n.data,k=>{Object.assign(s,k)}),await be(n.body,{tags:r});function m(k,M){const D=k.split(".").length-1;return k.split(".").reduce((R,i,h)=>h==D&&R?(R[i]=M,R[i]):typeof R=="object"?R[i]:void 0,s)}return{tags:r,contentKey:a,route:l,runtimeData:s,updateRuntimeData:m}},render(n){var O,w;const{tags:e,tag:l,body:t,data:r,contentKey:a,route:s,unwrap:m,runtimeData:d,updateRuntimeData:c}=n;if(!t)return null;const p={...r,tags:e,$route:s,runtimeData:d,updateRuntimeData:c},g=l!==!1?G(l||((O=p.component)==null?void 0:O.name)||p.component||"div"):void 0;return g?nn(g,{...(w=p.component)==null?void 0:w.props,class:n.class,...this.$attrs,key:a},{default:b}):b==null?void 0:b();function b(){const P=_n(t,nn,{documentMeta:p,parentScope:p,resolveComponent:G});return P!=null&&P.default?m?Cn(P.default(),typeof m=="string"?m.split(" "):["*"]):P.default():null}}});function se(n,e,l){const{documentMeta:t,parentScope:r,resolveComponent:a}=l;if(n.type==="text")return e(H,n.value);if(n.type==="comment")return e(An,null,n.value);const s=n.tag,m=wn(n,t.tags);if(n.tag==="binding")return ce(n,e,t,r);const d=xn(m)?g=>g:a,c=d(m);typeof c=="object"&&(c.tag=s);const p=pe(n,t);return e(c,p,_n(n,e,{documentMeta:t,parentScope:{...r,...p},resolveComponent:d}))}function _n(n,e,l){const{documentMeta:t,parentScope:r,resolveComponent:a}=l,m=(n.children||[]).reduce((c,p)=>{if(!ye(p))return c[Y].children.push(p),c;const g=he(p);return c[g]=c[g]||{props:{},children:[]},p.type==="element"&&(c[g].props=p.props,c[g].children.push(...p.children||[])),c},{[Y]:{props:{},children:[]}});return Object.entries(m).reduce((c,[p,{props:g,children:b}])=>(b.length&&(c[p]=(O={})=>{const w=le(O,Object.keys(g||{}));let P=b.map(k=>se(k,e,{documentMeta:t,parentScope:{...r,...w},resolveComponent:a}));return g!=null&&g.unwrap&&(P=Cn(P,g.unwrap)),ve(P)}),c),{})}function ce(n,e,l,t={}){var c,p;const r={...l.runtimeData,...t,$document:l,$doc:l},a=/\.|\[(\d+)\]/,m=((c=n.props)==null?void 0:c.value.trim().split(a).filter(Boolean)).reduce((g,b)=>{if(g&&b in g)return typeof g[b]=="function"?g[b]():g[b]},r),d=(p=n.props)==null?void 0:p.defaultValue;return e(H,m??d??"")}function pe(n,e){const{tag:l="",props:t={}}=n;return Object.keys(t).reduce(function(r,a){if(a==="__ignoreMap")return r;const s=t[a];if(oe.test(a))return de(a,s,r,e,{native:re.includes(l)});if(a==="v-bind")return ge(a,s,r,e);if(Sn.test(a))return fe(a,s,r,e);if(kn.test(a))return me(a,s,r,e);const{attribute:m}=Zn(ne,a);return Array.isArray(s)&&s.every(d=>typeof d=="string")?(r[m]=s.join(" "),r):(r[m]=s,r)},{})}function de(n,e,l,t,{native:r}){var d;const a=((d=n.match(/^v-model:([^=]+)/))==null?void 0:d[1])||"modelValue",s=r?"value":a,m=r?"onInput":`onUpdate:${a}`;return l[s]=N(e,t.runtimeData),l[m]=c=>{var p;t.updateRuntimeData(e,r?(p=c.target)==null?void 0:p.value:c)},l}function ge(n,e,l,t){const r=N(e,t);return l=Object.assign(l,r),l}function fe(n,e,l,t){return n=n.replace(Sn,""),l.on=l.on||{},l.on[n]=()=>N(e,t),l}function me(n,e,l,t){return n=n.replace(kn,""),l[n]=N(e,t),l}const G=n=>{if(typeof n=="string"){if(j.includes(n))return n;const e=on(I(n),!1);return!n||(e==null?void 0:e.name)==="AsyncComponentWrapper"||typeof e=="string"?e:"setup"in e?W(()=>new Promise(l=>l(e))):e}return n};function N(n,e){const l=n.split(".").reduce((t,r)=>typeof t=="object"?t[r]:void 0,e);return typeof l>"u"?En(n):l}function he(n){let e="";for(const l of Object.keys(n.props||{}))if(!(!l.startsWith("#")&&!l.startsWith("v-slot:"))){e=l.split(/[:#]/,2)[1];break}return e||Y}function ye(n){return n.tag==="template"}function xn(n){return ae.includes(n)}function ve(n){const e=[];for(const l of n){const t=e[e.length-1];l.type===H&&(t==null?void 0:t.type)===H?t.children=t.children+l.children:e.push(l)}return e}async function be(n,e){if(!n)return;const l=Array.from(new Set(t(n,e)));await Promise.all(l.map(async r=>{if(r!=null&&r.render||r!=null&&r.ssrRender||r!=null&&r.__ssrInlineRender)return;const a=G(r);a!=null&&a.__asyncLoader&&!a.__asyncResolved&&await a.__asyncLoader()}));function t(r,a){const s=r.tag;if(r.type==="text"||s==="binding"||r.type==="comment")return[];const m=wn(r,a.tags);if(xn(m))return[];const d=[];r.type!=="root"&&!j.includes(m)&&d.push(m);for(const c of r.children||[])d.push(...t(c,a));return d}}function wn(n,e){var t;const l=n.tag;return!l||typeof((t=n.props)==null?void 0:t.__ignoreMap)<"u"?l:e[l]||e[I(l)]||e[rn(n.tag)]||l}const Pe=Object.assign(ie,{__name:"MDCRenderer"}),Ce=()=>x(()=>import("./DGVreatH.js"),__vite__mapDeps([0,1,2,3]),import.meta.url),Se=()=>x(()=>import("./DfaFUuVI.js"),__vite__mapDeps([4,2,3]),import.meta.url),ke=()=>x(()=>import("./BOpBsAzi.js"),__vite__mapDeps([5,1,2,3]),import.meta.url),_e=()=>x(()=>import("./Bq37mCrG.js"),__vite__mapDeps([6,2,3,1]),import.meta.url),xe=()=>x(()=>import("./Das0k0cT.js"),__vite__mapDeps([7,2,3,1]),import.meta.url),we=()=>x(()=>import("./491vdw8n.js"),__vite__mapDeps([8,1,2,3]),import.meta.url),Oe=()=>x(()=>import("./CmRtB-YQ.js"),__vite__mapDeps([9,1,2,3]),import.meta.url),De=()=>x(()=>import("./CK8P7KD4.js"),__vite__mapDeps([10,2,3,1]),import.meta.url),Te=()=>x(()=>import("./-KRPW6ml.js"),__vite__mapDeps([11,1,2,3]),import.meta.url),Le=()=>x(()=>import("./j0I3LWK-.js"),__vite__mapDeps([12,1,2,3]),import.meta.url),On=["ProseA","ProseBlockquote","ProseCode","ProseEm","ProseH1","ProseH2","ProseH3","ProseH4","ProseH5","ProseH6","ProseHr","ProseImg","ProseLi","ProseOl","ProseP","ProsePre","ProseScript","ProseStrong","ProseTable","ProseTbody","ProseTd","ProseTh","ProseThead","ProseTr","ProseUl","Icon"],Dn=["PageFasilitas","PageHero1","BeritaList","GuruList","PageAlumni","PageHero","PageLastNews","PageRef","PageSelayang","PageVisi"],Re=Object.freeze(Object.defineProperty({__proto__:null,BeritaList:ke,GuruList:_e,PageAlumni:xe,PageFasilitas:Ce,PageHero:we,PageHero1:Se,PageLastNews:Oe,PageRef:De,PageSelayang:Te,PageVisi:Le,globalComponents:On,localComponents:Dn},Symbol.toStringTag,{value:"Module"})),Me=Z({__name:"ContentRenderer",props:{value:{type:Object,required:!0},excerpt:{type:Boolean,default:!1},tag:{type:String,default:"div"},components:{type:Object,default:()=>({})},data:{type:Object,default:()=>({})},prose:{type:Boolean,default:void 0},class:{type:[String,Object],default:void 0},unwrap:{type:[Boolean,String],default:!1}},setup(n){var k,M,D,R;const e=["render","ssrRender","__ssrInlineRender"],l=n,t=!1,r=E(()=>{let i=l.value.body||l.value;return l.excerpt&&l.value.excerpt&&(i=l.value.excerpt),i.type==="minimal"?qn(i):i}),a=E(()=>{var i,h;return!((h=(i=r.value)==null?void 0:i.children)!=null&&h.length)}),s=E(()=>{const{body:i,excerpt:h,...v}=l.value;return{...v,...l.data}}),m=Object.fromEntries(["p","a","blockquote","code","pre","code","em","h1","h2","h3","h4","h5","h6","hr","img","ul","ol","li","strong","table","thead","tbody","td","th","tr","script"].map(i=>[i,`prose-${i}`])),{mdc:d}=In().public||{},c={...(k=d==null?void 0:d.components)!=null&&k.prose&&l.prose!==!1?m:{},...((M=d==null?void 0:d.components)==null?void 0:M.map)||{},...tn(((R=(D=l.data)==null?void 0:D.mdc)==null?void 0:R.components)||{}),...l.components},p=E(()=>{}),g=E(()=>r.value?O(r.value,{tags:c}):{});function b(i){let h=i;if(typeof i=="string"){if(j.includes(i))return i;if(On.includes(I(i))?h=on(i,!1):Dn.includes(I(i))&&(h=W(()=>x(()=>Promise.resolve().then(()=>Re),void 0,import.meta.url).then(T=>{const L=T[I(i)];return L?L():void 0}))),typeof h=="string")return h}if(!h)return h;const v=h;return"__asyncLoader"in v?v:"setup"in v?W(()=>Promise.resolve(v)):v}function O(i,h){if(!i)return;const v=Array.from(new Set(w(i,h))),_={};for(const[T,L]of v)if(!_[T]){if(typeof L=="object"&&e.some(Tn=>Object.hasOwnProperty.call(L,Tn))){_[T]=L;continue}_[T]=b(L)}return _}function w(i,h){const v=i.tag;if(i.type==="text"||v==="binding"||i.type==="comment")return[];const _=P(i,h.tags),T=[];i.type!=="root"&&!j.includes(_)&&T.push([v,_]);for(const L of i.children||[])T.push(...w(L,h));return T}function P(i,h){var _;const v=i.tag;return!v||typeof((_=i.props)==null?void 0:_.__ignoreMap)<"u"?v:h[v]||h[I(v)]||h[rn(i.tag)]||v}return(i,h)=>a.value?Bn(i.$slots,"empty",{key:1,body:r.value,data:s.value,dataContentId:V(t)?n.value.id:void 0}):(un(),an(Pe,{key:p.value,body:r.value,data:s.value,class:Un(l.class),tag:l.tag,prose:l.prose,unwrap:l.unwrap,components:g.value,"data-content-id":V(t)?n.value.id:void 0},null,8,["body","data","class","tag","prose","unwrap","components","data-content-id"]))}}),Ae=Object.assign(Me,{__name:"ContentRenderer"}),Ie=Z({__name:"[...slug]",async setup(n){let e,l;const t=jn(),{data:r}=([e,l]=zn(()=>Hn(`page-${t.path}`,()=>Vn("content").path(t.path).first())),e=await e,l(),e);if(!r.value)throw Fn({statusCode:404,statusMessage:"Page not found",fatal:!0});return(a,s)=>{const m=Ae;return V(r)?(un(),an(m,{key:0,value:V(r)},null,8,["value"])):Nn("",!0)}}});export{Ie as default};
