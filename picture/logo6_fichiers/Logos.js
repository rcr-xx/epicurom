                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                

if(!window.__td){window.__MT=100;window.__ti=0;window.__td=[];window.__td.length=__MT;window.__noTrace=false;}if(typeof(vp)=="undefined"){var vp={};}
if(!vp.logo){vp.logo={};}
(function()
{var selectedId=-1;function updateQueryParameter(key,value)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var currentUrl=window.location.href.toString();var baseRegExp=key+"=-?[0-9|]*";if(!currentUrl.match(new RegExp("[&?]"+baseRegExp)))
{var attachChar="&";if(!currentUrl.match(/[?]/))
{attachChar="?";}
else if(currentUrl.match(/[?]$/))
{attachChar="";}
return currentUrl+attachChar+key+"="+value;}
if(currentUrl.match(new RegExp("[?]"+baseRegExp)))
{return currentUrl.replace(new RegExp("[?]"+baseRegExp),"?"+key+"="+value);}
return currentUrl.replace(new RegExp("[&]"+baseRegExp),"&"+key+"="+value);}
vp.logo.setSelectId=function logo_setSelectId(id)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(document.getElementById("logo_"+selectedId))
{document.getElementById("logo_"+selectedId).className='icon-not-selected';}
if(document.getElementById("logo_"+id))
{document.getElementById("logo_"+id).className='icon-selected';}
selectedId=id;};vp.logo.getSelectedId=function logo_getSelectedId(){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
return selectedId;};vp.logo.setColorEffect=function logo_setColorEffect(colorEffectId)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
window.location.href=updateQueryParameter("cfid",colorEffectId);};vp.logo.setExtraColorEffect=function logo_setExtraColorEffect()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var dingbats=document.getElementById("diff_dingbats").checked;var initials=document.getElementById("diff_initials").checked;var outline=document.getElementById("diff_outline").checked;var finaleffect=Number(dingbats)+"|"+Number(initials)+"|"+Number(outline)+"|0|0";window.location.href=updateQueryParameter("xcf",finaleffect);};vp.logo.modalPopup=function logo_modalPopup(url,title,width,height)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
vp.dialog.IFrameDialog.open("logomodal"+(new Date()).getTime()+Math.random(),title,url,vp.dialog.chrome.Primary,width,height);return false;};})();function submitAndRedirectTo(i_targetUrl)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
vp.forms.setValue("target",i_targetUrl);var pageForm=vp.ui.get("logoFrm");if(pageForm!==null)
{pageForm.submit();}
else
{location.href=i_targetUrl;}}
function onMouseOverItem(choice)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(document.getElementById("logo_"+choice)){document.getElementById("logo_"+choice).className='icon-selected';}
if(document.getElementById("view-on-product"+choice)){document.getElementById("view-on-product"+choice).className='view-on-product-visible';}}
function onMouseOutItem(choice)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(vp.logo.getSelectedId()===parseInt(choice)){return;}
if(document.getElementById("logo_"+choice)){document.getElementById("logo_"+choice).className='icon-not-selected';}
if(document.getElementById("view-on-product"+choice)){document.getElementById("view-on-product"+choice).className='view-on-product-invisible';}}
function setCategory(in_categoryID)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
document.getElementById("category_id").value=in_categoryID;dropdowns=document.getElementsByName("dpop-categories-drop");var i;for(i=0;i<dropdowns.length;i++){dropdowns[i].value=-4;}
document.getElementById("logoFrm").submit();return true;}
function DHTMLsetCategory(cat)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(cat===7)
{return;}
setTimeout(function(){setCategory(cat);},100);}
function showLoadingIndicator(imgId,imgUrl)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var imgObj=new Image();imgObj.onload=function()
{var displayImg=document.getElementById(imgId);displayImg.src=imgUrl;};imgObj.src=imgUrl;}