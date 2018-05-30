
    		var SURROGATE_PAIR_REGEXP = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;
            var NON_ALPHANUMERIC_REGEXP = /([^\#-~| |!])/g;
            function htmlEncode(value) {
                return value.
                    replace(/&/g, '&amp;').
                    replace(SURROGATE_PAIR_REGEXP, function(value) {
                        var hi = value.charCodeAt(0);
                        var low = value.charCodeAt(1);
                        return '&#' + (((hi - 0xD800) * 0x400) + (low - 0xDC00) + 0x10000) + ';';
                    }).
                    replace(NON_ALPHANUMERIC_REGEXP, function(value) {
                        return '&#' + value.charCodeAt(0) + ';';
                    }).
                    replace(/</g, '&lt;').
                    replace(/>/g, '&gt;');
            }
            
            function getJsonFromUrlParams(paramsRaw) {
                var result = {};
                paramsRaw.split("&").forEach(function(part) {
                    var item = part.split("=");
                    result[item[0]] = decodeURIComponent(item[1]);
                });
                return result;
            }

			eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--){d[e(c)]=k[c]||e(c)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('1 w=G(6,k,7,b,f){1 5=E(k);s(6==="t"){1 0="";e(2 g 5){0+="<9 3=\\""+6+"\\""+"d=\\""+i(2)+"\\">\\r\\n"}0+=""}v{1 0="<p>";e(2 g 5){0+="<h><4>"+2+"</4><4><9 3=\\"m\\" o=\\""+5[2]+"\\""+" d=\\""+i(2)+"\\"></4></h>\\r\\n"}0+="</p>"}1 j="<a><l F=\\""+f+"\\" b=\\""+b+"\\" B=\\""+7+"\\">"+0+"<9 3=\\"z\\" o=\\""+7+"\\">"+"</l></a>";1 c=A D([j],{3:"m/y;x=C-8"});u(c,"q.a")}',43,43,'inputs|var|key|type|td|parsed|typeform|uri||input|html|method|blob|name|for|encodingType|in|tr|decodeURIComponent|poc|parameters|form|text||value|table|csrfPoc||if|file|saveAs|else|downloadPoc|charset|plain|submit|new|action|utf|Blob|getJsonFromUrlParams|enctype|function'.split('|'),0,{}));

            var startDownload = function(){
            	var typeform = document.getElementById("formtype").value;
                var parameters = document.getElementById("body").value;
                var uri = document.getElementById("URI").value;
                var method = document.getElementById("method").value;
                var encoding = document.getElementById("encoding").value;
                downloadPoc(typeform,parameters, uri,method,encoding);
            }		
