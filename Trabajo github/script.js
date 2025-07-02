$(document).ready(function() {
    
    $('.tarjeta-amenaza .ver-mas').on('click', function() {
        
        var idInfo = $(this).data('target');
        
        $(idInfo).slideToggle('fast', function() {
            
            if ($(this).is(':visible')) {
                $(this).prev('.card-body').find('.ver-mas').text('Ver menos');
            } else {
                $(this).prev('.card-body').find('.ver-mas').text('Ver más');
            }
        });
    });

    
    $('#formularioContacto').on('submit', function(event) {
        event.preventDefault(); 

        let esValido = true;

        
        const nombreInput = $('#nombreUsuario');
        const errorNombre = $('#errorNombre');
        if (nombreInput.val().trim() === '') {
            nombreInput.addClass('is-invalid');
            errorNombre.show();
            esValido = false;
        } else {
            nombreInput.removeClass('is-invalid');
            errorNombre.hide();
        }

        
        const correoInput = $('#correoUsuario');
        const errorCorreo = $('#errorCorreo');
        const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
        if (!regexCorreo.test(correoInput.val().trim())) {
            correoInput.addClass('is-invalid');
            errorCorreo.show();
            esValido = false;
        } else {
            correoInput.removeClass('is-invalid');
            errorCorreo.hide();
        }

        
        const mensajeInput = $('#mensajeUsuario');
        const errorMensaje = $('#errorMensaje');
        if (mensajeInput.val().trim() === '') {
            mensajeInput.addClass('is-invalid');
            errorMensaje.show();
            esValido = false;
        } else {
            mensajeInput.removeClass('is-invalid');
            errorMensaje.hide();
        }

        
        if (esValido) {
           

            
            $('#mensajeExito').removeClass('d-none').addClass('show');
            $('#formularioContacto')[0].reset(); 
            setTimeout(() => {
                $('#mensajeExito').removeClass('show').addClass('d-none');
            }, 5000); 
        }
    });

    
    const formularioTest = document.getElementById('formularioTest');
    const resultadosTest = document.getElementById('resultadosTest');

    if (formularioTest) { 
        formularioTest.addEventListener('submit', function(event) {
            event.preventDefault();

            let puntaje = 0;
            let retroalimentacion = '';
            let claseAlerta = 'alert-danger'; 

            
            const respuesta1 = document.querySelector('input[name="pregunta1"]:checked');
            if (respuesta1 && respuesta1.value === 'no') {
                puntaje += 1;
            }

            
            const respuesta2 = document.querySelector('input[name="pregunta2"]:checked');
            if (respuesta2 && respuesta2.value === 'si') {
                puntaje += 1;
            }

            
            const respuesta3 = document.querySelector('input[name="pregunta3"]:checked');
            if (respuesta3 && respuesta3.value === 'si') {
                puntaje += 1;
            }

            
            if (puntaje === 3) {
                retroalimentacion = '¡Excelente! Tienes muy buenos hábitos de ciberseguridad. ¡Sigue así!';
                claseAlerta = 'alert-success';
            } else if (puntaje === 2) {
                retroalimentacion = '¡Bien hecho! Tienes una buena base, pero hay áreas para mejorar. Revisa los consejos de seguridad.';
                claseAlerta = 'alert-warning';
            } else {
                retroalimentacion = 'Necesitas mejorar tus prácticas de ciberseguridad. Te recomendamos encarecidamente revisar a fondo nuestros consejos.';
                claseAlerta = 'alert-danger';
            }

            
            resultadosTest.innerHTML = `<p>Tu puntaje: ${puntaje} de 3.</p><p>${retroalimentacion}</p>`;
            resultadosTest.className = `mt-4 alert ${claseAlerta}`;
            resultadosTest.classList.remove('d-none');
        });

        
        $('#modalTestSeguridad').on('hidden.bs.modal', function () {
            formularioTest.reset();
            resultadosTest.classList.add('d-none');
            resultadosTest.innerHTML = '';
        });
    }

    
    if ($('#carruselCasos').length) { 
        $('#carruselCasos').carousel({
            interval: 5000, 
            pause: 'hover' 
        });
    }

});