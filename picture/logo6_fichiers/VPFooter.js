                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                

if(!window.__td){window.__MT=100;window.__ti=0;window.__td=[];window.__td.length=__MT;window.__noTrace=false;}
function ToggleFooterMenu(menuName)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var ele=document.getElementById(menuName);var displayVal=ele.style.display;if(displayVal=="none")
{ele.style.display="block";}
else
{ele.style.display="none";}}
function toggleCountrySubLink(sId)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var selectedElem=vp.ui.get(sId);var countryElems=vp.ui.getBySelector("div.country-sub-item");for(i=0;i<countryElems.length;i++)
{if(!vp.ui.isCollapsed(countryElems[i])&&countryElems[i]!=selectedElem)
{vp.ui.collapse(countryElems[i]);}}
vp.ui.toggleDisplay(selectedElem,true);return false;}