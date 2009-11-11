                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                

if(!window.__td){window.__MT=100;window.__ti=0;window.__td=[];window.__td.length=__MT;window.__noTrace=false;}
if(typeof vp=="undefined"){var vp={};}
if(!vp.controls)
{vp.controls={};}
vp.controls.TabStrip=function controls_TabStrip(vElement)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var me=this;var _aTabs=[];this._selectedTabSkinData=null;this._unselectedTabSkinData=null;this._selectedTabStyle=null;this._unselectedTabStyle=null;this.element=vp.ui.get(vElement);this.ontabchange=new vp.events.CustomEvent(this,"ontabchange");this.onbeforetabchange=new vp.events.CustomEvent(this,"onbeforetabchange");this.getTabs=function pb_this_getTabs()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
return _aTabs;};this.getSelectedTab=function pb_this_getSelectedTab()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
return _oSelectedTab;};var _oSelectedTab=null;var tabBeforeSelectHandler=function pv_tabBeforeSelectHandler(e)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
e.selectedTab=this;e.previousTab=_oSelectedTab;me.onbeforetabchange.fire(e);};var tabSelectHandler=function pv_tabSelectHandler(e)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var oPreviousTab=_oSelectedTab;var oNewTab=this;e.selectedTab=this;e.previousTab=_oSelectedTab;oPreviousTab.setSelected(false);_oSelectedTab=this;storeSelectedIndexForPostback(_oSelectedTab.tabStripIndex);me.ontabchange.fire(e);};var storeSelectedIndexForPostback=function pv_storeSelectedIndexForPostback(iValue)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var sId=me.element.getAttribute("selected-index-element-id");if(!sId)
{return;}
var oElem=document.getElementById(sId);if(oElem)
{oElem.value=iValue;}};var ensureConsistentTabHeights=function pv_ensureConsistentTabHeights(e)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var iMaxHeight=0;var i;for(i=0;i<_aTabs.length;i++)
{iMaxHeight=Math.max(_aTabs[i].element.offsetHeight,iMaxHeight);}
for(i=0;i<_aTabs.length;i++)
{if(_aTabs[i].element.offsetHeight<iMaxHeight)
{_aTabs[i].element.style.height=iMaxHeight+"px";}}};var init=function pv_init()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var oTabElements=vp.ui.collectElementsByAttribute(me.element,"tab-item");for(var oTabElement in oTabElements)
{var oTab=new vp.controls.Tab(oTabElement,me);_aTabs.push(oTab);oTab.onbeforeselect.addHandler(tabBeforeSelectHandler);oTab.onselect.addHandler(tabSelectHandler);if(oTab.isSelected())
{_oSelectedTab=oTab;}}
me._selectedTabSkinData=me.element.getAttribute("selected-tab-skin-data");me._unselectedTabSkinData=me.element.getAttribute("unselected-tab-skin-data");me._selectedTabStyle=new vp.web.CssString(me.element.getAttribute("selected-tab-style"));me._unselectedTabStyle=new vp.web.CssString(me.element.getAttribute("unselected-tab-style"));me._disabledTabStyle=new vp.web.CssString(me.element.getAttribute("disabled-tab-style"));vp.events.addOnDOMLoadHandler(ensureConsistentTabHeights);};init();vp.controls.TabStrip._tabStripDictionary[me.element.id]=this;};vp.controls.TabStrip._tabStripDictionary={};vp.controls.TabStrip.get=function controls_TabStrip_get(sElementId)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
return vp.controls.TabStrip._tabStripDictionary[sElementId];};vp.controls.Tab=function controls_Tab(vElement,oParentTabStrip)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var me=this;var _selected=false;var _disabled=false;var _iFrameElementInitialized=false;this.element=vp.ui.get(vElement);vp.controls.Tab._tabInstances[this.element.getAttribute("tab-content-id")]=this;this.onselect=new vp.events.CustomEvent(this,"onselect");this.onbeforeselect=new vp.events.CustomEvent(this,"onbeforeselect");this.tabStripIndex=null;this.parentTabStrip=oParentTabStrip;this.isDisabled=function pb_this_isDisabled()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
return _disabled;};this.setDisabled=function pb_this_setDisabled(bValue)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(bValue==_disabled)
{return;}
_disabled=(bValue===undefined)?true:bValue;me.element.setAttribute("tab-disabled",_disabled);vp.ui.setStyle(me.element,_disabled?me.parentTabStrip._disabledTabStyle.items:me.parentTabStrip._unselectedTabStyle.items);};this.isSelected=function pb_this_isSelected()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
return _selected;};this.setSelected=function pb_this_setSelected(bValue)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(bValue==_selected)
{return;}
var e={};if(bValue)
{me.onbeforeselect.fire(e);if(e.cancelTabSelect)
{return;}}
_selected=bValue;me.element.setAttribute("selected",_selected);if(!_iFrameElementInitialized)
{var iFrameSrc=me.element.getAttribute("iframe-src");if(iFrameSrc)
{var iFrameElement=vp.ui.get(me.element.getAttribute("iframe-id"));iFrameElement.src=iFrameSrc;vp.ui.setStyleValue(iFrameElement,"display","block");}
_iFrameElementInitialized=true;}
var oStylizedContainer=getStylizedContainer();if(!oStylizedContainer)
{throw new Error("Unable to find stylized container for tab");}
var oOldSkin=vp.http.parseJSON(oStylizedContainer.getAttribute("skin-data"));var oNewSkin=vp.http.parseJSON(_selected?me.parentTabStrip._selectedTabSkinData:me.parentTabStrip._unselectedTabSkinData);oNewSkin.minWidth=oOldSkin.minWidth;oStylizedContainer.setAttribute("skin-data",vp.http.serializeJSON(oNewSkin));vp.ui.setStyle(me.element,_selected?me.parentTabStrip._selectedTabStyle.items:me.parentTabStrip._unselectedTabStyle.items);vp.controls.StylizedContainer.rerender(oStylizedContainer);if(bValue)
{me.onselect.fire(e);}};var _content=null;this.getContent=function pb_this_getContent()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(!_content)
{_content=vp.ui.get(this.element.getAttribute("tab-content-id"));}
return _content;};var getStylizedContainer=function pv_getStylizedContainer()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
return me.element;};var init=function pv_init()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
_selected=vp.core.getBoolean(me.element.getAttribute("selected"));_disabled=vp.core.getBoolean(me.element.getAttribute("tab-disabled"));me.tabStripIndex=me.element.getAttribute("tab-index");vp.events.add(me.element,"click",function()
{if(_disabled)
{return;}
if(!me.isSelected())
{me.setSelected(true);}});};init();};vp.controls.Tab._tabInstances={};vp.controls.Tab.get=function controls_Tab_get(sElementId)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
return vp.controls.Tab._tabInstances[sElementId];};vp.controls.Tab._createHandler=function controls_Tab__createHandler(sTabID,sEventName,vHandler)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var fnHandler=vHandler;if(typeof(vHandler)=="string")
{fnHandler=new Function("e",vHandler);}
var oTab=vp.controls.Tab.get(sTabID);oTab[sEventName].addHandler(fnHandler);};vp.controls.Tab._validateTab=function controls_Tab__validateTab(oTab)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(!oTab||!(oTab instanceof vp.controls.Tab))
{throw new Error("object of type vp.controls.Tab expected");}};vp.controls.TabContainer={};vp.controls.TabContainer._changeTabContents=function controls_TabContainer__changeTabContents(e)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var oTab=e.selectedTab;vp.controls.Tab._validateTab(oTab);var aTabs=oTab.parentTabStrip.getTabs();for(var i=0;i<aTabs.length;i++)
{if(aTabs[i]==oTab)
{aTabs[i].getContent().style.display="block";}
else
{aTabs[i].getContent().style.display="none";}}};vp.controls.TabContainer.get=vp.controls.TabStrip.get;