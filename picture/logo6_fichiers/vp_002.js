                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                


if(!window.__td){window.__MT=100;window.__ti=0;window.__td=[];window.__td.length=__MT;window.__noTrace=false;}
if(typeof vp=="undefined"){var vp={};}
vp.core=function core(){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}};vp.core.isArray=function core_isArray(v)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
return v&&typeof v=="object"&&v.constructor==Array;};vp.core.applyProperties=function core_applyProperties(oObj1,oObj2,aProps)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(aProps)
{for(var i=0;i<aProps.length;i++)
{oObj2[aProps[i]]=oObj1[aProps[i]];}}
else
{for(var sProp in oObj1)
{oObj2[sProp]=oObj1[sProp];}}};vp.core.getNestedProperty=function core_getNestedProperty(oObj,sProp)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var sNestedProp=sProp;var oNestedTarget=oObj;var iDotPos=sNestedProp.indexOf(".");while(iDotPos>=0)
{var sCurrentProp=sNestedProp.substr(0,iDotPos);sNestedProp=sNestedProp.substr(iDotPos+1);if(!oNestedTarget[sCurrentProp])
{return undefined;}
oNestedTarget=oNestedTarget[sCurrentProp];iDotPos=sNestedProp.indexOf(".");}
return oNestedTarget[sNestedProp];};vp.core.setNestedProperty=function core_setNestedProperty(oObj,sProp,vValue)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var sNestedProp=sProp;var oNestedTarget=oObj;var iDotPos=sNestedProp.indexOf(".");while(iDotPos>=0)
{var sCurrentProp=sNestedProp.substr(0,iDotPos);sNestedProp=sNestedProp.substr(iDotPos+1);if(!oNestedTarget[sCurrentProp])
{throw new Error("The property "+sCurrentProp+" could not be found in "+sProp);}
oNestedTarget=oNestedTarget[sCurrentProp];iDotPos=sNestedProp.indexOf(".");}
oNestedTarget[sNestedProp]=vValue;};vp.core.applyPropertyMap=function core_applyPropertyMap(oTarget,oMap)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
for(var sProp in oMap)
{vp.core.setNestedProperty(oTarget,sProp,oMap[sProp]);}};vp.core.shallowCopy=function core_shallowCopy(oObj)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var oNew={};for(var sProp in oObj)
{oNew[sProp]=oObj[sProp];}
return oNew;};vp.core.shallowIsEqual=function core_shallowIsEqual(oObj1,oObj2)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var sProp;var iObj2PropCount=0;var iObj1PropCount=0;for(sProp in oObj2)
{iObj2PropCount++;}
for(sProp in oObj1)
{iObj1PropCount++;if(typeof(oObj2[sProp])=="undefined")
{return false;}
else if(oObj2[sProp]!==oObj1[sProp])
{return false;}}
if(iObj1PropCount!=iObj2PropCount)
{return false;}
return true;};vp.core.initProperty=function core_initProperty(oObject,sPropertyName,vValue)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(typeof(oObject[sPropertyName])=="undefined")
{oObject[sPropertyName]=vValue;}};vp.core.requireArg=function core_requireArg(sName,vValue)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(typeof(vValue)=="undefined")
{throw new Error("The argument '"+sName+"' is required.");}
return vValue;};vp.core.getBoolean=function core_getBoolean(v,bDefault)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(typeof(bDefault)=="undefined")
{bDefault=false;}
if(typeof(v)=="boolean")
{return v;}
if(!v)
{return bDefault;}
switch(v.toString().toLowerCase())
{case"yes":case"true":case"ok":case"1":return true;default:return false;}};vp.core.getNumber=function core_getNumber(v,nDefault)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(typeof(nDefault)=="undefined")
{nDefault=0;}
if(typeof(v)=="boolean")
{return v?1:0;}
else if(typeof(v)=="undefined"||v===null||v==="")
{return nDefault;}
var nNum=new Number(v);if(!isNaN(nNum.valueOf()))
{return nNum.valueOf();}
else
{return nDefault;}};vp.core.setObjectReference=function core_setObjectReference(oObj,oRef,sName)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(!window.__ObjRefs)
{window.__ObjRefs=[];}
var iRef=parseInt(vp.core.getAttribute(oObj,"__objrefid",-1));if(iRef<=-1)
{iRef=window.__ObjRefs.length;oObj.setAttribute("__objrefid",iRef.toString());window.__ObjRefs[iRef]={};}
window.__ObjRefs[iRef][sName]=oRef;};vp.core.getObjectReference=function core_getObjectReference(oObj,sName,oWindow)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var oTargetWindow=oWindow||window;if(!oTargetWindow.__ObjRefs)
{return null;}
var iRef=parseInt(vp.core.getAttribute(oObj,"__objrefid",-1));if(iRef<=-1)
{return null;}
return oTargetWindow.__ObjRefs[iRef][sName];};vp.core.removeObjectReferenceAttribute=function core_removeObjectReferenceAttribute(oObj,oWindow)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var oTargetWindow=oWindow||window;if(!oTargetWindow.__ObjRefs)
{return;}
oObj.removeAttribute("__objrefid");};vp.core.clearClosures=function core_clearClosures()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
for(var i=0;i<window.__objs.length;i++)
{window.__objs[i]=null;window.__funs[i]=null;}};Function.prototype.getClosure=function(oScope)
{if(!window.__objs)
{window.__objs=[];window.__funs=[];}
var oFunction=this;var objId=oScope.__objId;if(!objId)
{window.__objs[objId=oScope.__objId=window.__objs.length]=oScope;}
var funId=oFunction.__funId;if(!funId)
{window.__funs[funId=oFunction.__funId=window.__funs.length]=oFunction;}
if(!oScope.__closures)
{oScope.__closures=[];}
var closure=oScope.__closures[funId];if(closure)
{return closure;}
oScope=null;oFunction=null;window.__objs[objId].__closures[funId]=function()
{return window.__funs[funId].apply(window.__objs[objId],arguments);};window.__objs[objId].__closures[funId].__isClosure=true;window.__objs[objId].__closures[funId].__funId=funId;window.__objs[objId].__closures[funId].__objId=objId;return window.__objs[objId].__closures[funId];};vp.core.getDelayedFunction=function core_getDelayedFunction(fnFunction,iMinTimeBetweenCalls)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var bCanCallFunction=true;var bWaitingToBeCalled=false;var aWaitingArguments=arguments;return function()
{if(bCanCallFunction&&!bWaitingToBeCalled)
{fnFunction.apply(this,arguments);bCanCallFunction=false;window.setTimeout(function()
{bCanCallFunction=true;},iMinTimeBetweenCalls);}
if(!bCanCallFunction&&!bWaitingToBeCalled)
{bWaitingToBeCalled=true;window.setTimeout(function()
{bWaitingToBeCalled=false;this.apply(this,aWaitingArguments);},iMinTimeBetweenCalls);}};};vp.core.markAsClosure=function core_markAsClosure(fnFunction)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
fnFunction.__isClosure=true;};vp.core.getAttribute=function core_getAttribute(oNode,sAttrName,vDefaultValue)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(!oNode.parsed&&!oNode.getAttribute)
{return vDefaultValue;}
var vValue=oNode.getAttribute(sAttrName);if(vValue===null||typeof(vValue)=="undefined")
{vValue=oNode[sAttrName];}
if(vValue===null||typeof(vValue)=="undefined")
{return vDefaultValue;}
else
{return vValue;}};vp.core.getElement=function core_getElement(vElement,sFunc)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(typeof vElement=="string")
{vElement=vp.ui.get(vElement);if(!vElement)
{throw new Error(sFunc+": No element with the ID '"+vElement+"' exists.");}}
if(!vElement)
{throw new Error("Call to "+sFunc+"() with a null element reference.");}
return vElement;};


if(!window.__td){window.__MT=100;window.__ti=0;window.__td=[];window.__td.length=__MT;window.__noTrace=false;}
if(typeof vp=="undefined"){var vp={};}
vp.browser=function browser(){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}};vp.browser.build=0;vp.browser.code="undefined";vp.browser.ver=0;vp.browser.isFirefox=false;vp.browser.isGecko=false;vp.browser.isIE=false;vp.browser.isNetscape=false;vp.browser.isOpera=!!window.opera;vp.browser.isSafari=false;vp.browser.isWebKit=false;vp.browser.hasSpyware=false;vp.browser.OS={isMac:false,isWin:false,isLinux:false,isOther:false};var VP_BROWSER_SPYWARE_TOKENS={"funwebproducts":{name:"FunWebProducts",url:"http://www.adwarealert.com/glossary_details.php?ID=133616"},"simbar":{name:"Simbar",url:"http://spywaredetector.net/spyware_encyclopedia/ToolBar.Simbar.htm"}};vp.browser._init=function browser__init()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(/\bmac\b/gim.test(navigator.userAgent))
{vp.browser.OS.isMac=true;}
else
{vp.browser.OS.isWin=true;}
if(vp.browser.isOpera){vp.browser.code="opera";if(window.opera.version){vp.browser.ver=parseFloat(window.opera.version());}else{if(navigator.appName=="Opera"){vp.browser.ver=parseFloat(navigator.appVersion);}else if(navigator.userAgent.indexOf("Opera")>-1){(new RegExp("Opera (\\d+\\.\\d+)")).test(navigator.userAgent);vp.browser.ver=parseFloat(RegExp["$1"]);}}}else{if(navigator.userAgent.indexOf("AppleWebKit")>-1)
{vp.browser.isWebKit=true;if(navigator.userAgent.indexOf("Safari")>-1)
{if(navigator.userAgent.indexOf("Chrome")>-1)
{vp.browser.code="chrome";vp.browser.isGoogleChrome=true;}
else
{vp.browser.code="safari";vp.browser.isSafari=true;}
(new RegExp("Safari\\/(\\d+(?:\\.\\d*)?)")).test(navigator.userAgent);vp.browser.build=parseFloat(RegExp["$1"]);if(vp.browser.build>=412)
{vp.browser.ver=2.0;}
else if(vp.browser.build>=312)
{vp.browser.ver=1.3;}
else if(vp.browser.build>=125)
{vp.browser.ver=1.2;}
else if(vp.browser.build>=100)
{vp.browser.ver=1.1;}
else
{vp.browser.ver=1.0;}}
else
{vp.browser.code="webkit";(new RegExp("AppleWebKit\\/(\\d+(?:\\.\\d*)?)")).test(navigator.userAgent);vp.browser.build=parseFloat(RegExp["$1"]);}}
else if(navigator.userAgent.indexOf("Gecko")>-1)
{vp.browser.isGecko=true;if(navigator.userAgent.indexOf("Netscape")>-1)
{vp.browser.code="netscape";vp.browser.isNetscape=true;(new RegExp("Netscape\\/(\\d+(?:\\.\\d*)*)")).test(navigator.userAgent);vp.browser.ver=parseFloat(RegExp["$1"]);}
else if(navigator.userAgent.indexOf("Firefox")>-1)
{vp.browser.code="firefox";vp.browser.isFirefox=true;(new RegExp("Firefox\\/(\\d+(?:\\.\\d*)*)")).test(navigator.userAgent);vp.browser.ver=parseFloat(RegExp["$1"]);}
else
{vp.browser.code="gecko";(new RegExp("rv:(\\d+(?:\\.\\d*)*)")).test(navigator.userAgent);vp.browser.ver=parseFloat(RegExp["$1"]);}}
else if(navigator.userAgent.indexOf("MSIE")>-1)
{vp.browser.code="ie";vp.browser.isIE=true;(new RegExp("MSIE (\\d+(?:\\.\\d*)*)")).test(navigator.userAgent);vp.browser.ver=parseFloat(RegExp["$1"]);}}
var sUA=navigator.userAgent.toLowerCase();for(var sToken in VP_BROWSER_SPYWARE_TOKENS)
{if(sUA.indexOf(sToken)!=-1)
{vp.browser.hasSpyware=true;if(!vp.browser.spyware)
{vp.browser.spyware=[];}
vp.browser.spyware.push(VP_BROWSER_SPYWARE_TOKENS[sToken]);}}};vp.browser._init();


if(!window.__td){window.__MT=100;window.__ti=0;window.__td=[];window.__td.length=__MT;window.__noTrace=false;}
if(typeof(vp)=="undefined")
{var vp=function pv_vp(){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}};}
vp.comparer=function comparer(){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}};vp.comparer.caseSensitive=function comparer_caseSensitive(o1,o2)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(o1>o2)
{return 1;}
else if(o1<o2)
{return-1;}
else if(o1==o2)
{return 0;}};vp.comparer.caseInsensitive=function comparer_caseInsensitive(o1,o2)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
return vp.comparer.caseSensitive(o1.toLowerCase(),o2.toLowerCase());};vp.comparer.prefixSearchComparer=function comparer_prefixSearchComparer(o1,o2)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var sCompareTo=o1.toLowerCase();var sSubject=o2.toLowerCase();if(sSubject.startsWith&&sSubject.startsWith(sCompareTo,true))
{return 0;}
return vp.comparer.caseInsensitive(sCompareTo,sSubject);};vp.comparer.__getComparer=function comparer___getComparer(bCaseSensitiveOrCompareFunction)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(typeof(bCaseSensitiveOrCompareFunction)=="undefined"||bCaseSensitiveOrCompareFunction===null)
{return vp.comparer.caseSensitive;}
else if(typeof(bCaseSensitiveOrCompareFunction)=="function")
{return bCaseSensitiveOrCompareFunction;}
else if(!bCaseSensitiveOrCompareFunction)
{return vp.comparer.caseInsensitive;}
else if(bCaseSensitiveOrCompareFunction)
{return vp.comparer.caseSensitive;}};Array.prototype.clone=function()
{var aNew=[];for(var i=0;i<this.length;i++)
{aNew[i]=this[i];}
return aNew;};Array.prototype.indexOf=function(vValue,bCaseSensitiveOrCompareFunction)
{var fnCompare=vp.comparer.__getComparer(bCaseSensitiveOrCompareFunction);var iLen=this.length;for(var i=0;i<iLen;i++)
{if(fnCompare(this[i],vValue)===0)
{return i;}}
return-1;};Array.prototype.contains=function(vValue,bCaseSensitiveOrCompareFunction)
{return this.indexOf(vValue,bCaseSensitiveOrCompareFunction)!=-1;};Array.prototype.add=function(vValue)
{this.push(vValue);};Array.prototype.append=function(aArr)
{var iLen=aArr.length;for(var i=0;i<iLen;i++)
{this.push(aArr[i]);}};Array.prototype.insert=function(vValue,iIndex)
{for(var i=this.length;i>iIndex;i--)
{this[i]=this[i-1];}
this[iIndex]=vValue;};Array.prototype.remove=function(iIndex)
{if(typeof(iIndex)!="number")
{throw new Error("Array.remove requires an integer argument");}
this.splice(iIndex,1);};Array.prototype.removeAll=function()
{while(this.length>0)
{this.remove(0);}};Array.prototype.removeValue=function(vValue)
{var iIndex=this.indexOf(vValue);if(iIndex!=-1)
{this.remove(iIndex);}};Array.prototype.binarySearch=function(vValue,bCaseSensitiveOrCompareFunction)
{var fnCompare=vp.comparer.__getComparer(bCaseSensitiveOrCompareFunction);var iLow,iHigh,iMid,iRound;iLow=0;iHigh=this.length-1;iRound=0;while(iLow<=iHigh){iRound++;iMid=Math.floor((iLow+iHigh)/2);var iCompare=fnCompare(vValue,this[iMid]);if(iCompare<0)
{iHigh=iMid-1;}
else if(iCompare>0)
{iLow=iMid+1;}
else
{return iMid;}}
return-1;};Array.prototype.insertSorted=function(vValue,bCaseSensitiveOrCompareFunction)
{if(this.length===0)
{this.push(vValue);return;}
var fnCompare=vp.comparer.__getComparer(bCaseSensitiveOrCompareFunction);var iLow,iHigh,iMid,iRound;iLow=0;iHigh=this.length-1;iRound=0;while(iLow<=iHigh){iRound++;iMid=Math.floor((iLow+iHigh)/2);var iCompare=fnCompare(vValue,this[iMid]);if(iCompare<0)
{iHigh=iMid-1;}
else if(iCompare>0)
{iLow=iMid+1;}
else
{break;}}
if(fnCompare(vValue,this[iMid])>0){this.insert(vValue,iMid+1);}else{this.insert(vValue,iMid);}};Array.prototype.findAllStartsWith=function(sPrefix)
{var index=this.binarySearch(sPrefix,vp.comparer.prefixSearchComparer);if(index<0)
{return new Array();}
var startIndex=index;do
{startIndex--;}while(startIndex>=0&&this[startIndex].startsWith(sPrefix,true));startIndex++;var endIndex=index+1;while(endIndex<this.length&&this[endIndex].startsWith(sPrefix,true))
{endIndex++;}
endIndex--;var results=new Array();index=startIndex;for(index=startIndex;index<=endIndex;index++)
{results.push(this[index]);}
return results;};Array.prototype.appendSorted=function(arr,bCaseSensitiveOrCompareFunction,bRemoveDuplicates){var fnCompare=vp.comparer.__getComparer(bCaseSensitiveOrCompareFunction);var arr1=this;var arr2=arr;var i=0;var j=0;var aOut=[];while(i<arr1.length||j<arr2.length)
{if(i>=arr1.length)
{aOut.add(arr2[j]);j++;continue;}
if(j>=arr2.length)
{aOut.add(arr2[i]);i++;continue;}
var iCompare=fnCompare(arr1[i],arr2[j]);if(iCompare<0)
{aOut.add(arr1[i]);i++;}
else if(iCompare>0)
{aOut.add(arr2[j]);j++;}
else
{aOut.add(arr1[i]);if(!bRemoveDuplicates)
{aOut.add(arr2[j]);}
i++;j++;}}
this.removeAll();this.append(aOut);};Array.prototype.equals=function(aCompare)
{if(this.length!=aCompare.length)
{return false;}
for(var i=0;i<this.length;i++)
{if(this[i]!==aCompare[i])
{return false;}}
return true;};if(!Array.prototype.map)
{Array.prototype.map=function(fnAction,oThis)
{var iLen=this.length;if(typeof fnAction!="function")
{throw new Error("fnAction is not a Function");}
var aOut=new Array(iLen);for(var i=0;i<iLen;i++)
{if(i in this)
{aOut[i]=fnAction.call(oThis,this[i],i,this);}}
return aOut;};}


if(!window.__td){window.__MT=100;window.__ti=0;window.__td=[];window.__td.length=__MT;window.__noTrace=false;}
if(typeof vp=="undefined"){var vp={};}
vp.events=function events(){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}};vp.events.cancelEvent=function events_cancelEvent(oEvent)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
oEvent=oEvent||window.event;if(!oEvent)
{throw new Error("No event argument was passed into vp.events.cancelEvent()");}
oEvent.returnValue=false;if(oEvent.preventDefault){oEvent.preventDefault();}};vp.events.cancelBubble=function events_cancelBubble(oEvent){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
oEvent=oEvent||window.event;if(!oEvent)
{throw new Error("No event argument was passed into vp.events.cancelBubble()");}
if(oEvent.stopPropagation)
{oEvent.stopPropagation();oEvent.bubbleCanceled=true;}
else
{oEvent.cancelBubble=true;}};vp.events.cancel=function events_cancel(oEvent)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
vp.events.cancelEvent(oEvent);vp.events.cancelBubble(oEvent);};vp.events.blurAll=function events_blurAll()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var oBlurElement=document.getElementById("__blurElement");if(!oBlurElement)
{oBlurElement=document.createElement("INPUT");oBlurElement.type="text";oBlurElement.style.position="absolute";oBlurElement.style.backgroundColor="transparent";oBlurElement.id="__blurElement";document.body.appendChild(oBlurElement);}
oBlurElement.style.top=Math.max(document.documentElement.scrollTop,document.body.scrollTop)+10;oBlurElement.style.left=Math.max(document.documentElement.scrollLeft,document.body.scrollLeft)+10;oBlurElement.style.visibility="visible";oBlurElement.focus();oBlurElement.blur();oBlurElement.style.visibility="hidden";};vp.events._callHandlers=function events__callHandlers(oEvent)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
oEvent=window.event||oEvent;if(this.handlers[oEvent.type])
{for(var i=0;i<this.handles[oEvent.type].length;i++)
{this.handlers[oEvent.type](oEvent);}}};vp.events.add=function events_add(vTarget,sEvent,fnHandler)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var oTarget=vp.core.getElement(vTarget,"vp.events.add");var oEventMap=vp.events._initializeBoundObject(oTarget,sEvent);if(!oEventMap.enableInProgress)
{oEventMap.handlers.push(fnHandler);}
if(oEventMap.enabled)
{if(oTarget.addEventListener)
{oTarget.addEventListener(sEvent,fnHandler,false);}
else if(oTarget.attachEvent)
{oTarget.attachEvent("on"+sEvent,fnHandler);}
else
{if(!oTarget.handlers)
{oTarget.handlers={};}
if(!oTarget.handlers[sEvent])
{oTarget.handlers[sEvent]=[];}
oTarget.handlers[sEvent][oTarget.handlers[sEvent].length]=fnHandler;oTarget["on"+sEvent]=vp.events._callHandlers;}}};vp.events.remove=function events_remove(vTarget,sEvent,fnHandler)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var oTarget=vp.core.getElement(vTarget,"vp.events.remove");var bDoRemove=true;try
{var oEventMap=vp.events._initializeBoundObject(oTarget,sEvent);if(!oEventMap.enableInProgress)
{oEventMap.handlers.removeValue(fnHandler);}
if(!oEventMap.enabled&&!oEventMap.enableInProgress)
{bDoRemove=false;}}
catch(ex)
{}
if(bDoRemove)
{try
{if(oTarget.closed)
{return;}}
catch(ex)
{return;}
if(oTarget.removeEventListener)
{oTarget.removeEventListener(sEvent,fnHandler,false);}
else if(oTarget.detachEvent)
{oTarget.detachEvent("on"+sEvent,fnHandler);}
else
{if(!oTarget.handlers)
{oTarget.handlers={};}
if(!oTarget.handlers[sEvent])
{oTarget.handlers[sEvent]=[];}
var aHandlers=oTarget.handlers[sEvent];var iLen=aHandlers.length;for(var i=0;i<iLen;i++)
{if(aHandlers[i]==fnHandler)
{aHandlers[i]=new Function();}}
aHandlers[aHandlers.length]=fnHandler;oTarget["on"+sEvent]=vp.events._callHandlers;}}};vp.events.removeAll=function events_removeAll()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
for(var sElemId in vp.events._boundObjects)
{try
{var sTemp=vp.events._boundObjects[sElemId].target._eventId;}
catch(ex)
{continue;}
for(var sEvent in vp.events._boundObjects[sElemId].events)
{var aHandlers=vp.events._boundObjects[sElemId].events[sEvent].handlers;if(aHandlers)
{var iLen=aHandlers.length;for(var i=iLen-1;i>=0;i--)
{var fnAction=function pv_fnAction()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
vp.events.remove(vp.events._boundObjects[sElemId].target,sEvent,aHandlers[i]);};if(window.isDebug)
{fnAction();}
else
{try
{fnAction();}
catch(ex)
{}}}}}}};vp.events._boundObjects={};vp.events._eventIdCounter=0;vp.events._initializeBoundObject=function events__initializeBoundObject(oElement,sEvent)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(!oElement._eventId)
{oElement._eventId="evt"+vp.events._eventIdCounter;vp.events._eventIdCounter++;}
var oMap=vp.events._boundObjects[oElement._eventId];if(!oMap)
{oMap={target:oElement,events:{}};vp.events._boundObjects[oElement._eventId]=oMap;}
if(!oMap.events[sEvent])
{oMap.events[sEvent]={handlers:[],enabled:true};}
return oMap.events[sEvent];};vp.events.enable=function events_enable(vElement,sEvent,bEnable)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(typeof(bEnable)=="undefined")
{bEnable=true;}
var oElement=vp.core.getElement(vElement,"vp.events.enableEvents");var oEventMap=vp.events._initializeBoundObject(oElement,sEvent);if(oEventMap.enabled==bEnable)
{return;}
oEventMap.enabled=bEnable;var sSourceProp="on"+sEvent+(bEnable?"_disabled":"");var sTargetProp="on"+sEvent+(!bEnable?"_disabled":"");if(oElement[sSourceProp])
{oElement[sTargetProp]=oElement[sSourceProp];oElement[sSourceProp]=null;}
else
{oEventMap.enableInProgress=true;var fnChange=bEnable?vp.events.add:vp.events.remove;for(var i=0;i<oEventMap.handlers.length;i++)
{fnChange(oElement,sEvent,oEventMap.handlers[i]);}
oEventMap.enableInProgress=false;}};vp.events.addRecursive=function events_addRecursive(oElement,sEvent,fnHandler)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
vp.events.add(oElement,sEvent,fnHandler);for(var i=0;i<oElement.childNodes.length;i++)
{var oChild=oElement.childNodes[i];if(oChild.nodeType==1)
{arguments.callee(oChild,sEvent,fnHandler);}}};vp.events.addToOnLoad=function events_addToOnLoad(fnHandler)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
vp.events.add(window,"load",fnHandler);};vp.events.addToOnUnload=function events_addToOnUnload(fnHandler)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
vp.events.add(window,"unload",fnHandler);};vp.events.addToOnLoad(function(){vp.events.isLoadComplete=true;});vp.events.runAfterLoadComplete=function events_runAfterLoadComplete(fnHandler)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(vp.events.isLoadComplete)
{fnHandler();}
else
{vp.events.addToOnLoad(fnHandler);}};vp.events.getEvent=function events_getEvent(oEvent)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
oEvent=oEvent||window.event;if(typeof oEvent.target!="object"&&oEvent.srcElement)
{oEvent.target=oEvent.srcElement;}
oEvent.realTarget=oEvent.target;if(oEvent.target&&oEvent.target.nodeType==3)
{oEvent.realTarget=oEvent.target.parentNode;}
if(typeof oEvent.charCode!="number"&&oEvent.keyCode)
{oEvent.charCode=oEvent.keyCode;}
if(typeof oEvent.pageX!="number"&&oEvent.offsetX)
{oEvent.pageX=oEvent.offsetX;oEvent.pageY=oEvent.offsetY;}
if(oEvent.type=="mouseout"&&typeof oEvent.toElement!="undefined"&&!oEvent.relatedTarget)
{oEvent.relatedTarget=oEvent.toElement;}
if(oEvent.type=="mouseover"&&typeof oEvent.fromElement!="undefined"&&!oEvent.relatedTarget)
{oEvent.relatedTarget=oEvent.fromElement;}
return oEvent;};vp.events.isRightClick=function events_isRightClick(e)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(e.button==2||e.type=="contextmenu")
{return true;}};vp.events.isVisibleKeyCode=function events_isVisibleKeyCode(iKeyCode)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(iKeyCode>=112&&iKeyCode<=123)
{return false;}
if(iKeyCode>=33&&iKeyCode<=40)
{return false;}
if(iKeyCode>=14&&iKeyCode<=31)
{return false;}
switch(iKeyCode)
{case 9:case 45:case 91:case 145:return false;break;default:return true;}
return true;};vp.events.isFreedFunction=function events_isFreedFunction(fnPointer)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
try
{var oTemp=fnPointer.valueOf();}
catch(ex)
{return true;}
return false;};vp.events.CustomEvent=function events_CustomEvent(oObj,sEventName)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var _aHandlers=[];var _oObj=oObj;var _sEventName=sEventName;var me=this;this.useUnsafeClosures=false;this.addHandler=function pb_this_addHandler(fnHandler)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var fn;if(me.useUnsafeClosures)
{fn=fnHandler;}
else
{fn=fnHandler.__isClosure?fnHandler:fnHandler.getClosure(_oObj);}
fn.__freedCheck=true;_aHandlers.push(fn);};var removeFreedHandlers=function pv_removeFreedHandlers()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
for(var i=0;i<_aHandlers.length;i++)
{if(vp.events.isFreedFunction(_aHandlers[i]))
{_aHandlers.splice(i,1);i--;}}};this.removeHandler=function pb_this_removeHandler(fnHandler)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
removeFreedHandlers();for(var i=0;i<_aHandlers.length;i++)
{var bRemove=false;if(me.useUnsafeClosures&&_aHandlers[i]==fnHandler)
{bRemove=true;}
else if(_aHandlers[i].__funId==fnHandler.__funId)
{bRemove=true;}
if(bRemove)
{_aHandlers.splice(i,1);return;}}};this.removeAll=function pb_this_removeAll()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
_aHandlers=[];};this.fire=function pb_this_fire(e)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(!e)
{e={};}
if(!e.target)
{e.target=_oObj;}
if(!e.type)
{e.type=_sEventName;}
removeFreedHandlers();for(var i=0;i<_aHandlers.length;i++)
{_aHandlers[i](e);}
return e.cancelCustomEvent?false:true;};};vp.events.CustomAggregatedEvent=function events_CustomAggregatedEvent(oObj,sEventName,iAggregationDelay)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var me=this;this.inheritFrom=vp.events.CustomEvent;this.inheritFrom(oObj,sEventName);this.aggregationDelay=iAggregationDelay||350;var _iTimer=null;var fire_base=this.fire;this.fire=function pb_this_fire(e)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(_iTimer!==null)
{clearTimeout(_iTimer);_iTimer=null;}
setTimeout(function(){fire_base(e);},me.aggregationDelay);};};vp.events.addOnDOMLoadHandler=function events_addOnDOMLoadHandler(fnCallback)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var iTimer;var fnCallbackWrapper=function pv_fnCallbackWrapper()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(arguments.callee.done)
{return;}
arguments.callee.done=true;if(iTimer)
{clearInterval(iTimer);}
fnCallback();};if(document.addEventListener)
{document.addEventListener("DOMContentLoaded",fnCallbackWrapper,false);}
else if(document.all)
{if(window.location.protocol=="https:")
{document.write("<script id=\"__ie_onload\" defer src='/vp/js-lib/common/empty.js'><\/script>");}
else
{document.write("<script id=\"__ie_onload\" defer src='javascript:void(0);'><\/script>");}
var oScript=document.getElementById("__ie_onload");if(oScript)
{oScript.onreadystatechange=function()
{if(this.readyState=="complete")
{fnCallbackWrapper();}}.getClosure(oScript);}}
else if(/WebKit/i.test(navigator.userAgent))
{iTimer=setInterval(function()
{if(/loaded|complete/.test(document.readyState)){fnCallbackWrapper();}},10);}
vp.events.add(window,"load",fnCallbackWrapper);};vp.events.addOnDOMLoadHandler(function(){vp.events.isDOMLoadComplete=true;});vp.events.runAfterDOMLoadComplete=function events_runAfterDOMLoadComplete(fnHandler)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(vp.events.isDOMLoadComplete)
{fnHandler();}
else
{vp.events.addOnDOMLoadHandler(fnHandler);}};vp.events._eventHashProps=["type","altKey","altLeft","button","clientX","clientY","ctrlKey","ctrlLeft","dataFld","offsetX","offsetY","propertyName","qualifier","reason","repeat","screenX","screenY","shiftKey","shiftLeft","srcUrn","x","y"];vp.events._getEventSignature=function events__getEventSignature(oEvent)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var aHash=[];var iLen=vp.events._eventHashProps.length;for(var i=0;i<iLen;i++)
{var sProp=vp.events._eventHashProps[i];var sVal="o";switch(typeof(oEvent[sProp]))
{case"string":case"number":sVal=oEvent[sProp];break;case"boolean":sVal=oEvent[sProp]?1:0;break;default:break;}
aHash.push(sVal);}
return aHash.join("");};vp.events._ieEventsPropertyCache=[];vp.events._getIEEventsPropertyFromCache=function events__getIEEventsPropertyFromCache(sID)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
for(var i=vp.events._ieEventsPropertyCache.length-1;i>=0;i--)
{if(vp.events._ieEventsPropertyCache[i].id==sID)
{return vp.events._ieEventsPropertyCache[i];}}
return null;};vp.events.setEventData=function events_setEventData(oEvent,sKey,vValue)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(document.all)
{var sID=vp.events._getEventSignature(oEvent);var oCachedProps=vp.events._getIEEventsPropertyFromCache(sID);if(!oCachedProps)
{oCachedProps={"id":sID,"customAttributes":{}};oCachedProps.customAttributes[sKey]=vValue;vp.events._ieEventsPropertyCache.push(oCachedProps);}
else
{oCachedProps.customAttributes[sKey]=vValue;}}
else
{if(!oEvent.customAttributes)
{oEvent.customAttributes={};}
oEvent.customAttributes[sKey]=vValue;}};vp.events.getEventData=function events_getEventData(oEvent,sKey)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(document.all)
{var aCache=vp.events._ieEventsPropertyCache;var iLen=vp.events._ieEventsPropertyCache.length;if(iLen>100)
{vp.events._ieEventsPropertyCache=vp.events._ieEventsPropertyCache.slice(iLen-100);}
var sID=vp.events._getEventSignature(oEvent);var oCachedProps=vp.events._getIEEventsPropertyFromCache(sID);if(oCachedProps)
{return oCachedProps.customAttributes[sKey];}}
else
{if(oEvent.customAttributes&&typeof(oEvent.customAttributes[sKey])!="undefined")
{return oEvent.customAttributes[sKey];}}
return null;};vp.events.fireEvent=function events_fireEvent(oTarget,sEvent,oSrcEvent,oCustomArgs)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var oEventArgs={bubbles:true,cancelable:true,ctrlKey:false,altKey:false,shiftKey:false,metaKey:false,keyCode:0,charCode:0,button:0,detail:1,screenX:1,screenY:1,clientX:1,clientY:1,relatedTarget:oTarget};if(oSrcEvent)
{for(var sProp in oEventArgs)
{oEventArgs[sProp]=oSrcEvent[sProp];}}
if(document.createEvent)
{var oEvent=null;if(sEvent.indexOf("key")!=-1)
{oEvent=document.createEvent("KeyboardEvent");oEvent.initKeyEvent(sEvent,oEventArgs.bubbles,oEventArgs.cancelable,window,oEventArgs.ctrlKey,oEventArgs.altKey,oEventArgs.shiftKey,oEventArgs.metaKey,oEventArgs.keyCode,oEventArgs.charCode);}
else
{oEvent=document.createEvent("MouseEvents");oEvent.initMouseEvent(sEvent,oEventArgs.bubbles,oEventArgs.cancelable,window,oEventArgs.detail,oEventArgs.screenX,oEventArgs.screenY,oEventArgs.clientX,oEventArgs.clientY,oEventArgs.ctrlKey,oEventArgs.altKey,oEventArgs.shiftKey,oEventArgs.metaKey,oEventArgs.button,oEventArgs.relatedTarget);}
if(oCustomArgs)
{for(var sCustomProp in oCustomArgs)
{oEvent[sCustomProp]=oCustomArgs[sCustomProp];}}
oTarget.dispatchEvent(oEvent);}
else
{oTarget.fireEvent("on"+sEvent);}};vp.events.isModifierKey=function events_isModifierKey(e)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
return vp.browser.OS.isMac?e.metaKey:e.ctrlKey;};vp.events.EventManager=function events_EventManager()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var _aEvents=[];this.add=function pb_this_add(oElement,sEvent,fnHandler)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
vp.events.add(oElement,sEvent,fnHandler);_aEvents.add([oElement,sEvent,fnHandler]);};this.remove=function pb_this_remove(oElement,sEvent,fnHandler)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
for(var i=0;i<_aEvents.length;i++)
{if(oElement==_aEvents[i][0]&&sEvent==_aEvents[i][1]&&fnHandler==_aEvents[i][2])
{_aEvents.remove(i);vp.events.remove(oElement,sEvent,fnHandler);break;}}};this.removeAll=function pb_this_removeAll()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
for(var i=0;i<_aEvents.length;i++)
{vp.events.remove(_aEvents[i][0],_aEvents[i][1],_aEvents[i][2]);}
_aEvents=[];};};


