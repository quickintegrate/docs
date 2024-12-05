"use strict";(self.webpackChunkuser_documentation=self.webpackChunkuser_documentation||[]).push([[7918],{7078:(e,t,n)=>{n.r(t),n.d(t,{default:()=>vt});var s=n(7294),i=n(1944),a=n(902),l=n(5893);const o=s.createContext(null);function r(e){let{children:t,content:n}=e;const i=function(e){return(0,s.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(n);return(0,l.jsx)(o.Provider,{value:i,children:t})}function c(){const e=(0,s.useContext)(o);if(null===e)throw new a.i6("DocProvider");return e}function d(){const{metadata:e,frontMatter:t,assets:n}=c();return(0,l.jsx)(i.d,{title:e.title,description:e.description,keywords:t.keywords,image:n.image??t.image})}var u=n(6010),m=n(7524),h=n(5999),x=n(9960);function p(e){const{permalink:t,title:n,subLabel:s,isNext:i}=e;return(0,l.jsxs)(x.Z,{className:(0,u.Z)("pagination-nav__link",i?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t,children:[s&&(0,l.jsx)("div",{className:"pagination-nav__sublabel",children:s}),(0,l.jsx)("div",{className:"pagination-nav__label",children:n})]})}function f(e){const{previous:t,next:n}=e;return(0,l.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,h.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages",description:"The ARIA label for the docs pagination"}),children:[t&&(0,l.jsx)(p,{...t,subLabel:(0,l.jsx)(h.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc",children:"Previous"})}),n&&(0,l.jsx)(p,{...n,subLabel:(0,l.jsx)(h.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc",children:"Next"}),isNext:!0})]})}function v(){const{metadata:e}=c();return(0,l.jsx)(f,{previous:e.previous,next:e.next})}var j=n(2263),g=n(143),b=n(5281),N=n(373),C=n(4477);const L={unreleased:function(e){let{siteTitle:t,versionMetadata:n}=e;return(0,l.jsx)(h.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:(0,l.jsx)("b",{children:n.label})},children:"This is unreleased documentation for {siteTitle} {versionLabel} version."})},unmaintained:function(e){let{siteTitle:t,versionMetadata:n}=e;return(0,l.jsx)(h.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:(0,l.jsx)("b",{children:n.label})},children:"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained."})}};function _(e){const t=L[e.versionMetadata.banner];return(0,l.jsx)(t,{...e})}function Z(e){let{versionLabel:t,to:n,onClick:s}=e;return(0,l.jsx)(h.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:(0,l.jsx)("b",{children:(0,l.jsx)(x.Z,{to:n,onClick:s,children:(0,l.jsx)(h.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label",children:"latest version"})})})},children:"For up-to-date documentation, see the {latestVersionLink} ({versionLabel})."})}function k(e){let{className:t,versionMetadata:n}=e;const{siteConfig:{title:s}}=(0,j.Z)(),{pluginId:i}=(0,g.gA)({failfast:!0}),{savePreferredVersionName:a}=(0,N.J)(i),{latestDocSuggestion:o,latestVersionSuggestion:r}=(0,g.Jo)(i),c=o??(d=r).docs.find((e=>e.id===d.mainDocId));var d;return(0,l.jsxs)("div",{className:(0,u.Z)(t,b.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert",children:[(0,l.jsx)("div",{children:(0,l.jsx)(_,{siteTitle:s,versionMetadata:n})}),(0,l.jsx)("div",{className:"margin-top--md",children:(0,l.jsx)(Z,{versionLabel:r.label,to:c.path,onClick:()=>a(r.name)})})]})}function T(e){let{className:t}=e;const n=(0,C.E)();return n.banner?(0,l.jsx)(k,{className:t,versionMetadata:n}):null}function y(e){let{className:t}=e;const n=(0,C.E)();return n.badge?(0,l.jsx)("span",{className:(0,u.Z)(t,b.k.docs.docVersionBadge,"badge badge--secondary"),children:(0,l.jsx)(h.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:n.label},children:"Version: {versionLabel}"})}):null}function w(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:n}=e;return(0,l.jsx)(h.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:(0,l.jsx)("b",{children:(0,l.jsx)("time",{dateTime:new Date(1e3*t).toISOString(),children:n})})},children:" on {date}"})}function H(e){let{lastUpdatedBy:t}=e;return(0,l.jsx)(h.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:(0,l.jsx)("b",{children:t})},children:" by {user}"})}function U(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:n,lastUpdatedBy:s}=e;return(0,l.jsxs)("span",{className:b.k.common.lastUpdated,children:[(0,l.jsx)(h.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&n?(0,l.jsx)(w,{lastUpdatedAt:t,formattedLastUpdatedAt:n}):"",byUser:s?(0,l.jsx)(H,{lastUpdatedBy:s}):""},children:"Last updated{atDate}{byUser}"}),!1]})}const M={iconEdit:"iconEdit_Z9Sw"};function A(e){let{className:t,...n}=e;return(0,l.jsx)("svg",{fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,u.Z)(M.iconEdit,t),"aria-hidden":"true",...n,children:(0,l.jsx)("g",{children:(0,l.jsx)("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})})})}function B(e){let{editUrl:t}=e;return(0,l.jsxs)(x.Z,{to:t,className:b.k.common.editThisPage,children:[(0,l.jsx)(A,{}),(0,l.jsx)(h.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page",children:"Edit this page"})]})}const E={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};function I(e){let{permalink:t,label:n,count:s}=e;return(0,l.jsxs)(x.Z,{href:t,className:(0,u.Z)(E.tag,s?E.tagWithCount:E.tagRegular),children:[n,s&&(0,l.jsx)("span",{children:s})]})}const z={tags:"tags_jXut",tag:"tag_QGVx"};function S(e){let{tags:t}=e;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("b",{children:(0,l.jsx)(h.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list",children:"Tags:"})}),(0,l.jsx)("ul",{className:(0,u.Z)(z.tags,"padding--none","margin-left--sm"),children:t.map((e=>{let{label:t,permalink:n}=e;return(0,l.jsx)("li",{className:z.tag,children:(0,l.jsx)(I,{label:t,permalink:n})},n)}))})]})}const R={lastUpdated:"lastUpdated_vwxv"};function V(e){return(0,l.jsx)("div",{className:(0,u.Z)(b.k.docs.docFooterTagsRow,"row margin-bottom--sm"),children:(0,l.jsx)("div",{className:"col",children:(0,l.jsx)(S,{...e})})})}function D(e){let{editUrl:t,lastUpdatedAt:n,lastUpdatedBy:s,formattedLastUpdatedAt:i}=e;return(0,l.jsxs)("div",{className:(0,u.Z)(b.k.docs.docFooterEditMetaRow,"row"),children:[(0,l.jsx)("div",{className:"col",children:t&&(0,l.jsx)(B,{editUrl:t})}),(0,l.jsx)("div",{className:(0,u.Z)("col",R.lastUpdated),children:(n||s)&&(0,l.jsx)(U,{lastUpdatedAt:n,formattedLastUpdatedAt:i,lastUpdatedBy:s})})]})}function O(){const{metadata:e}=c(),{editUrl:t,lastUpdatedAt:n,formattedLastUpdatedAt:s,lastUpdatedBy:i,tags:a}=e,o=a.length>0,r=!!(t||n||i);return o||r?(0,l.jsxs)("footer",{className:(0,u.Z)(b.k.docs.docFooter,"docusaurus-mt-lg"),children:[o&&(0,l.jsx)(V,{tags:a}),r&&(0,l.jsx)(D,{editUrl:t,lastUpdatedAt:n,lastUpdatedBy:i,formattedLastUpdatedAt:s})]}):null}var P=n(6043),F=n(6668);function q(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const s=n.slice(2,e.level);e.parentIndex=Math.max(...s),n[e.level]=t}));const s=[];return t.forEach((e=>{const{parentIndex:n,...i}=e;n>=0?t[n].children.push(i):s.push(i)})),s}function G(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:s}=e;return t.flatMap((e=>{const t=G({toc:e.children,minHeadingLevel:n,maxHeadingLevel:s});return function(e){return e.level>=n&&e.level<=s}(e)?[{...e,children:t}]:t}))}function W(e){const t=e.getBoundingClientRect();return t.top===t.bottom?W(e.parentNode):t}function $(e,t){let{anchorTopOffset:n}=t;const s=e.find((e=>W(e).top>=n));if(s){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(W(s))?s:e[e.indexOf(s)-1]??null}return e[e.length-1]??null}function J(){const e=(0,s.useRef)(0),{navbar:{hideOnScroll:t}}=(0,F.L)();return(0,s.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function Y(e){const t=(0,s.useRef)(void 0),n=J();(0,s.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:s,linkActiveClassName:i,minHeadingLevel:a,maxHeadingLevel:l}=e;function o(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(s),o=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const s=[];for(let i=t;i<=n;i+=1)s.push(`h${i}.anchor`);return Array.from(document.querySelectorAll(s.join()))}({minHeadingLevel:a,maxHeadingLevel:l}),r=$(o,{anchorTopOffset:n.current}),c=e.find((e=>r&&r.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(i),e.classList.add(i),t.current=e):e.classList.remove(i)}(e,e===c)}))}return document.addEventListener("scroll",o),document.addEventListener("resize",o),o(),()=>{document.removeEventListener("scroll",o),document.removeEventListener("resize",o)}}),[e,n])}function Q(e){let{toc:t,className:n,linkClassName:s,isChild:i}=e;return t.length?(0,l.jsx)("ul",{className:i?void 0:n,children:t.map((e=>(0,l.jsxs)("li",{children:[(0,l.jsx)(x.Z,{to:`#${e.id}`,className:s??void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,l.jsx)(Q,{isChild:!0,toc:e.children,className:n,linkClassName:s})]},e.id)))}):null}const X=s.memo(Q);function K(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:i="table-of-contents__link",linkActiveClassName:a,minHeadingLevel:o,maxHeadingLevel:r,...c}=e;const d=(0,F.L)(),u=o??d.tableOfContents.minHeadingLevel,m=r??d.tableOfContents.maxHeadingLevel,h=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:i}=e;return(0,s.useMemo)((()=>G({toc:q(t),minHeadingLevel:n,maxHeadingLevel:i})),[t,n,i])}({toc:t,minHeadingLevel:u,maxHeadingLevel:m});return Y((0,s.useMemo)((()=>{if(i&&a)return{linkClassName:i,linkActiveClassName:a,minHeadingLevel:u,maxHeadingLevel:m}}),[i,a,u,m])),(0,l.jsx)(X,{toc:h,className:n,linkClassName:i,...c})}const ee={tocCollapsibleButton:"tocCollapsibleButton_TO0P",tocCollapsibleButtonExpanded:"tocCollapsibleButtonExpanded_MG3E"};function te(e){let{collapsed:t,...n}=e;return(0,l.jsx)("button",{type:"button",...n,className:(0,u.Z)("clean-btn",ee.tocCollapsibleButton,!t&&ee.tocCollapsibleButtonExpanded,n.className),children:(0,l.jsx)(h.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component",children:"On this page"})})}const ne={tocCollapsible:"tocCollapsible_ETCw",tocCollapsibleContent:"tocCollapsibleContent_vkbj",tocCollapsibleExpanded:"tocCollapsibleExpanded_sAul"};function se(e){let{toc:t,className:n,minHeadingLevel:s,maxHeadingLevel:i}=e;const{collapsed:a,toggleCollapsed:o}=(0,P.u)({initialState:!0});return(0,l.jsxs)("div",{className:(0,u.Z)(ne.tocCollapsible,!a&&ne.tocCollapsibleExpanded,n),children:[(0,l.jsx)(te,{collapsed:a,onClick:o}),(0,l.jsx)(P.z,{lazy:!0,className:ne.tocCollapsibleContent,collapsed:a,children:(0,l.jsx)(K,{toc:t,minHeadingLevel:s,maxHeadingLevel:i})})]})}const ie={tocMobile:"tocMobile_ITEo"};function ae(){const{toc:e,frontMatter:t}=c();return(0,l.jsx)(se,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:(0,u.Z)(b.k.docs.docTocMobile,ie.tocMobile)})}const le={tableOfContents:"tableOfContents_bqdL",docItemContainer:"docItemContainer_F8PC"},oe="table-of-contents__link toc-highlight",re="table-of-contents__link--active";function ce(e){let{className:t,...n}=e;return(0,l.jsx)("div",{className:(0,u.Z)(le.tableOfContents,"thin-scrollbar",t),children:(0,l.jsx)(K,{...n,linkClassName:oe,linkActiveClassName:re})})}function de(){const{toc:e,frontMatter:t}=c();return(0,l.jsx)(ce,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:b.k.docs.docTocDesktop})}var ue=n(2503),me=n(1151),he=n(5742),xe=n(9286);var pe=n(2389);const fe={details:"details_lb9f",isBrowser:"isBrowser_bmU9",collapsibleContent:"collapsibleContent_i85q"};function ve(e){return!!e&&("SUMMARY"===e.tagName||ve(e.parentElement))}function je(e,t){return!!e&&(e===t||je(e.parentElement,t))}function ge(e){let{summary:t,children:n,...i}=e;const a=(0,pe.Z)(),o=(0,s.useRef)(null),{collapsed:r,setCollapsed:c}=(0,P.u)({initialState:!i.open}),[d,m]=(0,s.useState)(i.open),h=s.isValidElement(t)?t:(0,l.jsx)("summary",{children:t??"Details"});return(0,l.jsxs)("details",{...i,ref:o,open:d,"data-collapsed":r,className:(0,u.Z)(fe.details,a&&fe.isBrowser,i.className),onMouseDown:e=>{ve(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();const t=e.target;ve(t)&&je(t,o.current)&&(e.preventDefault(),r?(c(!1),m(!0)):c(!0))},children:[h,(0,l.jsx)(P.z,{lazy:!1,collapsed:r,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{c(e),m(!e)},children:(0,l.jsx)("div",{className:fe.collapsibleContent,children:n})})]})}const be={details:"details_b_Ee"},Ne="alert alert--info";function Ce(e){let{...t}=e;return(0,l.jsx)(ge,{...t,className:(0,u.Z)(Ne,be.details,t.className)})}function Le(e){const t=s.Children.toArray(e.children),n=t.find((e=>s.isValidElement(e)&&"summary"===e.type)),i=(0,l.jsx)(l.Fragment,{children:t.filter((e=>e!==n))});return(0,l.jsx)(Ce,{...e,summary:n,children:i})}function _e(e){return(0,l.jsx)(ue.Z,{...e})}const Ze={containsTaskList:"containsTaskList_mC6p"};function ke(e){if(void 0!==e)return(0,u.Z)(e,e?.includes("contains-task-list")&&Ze.containsTaskList)}const Te={img:"img_ev3q"};function ye(e){const{mdxAdmonitionTitle:t,rest:n}=function(e){const t=s.Children.toArray(e),n=t.find((e=>s.isValidElement(e)&&"mdxAdmonitionTitle"===e.type)),i=t.filter((e=>e!==n)),a=n?.props.children;return{mdxAdmonitionTitle:a,rest:i.length>0?(0,l.jsx)(l.Fragment,{children:i}):null}}(e.children),i=e.title??t;return{...e,...i&&{title:i},children:n}}const we={admonition:"admonition_xJq3",admonitionHeading:"admonitionHeading_Gvgb",admonitionIcon:"admonitionIcon_Rf37",admonitionContent:"admonitionContent_BuS1"};function He(e){let{type:t,className:n,children:s}=e;return(0,l.jsx)("div",{className:(0,u.Z)(b.k.common.admonition,b.k.common.admonitionType(t),we.admonition,n),children:s})}function Ue(e){let{icon:t,title:n}=e;return(0,l.jsxs)("div",{className:we.admonitionHeading,children:[(0,l.jsx)("span",{className:we.admonitionIcon,children:t}),n]})}function Me(e){let{children:t}=e;return t?(0,l.jsx)("div",{className:we.admonitionContent,children:t}):null}function Ae(e){const{type:t,icon:n,title:s,children:i,className:a}=e;return(0,l.jsxs)(He,{type:t,className:a,children:[(0,l.jsx)(Ue,{title:s,icon:n}),(0,l.jsx)(Me,{children:i})]})}function Be(e){return(0,l.jsx)("svg",{viewBox:"0 0 14 16",...e,children:(0,l.jsx)("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})})}const Ee={icon:(0,l.jsx)(Be,{}),title:(0,l.jsx)(h.Z,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)",children:"note"})};function Ie(e){return(0,l.jsx)(Ae,{...Ee,...e,className:(0,u.Z)("alert alert--secondary",e.className),children:e.children})}function ze(e){return(0,l.jsx)("svg",{viewBox:"0 0 12 16",...e,children:(0,l.jsx)("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})})}const Se={icon:(0,l.jsx)(ze,{}),title:(0,l.jsx)(h.Z,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)",children:"tip"})};function Re(e){return(0,l.jsx)(Ae,{...Se,...e,className:(0,u.Z)("alert alert--success",e.className),children:e.children})}function Ve(e){return(0,l.jsx)("svg",{viewBox:"0 0 14 16",...e,children:(0,l.jsx)("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})})}const De={icon:(0,l.jsx)(Ve,{}),title:(0,l.jsx)(h.Z,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)",children:"info"})};function Oe(e){return(0,l.jsx)(Ae,{...De,...e,className:(0,u.Z)("alert alert--info",e.className),children:e.children})}function Pe(e){return(0,l.jsx)("svg",{viewBox:"0 0 16 16",...e,children:(0,l.jsx)("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})})}const Fe={icon:(0,l.jsx)(Pe,{}),title:(0,l.jsx)(h.Z,{id:"theme.admonition.warning",description:"The default label used for the Warning admonition (:::warning)",children:"warning"})};function qe(e){return(0,l.jsx)("svg",{viewBox:"0 0 12 16",...e,children:(0,l.jsx)("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})})}const Ge={icon:(0,l.jsx)(qe,{}),title:(0,l.jsx)(h.Z,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)",children:"danger"})};const We={icon:(0,l.jsx)(Pe,{}),title:(0,l.jsx)(h.Z,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)",children:"caution"})};const $e={...{note:Ie,tip:Re,info:Oe,warning:function(e){return(0,l.jsx)(Ae,{...Fe,...e,className:(0,u.Z)("alert alert--warning",e.className),children:e.children})},danger:function(e){return(0,l.jsx)(Ae,{...Ge,...e,className:(0,u.Z)("alert alert--danger",e.className),children:e.children})}},...{secondary:e=>(0,l.jsx)(Ie,{title:"secondary",...e}),important:e=>(0,l.jsx)(Oe,{title:"important",...e}),success:e=>(0,l.jsx)(Re,{title:"success",...e}),caution:function(e){return(0,l.jsx)(Ae,{...We,...e,className:(0,u.Z)("alert alert--warning",e.className),children:e.children})}}};function Je(e){const t=ye(e),n=(s=t.type,$e[s]||(console.warn(`No admonition component found for admonition type "${s}". Using Info as fallback.`),$e.info));var s;return(0,l.jsx)(n,{...t})}var Ye=n(1875);const Qe={Head:he.Z,details:Le,Details:Le,code:function(e){return s.Children.toArray(e.children).every((e=>"string"==typeof e&&!e.includes("\n")))?(0,l.jsx)("code",{...e}):(0,l.jsx)(xe.Z,{...e})},a:function(e){return(0,l.jsx)(x.Z,{...e})},pre:function(e){return(0,l.jsx)(l.Fragment,{children:e.children})},ul:function(e){return(0,l.jsx)("ul",{...e,className:ke(e.className)})},img:function(e){return(0,l.jsx)("img",{loading:"lazy",...e,className:(t=e.className,(0,u.Z)(t,Te.img))});var t},h1:e=>(0,l.jsx)(_e,{as:"h1",...e}),h2:e=>(0,l.jsx)(_e,{as:"h2",...e}),h3:e=>(0,l.jsx)(_e,{as:"h3",...e}),h4:e=>(0,l.jsx)(_e,{as:"h4",...e}),h5:e=>(0,l.jsx)(_e,{as:"h5",...e}),h6:e=>(0,l.jsx)(_e,{as:"h6",...e}),admonition:Je,mermaid:Ye.Z};function Xe(e){let{children:t}=e;return(0,l.jsx)(me.Z,{components:Qe,children:t})}function Ke(e){let{children:t}=e;const n=function(){const{metadata:e,frontMatter:t,contentTitle:n}=c();return t.hide_title||void 0!==n?null:e.title}();return(0,l.jsxs)("div",{className:(0,u.Z)(b.k.docs.docMarkdown,"markdown"),children:[n&&(0,l.jsx)("header",{children:(0,l.jsx)(ue.Z,{as:"h1",children:n})}),(0,l.jsx)(Xe,{children:t})]})}var et=n(3438),tt=n(8596),nt=n(4996);function st(e){return(0,l.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,l.jsx)("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"})})}const it={breadcrumbHomeIcon:"breadcrumbHomeIcon_YNFT"};function at(){const e=(0,nt.Z)("/");return(0,l.jsx)("li",{className:"breadcrumbs__item",children:(0,l.jsx)(x.Z,{"aria-label":(0,h.I)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e,children:(0,l.jsx)(st,{className:it.breadcrumbHomeIcon})})})}const lt={breadcrumbsContainer:"breadcrumbsContainer_Z_bl"};function ot(e){let{children:t,href:n,isLast:s}=e;const i="breadcrumbs__link";return s?(0,l.jsx)("span",{className:i,itemProp:"name",children:t}):n?(0,l.jsx)(x.Z,{className:i,href:n,itemProp:"item",children:(0,l.jsx)("span",{itemProp:"name",children:t})}):(0,l.jsx)("span",{className:i,children:t})}function rt(e){let{children:t,active:n,index:s,addMicrodata:i}=e;return(0,l.jsxs)("li",{...i&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},className:(0,u.Z)("breadcrumbs__item",{"breadcrumbs__item--active":n}),children:[t,(0,l.jsx)("meta",{itemProp:"position",content:String(s+1)})]})}function ct(){const e=(0,et.s1)(),t=(0,tt.Ns)();return e?(0,l.jsx)("nav",{className:(0,u.Z)(b.k.docs.docBreadcrumbs,lt.breadcrumbsContainer),"aria-label":(0,h.I)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"}),children:(0,l.jsxs)("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList",children:[t&&(0,l.jsx)(at,{}),e.map(((t,n)=>{const s=n===e.length-1,i="category"===t.type&&t.linkUnlisted?void 0:t.href;return(0,l.jsx)(rt,{active:s,index:n,addMicrodata:!!i,children:(0,l.jsx)(ot,{href:i,isLast:s,children:t.label})},n)}))]})}):null}function dt(){return(0,l.jsx)(h.Z,{id:"theme.unlistedContent.title",description:"The unlisted content banner title",children:"Unlisted page"})}function ut(){return(0,l.jsx)(h.Z,{id:"theme.unlistedContent.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function mt(){return(0,l.jsx)(he.Z,{children:(0,l.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}function ht(e){let{className:t}=e;return(0,l.jsx)(Je,{type:"caution",title:(0,l.jsx)(dt,{}),className:(0,u.Z)(t,b.k.common.unlistedBanner),children:(0,l.jsx)(ut,{})})}function xt(e){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(mt,{}),(0,l.jsx)(ht,{...e})]})}const pt={docItemContainer:"docItemContainer_Djhp",docItemCol:"docItemCol_VOVn"};function ft(e){let{children:t}=e;const n=function(){const{frontMatter:e,toc:t}=c(),n=(0,m.i)(),s=e.hide_table_of_contents,i=!s&&t.length>0;return{hidden:s,mobile:i?(0,l.jsx)(ae,{}):void 0,desktop:!i||"desktop"!==n&&"ssr"!==n?void 0:(0,l.jsx)(de,{})}}(),{metadata:{unlisted:s}}=c();return(0,l.jsxs)("div",{className:"row",children:[(0,l.jsxs)("div",{className:(0,u.Z)("col",!n.hidden&&pt.docItemCol),children:[s&&(0,l.jsx)(xt,{}),(0,l.jsx)(T,{}),(0,l.jsxs)("div",{className:pt.docItemContainer,children:[(0,l.jsxs)("article",{children:[(0,l.jsx)(ct,{}),(0,l.jsx)(y,{}),n.mobile,(0,l.jsx)(Ke,{children:t}),(0,l.jsx)(O,{})]}),(0,l.jsx)(v,{})]})]}),n.desktop&&(0,l.jsx)("div",{className:"col col--3",children:n.desktop})]})}function vt(e){const t=`docs-doc-id-${e.content.metadata.id}`,n=e.content;return(0,l.jsx)(r,{content:e.content,children:(0,l.jsxs)(i.FG,{className:t,children:[(0,l.jsx)(d,{}),(0,l.jsx)(ft,{children:(0,l.jsx)(n,{})})]})})}}}]);