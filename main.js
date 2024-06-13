$(document).ready(function(){
    
    $('header button').click(function() {
        $('form').slideDown();
    })

    $('#botao-cancelar').click(function() {
        $('form').slideUp();
    })

    $('form').on('submit',function(e) {
        e.preventDefault();
        const enderecoDaNovaImagem = $('#endereco-imagem-nova').val();
        const novoItem = $('<li style= "display: none"> </li>');
        $(`<img src="${enderecoDaNovaImagem}" />`).appendTo(novoItem);
        $(`
            <div class= "overlay-imagem-link">
            <a href = "${enderecoDaNovaImagem}" target= "_blank" title =" Ver imagem em tamanho rela">
                Ver imagem em tamanho real 
                </a>
            </div>
            `).appendTo(novoItem);
            $(novoItem).appendTo('ul'); 
            $(novoItem).fadeIn(1000);  /*animação para surgrir a imagem para isso colocamos o display none la no li*/
            $('#endereco-imagem-nova').val('');
    })


    })
