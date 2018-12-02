(function () {
    let oBanner = document.getElementById("banner");
    let oLis = document.getElementById("banner").getElementsByTagName("li");
    let oImgs = document.getElementById("banner").getElementsByTagName("img");
    let n = 0;
    function go(){
        timer=setInterval(show, 2000);
    }
    go();
    function show() {
        for (let i = 0; i < oLis.length; i++) {
            oLis[i].className = "";
            oImgs[i].style.transform='';
        }

        oLis[n].className = "on";
        oImgs[n].style.transform='translateX(30px)';
        n++;
        if (n == oLis.length) n = 0;
    }
    oBanner.onmouseover=function(){
        clearInterval(timer);
    }
    oBanner.onmouseout=function(){
        go();
    }
}
)();