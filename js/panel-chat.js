"use strict";var _templateObject;function _taggedTemplateLiteralLoose(e,t){return t||(t=e.slice(0)),e.raw=t,e;}function _inheritsLoose(t,o){t.prototype=Object.create(o.prototype),t.prototype.constructor=t,_setPrototypeOf(t,o);}function _setPrototypeOf(t,e){return _setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t;},_setPrototypeOf(t,e);}/**
 * Chat panel
 *
 * @author Guangcong Luo <guangcongluo@gmail.com>
 * @license AGPLv3
 */var


























ChatRoom=function(_PSRoom){





























function ChatRoom(options){var _options$args,_options$args2,_options$args3;var _this;
_this=_PSRoom.call(this,options)||this;_this.classType='chat';_this.users={};_this.userCount=0;_this.onlineUsers=[];_this.canConnect=true;_this.pmTarget=null;_this.challengeMenuOpen=false;_this.initialSlash=false;_this.challenging=null;_this.teamSent=null;_this.challenged=null;_this.battle=null;_this.log=null;_this.tour=null;_this.lastMessage=null;_this.lastMessageTime=null;_this.joinLeave=null;_this.userActivity=[];_this.timeOffset=0;_this.







































































































































































































































handleHighlight=function(args){
var name;
var message;
var serverTime=0;
if(args[0]==='c:'){
serverTime=parseInt(args[1]);
name=args[2];
message=args[3];
}else{
name=args[1];
message=args[2];
}
if(toID(name)===PS.user.userid)return false;
if(message.startsWith("/raw ")||message.startsWith("/uhtml")||message.startsWith("/uhtmlchange")){
return false;
}

var lastMessageDates=Dex.prefs('logtimes')||(PS.prefs.set('logtimes',{}),Dex.prefs('logtimes'));
if(!lastMessageDates[PS.server.id])lastMessageDates[PS.server.id]={};
var lastMessageDate=lastMessageDates[PS.server.id][_this.id]||0;

var time=serverTime-(_this.timeOffset||0);
if(PS.isVisiblePanel(_this)){
_this.lastMessageTime=null;
lastMessageDates[PS.server.id][_this.id]=time;
PS.prefs.set('logtimes',lastMessageDates);
}else{

var lastMessageTime=_this.lastMessageTime||0;
if(lastMessageTime<time)_this.lastMessageTime=time;
}
if(ChatRoom.getHighlight(message,_this.id)){
var mayNotify=time>lastMessageDate;
if(mayNotify)_this.notify({
title:"Mentioned by "+name+" in "+_this.id,
body:"\""+message+"\"",
id:'highlight'
});
return true;
}
return false;
};_this.
clientCommands=_this.parseClientCommands({
'chall,challenge':function(target){var _this2=this;
if(target){
var _target$split=target.split(','),targetUser=_target$split[0],format=_target$split[1];
if(this.pmTarget&&(format===undefined||targetUser.includes('@@@'))){
format=target;
targetUser=this.pmTarget;
}
format=BattleLog.formatId(format||'');
PS.mainmenu.makeQuery('userdetails',targetUser).then(function(data){
if(data.rooms===false)return _this2.errorReply('This player does not exist or is not online.');
PS.join("challenge-"+toID(targetUser),{args:{format:format}});
});
return;
}
if(this.challengeMenuOpen){
this.cancelChallenge();
return;
}
this.openChallenge();
},
'cchall,cancelchallenge':function(target){
this.cancelChallenge();
},
'reject':function(target){
this.challenged=null;
this.teamSent=null;
this.update(null);
this.sendDirect("/reject "+target);
},
'clear':function(){var _this$log;
(_this$log=this.log)==null||_this$log.reset();
this.update(null);
},
'togglemessages':function(target){
if(this.pmTarget||
this.type!=='chat')return this.errorReply('This command can only be used in proper chat rooms.');
if(this.log){
var userid=toID(target);
var classStart='revealed chat chatmessage-'+userid;
var nodes=[];
var isHidden=true;for(var _i2=0,_this$log$innerElem$c2=
this.log.innerElem.childNodes;_i2<_this$log$innerElem$c2.length;_i2++){var node=_this$log$innerElem$c2[_i2];
if(node.className&&(node.className+' ').startsWith(classStart)){
nodes.push(node);
}
}
if(this.log.preemptElem){for(var _i4=0,_this$log$preemptElem2=
this.log.preemptElem.childNodes;_i4<_this$log$preemptElem2.length;_i4++){var _node=_this$log$preemptElem2[_i4];
if(_node.className&&(_node.className+' ').startsWith(classStart)){
nodes.push(_node);
}
}
}
isHidden=nodes[0].style.display==='none';
nodes.every(function(node){
node.style.display=isHidden?'':'none';
return true;
});
isHidden=!isHidden;
var toggleButtons=this.log.innerElem.querySelectorAll("button[name=\"toggleMessages\"][value=\""+userid+"\"]");for(var _i6=0;_i6<
toggleButtons.length;_i6++){var button=toggleButtons[_i6];
button.innerHTML=isHidden?"<small>("+
nodes.length+" line"+(nodes.length>1?'s':'')+" from "+userid+" hidden)</small>":"<small>(Hide "+
nodes.length+" line"+(nodes.length>1?'s':'')+" from "+userid+")</small>";
}
}
},
'rank,ranking,rating,ladder':function(target){var _this3=this;
var arg=target;
if(!arg){
arg=PS.user.userid;
}
if(this.battle&&!arg.includes(',')){
arg+=", "+this.id.split('-')[1];
}

var targets=arg.split(',');
var formatTargeting=false;
var formats={};
var gens={};
for(var i=1,len=targets.length;i<len;i++){
targets[i]=$.trim(targets[i]);
if(targets[i].length===4&&targets[i].startsWith('gen')){
gens[targets[i]]=1;
}else{
formats[toID(targets[i])]=1;
}
formatTargeting=true;
}

PSLoginServer.query("ladderget",{
user:targets[0]
}).then(function(data){
if(!data||!Array.isArray(data))return _this3.add("|error|Error: corrupted ranking data");
var buffer="<div class=\"ladder\"><table><tr><td colspan=\"9\">User: <strong>"+toID(targets[0])+"</strong></td></tr>";
if(!data.length){
buffer+='<tr><td colspan="9"><em>This user has not played any ladder games yet.</em></td></tr>';
buffer+='</table></div>';
return _this3.add("|html|"+buffer);
}
buffer+='<tr><th>Format</th><th><abbr title="Elo rating">Elo</abbr></th><th><abbr title="user\'s percentage chance of winning a random battle (aka GLIXARE)">GXE</abbr></th><th><abbr title="Glicko-1 rating: rating &#177; deviation">Glicko-1</abbr></th><th>COIL</th><th>W</th><th>L</th><th>Total</th>';
var suspect=false;for(var _i8=0;_i8<
data.length;_i8++){var item=data[_i8];
if('suspect'in item)suspect=true;
}
if(suspect)buffer+='<th>Suspect reqs possible?</th>';
buffer+='</tr>';
var hiddenFormats=[];for(var _i10=0;_i10<
data.length;_i10++){var row=data[_i10];
if(!row)return _this3.add("|error|Error: corrupted ranking data");
var formatId=toID(row.formatid);
var matchesTarget=
formats[formatId]||
gens[formatId.slice(0,4)]||
gens['gen6']&&!formatId.startsWith('gen');

if(matchesTarget||!formatTargeting&&row.elo>=1001&&row.w+row.l+row.t>0){
buffer+='<tr>';
}else{
buffer+='<tr class="hidden">';
hiddenFormats.push(window.BattleLog.escapeFormat(formatId,true));
}for(var _i12=0,_ref2=


[row.elo,row.rpr,row.rprd,row.gxe,row.w,row.l,row.t];_i12<_ref2.length;_i12++){var value=_ref2[_i12];
if(typeof value!=='number'&&typeof value!=='string'){
return _this3.add("|error|Error: corrupted ranking data");
}
}

buffer+="<td> "+BattleLog.escapeHTML(BattleLog.formatName(formatId,true))+" </td><td><strong>"+Math.round(row.elo)+"</strong></td>";
if(row.rprd>100){

buffer+="<td>&ndash;</td>";
buffer+="<td><span style=\"color:#888\"><em>"+Math.round(row.rpr)+" <small> &#177; "+Math.round(row.rprd)+" </small></em> <small>(provisional)</small></span></td>";
}else{
buffer+="<td>"+Math.trunc(row.gxe)+"<small>."+row.gxe.toFixed(1).slice(-1)+"%</small></td>";
buffer+="<td><em>"+Math.round(row.rpr)+" <small> &#177; "+Math.round(row.rprd)+"</small></em></td>";
}
var N=parseInt(row.w,10)+parseInt(row.l,10)+parseInt(row.t,10);
var COIL_B=undefined;




if(COIL_B){
buffer+="<td>"+Math.round(40.0*parseFloat(row.gxe)*Math.pow(2.0,-COIL_B/N))+"</td>";
}else{
buffer+='<td>&mdash;</td>';
}
buffer+="<td> "+row.w+" </td><td> "+row.l+" </td><td> "+N+" </td>";
if(suspect){
if(typeof row.suspect==='undefined'){
buffer+='<td>&mdash;</td>';
}else{
buffer+='<td>';
buffer+=row.suspect?"Yes":"No";
buffer+='</td>';
}
}
buffer+='</tr>';
}
if(hiddenFormats.length){
if(hiddenFormats.length===data.length){
if(formatTargeting){
var formatsText=Object.keys(gens).concat(Object.keys(formats)).join(', ');
buffer+="<tr class=\"no-matches\"><td colspan=\"8\">"+
BattleLog.html(_templateObject||(_templateObject=_taggedTemplateLiteralLoose(["<em>This user has not played any ladder games that match ",".</em></td></tr>"])),formatsText);
}else{
buffer+="<tr class=\"no-matches\"><td colspan=\"8\"><em>This user has no notable ladder activity.</em></td></tr>";
}
}
buffer+="<tr><td colspan=\"8\"><button class=\"button\" name=\"showOtherFormats\">"+("Show "+
hiddenFormats.length+" hidden format"+(hiddenFormats.length===1?'':'s')+"</button></td></tr>");
}
var userid=toID(targets[0]);
var registered=PS.user.registered;
if(registered&&PS.user.userid===userid){
buffer+="<tr><td colspan=\"8\" style=\"text-align:right\"><a href=\"//"+Config.routes.users+"/"+userid+"\">Reset W/L</a></tr></td>";
}
buffer+='</table></div>';
_this3.add("|html|"+buffer);
});
},



'play':function(){
if(!this.battle)return this.add('|error|You are not in a battle');
if(this.battle.atQueueEnd){
if(this.battle.ended)this.battle.isReplay=true;
this.battle.reset();
}
this.battle.play();
this.update(null);
},
'pause':function(){
if(!this.battle)return this.add('|error|You are not in a battle');
this.battle.pause();
this.update(null);
},
'ffto,fastfowardto':function(target,cmd,parentElem){var _this4=this;
if(!this.battle)return this.add('|error|You are not in a battle');
if(!target){
PS.prompt("Turn number?",{
defaultValue:""+this.battle.turn,
type:'numeric',
okButton:'Go',
parentElem:parentElem
}).then(function(turnNum){
if(turnNum!=null&&turnNum.trim())_this4.send("/ffto "+turnNum,parentElem);
});
return;
}

var turnNum=Number(target);
if(target.startsWith('+')||turnNum<0){var _this$battle$seeking;
turnNum+=(_this$battle$seeking=this.battle.seeking)!=null?_this$battle$seeking:this.battle.turn;
if(turnNum<0)turnNum=0;
}else if(target==='end'){
turnNum=Infinity;
}
if(isNaN(turnNum)){
this.errorReply("Invalid turn number: "+target);
return;
}
if(this.battle.hardcoreMode){
this.errorReply("Turn navigation is disabled in hardcore mode.");
return;
}
this.battle.seekTurn(turnNum);
this.update(null);
},
'switchsides':function(){
if(!this.battle)return this.add('|error|You are not in a battle');
this.battle.switchViewpoint();
},
'cancel,undo':function(){
if(!this.battle)return this.send('/cancelchallenge');

var room=this;
if(!room.choices||!room.request){
this.receiveLine(["error","/choose - You are not a player in this battle"]);
return;
}
if(room.choices.isDone()||room.choices.isEmpty()){

this.sendDirect('/undo');
}
room.choices=new BattleChoiceBuilder(room.request);
this.update(null);
},
'move,switch,team,pass,shift,choose':function(target,cmd){
if(!this.battle)return this.add('|error|You are not in a battle');
var room=this;
if(!room.choices){
this.receiveLine(["error","/choose - You are not a player in this battle"]);
return;
}
if(cmd!=='choose')target=cmd+" "+target;
if(target==='choose auto'||target==='choose default'){
this.sendDirect('/choose default');
return;
}
var possibleError=room.choices.addChoice(target);
if(possibleError){
this.errorReply(possibleError);
return;
}
if(room.choices.isDone())this.sendDirect("/choose "+room.choices.toString());
this.update(null);
}
});if((_options$args=options.args)!=null&&_options$args.pmTarget)_this.pmTarget=options.args.pmTarget;if((_options$args2=options.args)!=null&&_options$args2.challengeMenuOpen)_this.challengeMenuOpen=true;if((_options$args3=options.args)!=null&&_options$args3.initialSlash)_this.initialSlash=true;_this.updateTarget(_this.pmTarget);_this.connect();return _this;}_inheritsLoose(ChatRoom,_PSRoom);var _proto=ChatRoom.prototype;_proto.connect=function connect(){if(!this.connected||this.connected==='autoreconnect'){if(this.pmTarget===null){PS.send("/join "+this.id);this.connected=true;}else{this.connected='client-only';}this.connectWhenLoggedIn=false;}};_proto.receiveLine=function receiveLine(args){switch(args[0]){case'users':var usernames=args[1].split(',');var count=parseInt(usernames.shift(),10);this.setUsers(count,usernames);return;case'join':case'j':case'J':this.addUser(args[1]);this.handleJoinLeave("join",args[1],args[0]==="J");return true;case'leave':case'l':case'L':this.removeUser(args[1]);this.handleJoinLeave("leave",args[1],args[0]==="L");return true;case'name':case'n':case'N':this.renameUser(args[1],args[2]);break;case'tournament':case'tournaments':this.tour||(this.tour=new ChatTournament(this));this.tour.receiveLine(args);return;case'noinit':if(this.battle&&args[1]==='joinfailed'){this.receiveLine(['bigerror',args[2]]);this.receiveLine(['html',"<div class=\"broadcast-red pad\"><p class=\"buttonbar\"><button class=\"button\" data-cmd=\"/close\"><strong>Close</strong></button></p></div>"]);}else if(this.battle){this.loadReplay();}else{var message=args[2]?BattleLog.escapeHTML(args[2]):"Chatroom \""+BattleLog.escapeHTML(this.title)+"\" not found";this.receiveLine(['html',"<div class=\"broadcast-red pad\"><h3>"+message+"</h3><p class=\"buttonbar\"><button class=\"button\" data-cmd=\"/close\"><strong>Close</strong></button></p></div>"]);}return;case'expire':this.connected='expired';this.receiveLine(['',"This room has expired (you can't chat in it anymore)"]);return;case'chat':case'c':if((args[2]+" ").startsWith('/challenge ')){this.updateChallenge(args[1],args[2].slice(11));return;}else if(args[2].startsWith('/warn ')){var reason=args[2].replace('/warn ','');PS.join("rules-warn",{args:{type:'warn',message:(reason==null?void 0:reason.trim())||undefined},parentElem:null});return;}case'c:':if(args[0]==='c:')PS.lastMessageTime=args[1];this.lastMessage=args;this.joinLeave=null;var name=args[args[0]==='c:'?2:1];this.markUserActive(name);if(this.tour)this.tour.joinLeave=null;if(this.id.startsWith("dm-")){var _this$log2,_PS$prefs$ignore;var fromUser=args[args[0]==='c:'?2:1];if(toID(fromUser)===PS.user.userid)break;var _message=args[args[0]==='c:'?3:2];var noNotify=(_this$log2=this.log)==null||(_this$log2=_this$log2.parseChatMessage(_message,name,args[1]))==null?void 0:_this$log2[2];var isIgnored=(_PS$prefs$ignore=PS.prefs.ignore)==null?void 0:_PS$prefs$ignore[toID(fromUser)];if(!noNotify&&!isIgnored){var textContent=_message;if(/^\/(log|raw|html|uhtml|uhtmlchange) /.test(_message)){textContent=_message.split(' ').slice(1).join(' ').replace(/<[^>]*?>/g,'');}this.notify({title:""+this.title,body:textContent});}else if(noNotify==='subtle'){this.subtleNotify();}}else{this.subtleNotify();}break;case':':this.timeOffset=Math.trunc(Date.now()/1000)-(parseInt(args[1],10)||0);break;}_PSRoom.prototype.receiveLine.call(this,args);};_proto.handleReconnect=function handleReconnect(msg){if(this.battle){this.battle.reset();this.battle.stepQueue=[];return false;}else{var _this$lastMessage;var lines=msg.split('\n');var cutOffStart=0;var cutOffEnd=lines.length;var cutOffTime=parseInt(PS.lastMessageTime);var cutOffExactLine=this.lastMessage?'|'+((_this$lastMessage=this.lastMessage)==null?void 0:_this$lastMessage.join('|')):'';var reconnectMessage='|raw|<div class="infobox">You reconnected.</div>';for(var i=0;i<lines.length;i++){if(lines[i].startsWith('|users|')){this.add(lines[i]);}if(lines[i]===cutOffExactLine){cutOffStart=i+1;}else if(lines[i].startsWith("|c:|")){var time=parseInt(lines[i].split('|')[2]||'');if(time<cutOffTime)cutOffStart=i;}if(lines[i].startsWith('|raw|<div class="infobox"> You joined ')){var _PS$prefs$timestamps;var timestamp=BattleLog.renderTimestamp(Date.now()/1000,(_PS$prefs$timestamps=PS.prefs.timestamps)==null?void 0:_PS$prefs$timestamps.chatrooms);reconnectMessage="|raw|<div class=\"infobox\">"+timestamp+"You reconnected to "+lines[i].slice(38);cutOffEnd=i;if(!lines[i-1])cutOffEnd=i-1;}}console.log("Reconnection log splice: (cutoff: "+cutOffTime+")");console.log([].concat(lines.slice(0,cutOffStart),['===================='],lines.slice(cutOffStart,cutOffEnd),['===================='],lines.slice(cutOffEnd)).join('\n'));lines=lines.slice(cutOffStart,cutOffEnd);if(lines.length){var _PS$prefs$timestamps2;var _timestamp=BattleLog.renderTimestamp(cutOffTime,(_PS$prefs$timestamps2=PS.prefs.timestamps)==null?void 0:_PS$prefs$timestamps2.chatrooms);this.receiveLine(["raw","<div class=\"infobox\">"+_timestamp+"You disconnected.</div>"]);for(var _i14=0,_lines2=lines;_i14<_lines2.length;_i14++){var line=_lines2[_i14];this.receiveLine(BattleTextParser.parseLine(line));}this.receiveLine(BattleTextParser.parseLine(reconnectMessage));}this.update(null);return true;}};_proto.updateTarget=function updateTarget(name){var selfWithGroup=""+(PS.user.group||' ')+PS.user.name;if(this.id==='dm-'){this.pmTarget=selfWithGroup;this.setUsers(1,[selfWithGroup]);this.title="Console";}else if(this.id.startsWith('dm-')){var id=this.id.slice(3);if(toID(name)!==id)name=null;name||(name=this.pmTarget||id);if(/[A-Za-z0-9]/.test(name.charAt(0)))name=" "+name;var nameWithGroup=name;name=name.slice(1);this.pmTarget=name;if(!PS.user.userid){this.setUsers(1,[nameWithGroup]);}else{this.setUsers(2,[nameWithGroup,selfWithGroup]);}this.title="[DM] "+nameWithGroup.trim();}};ChatRoom.getHighlight=function getHighlight(message,roomid){var _this$highlightRegExp,_this$highlightRegExp2;var highlights=PS.prefs.highlights||{};if(Array.isArray(highlights)){highlights={global:highlights};PS.prefs.set('highlights',highlights);}if(!PS.prefs.noselfhighlight&&PS.user.nameRegExp){var _PS$user$nameRegExp;if((_PS$user$nameRegExp=PS.user.nameRegExp)!=null&&_PS$user$nameRegExp.test(message))return true;}if(!this.highlightRegExp){try{this.updateHighlightRegExp(highlights);}catch(_unused){return false;}}var id=PS.server.id+'#'+roomid;var globalHighlightsRegExp=(_this$highlightRegExp=this.highlightRegExp)==null?void 0:_this$highlightRegExp['global'];var roomHighlightsRegExp=(_this$highlightRegExp2=this.highlightRegExp)==null?void 0:_this$highlightRegExp2[id];return(globalHighlightsRegExp==null?void 0:globalHighlightsRegExp.test(message))||(roomHighlightsRegExp==null?void 0:roomHighlightsRegExp.test(message));};ChatRoom.updateHighlightRegExp=function updateHighlightRegExp(highlights){this.highlightRegExp={};for(var i in highlights){if(!highlights[i].length){this.highlightRegExp[i]=null;continue;}this.highlightRegExp[i]=new RegExp('(?:\\b|(?!\\w))(?:'+highlights[i].join('|')+')(?:\\b|(?!\\w))','i');}};_proto.
openChallenge=function openChallenge(){
if(!this.pmTarget){
this.add("|error|Can only be used in a PM.");
return;
}
this.challengeMenuOpen=true;
this.update(null);
};_proto.
cancelChallenge=function cancelChallenge(){
if(!this.pmTarget){
this.add("|error|Can only be used in a PM.");
return;
}
if(this.teamSent&&this.challengeMenuOpen||this.challenging){
this.sendDirect('/cancelchallenge');
this.challenging=null;
this.challengeMenuOpen=true;
}else{
this.challengeMenuOpen=false;
}
this.challenging=null;
this.teamSent=null;
this.update(null);
};_proto.
parseChallenge=function parseChallenge(challengeString){var _splitChallenge$;
if(!challengeString)return null;

var splitChallenge=challengeString.split('|');

var challenge={
formatName:splitChallenge[0],
teamFormat:(_splitChallenge$=splitChallenge[1])!=null?_splitChallenge$:splitChallenge[0],
message:splitChallenge[2],
acceptButtonLabel:splitChallenge[3],
rejectButtonLabel:splitChallenge[4]
};
if(!challenge.formatName&&!challenge.message){
return null;
}
return challenge;
};_proto.
updateChallenge=function updateChallenge(name,challengeString){var _this$args;
var challenge=this.parseChallenge(challengeString);
var userid=toID(name);
if((_this$args=this.args)!=null&&_this$args.format)this.args.format=null;
this.teamSent=null;



if(!challenge){



this.challenged=null;
this.challenging=null;
}else if(userid===PS.user.userid){

this.challenging=challenge;
this.challengeMenuOpen=false;
PS.mainmenu.lastChallenged=Date.now();
}else{

this.challenged=challenge;
this.notify({
title:"Challenge from "+name,
body:"Format: "+BattleLog.formatName(challenge.formatName),
id:'challenge'
});
}
this.update(null);
};_proto.
markUserActive=function markUserActive(name){
var userid=toID(name);
var idx=this.userActivity.indexOf(userid);
this.users[userid]=name;
if(idx!==-1){
this.userActivity.splice(idx,1);
}
this.userActivity.push(userid);
if(this.userActivity.length>100){

this.userActivity.splice(0,20);
}
};_proto.
sendDirect=function sendDirect(line){var _this5=this;
if(this.pmTarget){
line=line.split('\n').filter(Boolean).map(function(row){return"/pm "+_this5.pmTarget+", "+row;}).join('\n');
PS.send(line);
return;
}
_PSRoom.prototype.sendDirect.call(this,line);
};_proto.
setUsers=function setUsers(count,usernames){
this.userCount=count;
this.onlineUsers=[];for(var _i16=0;_i16<
usernames.length;_i16++){var username=usernames[_i16];
var userid=toID(username);
this.users[userid]=username;
this.onlineUsers.push([userid,username]);
}
this.sortOnlineUsers();
this.update(null);
};_proto.
sortOnlineUsers=function sortOnlineUsers(){
PSUtils.sortBy(this.onlineUsers,function(_ref3){var id=_ref3[0],name=_ref3[1];return(
[PS.server.getGroup(name.charAt(0)).order,!name.endsWith('@!'),id]);}
);
};_proto.
addUser=function addUser(username){
if(!username)return;

var userid=toID(username);
this.users[userid]=username;
var index=this.onlineUsers.findIndex(function(_ref4){var curUserid=_ref4[0];return curUserid===userid;});
if(index>=0){
this.onlineUsers[index]=[userid,username];
}else{
this.userCount++;
this.onlineUsers.push([userid,username]);
this.sortOnlineUsers();
}
this.update(null);
};_proto.
removeUser=function removeUser(username,noUpdate){
if(!username)return;

var userid=toID(username);
var index=this.onlineUsers.findIndex(function(_ref5){var curUserid=_ref5[0];return curUserid===userid;});
if(index>=0){
this.userCount--;
this.onlineUsers.splice(index,1);
if(!noUpdate)this.update(null);
}
};_proto.
renameUser=function renameUser(username,oldUsername){
this.removeUser(oldUsername,true);
this.addUser(username);
this.update(null);
};_proto.

handleJoinLeave=function handleJoinLeave(action,name,silent){var _PS$prefs$showjoins,_ref6,_showjoins$this$id;
var showjoins=(_PS$prefs$showjoins=PS.prefs.showjoins)==null?void 0:_PS$prefs$showjoins[PS.server.id];
if(!((_ref6=(_showjoins$this$id=showjoins==null?void 0:showjoins[this.id])!=null?_showjoins$this$id:showjoins==null?void 0:showjoins['global'])!=null?_ref6:!silent))return;

this.joinLeave||(this.joinLeave={
join:[],
leave:[],
messageId:"joinleave-"+Date.now()
});
var user=BattleTextParser.parseNameParts(name);
var formattedName=user.group+user.name;
if(action==='join'&&this.joinLeave['leave'].includes(formattedName)){
this.joinLeave['leave'].splice(this.joinLeave['leave'].indexOf(formattedName),1);
}else if(action==='leave'&&this.joinLeave['join'].includes(formattedName)){
this.joinLeave['join'].splice(this.joinLeave['join'].indexOf(formattedName),1);
}else{
this.joinLeave[action].push(formattedName);
}

var message=this.formatJoinLeave(this.joinLeave['join'],'joined');
if(this.joinLeave['join'].length&&this.joinLeave['leave'].length)message+='; ';
message+=this.formatJoinLeave(this.joinLeave['leave'],'left');

this.add("|uhtml|"+this.joinLeave.messageId+"|<small class=\"gray\">"+message+"</small>");
};_proto.

formatJoinLeave=function formatJoinLeave(preList,action){
if(!preList.length)return'';

var message='';
var list=[];
var named={};for(var _i18=0;_i18<
preList.length;_i18++){var item=preList[_i18];
if(!named[item])list.push(item);
named[item]=true;
}
for(var j=0;j<list.length;j++){
if(j>=5){
message+=", and "+(list.length-5)+" others";
break;
}
if(j>0){
if(j===1&&list.length===2){
message+=' and ';
}else if(j===list.length-1){
message+=', and ';
}else{
message+=', ';
}
}
message+=BattleLog.escapeHTML(list[j]);
}
return message+" "+action;
};_proto.

destroy=function destroy(){
if(this.battle){

this.battle.destroy();
}else{var _this$log3;
(_this$log3=this.log)==null||_this$log3.destroy();
}
_PSRoom.prototype.destroy.call(this);
};return ChatRoom;}(PSRoom);ChatRoom.highlightRegExp=null;var


