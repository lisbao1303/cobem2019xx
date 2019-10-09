$(document).ready(function () {
    $('.menu-toggle').click(function () {
        $('#navp').toggleClass('active')
        $("#conteudo").toggleClass('active');
    })
    $('.conteudo').click(function () {
        var t = $(document).width() + 17;
        if (t <= 991) {
            if ($('#navp').hasClass("active")) {
                $('#navp').toggleClass('active');
                $("#conteudo").toggleClass('active');
            }
        }
    })
})
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
        navigator.serviceWorker.register('sw.js').then(function (registration) {
            // Registration was successful
            console.log('ServiceWorker registration successful with scope: ', registration.scope);
        }, function (err) {
            // registration failed :(
            console.log('ServiceWorker registration failed: ', err);
        });
    });
}
function executar(){
    var texto= document.getElementById('texto').value;
    var lista=document.getElementById('historico');
    var adicionar=true;
    var opt= document.createElement('option');
        for(i=0;i<lista.options.length;i++){
            if(texto==lista.options[i].value){
                adicionar=false;
            }
        }
        if(adicionar==true){
            opt.value=texto;
            lista.appendChild(opt);
        }
    }