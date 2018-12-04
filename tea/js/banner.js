
    (function () {
        var oBanner = document.getElementById("banner");
        var oImgs = document.getElementById("banner").getElementsByTagName("img");
        var n = 0;
        setInterval(show, 1000);
        function show() {
            for (let i = 0; i < oImgs.length; i++) {
                oImgs[i].className = "";
            }
            oImgs[n].className = "on";
            n++;
            if (n == oImgs.length) n = 0;
        }
    }
    )();
