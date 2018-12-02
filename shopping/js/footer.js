(function(){
        let oBtn = document.getElementById('btn');
        let fLink = document.getElementById('fLink').getElementsByTagName('li')[1];
        oBtn.onclick=function(){
            fLink.style.height='auto';
            oBtn.style.display='none';
        }
})();