if(!window.__td){window.__MT=100;window.__ti=0;window.__td=[];window.__td.length=__MT;window.__noTrace=false;}
if(typeof vp=="undefined"){var vp={};}
vp.date=function date(){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}};vp.date.Months=["January","February","March","April","May","June","July","August","September","October","November","December"];vp.date.Days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];Date.prototype.format=function(sFormat){var sDate=sFormat;sDate=sDate.replace(/yyyy/gi,this.getFullYear());sDate=sDate.replace(/yy/gi,this.getFullYear().toString().substring(2,4));sDate=sDate.replace(/month/gi,vp.date.Months[this.getMonth()]);sDate=sDate.replace(/mon/gi,vp.date.Months[this.getMonth()].substring(0,3));sDate=sDate.replace(/mmm/gi,this.getMonth()+1);sDate=sDate.replace(/hh24/gi,this.getHours());sDate=sDate.replace(/hh/gi,this.getHours()>12?this.getHours()-12:this.getHours());var mm=this.getMinutes().toString();if(mm.length==1){mm="0"+mm;}
sDate=sDate.replace(/mm/gi,mm);var ss=this.getSeconds().toString();if(ss.length==1)
{ss="0"+ss;}
sDate=sDate.replace(/ss/gi,ss);var ms=this.getMilliseconds().toString();while(ms.length<4)
{ms="0"+ms;}
sDate=sDate.replace(/ms/gi,ms);sDate=sDate.replace(/ddd/gi,vp.date.Days[this.getDay()].substring(0,3));sDate=sDate.replace(/dd/gi,this.getDate());sDate=sDate.replace(/day/gi,vp.date.Days[this.getDay()]);var meridian=this.getHours()<12?'AM':'PM';sDate=sDate.replace(/meridian/gi,meridian);var d=new Date();var tz=d.getTimezoneOffset();var timezone="";if(tz<0)
{timezone="GMT-"+tz/60;}
else if(tz===0)
{timezone="GMT";}
else
{timezone="GMT+"+tz/60;}
sDate=sDate.replace(/timezone/gi,timezone);var minutes=this.getMinutes().toString();if(minutes.length==1)
{minutes="0"+minutes;}
var time24=this.getHours()+":"+minutes;sDate=sDate.replace(/time24/gi,time24);var time=this.getHours()+":"+minutes+meridian;sDate=sDate.replace(/time/gi,time);return sDate;};Date.prototype.toShortDateString=function()
{return this.format('mmm/dd/yyyy');};Date.prototype.toShortTimeString=function()
{return this.format('hh:mm meridian');};var DateInterval={Day:'d',DayOfYear:'y',Hour:'h',Minute:'n',Month:'m',Quarter:'q',Second:'s',Weekday:'w',WeekOfYear:'ww',Year:'yyyy',Millisecond:'ss'};Date.prototype.addInterval=function(iValue,sInterval)
{var iYears=0,iMonths=0,iDays=0,iHours=0,iMinutes=0,iSeconds=0,nMilliseconds=0;switch(sInterval)
{case DateInterval.Year:iYears=iValue;break;case DateInterval.Month:iMonths=iValue;break;case DateInterval.Day:iDays=iValue;break;case DateInterval.Hour:iHours=iValue;break;case DateInterval.Minute:iMinutes=iValue;break;case DateInterval.Second:iSeconds=iValue;break;case DateInterval.Millisecond:nMilliseconds=iValue;break;default:break;}
return new Date(this.getFullYear()+iYears,this.getMonth()+iMonths,this.getDate()+iDays,this.getHours()+iHours,this.getMinutes()+iMinutes,this.getSeconds()+iSeconds,this.getMilliseconds()+nMilliseconds);};Date.prototype.addMilliseconds=function(iValue)
{return this.addInterval(iValue,DateInterval.Millisecond);};Date.prototype.addSeconds=function(iValue)
{return this.addInterval(iValue,DateInterval.Second);};Date.prototype.addMinutes=function(iValue)
{return this.addInterval(iValue,DateInterval.Minute);};Date.prototype.addHours=function(iValue)
{return this.addInterval(iValue,DateInterval.Hour);};Date.prototype.addDays=function(iValue)
{return this.addInterval(iValue,DateInterval.Day);};Date.prototype.addMonths=function(iValue)
{return this.addInterval(iValue,DateInterval.Month);};Date.prototype.addYears=function(iValue)
{return this.addInterval(iValue,DateInterval.Year);};Date.prototype.formatDotNet=function(sFormat)
{if(typeof(sFormat)=="undefined")
{return this.toUTCString().replace("UTC","GMT");}
var sDate=sFormat;var dd=this.getDate().toString();if(dd.length==1)
{dd="0"+dd;}
sDate=sDate.replace(/dd/,dd);sDate=sDate.replace(/d/,this.getDate());var MM=(this.getMonth()+1).toString();if(MM.length==1)
{MM="0"+MM;}
sDate=sDate.replace(/MM/,MM);sDate=sDate.replace(/M/,this.getMonth()+1);sDate=sDate.replace(/yyyy/,this.getFullYear());sDate=sDate.replace(/HH/,this.getHours());sDate=sDate.replace(/h/,this.getHours()>12?this.getHours()-12:this.getHours());var mm=this.getMinutes().toString();if(mm.length==1)
{mm="0"+mm;}
sDate=sDate.replace(/mm/,mm);var meridian=this.getHours()<12?'AM':'PM';sDate=sDate.replace(/tt/,meridian);return sDate;};Date.prototype.toLocalFormattedString=function(sFormat)
{var oDate=this.addMinutes(-this.getTimezoneOffset());return oDate.formatDotNet(sFormat);};


if(!window.__td){window.__MT=100;window.__ti=0;window.__td=[];window.__td.length=__MT;window.__noTrace=false;}
if(typeof vp=="undefined"){var vp={};}
vp.forms=function forms(){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}};vp.forms.check=function forms_check(vElement){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
this.toggleCheck(vElement,true);};vp.forms.disable=function forms_disable(vElement){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
this.toggleEnabled(vElement,false);};vp.forms.enable=function forms_enable(vElement){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
this.toggleEnabled(vElement,true);};vp.forms.selectOption=function forms_selectOption(vElement,vOptionId){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
this.toggleOption(vElement,vOptionId,true);};vp.forms.toggleCheck=function forms_toggleCheck(vElement,bOverride){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
vElement=vp.core.getElement(vElement,"vp.forms.toggleCheck");if(vElement.tagName=="INPUT"&&(vElement.type=="checkbox"||vElement.type=="radio")){if(bOverride!==null){vElement.checked=bOverride;}else{vElement.checked=!vElement.checked;}}else{throw new Error("vp.forms.toggleCheck(): Failed because the element (ID "+vElement.id+") is not an <input> tag.");}};vp.forms.toggleEnabled=function forms_toggleEnabled(vElement,bOverride){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
vElement=vp.core.getElement(vElement,"vp.forms.toggleEnabled");if(bOverride!==null){vElement.disabled=!bOverride;}else{vElement.disabled=!vElement.disabled;}};vp.forms.toggleOption=function forms_toggleOption(vElement,vOptionId,bOverride){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
vElement=vp.core.getElement(vElement,"vp.forms.selectOption");if(vElement.tagName=="SELECT"){var oOption=null;if(typeof vOptionId=="string"){oOption=vp.ui.get(vOptionId);}else if(typeof vOptionId=="number"){oOption=vElement.options[vOptionId];}
if(!oOption){throw new Error("vp.forms.toggleOption(): Failed because the option (ID "+vOptionId+") does not exist.");}
if(bOverride!==null){oOption.selected=bOverride;}else{oOption.selected=!oOption.selected;}}else{throw new Error("vp.forms.toggleOption(): Failed because the element (ID "+vElement.id+") is not a &lt;select&gt; tag.");}};vp.forms.uncheck=function forms_uncheck(vElement){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
this.toggleCheck(vElement,false);};vp.forms.unselectOption=function forms_unselectOption(vElement,vOptionId){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
this.toggleOption(vElement,vOptionId,false);};vp.forms.getFormElement=function forms_getFormElement(vElement)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var oElement=vp.core.getElement(vElement,"vp.forms.getFormElement");if(typeof(vElement)=="string"&&oElement&&oElement.type&&oElement.type.toLowerCase()=="radio")
{oElement=vp.forms.getRadioGroup(vElement);if(!oElement)
{throw new Error("No form element was found with the name: "+vElement);}}
return oElement;};vp.forms.getValue=function forms_getValue(vElement)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
vElement=vp.forms.getFormElement(vElement);var i;if(vElement[0]&&vElement[0].type&&vElement[0].type.toLowerCase()=="radio")
{for(i=0;i<vElement.length;i++)
{if(vElement[i].checked)
{return vElement[i].value;}}
return null;}
else if((vElement[0]&&vElement[0].type&&vElement[0].type.toLowerCase()=="radio")||(vElement.type&&vElement.type.toLowerCase()=="checkbox"))
{return vElement.checked?vElement.value:null;}
else if(vElement.tagName&&vElement.tagName.toLowerCase()=="select")
{if(vElement.multiple)
{var arrRet=[];for(i=0;i<vElement.options.length;i++)
{if(vElement.options[i].selected)
{arrRet.push(vElement.options[i].value);}}
return arrRet;}
else
{return vElement.options[vElement.selectedIndex].value;}}
else
{return vElement.value;}};vp.forms.setValue=function forms_setValue(vElement,vValue)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
vElement=vp.forms.getFormElement(vElement);var i;if(vElement[0]&&vElement[0].type&&vElement[0].type.toLowerCase()=="radio")
{for(i=0;i<vElement.length;i++)
{if(vElement[i].value==vValue)
{vElement[i].checked=true;return;}}}
else if((vElement[0]&&vElement[0].type&&vElement[0].type.toLowerCase()=="radio")||(vElement.type&&vElement.type.toLowerCase()=="checkbox"))
{throw Error("vp.forms.setValue() has no meaning on an individual radio button or checkbox. Use the 'checked' property instead.");}
else if(vElement.tagName.toLowerCase()=="select")
{if(vElement.multiple)
{var arrVals=vValue.length?vValue:[vValue];for(i=0;i<vElement.options.length;i++)
{vElement.options[i].selected=false;for(var j=0;j<arrVals.length;j++)
{if(vElement.options[i].value==arrVals[j])
{vElement.options[i].selected=true;break;}}}}
else
{for(i=0;i<vElement.options.length;i++)
{if(vElement.options[i].value==vValue)
{vElement.selectedIndex=i;break;}}}}
else
{vElement.value=vValue;}};vp.forms.addElement=function forms_addElement(oForm,sType,sName,sValue)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var oInput=document.createElement("INPUT");oInput.type=sType;oInput.name=sName;oInput.value=sValue;oForm.appendChild(oInput);};vp.forms.getRadioGroup=function forms_getRadioGroup(sName,vForm)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var aGroup=null;if(vForm)
{vForm=vp.core.getElement(vForm,"vp.forms.getRadioGroup");aGroup=vForm[sName];}
else
{aGroup=document.getElementsByName(sName);}
if(aGroup&&aGroup.length>0&&aGroup[0].type&&aGroup[0].type.toLowerCase()=="radio")
{return aGroup;}
return null;};vp.forms.insertOption=function forms_insertOption(oSelect,oOption,iIndex)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(typeof(iIndex)=="undefined")
{iIndex=oSelect.options.length;}
if(typeof(oOption)=="string")
{var oNewOption=document.createElement("OPTION");oNewOption.text=oOption;oNewOption.value=oOption;oOption=oNewOption;}
if(oSelect.options.add)
{oSelect.options.add(oOption,iIndex);}
else
{for(var i=oSelect.options.length;i>=iIndex;i--)
{var oTemp=oSelect.options[i];oSelect.options[i]=document.createElement("OPTION");oSelect.options[i+1]=oTemp;}
oSelect.options[iIndex]=oOption;}};vp.forms.removeOption=function forms_removeOption(oSelect,iIndex)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
oSelect.options[iIndex]=null;};vp.forms.removeAllOptions=function forms_removeAllOptions(oSelect)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
while(oSelect.options.length>0)
{oSelect.options[0]=null;}};vp.forms.isTextBox=function forms_isTextBox(vElement)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
vElement=vp.core.getElement(vElement,"vp.forms.isTextBox");var result=false;if(vElement&&vElement.nodeName)
{var tagName=vElement.nodeName.toLowerCase();if((tagName=='input'&&vElement.type&&vElement.type.toLowerCase()=='text')||(tagName=='textarea'))
{result=true;}}
return result;};vp.forms.getSelectedOptionObjects=function forms_getSelectedOptionObjects(oSelect)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var aRet=[];if(oSelect.tagName=="SELECT")
{for(var i=0;i<oSelect.options.length;i++)
{if(oSelect.options[i].selected)
{aRet.push(oSelect.options[i]);}}
return aRet;}};vp.forms.moveSelectedOptionObjects=function forms_moveSelectedOptionObjects(oSelectSource,oSelectTarget)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
for(var i=oSelectSource.options.length-1;i>=0;i--)
{if(oSelectSource.options[i].selected)
{vp.forms.insertOption(oSelectTarget,new Option(oSelectSource.options[i].text,oSelectSource.options[i].value,false,false));vp.forms.removeOption(oSelectSource,i);}}};vp.forms.clearAllOptions=function forms_clearAllOptions(oSelect)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
while(oSelect.options.length>0)
{oSelect.options[0]=null;}};vp.forms._sortOptionsDefaultComparer=function forms__sortOptionsDefaultComparer(a,b)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
return vp.comparer.caseInsensitive(a.value,b.value);};vp.forms.sortOptions=function forms_sortOptions(oSelect,fnComparer)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var aOptions=[];var i;for(i=0;i<oSelect.length;i++)
{aOptions[i]={text:oSelect.options[i].text,value:oSelect.options[i].value,selected:oSelect.options[i].selected};}
if(!fnComparer)
{fnComparer=vp.forms._sortOptionsDefaultComparer;}
aOptions.sort(fnComparer);for(i=0;i<oSelect.length;i++)
{oSelect.options[i].text=aOptions[i].text;oSelect.options[i].value=aOptions[i].value;oSelect.options[i].selected=aOptions[i].selected;}};vp.forms.selectAllOptions=function forms_selectAllOptions(oSelect)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
for(var i=0;i<oSelect.options.length;i++)
{oSelect.options[i].selected=true;}};vp.forms.buildQueryStringFromForm=function forms_buildQueryStringFromForm(vParentElement)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var oParentElement=vp.core.getElement(vParentElement,"buildQueryStringFromForm");var oFieldMap={};var fnRecurse=function pv_fnRecurse(oElement)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(oElement.nodeType==1)
{if(oElement.tagName=="INPUT"||oElement.tagName=="TEXTAREA"||oElement.tagName=="SELECT")
{if(oElement.name)
{if(oElement.type=="radio")
{if(oElement.checked)
{oFieldMap[oElement.name]=oElement.value;}}
else
{var sValue=vp.forms.getValue(oElement);if(sValue!==null)
{oFieldMap[oElement.name]=sValue;}}}}
for(var i=0;i<oElement.childNodes.length;i++)
{fnRecurse(oElement.childNodes[i]);}}};fnRecurse(oParentElement);var oQS=new vp.web.QueryString();oQS.items=oFieldMap;return oQS;};vp.forms.checkUrlLengthAndSubmitForm=function forms_checkUrlLengthAndSubmitForm(sFormName,fnLogError)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
vp.forms.logErrorIfFormUrlIsTooLong(sFormName,fnLogError);document[sFormName].submit();};vp.forms.MAXIMUM_URL_LENGTH_FOR_GET=2000;vp.forms.logErrorIfFormUrlIsTooLong=function forms_logErrorIfFormUrlIsTooLong(sFormName,fnLogError)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
try
{var oQS=vp.forms.buildQueryStringFromForm(sFormName);var strErrorMessage=null;var intQSLength=0;if(oQS)
{intQSLength=oQS.toString().length;var oUrl=new vp.web.URL(window.location);intQSLength=intQSLength+oUrl.toString().length-oUrl.queryString.length+1;}
if(intQSLength>vp.forms.MAXIMUM_URL_LENGTH_FOR_GET)
{var frmObject=vp.ui.get(sFormName);var oActionUrl=new vp.web.URL(frmObject.action);frmObject.action=oActionUrl.pathname;frmObject.method='post';if(vp.forms.MAXIMUM_URL_LENGTH_FOR_GET>0&&fnLogError)
{fnLogError();}}}
catch(ex)
{}
return true;};


if(!window.__td){window.__MT=100;window.__ti=0;window.__td=[];window.__td.length=__MT;window.__noTrace=false;}
if(typeof vp=="undefined"){var vp={};}
vp.http=function http(){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}};vp.http._checkForValidStatus=function http__checkForValidStatus(oHttp,sUrl)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var iStatus=0;try
{iStatus=oHttp.status;}
catch(e)
{throw new Error("Error trying to contact the URL ("+sUrl+"). This is usually caused by cross-window AJAX calls.");}
if(iStatus!=200&&iStatus!==0)
{if(iStatus==304)
{throw new Error("The URL ("+sUrl+") was cached by the browser. Set no-cache headers on the URL and try again.");}
else
{var oErr=new Error("Received status code "+iStatus+" trying to contact the URL ("+sUrl+").");oErr.httpStatus=iStatus;throw oErr;}}};vp.http.createRequest=function http_createRequest()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(typeof XMLHttpRequest!="undefined")
{return new XMLHttpRequest();}
else if(typeof ActiveXObject!="undefined")
{try
{return new ActiveXObject("MSXML2.XmlHttp");}
catch(ex)
{throw new Error("vp.http.createRequest() failed: Could not create ActiveX object.");}}
else
{throw new Error("vp.http.createRequest() failed: No XMLHttp implementation available.");}};vp.http.enabled=function http_enabled()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(typeof XMLHttpRequest!="undefined")
{return true;}
else if(typeof ActiveXObject!="undefined")
{try
{var oHttp=new ActiveXObject("MSXML2.XmlHttp");return true;}
catch(ex)
{return false;}}
else
{return false;}};vp.http.get=function http_get(sUrl)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var oHttp=this.createRequest();oHttp.open("get",sUrl,false);try
{oHttp.send(null);}
catch(oError)
{throw new Error("Error occurred while requesting URL ("+sUrl+"):"+oError.message);}
this._checkForValidStatus(oHttp,sUrl);return oHttp.responseText;};vp.http.getAsync=function http_getAsync(sUrl,fnCallback,fnErrorHandler)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var oHttp=vp.http.createRequest();oHttp.open("get",sUrl,true);oHttp.onreadystatechange=function()
{if(oHttp.readyState==4)
{try
{vp.http._checkForValidStatus(oHttp,sUrl);}
catch(ex)
{if(fnErrorHandler)
{fnErrorHandler(ex);return;}
else
{throw ex;}}
if(fnCallback)
{var fnCallbackWrapper=function pv_fnCallbackWrapper()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
fnCallback(oHttp.responseText);};setTimeout(fnCallbackWrapper,1);}
oHttp.onreadystatechange=function(){};}};try
{oHttp.send(null);}
catch(ex)
{if(fnErrorHandler)
{fnErrorHandler(ex);return;}
else
{throw new Error("Error occurred while requesting URL ("+sUrl+"):"+ex.message);}}};vp.http.imagePing=function http_imagePing(sUrl){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var oImage=new Image();oImage.src=sUrl;};vp.http.ping=function http_ping(sUrl){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
this.getAsync(sUrl,new Function(),new Function());};vp.http.post=function http_post(sUrl,sData)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var oHttp=vp.http.createRequest();oHttp.open("POST",sUrl,false);oHttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded");oHttp.setRequestHeader("Content-Length",sData.toString().length.toString());try
{oHttp.send(sData);}
catch(oError)
{throw new Error("Error occurred while requesting URL ("+sUrl+"):"+oError.message);}
vp.http._checkForValidStatus(oHttp,sUrl);return oHttp.responseText;};vp.http.postAsync=function http_postAsync(sUrl,sData,fnCallback,fnErrorHandler,iAttemptCount)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(typeof(iAttemptCount)=="undefined")
{iAttemptCount=3;}
var oHttp=this.createRequest();oHttp.open("POST",sUrl,true);oHttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded");oHttp.setRequestHeader("Content-Length",sData.toString().length.toString());if(fnCallback)
{var fnCheckForValidStatus=vp.http._checkForValidStatus;oHttp.onreadystatechange=function()
{if(oHttp.readyState==4)
{try
{fnCheckForValidStatus(oHttp,sUrl);}
catch(ex)
{if(ex.httpStatus>=400)
{if(iAttemptCount>0)
{var fnRepost=function pv_fnRepost()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
vp.http.postAsync(sUrl,sData,fnCallback,fnErrorHandler,iAttemptCount-1);};setTimeout(fnRepost,1000);return;}}
if(fnErrorHandler)
{fnErrorHandler(ex);return;}
else
{throw ex;}}
var fnCallbackWrapper=function pv_fnCallbackWrapper()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
fnCallback(oHttp.responseText);};setTimeout(fnCallbackWrapper,1);oHttp.onreadystatechange=function(){};}};}
try
{oHttp.send(sData);}
catch(oError)
{throw new Error("Error occurred while requesting URL ("+sUrl+"):"+oError.message);}};vp.http.postXml=function http_postXml(sUrl,sData){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var oHttp=this.createRequest();oHttp.open("POST",sUrl,false);oHttp.setRequestHeader("Content-Type","text/xml");try{oHttp.send(sData);}catch(oError){throw new Error("Error occurred while requesting URL ("+sUrl+"):"+oError.message);}
this._checkForValidStatus(oHttp,sUrl);return oHttp.responseText;};vp.http.postXmlAsync=function http_postXmlAsync(sUrl,sData,fnCallback){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var oHttp=this.createRequest();oHttp.open("POST",sUrl,true);oHttp.setRequestHeader("Content-Type","text/xml");oHttp.onreadystatechange=function(){if(oHttp.readyState==4){vp.http._checkForValidStatus(oHttp,sUrl);if(fnCallback)
{var fnCallbackWrapper=function pv_fnCallbackWrapper()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
fnCallback(oHttp.responseText);};setTimeout(fnCallbackWrapper,1);}
oHttp.onreadystatechange=function(){};}};try{oHttp.send(sData);}catch(oError){throw new Error("Error occurred while requesting URL ("+sUrl+"):"+oError.message);}};vp.http.parseJSON=function http_parseJSON(sData)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
try
{return eval("("+sData+")");}
catch(ex)
{throw new Error("Invalid JSON:"+sData);}};vp.http.populateNodeFromServer=function http_populateNodeFromServer(vNodeOrId,sUrl,vPostData,fnCallback,fnErrorHandler)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var oNode=vp.core.getElement(vNodeOrId,"vp.http.populateNodeFromServer");var fnCallbackWrapper=function pv_fnCallbackWrapper(sResponse)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
try
{vp.http.populateNodeWithHTML(oNode,sResponse);}
catch(ex)
{fnErrorHandler(ex);return;}
fnCallback();};if(vPostData)
{var sPostData=vPostData;if(typeof(sPostData)!="string")
{sPostData=vp.web.createQueryString(vPostData);}
vp.http.postAsync(sUrl,sPostData,fnCallbackWrapper,fnErrorHandler);}
else
{vp.http.getAsync(sUrl,fnCallbackWrapper,fnErrorHandler);}};vp.http.populateNodeWithHTML=function http_populateNodeWithHTML(vNodeOrId,sHTML)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var oNode=vp.core.getElement(vNodeOrId,"vp.http.populateNodeWithHTML");oNode.innerHTML=sHTML;var aScripts=oNode.getElementsByTagName("SCRIPT");for(var i=0;i<aScripts.length;i++)
{eval(aScripts[i].innerHTML);}};vp.http.getBrowserMaxURLSize=function http_getBrowserMaxURLSize()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
return vp.ui.browserSupportsPNG()?1900:760;};vp.http.getURLSizedForGET=function http_getURLSizedForGET(vUrl,vPotentiallyLargeParams,fnCallback)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var sUrl=vUrl.toString();if(sUrl.length<vp.http.getBrowserMaxURLSize())
{return sUrl;}
var oUrl=new vp.web.URL(sUrl);var sQueryString;if(!vPotentiallyLargeParams)
{sQueryString=oUrl.queryString;oUrl.queryString="";}
else
{var aParams;if(typeof(vPotentiallyLargeParams)=="string")
{aParams=[];aParams.add(vPotentiallyLargeParams);}
else
{aParams=vPotentiallyLargeParams;}
var oData={};for(var i=0;i<aParams.length;i++)
{var sValue=oUrl.getItem(aParams[i]);if(sValue)
{oData[aParams[i]]=sValue;oUrl.removeItem(aParams[i]);}}
sQueryString=vp.web.createQueryString(oData);}
var oPostData=new vp.web.QueryString();oPostData.setItem("long_url_storage_data",sQueryString);var fnCallbackWrapper=function pv_fnCallbackWrapper(sResponse)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var oResponse=vp.http.parseJSON(sResponse);if(oResponse.isError)
{throw new Error("Couldn't store text data: "+oResponse.message);}
oUrl.setItem("long_url_storage_id",oResponse.id);var sUrl=oUrl.toString();if(sUrl.length>vp.http.getBrowserMaxURLSize())
{throw new Error("URL too long for GET");}
if(fnCallback)
{fnCallback(oUrl.toString());return false;}
else
{return oUrl.toString();}};if(fnCallback)
{vp.http.postAsync(vp.http._urlDataStorageWebServiceURL,oPostData.toString(),fnCallbackWrapper);return false;}
else
{return fnCallbackWrapper(vp.http.post(vp.http._urlDataStorageWebServiceURL,oPostData.toString()));}};vp.http._urlDataStorageWebServiceURL="/services/long-url-storage-service.aspx";(function(){var m={'\b':'\\b','\t':'\\t','\n':'\\n','\f':'\\f','\r':'\\r','"':'\\"','\\':'\\\\'},s={'boolean':function(x){return String(x);},'null':function(x){return"null";},number:function(x){return isFinite(x)?String(x):'null';},string:function(x){if(/["\\\x00-\x1f]/.test(x)){x=x.replace(/([\x00-\x1f\\"])/g,function(a,b){var c=m[b];if(c){return c;}
c=b.charCodeAt();return'\\u00'+
Math.floor(c/16).toString(16)+
(c%16).toString(16);});}
return'"'+x+'"';},array:function(x){var a=['['],b,f,i,l=x.length,v;for(i=0;i<l;i+=1){v=x[i];f=s[typeof v];if(f){v=f(v);if(typeof v=='string'){if(b){a[a.length]=',';}
a[a.length]=v;b=true;}}}
a[a.length]=']';return a.join('');},object:function(x){if(x){if(x instanceof Array){return s.array(x);}
var a=['{'],b,f,i,v;for(i in x){v=x[i];f=s[typeof v];if(f){v=f(v);if(typeof v=='string'){if(b){a[a.length]=',';}
a.push(s.string(i),':',v);b=true;}}}
a[a.length]='}';return a.join('');}
return'null';}};vp.http.serializeJSON=function http_serializeJSON(o){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
return s.object(o);};})();