CopyableURLBox=function(_preact$Component){function CopyableURLBox(){var _this6;for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}_this6=_preact$Component.call.apply(_preact$Component,[this].concat(args))||this;_this6.
copy=function(){
var input=_this6.base.children[0];
input.select();
document.execCommand('copy');
};return _this6;}_inheritsLoose(CopyableURLBox,_preact$Component);var _proto2=CopyableURLBox.prototype;_proto2.
render=function render(){
return preact.h("div",null,
preact.h("input",{
type:"text","class":"textbox",readOnly:true,size:45,value:this.props.url,
style:"field-sizing:content"}
)," ",
preact.h("button",{"class":"button",onClick:this.copy},"Copy")," ",
preact.h("a",{href:this.props.url,target:"_blank","class":"no-panel-intercept"},
preact.h("button",{"class":"button"},"Visit")
)
);
};return CopyableURLBox;}(preact.Component);var















ChatTextEntry=function(_preact$Component2){function ChatTextEntry(){var _this7;for(var _len2=arguments.length,args=new Array(_len2),_key2=0;_key2<_len2;_key2++){args[_key2]=arguments[_key2];}_this7=_preact$Component2.call.apply(_preact$Component2,[this].concat(args))||this;_this7.



subscription=null;_this7.
textbox=null;_this7.
miniedit=null;_this7.
history=[];_this7.
historyIndex=0;_this7.
tabComplete=






null;_this7.

























update=function(){
if(!_this7.miniedit){
var textbox=_this7.textbox;
textbox.style.height="12px";
var newHeight=Math.min(Math.max(textbox.scrollHeight-2,16),600);
textbox.style.height=newHeight+"px";
}
};_this7.
focusIfNoSelection=function(e){
if(e.target.tagName==='TEXTAREA')return;
var selection=window.getSelection();
if(selection.type==='Range')return;
var elem=_this7.base.children[0].children[1];
elem.focus();
};_this7.







onKeyDown=function(e){
if(_this7.handleKey(e)||_this7.props.onKey(e)){
e.preventDefault();
e.stopImmediatePropagation();
}
};return _this7;}_inheritsLoose(ChatTextEntry,_preact$Component2);var _proto3=ChatTextEntry.prototype;_proto3.componentDidMount=function componentDidMount(){var _this8=this,_this$props$room$args;this.subscription=PS.user.subscribe(function(){_this8.forceUpdate();});var textbox=this.base.children[0].children[1];if(textbox.tagName==='TEXTAREA')this.textbox=textbox;this.miniedit=new MiniEdit(textbox,{setContent:function(text){var _textbox$classList;textbox.innerHTML=formatText(text,false,false,true)+'\n';(_textbox$classList=textbox.classList)==null||_textbox$classList.toggle('textbox-empty',!text);},onKeyDown:this.onKeyDown});if((_this$props$room$args=this.props.room.args)!=null&&_this$props$room$args.initialSlash){this.props.room.args.initialSlash=false;this.setValue('/',1);}if(this.base)this.update();};_proto3.componentWillUnmount=function componentWillUnmount(){if(this.subscription){this.subscription.unsubscribe();this.subscription=null;}};_proto3.submit=function submit(){var _this$miniedit;this.props.onMessage(this.getValue(),((_this$miniedit=this.miniedit)==null?void 0:_this$miniedit.element)||this.textbox);this.historyPush(this.getValue());this.setValue('',0);this.update();return true;};_proto3.


getValue=function getValue(){
return this.miniedit?this.miniedit.getValue():this.textbox.value;
};_proto3.
setValue=function setValue(value,start){var end=arguments.length>2&&arguments[2]!==undefined?arguments[2]:start;
if(this.miniedit){
this.miniedit.setValue(value,{start:start,end:end});
}else{var _this$textbox$setSele,_this$textbox;
this.textbox.value=value;
(_this$textbox$setSele=(_this$textbox=this.textbox).setSelectionRange)==null||_this$textbox$setSele.call(_this$textbox,start,end);
}
};_proto3.
getSelection=function getSelection(){
var value=this.getValue();
var _ref7=this.miniedit?
this.miniedit.getSelection()||{start:value.length,end:value.length}:
{start:this.textbox.selectionStart,end:this.textbox.selectionEnd},start=_ref7.start,end=_ref7.end;
return{value:value,start:start,end:end};
};_proto3.
setSelection=function setSelection(start,end){
if(this.miniedit){
this.miniedit.setSelection({start:start,end:end});
}else{var _this$textbox$setSele2,_this$textbox2;
(_this$textbox$setSele2=(_this$textbox2=this.textbox).setSelectionRange)==null||_this$textbox$setSele2.call(_this$textbox2,start,end);
}
};_proto3.
replaceSelection=function replaceSelection(text){
if(this.miniedit){
this.miniedit.replaceSelection(text);
}else{
var _this$getSelection=this.getSelection(),value=_this$getSelection.value,start=_this$getSelection.start,end=_this$getSelection.end;
var newSelection=start+text.length;
this.setValue(value.slice(0,start)+text+value.slice(end),newSelection);
}
};_proto3.

historyUp=function historyUp(ifSelectionCorrect){
if(ifSelectionCorrect){
var _this$getSelection2=this.getSelection(),value=_this$getSelection2.value,start=_this$getSelection2.start,end=_this$getSelection2.end;
if(start!==end)return false;
if(end!==0){
if(end<value.length)return false;
}
}

if(this.historyIndex===0)return false;
var line=this.getValue();
if(line!=='')this.history[this.historyIndex]=line;
var newValue=this.history[--this.historyIndex];
this.setValue(newValue,newValue.length);
return true;
};_proto3.
historyDown=function historyDown(ifSelectionCorrect){
if(ifSelectionCorrect){
var _this$getSelection3=this.getSelection(),value=_this$getSelection3.value,start=_this$getSelection3.start,end=_this$getSelection3.end;
if(start!==end)return false;
if(end<value.length)return false;
}

var line=this.getValue();
if(line!=='')this.history[this.historyIndex]=line;
if(this.historyIndex===this.history.length){
if(!line)return false;
this.setValue('',0);
}else if(++this.historyIndex===this.history.length){
this.setValue('',0);
}else{
var newValue=this.history[this.historyIndex];
this.setValue(newValue,newValue.length);
}
return true;
};_proto3.
historyPush=function historyPush(line){
var duplicateIndex=this.history.lastIndexOf(line);
if(duplicateIndex>=0)this.history.splice(duplicateIndex,1);
if(this.history.length>100)this.history.splice(0,20);
this.history.push(line);
this.historyIndex=this.history.length;
};_proto3.
handleKey=function handleKey(ev){
var cmdKey=(ev.metaKey?1:0)+(ev.ctrlKey?1:0)===1&&!ev.altKey&&!ev.shiftKey;
var altKey=ev.altKey;

if(ev.keyCode===13&&!ev.shiftKey){
return this.submit();
}else if(ev.keyCode===13){
this.replaceSelection('\n');
return true;
}else if(ev.keyCode===73&&cmdKey){
return this.toggleFormatChar('_');
}else if(ev.keyCode===66&&cmdKey){
return this.toggleFormatChar('*');
}else if(ev.keyCode===192&&cmdKey){
return this.toggleFormatChar('`');
}else if(ev.keyCode===9&&!ev.ctrlKey){
var reverse=!!ev.shiftKey;
return this.handleTabComplete(reverse);
}else if(ev.keyCode===38&&!ev.shiftKey&&!ev.altKey){
return this.historyUp(true);
}else if(ev.keyCode===40&&!ev.shiftKey&&!ev.altKey){
return this.historyDown(true);
}else if(ev.keyCode===27){
if(this.undoTabComplete()){
return true;
}
if(PS.room!==PS.panel){
PS.leave(PS.room.id);
return true;
}




}else if(ev.shiftKey&&ev.keyCode===37&&!altKey){
if(PS.prefs.onepanel==='vertical'||this.getValue().length>0)return;
var curLoc=PS.room.location;
var newLoc=curLoc;
var newIndex=null;
switch(curLoc){
case'right':{
newIndex=PS.rightRoomList.indexOf(PS.room.id)-1;
if(newIndex<0){
newLoc='left';
newIndex=PS.leftRoomList.length+1;
}
break;
}
case'left':{
newIndex=PS.leftRoomList.indexOf(PS.room.id)-1;

if(newIndex<=0){
newLoc='mini-window';
newIndex=PS.miniRoomList.length+1;
}
break;
}
case'mini-window':{
newIndex=PS.miniRoomList.indexOf(PS.room.id)-1;
if(newIndex<0){
newLoc='right';
newIndex=PS.rightRoomList.length+1;
}
break;
}
}
if(newIndex!==null){
PS.moveRoom(PS.room,newLoc,false,newIndex);
PS.update();
}
return true;
}else if(ev.shiftKey&&ev.keyCode===39&&!altKey){
if(PS.prefs.onepanel==='vertical'||this.getValue().length>0)return;
var _curLoc=PS.room.location;
var _newLoc=_curLoc;
var _newIndex=null;
switch(_curLoc){
case'right':{
_newIndex=PS.rightRoomList.indexOf(PS.room.id)+1;
if(_newIndex>=PS.rightRoomList.length-1){

_newLoc='mini-window';
_newIndex=1;
}
break;
}
case'left':{
_newIndex=PS.leftRoomList.indexOf(PS.room.id)+1;
if(_newIndex>=PS.leftRoomList.length){
_newLoc='right';
_newIndex=0;
}
break;
}
case'mini-window':{
_newIndex=PS.miniRoomList.indexOf(PS.room.id)+1;
if(_newIndex>=PS.miniRoomList.length){
_newLoc='left';

_newIndex=1;
}
break;
}
}
if(_newIndex!==null){
PS.moveRoom(PS.room,_newLoc,false,_newIndex);
PS.update();
}
return true;
}else if(ev.shiftKey&&ev.keyCode===38){
if(PS.prefs.onepanel!=='vertical'||this.getValue().length>0)return;
var _newIndex2=PS.rightRoomList.indexOf(PS.room.id)-1;
if(_newIndex2<0)_newIndex2=PS.rightRoomList.length-1;
PS.moveRoom(PS.room,'right',false,_newIndex2);
PS.update();
}else if(ev.shiftKey&&ev.keyCode===40){
if(PS.prefs.onepanel!=='vertical'||this.getValue().length>0)return;
var _newIndex3=PS.rightRoomList.indexOf(PS.room.id)+1;
if(_newIndex3>=PS.rightRoomList.length-1)_newIndex3=0;
PS.moveRoom(PS.room,'right',false,_newIndex3);
PS.update();
}
return false;
};_proto3.

handleTabComplete=function handleTabComplete(reverse){var _this9=this;

var _this$getSelection4=this.getSelection(),value=_this$getSelection4.value,start=_this$getSelection4.start,end=_this$getSelection4.end;
if(start!==end||end===0)return false;

var users=this.props.room.users;
var prefix=value.slice(0,end);
if(this.tabComplete&&prefix===this.tabComplete.cursor){

if(reverse){
this.tabComplete.candidateIndex--;
if(this.tabComplete.candidateIndex<0){
this.tabComplete.candidateIndex=this.tabComplete.candidates.length-1;
}
}else{
this.tabComplete.candidateIndex++;
if(this.tabComplete.candidateIndex>=this.tabComplete.candidates.length){
this.tabComplete.candidateIndex=0;
}
}
}else if(!value||reverse){

return false;
}else{



prefix=prefix.trim();


var match1=/^([\s\S!/]*?)([A-Za-z0-9][^, \n]*)$/.exec(prefix);

var match2=/^([\s\S!/]*?)([A-Za-z0-9][^, \n]* [^, ]*)$/.exec(prefix);
if(!match1&&!match2)return true;

var candidates=[];
var idprefix=match1?toID(match1[2]):'';
var spaceprefix=match2?match2[2].replace(/[^A-Za-z0-9 ]+/g,'').toLowerCase():'';
if(match2&&(match2[0]==='/'||match2[0]==='!'))spaceprefix='';
for(var userid in users){
if(spaceprefix&&users[userid].slice(1).replace(/[^A-Za-z0-9 ]+/g,'').
toLowerCase().
startsWith(spaceprefix)){
if(match2)candidates.push({type:"user",userid:userid,prefixIndex:match2[1].length});
}else if(idprefix&&userid.startsWith(idprefix)){
if(match1)candidates.push({type:"user",userid:userid,prefixIndex:match1[1].length});
}
}


var userActivity=this.props.room.userActivity;
candidates.sort(function(a,b){var _userActivity$indexOf,_userActivity$indexOf2;

if(a.type!=="user"||b.type!=="user")return 0;
if(a.prefixIndex!==b.prefixIndex){

return a.prefixIndex-b.prefixIndex;
}
var aIndex=(_userActivity$indexOf=userActivity==null?void 0:userActivity.indexOf(a.userid))!=null?_userActivity$indexOf:-1;
var bIndex=(_userActivity$indexOf2=userActivity==null?void 0:userActivity.indexOf(b.userid))!=null?_userActivity$indexOf2:-1;
if(aIndex!==bIndex){
return bIndex-aIndex;
}
return a.userid<b.userid?-1:1;
});

var currentLine=prefix.substring(prefix.lastIndexOf('\n')+1);
var isCommandWord=function(word){return word.startsWith('/')&&!word.startsWith('//')||word.startsWith('!');};
var currentWord=currentLine.substring(currentLine.lastIndexOf(' ')+1);
var isCommandSearch=isCommandWord(currentWord);
if(isCommandSearch){
PS.mainmenu.makeQuery('cmdsearch',currentWord,true).then(function(data){var _this9$tabComplete$ca,_this9$tabComplete;
var cmds=data.sort(function(a,b){return a.length<b.length?1:-1;});
var nextCmd=cmds[cmds.length-1];
var newValue=nextCmd+value.substring(end);
_this9.setValue(newValue,nextCmd.length,nextCmd.length);
var currentCandidates=(_this9$tabComplete$ca=(_this9$tabComplete=_this9.tabComplete)==null?void 0:_this9$tabComplete.candidates)!=null?_this9$tabComplete$ca:[];for(var _i20=0;_i20<
cmds.length;_i20++){var cmd=cmds[_i20];
currentCandidates.unshift({type:"command",command:cmd});
}
_this9.tabComplete={
candidates:currentCandidates,
candidateIndex:0,
prefix:nextCmd,
cursor:nextCmd
};
});
return true;
}

if(!candidates.length){
this.tabComplete=null;
return true;
}
this.tabComplete={
candidates:candidates,
candidateIndex:0,
prefix:prefix,
cursor:prefix
};
}

var candidate=this.tabComplete.candidates[this.tabComplete.candidateIndex];
if(candidate.type==="user"){
var name=users[candidate.userid];
if(!name)return true;

name=Dex.getShortName(name.slice(1));
var cursor=this.tabComplete.prefix.slice(0,candidate.prefixIndex)+name;
this.setValue(cursor+value.slice(end),cursor.length);
this.tabComplete.cursor=cursor;
}else{
var prefixIndex=prefix.lastIndexOf('\n')+1;
var fullPrefix=prefix.substring(0,prefixIndex)+Dex.getShortName(candidate.command);
var newValue=fullPrefix+value.substring(end);
this.setValue(newValue,fullPrefix.length,fullPrefix.length);
this.tabComplete.cursor=fullPrefix;
this.tabComplete.prefix=fullPrefix;
}
return true;
};_proto3.
undoTabComplete=function undoTabComplete(){
if(!this.tabComplete)return false;
var value=this.getValue();
if(!value.startsWith(this.tabComplete.cursor))return false;

this.setValue(this.tabComplete.prefix+value.slice(this.tabComplete.cursor.length),this.tabComplete.prefix.length);
this.tabComplete=null;
return true;
};_proto3.
toggleFormatChar=function toggleFormatChar(formatChar){
var _this$getSelection5=this.getSelection(),value=_this$getSelection5.value,start=_this$getSelection5.start,end=_this$getSelection5.end;


if(value.charAt(start)===formatChar&&value.charAt(start-1)===formatChar&&
value.charAt(start-2)!==formatChar){
start++;
}
if(value.charAt(end)===formatChar&&value.charAt(end-1)===formatChar&&
value.charAt(end-2)!==formatChar){
end--;
}


var wrap=formatChar+formatChar;
value=value.slice(0,start)+wrap+value.slice(start,end)+wrap+value.slice(end);
start+=2;
end+=2;


var nesting=wrap+wrap;
if(value.slice(start-4,start)===nesting){
value=value.slice(0,start-4)+value.slice(start);
start-=4;
end-=4;
}else if(start!==end&&value.slice(start-2,start+2)===nesting){
value=value.slice(0,start-2)+value.slice(start+2);
start-=2;
end-=4;
}
if(value.slice(end,end+4)===nesting){
value=value.slice(0,end)+value.slice(end+4);
}else if(start!==end&&value.slice(end-2,end+2)===nesting){
value=value.slice(0,end-2)+value.slice(end+2);
end-=2;
}

this.setValue(value,start,end);
return true;
};_proto3.
render=function render(){
var room=this.props.room;
var OLD_TEXTBOX=false;
if(room.connected==='client-only'&&room.id.startsWith('battle-')){
return preact.h("div",{
"class":"chat-log-add hasuserlist",onClick:this.focusIfNoSelection,style:{left:this.props.left||0}},
preact.h(CopyableURLBox,{url:"https://psim.us/r/"+room.id.slice(7)}));
}

var canTalk=PS.user.named||room.id==='dm-';
var connected=room.connected===true||room.connected==='client-only';
return preact.h("div",{
"class":"chat-log-add hasuserlist",onClick:this.focusIfNoSelection,style:{left:this.props.left||0}},

preact.h("form",{"class":"chatbox"+(this.props.tinyLayout?' nolabel':''),style:canTalk?{}:{display:'none'}},
preact.h("label",{style:"color:"+BattleLog.usernameColor(PS.user.userid)},PS.user.name,":"),
OLD_TEXTBOX?preact.h("textarea",{
"class":connected&&canTalk?'textbox autofocus':'textbox disabled',
autofocus:true,
rows:1,
onInput:this.update,
onKeyDown:this.onKeyDown,
style:{resize:'none',width:'100%',height:'16px',padding:'2px 3px 1px 3px'},
placeholder:PSView.focusPreview(room)}
):preact.h(ChatTextBox,{
disabled:!connected||!canTalk,
placeholder:PSView.focusPreview(room)}
)
),
!canTalk&&preact.h("button",{"data-href":"login","class":"button autofocus"},"Choose a name before sending messages"

)
);
};return ChatTextEntry;}(preact.Component);var


