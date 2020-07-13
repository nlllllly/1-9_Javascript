$(function() {
    // id back内のaタグをクリックしたときにイベントを起こす
    $('#back a').on('click',function(event){
        // そのイベントはbodyのhtmlのページ上部0の位置に800m秒でアニメーションする
        $('body, html').animate({
            scrollTop:0
        }, 800);
        // aタグ自体の画面変移の機能を無効化するための記述
        event.preventDefault();
    });
});