window.addEventListener('mouseout', function (event) {
    event.stopPropagation();
}, true);
document.querySelector('iframe').contentDocument.querySelector('iframe').contentDocument.querySelector('video').playbackRate=16;
var doc=$("#iframe").contents().find('iframe').contents();
if(doc.find('.vjs-play-control').eq(0).text()=="播放")setTimeout("var doc=$('#iframe').contents().find('iframe').contents();doc.find('.vjs-play-control').eq(0).click();",100);
// if(doc.find('.vjs-vol-3').eq(0)!=null)doc.find('.vjs-vol-3').eq(0).click();  静音选项


var interval = setInterval(function(){
    l = document.querySelector('iframe').contentDocument.querySelector('iframe').contentDocument.querySelectorAll("[name='ans-videoquiz-opt']");
    if (l.length != 0){
        if(l[0].value==="true"){
            l[0].checked=true; 
        }
        else{
            l[1].checked=true;
        };
        document.querySelector('iframe').contentDocument.querySelector('iframe').contentDocument.querySelectorAll("[class='ans-videoquiz-submit']")[0].click();
        clearInterval(interval);
    };
    return;
    }, 3000);