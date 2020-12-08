$(document).ready(function() {

    //MOSTRANDO MENU
    $('#button-menu').click(function() {
        if ($('#button-menu').attr('class') == 'fa fa-bars') {

            $('#button-menu').removeClass('fa fa-bars').addClass('fa fa-close');
            $('.navegacion .menu').css({ 'left': '0px' });
            $('.navegacion').css({ 'width': '100%', 'background': 'rgba(0,0,0,.3)' })


        } else {
            $('#button-menu').removeClass('fa fa-close').addClass('fa fa-bars');
            $('.navegacion .menu').css({ 'left': '-320px' });
            $('.navegacion .submenu').css({ 'left': '-320px' });
            $('.navegacion').css({ 'width': '0%', 'background': 'rgba(0,0,0,.0)' })

        }
    });
    // MOSTRA SUB_MENU
    $('.navegacion .menu > .item-submenu a').click(function() {
        var positionMenu = $(this).parent().attr('menu');
        $('.item-submenu[menu=' + positionMenu + '] .submenu').css({ 'left': '0px' });
        $('.item-submenu[menu=' + positionMenu + '] .submenu .sube').css({ 'left': '-320px' });



        $('.item-submenu .sube > a').click(function() {
            var positionSubMenu = $(this).parent().attr('submenu');
            console.log(`positionSubMenu:${positionSubMenu}`);

            $('.item-submenu .sube[submenu=' + positionSubMenu + '] .submenu').css({ 'left': '0px' });



            // $('.item-submenu[submenu=' + positionSubMenu + '] .submenu .sube').css({ 'left': '0px' });





        });
    });

    //OCULTAR SUB-MENU
    $('.navegacion .submenu li.go-back').click(function() {
        $(this).parent().css({ 'left': '-320px' })

    });

    // MOSTRAR SUB - SUB - MENU



});