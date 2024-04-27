System.register("chunks:///_virtual/debug-view-runtime-control.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var e,o,i,n,s,l,r,a,g,h,p,c,C,d,m,u,L;return{setters:[function(t){e=t.applyDecoratedDescriptor,o=t.inheritsLoose,i=t.initializerDefineProperty,n=t.assertThisInitialized},function(t){s=t.cclegacy,l=t._decorator,r=t.Node,a=t.Color,g=t.Canvas,h=t.UITransform,p=t.instantiate,c=t.Label,C=t.RichText,d=t.Toggle,m=t.Button,u=t.director,L=t.Component}],execute:function(){var f,M,b,v,T,S,x,E,I;s._RF.push({},"b2bd1+njXxJxaFY3ymm06WU","debug-view-runtime-control",void 0);var A=l.ccclass,y=l.property;t("DebugViewRuntimeControl",(f=A("internal.DebugViewRuntimeControl"),M=y(r),b=y(r),v=y(r),f((x=e((S=function(t){function e(){for(var e,o=arguments.length,s=new Array(o),l=0;l<o;l++)s[l]=arguments[l];return e=t.call.apply(t,[this].concat(s))||this,i(e,"compositeModeToggle",x,n(e)),i(e,"singleModeToggle",E,n(e)),i(e,"EnableAllCompositeModeButton",I,n(e)),e._single=0,e.strSingle=["No Single Debug","Vertex Color","Vertex Normal","Vertex Tangent","World Position","Vertex Mirror","Face Side","UV0","UV1","UV Lightmap","Project Depth","Linear Depth","Fragment Normal","Fragment Tangent","Fragment Binormal","Base Color","Diffuse Color","Specular Color","Transparency","Metallic","Roughness","Specular Intensity","IOR","Direct Diffuse","Direct Specular","Direct All","Env Diffuse","Env Specular","Env All","Emissive","Light Map","Shadow","AO","Fresnel","Direct Transmit Diffuse","Direct Transmit Specular","Env Transmit Diffuse","Env Transmit Specular","Transmit All","Direct Internal Specular","Env Internal Specular","Internal All","Fog"],e.strComposite=["Direct Diffuse","Direct Specular","Env Diffuse","Env Specular","Emissive","Light Map","Shadow","AO","Normal Map","Fog","Tone Mapping","Gamma Correction","Fresnel","Transmit Diffuse","Transmit Specular","Internal Specular","TT"],e.strMisc=["CSM Layer Coloration","Lighting With Albedo"],e.compositeModeToggleList=[],e.singleModeToggleList=[],e.miscModeToggleList=[],e.textComponentList=[],e.labelComponentList=[],e.textContentList=[],e.hideButtonLabel=void 0,e._currentColorIndex=0,e.strColor=["<color=#ffffff>","<color=#000000>","<color=#ff0000>","<color=#00ff00>","<color=#0000ff>"],e.color=[a.WHITE,a.BLACK,a.RED,a.GREEN,a.BLUE],e}o(e,t);var s=e.prototype;return s.start=function(){if(this.node.parent.getComponent(g)){var t=this.node.parent.getComponent(h),e=.5*t.width,o=.5*t.height,i=.1*e-e,n=o-.1*o,s=this.node.getChildByName("MiscMode"),l=p(s);l.parent=this.node,l.name="Buttons";var r=p(s);r.parent=this.node,r.name="Titles";for(var u=0;u<2;u++){var L=p(this.EnableAllCompositeModeButton.getChildByName("Label"));L.setPosition(i+(u>0?450:150),n,0),L.setScale(.75,.75,.75),L.parent=r;var f=L.getComponent(c);f.string=u?"----------Composite Mode----------":"----------Single Mode----------",f.color=a.WHITE,f.overflow=0,this.labelComponentList[this.labelComponentList.length]=f}n-=20;for(var M=0,b=0;b<this.strSingle.length;b++,M++){b===this.strSingle.length>>1&&(i+=200,M=0);var v=b?p(this.singleModeToggle):this.singleModeToggle;v.setPosition(i,n-20*M,0),v.setScale(.5,.5,.5),v.parent=this.singleModeToggle.parent;var T=v.getComponentInChildren(C);T.string=this.strSingle[b],this.textComponentList[this.textComponentList.length]=T,this.textContentList[this.textContentList.length]=T.string,v.on(d.EventType.TOGGLE,this.toggleSingleMode,this),this.singleModeToggleList[b]=v}i+=200,this.EnableAllCompositeModeButton.setPosition(i+15,n,0),this.EnableAllCompositeModeButton.setScale(.5,.5,.5),this.EnableAllCompositeModeButton.on(m.EventType.CLICK,this.enableAllCompositeMode,this),this.EnableAllCompositeModeButton.parent=l;var S=this.EnableAllCompositeModeButton.getComponentInChildren(c);this.labelComponentList[this.labelComponentList.length]=S;var x=p(this.EnableAllCompositeModeButton);x.setPosition(i+90,n,0),x.setScale(.5,.5,.5),x.on(m.EventType.CLICK,this.changeTextColor,this),x.parent=l,(S=x.getComponentInChildren(c)).string="TextColor",this.labelComponentList[this.labelComponentList.length]=S;var E=p(this.EnableAllCompositeModeButton);E.setPosition(i+200,n,0),E.setScale(.5,.5,.5),E.on(m.EventType.CLICK,this.hideUI,this),E.parent=this.node.parent,(S=E.getComponentInChildren(c)).string="Hide UI",this.labelComponentList[this.labelComponentList.length]=S,this.hideButtonLabel=S,n-=40;for(var I=0;I<this.strMisc.length;I++){var A=p(this.compositeModeToggle);A.setPosition(i,n-20*I,0),A.setScale(.5,.5,.5),A.parent=s;var y=A.getComponentInChildren(C);y.string=this.strMisc[I],this.textComponentList[this.textComponentList.length]=y,this.textContentList[this.textContentList.length]=y.string,A.getComponent(d).isChecked=!!I,A.on(d.EventType.TOGGLE,I?this.toggleLightingWithAlbedo:this.toggleCSMColoration,this),this.miscModeToggleList[I]=A}n-=150;for(var D=0;D<this.strComposite.length;D++){var B=D?p(this.compositeModeToggle):this.compositeModeToggle;B.setPosition(i,n-20*D,0),B.setScale(.5,.5,.5),B.parent=this.compositeModeToggle.parent;var w=B.getComponentInChildren(C);w.string=this.strComposite[D],this.textComponentList[this.textComponentList.length]=w,this.textContentList[this.textContentList.length]=w.string,B.on(d.EventType.TOGGLE,this.toggleCompositeMode,this),this.compositeModeToggleList[D]=B}}else console.error("debug-view-runtime-control should be child of Canvas")},s.isTextMatched=function(t,e){var o=new String(t),i=o.search(">");return-1===i?t===e:(o=(o=o.substr(i+1)).substr(0,o.search("<")))===e},s.toggleSingleMode=function(t){for(var e=u.root.debugView,o=t.getComponentInChildren(C),i=0;i<this.strSingle.length;i++)this.isTextMatched(o.string,this.strSingle[i])&&(e.singleMode=i)},s.toggleCompositeMode=function(t){for(var e=u.root.debugView,o=t.getComponentInChildren(C),i=0;i<this.strComposite.length;i++)this.isTextMatched(o.string,this.strComposite[i])&&e.enableCompositeMode(i,t.isChecked)},s.toggleLightingWithAlbedo=function(t){u.root.debugView.lightingWithAlbedo=t.isChecked},s.toggleCSMColoration=function(t){u.root.debugView.csmLayerColoration=t.isChecked},s.enableAllCompositeMode=function(t){var e=u.root.debugView;e.enableAllCompositeMode(!0);for(var o=0;o<this.compositeModeToggleList.length;o++){this.compositeModeToggleList[o].getComponent(d).isChecked=!0}var i=this.miscModeToggleList[0].getComponent(d);i.isChecked=!1,e.csmLayerColoration=!1,(i=this.miscModeToggleList[1].getComponent(d)).isChecked=!0,e.lightingWithAlbedo=!0},s.hideUI=function(t){var e=this.node.getChildByName("Titles"),o=!e.active;this.singleModeToggleList[0].parent.active=o,this.miscModeToggleList[0].parent.active=o,this.compositeModeToggleList[0].parent.active=o,this.EnableAllCompositeModeButton.parent.active=o,e.active=o,this.hideButtonLabel.string=o?"Hide UI":"Show UI"},s.changeTextColor=function(t){this._currentColorIndex++,this._currentColorIndex>=this.strColor.length&&(this._currentColorIndex=0);for(var e=0;e<this.textComponentList.length;e++)this.textComponentList[e].string=this.strColor[this._currentColorIndex]+this.textContentList[e]+"</color>";for(var o=0;o<this.labelComponentList.length;o++)this.labelComponentList[o].color=this.color[this._currentColorIndex]},s.onLoad=function(){},s.update=function(t){},e}(L)).prototype,"compositeModeToggle",[M],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),E=e(S.prototype,"singleModeToggle",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),I=e(S.prototype,"EnableAllCompositeModeButton",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),T=S))||T));s._RF.pop()}}}));

System.register("chunks:///_virtual/EditorPanel.ts",["./rollupPluginModLoBabelHelpers.js","cc","./label-plus.ts","./ViewPanel.ts"],(function(e){var t,n,i,r,a,l,s,o,u,h,c,d,p,m,f,g,k,b,v,w,C,x,S,A,y;return{setters:[function(e){t=e.applyDecoratedDescriptor,n=e.inheritsLoose,i=e.initializerDefineProperty,r=e.assertThisInitialized,a=e.createForOfIteratorHelperLoose,l=e.createClass,s=e.asyncToGenerator,o=e.regeneratorRuntime},function(e){u=e.cclegacy,h=e._decorator,c=e.Slider,d=e.Toggle,p=e.ToggleContainer,m=e.Node,f=e.director,g=e.TransformBit,k=e.Vec3,b=e.instantiate,v=e.sys,w=e.Component,C=e.sp,x=e.Texture2D,S=e.assetManager},function(e){A=e.LabelPlus},function(e){y=e.ViewPanel}],execute:function(){var P,_,T,N,I,L,z,D,E,B,R,F,M,V,j,Z,O,H,G,W,Y,U,J,$,q,K,Q,X,ee,te,ne,ie,re,ae,le,se,oe,ue,he;u._RF.push({},"47ecbzjbWBMf6CprNPPYIRD","EditorPanel",void 0);var ce=[".json",".skel",".png",".atlas",".txt"],de=h.ccclass,pe=h.property;e("EditorPanel",(P=de("EditorPanel"),_=pe(y),T=pe(A),N=pe(A),I=pe(c),L=pe(A),z=pe(c),D=pe([d]),E=pe(d),B=pe(p),R=pe(d),F=pe(A),M=pe(c),V=pe(A),j=pe(c),Z=pe(A),O=pe(c),H=pe(m),G=pe(m),P((U=t((Y=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),l=0;l<n;l++)a[l]=arguments[l];return t=e.call.apply(e,[this].concat(a))||this,i(t,"viewPanel",U,r(t)),i(t,"fileNameLabel",J,r(t)),i(t,"scaleLabel",$,r(t)),i(t,"scaleSlider",q,r(t)),i(t,"zoomLabel",K,r(t)),i(t,"zoomSlider",Q,r(t)),i(t,"debugToggles",X,r(t)),i(t,"premultipliedToggle",ee,r(t)),i(t,"tracksToogleContainer",te,r(t)),i(t,"loopToggle",ne,r(t)),i(t,"entryAlphaLabel",ie,r(t)),i(t,"entryAlphaSlider",re,r(t)),i(t,"speedLabel",ae,r(t)),i(t,"speedSlider",le,r(t)),i(t,"mixLabel",se,r(t)),i(t,"mixSlider",oe,r(t)),i(t,"skinContent",ue,r(t)),i(t,"animContent",he,r(t)),t._skinItem=null,t._animItem=null,t._trackIndex=0,t._fileDatas=null,t}n(t,e);var u=t.prototype;return u.onLoad=function(){this._skinItem=this.skinContent.children[0],this._skinItem.getComponent(d).isChecked=!1,this._skinItem.parent=null,this._animItem=this.animContent.children[0],this._animItem.getComponent(d).isChecked=!1,this._animItem.parent=null,this.registerEvent(),this.setup()},u.setup=function(){this.trackIndex=0,this.updateSkinAnim(),this.refreshViewZoom(),this.refreshSkleScale(),this.initDebug(),this.refreshSpeed(1),this.refreshMix(0),this.tracksToogleContainer.toggleItems[0].isChecked=!0,this.viewPanel.skelAnim.premultipliedAlpha=this.premultipliedToggle.isChecked},u.registerEvent=function(){this.viewPanel.skelAnim.node.on(m.EventType.TRANSFORM_CHANGED,this.onSkelTransformChanged,this),this.viewPanel.viewNode.on(m.EventType.TRANSFORM_CHANGED,this.onViewNodeTransformChanged,this),f.on("load_skeleton_data",this.loadSkeletonData,this)},u.onSkelTransformChanged=function(e){e&g.SCALE&&this.refreshSkleScale()},u.onScaleSliderChanged=function(){var e=2.9*this.scaleSlider.progress+.1;this.viewPanel.skelAnim.node.scale=new k(e,e,1)},u.onScaleResetBtnClicked=function(){this.viewPanel.skelAnim.node.scale=new k(1,1,1),this.viewPanel.viewNode.position=new k(0,0,0)},u.refreshSkleScale=function(){this.scaleLabel.string="Scale: "+this.viewPanel.skelAnim.node.scale.x.toFixed(2),this.scaleSlider.progress=(this.viewPanel.skelAnim.node.scale.x-.1)/2.9},u.onViewNodeTransformChanged=function(e){e&g.SCALE&&this.refreshViewZoom()},u.onZoomSliderChanged=function(){var e=9.99*this.zoomSlider.progress+.01;this.viewPanel.viewNode.scale=new k(e,e,1)},u.onZoomResetBtnClicked=function(){this.viewPanel.viewNode.scale=new k(1,1,1),this.viewPanel.viewNode.position=new k(0,0,0)},u.refreshViewZoom=function(){this.zoomLabel.string="Zoom: "+this.viewPanel.viewNode.scale.x.toFixed(2),this.zoomSlider.progress=(this.viewPanel.viewNode.scale.x-.01)/9.99},u.initDebug=function(){var e=this;this.debugToggles.forEach((function(t){e.viewPanel.skelAnim["debug"+t.node.name]=t.isChecked}))},u.onDebugToggleChanged=function(e){this.viewPanel.skelAnim["debug"+e.node.name]=e.isChecked},u.onPremultipliedToggleChanged=function(){this.viewPanel.skelAnim.premultipliedAlpha=this.premultipliedToggle.isChecked},u.onSetupBtnClicked=function(e,t){switch(t){case"bones":this.viewPanel.skelAnim.setBonesToSetupPose();break;case"slots":this.viewPanel.skelAnim.setSlotsToSetupPose();break;default:this.viewPanel.skelAnim.setToSetupPose()}},u.onLoopToggleChanged=function(e){this.viewPanel.skelAnim.loop=e.isChecked;var t=this.viewPanel.skelAnim.getState();if(t)for(var n=t.tracks.filter((function(e){return!!e})),i=0;i<n.length;i++){var r=n[i];this.viewPanel.skelAnim.setAnimation(i,r.animation.name,this.viewPanel.skelAnim.loop)}},u.refreshSpeed=function(e){this.speedLabel.string="Speed: "+e.toFixed(2),this.speedSlider.progress=e/3,this.viewPanel.skelAnim.timeScale=e},u.onSpeedSliderChanged=function(){var e=3*this.speedSlider.progress;this.refreshSpeed(e)},u.onSpeedResetBtnClicked=function(){this.refreshSpeed(1)},u.refreshMix=function(e){this.mixLabel.string="Mix: "+e.toFixed(2),this.mixSlider.progress=e/4},u.onMixSliderChanged=function(){var e=4*this.mixSlider.progress;this.refreshMix(e)},u.updateSkinAnim=function(){var e=this.viewPanel.skelAnim._runtimeData;if(e){var t=e.skins;this.skinContent.destroyAllChildren();for(var n=0;n<t.length;n++){var i=t[n],r=b(this._skinItem);r.getChildByName("Name").getComponent(A).string=i.name,r.getComponent(d).isChecked=0===n,r.parent=this.skinContent}var l=e.animations;this.animContent.destroyAllChildren();for(var s,o=a(l);!(s=o()).done;){var u=s.value,h=b(this._animItem);h.getChildByName("Name").getComponent(A).string=u.name,h.getChildByName("Time").getComponent(A).string=u.duration.toFixed(2)+"s",h.parent=this.animContent}}},u.onSkinChanged=function(e){if(e.isChecked){var t=e.node.getChildByName("Name").getComponent(A).string;this.viewPanel.skelAnim.setSkin(t)}},u.onTrackChanged=function(e){var t=Number(e.getComponentInChildren(A).string)||0;this.trackIndex=t;var n=this.viewPanel.skelAnim.getCurrent(this._trackIndex);n?(this.animContent.getComponentsInChildren(d).forEach((function(e){e.setIsCheckedWithoutNotify(e.getComponentInChildren(A).string===n.animation.name)})),this.refreshEntryAlpha(n.alpha)):(this.animContent.getComponentsInChildren(d).forEach((function(e){return e.setIsCheckedWithoutNotify(!1)})),this.refreshEntryAlpha(1))},u.onTrackEntryAlphaSliderChanged=function(){var e=this.viewPanel.skelAnim.getCurrent(this._trackIndex);e&&(e.alpha=this.entryAlphaSlider.progress),this.refreshEntryAlpha(this.entryAlphaSlider.progress)},u.refreshEntryAlpha=function(e){this.entryAlphaSlider.progress=e,this.entryAlphaLabel.string="Entry alpha: "+e.toFixed(2)},u.onAnimChanged=function(e){var t=this.viewPanel.skelAnim.getState();if(t)if(e.isChecked){var n,i=4*this.mixSlider.progress,r=null==(n=t.tracks[this._trackIndex])?void 0:n.animation.name,a=e.node.getChildByName("Name").getComponent(A).string;if(r===a)return;r&&this.viewPanel.skelAnim.setMix(r,a,i),this.viewPanel.skelAnim.setAnimation(this._trackIndex,a,this.viewPanel.skelAnim.loop),this.viewPanel.timeSlider.progress=0,this.viewPanel.updateTimeLine()}else this.viewPanel.skelAnim.clearTrack(this._trackIndex),this.viewPanel.skelAnim.setToSetupPose()},u.onOpenBtnClicked=function(){var e=this;if(v.isBrowser){var t=document.createElement("input");t.type="file",t.webkitdirectory=!0,t.multiple=!0,t.accept=ce.join(","),t.onchange=function(t){var n=t.target;e.loadSkeletonData(Array.from(n.files))},t.click()}},u.getExtName=function(e){var t="";switch(e){case".skel":t=".bin";break;case".atlas":t=".txt";break;default:t=e}return t},u.loadSkeletonData=function(){var e=s(o().mark((function e(t){var n,i,r,l,s,u,h,c,d,p,m,f,g,k,b,v=this;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this._fileDatas=t.map((function(e){return{name:e.name,ext:"."+e.name.split(".").pop(),url:URL.createObjectURL(e)}})),this._fileDatas=this._fileDatas.filter((function(e){return ce.includes(e.ext)})),!(this._fileDatas.length<3)){e.next=4;break}return e.abrupt("return");case 4:n=o().mark((function e(){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.value,e.next=3,new Promise((function(e,n){S.loadRemote(t.url,{ext:v.getExtName(t.ext)},(function(t,i){t?n(t):e(i)}))}));case 3:t.asset=e.sent;case 4:case"end":return e.stop()}}),e)})),i=a(this._fileDatas);case 6:if((r=i()).done){e.next=10;break}return e.delegateYield(n(),"t0",8);case 8:e.next=6;break;case 10:if(l=this._fileDatas.find((function(e){return".txt"===v.getExtName(e.ext)}))){e.next=13;break}return e.abrupt("return");case 13:s=l.asset,(u=new C.SkeletonData).atlasText=s.text,h=u.atlasText.match(/^.*\.png$/gm),u.textureNames=h,c="",(d=this._fileDatas.find((function(e){return".json"===v.getExtName(e.ext)})))?(c=d.name,p=d.asset,u._uuid=p._uuid,u.skeletonJson=p.json):(m=this._fileDatas.find((function(e){return".bin"===v.getExtName(e.ext)})))&&(c=m.name,u._uuid=m.asset._uuid,u._nativeAsset=m.asset._nativeAsset),f=[],g=o().mark((function e(){var t,n,i,r,a;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=b.value,n=v._fileDatas.find((function(e){return e.name===t}))){e.next=4;break}return e.abrupt("return",1);case 4:i=n.asset,r=new x,a=i.data,r.reset({width:a.width,height:a.height}),r.uploadData(a,0,0),f.push(r);case 10:case"end":return e.stop()}}),e)})),k=a(h);case 24:if((b=k()).done){e.next=30;break}return e.delegateYield(g(),"t1",26);case 26:if(!e.t1){e.next=28;break}return e.abrupt("continue",28);case 28:e.next=24;break;case 30:if(u.textures=f,h.length===f.length){e.next=33;break}return e.abrupt("return");case 33:this.fileNameLabel.string=c,this.viewPanel.skelAnim.skeletonData=u,this.setup(),this.viewPanel.setup();case 37:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}(),l(t,[{key:"trackIndex",get:function(){return this._trackIndex},set:function(e){this._trackIndex=e,this.viewPanel.trackIndex=this._trackIndex,this.entryAlphaSlider.enabled=0!==this._trackIndex}}]),t}(w)).prototype,"viewPanel",[_],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),J=t(Y.prototype,"fileNameLabel",[T],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),$=t(Y.prototype,"scaleLabel",[N],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),q=t(Y.prototype,"scaleSlider",[I],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),K=t(Y.prototype,"zoomLabel",[L],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),Q=t(Y.prototype,"zoomSlider",[z],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),X=t(Y.prototype,"debugToggles",[D],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),ee=t(Y.prototype,"premultipliedToggle",[E],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),te=t(Y.prototype,"tracksToogleContainer",[B],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),ne=t(Y.prototype,"loopToggle",[R],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),ie=t(Y.prototype,"entryAlphaLabel",[F],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),re=t(Y.prototype,"entryAlphaSlider",[M],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),ae=t(Y.prototype,"speedLabel",[V],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),le=t(Y.prototype,"speedSlider",[j],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),se=t(Y.prototype,"mixLabel",[Z],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),oe=t(Y.prototype,"mixSlider",[O],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),ue=t(Y.prototype,"skinContent",[H],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),he=t(Y.prototype,"animContent",[G],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),W=Y))||W));u._RF.pop()}}}));

