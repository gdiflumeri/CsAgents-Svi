var ModelData={FindDB:function(e,t,a,n){sap.ui.core.BusyIndicator.show();var r="model"+e.getId(),o=new Array;if("string"==typeof n){var d=[];d[0]=n}else var d=n;AppDB.transaction(function(e){e.executeSql("SELECT * FROM "+t+" WHERE "+a,d,function(e,t){for(var a=0;a<t.rows.length;a++)o.push(t.rows.item(a));window[r].setData(o),sap.ui.core.BusyIndicator.hide()},null)})},Find:function(e,t,a,n){var r="model"+e.getId(),o=window[r].getData(),d=new Array;if("undefined"==typeof n)for(var i,w=o.length;w--;)(i=o[w])&&i[t]==a&&d.push(i);if("Contains"==n)for(var i,w=o.length;w--;)(i=o[w])&&-1!=i[t].indexOf(a)&&d.push(i);return d},Delete:function(e,t,a){for(var n,r="model"+e.getId(),o=window[r].getData(),d=o.length;d--;)(n=o[d])&&n[t]==a&&o.splice(d,1);window[r].setData(o)},UpdateField:function(e,t,a,n,r){for(var o,d="model"+e.getId(),i=window[d].getData(),w=i.length;w--;)(o=i[w])&&o[t]==a&&(o[n]=r);window[d].setData(i)},Add:function(e,t){var a="model"+e.getId();if("undefined"==typeof window[a].getData())var n=new Array;else if(window[a].getData().length)var n=window[a].getData();else var n=new Array;n.push(t),window[a].setData(n)},AddArray:function(e,t){var a="model"+e.getId();if("undefined"==typeof window[a].getData())var n=new Array;else if(window[a].getData().length)var n=window[a].getData();else var n=new Array;$.each(t,function(e,t){n.push(t)}),window[a].setData(n)},Update:function(e,t,a,n){var r="model"+e.getId(),o=window[r].getData(),d=!1;if("undefined"==typeof o)var o=new Array;for(var i,w=o.length;w--;)(i=o[w])&&i[t]==a&&(o[w]=n,d=!0);1==d?window[r].setData(o):ModelData.Add(e,n)},UpdateArray:function(e,t,a){var n="model"+e.getId(),r=window[n].oData;if("undefined"==typeof r.length)var r=new Array;var o=!1;$.each(a,function(e,a){for(o=!1,e=0;e<r.length;e++)r[e][t]===a[t]&&(r[e]=a,o=!0);o===!1&&r.push(a)}),window[n].setData(r)},genID:function(){var e=(new Date).getTime(),t="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(t){var a=(e+16*Math.random())%16|0;return e=Math.floor(e/16),("x"==t?a:7&a|8).toString(16)});return t}};