ChatTextBox=function(_preact$Component3){function ChatTextBox(){var _this10;for(var _len3=arguments.length,args=new Array(_len3),_key3=0;_key3<_len3;_key3++){args[_key3]=arguments[_key3];}_this10=_preact$Component3.call.apply(_preact$Component3,[this].concat(args))||this;_this10.






handleFocus=function(){
PSView.setTextboxFocused(true);
};_this10.
handleBlur=function(){
PSView.setTextboxFocused(false);
};return _this10;}_inheritsLoose(ChatTextBox,_preact$Component3);var _proto4=ChatTextBox.prototype;_proto4.shouldComponentUpdate=function shouldComponentUpdate(nextProps){var _classList,_classList2;this.base.setAttribute("placeholder",nextProps.placeholder);(_classList=this.base.classList)==null||_classList.toggle('disabled',!!nextProps.disabled);(_classList2=this.base.classList)==null||_classList2.toggle('autofocus',!nextProps.disabled);return false;};_proto4.
render=function render(){
return preact.h("pre",{
"class":"textbox textbox-empty "+(this.props.disabled?' disabled':' autofocus'),placeholder:this.props.placeholder,
onFocus:this.handleFocus,onBlur:this.handleBlur},
'\n');
};return ChatTextBox;}(preact.Component);var


