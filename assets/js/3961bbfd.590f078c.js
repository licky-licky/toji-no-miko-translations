(self.webpackChunktoji_doc=self.webpackChunktoji_doc||[]).push([[5666],{7321:function(e,a,i){"use strict";i.d(a,{Z:function(){return t}});var n=i(7294),o=i(4996),r=i(3059);function t(e){var a,i=e.events,t=e.newestFirst,u=void 0===t||t,_=e.type,s=(r.Z.card2+_=="episodes"&&r.Z.card3,function(e,a){switch(e){case"events":return"/img/events/"+a+".png";case"episodes":return"/img/episodes/"+a+".png"}}),l=u?i:i.slice().reverse();return a=void 0===i?i[0][0]:u,n.createElement("div",{className:r.Z.grid,key:a},l.map((function(e){return n.createElement("a",{href:"episodes"==_?(0,o.Z)("/docs/episodes/"+e[0]):(0,o.Z)("/docs/"+e[0]),className:r.Z.card2+" "+("episodes"==_?r.Z.card3:""),key:e[2]},n.createElement("img",{src:(0,o.Z)(s(null!=_?_:"events",e[1])),alt:e[2]?e[2]:e[3],loading:"lazy"}),n.createElement("h3",null,e[3]))})))}},6113:function(e,a,i){"use strict";function n(e,a){(null==a||a>e.length)&&(a=e.length);for(var i=0,n=new Array(a);i<a;i++)n[i]=e[i];return n}function o(e,a){var i="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(i)return(i=i.call(e)).next.bind(i);if(Array.isArray(e)||(i=function(e,a){if(e){if("string"==typeof e)return n(e,a);var i=Object.prototype.toString.call(e).slice(8,-1);return"Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i?Array.from(e):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?n(e,a):void 0}}(e))||a&&e&&"number"==typeof e.length){i&&(e=i);var o=0;return function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}i.r(a),i.d(a,{default:function(){return A}});var r=i(7294),t=i(261),u=i(7321),_="charSelector_Cgqo",s="input_3x1t",l="checkboxContainer_3hTY",c="buttonContainer_n8lD",m="closeButton_3ldo",h="charShow_1CXl",k="container_26Y5",d=i(3935);function y(e,a){return(y=Object.setPrototypeOf||function(e,a){return e.__proto__=a,e})(e,a)}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function f(e,a,i){return e===a||(e.correspondingElement?e.correspondingElement.classList.contains(i):e.classList.contains(i))}var g,M,S=(void 0===g&&(g=0),function(){return++g}),Y={},T={},C=["touchstart","touchmove"];function K(e,a){var i=null;return-1!==C.indexOf(a)&&M&&(i={passive:!e.props.preventDefault}),i}var v=function(e,a){var i,n,o=e.displayName||e.name||"Component";return n=i=function(i){var n,t;function u(e){var n;return(n=i.call(this,e)||this).__outsideClickHandler=function(e){if("function"!=typeof n.__clickOutsideHandlerProp){var a=n.getInstance();if("function"!=typeof a.props.handleClickOutside){if("function"!=typeof a.handleClickOutside)throw new Error("WrappedComponent: "+o+" lacks a handleClickOutside(event) function for processing outside click events.");a.handleClickOutside(e)}else a.props.handleClickOutside(e)}else n.__clickOutsideHandlerProp(e)},n.__getComponentNode=function(){var e=n.getInstance();return a&&"function"==typeof a.setClickOutsideRef?a.setClickOutsideRef()(e):"function"==typeof e.setClickOutsideRef?e.setClickOutsideRef():(0,d.findDOMNode)(e)},n.enableOnClickOutside=function(){if("undefined"!=typeof document&&!T[n._uid]){void 0===M&&(M=function(){if("undefined"!=typeof window&&"function"==typeof window.addEventListener){var e=!1,a=Object.defineProperty({},"passive",{get:function(){e=!0}}),i=function(){};return window.addEventListener("testPassiveEventSupport",i,a),window.removeEventListener("testPassiveEventSupport",i,a),e}}()),T[n._uid]=!0;var e=n.props.eventTypes;e.forEach||(e=[e]),Y[n._uid]=function(e){var a;null!==n.componentNode&&(n.props.preventDefault&&e.preventDefault(),n.props.stopPropagation&&e.stopPropagation(),n.props.excludeScrollbar&&(a=e,document.documentElement.clientWidth<=a.clientX||document.documentElement.clientHeight<=a.clientY)||function(e,a,i){if(e===a)return!0;for(;e.parentNode;){if(f(e,a,i))return!0;e=e.parentNode}return e}(e.target,n.componentNode,n.props.outsideClickIgnoreClass)===document&&n.__outsideClickHandler(e))},e.forEach((function(e){document.addEventListener(e,Y[n._uid],K(p(n),e))}))}},n.disableOnClickOutside=function(){delete T[n._uid];var e=Y[n._uid];if(e&&"undefined"!=typeof document){var a=n.props.eventTypes;a.forEach||(a=[a]),a.forEach((function(a){return document.removeEventListener(a,e,K(p(n),a))})),delete Y[n._uid]}},n.getRef=function(e){return n.instanceRef=e},n._uid=S(),n}t=i,(n=u).prototype=Object.create(t.prototype),n.prototype.constructor=n,y(n,t);var _=u.prototype;return _.getInstance=function(){if(e.prototype&&!e.prototype.isReactComponent)return this;var a=this.instanceRef;return a.getInstance?a.getInstance():a},_.componentDidMount=function(){if("undefined"!=typeof document&&document.createElement){var e=this.getInstance();if(a&&"function"==typeof a.handleClickOutside&&(this.__clickOutsideHandlerProp=a.handleClickOutside(e),"function"!=typeof this.__clickOutsideHandlerProp))throw new Error("WrappedComponent: "+o+" lacks a function for processing outside click events specified by the handleClickOutside config option.");this.componentNode=this.__getComponentNode(),this.props.disableOnClickOutside||this.enableOnClickOutside()}},_.componentDidUpdate=function(){this.componentNode=this.__getComponentNode()},_.componentWillUnmount=function(){this.disableOnClickOutside()},_.render=function(){var a=this.props;a.excludeScrollbar;var i=function(e,a){if(null==e)return{};var i,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)i=r[n],a.indexOf(i)>=0||(o[i]=e[i]);return o}(a,["excludeScrollbar"]);return e.prototype&&e.prototype.isReactComponent?i.ref=this.getRef:i.wrappedRef=this.getRef,i.disableOnClickOutside=this.disableOnClickOutside,i.enableOnClickOutside=this.enableOnClickOutside,(0,r.createElement)(e,i)},u}(r.Component),i.displayName="OnClickOutside("+o+")",i.defaultProps={eventTypes:["mousedown","touchstart"],excludeScrollbar:a&&a.excludeScrollbar||!1,outsideClickIgnoreClass:"ignore-react-onclickoutside",preventDefault:!1,stopPropagation:!1},i.getClass=function(){return e.getClass?e.getClass():e},n},E=i(4996);function w(e,a){sessionStorage.setItem(e,JSON.stringify(a))}function H(e){return JSON.parse(sessionStorage.getItem(e))}function j(e){for(var a=e.chars,i=e.setFilteredChars,n=Object.keys(a).length,o=(0,r.useState)(new Array(n).fill(!1)),t=o[0],u=o[1],d=(0,r.useState)(!1),y=d[0],p=d[1],f=[],g=[],M=0,S=Object.entries(a);M<S.length;M++){var Y=S[M],T=Y[0],C=Y[1];f.push(T),g.push(C)}(0,r.useEffect)((function(){var e=H("chars");if(e){u(e);var a=[];e.forEach((function(e,i){e&&a.push(f[i])})),i(a)}}),[]);var K=function(){return p(!y)};return j.handleClickOutside=function(){return p(!1)},r.createElement("div",{className:_},r.createElement("button",{onClick:K,className:h},r.createElement("span",null,"Select Characters"),r.createElement("span",null,r.createElement("img",{src:(0,E.Z)(y?"/img/expand_less_black_24dp.svg":"/img/expand_more_black_24dp.svg")}))),y&&r.createElement("div",{className:k},r.createElement("div",{className:s},r.createElement("div",{className:c},r.createElement("button",{onClick:function(){u(new Array(n).fill(!1)),i([]),sessionStorage.removeItem("chars")}},"Clear All"),r.createElement("button",{onClick:K,id:m},r.createElement("img",{src:(0,E.Z)("/img/close_black_24dp.svg")}))),r.createElement("div",{className:l},f.map((function(e,a){return r.createElement("div",{key:a},r.createElement("input",{type:"checkbox",id:"checkbox-"+a,name:e,value:e||"",checked:t[a],onChange:function(){return e=a,n=[],o=t.map((function(a,i){return i===e?!a:a})),u(o),o.forEach((function(e,a){e&&n.push(f[a])})),i(n),void w("chars",o);var e,n,o}}),r.createElement("label",{htmlFor:"checkbox-"+a},e),r.createElement("span",null,g[a]))}))))," "))}var b=v(j,{handleClickOutside:function(){return j.handleClickOutside}}),O=i(3059),N=JSON.parse('{"U":[{"name":"A_Big_Brawl_The_Christmas_Royale","chars":["Nene","Yukari","Yomi","Chie","Maki","Kofuki","Mai","Ellen","Yume","Suzuka","Mihono","Kaoru","Sayaka"]},{"name":"A_Certain_Superpowered_Parallel_World","chars":["Kuroko","Kanami","Kofuki","Misaki","Ruiko","Mirja","Chie","Mai","Ellen","Sanae","Kaoru","Mikoto","Maki","Kuruko","Mii","Kazari","Yume"]},{"name":"A_Giant_Yeti_Encounter_in_a_Snowy_Mountain_Forest","chars":["Mirja","Tsugumi","Kofuki","Chie","Yui","Kiyoka","Maki","Mihono","Yume"]},{"name":"Aradama_on_the_Counterattack","chars":["Tsugumi","Kofuki","Ellen","Mihono","Kaoru"]},{"name":"Assemble_Toji_Cheer_Squad","chars":["Yukari","Yui","Kanami","Maki","Mai","Miki","Ellen","Suzuka","Yukina","Sayaka"]},{"name":"Battle_Girls_Party_Toji_Raffle_Festival","chars":["Nene","Kanami","Chie","Mai","Ellen","Keiko","Suzuka","Sana","Mihono","Kaoru"]},{"name":"Battle_for_the_First_in_the_Pool","chars":["Nene","Marie","Kanami","Yomi","Kofuki","Kiyoka","Mai","Ellen","Saaya","Wakako","Mihono","Kaoru","Sayaka"]},{"name":"Chain_Story_Archives_Part_0.5.1","chars":["Minato","Yukari","Kagari","Yukina","Sana","Yuzuki"]},{"name":"Chinese_Pandas_Bringing_Good_Fortune","chars":["Yui","Tsugumi","Mihono"]},{"name":"Coming_Year,_Going_Year:_A_Trip_for_Two","chars":["Chie","Maki","Kiyoka","Mihono","Sanae","Yume"]},{"name":"Complete_Your_Day_Off_Mission","chars":["Sayaka","Yukari","Yomi","Yui","Maki","Kofuki","Mai","Suzuka","Yume"]},{"name":"Crystal_Recovery_Afterparty_in_an_Uproar","chars":["Yomi","Kiyoka","Suzuka","Yume","Hiyori"]},{"name":"Debug_Mission_Capriccio","chars":["Mirja","Tsugumi","Kofuki","Yomi","Maki","Friedman","Yume","Hiyori"]},{"name":"Entwining_Bonds_Fierce_Genius_x_Strange_Genius","chars":["Sayaka","Yomi","Maki","Mai","Suzuka","Yume"]},{"name":"Entwining_Bonds_Honest_Heart_x_Acrobatics","chars":["Yui","Kofuki","Ellen","Mihono","Kaoru"]},{"name":"Escape_From_the_Locker_Room","chars":["Akira","Mirja","Kanami","Yui","Kofuki","Yomi","Mai","Sayaka","Hiyori"]},{"name":"Escape_from_Wonderland","chars":["Mirja","Chie","Kofuki","Tsugumi","Kiyoka","Ellen","Suzuka","Mihono","Kaoru","Yume"]},{"name":"Eternal_Vacation","chars":["Mirja","Chie","Kanami","Kofuki","Yui","Kiyoka","Mai","Tsugumi","Ellen","Mihono","Kaoru","Sayaka","Hiyori"]},{"name":"Fall\'s_Main_Event_Great_Leaf_Viewing_Operation","chars":["Mirja","Tsugumi","Kofuki","Sayaka","Hiyori"]},{"name":"For_Better_Fortune_The_Fortune_Slip_Recovery_Operation","chars":["Yoshizumi","Yui","Chie","Tsugumi","Kiyoka","Mihono"]},{"name":"Full_Summer_Beach_Lounge_Rescue_Team","chars":["Mirja","Chie","Tsugumi","Kofuki","Mihono","Kaoru","Sayaka"]},{"name":"Grand_Opening_The_Five_Traditions_Unified_School_Festival","chars":["Yomi","Chie","Maki","Kiyoka","Suzuka","Mihono","Yume"]},{"name":"Great_Halloween_Surprise_Operation","chars":["Yomi","Yui","Kiyoka","Ellen","Mihono","Kaoru","Yume"]},{"name":"Happy_New_Year_The_Tojis\'_New_Year\'s_and_Prayers_[mystery]","chars":["Hirona","Mirja","Suu","Friedman","Kiyoka","Ellen","Kaoru","Sayaka","Hiyori"]},{"name":"Happy_New_Year_The_Tojis\'_New_Year\'s_and_Prayers_[past]","chars":["Minato","Yukari","Kagari","Sana","Yukina"]},{"name":"Heart_Pounding_Mission_in_a_Steamy_Hot_Spring","chars":["Nene","Yui","Chie","Kiyoka","Ellen","Mihono","Kaoru","Hiyori"]},{"name":"Hit_or_Stand__Toji_Style_Game_Training","chars":["Tsugumi","Kofuki","Maki","Kiyoka","Mai","Suzuka"]},{"name":"Human_Egg","chars":["Kanami","Mirja","Kiyoka","Mai","Ellen","Mihono","Sayaka","Hiyori"]},{"name":"June_Bride_Symphony","chars":["Mimi","Kozue","Yukari","Kanami","Maki","Suzuka","Yume","Hina","Mihono","Tomomu","Sayaka","Hiyori"]},{"name":"Let\'s_All_BBQ_in_the_Great_Outdoors","chars":["Mirja","Chie","Nao","Kiyoka","Ellen","Mihono"]},{"name":"Let\'s_Vacation_A_Tropical_Resort_Festival","chars":["Hirona","Akira","Mirja","Chie","Mihono"]},{"name":"Mad_Tea_Party","chars":["Mirja","Tsugumi","Chie","Kofuki","Kiyoka","Mai","Ellen","Suzuka","Yume","Mihono","Kaoru","Sayaka"]},{"name":"Mahouka:_Dream_Visitors","chars":["Kanami","Kofuki","Erika","Honoka","Mirja","Chie","Yui","Shizuku","Mihono","Angelina","Hiyori","Yomi","Maki","Suzuka","Miyuki","Tsugumi","Kiyoka","Mayumi","Yume"]},{"name":"Miss_Five_Traditions_Charity_Mission","chars":["Nene","Sayaka","Yukari","Yomi","Kanami","Maki","Chie","Yui","Mai","Suzuka","Mihono","Kaoru","Yume","Hiyori"]},{"name":"Miss_Five_Traditions_Contest","chars":["Akira","Kanami","Kofuki","Sana","Yuzuki","Sayaka","Yukari","Mirja","Chie","Yui","Mai","Ellen","Yukina","Mihono","Kaoru","Sanae","Hiyori","Yomi","Maki","Iroha","Suzuka","Ema","Tsugumi","Kiyoka","Yume"]},{"name":"Mystery_TRPG_The_Steam_Shrouded_Murder_Case","chars":["Yui","Kanami","Maki","Kiyoka","Ellen","Suzuka","Hiyori"]},{"name":"Nanoha_DOPPELGANGER","chars":["Hayate","Akira","Nanoha","Kanami","Yomi","Tsugumi","Suu","Mirja","Kiyoka","Suruga","Yume","Sanae","Sayaka","Fate"]},{"name":"Ninja_War_Under_the_Moonlight","chars":["Akane","Kofuki","Maki","Kiyoka","Mai","Suzuka","Sumi","Sakura"]},{"name":"North_and_South_Swordsman_Record","chars":["Hokuto","Yomi","Tsugumi","Kofuki","Suu","Maki","Kiyoka","Suzuka","Yume","Sanae","Sayaka","Hiyori"]},{"name":"Okatana_with_Flowers_Shining_in_Full_Bloom_Chapter","chars":["Karin","Sonoko","Kanami","Yui","Tougou","Fuu","Kiyoka","Itsuki","Suzuka","Mihono","Yuuna","Kaoru"]},{"name":"On_a_Nice_Cool_Evening_Yukata_at_the_Summer_Festival","chars":["Yukari","Yomi","Maki","Suzuka","Yume"]},{"name":"One_Strange_Night\'s_Monster_Parade","chars":["Mirja","Kanami","Maki","Tsugumi","Kiyoka","Sanae","Sayaka","Hiyori"]},{"name":"Out_of_Season_Cherry_Blossom_Front","chars":["Kanami","Chie","Tsugumi","Mirja","Kofuki","Kiyoka","Mai","Yui","Ellen","Mihono","Kaoru","Sayaka","Hiyori"]},{"name":"Pair_vs_Pair_The_New_Year\'s_Karuta_Competition","chars":["Yukari","Yomi","Kanami","Maki","Mirja","Kofuki","Yui","Kiyoka","Suzuka","Chie","Mihono","Yume","Hiyori"]},{"name":"Revue_Stage_Girls_and_Toji_no_Miko","chars":["Kanami","Kofuki","Karen","Junna","Kaoruko","Mirja","Yui","Giraffe","Mai","Hikari","Kaoru","Hiyori","Yomi","Maki","Suzuka","Nene","Maya","Mahiru","Tsugumi","Nana","Claudine","Futaba","Yume"]},{"name":"Revue_The_Mystery_of_the_Reappearing_Aradama","chars":["Kanami","Kofuki","Karen","Junna","Kaoruko","Mirja","Yui","Mai","Hikari","Kaoru","Hiyori","Yomi","Maki","Suzuka","Nene","Maya","Mahiru","Nana","Tsugumi","Claudine","Futaba","Yume"]},{"name":"Rumored_Urban_Legend_Watching","chars":["Kaoru","Nene","Kaoruko","Kuroko","Kanami","Chie","Maki","Kofuki","Mirja","Tsugumi","Mai","Kazari","Misaki","Ruiko","Mii","Sanae","Yume","Mikoto"]},{"name":"Security_Police_Mission_on_a_Holy_Night:_-Guard_the_Party_Venue-","chars":["Akira","Kanami","Suu","Kiyoka","Suzuka","Mihono","Sanae"]},{"name":"Smash_Through_Sports_Chanbara_Joint_Training","chars":["Kanami","Tsugumi","Maki","Mirja","Yui","Chie","Mai","Kofuki","Suzuka","Ellen","Kinuka","Nao","Kiyoka","Mihono","Sanae","Sayaka","Kaoru","Hiyori"]},{"name":"Spending_Time_at_the_Amusement_Park,_the_Toji_Way","chars":["Kanami","Mirja","Maki","Yui","Kiyoka","Suzuka","Hiyori"]},{"name":"Spring_in_Full_Bloom_Combined_Off-Campus_Learning","chars":["Shiho","Jun","Kanami","Chie","Mirja","Minaki","Chiho","Mayumi","Ellen","Miki","Mihono","Sawano","Hiyori"]},{"name":"Star_Ocean_-Encounter_With_the_Toji-","chars":["Reimi","Welch","Yukari","Yui","Tsugumi","Chie","Millie","Mai","Maria","Rena","Miki","Mihono"]},{"name":"Steady_as_She_Goes_Maritime_Special_Task_Team","chars":["Yurina","Hoozuki","Kanami","Chie","Kofuki","Keiko","Sana","Kaoru","Sayaka"]},{"name":"Summer_Memories","chars":["Yui","Tsugumi","Kofuki","Yomi","Maki","Kiyoka","Suzuka","Yume"]},{"name":"Sweet_Valentines_Chocolate_Panic","chars":["Mirja","Yume","Ellen","Suzuka"]},{"name":"Take_Back_Everyone\'s_Feelings_Chocolate_Recovery_Mission","chars":["Kanami","Maki","Kofuki","Kiyoka","Mai","Suzuka","Kaoru","Sayaka","Hiyori"]},{"name":"Take_Back_a_Twinkling_Christmas_Eve","chars":["Youji","Yui","Mirja","Kofuki","Tsugumi","Mai","Sayaka"]},{"name":"Team_vs_Team_in_the_White_Day_Wars","chars":["Nene","Hoozuki","Kanami","Tsugumi","Kofuki","Chinami","Chinatsu","Nao","Mai","Kiyoka","Ellen","Saaya","Kinuka","Mihono","Kaoru","Sayaka"]},{"name":"The_Case_of_the_Disappearing_Wedding_Rings","chars":["Yui","Tsugumi","Kanami","Maki","Yomi","Kiyoka","Ellen","Suzuka","Mihono","Yume"]},{"name":"There\'s_an_Anomaly_in_the_Seasonal_Rain_Front","chars":["Kanami","Yui","Kofuki","Mai","Hiyori"]},{"name":"Toji_Edo_Detective_Story","chars":["Mirja","Yomi","Kofuki","Maki","Suzuka","Yume","Kazumi","Sayaka"]},{"name":"Toji_Notes:_-The_Heroes_of_Twenty_Years_Ago-","chars":["Minato","Yukari","Kanami","Kagari","Mai","Ellen","Yukina","Sana","Mihono","Kaoru"]},{"name":"Toji_Summer_Vacation_-Fierce_Battle_Arc-","chars":["Yuma","Emily","Yume","Yukari","Mirja","Mai","Ellen","Mihono","Kaoru","Taeko","Hiyori","Yomi","Maki","Suzuka","Nene","Kiyoka","Sayaka"]},{"name":"Toji_Summer_Vacation_-Hard_Struggle_Arc-","chars":["Nene","Sayaka","Mirja","Kiyoka","Mai","Ellen","Emily","Mihono","Kaoru","Taeko","Hiyori"]},{"name":"Toji_and_the_Dungeon","chars":["Lefiya","Kiyoka","Ellen","Hestia","Lilly","Mihono","Ais","Kaoru","Hiyori"]},{"name":"Toji_no_Miko_Idol_Project","chars":["Kanami","Kofuki","Sayaka","Mirja","Chie","Yui","Mai","Ellen","Mihono","Sanae","Kaoru","Hiyori","Yomi","Maki","Suzuka","Tsugumi","Kiyoka","Yume"]},{"name":"Tojitomo_General_Election_-Pledge_Story-_Their_Choice","chars":["Kanami","Yomi","Chie","Yui","Mihono","Yume"]},{"name":"Tojitomo_Police_Duty","chars":["Nene","Hirona","Kanami","Yui","Mirja","Chie","Kofuki","Kiyoka","Ellen","Mihono","Kaoru","Hiyori"]},{"name":"Treasure_Hunt_A_Gift_From_the_Pirates","chars":["Minato","Kanami","Kagari","Kiyoka","Mihono","Hiyori"]},{"name":"UDON_Chapter","chars":["Karin","Sonoko","Yomi","Tougou","Ellen","Fuu","Yuuna","Itsuki","Hiyori"]},{"name":"Welcome_to_the_Halloween_Party","chars":["Nene","Kanami","Chie","Yomi","Mai","Ellen","Yume","Mihono","Kaoru","Sayaka"]},{"name":"Yakisoba_Journey_to_the_West","chars":["Akane","Yukari","Yomi","Maki","Suzuka","Sanae","Yume","Hiyori"]},{"name":"Yume\'s_Great_Xmas_Operation_-_Christmas_Eve_Surprise_Party","chars":["Mirja","Tsugumi","Kofuki","Yomi","Maki","Kanami","Mai","Suzuka","Mihono","Kaoru","Yume","Hiyori"]},{"name":"Yume\'s_Homecoming","chars":["Yomi","Maki","Suzuka","Yuzuki","Yume"]},{"name":"Yume_and_the_Ice_Magic_Sequence","chars":["Honoka","Yui","Kanami","Miyuki","Maki","Yomi","Mirja","Kiyoka","Shizuku","Mayumi","Erika","Suzuka","Mihono","Yume","Angelina","Hiyori"]},{"name":"Yuuki_Yuuna_is_a_Hero_~Toji_and_Hero_Chapter~","chars":["Karin","Sonoko","Mirja","Chie","Kofuki","Kanami","Fuu","Kiyoka","Mai","Tougou","Mihono","Yuuna","Sayaka","Itsuki"]},{"name":"Elite_Guard_Memoirs_Hakone_Arc","chars":["Wakako","Yukari","Yomi","Maki","Suzuka","Kazumi","Yume"]},{"name":"Elite_Guard_Memoirs_Cherry_Blossom_Arc","chars":["Yukari","Yomi","Maki","Suzuka","Yume"]},{"name":"Entwining_Bonds_Shameless_x_Honorable","chars":["Akira","Yui"]}],"R":{"Mihono":44,"Kiyoka":40,"Suzuka":38,"Kanami":38,"Maki":37,"Yume":37,"Kofuki":36,"Mirja":35,"Hiyori":34,"Yomi":32,"Mai":32,"Kaoru":32,"Ellen":31,"Yui":31,"Sayaka":30,"Chie":29,"Tsugumi":28,"Yukari":16,"Nene":13,"Sanae":11,"Sana":6,"Akira":6,"Yukina":5,"Minato":4,"Kagari":4,"Suu":4,"Miki":3,"Yuzuki":3,"Hirona":3,"Nao":3,"Mayumi":3,"Karin":3,"Sonoko":3,"Tougou":3,"Fuu":3,"Itsuki":3,"Yuuna":3,"Kaoruko":3,"Kuroko":2,"Misaki":2,"Ruiko":2,"Mikoto":2,"Mii":2,"Kazari":2,"Keiko":2,"Saaya":2,"Wakako":2,"Friedman":2,"Erika":2,"Honoka":2,"Shizuku":2,"Angelina":2,"Miyuki":2,"Akane":2,"Karen":2,"Junna":2,"Hikari":2,"Maya":2,"Mahiru":2,"Nana":2,"Claudine":2,"Futaba":2,"Kinuka":2,"Hoozuki":2,"Kazumi":2,"Emily":2,"Taeko":2,"Kuruko":1,"Marie":1,"Yoshizumi":1,"Mimi":1,"Kozue":1,"Hina":1,"Tomomu":1,"Iroha":1,"Ema":1,"Hayate":1,"Nanoha":1,"Suruga":1,"Fate":1,"Sumi":1,"Sakura":1,"Hokuto":1,"Giraffe":1,"Shiho":1,"Jun":1,"Minaki":1,"Chiho":1,"Sawano":1,"Reimi":1,"Welch":1,"Millie":1,"Maria":1,"Rena":1,"Yurina":1,"Youji":1,"Chinami":1,"Chinatsu":1,"Yuma":1,"Lefiya":1,"Hestia":1,"Lilly":1,"Ais":1}}'),F=[["Tojitomo_General_Election_-Pledge_Story-_Their_Choice","choice","choice","Tojitomo General Election -Pledge Story- Their Choice",2021],["Let's_Vacation_A_Tropical_Resort_Festival","vacation","vacation 2021","Let's Vacation! A Tropical Resort Festival!",2021],["Tojitomo_Police_Duty","police","police","Tojitomo Police Duty",2021],["Yume's_Homecoming","yume_home","YH","Yume's Homecoming",2021],["Star_Ocean_-Encounter_With_the_Toji-","encounter","ENC","Encounter with the Toji",2021],["Happy_New_Year_The_Tojis'_New_Year's_and_Prayers_[mystery]","newyear2021","nyc2021-1","Happy New Year! The Tojis' New Year's and Prayers [mystery]",2021],["Happy_New_Year_The_Tojis'_New_Year's_and_Prayers_[past]","newyear2021","nyc2021-2","Happy New Year! The Tojis' New Year's and Prayers [past]",2021],["Security_Police_Mission_on_a_Holy_Night:_-Guard_the_Party_Venue-","xmas2020","xmas2020","Security Police Mission on a Holy Night: -Guard the Party Venue-",2020],["Nanoha_DOPPELGANGER","nanoha","manoha","Nanoha DOPPELGANGER",2020],["Entwining_Bonds_Shameless_x_Honorable","bonds3","shameless","Entwined Bonds: Shameless x Honorable",2020],["Treasure_Hunt_A_Gift_From_the_Pirates","pirate","pirate","Treasure Hunt: A Gift From the Pirates",2020],["Summer_Memories","memories","memories","Summer Memories",2020],["Mystery_TRPG_The_Steam_Shrouded_Murder_Case","trpg","trpg","Mystery TRPG: The Steam Shrouded Murder Case",2020],["Entwining_Bonds_Honest_Heart_x_Acrobatics","bonds2","Entwining Bonds 2","Entwining Bonds: Honest Heart x Acrobatics",2020],["Escape_From_the_Locker_Room","locker","locker room","Escape From the Locker Room",2020],["Miss_Five_Traditions_Charity_Mission","charity","charity mission","Miss Five Traditions Charity Mission",2020],["Yume_and_the_Ice_Magic_Sequence","ice","yume and ice","Yume and the Ice Magic Sequence",2020],["Mahouka:_Dream_Visitors","mahouka","mahouka","Mahouka: Dream Visitors",2020],["North_and_South_Swordsman_Record","north_south","north and south swordsman","North and South Swordsman Record",2020],["Yakisoba_Journey_to_the_West","tothewest","Yakisoba Journey to the West","Yakisoba Journey to the West",2020],["Human_Egg","egg","what's a human egg anyway?","Enjoy the Easter Game! Human Egg",2020],["Aradama_on_the_Counterattack","aradama","Aradama on the Counterattack","Aradama on the Counterattack",2020],["Entwining_Bonds_Fierce_Genius_x_Strange_Genius","bonds1","Entwining Bonds 1","Entwining Bonds: Fierce Genius x Strange Genius",2020],["Miss_Five_Traditions_Contest","contest","Miss Five Traditions Contest","Miss Five Traditions Contest",2020],["Rumored_Urban_Legend_Watching","urban","urban legends","Rumored Urban Legend Watching",2020],["A_Certain_Superpowered_Parallel_World","railgun","railgun event","A Certain Superpowered Parallel World",2020],["Toji_no_Miko_Idol_Project","idol","idols","Toji no Miko Idol Project",2020],["Chain_Story_Archives_Part_0.5.1","chain","chain","Chain Story Archives Part 0.5.1",2020],["Coming_Year,_Going_Year:_A_Trip_for_Two","newyear2020","newyear2020","Coming Year, Going Year: A Trip for Two",2020],["Yume's_Great_Xmas_Operation_-_Christmas_Eve_Surprise_Party","xmas2019","xmas2019","Yume's Great Xmas Operation - Christmas Eve Surprise Party",2019],["Debug_Mission_Capriccio","debug","debug","Debug Mission Capriccio",2019],["One_Strange_Night's_Monster_Parade","halloween2019","halloween2019","One Strange Night's Monster Parade",2019],["UDON_Chapter","udon","udon","Yuuki Yuuna wa Yuusha de Aru ~Udon Chapter~",2019],["Okatana_with_Flowers_Shining_in_Full_Bloom_Chapter","mankai","mankai","Yuuki Yuuna wa Yuusha de Aru ~Okatana with Flowers Shining in Full Bloom Chapter~",2019],["Full_Summer_Beach_Lounge_Rescue_Team","rescue","rescue","Full Summer Beach Lounge Rescue Team!",2019],["Smash_Through_Sports_Chanbara_Joint_Training","chanbara","chanbara","Smash Through! Sports Chanbara Joint Training",2019],["On_a_Nice_Cool_Evening_Yukata_at_the_Summer_Festival","yukata","yukata","On a Nice Cool Evening! Yukata at the Summer Festival",2019],["Mad_Tea_Party","tea","tea","Mad Tea Party",2019],["Escape_from_Wonderland","wonderland","wonderland","Escape from Wonderland",2019],["There's_an_Anomaly_in_the_Seasonal_Rain_Front","rain","rain","There's an Anomaly in the Seasonal Rain Front!",2019],["Eternal_Vacation","eternal","eternal","Eternal Vacation",2019],["The_Case_of_the_Disappearing_Wedding_Rings","ring","ring","The Case of the Disappearing Wedding Rings",2019],["Let's_All_BBQ_in_the_Great_Outdoors","bbq","bbq","Let's All BBQ in the Great Outdoors!",2019],["Revue_The_Mystery_of_the_Reappearing_Aradama","revue2","revue2","Revue: The Mystery of the Reappearing Aradama",2019],["Revue_Stage_Girls_and_Toji_no_Miko","revue1","revue1","Revue: Stage Girls and Toji no Miko",2019],["Chinese_Pandas_Bringing_Good_Fortune","panda","panda","Chinese Pandas Bringing Good Fortune",2019],["Out_of_Season_Cherry_Blossom_Front","blossom","blossom","Out of Season Cherry Blossom Front",2019],["Toji_Notes:_-The_Heroes_of_Twenty_Years_Ago-","notes","notes","Toji Notes: -The Heroes of Twenty Years Ago-",2019],["Toji_Edo_Detective_Story","edo","edo","Toji Edo Detective Story",2019],["Crystal_Recovery_Afterparty_in_an_Uproar","crystal","crystal","Crystal Recovery! Afterparty in an Uproar!",2019],["Battle_Girls_Party_Toji_Raffle_Festival","raffle","raffle","Battle Girls Party! Toji Raffle Festival",2019],["Take_Back_Everyone's_Feelings_Chocolate_Recovery_Mission","chocolate","chocolate","Take Back Everyone's Feelings! Chocolate Recovery Mission",2019],["Sweet_Valentines_Chocolate_Panic","valentine","valentine","Sweet Valentines Chocolate Panic!",2019],["Heart_Pounding_Mission_in_a_Steamy_Hot_Spring","hotspring","hotspring","Heart Pounding Mission in a Steamy Hot Spring",2019],["A_Giant_Yeti_Encounter_in_a_Snowy_Mountain_Forest","yeti","yeti","A Giant Yeti Encounter in a Snowy Mountain Forest!",2019],["For_Better_Fortune_The_Fortune_Slip_Recovery_Operation","fortune","fortune","For Better Fortune! The Fortune Slip Recovery Operation",2019],["Pair_vs_Pair_The_New_Year's_Karuta_Competition","pair","pair","Pair vs Pair! The New Year's Karuta Competition",2019],["Hit_or_Stand__Toji_Style_Game_Training","game","game","Hit or Stand? Toji Style Game Training",2018],["Take_Back_a_Twinkling_Christmas_Eve","xmas2018-2","xmas2018-2","Take Back a Twinkling Christmas Eve!",2018],["A_Big_Brawl_The_Christmas_Royale","xmas2018-1","xmas2018-1","A Big Brawl! The Christmas Royale",2018],["Grand_Opening_The_Five_Traditions_Unified_School_Festival","festival","festival","Grand Opening! The Five Traditions Unified School Festival",2018],["Fall's_Main_Event_Great_Leaf_Viewing_Operation","leaf","leaf","Fall's Main Event! Great Leaf Viewing Operation",2018],["Complete_Your_Day_Off_Mission","dayoff","dayoff","Complete Your Day Off Mission!",2018],["Spending_Time_at_the_Amusement_Park,_the_Toji_Way","amusement","amusement","Spending Time at the Amusement Park, the Toji Way",2018],["Great_Halloween_Surprise_Operation","halloween2018op","halloween2018op","Great Halloween Surprise Operation",2018],["Welcome_to_the_Halloween_Party","halloween2018","halloween2018","Welcome to the Halloween Party!",2018],["Assemble_Toji_Cheer_Squad","cheer","cheer","Assemble! Toji Cheer Squad",2018],["Toji_and_the_Dungeon","danmachi","danmachi","Toji and the Dungeon",2018],["Steady_as_She_Goes_Maritime_Special_Task_Team","shipgirls","shipgirls","Steady as She Goes! Maritime Special Task Team!",2018],["Toji_Summer_Vacation_-Fierce_Battle_Arc-","fierce","fierce","Toji Summer Vacation -Fierce Battle Arc-",2018],["Toji_Summer_Vacation_-Hard_Struggle_Arc-","struggle","struggle","Toji Summer Vacation -Hard Struggle Arc-",2018],["Yuuki_Yuuna_is_a_Hero_~Toji_and_Hero_Chapter~","toji_and_hero","toji_and_hero","Yuuki Yuuna wa Yuusha de Aru ~Toji and Hero Chapter~",2018],["Battle_for_the_First_in_the_Pool","pool","pool","Battle for the First in the Pool!",2018],["June_Bride_Symphony","bride2018","bride2018","June Bride Symphony",2018],["Ninja_War_Under_the_Moonlight","ninja","ninja","Ninja War Under the Moonlight",2018],["Elite_Guard_Memoirs_Cherry_Blossom_Arc","eliteguard2","eliteguard2","Elite Guard Memoirs: Cherry Blossom Arc",2018],["Spring_in_Full_Bloom_Combined_Off-Campus_Learning","spring","spring","Spring in Full Bloom! Combined Off-Campus Learning",2018],["Elite_Guard_Memoirs_Hakone_Arc","eliteguard1","eliteguard1","Elite Guard Memoirs: Hakone Arc",2018],["Team_vs_Team_in_the_White_Day_Wars","white_day","white_day","Team vs Team in the White Day Wars",2018]];var A=function(){var e,a=(0,r.useState)(!0),i=a[0],n=a[1],_=(0,r.useState)(F),s=_[0],l=_[1],c=(0,r.useState)([]),m=c[0],h=c[1],k=(0,r.useState)(""),d=k[0],y=k[1],p=function(e){return 0==m.length||m.every((function(a){return function(e){for(var a,i=o(N.U);!(a=i()).done;){var n=a.value;if(n.name==e)return n.chars}return[]}(e[0]).includes(a)}))};return(0,r.useEffect)((function(){return l(F.filter((function(e){if(p(e)){if(""===d||null==d)return e;if(e[3].toLowerCase().includes(d.toLowerCase()))return e}})))}),[d,m]),(0,r.useEffect)((function(){var e=H("filter");e&&y(e);var a=H("newest");"boolean"==typeof a&&n(a)}),[]),r.createElement(t.Z,{title:"Events"},r.createElement("main",{className:"main"},r.createElement("h1",{className:O.Z.title},"Events"),r.createElement("div",{className:O.Z.filterBar},r.createElement("span",{id:O.Z.count},s.length),r.createElement("div",{className:"barContainer"},r.createElement("input",{type:"text",id:"filter",className:O.Z.searchBar,value:d,placeholder:"Filter events",onChange:function(e){var a;a=e.target.value,y(a),w("filter",a)}})),r.createElement("div",{className:O.Z.dropdown},r.createElement("ul",null,r.createElement("li",{key:"newer"},r.createElement("button",{className:i?O.Z.selectedButton:"",onClick:function(){n(!0),w("newest",!0)}},"Newest first")),r.createElement("li",{key:"older"},r.createElement("button",{className:i?"":O.Z.selectedButton,onClick:function(){n(!1),w("newest",!1)}},"Oldest first")))),r.createElement(b,{chars:N.R,setFilteredChars:h})),(e=[],s.forEach((function(a){e.includes(a[4])||e.push(a[4])})),i?e:e.slice().reverse()).map((function(e){var a=s.filter((function(a){return a[4]===e}));return r.createElement(r.Fragment,null,r.createElement("h2",{key:e},e),r.createElement(u.Z,{key:"event-"+e,events:a,newestFirst:i}))}))))}},3059:function(e,a){"use strict";a.Z={container:"container_S0sa",title:"title_3c-F",card2:"card2_tkdM",card3:"card3_3MUb",grid:"grid_1DHk",dropdown:"dropdown_W8uK",selectedButton:"selectedButton_19gX",searchBar:"searchBar_3QY0",filterBar:"filterBar_1uxk",main:"main_3CD0",count:"count_22sl"}}}]);