if(!window.__td){window.__MT=100;window.__ti=0;window.__td=[];window.__td.length=__MT;window.__noTrace=false;}
if(typeof vp=="undefined"){var vp={};}
if(!vp.text)
{vp.text=function text(){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}};}
vp.text.htmlPattern=/<(?:.|\s)*?>/g;vp.text.hasRtlText=function text_hasRtlText(sText){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(typeof sText!="string")
{throw new Error("vp.text.hasRtlText(): Text is null.");}
var iLen=sText.length;for(var i=0;i<iLen;i++)
{if(vp.text.isRtlCode(sText.charCodeAt(i)))
{return true;}}
return false;};vp.text.isRtlCode=function text_isRtlCode(iCode){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(iCode<0x0590){return false;}else if(iCode<=0x074f){return true;}else if(iCode<0x0780){return false;}else if(iCode<=0x07bf){return true;}else if(iCode<0xfb1d){return false;}else if(iCode<=0xfefc){return true;}else{return false;}};vp.text.stripHtml=function text_stripHtml(sText){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(typeof sText!="string"){throw new Error("vp.text.stripHtml(): Text is null.");}
return sText.replace(this.htmlPattern,"");};vp.text.stripRtlText=function text_stripRtlText(sText){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(typeof sText!="string")
{throw new Error("vp.text.stripRtlText(): Text is null.");}
var aOut=[];var iLen=sText.length;for(var i=0;i<iLen;i++)
{if(!vp.text.isRtlCode(sText.charCodeAt(i)))
{aOut.push(sText.charAt(i));}}
return aOut.join("");};RegExp.escape=function(text)
{if(!arguments.callee.sRE)
{var specials=['/','.','*','+','?','|','(',')','[',']','{','}','\\','$','#','@',' ','%'];arguments.callee.sRE=new RegExp('(\\'+specials.join('|\\')+')','g');}
return text.replace(arguments.callee.sRE,'\\$1');};vp.text.replace=function text_replace(sText,sFind,sReplace,bCaseInsensitive)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var sRegExp=RegExp.escape(sFind);var sOptions=bCaseInsensitive?"gi":"g";var oRegExp=new RegExp(sRegExp,sOptions);return sText.replace(oRegExp,sReplace);};vp.text.trim=function text_trim(sText){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
try
{sText=sText.toString();}
catch(e)
{throw new Error("vp.text.trim(): Argument could not be converted to a string.");}
return sText.replace(/^\s*(.*?)\s*$/,"$1");};String.prototype.trim=function(){return vp.text.trim(this);};vp.text.truncate=function text_truncate(sStr,iLen)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(sStr.length-3>iLen)
{return sStr.substr(0,iLen)+"...";}
else
{return sStr;}};String.prototype.startsWith=function(sPrefix,bCaseInsensitive)
{if(!sPrefix)
{return false;}
if(sPrefix.length>this.length)
{return false;}
var sSubject=bCaseInsensitive?this.toLowerCase():this;var sCompareTo=bCaseInsensitive?sPrefix.toLowerCase():sPrefix;return sSubject.substring(0,sPrefix.length)===sCompareTo;};String.prototype.truncate=function(iLen){return vp.text.truncate(this,iLen);};String.prototype.format=function()
{var sStr=this;for(var i=0;i<arguments.length;i++)
{var oRe=new RegExp('\\{'+(i)+'\\}','gm');sStr=sStr.replace(oRe,arguments[i]);}
return sStr;};