System.register("chunks:///_virtual/label-plus.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var e,o,i,r,n,s,l,a,u,p,h,d;return{setters:[function(t){e=t.applyDecoratedDescriptor,o=t.inheritsLoose,i=t.initializerDefineProperty,r=t.assertThisInitialized,n=t.createClass},function(t){s=t.cclegacy,l=t._decorator,a=t.Vec2,u=t.BitmapFont,p=t.builtinResMgr,h=t.Label,d=t.Color}],execute:function(){var c,f,y,_,b,w,g,O,m,v,C,k,P,D,M,S,T,F,z,X,j,E,I,L,A,R,x,N,B,U,Y;s._RF.push({},"761671J7W1J+YmH/RfF7GA1","label-plus",void 0);var G=l.ccclass,q=l.property,H=l.menu,J=new a(0,0);t("LabelPlus",(c=G("LabelPlus"),f=H("2D/LabelPlus"),y=q({override:!0,type:u,visible:!0}),_=q({override:!0}),b=q({override:!0,visible:!1}),w=q({override:!0}),g=q({override:!0,visible:!0}),O=q({override:!0}),m=q({displayOrder:4.1,range:[-1,1,.01],slide:!0,tooltip:"i18n:label-plus.label.dilate"}),v=q({displayOrder:4.2,tooltip:"i18n:label-plus.label.outline"}),C=q({displayOrder:4.3,visible:function(){return this._outline},range:[0,1,.01],slide:!0,tooltip:"i18n:label-plus.label.outline_thickness"}),k=q({displayOrder:4.4,override:!0,visible:function(){return this._outline},tooltip:"i18n:label-plus.label.outline_color"}),P=q({override:!0}),D=q({displayOrder:4.5,tooltip:"i18n:label-plus.label.shadow"}),M=q({displayOrder:4.6,override:!0,visible:function(){return this._shadow},tooltip:"i18n:label-plus.label.shadow_color"}),S=q({override:!0}),T=q({displayOrder:4.7,range:[-1,1,.01],slide:!0,visible:function(){return this._shadow},tooltip:"i18n:label-plus.label.shadow_offset"}),F=q({displayOrder:4.8,range:[-1,1,.01],slide:!0,visible:function(){return this._shadow},tooltip:"i18n:label-plus.label.shadow_offset"}),z=q({override:!0}),c(X=f((e((j=function(t){function e(){for(var e,o=arguments.length,n=new Array(o),s=0;s<o;s++)n[s]=arguments[s];return e=t.call.apply(t,[this].concat(n))||this,i(e,"_font",E,r(e)),i(e,"_isSystemFontUsed",I,r(e)),i(e,"_spacingX",L,r(e)),i(e,"_dilate",A,r(e)),i(e,"_outline",R,r(e)),i(e,"_outlineThickness",x,r(e)),i(e,"_outlineColor",N,r(e)),i(e,"_shadow",B,r(e)),i(e,"_shadowColor",U,r(e)),i(e,"_shadowOffset",Y,r(e)),e}o(e,t);var s=e.prototype;return s.resetInEditor=function(){var e;null==(e=t.prototype.resetInEditor)||e.call(this),this.font=p.get("label-plus-default-font"),this.fontSize=20},s.onLoad=function(){var e;null==(e=t.prototype.onLoad)||e.call(this)},s.onEnable=function(){var e;null==(e=t.prototype.onEnable)||e.call(this),this.updateMaterialProperty()},s.updateMaterialProperty=function(){this.sharedMaterial&&(this.updateDilate(),this.updateOutlineThickness(),this.updateOutlineColor(),this.updateShadowOffset(),this.updateShadowColor())},s.updateDilate=function(){0!==this._dilate&&this.getMaterialInstance(0).setProperty("dilate",this._dilate/2+.5)},s.updateOutlineThickness=function(){if(this._outline){var t=Math.max(0,.5-this._dilate/2-.5*this._outlineThickness);this.getMaterialInstance(0).setProperty("outlineThickness",t)}},s.updateOutlineColor=function(){this._outline&&this.getMaterialInstance(0).setProperty("outlineColor",this._outlineColor)},s.updateShadowColor=function(){this._shadow&&this.getMaterialInstance(0).setProperty("shadowColor",this._shadowColor)},s.updateShadowOffset=function(){var t,e;if(this._shadow){var o=this.getMaterialInstance(0),i=1/((null==this||null==(t=this._font)||null==(t=t.spriteFrame)?void 0:t.texture.width)||Number.MAX_SAFE_INTEGER),r=1/((null==this||null==(e=this._font)||null==(e=e.spriteFrame)?void 0:e.texture.height)||Number.MAX_SAFE_INTEGER);a.multiplyScalar(J,this._shadowOffset,2),J.multiply2f(i,r),o.setProperty("shadowOffset",J)}},s._updateBuiltinMaterial=function(){return p.get(this.getMaterialName())},s.getMaterialName=function(){return this._outline&&this._shadow?"label-plus-os-material":this._outline?"label-plus-outline-material":this._shadow?"label-plus-shadow-material":"label-plus-material"},n(e,[{key:"font",get:function(){return this._font},set:function(t){this._font!==t&&(this._font=t,this.destroyRenderData(),this._fontAtlas=null,this.updateRenderData(!0),this.updateMaterialProperty())}},{key:"useSystemFont",get:function(){return this._isSystemFontUsed},set:function(t){console.warn("label plus not surpport system font")}},{key:"spacingX",get:function(){return this._spacingX},set:function(t){this._spacingX!==t&&(this._spacingX=t,this.markForUpdateRenderData())}},{key:"dilate",get:function(){return this._dilate},set:function(t){this._dilate!==t&&(this._dilate=t,this.updateDilate(),this.updateOutlineThickness())}},{key:"outline",get:function(){return this._outline},set:function(t){this._outline!==t&&(this._outline=t,this.updateMaterial(),this.updateMaterialProperty())}},{key:"outlineThickness",get:function(){return this._outlineThickness},set:function(t){this._outlineThickness!==t&&(this._outlineThickness=t,this.updateOutlineThickness())}},{key:"outlineColor",get:function(){return this._outlineColor},set:function(t){this._outlineColor.equals(t)||(this._outlineColor.set(t),this.updateOutlineColor())}},{key:"shadow",get:function(){return this._shadow},set:function(t){this._shadow!==t&&(this._shadow=t,this.updateMaterial(),this.updateMaterialProperty())}},{key:"shadowColor",get:function(){return this._shadowColor},set:function(t){this._shadowColor.equals(t)||(this._shadowColor.set(t),this.updateShadowColor())}},{key:"shadowOffsetX",get:function(){return this._shadowOffset.x},set:function(t){this._shadowOffset.x!==t&&(this._shadowOffset.set(t,this._shadowOffset.y),this.updateShadowOffset())}},{key:"shadowOffsetY",get:function(){return this._shadowOffset.y},set:function(t){this._shadowOffset.y!==t&&(this._shadowOffset.set(this._shadowOffset.x,t),this.updateShadowOffset())}}]),e}(h)).prototype,"font",[y],Object.getOwnPropertyDescriptor(j.prototype,"font"),j.prototype),E=e(j.prototype,"_font",[_],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),e(j.prototype,"useSystemFont",[b],Object.getOwnPropertyDescriptor(j.prototype,"useSystemFont"),j.prototype),I=e(j.prototype,"_isSystemFontUsed",[w],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),e(j.prototype,"spacingX",[g],Object.getOwnPropertyDescriptor(j.prototype,"spacingX"),j.prototype),L=e(j.prototype,"_spacingX",[O],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 0}}),e(j.prototype,"dilate",[m],Object.getOwnPropertyDescriptor(j.prototype,"dilate"),j.prototype),A=e(j.prototype,"_dilate",[q],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 0}}),e(j.prototype,"outline",[v],Object.getOwnPropertyDescriptor(j.prototype,"outline"),j.prototype),R=e(j.prototype,"_outline",[q],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),e(j.prototype,"outlineThickness",[C],Object.getOwnPropertyDescriptor(j.prototype,"outlineThickness"),j.prototype),x=e(j.prototype,"_outlineThickness",[q],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return.2}}),e(j.prototype,"outlineColor",[k],Object.getOwnPropertyDescriptor(j.prototype,"outlineColor"),j.prototype),N=e(j.prototype,"_outlineColor",[P],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return d.BLACK.clone()}}),e(j.prototype,"shadow",[D],Object.getOwnPropertyDescriptor(j.prototype,"shadow"),j.prototype),B=e(j.prototype,"_shadow",[q],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),e(j.prototype,"shadowColor",[M],Object.getOwnPropertyDescriptor(j.prototype,"shadowColor"),j.prototype),U=e(j.prototype,"_shadowColor",[S],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return d.BLACK.clone()}}),e(j.prototype,"shadowOffsetX",[T],Object.getOwnPropertyDescriptor(j.prototype,"shadowOffsetX"),j.prototype),e(j.prototype,"shadowOffsetY",[F],Object.getOwnPropertyDescriptor(j.prototype,"shadowOffsetY"),j.prototype),Y=e(j.prototype,"_shadowOffset",[z],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return new a(0,0)}}),X=j))||X)||X));s._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./debug-view-runtime-control.ts","./EditorPanel.ts","./PlayBtnState.ts","./ViewPanel.ts","./label-plus.ts"],(function(){return{setters:[null,null,null,null,null],execute:function(){}}}));

