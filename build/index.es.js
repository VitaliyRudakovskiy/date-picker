import n,{Component as e,createContext as t,useState as r,useContext as o,useCallback as a,useMemo as i,memo as c,useEffect as u}from"react";import s from"@assets/error.png";import l,{createGlobalStyle as d,ThemeProvider as m,css as f}from"styled-components";import h from"@assets/next.svg";import p from"@assets/prev.svg";import g from"react-dom";import y from"@assets/calendar.svg";import x from"@assets/clear.svg";var v=function(n,e){return v=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,e){n.__proto__=e}||function(n,e){for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(n[t]=e[t])},v(n,e)};var b=function(){return b=Object.assign||function(n){for(var e,t=1,r=arguments.length;t<r;t++)for(var o in e=arguments[t])Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n},b.apply(this,arguments)};function D(n,e,t){if(t||2===arguments.length)for(var r,o=0,a=e.length;o<a;o++)!r&&o in e||(r||(r=Array.prototype.slice.call(e,0,o)),r[o]=e[o]);return n.concat(r||Array.prototype.slice.call(e))}function w(n,e){return Object.defineProperty?Object.defineProperty(n,"raw",{value:e}):n.raw=e,n}"function"==typeof SuppressedError&&SuppressedError;var S,E,k,z,T,C={primary:"#FFFFFF",text:"#333333",month:"#000000",border:"#E1E1E1",borderDash:"#9747FF",chosenDay:"#2F80ED",firstDayRange:"#2F80ED99",middleDayRange:"#2F80ED1A",disabledDay:"#AAAAAA",weekendDay:"#FF0000",holiday:"#CD5C5C",taskMarkColor:"#32CD32",errorText:"#B91414"},W={fontFamily:{openSans:"'Open Sans', sans-serif"},fontSize:{xxl:21,xl:18,l:15,m:14,s:13},fontWeight:{l:700,m:600,s:400}},M={xxs:"0.1rem",xs:"0.3125rem",s:"0.5rem",m:"0.625rem",xm:"0.9375rem",l:"1rem"},F=d(S||(S=w(["\n    * {\n        font-family: ",";\n        margin: 0;\n        padding: 0;\n        box-sizing: border-box;\n        scroll-behavior: smooth;\n        outline: none;\n        color: ",";\n        user-select: none;\n    }\n"],["\n    * {\n        font-family: ",";\n        margin: 0;\n        padding: 0;\n        box-sizing: border-box;\n        scroll-behavior: smooth;\n        outline: none;\n        color: ",";\n        user-select: none;\n    }\n"])),W.fontFamily.openSans,C.text),Y=l.img(E||(E=w(["\n    width: 16px;\n    height: 16px;\n    color: ",";\n    cursor: pointer;\n"],["\n    width: 16px;\n    height: 16px;\n    color: ",";\n    cursor: pointer;\n"])),C.disabledDay),$=l.div(k||(k=w(["\n    font-size: ","px;\n    font-weight: ",";\n    text-align: center;\n    padding: "," 6px;\n    border: 1px solid ",";\n    border-radius: ",";\n    cursor: pointer;\n\n    &:hover {\n        border: 1px dashed ",";\n    }\n"],["\n    font-size: ","px;\n    font-weight: ",";\n    text-align: center;\n    padding: "," 6px;\n    border: 1px solid ",";\n    border-radius: ",";\n    cursor: pointer;\n\n    &:hover {\n        border: 1px dashed ",";\n    }\n"])),W.fontSize.s,W.fontWeight.m,M.s,C.primary,M.m,C.borderDash),A={colors:b({},C),fonts:b({},W),gaps:b({},M),sizes:b({},{cellSize:"30px",calendarWidth:"230px",modalSize:"400px",tablet:"784px"})},O=function(e){return function(t){return n.createElement(m,{theme:A},n.createElement(F,null),n.createElement(e,b({},t)))}},R=f(z||(z=w(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n"],["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n"]))),I=f(T||(T=w(["\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n"],["\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n"]))),N=function(n){return n.theme.gaps.l},j=l.div(P||(P=w(["\n    max-width: 100vw;\n    min-height: 90vh;\n    ",";\n    flex-direction: column;\n    gap: ",";\n    padding: 0 ",";\n    text-align: center;\n"],["\n    max-width: 100vw;\n    min-height: 90vh;\n    ",";\n    flex-direction: column;\n    gap: ",";\n    padding: 0 ",";\n    text-align: center;\n"])),R,N,N),V=l.p(B||(B=w(["\n    color: ",";\n    font-size: ","px;\n"],["\n    color: ",";\n    font-size: ","px;\n"])),(function(n){return n.theme.colors.errorText}),(function(n){return n.theme.fonts.fontSize.xxl}));l.span(H||(H=w(["\n    font-size: ","px;\n\n    @media (max-width: ",") {\n        font-size: ","px;\n    }\n"],["\n    font-size: ","px;\n\n    @media (max-width: ",") {\n        font-size: ","px;\n    }\n"])),(function(n){return n.theme.fonts.fontSize.l}),(function(n){return n.theme.sizes.tablet}),(function(n){return n.theme.fonts.fontSize.s}));var P,B,H,J,_,K,U=l.img(J||(J=w(["\n    width: 100px;\n"],["\n    width: 100px;\n"]))),L=O(function(e){function t(n){var t=e.call(this,n)||this;return t.state={hasError:!1,error:null},t}return function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function t(){this.constructor=n}v(n,e),n.prototype=null===e?Object.create(e):(t.prototype=e.prototype,new t)}(t,e),t.getDerivedStateFromError=function(n){return{hasError:!0,error:n}},t.prototype.render=function(){var e=this.state,t=e.hasError,r=e.error;return t?n.createElement(j,{"data-testid":"error-boundary"},n.createElement(U,{src:s,alt:"something wrong"}),n.createElement("h2",null,"Oops! Something went wrong"),n.createElement(V,null,r&&r.toString())):this.props.children},t}(e)),q=t({range:void 0,setRange:function(){}}),G=function(){return o(q)},Q=function(e){var t=e.children,o=r({rangeStart:void 0,rangeEnd:void 0}),a={range:o[0],setRange:o[1]};return n.createElement(q.Provider,{value:a},t)},X=function(n){return n.theme.gaps.s},Z=l.button(_||(_=w(["\n    font-family: ",";\n    font-size: ",";\n    font-weight: ",";\n    width: 100%;\n    min-width: ",";\n    background-color: ",";\n    color: ",";\n    border-radius: 0 0 "," ",";\n    border: 1px solid ",";\n    padding: "," 0;\n    transition: background-color 0.3s;\n    cursor: pointer;\n\n    &:hover {\n        background-color: ",";\n    }\n"],["\n    font-family: ",";\n    font-size: ",";\n    font-weight: ",";\n    width: 100%;\n    min-width: ",";\n    background-color: ",";\n    color: ",";\n    border-radius: 0 0 "," ",";\n    border: 1px solid ",";\n    padding: "," 0;\n    transition: background-color 0.3s;\n    cursor: pointer;\n\n    &:hover {\n        background-color: ",";\n    }\n"])),(function(n){return n.theme.fonts.fontFamily.openSans}),(function(n){return n.theme.fonts.fontSize.s}),(function(n){return n.theme.fonts.fontWeight.m}),(function(n){return n.theme.sizes.calendarWidth}),(function(n){return n.theme.colors.primary}),(function(n){return n.theme.colors.text}),X,X,(function(n){return n.theme.colors.border}),(function(n){return n.theme.gaps.m}),(function(n){return n.theme.colors.middleDayRange})),nn=n.memo((function(e){var t=e.text,r=e.onButtonClick;return n.createElement(Z,{onClick:r},t)})),en=new Date,tn=t({today:en,selectedDay:void 0,selectedMonth:en.getMonth(),selectedYear:en.getFullYear(),calendarType:"Day",setSelectedDay:function(){},setSelectedMonth:function(){},setSelectedYear:function(){},setCalendarType:function(){}}),rn=function(){return o(tn)},on=function(e){var t=e.children,o=r(en)[0],a=r(void 0),i=a[0],c=a[1],u=r(en.getMonth()),s=u[0],l=u[1],d=r(en.getFullYear()),m=d[0],f=d[1],h=r("Day"),p={today:o,selectedDay:i,selectedMonth:s,selectedYear:m,calendarType:h[0],setSelectedDay:c,setSelectedMonth:l,setSelectedYear:f,setCalendarType:h[1]};return n.createElement(tn.Provider,{value:p},t)},an=/^[0-9.]*$/,cn=/^(\d{2})\.(\d{2})\.(\d{4})$/,un={Monday:"Mo",Tuesday:"Tu",Wednesday:"We",Thursday:"Th",Friday:"Fr",Saturday:"Sa",Sunday:"Su"};!function(n){n[n.January=0]="January",n[n.February=1]="February",n[n.March=2]="March",n[n.April=3]="April",n[n.May=4]="May",n[n.June=5]="June",n[n.July=6]="July",n[n.August=7]="August",n[n.September=8]="September",n[n.October=9]="October",n[n.November=10]="November",n[n.December=11]="December"}(K||(K={}));var sn,ln,dn,mn,fn,hn,pn,gn,yn,xn,vn,bn,Dn,wn,Sn,En,kn,zn,Tn,Cn,Wn,Mn,Fn,Yn,$n,An,On,Rn,In,Nn,jn,Vn=function(n){if(!n)return(new Date).toDateString();var e=n.getDate().toString().padStart(2,"0"),t=(n.getMonth()+1).toString().padStart(2,"0"),r=n.getFullYear().toString();return"".concat(e,".").concat(t,".").concat(r)},Pn=[{name:"New Year's Day",date:new Date("2024-01-01")},{name:"Orthodox Christmas Day",date:new Date("2024-01-07")},{name:"Defender of the Fatherland Day",date:new Date("2024-02-23")},{name:"International Women's Day",date:new Date("2024-03-08")},{name:"Constitution Day",date:new Date("2024-03-15")},{name:"Day of Unity of the Peoples of Belarus and Russia",date:new Date("2024-04-02")},{name:"International Labour Day",date:new Date("2024-05-01")},{name:"Commemoration Day",date:new Date("2024-05-03")},{name:"Victory Day",date:new Date("2024-05-09")},{name:"Summer Solstice",date:new Date("2024-06-21")},{name:"Independence Day",date:new Date("2024-07-03")},{name:"National Unity Day",date:new Date("2024-09-17")},{name:"Mother's Day",date:new Date("2024-10-14")},{name:"October Revolution Day",date:new Date("2024-11-07")},{name:"Winter Solstice",date:new Date("2024-12-21")},{name:"Christmas Day",date:new Date("2024-12-25")}],Bn=function(n){return 0===n.getDay()||6===n.getDay()},Hn=function(n,e){return K[e]===n},Jn=function(n,e){return!!e&&(n.getDate()===e.getDate()&&n.getMonth()===e.getMonth()&&n.getFullYear()===e.getFullYear())},_n=function(n){return n.split(".").map((function(n){return parseInt(n)}))},Kn=function(n){return Pn.some((function(e){return n.getDate()===e.date.getDate()&&n.getMonth()===e.date.getMonth()}))},Un=function(n,e){return new Date(n,e+1,0).getDate()},Ln=function(n,e,t){var r=Un(e,n),o="Monday"===t,a=function(n,e){return new Date(n,e,1).getDay()}(e,n),i=o?(7+a-1)%7:(7+a)%7,c=function(n,e){return 0===e?{month:11,year:n-1}:{month:e-1,year:n}}(e,n),u=c.month,s=c.year,l=function(n,e){return 11===e?{month:0,year:n+1}:{month:e+1,year:n}}(e,n),d=l.month,m=l.year,f=Un(s,u),h=Array.from({length:i},(function(n,e){return new Date(s,u,f-i+e+1)})),p=Array.from({length:r},(function(t,r){return new Date(e,n,r+1)})),g=r+i,y=7*Math.ceil(g/7)-g,x=Array.from({length:y},(function(n,e){return new Date(m,d,e+1)}));return D(D(D([],h,!0),p,!0),x,!0)},qn=function(n){if(!n)return[];var e=localStorage.getItem(n);return e?JSON.parse(e):[]},Gn=function(n,e){localStorage.setItem(n,JSON.stringify(e))},Qn=function(n){return n.theme.colors.text},Xn=function(n){return n.theme.colors.chosenDay},Zn=function(n){return n.theme.colors.disabledDay},ne=function(n){return n.theme.colors.firstDayRange},ee=function(n){return n.theme.colors.middleDayRange},te=function(n){return n.theme.colors.primary},re=function(n){return n.theme.colors.weekendDay},oe=function(n){return n.theme.colors.holiday},ae=l.div(sn||(sn=w(["\n    position: relative;\n    font-size: ","px;\n    font-weight: ",";\n    text-align: center;\n    padding: "," 6px;\n    max-width: ",";\n    color: ",";\n    background-color: ",";\n    border: 1px solid ",";\n    border-color: ",";\n    border-radius: ",";\n    cursor: pointer;\n\n    &:hover {\n        border: 1px dashed ",";\n    }\n"],["\n    position: relative;\n    font-size: ","px;\n    font-weight: ",";\n    text-align: center;\n    padding: "," 6px;\n    max-width: ",";\n    color: ",";\n    background-color: ",";\n    border: 1px solid ",";\n    border-color: ",";\n    border-radius: ",";\n    cursor: pointer;\n\n    &:hover {\n        border: 1px dashed ",";\n    }\n"])),(function(n){return n.theme.fonts.fontSize.s}),(function(n){return n.theme.fonts.fontWeight.m}),(function(n){return n.theme.gaps.s}),(function(n){return n.theme.sizes.cellSize}),(function(n){return function(n,e,t,r,o){switch(!0){case"Between"===o:return Xn;case"Start"===o:case"End"===o:case t:return te;case r:return oe;case!n:return Zn;case e:return re;default:return Qn}}(n.$isActive,n.$isWeekend,n.$isDaySelected,n.$isHoliday,n.$range)}),(function(n){return function(n,e){switch(!0){case n:return Xn;case"Start"===e:return ne;case"Between"===e:return ee;case"End"===e:return Xn;default:return te}}(n.$isDaySelected,n.$range)}),(function(n){return n.theme.colors.primary}),(function(n){return n.$isToday?function(n){return n.theme.colors.chosenDay}:"none"}),(function(n){var e=n.$range;return e&&"Start"===e?"10px 0 0 10px":"Between"===e?0:"End"===e?"0 10px 10px 0":"10px"}),(function(n){return n.theme.colors.borderDash})),ie=l.div(ln||(ln=w(["\n    position: absolute;\n    left: 40%;\n    top: 2px;\n    width: 6px;\n    height: 6px;\n    border-radius: 50%;\n    border: 1px solid ",";\n    background-color: ",";\n"],["\n    position: absolute;\n    left: 40%;\n    top: 2px;\n    width: 6px;\n    height: 6px;\n    border-radius: 50%;\n    border: 1px solid ",";\n    background-color: ",";\n"])),(function(n){return n.theme.colors.primary}),(function(n){return n.theme.colors.taskMarkColor})),ce=O((function(e){var t,r=e.day,o=e.isActive,i=e.isWeekend,c=void 0!==i&&i,u=e.isToday,s=e.isHoliday,l=void 0!==s&&s,d=e.isWithRange,m=void 0!==d&&d,f=e.isWithSelectedDay,h=void 0!==f&&f,p=e.isWithTasks,g=void 0!==p&&p,y=e.minValue,x=void 0===y?void 0:y,v=e.maxValue,D=void 0===v?void 0:v,w=rn(),S=w.selectedDay,E=w.setSelectedDay,k=w.setSelectedMonth,z=w.setSelectedYear,T=G(),C=T.range,W=T.setRange,M=a((function(){x&&D&&!function(n,e,t){return n.getTime()>=e.getTime()&&n.getTime()<=t.getTime()}(r,x,D)||(m?W((function(n){return function(n,e){if(e&&e.rangeStart){if(e.rangeEnd){var t=new Date(+e.rangeStart),r=new Date(+e.rangeEnd);return n>=t&&n<=r?Math.abs(n.getTime()-t.getTime())<=Math.abs(n.getTime()-r.getTime())?{rangeStart:n,rangeEnd:e.rangeEnd}:{rangeStart:e.rangeStart,rangeEnd:n}:n<t?{rangeStart:n,rangeEnd:e.rangeEnd}:{rangeStart:e.rangeStart,rangeEnd:n}}return n>=e.rangeStart?b(b({},e),{rangeEnd:n}):{rangeStart:n,rangeEnd:e.rangeStart}}return{rangeStart:n,rangeEnd:void 0}}(r,n)})):h&&(o||(k(r.getMonth()),z(r.getFullYear())),E(r)))}),[h,m,o,r,x,D]),F=qn(Vn(r));return n.createElement(ae,{"data-testid":"day-of-week",$isActive:o,$isWeekend:c,$isToday:u,$isHoliday:l,$range:(t=r,function(n,e){var t=e||{},r=t.rangeStart,o=t.rangeEnd;if(r&&n.getTime()===r.getTime())return"Start";if(r&&o){if(n.getTime()===o.getTime())return"End";if(n>r&&n<o)return"Between"}}(t,C)),onClick:M,$isDaySelected:Jn(r,S)},g&&0!==F.length&&n.createElement(ie,null),r.getDate())})),ue=function(n){return n.theme.colors.chosenDay},se=function(n){return n.theme.colors.primary},le=function(n){return n.theme.colors.text},de=l($)(dn||(dn=w(["\n    color: ",";\n    background-color: ",";\n"],["\n    color: ",";\n    background-color: ",";\n"])),(function(n){return n.$isMonthSelected?se:le}),(function(n){return n.$isMonthSelected?ue:se})),me=O((function(e){var t=e.month,r=e.isSelected,o=rn(),i=o.setCalendarType,c=o.setSelectedMonth,u=a((function(){i("Day"),c(function(n){return K[n]}(t))}),[]);return n.createElement(de,{"data-testid":"month-in-grid",$isMonthSelected:r,onClick:u},t)})),fe=l.div(mn||(mn=w(["\n    width: 100%;\n    display: grid;\n    grid-template-columns: repeat(7, 1fr);\n"],["\n    width: 100%;\n    display: grid;\n    grid-template-columns: repeat(7, 1fr);\n"]))),he=l.div(fn||(fn=w(["\n    width: 100%;\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n"],["\n    width: 100%;\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n"]))),pe=l.div(hn||(hn=w(["\n    width: 100%;\n    display: grid;\n    grid-template-columns: repeat(4, 1fr);\n"],["\n    width: 100%;\n    display: grid;\n    grid-template-columns: repeat(4, 1fr);\n"]))),ge=function(n){return n.theme.colors.chosenDay},ye=function(n){return n.theme.colors.primary},xe=function(n){return n.theme.colors.text},ve=l($)(pn||(pn=w(["\n    color: ",";\n    background-color: ",";\n"],["\n    color: ",";\n    background-color: ",";\n"])),(function(n){return n.$isYearSelected?ye:xe}),(function(n){return n.$isYearSelected?ge:ye})),be=O((function(e){var t=e.year,r=e.isSelected,o=rn(),i=o.setCalendarType,c=o.setSelectedYear,u=a((function(){i("Day"),c(t)}),[]);return n.createElement(ve,{"data-testid":"year-in-grid",$isYearSelected:r,onClick:u},t)})),De=function(e){var t=e.isHolidayDate,r=e.isWithRange,o=e.isDayWeekend,a=e.isWithSelectedDay,c=e.isSundayFirst,u=void 0!==c&&c,s=e.isWithTasks,l=e.minValue,d=e.maxValue,m=rn(),f=m.today,h=m.selectedMonth,p=m.selectedYear,g=m.calendarType,y=u?"Sunday":"Monday",x=i((function(){if("Day"===g)return Ln(h,p,y)}),[g,p,h,y]),v=i((function(){if("Month"===g)return Object.values(K).filter((function(n){return"string"==typeof n}))}),[g,h]),b=i((function(){if("Year"===g)return function(n){for(var e=[],t=n-10;t<n+10;t++)e.push(t);return e}(p)}),[g,p]);return n.createElement(n.Fragment,null,x&&n.createElement(fe,{"data-testid":"data-grid-container"},x.map((function(e){return n.createElement(ce,{key:e.getTime(),day:e,isActive:(i=e,c=h,u=p,i.getMonth()===c&&i.getFullYear()===u),isWeekend:o&&o(e),isToday:Jn(e,f),isHoliday:t&&t(e),isWithRange:r,isWithSelectedDay:a,isWithTasks:s,minValue:l,maxValue:d});var i,c,u}))),v&&n.createElement(he,null,v.map((function(e){return n.createElement(me,{key:e,month:e,isSelected:Hn(e,h)})}))),b&&n.createElement(pe,null,b.map((function(e){return n.createElement(be,{key:e,year:e,isSelected:e===p})}))))},we=l.span(gn||(gn=w(["\n    text-align: center;\n    font-size: ","px;\n    font-weight: ",";\n    padding: "," 6px;\n"],["\n    text-align: center;\n    font-size: ","px;\n    font-weight: ",";\n    padding: "," 6px;\n"])),(function(n){return n.theme.fonts.fontSize.m}),(function(n){return n.theme.fonts.fontWeight.l}),(function(n){return n.theme.gaps.s})),Se=function(e){var t=e.day;return n.createElement(we,null,t)},Ee=l.div(yn||(yn=w(["\n    display: grid;\n    grid-template-columns: repeat(7, ",");\n"],["\n    display: grid;\n    grid-template-columns: repeat(7, ",");\n"])),(function(n){return n.theme.sizes.cellSize})),ke=O((function(e){var t=e.isSundayFirst,r=void 0!==t&&t,o=i((function(){var n=Object.values(un);return r?D([n[6]],n.slice(0,6),!0):n}),[]);return n.createElement(Ee,null,o.map((function(e){return n.createElement(Se,{key:e,day:e})})))})),ze=l.div(xn||(xn=w(["\n    width: 100%;\n    ",";\n    padding: "," 0;\n"],["\n    width: 100%;\n    ",";\n    padding: "," 0;\n"])),I,(function(n){return n.theme.gaps.m})),Te=l.img(vn||(vn=w(["\n    color: ",";\n    cursor: pointer;\n"],["\n    color: ",";\n    cursor: pointer;\n"])),(function(n){return n.theme.colors.month})),Ce=l.h3(bn||(bn=w(["\n    font-family: ",";\n    font-size: ","px;\n    font-weight: ",";\n    color: ",";\n    cursor: pointer;\n"],["\n    font-family: ",";\n    font-size: ","px;\n    font-weight: ",";\n    color: ",";\n    cursor: pointer;\n"])),(function(n){return n.theme.fonts.fontFamily.openSans}),(function(n){return n.theme.fonts.fontSize.m}),(function(n){return n.theme.fonts.fontWeight.l}),(function(n){return n.theme.colors.month})),We=l.span(Dn||(Dn=w(["\n    &:hover {\n        color: ",";\n    }\n"],["\n    &:hover {\n        color: ",";\n    }\n"])),(function(n){return n.theme.colors.chosenDay})),Me=l.span(wn||(wn=w(["\n    &:hover {\n        color: ",";\n    }\n"],["\n    &:hover {\n        color: ",";\n    }\n"])),(function(n){return n.theme.colors.chosenDay})),Fe=function(){var e=rn(),t=e.selectedMonth,r=e.selectedYear,o=e.calendarType,i=e.setSelectedMonth,c=e.setSelectedYear,u=e.setCalendarType,s=a((function(n){return function(){if("Day"===o){var e,a=r;if("next"===n)(e=(t+1)%12)<t&&(a++,c(a)),i(e);else(e=(t+11)%12)>t&&(a--,c(a)),i(e)}"Year"===o&&c("next"===n?r+20:r-20)}}),[o,t,r]),l=a((function(){u("Month")}),[]),d=a((function(){u("Year")}),[]);return n.createElement(ze,{"data-testid":"month-slider"},n.createElement(Te,{src:p,alt:"prevMonth",onClick:s("prev")}),n.createElement(Ce,null,"Day"===o?n.createElement(n.Fragment,null,n.createElement(We,{onClick:l},K[t]," "),n.createElement(Me,{onClick:d},r)):"Month"===o?n.createElement(We,null,"Months"):n.createElement(We,null,r-10," - ",r+9)),n.createElement(Te,{src:h,alt:"nextMonth",onClick:s("next")}))},Ye=l.div(Sn||(Sn=w(["\n    ",";\n    width: 100%;\n    max-width: ",";\n    flex-direction: column;\n    border: 1px solid ",";\n    border-radius: ",";\n    padding: ",";\n"],["\n    ",";\n    width: 100%;\n    max-width: ",";\n    flex-direction: column;\n    border: 1px solid ",";\n    border-radius: ",";\n    padding: ",";\n"])),R,(function(n){return n.theme.sizes.calendarWidth}),(function(n){return n.theme.colors.border}),(function(n){var e=n.theme,t=n.$isRangeExist,r=n.$isWithTasks;return t||r?"".concat(e.gaps.s," ").concat(e.gaps.s," 0 0"):e.gaps.s}),(function(n){return n.theme.gaps.m})),$e=O((function(e){var t=e.isHolidayDate,r=e.isWithRange,o=e.isDayWeekend,i=e.isWithSelectedDay,c=e.isSundayFirst,u=e.isWithTasks,s=e.minValue,l=e.maxValue,d=G(),m=d.range,f=d.setRange,h=a((function(){f(void 0)}),[f]),p=r&&!!(null==m?void 0:m.rangeStart)&&!!(null==m?void 0:m.rangeEnd);return n.createElement(L,null,n.createElement(Ye,{$isRangeExist:p,$isWithTasks:u,"data-testid":"calendar"},n.createElement(Fe,null),n.createElement(ke,{isSundayFirst:c}),n.createElement(De,{isHolidayDate:t,isWithRange:r,isWithSelectedDay:i,isSundayFirst:c,isDayWeekend:o,isWithTasks:u,minValue:s,maxValue:l})),p&&n.createElement(nn,{text:"Clear Interval",onButtonClick:h}))})),Ae=function(){function n(){this.calendar=$e}return n.prototype.addDecorator=function(n){this.calendar=n(this.calendar)},n.prototype.getCalendar=function(){return this.calendar},n}(),Oe=function(e){var t=function(t){return n.createElement(e,b({},t,{isHolidayDate:Kn}))},r=e.displayName||e.name;return t.displayName="withHolidays(".concat(r,")"),t},Re=function(e){var t=function(t){return n.createElement(e,b({},t,{isWithRange:!0}))},r=e.displayName||e.name;return t.displayName="withRange(".concat(r,")"),t},Ie=function(e){var t=function(t){return n.createElement(e,b({},t,{isWithSelectedDay:!0}))},r=e.displayName||e.name;return t.displayName="withSelectedDay(".concat(r,")"),t},Ne=function(e){var t=function(t){return n.createElement(e,b({},t,{isSundayFirst:!0}))},r=e.displayName||e.name;return t.displayName="withSundayFirst(".concat(r,")"),t},je=l.div(En||(En=w(["\n    ",";\n    gap: ",";\n    width: 100%;\n    margin-bottom: ",";\n"],["\n    ",";\n    gap: ",";\n    width: 100%;\n    margin-bottom: ",";\n"])),R,(function(n){return n.theme.gaps.s}),(function(n){return n.theme.gaps.l})),Ve=l.input(kn||(kn=w(["\n    font-size: ","px;\n    font-weight: ",";\n    margin: "," 0;\n    padding: ",";\n    border: 1px solid ",";\n    border-radius: ",";\n    background: transparent;\n    flex: 1;\n"],["\n    font-size: ","px;\n    font-weight: ",";\n    margin: "," 0;\n    padding: ",";\n    border: 1px solid ",";\n    border-radius: ",";\n    background: transparent;\n    flex: 1;\n"])),(function(n){return n.theme.fonts.fontSize.xl}),(function(n){return n.theme.fonts.fontWeight.m}),(function(n){return n.theme.gaps.s}),(function(n){return n.theme.gaps.s}),(function(n){return n.theme.colors.disabledDay}),(function(n){return n.theme.gaps.xs})),Pe=l.button(zn||(zn=w(["\n    ",";\n    font-weight: ",";\n    padding: ",";\n    border: 1px solid ",";\n    border-radius: ",";\n    background: ",";\n    transition: all 0.3s;\n    cursor: pointer;\n\n    &:hover {\n        background: ",";\n    }\n\n    &:active {\n        background: ",";\n    }\n"],["\n    ",";\n    font-weight: ",";\n    padding: ",";\n    border: 1px solid ",";\n    border-radius: ",";\n    background: ",";\n    transition: all 0.3s;\n    cursor: pointer;\n\n    &:hover {\n        background: ",";\n    }\n\n    &:active {\n        background: ",";\n    }\n"])),R,(function(n){return n.theme.fonts.fontWeight.m}),(function(n){return n.theme.gaps.m}),(function(n){return n.theme.colors.disabledDay}),(function(n){return n.theme.gaps.xs}),(function(n){return n.theme.colors.primary}),(function(n){return n.theme.colors.middleDayRange}),(function(n){return n.theme.colors.disabledDay})),Be=c((function(e){var t=e.taskText,r=e.onChange,o=e.onAdd;return n.createElement(je,null,n.createElement(Ve,{type:"text",placeholder:"Input new task",value:t,onChange:r,onKeyDown:function(n){"Enter"===n.key&&o()}}),n.createElement(Pe,{onClick:o},"Add Task"))})),He=l.div(Tn||(Tn=w(["\n    ",";\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100vw;\n    height: 100vh;\n    z-index: 1000;\n"],["\n    ",";\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100vw;\n    height: 100vh;\n    z-index: 1000;\n"])),R),Je=l.div(Cn||(Cn=w(["\n    ",";\n    flex-direction: column;\n    position: relative;\n    width: ",";\n    padding: 40px "," 20px;\n    border: 1px solid ",";\n    border-radius: ",";\n    box-shadow: "," 0 6px 10px -2px;\n    background: ",";\n"],["\n    ",";\n    flex-direction: column;\n    position: relative;\n    width: ",";\n    padding: 40px "," 20px;\n    border: 1px solid ",";\n    border-radius: ",";\n    box-shadow: "," 0 6px 10px -2px;\n    background: ",";\n"])),R,(function(n){return n.theme.sizes.modalSize}),(function(n){return n.theme.gaps.l}),(function(n){return n.theme.colors.chosenDay}),(function(n){return n.theme.gaps.m}),(function(n){return n.theme.colors.text}),(function(n){return n.theme.colors.primary})),_e=l.button(Wn||(Wn=w(["\n    font-size: 50px;\n    position: absolute;\n    top: -5px;\n    right: 8px;\n    background: none;\n    border: none;\n    color: ",";\n    transition: color 0.3s;\n    cursor: pointer;\n\n    &:hover {\n        color: ",";\n    }\n"],["\n    font-size: 50px;\n    position: absolute;\n    top: -5px;\n    right: 8px;\n    background: none;\n    border: none;\n    color: ",";\n    transition: color 0.3s;\n    cursor: pointer;\n\n    &:hover {\n        color: ",";\n    }\n"])),(function(n){return n.theme.colors.text}),(function(n){return n.theme.colors.errorText})),Ke=l.h2(Mn||(Mn=w(["\n    font-size: ","px;\n    font-weight: ",";\n    margin-bottom: ",";\n"],["\n    font-size: ","px;\n    font-weight: ",";\n    margin-bottom: ",";\n"])),(function(n){return n.theme.fonts.fontSize.xxl}),(function(n){return n.theme.fonts.fontWeight.m}),(function(n){return n.theme.gaps.l})),Ue=l.div(Fn||(Fn=w(["\n    width: 100%;\n    padding: 0 ",";\n    max-height: 50vh;\n    overflow-y: auto;\n"],["\n    width: 100%;\n    padding: 0 ",";\n    max-height: 50vh;\n    overflow-y: auto;\n"])),(function(n){return n.theme.gaps.s})),Le=l.div(Yn||(Yn=w(["\n    ",";\n    width: 100%;\n    gap: ",";\n    margin-bottom: ",";\n"],["\n    ",";\n    width: 100%;\n    gap: ",";\n    margin-bottom: ",";\n"])),I,(function(n){return n.theme.gaps.s}),(function(n){return n.theme.gaps.s})),qe=l.p($n||($n=w(["\n    font-size: ","px;\n    font-weight: ",";\n    text-decoration: ",";\n    flex: 1;\n"],["\n    font-size: ","px;\n    font-weight: ",";\n    text-decoration: ",";\n    flex: 1;\n"])),(function(n){return n.theme.fonts.fontSize.xl}),(function(n){return n.theme.fonts.fontWeight.m}),(function(n){return n.$isCompleted?"line-through":"none"})),Ge=l.button(An||(An=w(["\n    flex: 0;\n    ",";\n    font-weight: ",";\n    padding: ",";\n    border: 1px solid ",";\n    border-radius: ",";\n    background: ",";\n    transition: all 0.3s;\n    cursor: pointer;\n\n    &:hover {\n        background: ",";\n    }\n\n    &:active {\n        background: ",";\n    }\n"],["\n    flex: 0;\n    ",";\n    font-weight: ",";\n    padding: ",";\n    border: 1px solid ",";\n    border-radius: ",";\n    background: ",";\n    transition: all 0.3s;\n    cursor: pointer;\n\n    &:hover {\n        background: ",";\n    }\n\n    &:active {\n        background: ",";\n    }\n"])),R,(function(n){return n.theme.fonts.fontWeight.m}),(function(n){return n.theme.gaps.s}),(function(n){return n.theme.colors.disabledDay}),(function(n){return n.theme.gaps.xs}),(function(n){return n.theme.colors.primary}),(function(n){return n.theme.colors.middleDayRange}),(function(n){return n.theme.colors.disabledDay})),Qe=c((function(e){var t=e.task,r=e.setTasks,o=t.id,a=t.text,i=t.isCompleted,c=rn().selectedDay,u=Vn(c);return n.createElement(Le,null,n.createElement("input",{type:"checkbox",checked:i,onChange:function(){var n=qn(u).map((function(n){return n.id===o?b(b({},n),{isCompleted:!n.isCompleted}):n}));r(n),Gn(u,n)}}),n.createElement(qe,{$isCompleted:i},a),n.createElement(Ge,{onClick:function(){var n=qn(u).filter((function(n){return n.id!==o}));r(n),0===n.length?function(n){localStorage.removeItem(n)}(u):Gn(u,n)}},"Delete"))})),Xe=O((function(e){var t=e.onClose,o=r(""),i=o[0],c=o[1],s=r([]),l=s[0],d=s[1],m=rn().selectedDay,f=Vn(m||new Date);u((function(){var n=qn(f);n&&d(n)}),[m]);var h=a((function(n){c(n.target.value)}),[]),p=a((function(){if(""!==i.trim()){var n=D([],l,!0),e={id:String((new Date).getTime()),text:i,isCompleted:!1};n.push(e),d(n),Gn(f,n),c("")}}),[i,f]);return g.createPortal(n.createElement(He,null,n.createElement(Je,{"data-testid":"modal"},n.createElement(_e,{onClick:t},"×"),n.createElement(Ke,null,"Tasks for ",f),n.createElement(Be,{taskText:i,onChange:h,onAdd:p}),n.createElement(Ue,null,0!==l.length?l.map((function(e){return n.createElement(Qe,{key:e.id,task:e,setTasks:d})})):"Your tasks will be here"))),document.body)})),Ze=function(e){var t=function(t){var o=r(!1),i=o[0],c=o[1],u=rn().selectedDay,s=a((function(){c((function(n){return!n}))}),[]);return n.createElement(n.Fragment,null,n.createElement(e,b({},t,{isWithTasks:!0})),u&&n.createElement(nn,{text:"Add task",onButtonClick:s}),i&&n.createElement(Xe,{onClose:s}))},o=e.displayName||e.name;return t.displayName="withTasks(".concat(o,")"),t},nt=function(e){var t=function(t){return n.createElement(e,b({},t,{isDayWeekend:Bn}))},r=e.displayName||e.name;return t.displayName="withWeekendsDays(".concat(r,")"),t},et=l.input(On||(On=w(["\n    font-size: ","px;\n    width: 100%;\n    border: none;\n    background: transparent;\n"],["\n    font-size: ","px;\n    width: 100%;\n    border: none;\n    background: transparent;\n"])),(function(n){return n.theme.fonts.fontSize.l})),tt=O((function(e){var t=rn(),r=t.setSelectedDay,o=t.setSelectedMonth,i=t.setSelectedYear,c=e.inputText,u=e.setInputText,s=e.setIsCalendarOpen,l=e.setInvalidInputError,d=a((function(n){var e=n.target.value;if(l(""),!an.test(e))return n.preventDefault(),void l("Date should be in format: dd.mm.yyyy");e.length>10?n.preventDefault():u(e)}),[c]),m=a((function(n){var e,t=n.target.value;if("Enter"===n.key){if(e=t,!cn.test(e))return void l("Date should be in format: dd.mm.yyyy");if(!function(n){var e=_n(n),t=e[0],r=e[1],o=e[2],a=new Date(o,r-1,t),i=a.getDate()===t,c=a.getMonth()===r-1,u=a.getFullYear()===o;return i&&c&&u}(t))return void l("It seems this date doesn't exist :(");var a=_n(t),c=a[0],u=a[1],s=a[2],d=new Date(s,u-1,c);i(s),o(u-1),r(d)}}),[]),f=a((function(){s(!0)}),[]);return n.createElement(et,{placeholder:"DD.MM.YYYY",type:"text",value:c,onChange:d,onKeyDown:m,onFocus:f})})),rt=function(n){return n.theme.gaps.s},ot=l.section(Rn||(Rn=w(["\n    display: flex;\n    flex-direction: column;\n    max-width: ",";\n"],["\n    display: flex;\n    flex-direction: column;\n    max-width: ",";\n"])),(function(n){return n.theme.sizes.calendarWidth})),at=l.div(In||(In=w(["\n    ",";\n    padding: "," ",";\n    border: 1px solid ",";\n    border-radius: ",";\n    gap: ",";\n    margin: "," auto;\n"],["\n    ",";\n    padding: "," ",";\n    border: 1px solid ",";\n    border-radius: ",";\n    gap: ",";\n    margin: "," auto;\n"])),R,rt,(function(n){return n.theme.gaps.xm}),(function(n){return n.theme.colors.border}),rt,rt,rt),it=l.div(Nn||(Nn=w([""],[""]))),ct=l.p(jn||(jn=w(["\n    font-size: 12px;\n    color: red;\n"],["\n    font-size: 12px;\n    color: red;\n"]))),ut=O((function(e){var t=e.CalendarView,o=r(""),a=o[0],i=o[1],c=r(!1),u=c[0],s=c[1],l=r(""),d=l[0],m=l[1];return n.createElement(on,null,n.createElement(ot,{"data-testid":"date-picker"},n.createElement(it,null,n.createElement("p",null,"Date"),d&&n.createElement(ct,null,d)),n.createElement(at,null,n.createElement(Y,{src:y,alt:"Toggle calendar",onClick:function(){s((function(n){return!n}))},"data-testid":"calendar-icon-button"}),n.createElement(tt,{inputText:a,setInputText:i,setIsCalendarOpen:s,setInvalidInputError:m}),n.createElement(Y,{src:x,alt:"Clear text",onClick:function(){i("")}})),u&&n.createElement(t,null)))}));export{on as CalendarProvider,ut as DatePicker,Q as RangeProvider,Ae as UtilityCalendar,Oe as withHolidays,Re as withRange,Ie as withSelectedDay,Ne as withSundayFirst,Ze as withTasks,nt as withWeekends};
//# sourceMappingURL=index.es.js.map