if(!window.__td){window.__MT=100;window.__ti=0;window.__td=[];window.__td.length=__MT;window.__noTrace=false;}
if(typeof vp=="undefined"){var vp={};}
vp.ui=function ui(){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}};vp.ui.expand=function ui_expand(vElement)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
vElement=vp.core.getElement(vElement,"vp.ui.expand");vElement.style.display="";};vp.ui.expandToBlock=function ui_expandToBlock(vElement)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
vElement=vp.core.getElement(vElement,"vp.ui.expandToBlock");vElement.style.display="block";};vp.ui.collapse=function ui_collapse(vElement)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
vElement=vp.core.getElement(vElement,"vp.ui.collapse");vElement.style.display="none";};vp.ui.toggleDisplay=function ui_toggleDisplay(vElement,bDisplayBlock)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var objElem=vp.core.getElement(vElement,"vp.ui.toggleDisplay");if(objElem)
{if(objElem.style.display=="none")
{if(bDisplayBlock)
{objElem.style.display="block";}
else
{objElem.style.display="";}}
else
{objElem.style.display="none";}}};vp.ui.expandAndCollapse=function ui_expandAndCollapse(vElementToExpand,vElementToCollapse)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
vp.ui.collapse(vElementToCollapse);vp.ui.expand(vElementToExpand);};vp.ui.expandToBlockAndCollapse=function ui_expandToBlockAndCollapse(vElementToExpand,vElementToCollapse)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
vp.ui.collapse(vElementToCollapse);vp.ui.expandToBlock(vElementToExpand);};vp.ui.show=function ui_show(vElement)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
vElement=vp.core.getElement(vElement,"show");vElement.style.visibility="visible";vElement.style.display="";};vp.ui.hide=function ui_hide(vElement)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
vElement=vp.core.getElement(vElement,"vp.ui.hide");vElement.style.visibility="hidden";};vp.ui.isVisible=function ui_isVisible(vElement)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
vElement=vp.core.getElement(vElement,"vp.ui.isVisible");return vp.ui.getCurrentStyle(vElement,"visibility")!="hidden";};vp.ui.isCollapsed=function ui_isCollapsed(vElement)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
vElement=vp.core.getElement(vElement,"vp.ui.isCollapsed");return vp.ui.getCurrentStyle(vElement,"display")=="none";};vp.ui.get=function ui_get(sId)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(typeof sId!="string")
{throw new Error("Call to vp.ui.get() with a non-string identifier.");}
return(document.getElementById?document.getElementById(sId):document.all[sId]);};vp.ui.getChildrenBySelector=function ui_getChildrenBySelector(vElement,sSelector)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
vElement=vp.core.getElement(vElement,"vp.ui.getChildrenBySelector");var aFound=[];var iFoundCount=0;var aTokens=sSelector.split(' ');var aCurrentContext=new Array(vElement);var iCurrentContextIndex=0;for(var i=0;i<aTokens.length;i++)
{var oToken=aTokens[i].replace(/^\s+/,'').replace(/\s+$/,'');;if(oToken.indexOf('#')>-1)
{var aIdBits=oToken.split('#');var sTagName=aIdBits[0];var sId=aIdBits[1];var oElement=vp.ui.get(sId);if(sTagName&&oElement.nodeName.toLowerCase()!=sTagName)
{return[];}
aCurrentContext=new Array(oElement);continue;}
if(oToken.indexOf('.')>-1)
{var aClassBits=oToken.split('.');var sClassTagName=aClassBits[0];var sClassName=aClassBits[1];if(!sClassTagName)
{sClassTagName='*';}
aFound=[];iFoundCount=0;for(var h=0;h<aCurrentContext.length;h++)
{var aTagElements;if(sClassTagName=='*')
{aTagElements=vp.ui.getAllChildren(aCurrentContext[h]);}
else
{aTagElements=aCurrentContext[h].getElementsByTagName(sClassTagName);}
for(var j=0;j<aTagElements.length;j++)
{aFound[iFoundCount]=aTagElements[j];iFoundCount++;}}
aCurrentContext=[];iCurrentContextIndex=0;for(var k=0;k<aFound.length;k++)
{if(aFound[k].className&&aFound[k].className.match(new RegExp('(?:^|\\s)'+sClassName+'(?:\\s|$)')))
{aCurrentContext[iCurrentContextIndex]=aFound[k];iCurrentContextIndex++;}}
continue;}
if(oToken.match(/^(\w*)\[(\w+)([=~\|\^\$\*]?)=?"?([^\]"]*)"?\]$/))
{var sAttrSelectorTagName=RegExp.$1;var sAttrName=RegExp.$2;var sAttrOperator=RegExp.$3;var sAttrValue=RegExp.$4;if(!sAttrSelectorTagName)
{sAttrSelectorTagName='*';}
aFound=[];iFoundCount=0;for(var q=0;q<aCurrentContext.length;q++)
{var aElements;if(sAttrSelectorTagName=='*')
{aElements=vp.ui.getAllChildren(aCurrentContext[q]);}
else
{aElements=aCurrentContext[q].getElementsByTagName(sAttrSelectorTagName);}
for(var p=0;p<aElements.length;p++)
{aFound[iFoundCount]=aElements[p];iFoundCount++;}}
aCurrentContext=[];iCurrentContextIndex=0;var fCheckFunction;switch(sAttrOperator)
{case'=':fCheckFunction=function(e){return(e.getAttribute(sAttrName)==sAttrValue);};break;case'~':fCheckFunction=function(e){return(e.getAttribute(sAttrName).match(new RegExp('\\b'+sAttrValue+'\\b')));};break;case'|':fCheckFunction=function(e){return(e.getAttribute(sAttrName).match(new RegExp('^'+sAttrValue+'-?')));};break;case'^':fCheckFunction=function(e){return(e.getAttribute(sAttrName).indexOf(sAttrValue)===0);};break;case'$':fCheckFunction=function(e){return(e.getAttribute(sAttrName).lastIndexOf(sAttrValue)===e.getAttribute(sAttrName).length-sAttrValue.length);};break;case'*':fCheckFunction=function(e){return(e.getAttribute(sAttrName).indexOf(sAttrValue)>-1);};break;default:fCheckFunction=function(e){return e.getAttribute(sAttrName);};break;}
aCurrentContext=[];iCurrentContextIndex=0;for(var l=0;l<aFound.length;l++)
{if(fCheckFunction(aFound[l]))
{aCurrentContext[iCurrentContextIndex]=aFound[l];iCurrentContextIndex++;}}
continue;}
if(!aCurrentContext[0])
{return[];}
sTagName=oToken;aFound=[];iFoundCount=0;for(var m=0;m<aCurrentContext.length;m++)
{var aTagOnlyElements=aCurrentContext[m].getElementsByTagName(sTagName);for(var n=0;n<aTagOnlyElements.length;n++)
{aFound[iFoundCount]=aTagOnlyElements[n];iFoundCount++;}}
aCurrentContext=aFound;}
return aCurrentContext;};vp.ui.getBySelector=function ui_getBySelector(sSelector)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(document.querySelectorAll)
{return document.querySelectorAll(sSelector);}
if(!document.getElementsByTagName)
{return[];}
return vp.ui.getChildrenBySelector(document,sSelector);};vp.ui.createElement=function ui_createElement(sTagName,oAttributes,vCssStringOrPropertyMap,oDocument)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
oDocument=oDocument||document;var oElem=oDocument.createElement(sTagName);if(oAttributes)
{for(var sAttr in oAttributes)
{if(typeof(oElem[sAttr])=="undefined")
{oElem.setAttribute(sAttr,oAttributes[sAttr]);}
else if(sAttr=="style"&&!vCssStringOrPropertyMap)
{vCssStringOrPropertyMap=oAttributes[sAttr];}
else if(sAttr=="class")
{oElem.className=oAttributes[sAttr];}
else
{oElem[sAttr]=oAttributes[sAttr];}}}
if(vCssStringOrPropertyMap)
{vp.ui.setStyle(oElem,vCssStringOrPropertyMap);}
return oElem;};vp.ui.createNamedElement=function ui_createNamedElement(sTagName,sName)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var oElement;try{oElement=document.createElement('<'+sTagName+' name="'+sName+'"/>');if(!oElement||oElement.tagName!=sTagName.toUpperCase()||oElement.name!=sName)
{throw new Error("not IE, bomb out and use W3C standard");}}
catch(ex)
{oElement=document.createElement(sTagName);oElement.name=sName;}
return oElement;};vp.ui.createElementFromHTML=function ui_createElementFromHTML(sHTML)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var oTemp=document.createElement("DIV");oTemp.innerHTML=sHTML;var oInner=oTemp.firstChild;vp.ui.removeFromDOM(oInner);return oInner;};vp.ui.getElementByAttribute=function ui_getElementByAttribute(sAttribute,sValue,oRootNode)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(!oRootNode)
{oRootNode=vp.ui.getRootElement();}
if(oRootNode.nodeType==1)
{if(oRootNode.getAttribute(sAttribute)==sValue)
{return oRootNode;}
for(var i=0;i<oRootNode.childNodes.length;i++)
{var oRet=vp.ui.getElementByAttribute(sAttribute,sValue,oRootNode.childNodes[i]);if(oRet)
{return oRet;}}}
return null;};vp.ui.collectElementsByAttribute=function ui_collectElementsByAttribute(oRootElement,sAttribute)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var oCollection={};var fnRecurse=function pv_fnRecurse(oElement)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(oElement.nodeType==1)
{var sAttrVal=oElement.getAttribute(sAttribute);if(sAttrVal)
{oCollection[sAttrVal]=oElement;}
for(var i=0;i<oElement.childNodes.length;i++)
{fnRecurse(oElement.childNodes[i]);}}};fnRecurse(oRootElement);return oCollection;};vp.ui.getSpecifiedAttributes=function ui_getSpecifiedAttributes(oNode)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var aAttributes=[];for(var i=0;i<oNode.attributes.length;i++)
{if(oNode.attributes[i].specified)
{aAttributes.add(oNode.attributes[i]);}}
return aAttributes;};vp.ui.addClass=function ui_addClass(vElement,sClass){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
vElement=vp.core.getElement(vElement,"addClass");if(!vp.ui.hasClass(vElement,sClass))
{var aClasses=vElement.className.split(/\s+/g);aClasses[aClasses.length]=sClass;vElement.className=aClasses.join(" ");}};vp.ui.hasClass=function ui_hasClass(vElement,sClass){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
vElement=vp.core.getElement(vElement,"vp.ui.hasClass");if(!vElement.className)
{return false;}
var aClasses=vElement.className.split(/\s+/g);;for(var i=0;i<aClasses.length;i++)
{if(aClasses[i]==sClass)
{return true;}}
return false;};vp.ui.removeClass=function ui_removeClass(vElement,sClass)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
vElement=vp.core.getElement(vElement,"vp.ui.removeClass");var aClasses=vElement.className.split(/\s+/g);;for(var i=0;i<aClasses.length;i++)
{if(aClasses[i]==sClass)
{aClasses[i]="";}}
vElement.className=aClasses.join(" ");};vp.ui.setStyle=function ui_setStyle(vElement,vCssStringOrPropertyMap,bClearExistingStyles)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var oElement=vp.core.getElement(vElement,"vp.ui.setStyle");if(!vCssStringOrPropertyMap)
{vElement.cssText="";return;}
var oPropertyMap;if(typeof(vCssStringOrPropertyMap)=="string")
{var oCss=new vp.web.CssString(vCssStringOrPropertyMap);oPropertyMap=oCss.items;}
else if(typeof(vCssStringOrPropertyMap)=="object")
{oPropertyMap=vCssStringOrPropertyMap;}
if(bClearExistingStyles)
{oElement.cssText="";}
for(var sProp in oPropertyMap)
{vp.ui.setStyleValue(oElement,sProp,oPropertyMap[sProp]);}};vp.ui.setStyleValue=function ui_setStyleValue(vElement,sProperty,sValue)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
vElement=vp.core.getElement(vElement,"vp.ui.setStyleValue");sProperty=vp.ui.convertCssPropertyToCssFormat(sProperty);switch(sProperty.toLowerCase())
{case"float":case"cssfloat":case"stylefloat":vElement.style.cssFloat=sValue;vElement.style.styleFloat=sValue;break;case"opacity":vp.ui.setOpacity(vElement,sValue);break;case"cursor":var sParsedValue=sValue.toLowerCase();if(sParsedValue=="pointer"||sParsedValue=="hand")
{vElement.style.cursor=document.all?"hand":"pointer";}
else
{vElement.style.cursor=sValue;}
break;case"width":case"height":case"left":case"top":case"right":case"bottom":if(/^[-]*[\d\.]+$/.test(sValue))
{sValue+="px";}
vElement.style[sProperty]=sValue;break;default:vElement.style[sProperty]=sValue;break;}};vp.ui.removeStyle=function ui_removeStyle(vElement,vStyles)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var oElement=vp.core.getElement(vElement,"vp.ui.removeStyle");if(vp.core.isArray(vStyles))
{for(var i=0;i<vStyles.length;i++)
{vp.ui.removeStyleValue(oElement,vStyles[i]);}}
else
{vp.ui.removeStyleValue(oElement,vStyles);}};vp.ui.clearStyle=function ui_clearStyle(vElement)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var oElement=vp.core.getElement(vElement,"vp.ui.removeStyle");oElement.cssText="";};vp.ui.removeStyleValue=function ui_removeStyleValue(vElement,sStyle)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var oElement=vp.core.getElement(vElement,"vp.ui.removeStyle");var oCss=new vp.web.CssString(oElement.style.cssText);var sCssStyle=vp.ui.convertCssPropertyToStringFormat(sStyle);oCss.removeItem(sCssStyle);oCss.removeItem(sCssStyle.toUpperCase());var sVal=oCss.toString();if(sVal.length===0)
{oElement.removeAttribute("style");}
else
{oElement.style.cssText=oCss.toString();}};vp.ui.removeStyleRecursive=function ui_removeStyleRecursive(oNode,sStyle)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(oNode.nodeType==1)
{vp.ui.removeStyleValue(oNode,sStyle);var oChildren=oNode.childNodes;var iLen=oChildren.length;for(var i=0;i<iLen;i++)
{vp.ui.removeStyleRecursive(oChildren[i],sStyle);}}};vp.ui.getCurrentStyle=function ui_getCurrentStyle(vElement,sProperty)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
vElement=vp.core.getElement(vElement,"vp.ui.getCurrentStyle");var oDocument=vElement.ownerDocument;var value=null;if(document.all&&sProperty=="opacity"&&vElement.filters)
{value=1;try
{value=vElement.filters.item("DXImageTransform.Microsoft.Alpha").opacity/100;}
catch(e)
{try
{value=vElement.filters.item("alpha").opacity/100;}
catch(e){}}}
else if(vElement.style[sProperty])
{value=vElement.style[sProperty];}
else if(vElement.currentStyle&&vElement.currentStyle[sProperty])
{value=vElement.currentStyle[sProperty];}
else if(oDocument.defaultView&&oDocument.defaultView.getComputedStyle)
{var oComputedStyle=oDocument.defaultView.getComputedStyle(vElement,"");if(oComputedStyle)
{value=oComputedStyle.getPropertyValue(vp.ui.convertCssPropertyToStringFormat(sProperty))||null;}}
if(sProperty=="fontWeight")
{if(value==400)
{value="normal";}
else if(value==700)
{value="bold";}}
if(!document.all&&sProperty=="textAlign")
{value=value.replace("-moz-","");}
return value;};vp.ui._styleObjToCSSMap={};vp.ui.convertCssPropertyToStringFormat=function ui_convertCssPropertyToStringFormat(sProperty)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(!vp.ui._styleObjToCSSMap[sProperty])
{var sOut="";for(var i=0,len=sProperty.length;i<len;++i)
{if(sProperty.charAt(i)==sProperty.charAt(i).toUpperCase())
{sOut=sOut+'-'+sProperty.charAt(i).toLowerCase();}
else
{sOut=sOut+sProperty.charAt(i);}}
vp.ui._styleObjToCSSMap[sProperty]=sOut;}
return vp.ui._styleObjToCSSMap[sProperty];};vp.ui._styleCSSToObjMap={};vp.ui.convertCssPropertyToCssFormat=function ui_convertCssPropertyToCssFormat(sProperty)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(!vp.ui._styleCSSToObjMap[sProperty])
{if(sProperty.indexOf("-")!=-1)
{var aOut=[];for(var i=0,len=sProperty.length;i<len;++i)
{var sChar=sProperty.charAt(i);if(sChar=="-")
{i++;sChar=sProperty.charAt(i).toUpperCase();aOut.push(sChar);}
else
{aOut.push(sChar);}}
vp.ui._styleCSSToObjMap[sProperty]=aOut.join("");}
else
{vp.ui._styleCSSToObjMap[sProperty]=sProperty;}}
return vp.ui._styleCSSToObjMap[sProperty];};vp.ui.getCssRule=function ui_getCssRule(sSelectorText,oDocument)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(!oDocument)
{oDocument=document;}
if(!oDocument.styleSheets)
{return null;}
sSelectorText=sSelectorText.toLowerCase();for(var i=0;i<oDocument.styleSheets.length;i++)
{var aRules=document.all?oDocument.styleSheets[i].rules:oDocument.styleSheets[i].cssRules;for(var j=0;j<aRules.length;j++)
{if(aRules[j].selectorText.toLowerCase()==sSelectorText)
{return aRules[j];}}}
return null;};vp.ui.getRect=function ui_getRect(vElement)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
vElement=vp.core.getElement(vElement,"vp.ui.getRect");if(vElement.nodeType!=1)
{throw new Error("vp.ui.getRect doesn't support nodes with type "+vElement.nodeType);}
var oDocument=vElement.ownerDocument;var oRect={};oRect.top=0;oRect.left=0;oRect.bottom=0;oRect.right=0;var oBox;if(vElement.getBoundingClientRect)
{try
{oBox=vElement.getBoundingClientRect();}
catch(ex)
{if(ex.number==-2147467259)
{throw new Error("vp.ui.getRect cannot get a rectangle for the specified element because it has not been rendered.");}
throw ex;}
var iScrollTop=Math.max(oDocument.documentElement.scrollTop,oDocument.body.scrollTop);var iScrollLeft=Math.max(oDocument.documentElement.scrollLeft,oDocument.body.scrollLeft);var iIEHack=document.all?2:0;oRect.top=(oBox.top+iScrollTop)-iIEHack;oRect.left=(oBox.left+iScrollLeft)-iIEHack;oRect.bottom=oRect.top-(oBox.top-oBox.bottom);oRect.right=oRect.left+(oBox.right-oBox.left);}
else if(oDocument.getBoxObjectFor)
{oBox=oDocument.getBoxObjectFor(vElement);var iBorderLeft=parseInt(vp.ui.getCurrentStyle(vElement,'borderLeftWidth'));var iBorderTop=parseInt(vp.ui.getCurrentStyle(vElement,'borderTopWidth'));oRect.left=oBox.x-iBorderLeft;oRect.top=oBox.y-iBorderTop;var oParent=vElement.offsetParent;while(oParent&&oParent.tagName!="BODY")
{var sOverflowY=vp.ui.getCurrentStyle(oParent,"overflowY");if(sOverflowY=="auto"||sOverflowY=="scroll")
{oRect.top-=oParent.scrollTop;}
var sOverflowX=vp.ui.getCurrentStyle(oParent,"overflowX");if(sOverflowX=="auto"||sOverflowX=="scroll")
{oRect.left-=oParent.scrollLeft;}
oParent=oParent.parentNode;}
oRect.bottom=oRect.top+oBox.height;oRect.right=oRect.left+oBox.width;}
else
{var oTemp=vElement;var fZoom;while(oTemp!==null)
{fZoom=vp.ui._getZoom(oTemp);oRect.top*=fZoom;oRect.left*=fZoom;oRect.top+=oTemp.offsetTop;oRect.left+=oTemp.offsetLeft;if(oTemp.tagName!="BODY"&&oTemp!=vElement)
{oRect.top-=oTemp.scrollTop;oRect.left-=oTemp.scrollLeft;}
oTemp=oTemp.offsetParent;}
fZoom=vp.ui._getZoom(vElement);oRect.right=Math.round(vElement.offsetWidth*fZoom)+oRect.left;oRect.bottom=Math.round(vElement.offsetHeight*fZoom)+oRect.top;}
oRect.width=oRect.right-oRect.left;oRect.height=oRect.bottom-oRect.top;return oRect;};vp.ui._getZoom=function ui__getZoom(oObj)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var val=parseFloat(oObj.style.zoom);return isNaN(val)?1:val;};vp.ui.getTop=function ui_getTop(vElement)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
vElement=vp.core.getElement(vElement,"vp.ui.getTop");return vp.ui.getRect(vElement).top;};vp.ui.getLeft=function ui_getLeft(vElement)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
vElement=vp.core.getElement(vElement,"vp.ui.getLeft");return vp.ui.getRect(vElement).left;};vp.ui.getHeight=function ui_getHeight(vElement)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
vElement=vp.core.getElement(vElement,"vp.ui.getHeight");return vElement.offsetHeight;};vp.ui.getWidth=function ui_getWidth(vElement)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
vElement=vp.core.getElement(vElement,"vp.ui.getWidth");return vElement.offsetWidth;};vp.ui.getScrollRect=function ui_getScrollRect(vElement)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
vElement=vp.core.getElement(vElement,"vp.ui.getScrollRect");var oRet=vp.ui.getRect(vElement);var oScrollOffset=vp.ui.getScrollOffset();oRet.width+=oScrollOffset.width;oRet.height+=oScrollOffset.height;return oRet;};vp.ui.isPointInRect=function ui_isPointInRect(iX,iY,oRect)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(typeof iX!="number")
{throw new Error("vp.ui.isPointInRect(): The x-coordinate must be a number.");}
else if(typeof iY!="number")
{throw new Error("vp.ui.isPointInRect(): The y-coordinate must be a number.");}
else if(!oRect||typeof oRect.left!="number"||typeof oRect.top!="number")
{throw new Error("vp.ui.isPointInRect(): Invalid rectangle passed in.");}
return((iX>=oRect.left)&&(iX<=oRect.left+oRect.width)&&(iY>=oRect.top)&&(iY<=oRect.top+oRect.height));};vp.ui.expandRect=function ui_expandRect(oRect,iExpandBy)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var oNewRect={left:oRect.left-iExpandBy,top:oRect.top-iExpandBy,width:oRect.width+(iExpandBy*2),height:oRect.height+(iExpandBy*2)};oNewRect.right=oNewRect.left+oNewRect.width;oNewRect.bottom=oNewRect.top+oNewRect.height;return oNewRect;};vp.ui.moveTo=function ui_moveTo(vElement,iLeft,iTop)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
vElement=vp.core.getElement(vElement,"vp.ui.moveTo");if(typeof iLeft!="number")
{throw new Error("Call to vp.ui.moveTo() with an invalid X coordinate.");}
else if(typeof iTop!="number")
{throw new Error("Call to vp.ui.moveTo() with an invalid Y coordinate.");}
if(vp.ui.getCurrentStyle(vElement,"position")!="absolute"){throw new Error("vp.ui.moveTo(): Can't move an element that isn't absolutely positioned.");}
vElement.style.top=iTop+"px";vElement.style.left=iLeft+"px";};vp.ui.resizeTo=function ui_resizeTo(vElement,iWidth,iHeight)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
vElement=vp.core.getElement(vElement,"vp.ui.resizeTo");if(typeof iWidth!="number")
{throw new Error("Call to vp.ui.resizeTo() with an invalid width.");}
else if(typeof iHeight!="number")
{throw new Error("Call to vp.ui.resizeTo() with an invalid height/");}
vElement.style.width=iWidth+"px";vElement.style.height=iHeight+"px";};vp.ui.setHeight=function ui_setHeight(vElement,iHeight)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
vElement=vp.core.getElement(vElement,"vp.ui.setHeight");if(typeof iHeight!="number")
{throw new Error("Call to vp.ui.setHeight() with an invalid height parameter.");}
vElement.style.height=iHeight+"px";};vp.ui.setMinHeight=function ui_setMinHeight(vElement,iHeight)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
vElement=vp.core.getElement(vElement,"vp.ui.setMinHeight");if(typeof iHeight!="number")
{throw new Error("Call to vp.ui.setHeight() with an invalid height parameter.");}
vElement.style.minHeight=iHeight+"px";};vp.ui.setWidth=function ui_setWidth(vElement,iWidth)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
vElement=vp.core.getElement(vElement,"setWidth");if(typeof iWidth!="number")
{throw new Error("Call to vp.ui.setWidth() with an invalid width parameter.");}
vElement.style.width=iWidth+"px";};vp.ui.insertFirstElement=function ui_insertFirstElement(oTarget,oElement)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var oFirstElement=oTarget.childNodes.length>=1?oTarget.childNodes[0]:null;oTarget.insertBefore(oElement,oFirstElement);};vp.ui.insertAfter=function ui_insertAfter(oNode,oTarget)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(oTarget.nextSibling)
{oTarget.parentNode.insertBefore(oNode,oTarget.nextSibling);}
else
{oTarget.parentNode.appendChild(oNode);}};vp.ui.moveToRoot=function ui_moveToRoot(vElement,bAddToDocumentStart)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
vElement=vp.core.getElement(vElement,"vp.ui.moveToRoot");if(vElement.parentNode!=document.body)
{var oParent=vElement.parentNode;oParent.removeChild(vElement);if(bAddToDocumentStart)
{vp.ui.insertFirstElement(top.document.body,vElement);}
else
{document.body.appendChild(vElement);}}};vp.ui.scrollTo=function ui_scrollTo(vElement)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
vElement=vp.core.getElement(vElement,"vp.ui.scrollTo");var oRec=vp.ui.getRect(vElement);var iTopDif=oRec.top-document.body.scrollTop;if(iTopDif<0)
{if(window.scrollBy)
{window.scrollBy(0,iTopDif);}
else
{vElement.scrollIntoView();}}
var iBottomDif=oRec.bottom-(document.body.scrollTop+vp.ui.getClientHeight());if(iBottomDif>0)
{if(window.scrollBy)
{window.scrollBy(0,iBottomDif);}
else
{vElement.scrollIntoView();}}};vp.ui.scrollToCenterElement=function ui_scrollToCenterElement(vElement)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
vElement=vp.core.getElement(vElement,"vp.ui.scrollToCenterElement");var oRect=vp.ui.getRect(vElement);var viewport=vp.ui.getViewportSize();var scroll=vp.ui.getScrollOffset();var dy=oRect.top+((oRect.height-viewport.height)/2)-scroll.top;var dx=oRect.left+((oRect.width-viewport.width)/2)-scroll.left;window.scrollBy(dx,dy);};vp.ui.setCoord=function ui_setCoord(oObj,sCoord,iValue)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
oObj=oObj.style?oObj.style:oObj;if(sCoord=="top"||sCoord=="left"||sCoord=="width"||sCoord=="height")
{oObj[sCoord]=iValue;}
else if(sCoord=="right")
{oObj.left=oObj.left+oObj.width+iValue;}
else if(sCoord=="bottom")
{oObj.top=oObj.top+oObj.height+iValue;}};vp.ui.getCoord=function ui_getCoord(oObj,sCoord)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
oObj=oObj.style?oObj.style:oObj;if(sCoord=="top"||sCoord=="left")
{return parseInt(oObj[sCoord]);}
else if(sCoord=="right")
{return parseInt(oObj.left)+parseInt(oObj.width);}
else if(sCoord=="bottom")
{return parseInt(oObj.top)+parseInt(oObj.height);}};vp.ui.getLocalRect=function ui_getLocalRect(oObj)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var oRect={};vp.ui.applyPosition(oObj,oRect);oRect.right=oRect.left+oRect.width;oRect.bottom=oRect.top+oRect.height;return oRect;};vp.ui.applyPosition=function ui_applyPosition(oObj1,oObj2)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
oObj1=oObj1.style?oObj1.style:oObj1;oObj2=oObj2.style?oObj2.style:oObj2;oObj2.top=parseInt(oObj1.top);oObj2.left=parseInt(oObj1.left);oObj2.width=parseInt(oObj1.width);oObj2.height=parseInt(oObj1.height);};vp.ui.getStyleRect=function ui_getStyleRect(oObj)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var rect={};rect.top=(oObj.style)?parseInt(oObj.style.top):oObj.top;rect.left=(oObj.style)?parseInt(oObj.style.left):oObj.left;rect.width=(oObj.style)?parseInt(oObj.style.width):oObj.width;rect.height=(oObj.style)?parseInt(oObj.style.height):oObj.height;rect.right=rect.left+rect.width;rect.bottom=rect.top+rect.height;return rect;};vp.ui.applyStyleRect=function ui_applyStyleRect(oObj1,oObj2)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var styleRect=vp.ui.getStyleRect(oObj1);vp.ui.setStyleValue(oObj2,"top",styleRect.top);vp.ui.setStyleValue(oObj2,"left",styleRect.left);vp.ui.setStyleValue(oObj2,"width",styleRect.width);vp.ui.setStyleValue(oObj2,"height",styleRect.height);};vp.ui.disableTextButton=function ui_disableTextButton(vButton)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
vp.ui._enableTextButton(vButton,false,"vp.ui.disableTextButton");};vp.ui.enableTextButton=function ui_enableTextButton(vButton)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
vp.ui._enableTextButton(vButton,true,"vp.ui.enableTextButton");};vp.ui._enableTextButton=function ui__enableTextButton(vButton,bEnable,sMethodName)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var oButton=vp.core.getElement(vButton,sMethodName);var sLinkId=oButton.id+"_link";var sDisabledId=oButton.id+"_disabled";document.getElementById(sLinkId).style.display=bEnable?"":"none";document.getElementById(sDisabledId).style.display=bEnable?"none":"";};vp.ui.setOpacity=function ui_setOpacity(vElement,fOpacity)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var oObj=vp.core.getElement(vElement,"vp.ui.setOpacity");if(typeof oObj.style.opacity!="undefined")
{if(fOpacity==1)
{oObj.style.opacity="";return;}
oObj.style.opacity=fOpacity;}
else
{var oFilter=new vp.ui._IEFilterString(oObj.style.filter);if(fOpacity==1)
{oFilter.removeItem("Alpha");}
else
{try
{if(!oObj.currentStyle.hasLayout)
{if(!oObj.style.zoom)
{oObj.style.zoom=1;}}}catch(e){}
var iOpacity=fOpacity*100;oFilter.setItem("Alpha",{enabled:1,opacity:iOpacity});}
oObj.style.filter=oFilter.toString();}};vp.ui._IEFilterString=function ui__IEFilterString(sFilters)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var _oFilters={};var init=function pv_init()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
sFilters=sFilters.replace(/\s/gi,"");var aFilters=sFilters.split("progid:DXImageTransform.Microsoft.");for(var i=0;i<aFilters.length;i++)
{if(aFilters[i].length>1)
{var iParamListStart=aFilters[i].indexOf("(");var sFilterName=aFilters[i].substring(0,iParamListStart);var sSubParams=aFilters[i].substring(iParamListStart+1,aFilters[i].indexOf(")"));var aSubParams=sSubParams.split(",");var oFilterObj={};for(var j=0;j<aSubParams.length;j++)
{var iEqualsPos=aSubParams[j].indexOf("=");var aPair=[];aPair.add(aSubParams[j].substr(0,iEqualsPos));aPair.add(aSubParams[j].substr(iEqualsPos+1));oFilterObj[aPair[0]]=aPair[1];}
_oFilters[sFilterName]=oFilterObj;}}};this.setItem=function pb_this_setItem(sFilterName,oParams)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
_oFilters[sFilterName]=oParams;};this.removeItem=function pb_this_removeItem(sFilterName)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(_oFilters[sFilterName])
{delete _oFilters[sFilterName];}};this.toString=function pb_this_toString()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var aOut=[];var sSpace="";for(var sProp in _oFilters)
{aOut.add(sSpace+"progid:DXImageTransform.Microsoft."+sProp);aOut.add("(");var sComma="";for(var sSubProp in _oFilters[sProp])
{aOut.add(sComma+sSubProp+"="+_oFilters[sProp][sSubProp]);sComma=",";}
aOut.add(")");sSpace=" ";}
return aOut.join("");};init();};vp.ui.reactivateClickableButton=function ui_reactivateClickableButton(sElementNamespaceId){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
vp.ui.expandAndCollapse('imgEnabledButton'+sElementNamespaceId,'imgDisabledButton'+sElementNamespaceId);};vp.ui.getClientHeight=function ui_getClientHeight(){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(typeof window.innerHeight!="undefined"){return window.innerHeight;}else if(document.documentElement&&typeof document.documentElement.clientHeight!="undefined"&&document.documentElement.clientHeight>0){return document.documentElement.clientHeight;}else if(document.body&&typeof document.body.clientHeight!="undefined"){return document.body.clientHeight;}else{return-1;}};vp.ui.getClientWidth=function ui_getClientWidth(){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(typeof window.innerWidth!="undefined"){return window.innerWidth;}else if(document.documentElement&&typeof document.documentElement.clientWidth!="undefined"&&document.documentElement.clientWidth!==0){return document.documentElement.clientWidth;}else if(document.body&&typeof document.body.clientWidth!="undefined"){return document.body.clientWidth;}else{return-1;}};vp.ui.getViewportSize=function ui_getViewportSize(oWindow)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var oSize={};oWindow=oWindow||window;if(self.innerHeight)
{oSize.width=oWindow.innerWidth;oSize.height=oWindow.innerHeight;}
else if(oWindow.document.documentElement&&oWindow.document.documentElement.clientHeight)
{oSize.width=oWindow.document.documentElement.clientWidth;oSize.height=oWindow.document.documentElement.clientHeight;}
else
{oSize.width=oWindow.document.body.clientWidth;oSize.height=oWindow.document.body.clientHeight;}
return oSize;};vp.ui.getScrollOffset=function ui_getScrollOffset(oWindow)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var oPos={};oWindow=oWindow||window;if(oWindow.pageYOffset)
{oPos.left=oWindow.pageXOffset;oPos.top=oWindow.pageYOffset;}
else if(oWindow.document.documentElement&&oWindow.document.documentElement.scrollTop)
{oPos.left=oWindow.document.documentElement.scrollLeft;oPos.top=oWindow.document.documentElement.scrollTop;}
else
{oPos.left=oWindow.document.body.scrollLeft;oPos.top=oWindow.document.body.scrollTop;}
return oPos;};vp.ui.getPageSize=function ui_getPageSize(oWindow)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
oWindow=oWindow||window;var oRootElement=vp.ui.getRootElement(oWindow.document);if(!oRootElement||oRootElement.scrollHeight<oWindow.document.body.scrollHeight)
{oRootElement=oWindow.document.body;}
var oRet={width:oRootElement.scrollWidth,height:oRootElement.scrollHeight};if(oRootElement.clientWidth>oRootElement.scrollWidth)
{oRet.width=oRootElement.clientWidth;}
if(oRootElement.clientHeight>oRootElement.scrollHeight)
{oRet.height=oRootElement.clientHeight;}
return oRet;};vp.ui.centerElement=function ui_centerElement(vElement)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
vElement=vp.core.getElement(vElement,"vp.ui.centerElement");var viewport=vp.ui.getViewportSize();var scroll=vp.ui.getScrollOffset();vp.ui.moveTo(vElement,(viewport.width-vp.ui.getWidth(vElement))/2+scroll.left,(viewport.height-vp.ui.getHeight(vElement))/2+scroll.top);};vp.ui.preloadImages=function ui_preloadImages(aImages)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
try
{var iLen=aImages.length;for(var i=0;i<iLen;i++)
{var oImg=document.createElement("IMG");if(window.isDebug)
{var sSrc=aImages[i];oImg.onerror=function(){throw new Error("Debug only error: An attempt to preload "+sSrc+" was made, but the image couldn't be found.");};}
oImg.src=aImages[i];}}
catch(ex)
{if(window.isDebug)
{throw ex;}}};vp.ui.preloadImageAndGetSize=function ui_preloadImageAndGetSize(sImageSrc,fnCallback,fnErrorHandler)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var oImg=document.createElement("IMG");oImg.style.visibility="hidden";oImg.style.zIndex=-1;document.body.appendChild(oImg);vp.ui._traceImageSrc(sImageSrc,"vp.ui.preloadImageAndGetSize");var fnPreloadHandler=function pv_fnPreloadHandler(e)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var fnWrapper=function pv_fnWrapper()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var oSize={width:oImg.offsetWidth,height:oImg.offsetHeight};vp.events.remove(oImg,"load",fnPreloadHandler);document.body.removeChild(oImg);oImg=null;fnCallback(oSize);};window.setTimeout(fnWrapper,0);};vp.events.add(oImg,"load",fnPreloadHandler);if(fnErrorHandler)
{vp.events.add(oImg,"error",function(e){fnErrorHandler(e,sImageSrc);});}
oImg.src=sImageSrc;};vp.ui.showAnimated=function ui_showAnimated(oElement,iStartWidth,iStartHeight,iEndWidth,iEndHeight,bIgnoreOverflow,bBottomUp)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(oElement._isBeingAnimated)
{return;}
oElement._isBeingAnimated=true;var sInitialWidthStyle=oElement.style.width;var sInitialHeightStyle=oElement.style.height;oElement.style.width=iStartWidth;oElement.style.height=iStartHeight;oElement.style.visibility="visible";if(!bIgnoreOverflow)
{var sOldOverflow=oElement.style.overflow;oElement.style.overflow="hidden";}
var dPercent=0;var iMaxPercent=100;var iDelay=10;if(!vp.browser.isIE)
{iDelay=20;}
var iDuration=80;var dStep=iMaxPercent*iDelay/iDuration;var initialTop=parseInt(oElement.style.top);var fnShowAni=function pv_fnShowAni()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var newHeight=iStartHeight+(iEndHeight-iStartHeight)*dPercent/iMaxPercent;var newWidth=iStartWidth+(iEndWidth-iStartWidth)*dPercent/iMaxPercent;if(dPercent<=iMaxPercent)
{oElement.style.height=newHeight+"px";oElement.style.width=newWidth+"px";if(bBottomUp)
{oElement.style.top=(initialTop+iEndHeight-newHeight)+"px";}
dPercent+=dStep;setTimeout(fnShowAni,iDelay);}
else
{oElement.style.height=iEndHeight+"px";oElement.style.width=iEndWidth+"px";if(!bIgnoreOverflow)
{oElement.style.overflow=sOldOverflow;}
oElement.style.width=sInitialWidthStyle;oElement.style.height=sInitialHeightStyle;oElement._isBeingAnimated=false;}};fnShowAni();};vp.ui.getRootElement=function ui_getRootElement(oDoc)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(!oDoc)
{oDoc=document;}
return oDoc.documentElement?oDoc.documentElement:oDoc.body;};vp.ui.getAllChildren=function ui_getAllChildren(oElement)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(!oElement)
{return[];}
return oElement.all?oElement.all:oElement.getElementsByTagName('*');};vp.ui.isScrollBarClickEvent=function ui_isScrollBarClickEvent(e)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
e=vp.events.getEvent(e);if(e.target&&(e.target.tagName.toLowerCase()=="body"||e.target.tagName.toLowerCase()=="html"))
{var oViewRect=vp.ui.getViewportSize();var oScrollRect=vp.ui.getPageSize();if(oScrollRect.height>oViewRect.height)
{if(e.pageX+20>oViewRect.width)
{return true;}}
if(oScrollRect.width>oViewRect.width)
{if(e.pageY+20>oViewRect.height)
{return true;}}}
return false;};vp.ui.getMaxProperty=function ui_getMaxProperty(objs,propertyString)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var propertyArray=propertyString.split('.');var maxValue=0;for(var i=0;i<objs.length;i++)
{var iArray=0;var value=objs[i];while(value&&propertyArray[iArray])
{value=value[propertyArray[iArray]];iArray=iArray+1;}
value=parseInt(value);if(value>maxValue)
{maxValue=value;}}
return maxValue;};vp.ui._mouseTrackingHandler=function ui__mouseTrackingHandler(e)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
e=vp.events.getEvent(e);window.__mouseTrackingTarget=e.target;};vp.ui.startTrackMouseTarget=function ui_startTrackMouseTarget(oWindow)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(!oWindow)
{oWindow=window;}
vp.events.add(vp.ui.getRootElement(oWindow.document),"mouseover",vp.ui._mouseTrackingHandler);for(var i=0;i<oWindow.frames.length;i++)
{vp.ui.startTrackMouseTarget(oWindow.frames[i]);}};vp.ui.stopTrackMouseTarget=function ui_stopTrackMouseTarget(oWindow)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(!oWindow)
{oWindow=window;}
vp.events.remove(vp.ui.getRootElement(oWindow.document),"mouseover",vp.ui._mouseTrackingHandler);for(var i=0;i<oWindow.frames.length;i++)
{vp.ui.stopTrackMouseTarget(oWindow.frames[i]);}};vp.ui.getMouseTarget=function ui_getMouseTarget()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
return window.__mouseTrackingTarget?window.__mouseTrackingTarget:null;};vp.ui.makeUnselectable=function ui_makeUnselectable(vElement)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var oElement=vp.core.getElement(vElement);if(oElement.nodeType==1)
{oElement.setAttribute("unselectable","on");vp.ui.preventDragging(oElement);for(var i=0;i<oElement.childNodes.length;i++)
{vp.ui.makeUnselectable(oElement.childNodes[i]);}}};vp.ui.preventDragging=function ui_preventDragging(oNode,bRecurse)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(oNode.nodeType==1)
{if(oNode.tagName=="IMG")
{if(document.all)
{vp.events.add(oNode,"drag",vp.events.cancelEvent);}
else
{vp.events.add(oNode,"mousedown",vp.events.cancelEvent);}}
if(bRecurse)
{for(var i=0;i<oNode.childNodes.length;i++)
{vp.ui.preventDragging(oNode.childNodes[i],bRecurse);}}}};vp.ui.browserSupportsPNG=function ui_browserSupportsPNG()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
return!vp.browser.isIE||vp.browser.ver>=7;};var VP_UI_BLANK_IMAGE="/vp/JS-Lib/common/spacer.gif";vp.ui.setSrcPNG=function ui_setSrcPNG(oImg,sSrc,fnCallback)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(vp.core.getBoolean(vp.web.getQueryString("admin")))
{var oAdminURL=new vp.web.URL(sSrc,"vp.ui.setSrcPNG");oAdminURL.setItem("admin",1);sSrc=oAdminURL.toString();}
vp.ui._traceImageSrc(sSrc);if(!vp.ui.browserSupportsPNG())
{var oLoader=vp.core.getObjectReference(oImg,"PNGloader");if(!oLoader)
{oLoader=document.createElement("IMG");oLoader.id=oImg.id+"_PNGLoader";oLoader.style.visibility="hidden";oLoader.style.display="none";oLoader.style.position="absolute";oLoader.style.top=0;oLoader.style.left=0;vp.core.setObjectReference(oImg,oLoader,"PNGloader");var fnOnLoadTempImg=function pv_fnOnLoadTempImg(e)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(this.img.src.indexOf(VP_UI_BLANK_IMAGE)==-1)
{this.img.src=VP_UI_BLANK_IMAGE;}
this.img.style.width="";this.img.style.height="";this.loader.style.display="block";this.img.width=this.loader.width;this.img.height=this.loader.height;this.loader.style.display="none";this.img.style.filter="progid:DXImageTransform.Microsoft.AlphaImageLoader(src='"+vp.web.urlEncode(this.loader.newSrc)+"',sizingMethod='scale')";if(this.callback)
{this.callback(e);}}.getClosure({img:oImg,loader:oLoader,callback:fnCallback});var fnTimerWrapper=function pv_fnTimerWrapper()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
window.setTimeout(this.innerFunction,10);}.getClosure({innerFunction:fnOnLoadTempImg});vp.events.add(oLoader,"load",fnTimerWrapper);var fnLoadLoader=function pv_fnLoadLoader()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
document.body.appendChild(oLoader);};if(document.readyState!="complete")
{vp.events.add(window,"load",fnLoadLoader);}
else
{fnLoadLoader();}}
oLoader.removeAttribute("width");oLoader.removeAttribute("height");oLoader.style.width="";oLoader.style.height="";var sRelativePath=vp.ui.getRelativeURL(sSrc);oLoader.newSrc=sRelativePath;oLoader.src=sRelativePath;oImg.pngSrc=sSrc;}
else
{var fnOnLoadHandler=function pv_fnOnLoadHandler()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
oImg.removeAttribute("width");oImg.removeAttribute("height");oImg.style.width="";oImg.style.height="";if(fnCallback)
{window.setTimeout(fnCallback,0);}
vp.events.remove(oImg,"load",fnOnLoadHandler);};if(vp.browser.isWebKit)
{var fnSafariHack=function pv_fnSafariHack(e)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
vp.events.remove(oImg,"load",fnSafariHack);var fnInnerHack=function pv_fnInnerHack()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
vp.events.add(oImg,"load",fnOnLoadHandler);oImg.removeAttribute("width");oImg.removeAttribute("height");oImg.style.width="";oImg.style.height="";oImg.src="";oImg.src=sSrc;oImg.pngSrc=sSrc;};window.setTimeout(fnInnerHack,10);};vp.events.add(oImg,"load",fnSafariHack);oImg.src=VP_UI_BLANK_IMAGE;}
else
{vp.events.add(oImg,"load",fnOnLoadHandler);oImg.src=sSrc;oImg.pngSrc=sSrc;}}};vp.ui.setSrcPNGSimple=function ui_setSrcPNGSimple(oImg,sSrc)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
vp.ui._traceImageSrc(sSrc,"vp.ui.setSrcPNGSimple");if(vp.ui.browserSupportsPNG())
{oImg.src=sSrc;}
else
{oImg.src=VP_UI_BLANK_IMAGE;oImg.style.filter="progid:DXImageTransform.Microsoft.AlphaImageLoader(src='"+vp.web.urlEncode(vp.ui.getRelativeURL(sSrc))+"',sizingMethod='scale')";oImg.pngSrc=sSrc;}};vp.ui._traceImageSrc=function ui__traceImageSrc(sSrc,sMessage)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(vp.core.getBoolean(vp.web.getQueryString("debugimg")))
{if(sMessage)
{sMessage="<font color=red>"+sMessage+"</font>: ";}
var oDebugURL=new vp.web.URL(sSrc);oDebugURL.setItem("showerr",1);var sDebugSrc=oDebugURL.toString();vp.debug.trace("<a href=\""+vp.web.htmlAttributeEncode(sDebugSrc)+"\" target='png_preview'><IMG border=0 src=\""+vp.web.htmlAttributeEncode(sSrc)+"\"></a>");sMessage=sMessage||"";vp.debug.trace(sMessage+sSrc);vp.debug.trace("");}};vp.ui.pngHackTrackMouseEvents=function ui_pngHackTrackMouseEvents()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(!vp.ui.browserSupportsPNG()&&!document._pngHackMouseEventsAdded)
{vp.events.add(document.body,"mousemove",vp.ui._pngHackMouseMoveHandler);document._pngHackMouseEventsAdded=true;}};vp.ui._pngHackMouseMoveHandler=function ui__pngHackMouseMoveHandler(e)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var oElem=document.elementFromPoint(e.clientX,e.clientY);if(document._pngHackCurrentMouseOverElement&&oElem!=document._pngHackCurrentMouseOverElement)
{try
{vp.events.fireEvent(document._pngHackCurrentMouseOverElement,"mouseout");}
catch(ex){}}
if(oElem&&oElem.pngSrc&&oElem!=document._pngHackCurrentMouseOverElement)
{try
{vp.events.fireEvent(oElem,"mouseover");}
catch(ex){}
vp.events.add(oElem,"mouseout",vp.ui._pngHackMouseOutHandler);document._pngHackCurrentMouseOverElement=oElem;}};vp.ui._pngHackMouseOutHandler=function ui__pngHackMouseOutHandler(e)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(e.srcElement==document._pngHackCurrentMouseOverElement)
{vp.events.remove(document._pngHackCurrentMouseOverElement,"mouseout",vp.ui._pngHackMouseOutHandler);document._pngHackCurrentMouseOverElement=null;}};vp.ui.getRelativeURL=function ui_getRelativeURL(sURL)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(sURL.indexOf("http://")===0||sURL.indexOf("https://")===0)
{sURL=sURL.substr(8);sURL=sURL.substr(sURL.indexOf("/"));}
if(sURL.substr(0,1)!="/")
{return sURL;}
var sCurrentURL=document.location.pathname;var aCurrent=sCurrentURL.substr(1).split("/");var aTarget=sURL.substr(1).split("/");var aNew=[];while(aCurrent.length>0&&aTarget.length>0)
{if(aCurrent[0].toLowerCase()==aTarget[0].toLowerCase())
{aCurrent.remove(0);aTarget.remove(0);}
else
{break;}}
for(var i=0;i<aCurrent.length-1;i++)
{aNew.add("..");}
for(i=0;i<aTarget.length;i++)
{aNew.add(aTarget[i]);}
return aNew.join("/");};vp.ui.isElementInDOM=function ui_isElementInDOM(oElement)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
return oElement.parentNode&&oElement.parentNode!=oElement.ownerDocument&&oElement.parentNode.nodeType==1;};vp.ui.removeFromDOM=function ui_removeFromDOM(oElement)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
oElement.parentNode.removeChild(oElement);};vp.ui.removeChildren=function ui_removeChildren(oContainer)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(oContainer&&oContainer.hasChildNodes())
{while(oContainer.childNodes.length>=1)
{oContainer.removeChild(oContainer.firstChild);}}};vp.ui.replaceNodeWithContents=function ui_replaceNodeWithContents(oNode)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var oParent=oNode.parentNode;var iLen=oNode.childNodes.length;for(var i=0;i<iLen;i++)
{var oChild=oNode.childNodes[i];oChild.parentNode.removeChild(oChild);oParent.insertBefore(oChild,oNode);}
oParent.removeChild(oNode);oParent.normalize();};vp.ui.getFirstElementChild=function ui_getFirstElementChild(oElement)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
for(var i=0;i<oElement.childNodes.length;i++)
{if(oElement.childNodes[i].nodeType==1)
{return oElement.childNodes[i];}}
return null;};vp.ui.getParentByTagName=function ui_getParentByTagName(vElement,tagName)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
vElement=vp.core.getElement(vElement).parentNode;while(vElement&&vElement.tagName!=tagName)
{vElement=vElement.parentNode;}
return vElement;};vp.ui.isChildOf=function ui_isChildOf(oChild,oParent)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var oTemp;if(typeof(oChild.parentNode)!="undefined")
{oTemp=oChild.parentNode;}
else if(oChild.parentElement)
{oTemp=oChild.parentElement();}
else if(oChild.length)
{oTemp=oChild[0];}
while(oTemp)
{if(oTemp==oParent)
{return true;}
if(oTemp.tagName&&oTemp.tagName.toLowerCase()=="body")
{return false;}
oTemp=oTemp.parentNode;}
return false;};vp.ui.getRectWithAspectRatio=function ui_getRectWithAspectRatio(oContainerRect,fAspectRatio)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var oRect={top:0,left:0,width:oContainerRect.width,height:oContainerRect.height};var fContainerAspectRatio=oContainerRect.width/oContainerRect.height;if(fContainerAspectRatio<fAspectRatio)
{oRect.height=Math.round(oRect.width/fAspectRatio);}
else
{oRect.width=Math.round(oRect.height*fAspectRatio);}
oRect.left=(oContainerRect.width-oRect.width)/2;oRect.top=(oContainerRect.height-oRect.height)/2;return oRect;};vp.ui.doRectsIntersect=function ui_doRectsIntersect(oRect1,oRect2)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
return!(oRect1.left>(oRect2.left+oRect2.width)||(oRect1.left+oRect1.width)<oRect2.left||oRect1.top>(oRect2.top+oRect2.height)||(oRect1.top+oRect1.height)<oRect2.top);};vp.ui.isPointInsideRect=function ui_isPointInsideRect(oPoint,oRect)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(oPoint.top>=oRect.top&&oPoint.top<=oRect.top+oRect.height)
{if(oPoint.left>=oRect.left&&oPoint.left<=oRect.left+oRect.width)
{return true;}}
return false;};vp.ui.getDistance=function ui_getDistance(oPoint1,oPoint2)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
return Math.sqrt(Math.pow(oPoint1.top-oPoint2.top,2)+Math.pow(oPoint1.left-oPoint2.left,2));};vp.ui.makeElementOpaqueInIE6=function ui_makeElementOpaqueInIE6(oElement,bEnable,oTarget)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(vp.browser.isIE&&vp.browser.ver<7)
{var sID=oElement.id+"_iframe_block";var oIFrameLayer=oElement.ownerDocument.getElementById(sID);if(!oIFrameLayer)
{oIFrameLayer=oElement.ownerDocument.createElement("IFRAME");vp.ui.ensureIFrameSrc(oIFrameLayer);oIFrameLayer.style.position="absolute";if(!oTarget)
{oElement.appendChild(oIFrameLayer);}
else
{oTarget.appendChild(oIFrameLayer);oIFrameLayer.style.left=0;oIFrameLayer.style.top=0;}}
oIFrameLayer.style.width="100%";oIFrameLayer.style.height="100%";oIFrameLayer.style.display=bEnable?"block":"none";oIFrameLayer.style.filter="mask()";}};vp.ui.dummyIFrames={};vp.ui.showIE6IFrame=function ui_showIE6IFrame(oElement,bShow)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(!vp.browser.isIE||vp.browser.ver>=7)
{return;}
var dummyIFrame=vp.ui.dummyIFrames[oElement.id];if(!dummyIFrame)
{dummyIFrame=document.createElement("IFRAME");dummyIFrame.setAttribute("src","");vp.ui.ensureIFrameSrc(dummyIFrame);vp.ui.dummyIFrames[oElement.id]=dummyIFrame;}
if(!bShow)
{try
{oElement.parentElement.removeChild(dummyIFrame);}
catch(e){}
return;}
dummyIFrame.style.zIndex=oElement.style.zIndex;oElement.style.zIndex=oElement.style.zIndex+1;dummyIFrame.style.position="absolute";dummyIFrame.style.left=oElement.offsetLeft+"px";dummyIFrame.style.top=oElement.offsetTop+"px";dummyIFrame.style.width=oElement.offsetWidth+"px";dummyIFrame.style.height=oElement.offsetHeight+"px";oElement.parentElement.appendChild(dummyIFrame);};vp.ui.loadScriptAfterPageLoad=function ui_loadScriptAfterPageLoad(sUrl)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var fnLoader=function pv_fnLoader()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var oScript=document.createElement("SCRIPT");oScript.src=sUrl;document.body.appendChild(oScript);};vp.events.runAfterLoadComplete(fnLoader);};vp.ui.loadImageAfterPageLoad=function ui_loadImageAfterPageLoad(sUrl)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var fnLoader=function pv_fnLoader()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var oImg=document.createElement("IMG");oImg.src=sUrl;document.body.appendChild(oImg);};vp.events.runAfterLoadComplete(fnLoader);};vp.ui.loadIFrameAfterPageLoad=function ui_loadIFrameAfterPageLoad(sUrl)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var fnLoader=function pv_fnLoader()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var oIframe=document.createElement("IFRAME");oIframe.src=sUrl;oIframe.style.display="none";document.body.appendChild(oIframe);};vp.events.runAfterLoadComplete(fnLoader);};vp.ui.isQuirksMode=function ui_isQuirksMode()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(!document.all)
{return false;}
return document.compatMode!="CSS1Compat";};vp.ui.includeCssQuirksMode=function ui_includeCssQuirksMode(sPath)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(vp.ui.isQuirksMode())
{if(!window._quirksModeCssFiles)
{window._quirksModeCssFiles={};}
if(!window._quirksModeCssFiles[sPath])
{vp.events.runAfterDOMLoadComplete(function()
{var oLink=document.createElement("LINK");oLink.href=sPath;oLink.rel="stylesheet";oLink.type="text/css";document.body.appendChild(oLink);});}
window._quirksModeCssFiles[sPath]=true;}};vp.ui.getIFrameForDocument=function ui_getIFrameForDocument(oIFrameDocument)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var oWin=oIFrameDocument.defaultView?oIFrameDocument.defaultView:oIFrameDocument.parentWindow;if(oWin&&oWin.frameElement)
{return oWin.frameElement;}
return null;};vp.ui.setSelectElementsVisibility=function ui_setSelectElementsVisibility(bVisible)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var divPageOuter=document.getElementById("divPageOuter");var cSelects=divPageOuter?divPageOuter.getElementsByTagName("select"):document.getElementsByTagName("select");for(var i=0;i<cSelects.length;i++)
{if(bVisible)
{vp.ui.show(cSelects[i]);}
else
{vp.ui.hide(cSelects[i]);}}};vp.ui.ensureIFrameSrc=function ui_ensureIFrameSrc(oIFrame)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(!oIFrame.src&&vp.browser.isIE&&window.location.protocol=="https:")
{oIFrame.src="/vp/images/nns/studio/spacer.gif";}};vp.ui.ensureLanguageIdParameter=function ui_ensureLanguageIdParameter(sSrc)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(sSrc.indexOf("langid")<=0)
{var iLangId=typeof(window.languageId)=="undefined"?1:window.languageId;var oURL=new vp.web.URL(sSrc);oURL.setItem("langid",iLangId);return oURL.toString();}
return sSrc;};vp.ui.stripEmbeddedImageParameters=function ui_stripEmbeddedImageParameters(sSrc)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(sSrc.indexOf("http")===0)
{var iRelPathStart=sSrc.indexOf("/")+2+document.location.hostname.length;sSrc=sSrc.substr(iRelPathStart);}
if(sSrc.indexOf("/sf/")===0)
{sSrc=sSrc.replace(/\/sf\/\_langid\-\d+\/\_/,"");sSrc=sSrc.replace(/hc\-[\-\d]+\/\_/,"");}
return sSrc;};vp.ui.setImageSrcSprite=function ui_setImageSrcSprite(vImage,sSrc,bFailoverToNonSprite)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var oImage=vp.core.getElement(vImage,"vp.ui.setImageSrcSprite");if(!sSrc)
{throw new Error("The specified image source was null or empty");}
var fnFallback=function pv_fnFallback()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
oImage.src=vp.ui.ensureLanguageIdParameter(sSrc);oImage.style.backgroundImage="";};if(window.cssSpritesDisabled)
{fnFallback();return;}
var oSpriteImage;var sSpriteSrc;try
{if(!window._cssSprites)
{throw new Error("No sprite data loaded");}
var sSpriteKey=sSrc.toLowerCase();var iQsPos=sSrc.indexOf("?");if(iQsPos>0)
{sSpriteKey=sSpriteKey.substr(0,iQsPos);}
var oSpriteData=window._cssSprites[sSpriteKey];if(!oSpriteData)
{throw new Error("Sprite data not found for image: "+sSrc);}
oSpriteImage=window._cssSpriteImages[oSpriteData[4]];sSpriteSrc=oSpriteImage.src;}
catch(ex)
{if(!bFailoverToNonSprite&&window.isDebug)
{throw ex;}
fnFallback();return;}
if(!vp.ui.browserSupportsPNG())
{if(oSpriteImage.isSemiTransparent)
{fnFallback();return;}
else if(oSpriteImage.hasGif)
{sSpriteSrc=sSpriteSrc.replace(".png",".gif");}}
oImage.src="/vp/images/clearpixel.gif";oImage.style.backgroundImage="url("+sSpriteSrc+")";oImage.style.backgroundPosition="-"+oSpriteData[0]+"px "+"-"+oSpriteData[1]+"px";oImage.style.width=oSpriteData[2]+"px";oImage.style.height=oSpriteData[3]+"px";};vp.ui.scaleImageToFit=function ui_scaleImageToFit(vImage,iMaxWidth,iMaxHeight)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var oImage=vp.core.getElement(vImage,"vp.ui.scaleResizeImage");var iWidth=oImage.naturalWidth;var iHeight=oImage.naturalHeight;if(!iWidth||!iHeight)
{var cachedImage=new Image();cachedImage.src=oImage.src;iWidth=cachedImage.width;iHeight=cachedImage.height;}
if(iWidth>iMaxWidth)
{iHeight=parseInt(iHeight*iMaxWidth/iWidth);iWidth=iMaxWidth;}
if(iHeight>iMaxHeight)
{iWidth=parseInt(iWidth*iMaxHeight/iHeight);iHeight=iMaxHeight;}
oImage.style.width=iWidth+"px";oImage.style.height=iHeight+"px";};


