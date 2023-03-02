function enviarmsg(){
    if ($('#msgtxt').val()){
        $("#caixachat").append('<div class="containermsg"><div class="msgdir">'+$('#msgtxt').val()+'</div></div>');
        $('#msgtxt').val("");
        $('#caixachat').scrollTop($('#caixachat')[0].scrollHeight);
        setTimeout(respostateste, 600);
    } 
}

function respostateste() {
    const res = [];
    res[0] = "[teste de resposta] Olá!";

    $("#caixachat").append('<div class="containermsg"><div class="msgesq">'+(res[0])+'</div></div>');
    $('#caixachat').scrollTop($('#caixachat')[0].scrollHeight);
}

$('#msgtxt').keypress(function(event){
    var key= event.keyCode  || event.which;
    if (key==13){
        event.preventDefault();
        //previne que o texto va pra baixo 
        enviarmsg();
    }
});