ChatPanel=function(_PSRoomPanel){function ChatPanel(){var _this11;for(var _len4=arguments.length,args=new Array(_len4),_key4=0;_key4<_len4;_key4++){args[_key4]=arguments[_key4];}_this11=_PSRoomPanel.call.apply(_PSRoomPanel,[this].concat(args))||this;_this11.











send=function(text,elem){
_this11.props.room.send(text,elem);
};_this11.
onKey=function(e){
if(e.keyCode===33){
var chatLog=_this11.base.getElementsByClassName('chat-log')[0];
chatLog.scrollTop=chatLog.scrollTop-chatLog.offsetHeight+60;
return true;
}else if(e.keyCode===34){
var _chatLog=_this11.base.getElementsByClassName('chat-log')[0];
_chatLog.scrollTop=_chatLog.scrollTop+_chatLog.offsetHeight-60;
return true;
}
return false;
};_this11.
makeChallenge=function(e,format,team){
var elem=e.target;
var now=Date.now();
var lastChallenged=PS.mainmenu.lastChallenged||0;
if(now-lastChallenged<5_000){
PS.alert("Please wait 5 seconds before challenging again.",{
parentElem:elem
});
return;
}

PS.requestNotifications();
var room=_this11.props.room;
var packedTeam=team?team.packedTeam:'';
var privacy=PS.mainmenu.adjustPrivacy();
if(!room.pmTarget)throw new Error("Not a PM room");
PS.send("/utm "+packedTeam);
PS.send(privacy+"/challenge "+room.pmTarget+", "+format);
room.teamSent=format||'-';
room.update(null);
};_this11.
acceptChallenge=function(e,format,team){
var room=_this11.props.room;
var packedTeam=team?team.packedTeam:'';
if(!room.pmTarget)throw new Error("Not a PM room");
PS.send("/utm "+packedTeam);
_this11.props.room.send("/accept");
room.teamSent=format||'-';
room.update(null);
};return _this11;}_inheritsLoose(ChatPanel,_PSRoomPanel);var _proto5=ChatPanel.prototype;_proto5.componentDidMount=function componentDidMount(){var _this12=this;_PSRoomPanel.prototype.componentDidMount.call(this);this.subscribeTo(PS.user,function(){_this12.props.room.updateTarget();});};_proto5.

render=function render(){var _room$args,_room$tour,_PS$connection;
var room=this.props.room;
var tinyLayout=room.width<450;

var defaultFormat=(_room$args=room.args)==null?void 0:_room$args.format;
if(defaultFormat!=null&&defaultFormat.startsWith('!!')){
room.args.format=undefined;
}

var challengeSent=room.teamSent&&!room.challenged;
var challengeTo=room.challenging?preact.h("div",{"class":"challenge outgoing"},
preact.h("p",null,"Waiting for ",room.pmTarget,"..."),
preact.h(TeamForm,{
format:room.challenging.formatName,teamFormat:room.challenging.teamFormat,
onSubmit:null,selectType:"challenge"},

preact.h("button",{"data-cmd":"/cancelchallenge","class":"button"},"Cancel")
)
):room.challengeMenuOpen?preact.h("div",{"class":"challenge outgoing"},
preact.h(TeamForm,{onSubmit:this.makeChallenge,defaultFormat:defaultFormat,selectType:"challenge"},
challengeSent&&preact.h("button",{"class":"button",disabled:true},"Challenging..."

),
!challengeSent&&preact.h("button",{type:"submit","class":"button button-first",disabled:!!room.challenged},
preact.h("strong",null,"Challenge")
),
!challengeSent&&preact.h("button",{"data-href":"battleoptions","class":"button button-last","aria-label":"Battle options"},
preact.h("i",{"class":"fa fa-caret-down","aria-hidden":true})
)," ",
preact.h("button",{"data-cmd":"/cancelchallenge","class":"button"},"Cancel")
)
):null;

var challengeFrom=room.challenged?preact.h("div",{"class":"challenge"},
!!room.challenged.message&&preact.h("p",null,room.challenged.message),
preact.h(TeamForm,{
format:room.challenged.formatName,teamFormat:room.challenged.teamFormat,
onSubmit:this.acceptChallenge,selectType:"challenge"},

room.teamSent&&preact.h("button",{"class":"button",disabled:true},"Accepting..."

),
!room.teamSent&&preact.h("button",{type:"submit","class":room.challenged.formatName?"button button-first":"button"},
preact.h("strong",null,room.challenged.acceptButtonLabel||'Accept')
),
!room.teamSent&&room.challenged.formatName&&preact.h("button",{
"data-href":"battleoptions","class":"button button-last","aria-label":"Battle options"},

preact.h("i",{"class":"fa fa-caret-down","aria-hidden":true})
)," ",
preact.h("button",{"data-cmd":"/reject","class":"button"},room.challenged.rejectButtonLabel||'Reject')
)
):null;

return preact.h(PSPanelWrapper,{room:room,focusClick:true,noScroll:true,fullSize:true},
preact.h(ChatLog,{
"class":"chat-log"+(tinyLayout?'':' hasuserlist'),room:this.props.room,
left:tinyLayout?0:146,top:(_room$tour=room.tour)!=null&&_room$tour.info.isActive?30:0},

challengeTo,challengeFrom,PS.isOffline&&preact.h("p",{"class":"buttonbar"},
preact.h("button",{"class":"button","data-cmd":"/reconnect"},
preact.h("i",{"class":"fa fa-plug","aria-hidden":true})," ",preact.h("strong",null,"Reconnect")
)," ",
((_PS$connection=PS.connection)==null?void 0:_PS$connection.reconnectTimer)&&preact.h("small",null,"(Autoreconnect in ",Math.round(PS.connection.reconnectDelay/1000),"s)")
)
),
room.tour&&preact.h(TournamentBox,{tour:room.tour,left:tinyLayout?0:146}),
preact.h(ChatTextEntry,{
room:this.props.room,onMessage:this.send,onKey:this.onKey,left:tinyLayout?0:146,tinyLayout:tinyLayout}
),
preact.h(ChatUserList,{room:this.props.room,minimized:tinyLayout})
);
};return ChatPanel;}(PSRoomPanel);ChatPanel.id='chat';ChatPanel.routes=['dm-*','groupchat-*','*'];ChatPanel.Model=ChatRoom;ChatPanel.location='right';ChatPanel.icon=preact.h("i",{"class":"fa fa-comment-o","aria-hidden":true});var