if(!window.__td){window.__MT=100;window.__ti=0;window.__td=[];window.__td.length=__MT;window.__noTrace=false;}
if(typeof vp=="undefined"){var vp={};}
vp.web=function web(){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}};vp.web.xmlEncode=function web_xmlEncode(sText,aAdditionalEncoders)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(sText===null||typeof(sText)=="undefined")
{return null;}
else if(typeof(sText)!="string")
{sText=sText.toString();}
var aBuilder=[];var i;var aEncoders=[vp.web._xmlCharEncoder];if(aAdditionalEncoders)
{for(i=0;i<aAdditionalEncoders.length;i++)
{aEncoders.push(aAdditionalEncoders[i]);}}
for(i=0;i<sText.length;i++)
{var sChar=sText.charAt(i);var sEntity=null;for(var j=0;j<aEncoders.length;j++)
{sEntity=aEncoders[j](sChar);if(sEntity)
{break;}}
if(sEntity)
{aBuilder.push(sEntity);}
else
{aBuilder.push(sChar);}}
return aBuilder.join("");};vp.web.xmlDecode=function web_xmlDecode(sText,aAdditionalDecoders)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(sText===null||typeof(sText)=="undefined")
{return null;}
else if(typeof(sText)!="string")
{sText=sText.toString();}
var i;var aDecoders=[vp.web._xmlEntityDecoder];if(aAdditionalDecoders)
{for(i=0;i<aAdditionalDecoders.length;i++)
{aDecoders.push(aAdditionalDecoders[i]);}}
var aCurrentEntity=null;var aBuilder=[];for(i=0;i<sText.length;i++)
{var sChar=sText.charAt(i);if(aCurrentEntity===null)
{if(sChar=="&")
{aCurrentEntity=[];}
else
{aBuilder.push(sChar);}}
else
{if(sChar==";")
{var sVal=null;var sCurrentEntity=aCurrentEntity.join("").toLowerCase();for(var j=0;j<aDecoders.length;j++)
{sVal=aDecoders[j](sCurrentEntity);if(sVal)
{break;}}
if(sVal)
{aBuilder.push(sVal);}
else
{aBuilder.push("&");aBuilder.push(sCurrentEntity);aBuilder.push(";");}
aCurrentEntity=null;}
else
{aCurrentEntity.push(sChar);if(aCurrentEntity.length>7||(!VP_WEB_ENTITY_REGEX.test(sChar))||sChar=="_")
{aBuilder.push("&");aBuilder.push(aCurrentEntity.join(""));aCurrentEntity=null;}}}}
if(aCurrentEntity!==null)
{aBuilder.push("&");aBuilder.push(aCurrentEntity.join(""));}
return aBuilder.join("");};vp.web.xmlAttributeEncode=function web_xmlAttributeEncode(sText)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
return vp.web.xmlEncode(sText,[vp.web._xmlAttributeCharEncoder]);};vp.web.htmlEncode=function web_htmlEncode(sText)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
return vp.web.xmlEncode(sText,[vp.web._htmlCharEncoder]);};vp.web.htmlDecode=function web_htmlDecode(sText)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
return vp.web.xmlDecode(sText,[vp.web._htmlEntityDecoder]);};vp.web.htmlAttributeEncode=function web_htmlAttributeEncode(sText)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
return vp.web.xmlEncode(sText,[vp.web._xmlAttributeCharEncoder,vp.web._htmlAttributeCharEncoder]);};vp.web._xmlCharEncoder=function web__xmlCharEncoder(sChar)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(sChar<=">"&&sChar>="\"")
{switch(sChar)
{case"<":return"&lt;";case">":return"&gt;";case"&":return"&amp;";default:break;}}
return null;};vp.web._xmlAttributeCharEncoder=function web__xmlAttributeCharEncoder(sChar)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(sChar<="\"")
{switch(sChar)
{case"\n":return"&#xA;";case"\f":return"&#xC;";case"\r":return"&#xD;";case"\"":return"&quot;";default:break;}}
return null;};vp.web._htmlAttributeCharEncoder=function web__htmlAttributeCharEncoder(sChar)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(sChar=="'")
{return"&#39;";}
return null;};vp.web._htmlCharEncoder=function web__htmlCharEncoder(sChar)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
switch(sChar)
{case"\u00A0":return"&#160;";case"\"":return"&quot;";default:return null;}};vp.web._xmlEntityDecoder=function web__xmlEntityDecoder(sEntity)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
switch(sEntity)
{case"lt":return"<";case"gt":return">";case"amp":return"&";case"quot":return"\"";case"apos":return"'";default:if(sEntity.charAt(0)=="#")
{var iVal=NaN;if(sEntity.charAt(1)=="x")
{iVal=parseInt(sEntity.substring(2),16);}
else
{iVal=parseInt(sEntity.substring(1));}
if(!isNaN(iVal))
{return String.fromCharCode(iVal);}}
break;}
return null;};vp.web._htmlEntityDecoder=function web__htmlEntityDecoder(sEntity)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var sEntityLower=sEntity.toLowerCase();if(VP_WEB_HTML_ENTITY_MAP[sEntityLower])
{return String.fromCharCode(VP_WEB_HTML_ENTITY_MAP[sEntityLower]);}
return null;};var VP_WEB_ENTITY_REGEX=/[\w\&\#]/;var VP_WEB_HTML_ENTITY_MAP={"nbsp":160,"iexcl":161,"cent":162,"pound":163,"curren":164,"yen":165,"brvbar":166,"sect":167,"uml":168,"copy":169,"ordf":170,"laquo":171,"not":172,"shy":173,"reg":174,"macr":175,"deg":176,"plusmn":177,"sup2":178,"sup3":179,"acute":180,"micro":181,"para":182,"middot":183,"cedil":184,"sup1":185,"ordm":186,"raquo":187,"frac14":188,"frac12":189,"frac34":190,"iquest":191,"times":215,"divide":247,"agrave":192,"aacute":193,"acirc":194,"atilde":195,"auml":196,"aring":197,"aelig":198,"ccedil":199,"egrave":200,"eacute":201,"ecirc":202,"euml":203,"igrave":204,"iacute":205,"icirc":206,"iuml":207,"eth":208,"ntilde":209,"ograve":210,"oacute":211,"ocirc":212,"otilde":213,"ouml":214,"oslash":216,"ugrave":217,"uacute":218,"ucirc":219,"uuml":220,"yacute":221,"thorn":222,"szlig":223,"agrave":224,"aacute":225,"acirc":226,"atilde":227,"auml":228,"aring":229,"aelig":230,"ccedil":231,"egrave":232,"eacute":233,"ecirc":234,"euml":235,"igrave":236,"iacute":237,"icirc":238,"iuml":239,"eth":240,"ntilde":241,"ograve":242,"oacute":243,"ocirc":244,"otilde":245,"ouml":246,"oslash":248,"ugrave":249,"uacute":250,"ucirc":251,"uuml":252,"yacute":253,"thorn":254,"yuml":255};vp.web.urlDecode=function web_urlDecode(sText){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(!sText)
{sText="";}
else
{sText=sText.toString();}
if(typeof decodeURIComponent!="undefined")
{try
{return decodeURIComponent(sText);}
catch(e){}}
return unescape(sText);};vp.web.urlEncode=function web_urlEncode(sText)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(sText===null)
{sText="";}
else
{sText=sText.toString();}
if(typeof encodeURIComponent!="undefined")
{var sOut=encodeURIComponent(sText);sOut=sOut.replace(/\(/gi,"%28");sOut=sOut.replace(/\)/gi,"%29");return sOut.replace(/'/gi,"%27");}
else
{return escape(sText);}};vp.web.cookieDecode=function web_cookieDecode(sText){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(!sText)
{return"";}
else
{sText=sText.toString();}
sText=sText.replace(/\+/gi,"%20").replace(/\%2B/gi,"+");return this.urlDecode(sText);};vp.web.cookieEncode=function web_cookieEncode(sText){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(!sText)
{return"";}
else
{sText=sText.toString();}
sText=this.urlEncode(sText);sText=sText.replace(/\+/gi,"%2B").replace(/\%20/gi,"+");return sText;};vp.cookies=function cookies(){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}};vp.cookies.currentDomain=(function(){if(location.host=="localhost"){return"";}else{if(location.host.indexOf("www.")===0||location.host.indexOf("secure.")===0){return location.host.substring(location.host.indexOf("."));}else{return location.host;}}})();vp.cookies.isEnabled=function cookies_isEnabled(){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
vp.cookies.setValue("test","value");if(vp.cookies.getValue("test")=="value")
{vp.cookies.remove("test");return true;}
else
{return false;}};vp.cookies.ERROR_MAX_COOKIE_LENGTH_EXCEEDED=1;vp.cookies.getValue=function cookies_getValue(sName)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var oCookies=new vp.cookies.Cookies();if(oCookies[sName]&&!oCookies[sName].subCookies)
{return oCookies[sName].value;}
return"";};vp.cookies.getSubValue=function cookies_getSubValue(sName,sSubCookie)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var oCookies=new vp.cookies.Cookies();if(oCookies[sName]&&oCookies[sName].subCookies)
{return oCookies[sName].subCookies[sSubCookie];}
return"";};vp.cookies.setValue=function cookies_setValue(sName,sValue,sDomain,bIsPermanent)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var oCookie=new vp.cookies.Cookie();oCookie.name=sName;oCookie.value=sValue;oCookie.domain=sDomain;oCookie.isPermanent=bIsPermanent;oCookie.save();};vp.cookies.setSubValue=function cookies_setSubValue(sName,sSubCookie,sValue,sDomain,bIsPermanent)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var oCookies=new vp.cookies.Cookies();var oCookie=oCookies[sName];if(oCookie)
{if(oCookie.value)
{oCookie.value=null;}
if(!oCookie.subCookies)
{oCookie.subCookies={};}
oCookie.subCookies[sSubCookie]=sValue;}
else
{oCookie=new vp.cookies.Cookie();oCookie.name=sName;oCookie.subCookies={};oCookie.subCookies[sSubCookie]=sValue;}
oCookie.domain=sDomain;oCookie.isPermanent=bIsPermanent;oCookie.save();};vp.cookies.remove=function cookies_remove(sName)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var sCookie=vp.web.cookieEncode(sName)+"=a; path=/; expires=Wed, 17 Jan 1979 07:01:00 GMT";if(vp.cookies.currentDomain!=="")
{sCookie+="; domain="+vp.cookies.currentDomain;}
document.cookie=sCookie;};vp.cookies.Cookies=function cookies_Cookies()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var me=this;var sCookie=document.cookie.toString();var aCookieValues=sCookie.split(";");var iLen=aCookieValues.length;for(var i=0;i<iLen;i++)
{var oCookie=new vp.cookies.Cookie();oCookie.parse(aCookieValues[i]);if(oCookie.name)
{me[oCookie.name]=oCookie;}}};vp.cookies.Cookie=function cookies_Cookie()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var me=this;this.name=null;this.subCookies=null;this.value=null;this.domain=null;this.isPermanent=false;var validateName=function pv_validateName()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(!me.name)
{throw new Error("vp.cookies.Cookie: Cookie name is null.");}};this.serialize=function pb_this_serialize()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
validateName();var sCookie=vp.web.cookieEncode(me.name)+"="+getEncodedValue();sCookie+="; path=/";var sDomain=me.domain?me.domain:vp.cookies.currentDomain;if(sDomain)
{sCookie+="; domain="+sDomain;}
if(me.isPermanent)
{sCookie+="; expires=Thurs, 1 Jan 2015 07:01:00 GMT";}
return sCookie;};this.save=function pb_this_save()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
validateName();var aFullCookie=[];var oCookies=new vp.cookies.Cookies();delete oCookies[me.name];for(var sCookie in oCookies)
{aFullCookie.push(oCookies[sCookie].serialize());}
var sAllCookies=aFullCookie.join("; ");var sThisCookie=me.serialize();document.cookie=sThisCookie;};this.parse=function pb_this_parse(sUnparsedValue)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(!sUnparsedValue)
{return;}
sUnparsedValue=sUnparsedValue.replace(/^\s*(.*?)\s*$/,"$1");var iPosEquals=sUnparsedValue.indexOf("=");if(iPosEquals<=0)
{return;}
me.name=vp.web.cookieDecode(sUnparsedValue.substr(0,iPosEquals));var sValue=sUnparsedValue.substr(iPosEquals+1);if(sValue.indexOf("=")==-1)
{me.value=vp.web.cookieDecode(sValue);return;}
me.subCookies={};var aSubCookies=sValue.split("&");var iLen=aSubCookies.length;for(var i=0;i<iLen;i++)
{var aSubCookie=aSubCookies[i].split("=");if(aSubCookie.length!=2)
{me.subCookies=null;return;}
else
{me.subCookies[vp.web.cookieDecode(aSubCookie[0])]=vp.web.cookieDecode(aSubCookie[1]);}}};var getEncodedValue=function pv_getEncodedValue()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(me.subCookies)
{var aOut=[];for(var sSub in me.subCookies)
{aOut.push(vp.web.cookieEncode(sSub)+"="+vp.web.cookieEncode(me.subCookies[sSub]));}
return aOut.join("&");}
else
{return vp.web.cookieEncode(me.value);}};};vp.web.URL=function web_URL(sUrl)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var _sUrl=sUrl.toString();var me=this;this.hash="";this.protocol="";this.hostname="";this.host="";this.port="";this.queryString="";this.search="";this.pathname="";var load=function pv_load()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var nTemp;var iNextPart;var sTemp=_sUrl;if(sTemp.search(/https\:\/\/+/i)===0)
{me.protocol="https:";sTemp=_sUrl.substr(8);}
else if(sTemp.search(/http\:\/\/+/i)===0)
{me.protocol="http:";sTemp=_sUrl.substr(7);}
if(sTemp.length===0)
{return;}
if(me.protocol!=="")
{iNextPart=sTemp.search(/[\/\?\#]/i);if(iNextPart==-1)
{me.host=sTemp;return;}
me.host=sTemp.substring(0,iNextPart);sTemp=sTemp.substr(iNextPart);}
if(me.host&&me.host!=="")
{if(me.host.indexOf(':')!=-1)
{me.hostname=me.host.substr(0,me.host.indexOf(':'));me.port=me.host.substr(me.host.indexOf(':')+1,me.host.length);}
else
{me.hostname=me.host;}}
if(sTemp.length===0)
{return;}
iNextPart=sTemp.search(/[\?\#]/i);if(iNextPart!==0)
{if(iNextPart==-1)
{me.pathname=sTemp;return;}
me.pathname=sTemp.substr(0,iNextPart);sTemp=sTemp.substr(iNextPart);}
if(sTemp.length===0)
{return;}
if(sTemp.indexOf('?')===0)
{iNextPart=sTemp.indexOf("#");if(iNextPart==-1)
{me.queryString=sTemp.substr(1);sTemp="";}
else
{me.queryString=sTemp.substring(1,iNextPart);sTemp=sTemp.substr(iNextPart);}
updateSearch();}
if(sTemp.length===0)
{return;}
if(sTemp.indexOf("#")===0)
{me.hash=sTemp;}};var updateSearch=function pv_updateSearch()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
me.search="";if(me.queryString&&me.queryString!=="")
{me.search="?"+me.queryString;}};this.toString=function pb_this_toString()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var sPort=me.port;var sProtocol=me.protocol;if(me.port&&me.port!=="")
{sPort=':'+me.port;}
if(me.protocol&&me.protocol!=="")
{sProtocol=me.protocol+"//";}
return sProtocol+me.host+sPort+me.pathname+me.search+me.hash;};this.getItem=function pb_this_getItem(sKey)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var oHash=new vp.web.QueryString(me.queryString);return oHash.getItem(sKey);};this.setItem=function pb_this_setItem(sKey,sValue)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var oHash=new vp.web.QueryString(me.queryString);oHash.setItem(sKey,sValue);me.queryString=oHash.toString();updateSearch();};this.removeItem=function pb_this_removeItem(sKey)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var oHash=new vp.web.QueryString(me.queryString);oHash.removeItem(sKey);me.queryString=oHash.toString();me.search="";if((me.queryString)!=="")
{me.search='?'+me.queryString;}};load();};vp.web.DelimitedString=function web_DelimitedString(vData,sItemDelimiter,sPairDelimiter,fnEncoder,fnDecoder,bCaseInsensitiveKeys)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
this.items={};var _oCaseInsensitiveItems={};this.count=0;this.itemDelimiter=sItemDelimiter;this.pairDelimiter=sPairDelimiter;this.caseSensitiveKeys=bCaseInsensitiveKeys?false:true;this.fnEncoder=fnEncoder?fnEncoder:function(sStr){return sStr;};this.fnDecoder=fnDecoder?fnDecoder:function(sStr){return sStr;};var me=this;this.setItem=function pb_this_setItem(sKey,sValue)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(typeof(sKey)!="string")
{sKey=sKey.toString();}
if(typeof(me.getItem(sKey))=="undefined")
{me.count++;}
me.items[sKey]=sValue;if(!me.caseSensitiveKeys)
{_oCaseInsensitiveItems[sKey.toLowerCase()]=sValue;}};this.getItem=function pb_this_getItem(sKey)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(typeof(sKey)!="string")
{sKey=sKey.toString();}
return me.caseSensitiveKeys?me.items[sKey]:_oCaseInsensitiveItems[sKey.toLowerCase()];};this.removeItem=function pb_this_removeItem(sKey)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(typeof(me.getItem(sKey))!="undefined")
{me.count--;}
var oHash=me.items;delete oHash[sKey];if(!me.caseSensitiveKeys)
{var oHashCI=_oCaseInsensitiveItems;delete oHashCI[sKey.toLowerCase()];}};this.load=function pb_this_load(vData)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
me.items={};me.append(vData);};this.append=function pb_this_append(vData)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(typeof(vData)=="string")
{if(vData&&vData!=="")
{var arrPairs=vData.split(me.itemDelimiter);var iLen=arrPairs.length;for(var i=0;i<iLen;i++)
{if(arrPairs[i].length>0)
{var arrTemp=arrPairs[i].split(me.pairDelimiter);if(arrTemp.length==2)
{me.setItem(fnDecoder(arrTemp[0]),fnDecoder(arrTemp[1]));}}}}}
else if(typeof(vData)=="object")
{for(var sProp in vData)
{me.items[sProp]=vData[sProp];}}
else
{throw new Error("vData must be a delimited string or a dictionary of key/value pairs");}};this.toString=function pb_this_toString()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var arrTemp=[];for(var sKey in me.items)
{arrTemp.push(me.fnEncoder(sKey)+me.pairDelimiter+me.fnEncoder(me.items[sKey]));}
return arrTemp.join(me.itemDelimiter);};if(vData)
{this.load(vData);}};vp.web.CssString=function web_CssString(vCss)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var fnDecoder=vp.text.trim;this.inheritFrom=vp.web.DelimitedString;this.inheritFrom(vCss,";",":",null,fnDecoder);var me=this;var base_getItem=this.getItem;this.getItem=function pb_this_getItem(sKey)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var sRet=base_getItem(sKey);if(typeof(sRet)!="undefined"&&sRet!==null)
{return sRet;}
var sNewKey=vp.ui.convertCssPropertyToStringFormat(sKey);return base_getItem(sKey);};this.getPropertyMap=function pb_this_getPropertyMap()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var oMap={};for(var sProp in me.items)
{oMap[vp.ui.convertCssPropertyToCssFormat(sProp)]=me.items[sProp];}
return oMap;};};vp.web.QueryString=function web_QueryString(vQueryString)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(vQueryString&&vQueryString.indexOf("?")===0)
{vQueryString=vQueryString.substr(1);}
this.inheritFrom=vp.web.DelimitedString;this.inheritFrom(vQueryString,"&","=",encodeURIComponent,vp.web.urlDecode,true);};vp.web.createQueryString=function web_createQueryString(oData)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var sQueryString="";for(var sParam in oData)
{if(sQueryString)
{sQueryString+="&";}
sQueryString+=vp.web.urlEncode(sParam)+"="+vp.web.urlEncode(oData[sParam]);}
return sQueryString;};vp.web.getQueryString=function web_getQueryString(sKey,oDoc)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
oDoc=oDoc||document;if(!oDoc._CachedQueryString)
{oDoc._CachedQueryString=new vp.web.QueryString(oDoc.location.search);}
var sRet=oDoc._CachedQueryString.getItem(sKey);return typeof(sRet)=="undefined"?"":sRet;};vp.web.refreshImage=function web_refreshImage(vImage)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var oImage=vp.core.getElement(vImage,"vp.web.refreshImage");var oUrl=new vp.web.URL(oImage.src);oUrl.setItem("imgversion",(new Date()).valueOf());oImage.src=oUrl.toString();};vp.web.setUrlHashData=function web_setUrlHashData(sKey,sValue,oDoc)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
oDoc=oDoc||document;var sHash=document.location.hash;if(sHash.indexOf("#")===0)
{sHash=sHash.substr(1);}
var oQS=new vp.web.QueryString(sHash);oQS.setItem(sKey,sValue);oDoc.location.hash="#"+oQS.toString();};vp.web.getUrlHashData=function web_getUrlHashData(sKey,oDoc)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
oDoc=oDoc||document;var sHash=document.location.hash;if(sHash.indexOf("#")===0)
{sHash=sHash.substr(1);}
var oQS=new vp.web.QueryString(sHash);return oQS.getItem(sKey);};vp.web.getInnerText=function web_getInnerText(oElem)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
try
{if(typeof(oElem.innerText)!="undefined")
{return oElem.innerText;}
else if(oElem.textContent)
{return(oElem.textContent);}}
catch(ex){}
var r=oElem.ownerDocument.createRange();r.selectNodeContents(oElem);return r.toString();};vp.web.getOuterHTML=function web_getOuterHTML(oElem)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(oElem.outerHTML)
{return oElem.outerHTML;}
var aTag=[];aTag.push("<"+oElem.tagName);var oAttr=oElem.attributes;var iLen=oAttr.length;for(var i=0;i<iLen;i++)
{aTag.push(" "+oAttr[i].nodeName+"=\""+vp.web.xmlAttributeEncode(oAttr[i].nodeValue)+"\"");}
aTag.push(">"+oElem.innerHTML+"</"+oElem.tagName+">");return aTag.join("");};var XML_ACTIVE_X_IDS=["MSXML2.DOMDocument.6.0","MSXML2.DOMDocument.3.0","MSXML2.DOMDocument","Microsoft.XMLDOM"];vp.web.getXMLDocument=function web_getXMLDocument(sXML)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var oXMLDoc;if(typeof(ActiveXObject)!="undefined")
{var oObj;for(var i=0;i<XML_ACTIVE_X_IDS.length;i++)
{try
{oObj=new ActiveXObject(XML_ACTIVE_X_IDS[i]);if(oObj)
{oXMLDoc=oObj;break;}}
catch(ex){}}
if(!oXMLDoc)
{throw new Error("Could not create XML DOM document.");}
if(sXML)
{oXMLDoc.async=false;oXMLDoc.loadXML(sXML);}}
else if(document.implementation&&document.implementation.createDocument)
{if(sXML)
{var oParser=new window.DOMParser();oXMLDoc=oParser.parseFromString(sXML,"text/xml");}
else
{oXMLDoc=document.implementation.createDocument("","",null);}}
return oXMLDoc;};vp.web.getInnerXML=function web_getInnerXML(oXmlNode)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(oXmlNode.nodeType==1)
{var aStringBuilder=[];var oChildNodes=oXmlNode.childNodes;var iLen=oChildNodes.length;for(var i=0;i<iLen;i++)
{aStringBuilder.push(vp.web.getOuterXML(oChildNodes[i]));}
return aStringBuilder.join("");}
else
{return vp.web.xmlEncode(oXmlNode.nodeValue);}};vp.web.getOuterXML=function web_getOuterXML(oXmlNode)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(oXmlNode.nodeType==1)
{if(window.XMLSerializer)
{if(!window._XMLSerializerInstance)
{window._XMLSerializerInstance=new window.XMLSerializer();}
return window._XMLSerializerInstance.serializeToString(oXmlNode);}
else
{return oXmlNode.xml;}}
else
{return vp.web.xmlEncode(oXmlNode.nodeValue);}};vp.web.getOwnerDocument=function web_getOwnerDocument(oNode)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
return oNode.ownerDocument||oNode;};


