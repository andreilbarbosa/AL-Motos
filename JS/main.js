$(document).ready(function(){
    $("#carrossel").slick({
        autoplay: true
    })

    $('.menu-hamburguer').click(function(){
        $('nav').slideToggle(0o400);
    })

    $('#buttonSobre').click(function(){
        const destinoSobre = $('#sobre');

        $('html').animate({
            scrollTop: destinoSobre.offset().top
        }, 0o700)
    })

    $('#buttonPromo').click(function(){
        const destinoPromo = $('#promo');

        $('html').animate({
            scrollTop: destinoPromo.offset().top
        }, 0o700)
    })

    $('#buttonContato').click(function(){
        const destinoContato = $('#contato');

        $('html').animate({
            scrollTop: destinoContato.offset().top
        }, 0o700)
    })

    $('#telefone').mask('(00) 00000-0000')

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email:{
                required: true,
                email: true
            },
            telefone: {
                required:true
            },
            interesse: {
                required: true
            },
        },
        messages: {
            nome: 'Obrigatório preencher seu nome.',
            email: 'Obrigatório indicar seu email.',
            telefone: 'Obrigatório indicar seu telefone.',
            interesse: 'Por favor, diga qual veículo é de seu interesse.'
        },
        submitHandler: function(form){
            console.log(form)
        },
        invalidHandler: function(evento, validar){
            let camposVazios = validar.numberOfInvalids();
            if(camposVazios){
                alert(`Você tem ${camposVazios} campos invalidos.`)
            }
        }
    })
    
    $('.veiculosPromo button').click(function(){
        const destino = $('#contato');
        const veiculo = $(this).parent().find('h4').text();

        $('html').animate({
            scrollTop: destino.offset().top
        }, 0o700)

        $('#interesse').val(veiculo);
    })
})