ChatUserList=function(_preact$Component4){function ChatUserList(){return _preact$Component4.apply(this,arguments)||this;}_inheritsLoose(ChatUserList,_preact$Component4);var _proto6=ChatUserList.prototype;_proto6.


render=function render(){
var room=this.props.room;
var pmTargetid=room.pmTarget?toID(room.pmTarget):null;
return preact.h("div",{
"class":'userlist'+(this.props.minimized?' userlist-hidden':this.props["static"]?' userlist-static':''),
style:{left:this.props.left||0,top:this.props.top||0}},

!this.props.minimized?
preact.h("div",{"class":"userlist-count"},preact.h("small",null,room.userCount," users")):
room.id==='dm-'?
preact.h(preact.Fragment,null,
preact.h("button",{"class":"button button-middle","data-cmd":"/help"},"Commands")
):
pmTargetid?
preact.h(preact.Fragment,null,
preact.h("button",{"class":"button button-middle","data-cmd":"/challenge"},"Challenge"),
preact.h("button",{"class":"button button-middle","data-href":"useroptions-"+pmTargetid},"\u2026")
):

preact.h("button",{"data-href":"userlist","class":"button button-middle"},room.userCount," users"),

preact.h("ul",null,
room.onlineUsers.map(function(_ref8){var userid=_ref8[0],name=_ref8[1];
var groupSymbol=name.charAt(0);
var group=PS.server.groups[groupSymbol]||{type:'user',order:0};
var color;
if(name.endsWith('@!')){
name=name.slice(0,-2);
color='#888888';
}else{
color=BattleLog.usernameColor(userid);
}
return preact.h("li",{key:userid},preact.h("button",{"class":"userbutton username"},
preact.h("em",{"class":"group"+(['leadership','staff'].includes(group.type)?' staffgroup':'')},
groupSymbol
),
group.type==='leadership'?
preact.h("strong",null,preact.h("em",{style:"color:"+color},name.slice(1))):
group.type==='staff'?
preact.h("strong",{style:"color:"+color+" "},name.slice(1)):

preact.h("span",{style:"color:"+color},name.slice(1))

));
})
)
);
};return ChatUserList;}(preact.Component);var


