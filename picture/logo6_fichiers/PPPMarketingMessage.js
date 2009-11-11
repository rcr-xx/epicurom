                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                

if(!window.__td){window.__MT=100;window.__ti=0;window.__td=[];window.__td.length=__MT;window.__noTrace=false;}function OnloadFlash(msg,altMsg,langId)
{if(langId==-1)
{langId=null;}
if(SetBoxSize(msg,altMsg,langId))
{window.setInterval("ZoomText(\""+doubleEscape(msg)+"\",\""+doubleEscape(altMsg)+"\","+langId+")",3000);}}
function doubleEscape(s)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
s=s.replace(/\\/g,"\\\\");s=s.replace(/\"/g,"\\\"");s=s.replace(/\'/g,"\\\'");return s;}
function SetBoxSize(msg,altMsg,langId)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var unboxed=false;var i=GetNumberOfTokensInAString(msg,"<br");var j=GetNumberOfTokensInAString(msg,"<li>");var k=GetNumberOfTokensInAString(altMsg,"<br");var l=GetNumberOfTokensInAString(altMsg,"<li>");var id="tblBoxedMsg";if(langId!=null)
{id=id+'_'+langId;}
var box=document.getElementById(id);if(!box)
{box=document.getElementById("tblUnBoxedMsg");unboxed=true;}
if(box===null)
{return true;}
if(i===0&&j===0&k===0&l===0)
{var a=parseInt(msg.toString().length/70);var b=parseInt(altMsg.toString().length/70);if(a===0&&b===0)
{if(!unboxed)
{box.className="oneLine";}
else
{box.className="oneLineU";}}
else if((a==1&&b<2)||(b==1&&a<2))
{if(!unboxed)
{box.className="twoLines";}
else
{box.className="twoLinesU";}}
else if((a==2&&b<3)||(b==2&&a<3))
{if(!unboxed)
{box.className="threeLines";}
else
{box.className="threeLinesU";}}
else if(a>2||b>2)
{if(!unboxed)
{box.className="moreThanThreeLines";}
else
{box.className="moreThanThreeLinesU";}}
return true;}
else if(i<=2&&j<=2&&k<=2&&l<=2)
{if(!unboxed)
{box.className="breakSmall";}
else
{box.className="breakSmallU";}
return true;}
else if((i>2||j>2||k>2||l>2)&&i<5&&j<5&&k<5&&l<5)
{if(!unboxed)
{box.className="breakMedium";}
else
{box.className="breakMediumU";}
return true;}
else if((i>=5||j>=5||k>=5||l>=5)&&i<10&&j<10&&k<10&&l<10)
{if(!unboxed)
{box.className="breakLarge";}
else
{box.className="breakLargeU";}
return true;}
else if(i>=10||j>=10||k>=10||l>=10)
{alert("Please limit your dynamic text to less than 10 lines");return false;}}
function GetNumberOfTokensInAString(inStr,token)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var ss;ss=inStr.toString().split(token);var i=ss.length-1;return i;}
function ZoomText(defaultText,altText,langId)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var clsName;var id="tdBlink";if(langId!=null)
{id=id+'_'+langId;}
var msg=document.getElementById(id);if(msg)
{clsName=msg.className;if(clsName=="blinkMsgSmall")
{msg.className="blinkMsgLarge";msg.innerHTML=altText;}
else
{msg.className="blinkMsgSmall";msg.innerHTML=defaultText;}}
var unbmsg=document.getElementById("unboxedMsg");if(unbmsg)
{clsName=unbmsg.className;if(clsName=="blackSmallHome")
{unbmsg.className="redLargeHome";unbmsg.innerHTML=altText;}
else
{unbmsg.className="blackSmallHome";unbmsg.innerHTML=defaultText;}}}
function showStudio(pfid)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}}