System.register("chunks:///_virtual/PlayBtnState.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){var t,o,n,a,i,r;return{setters:[function(e){t=e.inheritsLoose,o=e.createClass},function(e){n=e.cclegacy,a=e._decorator,i=e.Graphics,r=e.Component}],execute:function(){var l;n._RF.push({},"0ba14XXWcRMi4FNyVK0xodF","PlayBtnState",void 0);var s=a.ccclass,c=a.requireComponent,u=a.executeInEditMode;e("PlayBtnState",s("PlayBtnState")(l=c(i)(l=u(l=function(e){function n(){for(var t,o=arguments.length,n=new Array(o),a=0;a<o;a++)n[a]=arguments[a];return(t=e.call.apply(e,[this].concat(n))||this)._paused=!1,t}t(n,e);var a=n.prototype;return a.onLoad=function(){this.paused=!1},a.drawPauseState=function(){var e=this.getComponent(i);e.clear(),e.circle(0,0,20),e.stroke(),e.moveTo(-7,-10),e.lineTo(-7,10),e.lineTo(-3,10),e.lineTo(-3,-10),e.close(),e.fill(),e.moveTo(3,10),e.lineTo(3,-10),e.lineTo(7,-10),e.lineTo(7,10),e.close(),e.fill()},a.drawPlayState=function(){var e=this.getComponent(i);e.clear(),e.circle(0,0,20),e.stroke(),e.moveTo(-7,-10),e.lineTo(-7,10),e.lineTo(12,0),e.close(),e.fill()},o(n,[{key:"paused",get:function(){return this._paused},set:function(e){this._paused=e,this._paused?this.drawPlayState():this.drawPauseState()}}]),n}(r))||l)||l)||l);n._RF.pop()}}}));

System.register("chunks:///_virtual/ViewPanel.ts",["./rollupPluginModLoBabelHelpers.js","cc","./label-plus.ts","./PlayBtnState.ts"],(function(e){var t,i,n,a,r,o,l,s,u,c,h,p,d,m,b,f,g,v,k,w,y,L,S,T,N,E,A,_,C;return{setters:[function(e){t=e.applyDecoratedDescriptor,i=e.inheritsLoose,n=e.initializerDefineProperty,a=e.assertThisInitialized,r=e.createForOfIteratorHelperLoose,o=e.createClass},function(e){l=e.cclegacy,s=e.Color,u=e._decorator,c=e.Node,h=e.Graphics,p=e.Sprite,d=e.sp,m=e.Slider,b=e.VERSION,f=e.TransformBit,g=e.director,v=e.Director,k=e.clamp,w=e.Vec3,y=e.instantiate,L=e.UIOpacity,S=e.tween,T=e.UITransform,N=e.view,E=e.Layers,A=e.Component},function(e){_=e.LabelPlus},function(e){C=e.PlayBtnState}],execute:function(){var I,R,x,M,z,D,O,B,P,U,G,H,V,W,F,X,Y,j,Z,q,J,K,Q,$,ee,te,ie,ne,ae,re,oe;l._RF.push({},"447be3VYGtGm6cBkOT9GoS+","ViewPanel",void 0);var le=new s(255,255,255),se=new s(255,0,0),ue=new s(255,255,255),ce=u.ccclass,he=u.property;e("ViewPanel",(I=ce("ViewPanel"),R=he(c),x=he(h),M=he(p),z=he(d.Skeleton),D=he(C),O=he(m),B=he([_]),P=he(c),U=he(c),G=he(_),H=he(_),V=he(_),W=he([_]),F=he(c),I((j=t((Y=function(e){function t(){for(var t,i=arguments.length,r=new Array(i),o=0;o<i;o++)r[o]=arguments[o];return t=e.call.apply(e,[this].concat(r))||this,n(t,"viewNode",j,a(t)),n(t,"graphics",Z,a(t)),n(t,"spriteBg",q,a(t)),n(t,"skelAnim",J,a(t)),n(t,"playBtnState",K,a(t)),n(t,"timeSlider",Q,a(t)),n(t,"timeLabels",$,a(t)),n(t,"trackLabelRoot",ee,a(t)),n(t,"eventLabelRoot",te,a(t)),n(t,"drawCallLabel",ie,a(t)),n(t,"triangleLabel",ne,a(t)),n(t,"memoryLabel",ae,a(t)),n(t,"versionLabels",re,a(t)),n(t,"tipsNode",oe,a(t)),t._trackIndex=0,t._eventLabelNode=null,t}i(t,e);var l=t.prototype;return l.onLoad=function(){var e=this;this.versionLabels[0].string="1.0.0",this.versionLabels[1].string=b,this.versionLabels[2].string="3.8",this._eventLabelNode=this.eventLabelRoot.children[0],this._eventLabelNode.parent=null,this.node.on(c.EventType.MOUSE_WHEEL,this.onMouseWheel,this),this.node.on(c.EventType.TOUCH_MOVE,this.onTouchMove,this),this.timeSlider.node.on(c.EventType.SIZE_CHANGED,(function(){e.timeSlider._updateHandlePosition()})),window.skelAnim=this.skelAnim,this.setup(),this.updateGraphics(),this.viewNode.on(c.EventType.TRANSFORM_CHANGED,(function(t){t&f.SCALE&&e.updateGraphics()})),this.skelAnim.setEventListener(this.onTrackEvent.bind(this));var t=0,i=0,n=this.skelAnim.node.layer;g.on(v.EVENT_AFTER_RENDER,(function(){var a=g.root.batcher2D.batches.array.filter((function(e){return e.visFlags===n})),o=Math.ceil((t+a.length)/2);e.drawCallLabel.string=""+o,t=a.length,s.lerp(ue,le,se,k((o-1)/5,0,1)),e.drawCallLabel.color=ue;for(var l,u=0,c=r(a);!(l=c()).done;){u+=l.value.inputAssembler.drawInfo.indexCount}e.triangleLabel.string=""+Math.ceil((i+u)/3/2),i=u}))},l.onDestroy=function(){this.node.off(c.EventType.MOUSE_WHEEL,this.onMouseWheel,this),this.node.off(c.EventType.TOUCH_MOVE,this.onTouchMove,this)},l.setup=function(){var e,t;this.tipsNode.active=!this.skelAnim.skeletonData,this.skelAnim.paused=!1,null==(e=this.skelAnim._debugRenderer)||e.clear(),this.playBtnState.paused=!1,this.timeSlider.enabled=this.skelAnim.paused,this.timeSlider.progress=0,this.timeLabels.forEach((function(e){e.string="00"})),this.viewNode.scale=new w(1,1,1),this.viewNode.position=new w(0,0,0),this.skelAnim.node.scale=new w(1,1,1);for(var i,n=(null==(t=this.skelAnim.skeletonData)?void 0:t.textures)||[],a=0,o=r(n);!(i=o()).done;){var l=i.value;a+=l.width*l.height*4}this.memoryLabel.string=""+(a/1024/1024).toFixed(2)},l.onTrackEvent=function(e,t){var i=y(this._eventLabelNode);i.parent=this.eventLabelRoot,i.getComponent(_).string="Track["+e.trackIndex+"] ("+t.time.toFixed(2)+"s): "+t.data.name;var n=i.getComponent(L);n.opacity=0,S(i).to(1,{position:new w(0,120,0)},{easing:"sineOut"}).call((function(){i.destroy()})).start(),S(n).to(.1,{opacity:255}).delay(.8).to(.1,{opacity:0},{easing:"sineOut"}).start()},l.onMouseWheel=function(e){var t=e.getScrollX()||e.getScrollY(),i=k(this.viewNode.scale.x+5e-4*t,.01,10),n=this.node.getComponent(T).convertToNodeSpaceAR(new w(e.getUILocationX(),e.getUILocationY(),0)),a=this.viewNode.position.subtract(n);this.viewNode.position=n.add(a.multiplyScalar(i/this.viewNode.scale.x)),this.viewNode.scale=new w(i,i,1)},l.onTouchMove=function(e){var t=e.getUIDelta();this.viewNode.position=this.viewNode.position.add(new w(t.x,t.y,0))},l.updateGraphics=function(){this.graphics.clear(),this.graphics.lineWidth=2/(N.getScaleX()||2)/this.viewNode.scale.x,this.graphics.moveTo(-2e5,0),this.graphics.lineTo(2e5,0),this.graphics.moveTo(0,-2e5),this.graphics.lineTo(0,2e5),this.graphics.stroke()},l.getTrack=function(e){return this.skelAnim.getState().tracks[e]},l.onPauseBtnClick=function(){this.skelAnim.paused=!this.skelAnim.paused,this.timeSlider.enabled=this.skelAnim.paused,this.playBtnState.paused=this.skelAnim.paused},l.onSliderChange=function(){this.updateTimeLine()},l.updateTimeLine=function(){var e=this.skelAnim.getCurrent(this._trackIndex);if(e){var t=e.animation.duration*this.timeSlider.progress;e.trackTime=t,this.skelAnim._instance.updateAnimation(0),this.updateTime(this.timeSlider.progress<1?t:e.animation.duration)}else this.updateTime(0)},l.update=function(e){if(!this.skelAnim.paused){var t=this.skelAnim.getCurrent(this.trackIndex);if(t){var i=t.trackTime%t.animation.duration;if(!(t.trackTime>t.animation.duration)||t.loop){this.updateTime(i);var n=i/t.animation.duration;this.timeSlider.progress=Number.isNaN(n)?0:n}}}},l.updateTime=function(e){e=Number.isNaN(e)?0:e;var t=Math.floor(e/60),i=Math.floor(e%60),n=Math.floor(100*(e-60*t-i));this.timeLabels[0].string=t.toString().padStart(2,"0"),this.timeLabels[1].string=i.toString().padStart(2,"0"),this.timeLabels[2].string=n.toString().padStart(2,"0")},l.lateUpdate=function(e){this.updateTrackState();var t=this.skelAnim._debugRenderer;t&&(t.node.layer=E.Enum.UI_2D,t.lineWidth=3/(N.getScaleX()||2)/t.node.getWorldScale().x)},l.updateTrackState=function(){var e=this.skelAnim.getState();if(e)for(var t=e.tracks,i=0;i<t.length;i++){var n=t[i],a=this.trackLabelRoot.children[i].getComponent(_);n?(a.node.active=!0,a.string=i+": "+n.animation.name):a.node.active=!1,a.color=i===this._trackIndex?s.GREEN:s.WHITE}else this.trackLabelRoot.children.forEach((function(e){return e.active=!1}))},o(t,[{key:"trackIndex",get:function(){return this._trackIndex},set:function(e){this._trackIndex=e,this.updateTimeLine()}}]),t}(A)).prototype,"viewNode",[R],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),Z=t(Y.prototype,"graphics",[x],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),q=t(Y.prototype,"spriteBg",[M],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),J=t(Y.prototype,"skelAnim",[z],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),K=t(Y.prototype,"playBtnState",[D],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),Q=t(Y.prototype,"timeSlider",[O],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),$=t(Y.prototype,"timeLabels",[B],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),ee=t(Y.prototype,"trackLabelRoot",[P],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),te=t(Y.prototype,"eventLabelRoot",[U],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),ie=t(Y.prototype,"drawCallLabel",[G],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),ne=t(Y.prototype,"triangleLabel",[H],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),ae=t(Y.prototype,"memoryLabel",[V],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),re=t(Y.prototype,"versionLabels",[W],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),oe=t(Y.prototype,"tipsNode",[F],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),X=Y))||X));l._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});