window.addEventListener("DOMContentLoaded",function(){$(".drop-toggle").on("click",function(){$(this).closest(".drop-panel").toggleClass("showDrop")}),$(".drop-panel").on("click",function(e){(e||window.event).stopPropagation()})}),window.addEventListener("click",function(){$(".drop-panel").removeClass("showDrop")}),window.Element&&(Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector),Element.prototype.closest||(Element.prototype.closest=function(e){var t=this;if(!document.documentElement.contains(t))return null;do{if(t.matches(e))return t;t=t.parentElement}while(null!==t);return null})),document.addEventListener("click",function(e){var t=e.target,o=t.closest(".vshow");t.classList.contains("vshow")||(t=o),t&&t.classList.toggle("on")},!1);