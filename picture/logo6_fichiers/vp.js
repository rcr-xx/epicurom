                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                

if(!window.__td){window.__MT=100;window.__ti=0;window.__td=[];window.__td.length=__MT;window.__noTrace=false;}
if(typeof vp=="undefined"){var vp={};}
vp.hoverpop=function hoverpop(){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}};vp.hoverpop.show=function hoverpop_show(popUpId,centerOnPage)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
vp.hoverpop.showSpecified(popUpId,centerOnPage,true);};vp.hoverpop.showSpecified=function hoverpop_showSpecified(popUpId,centerOnPage,appendPopElement)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var oMask=document.getElementById("divPageMask");if(oMask)
{var htmlHeight=(document.documentElement&&document.documentElement.scrollHeight)?document.documentElement.scrollHeight:0;var bodyHeight=Math.max(document.body.scrollHeight,document.body.offsetHeight);var height=Math.max(htmlHeight,bodyHeight);vp.ui.setHeight(oMask,height);vp.ui.show(oMask);}
var oLayer=document.getElementById(popUpId);if(oLayer){if(appendPopElement)
{document.body.appendChild(oLayer);}
vp.ui.show(oLayer);oLayer.style.display='block';}
var divPageOuter=document.getElementById("divPageOuter");var cSelects=divPageOuter?divPageOuter.getElementsByTagName("select"):document.getElementsByTagName("select");for(var i=0;i<cSelects.length;i++){vp.ui.hide(cSelects[i]);}
if(!appendPopElement)
{vp.ui.moveTo(popUpId,0,0);}
else if(centerOnPage)
{vp.ui.centerElement(popUpId);}};vp.hoverpop.hide=function hoverpop_hide(popUpId)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
vp.hoverpop.hideSpecified(popUpId,true);};vp.hoverpop.hideSpecified=function hoverpop_hideSpecified(popUpId,appendPopElement){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var oLayer=document.getElementById(popUpId);if(oLayer){vp.ui.hide(oLayer);if(appendPopElement)
{document.body.appendChild(oLayer);}
oLayer=document.getElementById(popUpId);vp.ui.hide(oLayer);}
var iFrame=vp.ui.get('iFramePopUp');if(iFrame)
{iFrame.style.display='none';}
var oMask=document.getElementById("divPageMask");if(oMask){vp.ui.hide(oMask);}
var divPageOuter=document.getElementById("divPageOuter");var cSelects=divPageOuter?divPageOuter.getElementsByTagName("select"):document.getElementsByTagName("select");for(var i=0;i<cSelects.length;i++){vp.ui.show(cSelects[i]);}};vp.livepreviewpop=function livepreviewpop(){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}};vp.livepreviewpop.loadImage=function livepreviewpop_loadImage(url,width,imageId)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var oImage=document.getElementById(imageId);var oUrl=new vp.web.URL(url);oUrl.setItem('width',width);oImage.width=width;oImage.src=oUrl.toString();};