if(!window.__td){window.__MT=100;window.__ti=0;window.__td=[];window.__td.length=__MT;window.__noTrace=false;}
if(typeof vp=="undefined"){var vp={};}
vp.win=function win(){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}};vp.win.childWindows=[];vp.win._checkForWindow=function win__checkForWindow(oWindow,sFunc){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(!oWindow){throw new Error("Call to vp.win."+sFunc+"() with a null window reference.");}
if(!oWindow.resizeTo||!oWindow.moveTo){throw new Error("Call to vp.win."+sFunc+"() with a non-window argument.");}};vp.win.verifyWindow=function win_verifyWindow(oWindow)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(!oWindow)
{return false;}
try
{if(oWindow.closed)
{return false;}
if(!oWindow.resizeTo||!oWindow.moveTo)
{return false;}
var sUrl=oWindow.document.location.href;return true;}
catch(ex)
{return false;}};vp.win.center=function win_center(oWindow){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
oWindow=oWindow||window;this._checkForWindow(oWindow);var iWidth=0,iHeight=0;if(oWindow.dialogWidth){iWidth=parseInt(oWindow.dialogWidth);iHeight=parseInt(oWindow.dialogHeight);}else if(typeof oWindow.innerWidth=="number"){iWidth=oWindow.innerWidth;iHeight=oWindow.innerHeight;}else if(document.documentElement){iWidth=document.documentElement.offsetWidth;iHeight=document.documentElement.offsetHeight;}else if(document.body){iWidth=document.body.clientWidth;iHeight=document.body.clientHeight;}
if(oWindow.dialogWidth){oWindow.dialogLeft=((screen.availWidth/2)-(iWidth/2))+"px";oWindow.dialogTop=((screen.availHeight/2)-(iHeight/2))+"px";}else{oWindow.moveTo((screen.availWidth/2)-(iWidth/2),(screen.availHeight/2)-(iHeight/2));}};vp.win.close=function win_close(oWindow){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
oWindow=oWindow||window;this._checkForWindow(oWindow,"close");oWindow.top.close();};vp.win.closeChildWindows=function win_closeChildWindows(){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
for(var i=0,c=this.childWindows.length;i<c;i++){try{this.childWindows[i].close();}
catch(ex){}}};vp.win.isPopup=function win_isPopup(oWindow){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
oWindow=oWindow||window;this._checkForWindow(oWindow,"isPopup");return!!oWindow.top.opener;};vp.win.open=function win_open(sUrl,sName,sFeatures,bDisablePopupBlockingWarning,bIsCrossDomain){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
try
{var oWin=window.open(sUrl,sName,sFeatures);if(!oWin)
{if(!bDisablePopupBlockingWarning)
{alert(vp.LangMap["PopupBlockerWarning"]);}
return null;}
if(!bIsCrossDomain)
{var oTemp=oWin.document;}
this.childWindows[this.childWindows.length]=oWin;oWin.focus();return oWin;}
catch(ex)
{return null;}};vp.win.openCentered=function win_openCentered(sUrl,sName,iWidth,iHeight,bResizable,bScrolling,bIsCrossDomain){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
iWidth=Math.min(iWidth,screen.width);iHeight=Math.min(iHeight,screen.height);var sFeatures="width="+iWidth+",height="+iHeight;var iLeft=screen.width/2-iWidth/2;var iTop=screen.height/2-iHeight/2;sFeatures+=",left="+iLeft+",top="+iTop;sFeatures+=",resizable="+(bResizable?"yes":"no")+",scrollbars="+(bScrolling?"yes":"no");return vp.win.open(sUrl,sName,sFeatures,bIsCrossDomain);};vp.win.resizeAndCenter=function win_resizeAndCenter(iWidth,iHeight,oWindow)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(!oWindow)
{oWindow=window;}
var bBodyAvailable=(oWindow&&oWindow.document&&oWindow.document.body)?true:false;if(!iHeight&&bBodyAvailable)
{iHeight=oWindow.document.body.scrollHeight+5;}
else if(!iHeight)
{throw new Error("vp.win.resizeAndCenter(): document.body not available- call resize window from vp.events.addToOnLoad()");}
if(!iWidth)
{iWidth=oWindow.document.body.scrollWidth;}
else if(!iWidth)
{throw new Error("vp.win.resizeAndCenter(): document.body not available- call resize window from vp.events.addToOnLoad()");}
var MAX_HEIGHT=600;var MAX_WIDTH=800;if(iWidth>MAX_WIDTH)
{iWidth=MAX_WIDTH;}
if(iHeight>MAX_HEIGHT)
{iHeight=MAX_HEIGHT;}
if(oWindow.dialogHeight)
{oWindow.dialogHeight=iHeight+"px";oWindow.dialogWidth=iWidth+"px";if(oWindow.document.body.offsetHeight<iHeight)
{oWindow.dialogHeight=(parseInt(oWindow.dialogHeight)+(iHeight-oWindow.document.body.offsetHeight))+"px";}
vp.win.center(oWindow);return;}
var fnTimeout=function pv_fnTimeout()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
try
{oWindow.resizeTo(iWidth,iHeight);}
catch(err)
{}
if(bBodyAvailable)
{var oBody=oWindow.document.body;if(oBody.scrollHeight>oBody.clientHeight||oBody.scrollWidth>oBody.clientWidth){oWindow.resizeBy(0,(oBody.scrollHeight-oBody.clientHeight)+20);}}
vp.win.center(oWindow);};setTimeout(fnTimeout,10);};vp.win.getCallbackHandler=function win_getCallbackHandler(iCallbackID,oWin)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(!oWin)
{if(window.parent&&window.parent!=window)
{oWin=window.parent;}
else if(window.opener)
{oWin=window.opener;}
else
{throw new Error("vp.win.getCallbackHandler: unable to reach parent window.");}}
if(!oWin||!oWin.__callbackHandlers)
{return null;}
return oWin.__callbackHandlers[iCallbackID];};vp.win.createCallbackHandler=function win_createCallbackHandler(fnHandler)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(!window.__callbackHandlers)
{window.__callbackHandlers=[];}
var iIndex=-1;for(var i=0;i<window.__callbackHandlers.length;i++)
{try
{if(window.__callbackHandlers[i]==fnHandler)
{iIndex=i;break;}}
catch(e)
{window.__callbackHandlers.remove(i);i--;}}
if(iIndex!=-1)
{return iIndex;}
window.__callbackHandlers.add(fnHandler);return window.__callbackHandlers.length-1;};vp.win.resizeIFrameToContent=function win_resizeIFrameToContent(vIFrame,bHeight,bWidth)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(typeof(vIFrame)=="string")
{vIFrame=parent.document.getElementById(vIFrame);}
if(vIFrame)
{var frameDoc=vIFrame.contentDocument||vIFrame.contentWindow.document;var x,y;var scroll=frameDoc.body.scrollHeight;var offset=frameDoc.body.offsetHeight;if(scroll>offset)
{x=frameDoc.body.scrollWidth;y=frameDoc.body.scrollHeight;}
else
{x=frameDoc.body.offsetWidth;y=frameDoc.body.offsetHeight;}
if(bHeight)
{vIFrame.style.height=y+'px';}
if(bWidth)
{vIFrame.style.width=x+'px';}}};vp.win.waitForLoadAndNavigate=function win_waitForLoadAndNavigate(oWin,sURL)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(!oWin)
{return;}
else if(!oWin.document)
{var fnRetry=function pv_fnRetry()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
vp.win.waitForLoadAndNavigate(oWin,sURL);};setTimeout(fnRetry,500);}
else
{oWin.document.location.replace(sURL);}};


if(!window.__td){window.__MT=100;window.__ti=0;window.__td=[];window.__td.length=__MT;window.__noTrace=false;}
if(typeof vp=="undefined"){var vp={};}
vp.instrumentation={};if(!window.__MT)
{var __MT=100;var __ti=0;var __td=[];__td.length=__MT;}
vp.instrumentation.getTrace=function instrumentation_getTrace()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var MAX_SIZE=__MT;var iFirstSlot=__ti+1;if(iFirstSlot>=MAX_SIZE||!__td[iFirstSlot])
{iFirstSlot=0;}
var aOut=[];aOut.push("<trace>");var i=iFirstSlot;var bLoopFinished=false;while(__td[i]&&(i<iFirstSlot||!bLoopFinished))
{aOut.push("<f n=\"");aOut.push(vp.instrumentation.getFunctionName(__td[i].callee));aOut.push("\"");if(__td[i].length===0)
{aOut.push("/>");}
else
{aOut.push(">");for(var j=0;j<__td[i].length;j++)
{aOut.push("<a>");aOut.push(vp.instrumentation._basicXmlEncode(vp.instrumentation.objToString(__td[i][j],0).substr(0,255)));aOut.push("</a>");}
aOut.push("</f>");}
i++;if(i>=MAX_SIZE)
{i=0;bLoopFinished=true;}}
aOut.push("</trace>");return aOut.join("");};vp.instrumentation.objToString=function instrumentation_objToString(oObj,iRecurseLevel)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(typeof(iRecurseLevel)=="undefined")
{iRecurseLevel=2;}
if(typeof(oObj)=="object")
{if(oObj===null)
{return"{null}";}
else if(iRecurseLevel===0)
{return"{obj}";}
else
{var aValues=[];for(var sProp in oObj)
{var sValue=sProp+":";try
{sValue+=arguments.callee(oObj[sProp],iRecurseLevel-1);}
catch(ex)
{}
aValues.push(sValue);}
return"{"+aValues.join(",")+"}";}}
if(typeof(oObj)=="function")
{return vp.instrumentation.getFunctionName(oObj);}
else if(typeof(oObj)=="string")
{return'"'+oObj.replace(/\"/gi,"\\\"")+'"';}
else if(typeof(oObj)=="undefined")
{return"{undefined}";}
else
{return oObj+"";}};vp.instrumentation.getFunctionName=function instrumentation_getFunctionName(fn)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var sName=fn.toString();sName=sName.substr("function ".length);sName=sName.substr(0,sName.indexOf('('));return sName;};vp.instrumentation._basicXmlEncode=function instrumentation__basicXmlEncode(sStr)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(typeof(sStr)=="undefined"||sStr===null)
{return"";}
else
{return sStr.replace(/\</gi,"&lt;").replace(/\>/gi,"&gt;").replace(/\&/gi,"&amp;");}};vp.instrumentation.logError=function instrumentation_logError(sMessage,iLineNum)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
vp.instrumentation.errorHandler(sMessage,document.location.href,iLineNum||0);};vp.instrumentation.errorHandler=function instrumentation_errorHandler(sMsg,sErrorUrl,iLineNum)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
window.__noTrace=true;var oPostData={};oPostData.message=sMsg;oPostData.line=iLineNum;if(!vp.instrumentation._populateErrorLogData(sMsg,sErrorUrl,iLineNum,oPostData))
{window.__noTrace=false;return true;}
var sQs=document.location.search;if(sQs.length>1)
{sQs=sQs.substring(1);}
var oGetData={d:new Date().formatDotNet(),g:window._vp_page_guid,s:window._vp_session_id,e:window.VP_CLIENT_EVENT_TYPE_Error,p:document.location.pathname,b:navigator.userAgent,q:sQs,err:true};if(window._vp_logical_page)
{oGetData.lp=window._vp_logical_page;}
var sTrackingUrl="/vp/tracking/client-event-logger.aspx?"+vp.web.createQueryString(oGetData);vp.http.postAsync(sTrackingUrl,vp.web.createQueryString(oPostData));window.__noTrace=false;return true;};vp.instrumentation._populateErrorLogData=function instrumentation__populateErrorLogData(sMessage,sErrorUrl,iLineNum,oData)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
oData.trace=vp.instrumentation.getTrace();return true;};if(!window.isDebug&&window._vp_log_client_errors)
{window.onerror=vp.instrumentation.errorHandler;}


if(!window.__td){window.__MT=100;window.__ti=0;window.__td=[];window.__td.length=__MT;window.__noTrace=false;}
if(typeof(vp)=="undefined")
{var vp={};}
if(!vp.widget)
{vp.widget=function widget(){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}};}
vp.widget.setDefaultText=function widget_setDefaultText(oField,sInitialText)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(oField===null)
{return;}
var INITIAL_COLOR="#777777";oField.defaultText=sInitialText;oField.initialColor=oField.style.color;if(oField.value.length===0)
{oField.value=sInitialText;oField.style.color=INITIAL_COLOR;}
var onFocusHandler=function pv_onFocusHandler()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(oField.value==oField.defaultText)
{oField.value="";oField.style.color=oField.initialColor;}};var onBlurHandler=function pv_onBlurHandler()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(oField.value.length===0)
{oField.value=oField.defaultText;oField.style.color=INITIAL_COLOR;}};vp.events.add(oField,"focus",onFocusHandler);vp.events.add(oField,"click",onFocusHandler);vp.events.add(oField,"blur",onBlurHandler);var clearDefaultText=function pv_clearDefaultText()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
vp.widget.clearDefaultText(oField);};if(oField.form)
{vp.events.add(oField.form,"submit",clearDefaultText);}};vp.widget.clearDefaultText=function widget_clearDefaultText(oField)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(oField.value==oField.defaultText)
{oField.value="";}
oField.defaultText="";};


if(!window.__td){window.__MT=100;window.__ti=0;window.__td=[];window.__td.length=__MT;window.__noTrace=false;}
if(typeof(vp)=="undefined")
{var vp={};}
if(!vp.widget)
{vp.widget=function widget(){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}};}
var LOADING_BOX_IMAGE_SRC="/vp/images/nns/common/spinners/magenta_snake.gif";vp.widget.showLoadingBox=function widget_showLoadingBox(sMessage)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(!window.__loadingBox)
{window.__loadingBox=new vp.widget.LoadingBox();}
window.__loadingBox.show(sMessage);};vp.widget.hideLoadingBox=function widget_hideLoadingBox()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(window.__loadingBox)
{window.__loadingBox.hide();}};vp.widget.LoadingBox=function widget_LoadingBox()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var me=this;this.message="";this.width=300;this.height=100;this.top=-1;this.left=-1;this.delay=300;this.manualHide=false;var m_oLoadingBoxElement=null;var m_oLoadingBoxIframe=null;var m_oBackgroundBlock=null;var m_sWaitImageSrc=LOADING_BOX_IMAGE_SRC;var m_iShowTimer=null;this.show=function pb_this_show(sMessage,iWidth)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(m_iShowTimer)
{window.clearTimeout(m_iShowTimer);}
var fnShow=function pv_fnShow()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
_show(sMessage,iWidth);};if(this.delay<=0)
{fnShow();}
else
{m_iShowTimer=setTimeout(fnShow,300);}};var init=function pv_init()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(!m_oLoadingBoxElement)
{m_oLoadingBoxElement=document.createElement("DIV");m_oLoadingBoxElement.innerHTML='<table id="tblLoadingBox" width="100%" border="0" cellspacing="0" cellpadding="8" height="100%" style="border-right:1px #888888 solid; border-bottom:1px #888888 solid;">'+'<tr>'+'<td bgcolor="#FFFFFF" align="center" style="border:1px black solid;">'+'<img name="progressBarImage" id="progressBarImage" src="'+m_sWaitImageSrc+'" align="middle" hspace="5">'+'<br><br>'+'<span id="progressBarMessage" class="fwProgressBarMessage"></span>'+'<br>'+'</td>'+'</tr>'+'</table>';m_oLoadingBoxElement.style.position="absolute";m_oLoadingBoxElement.style.left="0px";m_oLoadingBoxElement.style.top="0px";m_oLoadingBoxElement.style.height=me.height;m_oLoadingBoxElement.style.zIndex=100000;document.body.appendChild(m_oLoadingBoxElement);m_oBackgroundBlock=document.createElement("DIV");m_oBackgroundBlock.innerHTML='<img src="/vp/images/s.gif" width="100%" height="100%" galleryimg="no">';m_oBackgroundBlock.style.position="absolute";m_oBackgroundBlock.style.left="0px";m_oBackgroundBlock.style.top="0px";m_oBackgroundBlock.style.zIndex=99998;m_oBackgroundBlock.onmousedown=vp.events.cancel;m_oBackgroundBlock.onmouseup=vp.events.cancel;m_oBackgroundBlock.onclick=vp.events.cancel;document.body.appendChild(m_oBackgroundBlock);if(document.all)
{m_oLoadingBoxIframe=document.createElement("DIV");m_oLoadingBoxIframe.innerHTML='<iframe width="'+me.width+'" height="'+me.height+'" src="about:blank"></iframe>';m_oLoadingBoxIframe.style.left="0px";m_oLoadingBoxIframe.style.top="0px";m_oLoadingBoxIframe.zIndex=99999;m_oLoadingBoxIframe.style.position="absolute";document.body.appendChild(m_oLoadingBoxIframe);}}};var _show=function pv__show(sMessage,iWidth)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
init();if(sMessage)
{me.message=sMessage;}
if(iWidth)
{me.width=iWidth;}
var textArea=document.getElementById('progressBarMessage');if(textArea)
{textArea.innerHTML=me.message;}
m_oLoadingBoxElement.style.width=me.width;showElement(m_oLoadingBoxElement,true);if(m_oLoadingBoxIframe)
{showElement(m_oLoadingBoxIframe,true);}
showElement(m_oBackgroundBlock,true);vp.events.add(window,"resize",me.redraw);vp.events.add(window,"scroll",me.redraw);if(!me.manualHide){vp.events.add(document,"stop",me.hide);vp.events.addToOnUnload(me.hide);}
document.body.style.cursor='progress';me.redraw();setTimeout(function(){document.getElementById("progressBarImage").src=m_sWaitImageSrc;},100);};this.hide=function pb_this_hide()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(m_iShowTimer)
{window.clearTimeout(m_iShowTimer);}
if(m_oLoadingBoxElement)
{showElement(m_oLoadingBoxElement,false);if(m_oLoadingBoxIframe)
{showElement(m_oLoadingBoxIframe,false);}
showElement(m_oBackgroundBlock,false);vp.events.remove(document,"stop",me.hide);vp.events.remove(document,"resize",me.redraw);vp.events.remove(document,"scroll",me.redraw);document.body.style.cursor='auto';}};var showElement=function pv_showElement(oElem,bShow)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
oElem.style.visibility=bShow?"visible":"hidden";oElem.style.display=bShow?"block":"none";};this.redraw=function pb_this_redraw()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(me.top==-1)
{m_oLoadingBoxElement.style.left=(document.body.offsetWidth-m_oLoadingBoxElement.offsetWidth)/2;m_oLoadingBoxElement.style.top=document.body.scrollTop+((document.body.offsetHeight-m_oLoadingBoxElement.offsetHeight)/2);}
else
{vp.ui.setStyleValue(m_oLoadingBoxElement,"left",me.left);vp.ui.setStyleValue(m_oLoadingBoxElement,"top",me.top);}
if(m_oLoadingBoxIframe)
{m_oLoadingBoxIframe.style.top=m_oLoadingBoxElement.offsetTop;m_oLoadingBoxIframe.style.left=m_oLoadingBoxElement.offsetLeft;m_oLoadingBoxIframe.style.width=m_oLoadingBoxElement.offsetWidth;m_oLoadingBoxIframe.style.height=m_oLoadingBoxElement.offsetHeight;}
m_oBackgroundBlock.style.height=document.body.clientHeight;m_oBackgroundBlock.style.width=document.body.clientWidth;};};


if(!window.__td){window.__MT=100;window.__ti=0;window.__td=[];window.__td.length=__MT;window.__noTrace=false;}
if(typeof vp=="undefined"){var vp={};}
if(!vp.controls)
{vp.controls={};}
vp.controls.StylizedContainer={};vp.controls.StylizedContainer.renderAll=function controls_StylizedContainer_renderAll()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var aElements=vp.ui.getBySelector(".vp-stylized-container");for(var i=0;i<aElements.length;i++)
{vp.controls.StylizedContainer.render(aElements[i]);}};vp.controls.StylizedContainer.render=function controls_StylizedContainer_render(vElement,oSkin)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var oElement=vp.core.getElement(vElement,"vp.controls.StylizedContainer.render");if(oElement.stylizedContainerRendered)
{return;}
if(!oSkin)
{oSkin=vp.http.parseJSON(oElement.getAttribute("skin-data"));}
if(!oSkin.minHeight)
{oSkin.minHeight=oSkin.top+oSkin.bottom+1;}
if(!oSkin.minWidth)
{oSkin.minWidth=oSkin.left+oSkin.right+1;}
if(document.location.protocol=="https:")
{oSkin.imageDirectory=document.location.protocol+"//"+document.location.hostname+oSkin.imageDirectory;}
var bIsIE6=vp.browser.isIE&&vp.browser.ver<7;var sTreeHtml;var sExtension=(bIsIE6||!oSkin.hasPngTiles)?".gif":".png";if(!oSkin.valign)
{oSkin.valign="top";}
var oSpriteStyles={topLeft:"background-image:url("+oSkin.imageDirectory+"/sprite_corners"+sExtension+"?v=1);width:"+oSkin.left+"px;height:"+oSkin.top+"px;",topMiddle:"background-image:url("+oSkin.imageDirectory+"/sprite_corners"+sExtension+"?v=1);background-position:0px -"+(oSkin.top+oSkin.bottom)+"px;left:"+oSkin.left+"px;right:"+oSkin.right+"px;height:"+oSkin.top+"px;background-repeat:repeat-x;",topRight:"background-image:url("+oSkin.imageDirectory+"/sprite_corners"+sExtension+"?v=1);background-position:"+oSkin.right+"px 0px;width:"+oSkin.right+"px;height:"+oSkin.top+"px;",middleLeft:"background-image:url("+oSkin.imageDirectory+"/sprite_left_right"+sExtension+"?v=1);background-position:0px 0px;",middleRight:"background-image:url("+oSkin.imageDirectory+"/sprite_left_right"+sExtension+"?v=1);background-position:"+oSkin.right+"px 0px;",bottomLeft:"background-image:url("+oSkin.imageDirectory+"/sprite_corners"+sExtension+"?v=1);background-position:0px -"+oSkin.top+"px;width:"+oSkin.left+"px;height:"+oSkin.bottom+"px;",bottomMiddle:"background-image:url("+oSkin.imageDirectory+"/sprite_corners"+sExtension+"?v=1);background-position:0px -"+((oSkin.top*2)+oSkin.bottom)+"px; background-repeat:repeat-x;",bottomRight:"background-image:url("+oSkin.imageDirectory+"/sprite_corners"+sExtension+"?v=1);background-position:"+oSkin.right+"px -"+oSkin.top+"px;width:"+oSkin.right+"px;height:"+oSkin.bottom+"px;"};if(!vp.ui.isQuirksMode()&&!bIsIE6&&!vp.browser.isOpera)
{sTreeHtml="<div style=\"position:absolute; z-index:1; bottom:0px; top:0px; width:100%; float:left;\">"+"<div style=\"position:absolute;left:0px;"+oSpriteStyles.topLeft+"\"></div>"+"<div style=\"position:absolute;"+oSpriteStyles.topMiddle+"\"></div>"+"<div style=\"position:absolute;right:0px;"+oSpriteStyles.topRight+"\"></div>"+"<div style=\"position:absolute;left:0px;top:"+oSkin.top+"px;width:"+oSkin.left+"px;bottom:"+oSkin.bottom+"px;"+oSpriteStyles.middleLeft+"\"></div>"+"<div style=\"position:absolute;left:"+oSkin.left+"px;right:"+oSkin.right+"px;top:"+oSkin.top+"px;bottom:"+oSkin.bottom+"px;background-color:"+oSkin.backgroundColor+";\"></div>"+"<div style=\"position:absolute;right:0px;top:"+oSkin.top+"px;bottom:"+oSkin.bottom+"px;width:"+oSkin.right+"px;"+oSpriteStyles.middleRight+"\"></div>"+"<div style=\"position:absolute;left:0px;bottom:0px;"+oSpriteStyles.bottomLeft+"\"></div>"+"<div style=\"position:absolute;bottom:0px;left:"+oSkin.left+"px;right:"+oSkin.right+"px;height:"+oSkin.bottom+"px;"+oSpriteStyles.bottomMiddle+"\"></div>"+"<div style=\"position:absolute;right:0px;bottom:0px;"+oSpriteStyles.bottomRight+"\"></div>"+"</div>";}
else
{var sTableHeight=bIsIE6&&!vp.ui.isQuirksMode()?"expression(this.parentNode.offsetHeight + 'px')":"100%";var sMiddleRowHeight=bIsIE6&&!vp.ui.isQuirksMode()?"height:expression((this.parentNode.parentNode.offsetHeight - "+((oSkin.top+oSkin.bottom)+1)+") + 'px');":"";var sSpacer="<div style=\"width:1px;height:1px;overflow:hidden;\"></div>";sTreeHtml="<table cellspacing=\"0\" cellpadding=\"0\" border=\"0\" style=\"border-collapse:collapse;width:100%;top:0px;left:0px;height:"+sTableHeight+";position:absolute;\">"+"<tr>"+"<td style=\""+oSpriteStyles.topLeft+"\">"+sSpacer+"</td>"+"<td style=\""+oSpriteStyles.topMiddle+"\"></td>"+"<td style=\""+oSpriteStyles.topRight+"\">"+sSpacer+"</td>"+"</tr>"+"<tr>"+"<td style=\""+oSpriteStyles.middleLeft+sMiddleRowHeight+"\"></td>"+"<td style=\"background-color:"+oSkin.backgroundColor+";\">"+sSpacer+"</td>"+"<td style=\""+oSpriteStyles.middleRight+"\">"+sSpacer+"</td>"+"</tr>"+"<tr>"+"<td style=\""+oSpriteStyles.bottomLeft+"\">"+sSpacer+"</td>"+"<td style=\""+oSpriteStyles.bottomMiddle+"\"></td>"+"<td style=\""+oSpriteStyles.bottomRight+"\">"+sSpacer+"</td>"+"</tr>"+"</table>";}
var sAlignHeight="";if(oSkin.valign=="middle"||oSkin.valign=="bottom")
{sAlignHeight="height:100%;";}
sTreeHtml+="<div style=\"position:relative;z-index:2;"+sAlignHeight+"\">"+"<table cellpadding=\"0\" cellspacing=\"0\" style=\"position:relative;width:100%;"+sAlignHeight+"\">"+"<tr>"+"<td style=\"height:1px;width:1px;\">"+"<div style=\"width:1px;height:1px;overflow:hidden;\"></div>"+"</td>"+"<td style=\"height:1px;\">"+"<div style=\"width:"+(oSkin.minWidth-1)+"px;height:1px;overflow:hidden;\"></div>"+"</td>"+"</tr>"+"<tr>"+"<td style=\"width:1px;\">"+"<div style=\"height:"+(oSkin.minHeight-1)+"px;width:1px;overflow:hidden;\"></div>"+"</td>"+"<td class=\"stylized-container-content\" style=\"padding:"+oSkin.padding+";\" valign=\""+oSkin.valign+"\">"+"</td>"+"</tr>"+"</table>"+"</div>";var oInnerNode=document.createElement("DIV");oInnerNode.innerHTML=sTreeHtml;var oContentNode=oInnerNode.childNodes[1].firstChild.firstChild.childNodes[1].childNodes[1];var oChild;var iLeftPadding=parseInt(vp.ui.getCurrentStyle(oContentNode,"paddingLeft"));if(iLeftPadding)
{oContentNode.style.paddingLeft=(iLeftPadding-1)+"px";}
var iTopPadding=parseInt(vp.ui.getCurrentStyle(oContentNode,"paddingTop"));if(iTopPadding)
{oContentNode.style.paddingTop=(iTopPadding-1)+"px";}
var aFontStyles=["fontWeight","fontFamily","color","fontSize","fontStyle","textDecoration","textAlign"];aFontStyles.map(function(sStyle)
{if(oElement.style[sStyle])
{oContentNode.style[sStyle]=oElement.style[sStyle];}});while(oElement.childNodes.length>0)
{oChild=oElement.childNodes[0];oChild.parentNode.removeChild(oChild);oContentNode.appendChild(oChild);}
oInnerNode.style.position="relative";oInnerNode.style.height=document.all?"100%":"inherit";oInnerNode.style.minHeight=oSkin.minHeight+"px";oElement.style.minHeight=oSkin.minHeight+"px";if(vp.ui.isQuirksMode()&&vp.ui.getCurrentStyle(oElement,"height")=="auto")
{oElement.style.height=oSkin.minHeight+"px";}
if(!parseInt(vp.ui.getCurrentStyle(oElement,"minWidth")))
{oElement.style.minWidth=oSkin.minWidth+"px";}
oElement.appendChild(oInnerNode);oElement.stylizedContainerRendered=true;};vp.controls.StylizedContainer.unrender=function controls_StylizedContainer_unrender(vElement)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var oElement=vp.core.getElement(vElement,"vp.controls.StylizedContainer.unrender");var oContentNode=oElement.firstChild.childNodes[1].firstChild.firstChild.childNodes[1].childNodes[1];while(oElement.childNodes.length>0)
{oElement.removeChild(oElement.childNodes[0]);}
var oChild;while(oContentNode.childNodes.length>0)
{oChild=oContentNode.childNodes[0];oContentNode.removeChild(oChild);oElement.appendChild(oChild);}
oElement.stylizedContainerRendered=false;};vp.controls.StylizedContainer.rerender=function controls_StylizedContainer_rerender(vElement)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
vp.controls.StylizedContainer.unrender(vElement);vp.controls.StylizedContainer.render(vElement);};


