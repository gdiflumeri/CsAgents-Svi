var PDFView={dataPDF:"",numPages:0,currPage:1,scale:1,LoadScroller:function(){if(sap.ui.Device.system.desktop!==!0){var e=document.getElementById("pdfWrapper");pdfScroll=new IScroll(e,{zoom:!0,scrollbars:!0,scrollX:!0,scrollY:!0})}},ZoomOut:function(){PDFView.scale=parseFloat(PDFView.scale)+.25,PDFView.Render()},ZoomIn:function(){PDFView.scale=parseFloat(PDFView.scale)-.25,PDFView.Render()},MakeBinary:function(e){var t=window.atob(e),n=t.length,r=new Uint8Array(n);for(i=0;i<n;i++)r[i]=t.charCodeAt(i);return r},RenderPage:function(e,t,n,i){t.getPage(n).then(function(t){var r=document.getElementById("pdfWrapper").offsetWidth-30,a=t.getViewport(r/t.getViewport(PDFView.scale).width),d=(a.width,a.height),o=document.getElementById("pdfScroller");o.style.width=a.width+30+"px";var l=document.createElement("div");l.id="Page"+n,l.className="pdfPage",l.style.width=r+"px",l.style.height=d+"px",e.appendChild(l);var c=document.createElement("canvas"),s=c.getContext("2d"),w=(r-a.width)/2;0>w&&(w=0),c.width=a.width,c.height=d,c.style.left=w+"px",l.appendChild(c);var P={canvasContext:s,viewport:a};t.render(P).then(i);var p=document.createElement("div");l.appendChild(p)})},Show:function(e){PDFView.dataPDF=e,PDFView.Render(),PDFView.LoadScroller()},AfterRender:function(){sap.ui.Device.system.desktop!==!0&&pdfScroll.refresh()},Render:function(){var e=document.getElementById("pdfScroller");if(e)for(;e.hasChildNodes();)e.removeChild(e.lastChild);var t=PDFView.MakeBinary(PDFView.dataPDF);PDFJS.getDocument(t).then(function(e){var t=document.getElementById("pdfScroller"),n=1;PDFView.numPages=e.numPages,PDFView.RenderPage(t,e,n++,function i(){return n>e.numPages?void PDFView.AfterRender():void PDFView.RenderPage(t,e,n++,i)})})}};