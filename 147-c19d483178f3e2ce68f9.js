(window.webpackJsonp=window.webpackJsonp||[]).push([[147],{"4yiN":function(e,t,n){"use strict";n.r(t),n.d(t,"setupTypeScript",(function(){return N})),n.d(t,"setupJavaScript",(function(){return A})),n.d(t,"getJavaScriptWorker",(function(){return E})),n.d(t,"getTypeScriptWorker",(function(){return L}));var r,o,i=function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function a(e){try{u(r.next(e))}catch(t){i(t)}}function s(e){try{u(r.throw(e))}catch(t){i(t)}}function u(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,s)}u((r=r.apply(e,t||[])).next())}))},a=function(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=a.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(s){i=[6,s],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}},s=function(){function e(e,t){var n=this;this._modeId=e,this._defaults=t,this._worker=null,this._idleCheckInterval=setInterval((function(){return n._checkIfIdle()}),3e4),this._lastUsedTime=0,this._configChangeListener=this._defaults.onDidChange((function(){return n._stopWorker()})),this._updateExtraLibsToken=0,this._extraLibsChangeListener=this._defaults.onDidExtraLibsChange((function(){return n._updateExtraLibs()}))}return e.prototype._stopWorker=function(){this._worker&&(this._worker.dispose(),this._worker=null),this._client=null},e.prototype.dispose=function(){clearInterval(this._idleCheckInterval),this._configChangeListener.dispose(),this._extraLibsChangeListener.dispose(),this._stopWorker()},e.prototype._updateExtraLibs=function(){return i(this,void 0,void 0,(function(){var e,t;return a(this,(function(n){switch(n.label){case 0:return this._worker?(e=++this._updateExtraLibsToken,[4,this._worker.getProxy()]):[2];case 1:return t=n.sent(),this._updateExtraLibsToken!==e?[2]:(t.updateExtraLibs(this._defaults.getExtraLibs()),[2])}}))}))},e.prototype._checkIfIdle=function(){if(this._worker){var e=this._defaults.getWorkerMaxIdleTime(),t=Date.now()-this._lastUsedTime;e>0&&t>e&&this._stopWorker()}},e.prototype._getClient=function(){var e=this;if(this._lastUsedTime=Date.now(),!this._client){this._worker=monaco.editor.createWebWorker({moduleId:"vs/language/typescript/tsWorker",label:this._modeId,createData:{compilerOptions:this._defaults.getCompilerOptions(),extraLibs:this._defaults.getExtraLibs()}});var t=this._worker.getProxy();this._defaults.getEagerModelSync()&&(t=t.then((function(t){return e._worker.withSyncedResources(monaco.editor.getModels().filter((function(t){return t.getModeId()===e._modeId})).map((function(e){return e.uri})))}))),this._client=t}return this._client},e.prototype.getLanguageServiceWorker=function(){for(var e,t=this,n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return this._getClient().then((function(t){e=t})).then((function(e){return t._worker.withSyncedResources(n)})).then((function(t){return e}))},e}(),u=(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),c=function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function a(e){try{u(r.next(e))}catch(t){i(t)}}function s(e){try{u(r.throw(e))}catch(t){i(t)}}function u(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,s)}u((r=r.apply(e,t||[])).next())}))},l=function(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=a.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(s){i=[6,s],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}},p=monaco.Uri,f=monaco.Range;function m(e,t,n){if(void 0===n&&(n=0),"string"==typeof e)return e;if(void 0===e)return"";var r="";if(n){r+=t;for(var o=0;o<n;o++)r+="  "}if(r+=e.messageText,n++,e.next)for(var i=0,a=e.next;i<a.length;i++){r+=m(a[i],t,n)}return r}function g(e){return e?e.map((function(e){return e.text})).join(""):""}!function(e){e[e.None=0]="None",e[e.Block=1]="Block",e[e.Smart=2]="Smart"}(o||(o={}));var d=function(){function e(e){this._worker=e}return e.prototype._positionToOffset=function(e,t){return monaco.editor.getModel(e).getOffsetAt(t)},e.prototype._offsetToPosition=function(e,t){return monaco.editor.getModel(e).getPositionAt(t)},e.prototype._textSpanToRange=function(e,t){var n=this._offsetToPosition(e,t.start),r=this._offsetToPosition(e,t.start+t.length);return{startLineNumber:n.lineNumber,startColumn:n.column,endLineNumber:r.lineNumber,endColumn:r.column}},e}(),h=function(e){function t(t,n,r){var o=e.call(this,r)||this;o._defaults=t,o._selector=n,o._disposables=[],o._listener=Object.create(null);var i=function(e){if(e.getModeId()===n){var t,r=e.onDidChangeContent((function(){clearTimeout(t),t=setTimeout((function(){return o._doValidate(e.uri)}),500)}));o._listener[e.uri.toString()]={dispose:function(){r.dispose(),clearTimeout(t)}},o._doValidate(e.uri)}},a=function(e){monaco.editor.setModelMarkers(e,o._selector,[]);var t=e.uri.toString();o._listener[t]&&(o._listener[t].dispose(),delete o._listener[t])};o._disposables.push(monaco.editor.onDidCreateModel(i)),o._disposables.push(monaco.editor.onWillDisposeModel(a)),o._disposables.push(monaco.editor.onDidChangeModelLanguage((function(e){a(e.model),i(e.model)}))),o._disposables.push({dispose:function(){for(var e=0,t=monaco.editor.getModels();e<t.length;e++){var n=t[e];a(n)}}});var s=function(){for(var e=0,t=monaco.editor.getModels();e<t.length;e++){var n=t[e];a(n),i(n)}};return o._disposables.push(o._defaults.onDidChange(s)),o._disposables.push(o._defaults.onDidExtraLibsChange(s)),monaco.editor.getModels().forEach(i),o}return u(t,e),t.prototype.dispose=function(){this._disposables.forEach((function(e){return e&&e.dispose()})),this._disposables=[]},t.prototype._doValidate=function(e){var t=this;this._worker(e).then((function(n){if(!monaco.editor.getModel(e))return null;var r=[],o=t._defaults.getDiagnosticsOptions(),i=o.noSyntaxValidation,a=o.noSemanticValidation;return i||r.push(n.getSyntacticDiagnostics(e.toString())),a||r.push(n.getSemanticDiagnostics(e.toString())),Promise.all(r)})).then((function(n){if(!n||!monaco.editor.getModel(e))return null;var r=n.reduce((function(e,t){return t.concat(e)}),[]).map((function(n){return t._convertDiagnostics(e,n)}));monaco.editor.setModelMarkers(monaco.editor.getModel(e),t._selector,r)})).then(void 0,(function(e){console.error(e)}))},t.prototype._convertDiagnostics=function(e,t){var n=this._offsetToPosition(e,t.start),r=n.lineNumber,o=n.column,i=this._offsetToPosition(e,t.start+t.length),a=i.lineNumber,s=i.column;return{severity:monaco.MarkerSeverity.Error,startLineNumber:r,startColumn:o,endLineNumber:a,endColumn:s,message:m(t.messageText,"\n")}},t}(d),v=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return u(t,e),Object.defineProperty(t.prototype,"triggerCharacters",{get:function(){return["."]},enumerable:!0,configurable:!0}),t.prototype.provideCompletionItems=function(e,n,r,o){var i=e.getWordUntilPosition(n),a=new f(n.lineNumber,i.startColumn,n.lineNumber,i.endColumn),s=e.uri,u=this._positionToOffset(s,n);return this._worker(s).then((function(e){return e.getCompletionsAtPosition(s.toString(),u)})).then((function(r){if(r)return{suggestions:r.entries.map((function(r){var o=a;if(r.replacementSpan){var i=e.getPositionAt(r.replacementSpan.start),u=e.getPositionAt(r.replacementSpan.start+r.replacementSpan.length);o=new f(i.lineNumber,i.column,u.lineNumber,u.column)}return{uri:s,position:n,range:o,label:r.name,insertText:r.name,sortText:r.sortText,kind:t.convertKind(r.kind)}}))}}))},t.prototype.resolveCompletionItem=function(e,n,r,o){var i=this,a=r,s=a.uri,u=a.position;return this._worker(s).then((function(e){return e.getCompletionEntryDetails(s.toString(),i._positionToOffset(s,u),a.label)})).then((function(e){return e?{uri:s,position:u,label:e.name,kind:t.convertKind(e.kind),detail:g(e.displayParts),documentation:{value:g(e.documentation)}}:a}))},t.convertKind=function(e){switch(e){case x.primitiveType:case x.keyword:return monaco.languages.CompletionItemKind.Keyword;case x.variable:case x.localVariable:return monaco.languages.CompletionItemKind.Variable;case x.memberVariable:case x.memberGetAccessor:case x.memberSetAccessor:return monaco.languages.CompletionItemKind.Field;case x.function:case x.memberFunction:case x.constructSignature:case x.callSignature:case x.indexSignature:return monaco.languages.CompletionItemKind.Function;case x.enum:return monaco.languages.CompletionItemKind.Enum;case x.module:return monaco.languages.CompletionItemKind.Module;case x.class:return monaco.languages.CompletionItemKind.Class;case x.interface:return monaco.languages.CompletionItemKind.Interface;case x.warning:return monaco.languages.CompletionItemKind.File}return monaco.languages.CompletionItemKind.Property},t}(d),b=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.signatureHelpTriggerCharacters=["(",","],t}return u(t,e),t.prototype.provideSignatureHelp=function(e,t,n){var r=this,o=e.uri;return this._worker(o).then((function(e){return e.getSignatureHelpItems(o.toString(),r._positionToOffset(o,t))})).then((function(e){if(e){var t={activeSignature:e.selectedItemIndex,activeParameter:e.argumentIndex,signatures:[]};return e.items.forEach((function(e){var n={label:"",parameters:[]};n.label+=g(e.prefixDisplayParts),e.parameters.forEach((function(t,r,o){var i=g(t.displayParts),a={label:i,documentation:g(t.documentation)};n.label+=i,n.parameters.push(a),r<o.length-1&&(n.label+=g(e.separatorDisplayParts))})),n.label+=g(e.suffixDisplayParts),t.signatures.push(n)})),{value:t,dispose:function(){}}}}))},t}(d),y=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return u(t,e),t.prototype.provideHover=function(e,t,n){var r=this,o=e.uri;return this._worker(o).then((function(e){return e.getQuickInfoAtPosition(o.toString(),r._positionToOffset(o,t))})).then((function(e){if(e){var t=g(e.documentation),n=e.tags?e.tags.map((function(e){var t="*@"+e.name+"*";return e.text?t+(e.text.match(/\r\n|\n/g)?" \n"+e.text:" - "+e.text):t})).join("  \n\n"):"",i=g(e.displayParts);return{range:r._textSpanToRange(o,e.textSpan),contents:[{value:"```js\n"+i+"\n```\n"},{value:t+(n?"\n\n"+n:"")}]}}}))},t}(d),_=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return u(t,e),t.prototype.provideDocumentHighlights=function(e,t,n){var r=this,o=e.uri;return this._worker(o).then((function(e){return e.getOccurrencesAtPosition(o.toString(),r._positionToOffset(o,t))})).then((function(e){if(e)return e.map((function(e){return{range:r._textSpanToRange(o,e.textSpan),kind:e.isWriteAccess?monaco.languages.DocumentHighlightKind.Write:monaco.languages.DocumentHighlightKind.Text}}))}))},t}(d),S=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return u(t,e),t.prototype.provideDefinition=function(e,t,n){var r=this,o=e.uri;return this._worker(o).then((function(e){return e.getDefinitionAtPosition(o.toString(),r._positionToOffset(o,t))})).then((function(e){if(e){for(var t=[],n=0,o=e;n<o.length;n++){var i=o[n],a=p.parse(i.fileName);monaco.editor.getModel(a)&&t.push({uri:a,range:r._textSpanToRange(a,i.textSpan)})}return t}}))},t}(d),w=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return u(t,e),t.prototype.provideReferences=function(e,t,n,r){var o=this,i=e.uri;return this._worker(i).then((function(e){return e.getReferencesAtPosition(i.toString(),o._positionToOffset(i,t))})).then((function(e){if(e){for(var t=[],n=0,r=e;n<r.length;n++){var i=r[n],a=p.parse(i.fileName);monaco.editor.getModel(a)&&t.push({uri:a,range:o._textSpanToRange(a,i.textSpan)})}return t}}))},t}(d),k=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return u(t,e),t.prototype.provideDocumentSymbols=function(e,t){var n=this,r=e.uri;return this._worker(r).then((function(e){return e.getNavigationBarItems(r.toString())})).then((function(e){if(e){var t=function(e,o,i){var a={name:o.text,detail:"",kind:T[o.kind]||monaco.languages.SymbolKind.Variable,range:n._textSpanToRange(r,o.spans[0]),selectionRange:n._textSpanToRange(r,o.spans[0]),tags:[],containerName:i};if(o.childItems&&o.childItems.length>0)for(var s=0,u=o.childItems;s<u.length;s++){var c=u[s];t(e,c,a.name)}e.push(a)},o=[];return e.forEach((function(e){return t(o,e)})),o}}))},t}(d),x=function(){function e(){}return e.unknown="",e.keyword="keyword",e.script="script",e.module="module",e.class="class",e.interface="interface",e.type="type",e.enum="enum",e.variable="var",e.localVariable="local var",e.function="function",e.localFunction="local function",e.memberFunction="method",e.memberGetAccessor="getter",e.memberSetAccessor="setter",e.memberVariable="property",e.constructorImplementation="constructor",e.callSignature="call",e.indexSignature="index",e.constructSignature="construct",e.parameter="parameter",e.typeParameter="type parameter",e.primitiveType="primitive type",e.label="label",e.alias="alias",e.const="const",e.let="let",e.warning="warning",e}(),T=Object.create(null);T[x.module]=monaco.languages.SymbolKind.Module,T[x.class]=monaco.languages.SymbolKind.Class,T[x.enum]=monaco.languages.SymbolKind.Enum,T[x.interface]=monaco.languages.SymbolKind.Interface,T[x.memberFunction]=monaco.languages.SymbolKind.Method,T[x.memberVariable]=monaco.languages.SymbolKind.Property,T[x.memberGetAccessor]=monaco.languages.SymbolKind.Property,T[x.memberSetAccessor]=monaco.languages.SymbolKind.Property,T[x.variable]=monaco.languages.SymbolKind.Variable,T[x.const]=monaco.languages.SymbolKind.Variable,T[x.localVariable]=monaco.languages.SymbolKind.Variable,T[x.variable]=monaco.languages.SymbolKind.Variable,T[x.function]=monaco.languages.SymbolKind.Function,T[x.localFunction]=monaco.languages.SymbolKind.Function;var C,I,P=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return u(t,e),t._convertOptions=function(e){return{ConvertTabsToSpaces:e.insertSpaces,TabSize:e.tabSize,IndentSize:e.tabSize,IndentStyle:o.Smart,NewLineCharacter:"\n",InsertSpaceAfterCommaDelimiter:!0,InsertSpaceAfterSemicolonInForStatements:!0,InsertSpaceBeforeAndAfterBinaryOperators:!0,InsertSpaceAfterKeywordsInControlFlowStatements:!0,InsertSpaceAfterFunctionKeywordForAnonymousFunctions:!0,InsertSpaceAfterOpeningAndBeforeClosingNonemptyParenthesis:!1,InsertSpaceAfterOpeningAndBeforeClosingNonemptyBrackets:!1,InsertSpaceAfterOpeningAndBeforeClosingTemplateStringBraces:!1,PlaceOpenBraceOnNewLineForControlBlocks:!1,PlaceOpenBraceOnNewLineForFunctions:!1}},t.prototype._convertTextChanges=function(e,t){return{text:t.newText,range:this._textSpanToRange(e,t.span)}},t}(d),O=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return u(t,e),t.prototype.provideDocumentRangeFormattingEdits=function(e,t,n,r){var o=this,i=e.uri;return this._worker(i).then((function(e){return e.getFormattingEditsForRange(i.toString(),o._positionToOffset(i,{lineNumber:t.startLineNumber,column:t.startColumn}),o._positionToOffset(i,{lineNumber:t.endLineNumber,column:t.endColumn}),P._convertOptions(n))})).then((function(e){if(e)return e.map((function(e){return o._convertTextChanges(i,e)}))}))},t}(P),K=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return u(t,e),Object.defineProperty(t.prototype,"autoFormatTriggerCharacters",{get:function(){return[";","}","\n"]},enumerable:!0,configurable:!0}),t.prototype.provideOnTypeFormattingEdits=function(e,t,n,r,o){var i=this,a=e.uri;return this._worker(a).then((function(e){return e.getFormattingEditsAfterKeystroke(a.toString(),i._positionToOffset(a,t),n,P._convertOptions(r))})).then((function(e){if(e)return e.map((function(e){return i._convertTextChanges(a,e)}))}))},t}(P),D=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return u(t,e),t.prototype.provideRenameEdits=function(e,t,n,r){return c(this,void 0,void 0,(function(){var r,o,i,a,s,u,c,p,f,m,g,d;return l(this,(function(l){switch(l.label){case 0:return r=e.uri,o=r.toString(),i=this._positionToOffset(r,t),[4,this._worker(r)];case 1:return[4,(a=l.sent()).getRenameInfo(o,i,{allowRenameOfImportPath:!1})];case 2:if(!1===(s=l.sent()).canRename)return[2,{edits:[],rejectReason:s.localizedErrorMessage}];if(void 0!==s.fileToRename)throw new Error("Renaming files is not supported.");return[4,a.findRenameLocations(o,i,!1,!1,!1)];case 3:for(u=l.sent(),c={},p=[],f=0,m=u;f<m.length;f++)(g=m[f]).fileName in c||(d={edits:[],resource:monaco.Uri.parse(g.fileName)},c[g.fileName]=d,p.push(d)),c[g.fileName].edits.push({range:this._textSpanToRange(r,g.textSpan),text:n});return[2,{edits:p}]}}))}))},t}(d);function N(e){I=R(e,"typescript")}function A(e){C=R(e,"javascript")}function E(){return new Promise((function(e,t){if(!C)return t("JavaScript not registered!");e(C)}))}function L(){return new Promise((function(e,t){if(!I)return t("TypeScript not registered!");e(I)}))}function R(e,t){var n=new s(t,e),r=function(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];return n.getLanguageServiceWorker.apply(n,[e].concat(t))};return monaco.languages.registerCompletionItemProvider(t,new v(r)),monaco.languages.registerSignatureHelpProvider(t,new b(r)),monaco.languages.registerHoverProvider(t,new y(r)),monaco.languages.registerDocumentHighlightProvider(t,new _(r)),monaco.languages.registerDefinitionProvider(t,new S(r)),monaco.languages.registerReferenceProvider(t,new w(r)),monaco.languages.registerDocumentSymbolProvider(t,new k(r)),monaco.languages.registerDocumentRangeFormattingEditProvider(t,new O(r)),monaco.languages.registerOnTypeFormattingEditProvider(t,new K(r)),monaco.languages.registerRenameProvider(t,new D(r)),new h(e,t,r),r}}}]);
//# sourceMappingURL=147-c19d483178f3e2ce68f9.js.map