if(!window.__td){window.__MT=100;window.__ti=0;window.__td=[];window.__td.length=__MT;window.__noTrace=false;}
if(typeof vp=="undefined"){var vp={};}
if(!vp.dialog)
{vp.dialog=function dialog(){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}};}
var VP_DIALOG_DEFAULT_HEIGHT=400;var VP_DIALOG_DEFAULT_WIDTH=400;var DIALOG_SCROLL_TYPE_NO="NO";var DIALOG_SCROLL_TYPE_VERTICAL="VERTICAL";var DIALOG_SCROLL_TYPE_HORIZONTAL="HORIZONTAL";var DIALOG_SCROLL_TYPE_BOTH="BOTH";var DIALOG_TYPE_IFRAME="IFrame";var DIALOG_TYPE_POPUP="Popup";var DIALOG_TYPE_NODE="Node";vp.dialog.Dialog=function dialog_Dialog(sID,oRect)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var me=this;this.id=vp.core.requireArg("sID",sID);if(!this.id)
{throw new Error("No ID specified for this dialog");}
window.__vp_dialog_map[sID]=me;this.openerWindow=window;this.rect=oRect||{};vp.core.initProperty(this.rect,"top",-1);vp.core.initProperty(this.rect,"left",-1);vp.core.initProperty(this.rect,"width",VP_DIALOG_DEFAULT_WIDTH);vp.core.initProperty(this.rect,"height",VP_DIALOG_DEFAULT_HEIGHT);this.onopen=new vp.events.CustomEvent(me,"onopen");this.onclose=new vp.events.CustomEvent(me,"onclose");this.onbeforeclose=new vp.events.CustomEvent(me,"onbeforeclose");this.onresize=new vp.events.CustomEvent(me,"onresize");this.onresize.useUnsafeClosures=true;this.open=function pb_this_open()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var e={};e.args=[];for(var i=0;i<arguments.length;i++)
{e.args.push(arguments[i]);}
me.onopen.fire(e);};this._beginClose=function pb_this__beginClose(e)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
e=e||{};e.dialog=me;me.onbeforeclose.fire(e);return e.cancelClose?false:true;};this.close=function pb_this_close(e)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
e=e||{};e.dialog=me;me.onclose.fire(e);return true;};};vp.dialog.NodeDialog=function dialog_NodeDialog(sId,oRect,vContentNode)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
this.inheritFrom=vp.dialog.Dialog;this.inheritFrom(sId,oRect);var me=this;this.dialogType=DIALOG_TYPE_NODE;this.rootWindow=vp.dialog._getRootWindow();this.chrome=null;this.options={iconUrl:null,isDraggable:true,veilColor:"#000",veilOpacity:0.25,resizeWidthToContent:oRect&&oRect.width&&oRect.width>0?false:true,resizeHeightToContent:oRect&&oRect.height&&oRect.height>0?false:true,closeOnClickOutside:false,maximumHeight:0,maximumWidth:0,contentLeftMargin:-1,contentRightMargin:-1,parentNode:null};this.onmovestart=new vp.events.CustomEvent(this,"onmovestart");this.onmoveend=new vp.events.CustomEvent(this,"onmoveend");this.onmove=new vp.events.CustomEvent(this,"onmove");var _iLevel=0;this.getLevel=function pb_this_getLevel()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
return _iLevel;};var _oContentNode=vp.core.requireArg("oContentNode",vContentNode);var _oChromeNode=null;var BASE_Z_INDEX=10000011;var DIALOG_Z_INDEX_OFFSET=10;this.resize=function pb_this_resize(width,height,bCenter)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(width>0)
{me.rect.width=width;}
if(height>0)
{me.rect.height=height;}
ensureMinimumHeightForChrome();adjustForMaximumBounds();if(bCenter)
{resetCoordsToCenter();}
positionDialog();};this.getContentContainer=function pb_this_getContentContainer()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(typeof _oContentNode=="string")
{_oContentNode=vp.ui.get(_oContentNode);}
return _oContentNode;};this.resizeBy=function pb_this_resizeBy(iIncreaseWidthBy,iIncreaseHeightBy,bCenter)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
me.rect.width+=iIncreaseWidthBy;me.rect.height+=iIncreaseHeightBy;adjustForMaximumBounds();if(bCenter)
{resetCoordsToCenter();}
positionDialog();};this.center=function pb_this_center()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
me.resizeBy(0,0,true);};this.resizeByContentSize=function pb_this_resizeByContentSize(contentWidth,contentHeight,bCenter)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
setRectByContentSize({width:contentWidth,height:contentHeight});adjustForMaximumBounds();if(bCenter)
{resetCoordsToCenter();}
positionDialog();};this.resizeToFitContent=function pb_this_resizeToFitContent(bCenter)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var oContentRect=vp.ui.getRect(_oContentNode);me.resizeByContentSize(oContentRect.width,oContentRect.height,bCenter);};var setRectByContentSize=function pv_setRectByContentSize(oRect)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var oOuterRect=me.chrome.getOuterRectFromContentRect(me,oRect);me.rect.width=oOuterRect.width;me.rect.height=oOuterRect.height;ensureMinimumHeightForChrome();};var ensureMinimumHeightForChrome=function pv_ensureMinimumHeightForChrome()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var iMinHeight=me.chrome.top+me.chrome.bottom;if(me.rect.height<iMinHeight)
{me.rect.height=iMinHeight;};};var initializeSize=function pv_initializeSize()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(typeof _oContentNode=="string")
{_oContentNode=vp.ui.get(_oContentNode);}
if(_oContentNode.style.display=="none")
{_oContentNode.style.display="";}
if(me.options.resizeWidthToContent||me.options.resizeHeightToContent)
{var oContentRect=vp.ui.getRect(_oContentNode);if(oContentRect.width===0)
{throw new Error("No size was specified, and the size could not be "+"determined from the specified content because it has not been rendered. "+"The node or one of its ancestor containers probably has display:none set.");}
var oRect=me.rect||{};oRect.width=me.options.resizeWidthToContent?oContentRect.width:oRect.width;oRect.height=me.options.resizeHeightToContent?oContentRect.height:oRect.height;setRectByContentSize(oRect);}
ensureMinimumHeightForChrome();};var getBaseZIndex=function pv_getBaseZIndex()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
return BASE_Z_INDEX+(_iLevel*DIALOG_Z_INDEX_OFFSET);};var getBackgroundId=function pv_getBackgroundId()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var oParentNode=getParentNode();if(!oParentNode.id)
{oParentNode.id=oParentNode.tagName+"_"+(new Date()).valueOf();}
return"__vp_dialog_background"+_iLevel+"_"+oParentNode.id;};var getParentNodePositionWithoutScroll=function pv_getParentNodePositionWithoutScroll()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var oParentNode=getParentNode();var oParentRect=vp.ui.getRect(oParentNode);oParentRect.top-=oParentNode.scrollTop;oParentRect.left-=oParentNode.scrollLeft;oParentRect.top=Math.max(oParentRect.top,0);oParentRect.left=Math.max(oParentRect.left,0);return oParentRect;};var showBackgroundBlock=function pv_showBackgroundBlock(bShow)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var sBackgroundId=getBackgroundId();var oBlock=me.rootWindow[sBackgroundId];if(!oBlock)
{oBlock=me.rootWindow.vp.ui.createElement("DIV",{unselectable:"on"},{zIndex:getBaseZIndex(),position:"absolute",width:"100%",height:"100%",backgroundColor:me.options.veilColor,opacity:me.options.veilOpacity});preventBubblingMouseEvents(oBlock);getParentNode().appendChild(oBlock);vp.ui.makeElementOpaqueInIE6(oBlock,true);me.rootWindow[sBackgroundId]=oBlock;}
var oParentRect=getParentNodePositionWithoutScroll();vp.ui.setStyle(oBlock,{top:-oParentRect.top,left:-oParentRect.left});if(!vp.ui.isQuirksMode())
{var iBodyMarginLeft=parseInt(vp.ui.getCurrentStyle(getParentNode(),"marginLeft"));var iBodyMarginTop=parseInt(vp.ui.getCurrentStyle(getParentNode(),"marginTop"));if(iBodyMarginLeft&&iBodyMarginTop)
{vp.ui.setStyle(oBlock,{top:-iBodyMarginTop,left:-iBodyMarginLeft});}}
if(me.options.veilOpacity===0)
{hideBackgroundBlock();}
else
{me.rootWindow[sBackgroundId].style.display="";}};var hideBackgroundBlock=function pv_hideBackgroundBlock()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var sBackgroundId=getBackgroundId();if(me.rootWindow[sBackgroundId])
{me.rootWindow[sBackgroundId].style.display="none";}};var preventBubblingMouseEvents=function pv_preventBubblingMouseEvents(oElement)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
vp.events.add(oElement,"mousedown",cancelBubbleIfNotDragging);vp.events.add(oElement,"mouseup",cancelBubbleIfNotDragging);vp.events.add(oElement,"click",cancelBubbleIfNotDragging);};var cancelBubbleIfNotDragging=function pv_cancelBubbleIfNotDragging(e)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(!_bIsDragging)
{vp.events.cancelBubble(e);}};this.replaceContentNode=function pb_this_replaceContentNode(oContentNode)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(_oChromeNode)
{while(_oElements.contentContainer.childNodes.length>0)
{vp.ui.removeFromDOM(_oElements.contentContainer.firstChild);}
_oElements.contentContainer.appendChild(oContentNode);}
_oContentNode=oContentNode;};var _bIsVisible=false;var _sOriginalNodeTop=null;this.isVisible=function pb_this_isVisible()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
return _bIsVisible;};var setVisibility=function pv_setVisibility(bVisible)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(bVisible)
{if(_bIsVisible)
{return;}
if(!me.rootWindow.__vp_dialog_stack)
{me.rootWindow.__vp_dialog_stack=[];}
if(me.rootWindow.__vp_dialog_stack.length>0)
{_iLevel=me.rootWindow.__vp_dialog_stack[me.rootWindow.__vp_dialog_stack.length-1].getLevel()+1;}
else
{_iLevel=0;}
me.rootWindow.__vp_dialog_stack.push(me);vp.ui.setStyle(_oChromeNode,{zIndex:getBaseZIndex()+1,display:"",visibility:""});if(_sOriginalNodeTop)
{_oChromeNode.style.top=_sOriginalNodeTop;_sOriginalNodeTop=null;}
vp.ui.setStyle(_oContentNode,{display:"",visibility:""});showBackgroundBlock();vp.events.add(me.rootWindow,"resize",resizeHandler);_bIsVisible=true;}
else
{if(!_bIsVisible)
{return;}
me.rootWindow.__vp_dialog_stack.pop();_oChromeNode.style.visibility="hidden";_sOriginalNodeTop=_oChromeNode.style.top;_oChromeNode.style.top=-1000+"px";_oContentNode.style.visibility="hidden";vp.events.remove(me.rootWindow,"resize",resizeHandler);_bIsVisible=false;}};var _oLastWindowSize=null;var resizeHandler=function pv_resizeHandler(e)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var oWindowSize=vp.ui.getViewportSize();if(_oLastWindowSize)
{if(_oLastWindowSize.width==oWindowSize.width&&_oLastWindowSize.height==oWindowSize.height)
{return;}}
hideBackgroundBlock();resetCoordsToCenter();positionDialog();showBackgroundBlock();_oLastWindowSize=oWindowSize;};var base_open=this.open;this.open=function pb_this_open()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
buildChrome();setVisibility(true);vp.ui.makeElementOpaqueInIE6(_oElements.outerContainer,true,_oChromeNode);positionDialog();base_open();if(me.options.closeOnClickOutside)
{vp.events.add(vp.ui.getRootElement(),"mousedown",closeMeOnClickOutside);}};var base_close=this.close;this.close=function pb_this_close(e)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(!me._beginClose(e))
{return false;}
setVisibility(false);me.rootWindow[getBackgroundId()].style.display="none";vp.events.remove(vp.ui.getRootElement(),"mousedown",closeMeOnClickOutside);return base_close(e);};var closeMeOnClickOutside=function pv_closeMeOnClickOutside(e)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(!vp.ui.isScrollBarClickEvent(e))
{me.close();}};var _oContentContainer;var _oElements={};var collectElementsFromChrome=function pv_collectElementsFromChrome(oRootNode)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(oRootNode.nodeType==1)
{var sName=oRootNode.getAttribute("vp-dialog-type");if(sName)
{_oElements[sName]=oRootNode;}
for(var i=0;i<oRootNode.childNodes.length;i++)
{collectElementsFromChrome(oRootNode.childNodes[i]);}}};this._getUniqueElementId=function pb_this__getUniqueElementId(sBaseId)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var i=1;var sProcessedId=sBaseId;while(document.getElementById(sProcessedId))
{sProcessedId=sBaseId+i;i++;}
return sProcessedId;};var buildChrome=function pv_buildChrome()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(!_oChromeNode)
{initializeSize();_oChromeNode=me.rootWindow.vp.ui.createElement("DIV",{id:me._getUniqueElementId(sId)},"position:absolute; display:none;");if(!me.chrome)
{throw new Error("No chrome defined");}
buildChromeDOM();if(_oElements.iconContainer&&me.options.iconUrl)
{var oIconNode=me.rootWindow.document.createElement("IMG");oIconNode.src=me.options.iconUrl;oIconNode.className="pngfix";oIconNode.removeAttribute("width");oIconNode.removeAttribute("height");while(_oElements.iconContainer.firstChild)
{vp.ui.removeFromDOM(_oElements.iconContainer.firstChild);}
_oElements.iconContainer.appendChild(oIconNode);}
else
{_oElements.iconContainer.style.width="1px";}
if(_oElements.titleContainer&&me.options.title)
{_oElements.titleContainer.innerHTML=me.options.title;}
if(_oElements.closeButton)
{vp.ui.setStyleValue(_oElements.closeButton,"cursor","pointer");vp.events.add(_oElements.closeButton,"click",function()
{var e={};e.isCancelButton=true;me.close(e);});}
vp.ui.makeUnselectable(_oChromeNode);me.replaceContentNode(_oContentNode);if(me.options.isDraggable)
{vp.events.add(_oElements.titleBar,"mousedown",startDrag);}
getParentNode().appendChild(_oChromeNode);preventBubblingMouseEvents(_oChromeNode);}};var getParentNode=function pv_getParentNode()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(!me.options.parentNode)
{me.options.parentNode=me.rootWindow.document.body;}
return me.options.parentNode;};var buildChromeDOM=function pv_buildChromeDOM()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var fnGetContentMargin=function pv_fnGetContentMargin(iOptionsMargin,iChromeMargin)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(typeof(iOptionsMargin)!="undefined"&&iOptionsMargin>=0)
{return iOptionsMargin;}
return iChromeMargin;};var iContentLeftMargin=fnGetContentMargin(me.options.contentLeftMargin,me.chrome.contentLeftMargin);var iContentRightMargin=fnGetContentMargin(me.options.contentRightMargin,me.chrome.contentRightMargin);_oElements.outerContainer=me.rootWindow.vp.ui.createElement("DIV",null,{zIndex:1,position:"relative"});_oElements.titleBar=me.rootWindow.vp.ui.createElement("DIV",null,{height:me.chrome.titleBarHeight});_oElements.contentContainer=me.rootWindow.vp.ui.createElement("DIV",null,{margin:me.chrome.contentTopMargin+"px "+
iContentRightMargin+"px "+
me.chrome.contentBottomMargin+"px "+
iContentLeftMargin+"px",overflow:"hidden"});_oChromeNode.appendChild(_oElements.outerContainer);_oElements.outerContainer.appendChild(_oElements.titleBar);_oElements.outerContainer.appendChild(_oElements.contentContainer);var oSkin={imageDirectory:me.chrome.imagesDirectory,top:me.chrome.top,left:me.chrome.left,right:me.chrome.right,bottom:me.chrome.bottom,backgroundColor:me.chrome.backgroundColor,padding:"0px",headerHeight:0,hasPngTiles:me.chrome.hasPngTiles?true:false};me.rootWindow.vp.controls.StylizedContainer.render(_oElements.outerContainer,oSkin);_oElements.titleBar.innerHTML='<table style="width:100%; height:'+me.chrome.titleBarHeight+'px;" cellpadding="0" cellspacing="0">'+'<tr>'+'<td style="width:36px; padding-left:4px;" valign="middle" vp-dialog-type="iconContainer">'+'</td>'+'<td style="text-align:left; '+me.chrome.titleStyle+' padding-left:4px; cursor:default;" vp-dialog-type="titleContainer">'+'</td>'+'<td style="width:10%; text-align:right; font-size:1px; padding-right:5px;"><img vp-dialog-type="closeButton" src="'+me.chrome.closeButton+'" /></td>'+'</tr>'+'</table>';collectElementsFromChrome(_oElements.titleBar);};var resetCoordsToCenter=function pv_resetCoordsToCenter(bOffsetForLevel)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var oViewport=vp.ui.getViewportSize(me.rootWindow);var oScroll=vp.ui.getScrollOffset(me.rootWindow);me.rect.top=Math.floor((oViewport.height-me.rect.height)/2)+oScroll.top;me.rect.left=Math.floor((oViewport.width-me.rect.width)/2)+oScroll.left;if(bOffsetForLevel&&me.getLevel()>0)
{var oUnderneathDialog=me.rootWindow.__vp_dialog_stack[me.getLevel()-1];if(oUnderneathDialog.rect.width==me.rect.width)
{me.rect.top+=me.getLevel()*8;me.rect.left+=me.getLevel()*8;}}};var _oLastRenderedCoords=null;var adjustForMaximumBounds=function pv_adjustForMaximumBounds()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(!_oContentNode||(me.options.maximumHeight===0&&me.options.maximumWidth===0))
{return;}
var oRect=me.chrome.getContentRectFromOuterRect(me);var oOuterRect=me.rect;var addedYScroll=false;var maxHeight=me.options.maximumHeight;var maxWidth=me.options.maximumWidth;if(maxHeight<0)
{maxHeight+=vp.ui.getClientHeight();}
if(maxWidth<0)
{maxWidth+=vp.ui.getClientWidth();}
if(maxHeight>0&&maxHeight<oOuterRect.height)
{oRect.height-=Math.max(0,oOuterRect.height-maxHeight);oRect.width+=20;_oElements.contentContainer.style.overflowY="auto";addedYScroll=true;}
else
{_oElements.contentContainer.style.overflowY="hidden";}
if(maxWidth>0&&maxWidth<oOuterRect.width)
{oRect.width-=Math.max(0,oOuterRect.width-maxWidth);oRect.height+=20;if(!addedYScroll)
{oRect.width+=20;}
_oElements.contentContainer.style.overflowX="auto";}
else
{_oElements.contentContainer.style.overflowX="hidden";}
setRectByContentSize(oRect);};var positionDialog=function pv_positionDialog()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(me.rect.top==-1&&me.rect.left==-1)
{resetCoordsToCenter(true);}
var bIsResize=false;if(_oLastRenderedCoords)
{if(_oLastRenderedCoords.width!=me.rect.width||_oLastRenderedCoords.height!=me.rect.height)
{bIsResize=true;}}
_oLastRenderedCoords={width:me.rect.width,height:me.rect.height};var oParentRect=getParentNodePositionWithoutScroll();_oChromeNode.style.top=(Math.max(0,me.rect.top)-oParentRect.top)+"px";_oChromeNode.style.left=(Math.max(0,me.rect.left)-oParentRect.left)+"px";_oChromeNode.style.width=me.rect.width+"px";_oChromeNode.style.height=me.rect.height+"px";var oContentRect=me.chrome.getContentRectFromOuterRect(me);_oElements.contentContainer.style.width=oContentRect.width+"px";_oElements.contentContainer.style.height=oContentRect.height+"px";var oPageSize=vp.ui.getPageSize(me.rootWindow);me.rootWindow[getBackgroundId()].style.width=oPageSize.width+"px";me.rootWindow[getBackgroundId()].style.height=oPageSize.height+"px";_oContentNode.style.display="block";_oContentNode.style.visibility="visible";if(bIsResize)
{me.onresize.fire();}};this.setTitle=function pb_this_setTitle(sTitle)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
_oElements.titleContainer.innerHTML=sTitle;};var getMousePos=function pv_getMousePos(e)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
e=vp.events.getEvent(e);var oMousePos={left:e.clientX,top:e.clientY};if(e.target.ownerDocument!=me.rootWindow.document)
{var oIFrame=vp.ui.getIFrameForDocument(e.target.ownerDocument);var oRect=vp.ui.getRect(oIFrame);oMousePos.top+=oRect.top;oMousePos.left+=oRect.left;}
return oMousePos;};var _bIsDragging=false;var _oInitialMousePos=null;var _oInitialDialogPos=null;var startDrag=function pv_startDrag(e)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
e=vp.events.getEvent(e);me.onmovestart.fire(e);if(e.cancel)
{return;}
if(e.target==_oContentNode||vp.ui.isChildOf(e.target,_oContentNode))
{return;}
vp.events.cancel(e);_oInitialMousePos=getMousePos(e);_oInitialDialogPos={top:_oChromeNode.offsetTop,left:_oChromeNode.offsetLeft};var oRootElement=vp.ui.getRootElement(me.rootWindow.document);vp.events.add(oRootElement,"mousemove",drag);vp.events.add(oRootElement,"mouseup",stopDrag);vp.events.add(_oChromeNode,"mouseup",stopDrag);var aFrames=_oChromeNode.getElementsByTagName("IFRAME");for(var i=0;i<aFrames.length;i++)
{try
{vp.events.add(vp.ui.getRootElement(aFrames[i].contentWindow.document),"mousemove",drag);vp.events.add(vp.ui.getRootElement(aFrames[i].contentWindow.document),"mouseup",stopDrag);}
catch(ex){}}
_oParentRect=vp.ui.getRect(getParentNode());_bIsDragging=true;};var _oParentRect;var drag=function pv_drag(e)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
vp.events.cancel(e);if(document.all&&e.button===0)
{stopDrag(e);return;}
var oMousePos=getMousePos(e);var iDeltaTop=oMousePos.top-_oInitialMousePos.top;var iDeltaLeft=oMousePos.left-_oInitialMousePos.left;me.rect.top=Math.max(_oInitialDialogPos.top+iDeltaTop,-_oParentRect.top);me.rect.left=Math.max(_oInitialDialogPos.left+iDeltaLeft,-_oParentRect.left);_oChromeNode.style.top=me.rect.top+"px";_oChromeNode.style.left=me.rect.left+"px";me.onmove.fire(e);};var stopDrag=function pv_stopDrag(e)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
_oInitialMousePos=null;_oInitialDialogPos=null;vp.events.cancel(e);vp.events.remove(vp.ui.getRootElement(me.rootWindow.document),"mousemove",drag);vp.events.remove(vp.ui.getRootElement(me.rootWindow.document),"mouseup",stopDrag);vp.events.remove(_oChromeNode,"mouseup",stopDrag);var aFrames=_oChromeNode.getElementsByTagName("IFRAME");for(var i=0;i<aFrames.length;i++)
{try
{vp.events.remove(vp.ui.getRootElement(aFrames[i].contentWindow.document),"mousemove",drag);vp.events.remove(vp.ui.getRootElement(aFrames[i].contentWindow.document),"mouseup",stopDrag);}
catch(ex){}}
_bIsDragging=false;me.onmoveend.fire(e);};};vp.dialog._setupOptions=function dialog__setupOptions(oDialog,sTitle,oChrome,oOptions)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
oDialog.options.title=sTitle||"";for(var sProp in oOptions)
{if(typeof(oDialog.options[sProp])=="undefined")
{throw new Error("Unknown option: "+sProp);}
oDialog.options[sProp]=oOptions[sProp];}
oDialog.chrome=oChrome||vp.dialog.chrome.Primary;};vp.dialog.NodeDialog.create=function dialog_NodeDialog_create(sName,sTitle,vElementOrID,oChrome,iWidth,iHeight,oOptions)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var oDialog=new vp.dialog.NodeDialog(sName,{width:iWidth,height:iHeight},vElementOrID);vp.dialog._setupOptions(oDialog,sTitle,oChrome,oOptions);return oDialog;};vp.dialog.NodeDialog.open=function dialog_NodeDialog_open(sName,sTitle,vElementOrID,oChrome,iWidth,iHeight,oOptions)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var oDialog=vp.dialog.NodeDialog.create(sName,sTitle,vElementOrID,oChrome,iWidth,iHeight,oOptions);oDialog.open();return oDialog;};vp.dialog.IFrameDialog=function dialog_IFrameDialog(sId,oRect,sUrl){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
this.inheritFrom=vp.dialog.NodeDialog;this.inheritFrom(sId,oRect,vp.dialog._getRootWindow().document.createElement("DIV"));var me=this;this.dialogType=DIALOG_TYPE_IFRAME;this._oIFrame=null;this.url=vp.core.requireArg("sUrl",sUrl);this.scrollType=DIALOG_SCROLL_TYPE_NO;var getNewIFrame=function pv_getNewIFrame()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var oIFrame=me.rootWindow.document.createElement("IFRAME");oIFrame.id=me._getUniqueElementId(sId+"_iframe");oIFrame.name=oIFrame.id;oIFrame.frameBorder="0";oIFrame.allowTransparency="true";oIFrame.style.backgroundColor="transparent";oIFrame.style.border="0px";oIFrame.style.margin="0px";oIFrame.style.padding="0px";switch(me.scrollType){case DIALOG_SCROLL_TYPE_VERTICAL:oIFrame.style.overflowX="hidden";oIFrame.style.overflowY="auto";break;case DIALOG_SCROLL_TYPE_HORIZONTAL:oIFrame.style.overflowX="auto";oIFrame.style.overflowY="hidden";break;case DIALOG_SCROLL_TYPE_BOTH:break;default:oIFrame.scrolling="no";break;}
oIFrame.position="absolute";oIFrame.style.top="0";oIFrame.style.left="0";oIFrame.style.width="100%";oIFrame.style.height="100%";oIFrame.isModalDialog=true;me.rootWindow.vp.core.setObjectReference(oIFrame,me,"dialog");return oIFrame;};var base_open=this.open;this.open=function pb_this_open(sUrl)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(!sUrl)
{sUrl=me.url;}
var oUrl=new vp.web.URL(sUrl);oUrl.setItem("ts",new Date().valueOf());sUrl=oUrl.toString();me._oIFrame=getNewIFrame();if(vp.ui.ensureIFrameSrc)
{vp.ui.ensureIFrameSrc(me._oIFrame);}
me.replaceContentNode(me._oIFrame);me.url=sUrl;base_open();vp.events.add(me._oIFrame,"load",fixIE8IFrame);me._oIFrame.src=sUrl;};var fixIE8IFrame=function pv_fixIE8IFrame()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
try
{var oBody=me._oIFrame.contentWindow.document.body;if(oBody.offsetLeft>10)
{oBody.style.position="static";}}
catch(e)
{}};var base_close=this.close;this.close=function pb_this_close(e){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(!base_close(e)){return false;}
if(document.all){try{me._oIFrame.contentWindow.document.write("");me._oIFrame.contentWindow.document.close();}
catch(accessDenied){}}
vp.ui.removeFromDOM(me._oIFrame);return true;};this.reload=function pb_this_reload(){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var oDoc=me._oIFrame.contentDocument||me._oIFrame.contentWindow.document;oDoc.location.reload();};this.resizeToFitContent=function pb_this_resizeToFitContent(){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var oContentSize=vp.ui.getPageSize(me._oIFrame.contentWindow);me.resizeByContentSize(oContentSize.width,oContentSize.height);};};vp.dialog.IFrameDialog.create=function dialog_IFrameDialog_create(sName,sTitle,sURL,oChrome,iWidth,iHeight,oOptions)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var oDialog=new vp.dialog.IFrameDialog(sName,{width:iWidth,height:iHeight},sURL);oDialog.scrollType=oOptions&&oOptions.scrollType?oOptions.scrollType:DIALOG_SCROLL_TYPE_VERTICAL;if(oOptions&&oOptions.scrollType)
{delete oOptions.scrollType;}
vp.dialog._setupOptions(oDialog,sTitle,oChrome,oOptions);return oDialog;};vp.dialog.IFrameDialog.open=function dialog_IFrameDialog_open(sName,sTitle,sURL,oChrome,iWidth,iHeight,oOptions)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var oDialog=vp.dialog.IFrameDialog.create(sName,sTitle,sURL,oChrome,iWidth,iHeight,oOptions);oDialog.open();return oDialog;};vp.dialog.PopupDialog=function dialog_PopupDialog(sId,oRect,sUrl,bIsCrossDomain)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
this.inheritFrom=vp.dialog.Dialog;this.inheritFrom(sId,oRect);var me=this;this.dialogType=DIALOG_TYPE_POPUP;this.window=null;this.scrollable=false;this.resizable=false;this.url=sUrl;this.isCrossDomain=bIsCrossDomain;var base_open=this.open;this.open=function pb_this_open(sUrl)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
sUrl=sUrl||me.url;me.window=vp.win.openCentered(sUrl,sId,me.rect.width,me.rect.height,me.resizable,me.scrollable,me.isCrossDomain);if(!me.window)
{return;}
me.window.resizeTo(me.rect.width,me.rect.height);vp.events.add(me.window,"load",initializeWindow);base_open();};var _oChromeSize=null;var initializeWindow=function pv_initializeWindow()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(!_oChromeSize)
{var oInnerSize=vp.ui.getViewportSize(me.window);_oChromeSize={width:me.rect.width-oInnerSize.width,height:me.rect.height-oInnerSize.height};}};var base_close=this.close;this.close=function pb_this_close(e)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(!me._beginClose(e))
{return false;}
me.window.close();return base_close(e);};this.resizeToFitContent=function pb_this_resizeToFitContent()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
initializeWindow();var oContentSize=vp.ui.getPageSize(me.window);me.window.resizeTo(oContentSize.width+_oChromeSize.width,oContentSize.height+_oChromeSize.height);};this.resizeByContentSize=function pb_this_resizeByContentSize(iWidth,iHeight,bCenter)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
initializeWindow();me.window.resizeTo(iWidth+_oChromeSize.width,iHeight+_oChromeSize.height);if(bCenter)
{vp.win.center(me.window);}};this.setTitle=function pb_this_setTitle(sTitle)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
me.window.document.title=sTitle;};};vp.dialog.getDialogById=function dialog_getDialogById(sID)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(window.__vp_dialog_map[sID])
{return window.__vp_dialog_map[sID];}
return null;};vp.dialog.get=vp.dialog.getDialogById;vp.dialog.getCurrent=function dialog_getCurrent()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var oDialog;if(window.parent&&window.parent!=window&&window.parent.vp&&window.parent.vp.dialog)
{var oIframe=vp.ui.getIFrameForDocument(window.document);if(!oIframe)
{return null;}
return vp.dialog._getRootWindow().vp.core.getObjectReference(oIframe,"dialog",parent);}
if(window.opener)
{try
{var oMap=window.opener.__vp_dialog_map;if(oMap)
{for(var sID in oMap)
{if(oMap[sID].window==window)
{return oMap[sID];}}}}
catch(ex)
{}}
if(window.__vp_dialog_stack)
{return window.__vp_dialog_stack[window.__vp_dialog_stack.length-1];}};vp.dialog.closeCurrent=function dialog_closeCurrent(e)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var oDialog=vp.dialog.getCurrent();if(oDialog)
{oDialog.close(e);}
else if(window.opener&&!window.opener.closed)
{window.close();}
else
{throw new Error("No dialog found to close");}};vp.dialog.setTitleInCurrent=function dialog_setTitleInCurrent(sTitle)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var oDialog=vp.dialog.getCurrent();if(!oDialog)
{return;}
oDialog.setTitle(sTitle);};vp.dialog.cancelCurrent=function dialog_cancelCurrent(e)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
e=e||{};e.isCancelButton=true;vp.dialog.closeCurrent(e);};vp.dialog.getParent=function dialog_getParent()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var oDialog=vp.dialog.getCurrent();if(oDialog)
{return oDialog?oDialog.openerWindow:null;}
else if(window.opener&&!window.opener.closed)
{return window.opener;}
return null;};vp.dialog.resizeCurrent=function dialog_resizeCurrent(iWidth,iHeight,bCenter)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var oDialog=vp.dialog.getCurrent();if(oDialog&&oDialog.dialogType!=DIALOG_TYPE_POPUP)
{oDialog.resize(iWidth,iHeight,bCenter);}
else
{if(bCenter)
{vp.win.resizeAndCenter(iWidth,iHeight);}
else
{window.resizeTo(iWidth,iHeight);}}};vp.dialog.centerCurrent=function dialog_centerCurrent()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
vp.dialog.resizeCurrentBy(0,0,true);};vp.dialog.resizeCurrentBy=function dialog_resizeCurrentBy(iIncreaseWidthBy,iIncreaseHeightBy,bCenter)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var oDialog=vp.dialog.getCurrent();if(oDialog)
{oDialog.resizeBy(iIncreaseWidthBy,iIncreaseHeightBy,bCenter);}
else
{window.resizeBy(iIncreaseWidthBy,iIncreaseHeightBy);if(bCenter)
{vp.win.center();}}};vp.dialog.resizeCurrentToContent=function dialog_resizeCurrentToContent(bCenter)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var oDialog=vp.dialog.getCurrent();if(oDialog)
{oDialog.resizeToFitContent(bCenter);}
else
{var oSize=vp.ui.getPageSize();window.resizeTo(oSize.width,oSize.height);if(bCenter)
{vp.win.center(window);}}};vp.dialog.resizeCurrentToContentSize=function dialog_resizeCurrentToContentSize(iWidth,iHeight,bCenter)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var oDialog=vp.dialog.getCurrent();if(oDialog)
{oDialog.resizeByContentSize(iWidth,iHeight,bCenter);}
else
{window.resizeTo(iWidth+10,iHeight+70);if(bCenter)
{vp.win.center();}}};vp.dialog.addOnResizeHandlerToCurrent=function dialog_addOnResizeHandlerToCurrent(fnHandler)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var oDialog=vp.dialog.getCurrent();if(oDialog)
{oDialog.onresize.addHandler(fnHandler);vp.events.add(window,"unload",function()
{oDialog.onresize.removeHandler(fnHandler);});}
else
{vp.events.add(window,"resize",fnHandler);}};vp.dialog._getRootWindow=function dialog__getRootWindow()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var oRootWindow=window;while(oRootWindow!=oRootWindow.parent)
{var oIFrame;try
{oIFrame=vp.ui.getIFrameForDocument(oRootWindow.document);if(!oIFrame||!oIFrame.isModalDialog)
{break;}}
catch(ex)
{break;}
oRootWindow=oRootWindow.parent;}
return oRootWindow;};if(!window.__vp_dialog_map)
{window.__vp_dialog_map={};}


