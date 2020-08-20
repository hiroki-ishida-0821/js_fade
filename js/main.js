'use strict'

function clFadeUp() {

    var fades = document.querySelectorAll('.clFadeUp,.clFadeDown,.clFadeSlide');
    if(!fades) return; // 要素がなかったら処理をキャンセル


     var showTiming = window.innerHeight > 768 ? 200 : 80; // 要素が出てくるタイミングはここで調整
     var scrollY = window.pageYOffset; //スクロール量を取得
     var windowH = window.innerHeight; //ブラウザウィンドウのビューポート(viewport)の高さを取得

    for(var i=0;i<fades.length;i++) {
        var elemClientRect = fades[i].getBoundingClientRect();
        var elemY = scrollY + elemClientRect.top;
        if(scrollY + windowH - showTiming > elemY) {
        fades[i].classList.add('apper');
        } else if(scrollY + windowH < elemY) {
        // 上にスクロールして再度非表示にする場合はこちらを記述
        fades[i].classList.remove('apper');
        }
    }
}
clFadeUp();
window.addEventListener('scroll', clFadeUp);

