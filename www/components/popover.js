(function framework7ComponentLoader(o,e){void 0===e&&(e=!0);document,window;var t=o.$,r=(o.Template7,o.utils),p=(o.device,o.support,o.Class,o.Modal),a=(o.ConstructorMethods,o.ModalMethods),n=function(o){function e(e,p){var a=r.extend({on:{}},e.params.popover,p);o.call(this,e,a);var n,s=this;if(s.params=a,(n=s.params.el?t(s.params.el):t(s.params.content))&&n.length>0&&n[0].f7Modal)return n[0].f7Modal;var l,i,c=t(s.params.targetEl).eq(0);if(0===n.length)return s.destroy();s.params.backdrop&&0===(l=e.root.children(".popover-backdrop")).length&&(l=t('<div class="popover-backdrop"></div>'),e.root.append(l)),0===n.find(".popover-angle").length?(i=t('<div class="popover-angle"></div>'),n.prepend(i)):i=n.find(".popover-angle");var d=s.open;function h(){s.resize()}function m(o){var e=o.target;0===t(e).closest(s.el).length&&(s.params.closeByBackdropClick&&s.params.backdrop&&s.backdropEl&&s.backdropEl===e?s.close():s.params.closeByOutsideClick&&s.close())}return r.extend(s,{app:e,$el:n,el:n[0],$targetEl:c,targetEl:c[0],$angleEl:i,angleEl:i[0],$backdropEl:l,backdropEl:l&&l[0],type:"popover",open:function(){for(var o,e=[],r=arguments.length;r--;)e[r]=arguments[r];var p=e[0],a=e[1];return"boolean"==typeof e[0]&&(a=(o=e)[0],p=o[1]),p&&(s.$targetEl=t(p),s.targetEl=s.$targetEl[0]),d.call(s,a)}}),s.on("popoverOpen",function(){s.resize(),e.on("resize",h),s.on("popoverClose popoverBeforeDestroy",function(){e.off("resize",h)})}),s.on("popoverOpened",function(){(s.params.closeByOutsideClick||s.params.closeByBackdropClick)&&e.on("click",m)}),s.on("popoverClose",function(){(s.params.closeByOutsideClick||s.params.closeByBackdropClick)&&e.off("click",m)}),n[0].f7Modal=s,s}return o&&(e.__proto__=o),e.prototype=Object.create(o&&o.prototype),e.prototype.constructor=e,e.prototype.resize=function(){var o=this.app,e=this.$el,t=this.$targetEl,r=this.$angleEl,p=this.params,a=p.targetX,n=p.targetY;e.css({left:"",top:""});var s,l,i,c,d,h,m=[e.width(),e.height()],v=m[0],f=m[1],u=0;if("ios"===o.theme||"aurora"===o.theme?(r.removeClass("on-left on-right on-top on-bottom").css({left:"",top:""}),u=r.width()/2):e.removeClass("popover-on-left popover-on-right popover-on-top popover-on-bottom").css({left:"",top:""}),t&&t.length>0){i=t.outerWidth(),c=t.outerHeight();var g=t.offset();d=g.left-o.left,h=g.top-o.top;var k=t.parents(".page");k.length>0&&(h-=k[0].scrollTop)}else void 0!==a&&"undefined"!==n&&(d=a,h=n,i=this.params.targetWidth||0,c=this.params.targetHeight||0);var b=[0,0,0],C=b[0],y=b[1],E=b[2],M="md"===o.theme?"bottom":"top";"md"===o.theme?(f<o.height-h-c?(M="bottom",y=h):f<h?(y=h-f+c,M="top"):(M="bottom",y=h),y<=0?y=8:y+f>=o.height&&(y=o.height-f-8),(C=d+i-v-8)+v>=o.width-8&&(C=d+i-v-8),C<8&&(C=8),"top"===M&&e.addClass("popover-on-top"),"bottom"===M&&e.addClass("popover-on-bottom")):(f+u<h?y=h-f-u:f+u<o.height-h-c?(M="bottom",y=h+c+u):(M="middle",E=y=c/2+h-f/2,y<=0?y=5:y+f>=o.height&&(y=o.height-f-5),E-=y),"top"===M||"bottom"===M?(E=C=i/2+d-v/2,C<5&&(C=5),C+v>o.width&&(C=o.width-v-5),C<0&&(C=0),"top"===M&&r.addClass("on-bottom"),"bottom"===M&&r.addClass("on-top"),s=v/2-u+(E-=C),s=Math.max(Math.min(s,v-2*u-13),13),r.css({left:s+"px"})):"middle"===M&&(C=d-v-u,r.addClass("on-right"),(C<5||C+v>o.width)&&(C<5&&(C=d+i+u),C+v>o.width&&(C=o.width-v-5),r.removeClass("on-right").addClass("on-left")),l=f/2-u+E,l=Math.max(Math.min(l,f-2*u-13),13),r.css({top:l+"px"}))),e.css({top:y+"px",left:C+"px"})},e}(p),s={name:"popover",params:{popover:{closeByBackdropClick:!0,closeByOutsideClick:!0,backdrop:!0}},static:{Popover:n},create:function(){var o=this;o.popover=r.extend(a({app:o,constructor:n,defaultSelector:".popover.modal-in"}),{open:function(e,r,p){var a=t(e),s=a[0].f7Modal;return s||(s=new n(o,{el:a,targetEl:r})),s.open(r,p)}})},clicks:{".popover-open":function(o,e){void 0===e&&(e={});this.popover.open(e.popover,o,e.animate)},".popover-close":function(o,e){void 0===e&&(e={});this.popover.close(e.popover,e.animate)}}};if(e){if(o.prototype.modules&&o.prototype.modules[s.name])return;o.use(s),o.instance&&(o.instance.useModuleParams(s,o.instance.params),o.instance.useModule(s))}return s}(Framework7, typeof Framework7AutoInstallComponent === 'undefined' ? undefined : Framework7AutoInstallComponent))