if(!window.__td){window.__MT=100;window.__ti=0;window.__td=[];window.__td.length=__MT;window.__noTrace=false;}
vp.dialog.chrome={};vp.dialog.chrome._LayeredChromeBase=function pb_me__LayeredChromeBase(sImagesDir)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var me=this;this.imagesDirectory=sImagesDir;this.titleBarHeight=38;this.titleStyle="color:black; font-weight:bold; font-size:13px; font-family:Arial;";this.closeButton="/vp/images/nns/common/dialog/close.gif";this.contentTopMargin=0;this.contentLeftMargin=10;this.contentRightMargin=10;this.contentBottomMargin=10;this.getContentRectFromOuterRect=function pb_this_getContentRectFromOuterRect(oDialog)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
return{width:oDialog.rect.width-(me.contentLeftMargin+me.contentRightMargin),height:oDialog.rect.height-(me.contentTopMargin+me.contentBottomMargin)-me.titleBarHeight};};this.getOuterRectFromContentRect=function pb_this_getOuterRectFromContentRect(oDialog,oContentRect)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
return{width:oContentRect.width+me.contentLeftMargin+me.contentRightMargin,height:oContentRect.height+me.contentTopMargin+me.contentBottomMargin+me.titleBarHeight};};var _bPreloaded=false;this.preloadImages=function pb_this_preloadImages()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(!_bPreloaded)
{var sExtension=this.hasPngTiles&&vp.ui.browserSupportsPNG()?"png":"gif";var aImages=[me.imagesDirectory+"/sprite_corners."+sExtension,me.imagesDirectory+"/sprite_left_right."+sExtension];vp.ui.preloadImages(aImages);_bPreloaded=true;}};};vp.dialog.chrome._VistaPrintBase=function pb_me__VistaPrintBase(sImagesDir)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
this.inheritFrom=vp.dialog.chrome._LayeredChromeBase;this.inheritFrom(sImagesDir);this.left=10;this.right=10;this.top=40;this.bottom=115;this.backgroundColor="#FFFFFF";};vp.dialog.chrome.Primary=new vp.dialog.chrome._VistaPrintBase("/vp/images/nns/common/dialog/Primary");vp.dialog.chrome.Message=new vp.dialog.chrome._VistaPrintBase("/vp/images/nns/common/dialog/Message");vp.dialog.chrome.Message.bottom=100;vp.dialog.chrome.Announcement=new vp.dialog.chrome._VistaPrintBase("/vp/images/b09/common/dialog/Announcement");vp.dialog.chrome.Announcement.left=89;vp.dialog.chrome.Announcement.right=12;vp.dialog.chrome.Announcement.top=72;vp.dialog.chrome.Announcement.bottom=12;vp.dialog.chrome.Announcement.backgroundColor="#FFFFFF";vp.dialog.chrome.Announcement.contentTopMargin=15;vp.dialog.chrome.Announcement.titleStyle="color:white; font-weight:normal; font-size:18px; font-family:Arial;";vp.dialog.chrome.Announcement.closeButton="/vp/images/b09/common/button/graphical/orange_close_button.png";vp.dialog.chrome.Announcement.contentLeftMargin=0;vp.dialog.chrome.Announcement.contentRightMargin=0;vp.dialog.chrome.Announcement.contentBottomMargin=0;


if(!window.__td){window.__MT=100;window.__ti=0;window.__td=[];window.__td.length=__MT;window.__noTrace=false;}
if(typeof vp=="undefined"){var vp={};}
if(!vp.controls)
{vp.controls={};}
vp.controls.ExpandingContainer={};vp.controls.ExpandingContainer.positionDefault=function controls_ExpandingContainer_positionDefault(oCollapsedRect,oExpandedRect)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
return{top:oCollapsedRect.top-(oExpandedRect.height-oCollapsedRect.height),left:oCollapsedRect.left};};vp.controls.ExpandingContainer.init=function controls_ExpandingContainer_init(vCollapsedElement,vExpandedElement,fnPositionElement,sExpandButtonId,sCollapseButtonId)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var oCollapsedElement=vp.core.getElement(vCollapsedElement,"vp.controls.ExpandingContainer.init");var oExpandedElement=vp.core.getElement(vExpandedElement,"vp.controls.ExpandingContainer.init");var oExpandButton=document.getElementById(sExpandButtonId)||oCollapsedElement;var oCollapseButton=document.getElementById(sCollapseButtonId)||oExpandedElement;oCollapsedElement.parentNode.style.position="relative";if(!fnPositionElement)
{fnPositionElement=vp.controls.ExpandingContainer.positionDefault;}
else if(typeof(fnPositionElement)=="string")
{try
{fnPositionElement=eval(fnPositionElement);}
catch(ex)
{throw new Error("Invalid positioning function passed to ExpandingContainer: "+ex.message);}}
vp.ui.setStyle(oExpandButton,{cursor:"pointer"});vp.events.add(oExpandButton,"mousedown",function(e)
{vp.ui.moveToRoot(oExpandedElement);vp.ui.setStyle(oExpandedElement,{position:"absolute",top:0,left:0,zIndex:10000,width:parseInt(oExpandedElement.style.width)||oCollapsedElement.offsetWidth,visibility:"hidden",display:"block"});var oNewRect=fnPositionElement(vp.ui.getRect(oCollapsedElement),vp.ui.getRect(oExpandedElement));oCollapsedElement.style.visibility="hidden";vp.ui.setStyle(oExpandedElement,oNewRect);vp.ui.setStyle(oExpandedElement,{visibility:"visible"});vp.events.cancelEvent(e);});var fnCollapse=function pv_fnCollapse(e)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
oCollapsedElement.style.visibility="visible";oExpandedElement.style.display="none";};vp.ui.setStyle(oCollapseButton,{cursor:"pointer"});vp.events.add(oCollapseButton,"mousedown",fnCollapse);vp.events.add(vp.ui.getRootElement(),"mousedown",function(e)
{e=vp.events.getEvent(e);if(e.target==oExpandedElement||vp.ui.isChildOf(e.target,oExpandedElement))
{return;}
if(e.target==oExpandButton||vp.ui.isChildOf(e.target,oExpandButton))
{return;}
fnCollapse(e);});};


if(!window.__td){window.__MT=100;window.__ti=0;window.__td=[];window.__td.length=__MT;window.__noTrace=false;}
if(typeof(vp)=="undefined")
{var vp={};}
if(typeof(vp.widget)=="undefined")
{vp.widget=function widget(){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}};}
var WIDGET_PAGINATOR_ELLIPSIS_VAL=-1;vp.widget.PagedList=function widget_PagedList(aItems,iItemsPerPage)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var me=this;this.items=aItems||[];this.itemsPerPage=iItemsPerPage||10;this.currentPageNumber=1;this.isMorePages=function pb_this_isMorePages()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
return me.currentPageNumber<me.getNumberOfPages();};this.isPreviousPages=function pb_this_isPreviousPages()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
return me.currentPageNumber>1;};this.getPage=function pb_this_getPage(iPageNumber)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
return new vp.widget.PagedListPage(me,iPageNumber);};this.getCurrentPage=function pb_this_getCurrentPage()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
return me.getPage(me.currentPageNumber);};this.moveNextPage=function pb_this_moveNextPage()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(me.isMorePages())
{me.currentPageNumber++;return true;}
return false;};this.movePreviousPage=function pb_this_movePreviousPage()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(me.isPreviousPages())
{me.currentPageNumber--;return true;}
return false;};this.moveToPage=function pb_this_moveToPage(iPageNumber)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(iPageNumber>me.getNumberOfPages())
{throw new Error("Too high");}
else if(iPageNumber<1)
{throw new Error("Too low");}
me.currentPageNumber=iPageNumber;};this.getNumberOfPages=function pb_this_getNumberOfPages()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
return Math.ceil(me.items.length/me.itemsPerPage);};};vp.widget.PagedListPage=function widget_PagedListPage(oPagedList,iPageNumber)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var me=this;var _oList=oPagedList;var _iPageNumber=iPageNumber;var _iEnumerator=-1;this.isValid=true;this.startIndex=-1;this.endIndex=-1;var init=function pv_init()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(_iPageNumber<0)
{me.isValid=false;return;}
me.startIndex=(_iPageNumber*_oList.itemsPerPage)-_oList.itemsPerPage;if(me.startIndex>=_oList.items.length)
{me.isValid=false;return;}
me.endIndex=(me.startIndex+_oList.itemsPerPage)-1;if(me.endIndex>=_oList.items.length)
{me.endIndex=_oList.items.length-1;}
if(me.startIndex<0||me.endIndex<0)
{me.isValid=false;}};this.getCurrentItem=function pb_this_getCurrentItem()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(_iEnumerator<=me.endIndex&&_iEnumerator>=me.startIndex)
{return _oList.items[_iEnumerator];}
return null;};this.moveNext=function pb_this_moveNext()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(me.isValid)
{if(_iEnumerator==-1)
{_iEnumerator=me.startIndex-1;}
if(_iEnumerator<me.endIndex)
{_iEnumerator++;return true;}}
return false;};init();};vp.widget.Paginator=function widget_Paginator(vElement,iNumberOfPages,fnPageChangeHandler)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var me=this;var _fnPageChangeHandler=fnPageChangeHandler;this.element=vp.core.getElement(vElement,"vp.widget.Paginator()");this.pagesPerScreen=9;this.selectedPageNumber=1;this.numberOfPages=iNumberOfPages;var _oElements;var initSkin=function pv_initSkin()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(!_oElements)
{_oElements=vp.ui.collectElementsByAttribute(me.element,"vp-widget-paginator-item");clearElement();}};var clearElement=function pv_clearElement()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
while(me.element.firstChild)
{vp.ui.removeFromDOM(me.element.firstChild);}};var getCurrentScreen=function pv_getCurrentScreen()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var aCurrentScreen=[];var createEllipsis=me.numberOfPages>me.pagesPerScreen;var makeLeftEllipsis=me.selectedPageNumber>parseInt(me.pagesPerScreen/2)+1&&createEllipsis?2:0;var makeRightEllipsis=me.selectedPageNumber<=me.numberOfPages-parseInt(me.pagesPerScreen/2)-1&&createEllipsis?2:0;var firstVisiblePage=Math.min(Math.max(1,me.selectedPageNumber-parseInt(me.pagesPerScreen/2)+makeLeftEllipsis),Math.max(1,me.numberOfPages-me.pagesPerScreen+makeLeftEllipsis+1));var lastVisiblePage=Math.min(firstVisiblePage+me.pagesPerScreen-makeLeftEllipsis-makeRightEllipsis-1,me.numberOfPages);if(makeLeftEllipsis>0)
{aCurrentScreen.add(1);aCurrentScreen.add(WIDGET_PAGINATOR_ELLIPSIS_VAL);}
var i;for(i=firstVisiblePage;i<=lastVisiblePage;i++)
{aCurrentScreen.add(i);}
if(makeRightEllipsis>0)
{aCurrentScreen.add(WIDGET_PAGINATOR_ELLIPSIS_VAL);aCurrentScreen.add(me.numberOfPages);}
return aCurrentScreen;};this.render=function pb_this_render()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
initSkin();var aCurrentScreen=getCurrentScreen();if(!aCurrentScreen&&me.numberOfPages>0)
{throw new Error("BAD");}
clearElement();if(me.numberOfPages!==0)
{var oTable=document.createElement("TABLE");oTable.cellSpacing=0;oTable.cellPadding=0;oTable.border=0;oTable.className="vp-widget-paginator-container";var buttonRow=oTable.insertRow(0);var oPreviousButtonCell=buttonRow.insertCell(buttonRow.childNodes.length);oPreviousButtonCell.appendChild(createPageButton(me.selectedPageNumber-1,false,"<",me.selectedPageNumber==1));for(var i=0;i<aCurrentScreen.length;i++)
{var oButtonCell=buttonRow.insertCell(buttonRow.childNodes.length);oButtonCell.appendChild(createPageButton(aCurrentScreen[i],aCurrentScreen[i]==me.selectedPageNumber,aCurrentScreen[i],false));}
var oNextButtonCell=buttonRow.insertCell(buttonRow.childNodes.length);oNextButtonCell.appendChild(createPageButton(me.selectedPageNumber+1,false,">",me.selectedPageNumber==me.numberOfPages));}
me.element.appendChild(oTable);me.element.style.visibility="visible";};var createPageButton=function pv_createPageButton(iPageNumber,bIsSelected,sText,bDisabled)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var bIsEllipsis=iPageNumber==WIDGET_PAGINATOR_ELLIPSIS_VAL;if(bIsEllipsis)
{sText="...";}
else if(!sText)
{sText=iPageNumber.toString();}
var oButton;if(bDisabled&&sText=="<")
{oButton=_oElements.leftArrowDisabled.cloneNode(true);}
else if(bDisabled&&sText==">")
{oButton=_oElements.rightArrowDisabled.cloneNode(true);}
else if(sText=="<")
{oButton=_oElements.leftArrow.cloneNode(true);}
else if(sText==">")
{oButton=_oElements.rightArrow.cloneNode(true);}
else if(bIsEllipsis)
{oButton=_oElements.ellipsis.cloneNode(true);oButton.innerHTML="...";}
else
{if(bIsSelected)
{oButton=_oElements.selected.cloneNode(true);}
else if(bDisabled)
{oButton=_oElements.disabled.cloneNode(true);}
else
{oButton=_oElements.normal.cloneNode(true);}
oButton.innerHTML=sText;}
oButton.setAttribute("is-disabled",bDisabled?"true":"false");oButton.setAttribute("is-selected",bIsSelected?"true":"false");if(!bDisabled&&!bIsEllipsis)
{oButton.onclick=function(e)
{_fnPageChangeHandler(iPageNumber);me.selectedPageNumber=iPageNumber;me.render();vp.events.cancelEvent(e);};}
return oButton;};};vp.widget.Paginator.rollover=function widget_Paginator_rollover(oButton)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(oButton.getAttribute("rollover-class")&&!vp.core.getBoolean(oButton.getAttribute("is-selected"))&&!vp.core.getBoolean(oButton.getAttribute("is-disabled")))
{oButton.className=oButton.getAttribute("rollover-class");}};vp.widget.Paginator.rollout=function widget_Paginator_rollout(oButton)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(oButton.getAttribute("is-selected")==="true"&&oButton.getAttribute("selected-class"))
{oButton.className=oButton.getAttribute("selected-class");}
else if(oButton.getAttribute("is-disabled")==="true"&&oButton.getAttribute("disabled-class"))
{oButton.className=oButton.getAttribute("disabled-class");}
else if(oButton.getAttribute("basic-class"))
{oButton.className=oButton.getAttribute("basic-class");}};vp.widget.PaginatorTableHeader=function widget_PaginatorTableHeader(vElement,iSelectedPageNumber,iNumberOfItems,iItemsPerPage,iPagesPerScreen,aItemsPerPageOptions)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var me=this;this.element=vp.core.getElement(vElement,"vp.widget.PaginatorTableHeader()");this.selectedPageNumber=iSelectedPageNumber;this.numberOfItems=iNumberOfItems;this.itemsPerPage=iItemsPerPage;this.pagesPerScreen=iPagesPerScreen;this.itemsPerPageOptions=aItemsPerPageOptions;this.onchange=new vp.events.CustomEvent(this,"onchange");var _oElements=vp.ui.collectElementsByAttribute(this.element,"paginator-table-header-item");var getNumberOfPages=function pv_getNumberOfPages(iNumberOfItems,iItemsPerPage)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
return parseInt(Math.ceil(iNumberOfItems/iItemsPerPage));};var onPageChangeHandler=function pv_onPageChangeHandler(iPageNumber)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
me.selectedPageNumber=iPageNumber;me.onchange.fire();me.render();};var onItemPerPageSelectorChangeHandler=function pv_onItemPerPageSelectorChangeHandler(e)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
me.itemsPerPage=parseInt(vp.forms.getValue(_oElements.selector));me.selectedPageNumber=1;me.onchange.fire();me.render();};this.paginator=new vp.widget.Paginator(_oElements.paginator,getNumberOfPages(iNumberOfItems,iItemsPerPage),onPageChangeHandler);vp.events.add(_oElements.selector,"change",onItemPerPageSelectorChangeHandler);this.getFirstItemNumber=function pb_this_getFirstItemNumber()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var iRealSelectedPageNumber=Math.min(me.selectedPageNumber,parseInt(Math.ceil(me.numberOfItems/me.itemsPerPage)));return(me.itemsPerPage*iRealSelectedPageNumber)-(me.itemsPerPage-1);};this.getLastItemNumber=function pb_this_getLastItemNumber()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
return Math.min(me.getFirstItemNumber()+(me.itemsPerPage-1),me.numberOfItems);};this.render=function pb_this_render()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
me.paginator.numberOfPages=getNumberOfPages(me.numberOfItems,me.itemsPerPage);me.paginator.selectedPageNumber=me.selectedPageNumber;me.paginator.pagesPerScreen=me.pagesPerScreen;me.paginator.render();if(me.paginator.numberOfPages<=1)
{_oElements.paginator.style.visibility="hidden";}
else
{_oElements.paginator.style.visibility="visible";}
if(!_oElements.selector.isInitialized)
{while(_oElements.selector.firstChild)
{_oElements.selector.removeChild(_oElements.selector.firstChild);}
for(var i=0;i<me.itemsPerPageOptions.length;i++)
{var oOption=document.createElement("OPTION");oOption.value=me.itemsPerPageOptions[i];oOption.text=me.itemsPerPageOptions[i];_oElements.selector.options.add(oOption);}
_oElements.selector.isInitialized=true;}
_oElements.statusLabel.innerHTML=_oElements.statusLabel.getAttribute("format-string").format(me.getFirstItemNumber(),me.getLastItemNumber(),me.numberOfItems);};};


if(!window.__td){window.__MT=100;window.__ti=0;window.__td=[];window.__td.length=__MT;window.__noTrace=false;}
if(typeof vp=="undefined"){var vp={};}
vp.spot=function spot(){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}};vp.spot.SPOT_URL="/vp/spot.aspx";vp.spot.track=function spot_track(sCode){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(typeof sCode!="string"||sCode.length===0){throw new Error("vp.spot.track(): The code to track is either null or an empty string.");}
var oData={"Log":1,"vsref":sCode,"xref":sCode,"u":new Date().valueOf(),"qs":new vp.web.QueryString(window.location.search).toString()};var sQueryString=vp.web.createQueryString(oData);vp.http.imagePing(vp.spot.SPOT_URL+"?"+sQueryString);};vp.spot.trackWithQueryString=function spot_trackWithQueryString(sCode,sQueryString){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(typeof sCode!="string"||sCode.length===0){throw new Error("vp.spot.track(): The code to track is either null or an empty string.");}
var oData={"Log":1,"vsref":sCode,"xref":sCode,"u":new Date().valueOf(),"qs":sQueryString};var sQs=vp.web.createQueryString(oData);vp.http.imagePing(vp.spot.SPOT_URL+"?"+sQs);};vp.spot.trackAbsolute=function spot_trackAbsolute(sCode,bAbsolute){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(typeof sCode!="string"||sCode.length===0){throw new Error("vp.spot.trackAbsolute(): The code to track is either null or an empty string.");}
if(typeof bAbsolute!="boolean"&&typeof bAbsolute!="number"){throw new Error("vp.spot.trackAbsolute(): The second argument must be either true (for absolute) or false (for relative).");}
var oData={"abs":bAbsolute?1:0,"xref":sCode};var sQueryString=vp.web.createQueryString(oData);vp.http.imagePing(vp.spot.SPOT_URL+"?"+sQueryString);};vp.vaportest=function vaportest(){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}};vp.vaportest.VAPOR_TEST_URL="/vp/vapor_test_recorder.aspx";vp.vaportest.recordOfferAsAccepted=function vaportest_recordOfferAsAccepted(offerId){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var oData={"accepted_offer_id":offerId};var sQueryString=vp.web.createQueryString(oData);vp.http.imagePing(vp.vaportest.VAPOR_TEST_URL+"?"+sQueryString);};