ChatLog=function(_preact$Component5){function ChatLog(){var _this13;for(var _len5=arguments.length,args=new Array(_len5),_key5=0;_key5<_len5;_key5++){args[_key5]=arguments[_key5];}_this13=_preact$Component5.call.apply(_preact$Component5,[this].concat(args))||this;_this13.



subscription=null;return _this13;}_inheritsLoose(ChatLog,_preact$Component5);var _proto7=ChatLog.prototype;_proto7.
componentDidMount=function componentDidMount(){var _this14=this;
var room=this.props.room;
if(room.log){
var elem=room.log.elem;
this.base.replaceChild(elem,this.base.firstChild);
elem.className=this.props["class"];
elem.style.left=(this.props.left||0)+"px";
elem.style.top=(this.props.top||0)+"px";
}
if(!this.props.noSubscription){
room.log||(room.log=new BattleLog(this.base.firstChild));
room.log.getHighlight=room.handleHighlight;
if(room.backlog){
var backlog=room.backlog;
room.backlog=null;for(var _i22=0;_i22<
backlog.length;_i22++){var args=backlog[_i22];
room.log.add(args,undefined,undefined,PS.prefs.timestamps[room.pmTarget?'pms':'chatrooms']);
}
}
this.subscription=room.subscribe(function(tokens){
if(!tokens)return;
_this14.props.room.log.add(tokens,undefined,undefined,PS.prefs.timestamps[room.pmTarget?'pms':'chatrooms']);
});
}
this.setControlsJSX(this.props.children);
};_proto7.
componentWillUnmount=function componentWillUnmount(){var _this$subscription;
(_this$subscription=this.subscription)==null||_this$subscription.unsubscribe();
};_proto7.
shouldComponentUpdate=function shouldComponentUpdate(props){
var elem=this.base.firstChild;
if(props["class"]!==this.props["class"]){
elem.className=props["class"];
}
if(props.left!==this.props.left)elem.style.left=(props.left||0)+"px";
if(props.top!==this.props.top)elem.style.top=(props.top||0)+"px";
this.setControlsJSX(props.children);
this.updateScroll();
return false;
};_proto7.
setControlsJSX=function setControlsJSX(jsx){
var elem=this.base.firstChild;
var children=elem.children;
var controlsElem=children[children.length-1];
if(controlsElem&&controlsElem.className!=='controls')controlsElem=undefined;
if(!jsx){
if(!controlsElem)return;
elem.removeChild(controlsElem);
this.updateScroll();
return;
}
if(!controlsElem){
controlsElem=document.createElement('div');
controlsElem.className='controls';
elem.appendChild(controlsElem);
}

if(controlsElem.children[0])controlsElem.removeChild(controlsElem.children[0]);
preact.render(preact.h("div",null,jsx),controlsElem);
this.updateScroll();
};_proto7.
updateScroll=function updateScroll(){var _this$props$room$log;
(_this$props$room$log=this.props.room.log)==null||_this$props$room$log.updateScroll();
};_proto7.
render=function render(){
return preact.h("div",null,preact.h("div",{
"class":this.props["class"],role:"log","aria-label":"Chat log",
style:{left:this.props.left||0,top:this.props.top||0}}
));
};return ChatLog;}(preact.Component);


PS.addRoomType(ChatPanel);
//# sourceMappingURL=panel-chat.js.map