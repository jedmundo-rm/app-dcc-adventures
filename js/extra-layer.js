
(function ($) {
    $(document).ready(function() {


        $('#logo').click(function(){
            $("#screen").removeClass('active');
        });

        //============================================
        // MOUSEMOMVE SCREEN SAVER
        //============================================

        let timer;
        const tiempoEspera = 300000; // Tiempo en milisegundos (5 min)

        $(document).on('mousemove', function() {
            // 1. Si el ratón se mueve, limpiamos el temporizador anterior
            clearTimeout(timer);

            // 2. Opcional: Si habías ocultado algo al detenerse, aquí puedes mostrarlo
            // console.log("El ratón se está moviendo...");

            // 3. Iniciamos la cuenta regresiva de nuevo
            timer = setTimeout(function() {
                // --- ESTA ES LA ACCIÓN CUANDO SE DETIENE ---
                ejecutarAccion();
            }, tiempoEspera);
        });

        function ejecutarAccion() {
            console.log("El ratón se detuvo por " + (tiempoEspera / 300000) + " segundos.");
            // Aquí puedes ocultar controles de video, mostrar un mensaje, etc.

            //cerramos video
             closeVideo();
            // damos click ene l boton del home para regresar al menu principal
            $(".extra-close-btn").click();
            // mandamos a llamar el screen
            $("#screen").addClass('active');
        }



        const extraLayer = {

            //============================================
            // FUNCIONES
            //============================================           

            // ========== FUNCION OCULTAR BOTONES DEL MENU HOME ==========

            hideBTNS: function() {
                // OCULTAMOS Botones del HOME
                TweenMax.to("#home", 1, {
                    bottom: "-100%",
                    ease: Power3.easeOut
                });

                // OCULTAMOS Barra de Fondo del Logo
                TweenMax.to("#screen", 0.1, {
                    bottom: "-40%",
                    ease: Power3.easeOut
                });
            },

            // ========== FUNCION MOSTRAR BOTONES ==========

            showBTNS: function() {
                // MOSTRAMOS Botones del HOME
                TweenMax.to("#home", 1, {
                    bottom: "0%",
                    ease: Power3.easeOut
                });

                
                // MOSTRAMOS Barra del Fondo del Logo
                TweenMax.to("#screen", 0.1, {
                    bottom: "-200px",
                    ease: Power3.easeOut
                });
            },

            // ========== FUNCION / DAR CLASE NO-VISIBLE A TODOS LOS PAGES ==========

            hidePages: function() {
                $(".page-catatonic, .page-veranos, .page-river, .page-marina, .page-vista, .page-pirates, .page-paddle, .page-gabys, .page-tb, .page-adventures").addClass("no-visible-cm");
            },

            // ========== FUNCION / REFRESH BACK AND FORWARD CLASSES ==========

            refreshNAVBTNS: function() {
                // Para los dos botones quita las clases que tenga y deja la clase de inicios
                $('.extra-back-btn').attr('class', 'extra-back-btn');
                $('.extra-forward-btn').attr('class', 'extra-forward-btn');
            },

            // ========== FUNCION / CERRAR EXTRA LAYER ==========

            hideExtraLayer: function(accionesAlTerminar) {

                TweenMax.to("#extra-layer", 0.5, {
                    bottom: "-100%",
                    ease: Power3.easeOut,
                    //autoAlpha: 0,

                    onComplete: function() {
                        // Mostramos el boton de Cerrar Video
                        $(".close-btn-video").show();
                        // Borramos todas las clases que tengan los botones de BACK y FORWARD
                        extraLayer.refreshNAVBTNS();

                        accionesAlTerminar();
                    }
                });

                // Ocultamos boton del Home
                TweenMax.to($(".extra-close-btn"), 0.5, {
                    left: "-150px",
                    ease: Expo.easeOut,
                    delay: 0.3,
                });

                // Ocultamos boton de Back
                TweenMax.to($(".extra-back-btn"), 0.5, {
                    right: "-150px",
                    ease: Expo.easeOut,
                    delay: 0.3,
                });

                // Ocultamos boton de Forward
                TweenMax.to($(".extra-forward-btn"), 0.5, {
                    right: "-150px",
                    ease: Expo.easeOut,
                    delay: 0.3,
                });
                
            },

            // ========== TERMINA FUNCIONES ==========

            //============================================
            // EVENTOS
            //============================================

            events() {


                // =========================
                // CLICK EN LOGO
                // =========================

                $("#logo").on("click", function () {
                    // MOSTRAMOS Botones del HOME
                    TweenMax.to("#home", 1, {
                        bottom: "0%",
                        ease: Power3.easeOut
                    });
                });


                // =========================
                // ABRIR EXTRA LAYER
                // =========================

                $("#btn-catatonic, #btn-veranos, #btn-river, #btn-marina, #btn-vista, #btn-pirates, #btn-paddle, #btn-gabys, #btn-tb, #btn-adventures").on("click", function () {

                    $("html, body, #extra-layer").animate({
                        scrollTop: 0
                    });

                    $("#extra-layer").css("z-index", 200000);


                    // Ocultamos Botones del MENU HOME
                    extraLayer.hideBTNS();

                    // Mostramos el Extra Layer
                    TweenMax.to("#extra-layer", 1, {
                        bottom: "0",
                        ease: Power3.easeOut,
                        //autoAlpha: 1,
                        onComplete() {

          
                        }
                    });

                    // Mostramos los botones de Navegacion
                    TweenMax.to($(".extra-close-btn"), 0.5, {
                        left: "40px",
                        ease: Expo.easeOut,
                        delay: 0.5, // <--- Aquí agregas el delay en segundos
                    });
                    TweenMax.to($(".extra-back-btn"), 0.5, {
                        right: "154px",
                        ease: Expo.easeOut,
                        delay: 0.5, // <--- Aquí agregas el delay en segundos
                    });
                    TweenMax.to($(".extra-forward-btn"), 0.5, {
                        right: "28px",
                        ease: Expo.easeOut,
                        delay: 0.5, // <--- Aquí agregas el delay en segundos
                    });

                });

                // =========================
                // LINKS
                // =========================

                $("#btn-catatonic").on("click", function () {
                    // ga("send", "event", "site", "click", "cm-tag/terminos");
                    $(".page-catatonic").removeClass("no-visible-cm");

                    // Ocultamos Botones del MENU HOME
                    extraLayer.hideBTNS();

                    $(".close-btn-video").hide();

                    // Agregarle clases a los botones back y formward dependiendo de la seccion
                    $(".extra-back-btn").addClass("catatonic-back-btn");
                    $(".extra-forward-btn").addClass("catatonic-forward-btn");
                });

                $("#btn-veranos").on("click", function () {
                    // ga("send", "event", "site", "click", "cm-tag/aviso");
                    $(".page-veranos").removeClass("no-visible-cm");

                    // Agregarle clases a los botones back y formward dependiendo de la seccion
                    $(".extra-back-btn").addClass("veranos-back-btn");
                    $(".extra-forward-btn").addClass("veranos-forward-btn");
                });

                $("#btn-river").on("click", function () {
                    // ga("send", "event", "site", "click", "cm-tag/aviso");
                    $(".page-river").removeClass("no-visible-cm");

                    // Agregarle clases a los botones back y formward dependiendo de la seccion
                    $(".extra-back-btn").addClass("river-back-btn");
                    $(".extra-forward-btn").addClass("river-forward-btn");
                });

                $("#btn-marina").on("click", function () {
                    // ga("send", "event", "site", "click", "cm-tag/aviso");
                    $(".page-marina").removeClass("no-visible-cm");

                    // Ocultamos Botones del MENU HOME
                    extraLayer.hideBTNS();

                    $(".close-btn-video").hide();

                    // Agregarle clases a los botones back y formward dependiendo de la seccion
                    $(".extra-back-btn").addClass("marina-back-btn");
                    $(".extra-forward-btn").addClass("marina-forward-btn");
                });

                $("#btn-vista").on("click", function () {
                    // ga("send", "event", "site", "click", "cm-tag/aviso");
                    $(".page-vista").removeClass("no-visible-cm");

                    // Ocultamos Botones del MENU HOME
                    extraLayer.hideBTNS();

                    $(".close-btn-video").hide();

                    // Agregarle clases a los botones back y formward dependiendo de la seccion
                    $(".extra-back-btn").addClass("vista-back-btn");
                    $(".extra-forward-btn").addClass("vista-forward-btn");
                });

                $("#btn-pirates").on("click", function () {
                    // ga("send", "event", "site", "click", "cm-tag/aviso");
                    $(".page-pirates").removeClass("no-visible-cm");

                    // Agregarle clases a los botones back y formward dependiendo de la seccion
                    $(".extra-back-btn").addClass("pirates-back-btn");
                    $(".extra-forward-btn").addClass("pirates-forward-btn");
                });

                $("#btn-paddle").on("click", function () {
                    // ga("send", "event", "site", "click", "cm-tag/aviso");
                    $(".page-paddle").removeClass("no-visible-cm");

                    // Agregarle clases a los botones back y formward dependiendo de la seccion
                    $(".extra-back-btn").addClass("paddle-back-btn");
                    $(".extra-forward-btn").addClass("paddle-forward-btn");
                });

                $("#btn-gabys").on("click", function () {
                    // ga("send", "event", "site", "click", "cm-tag/aviso");
                    $(".page-gabys").removeClass("no-visible-cm");

                    // Ocultamos Botones del MENU HOME
                    extraLayer.hideBTNS();

                    $(".close-btn-video").hide();

                    // Agregarle clases a los botones back y formward dependiendo de la seccion
                    $(".extra-back-btn").addClass("gabys-back-btn");
                    $(".extra-forward-btn").addClass("gabys-forward-btn");
                });

                $("#btn-tb").on("click", function () {
                    // ga("send", "event", "site", "click", "cm-tag/aviso");
                    $(".page-tb").removeClass("no-visible-cm");

                    // Ocultamos Botones del MENU HOME
                    extraLayer.hideBTNS();

                    $(".close-btn-video").hide();

                    // Agregarle clases a los botones back y formward dependiendo de la seccion
                    $(".extra-back-btn").addClass("tb-back-btn");
                    $(".extra-forward-btn").addClass("tb-forward-btn");
                });

                $("#btn-adventures").on("click", function () {
                    // ga("send", "event", "site", "click", "cm-tag/aviso");
                    $(".page-adventures").removeClass("no-visible-cm");

                    // Agregarle clases a los botones back y formward dependiendo de la seccion
                    $(".extra-back-btn").addClass("adventures-back-btn");
                    $(".extra-forward-btn").addClass("adventures-forward-btn");
                });


                // =========================
                // BOTON ATRAS
                // =========================
                $(".extra-back-btn").on("click", function () {

                    closeVideo();

                    // Agregamos la clase no-visible a todos los Pages
                    extraLayer.hidePages();
                    

                    if ($(".extra-back-btn").hasClass("catatonic-back-btn")) {

                        // Ejecutamos la funcion que Oculta el Extra Layer y que a la vez manda a llamar la funcion accionesAlTerminar() para ejecutar la accion en el OnComplete aninado en la funcion
                        extraLayer.hideExtraLayer(accionesAlTerminar);

                        function accionesAlTerminar(){
                            // Damos click al boton donde vamos a abrir la nueva seccion
                            $(".extra-close-btn").click();
                        };
                    }


                    if ($(".extra-back-btn").hasClass("veranos-back-btn")) {

                        // Ejecutamos la funcion que Oculta el Extra Layer y que a la vez manda a llamar la funcion accionesAlTerminar() para ejecutar la accion en el OnComplete aninado en la funcion
                        extraLayer.hideExtraLayer(accionesAlTerminar);

                        function accionesAlTerminar(){
                            // Damos click al boton donde vamos a abrir la nueva seccion
                            $("#btn-catatonic").click();
                        };
                    }

                    if ($(".extra-back-btn").hasClass("river-back-btn")) {

                        // Ejecutamos la funcion que Oculta el Extra Layer y que a la vez manda a llamar la funcion accionesAlTerminar() para ejecutar la accion en el OnComplete aninado en la funcion
                        extraLayer.hideExtraLayer(accionesAlTerminar);

                        function accionesAlTerminar(){
                            // Damos click al boton donde vamos a abrir la nueva seccion
                            $("#btn-veranos").click();
                        };
                    }

                    if ($(".extra-back-btn").hasClass("marina-back-btn")) {

                        // Ejecutamos la funcion que Oculta el Extra Layer y que a la vez manda a llamar la funcion accionesAlTerminar() para ejecutar la accion en el OnComplete aninado en la funcion
                        extraLayer.hideExtraLayer(accionesAlTerminar);

                        function accionesAlTerminar(){
                            // Damos click al boton donde vamos a abrir la nueva seccion
                            $("#btn-river").click();
                        };
                    }

                    if ($(".extra-back-btn").hasClass("vista-back-btn")) {

                        // Ejecutamos la funcion que Oculta el Extra Layer y que a la vez manda a llamar la funcion accionesAlTerminar() para ejecutar la accion en el OnComplete aninado en la funcion
                        extraLayer.hideExtraLayer(accionesAlTerminar);

                        function accionesAlTerminar(){
                            // Damos click al boton donde vamos a abrir la nueva seccion
                            $("#btn-marina").click();
                        };
                    }

                    if ($(".extra-back-btn").hasClass("pirates-back-btn")) {

                        // Ejecutamos la funcion que Oculta el Extra Layer y que a la vez manda a llamar la funcion accionesAlTerminar() para ejecutar la accion en el OnComplete aninado en la funcion
                        extraLayer.hideExtraLayer(accionesAlTerminar);

                        function accionesAlTerminar(){
                            // Damos click al boton donde vamos a abrir la nueva seccion
                            $("#btn-vista").click();
                        };
                    }

                    if ($(".extra-back-btn").hasClass("paddle-back-btn")) {

                        // Ejecutamos la funcion que Oculta el Extra Layer y que a la vez manda a llamar la funcion accionesAlTerminar() para ejecutar la accion en el OnComplete aninado en la funcion
                        extraLayer.hideExtraLayer(accionesAlTerminar);

                        function accionesAlTerminar(){
                            // Damos click al boton donde vamos a abrir la nueva seccion
                            $("#btn-pirates").click();
                        };
                    }

                    if ($(".extra-back-btn").hasClass("gabys-back-btn")) {

                        // Ejecutamos la funcion que Oculta el Extra Layer y que a la vez manda a llamar la funcion accionesAlTerminar() para ejecutar la accion en el OnComplete aninado en la funcion
                        extraLayer.hideExtraLayer(accionesAlTerminar);

                        function accionesAlTerminar(){
                            // Damos click al boton donde vamos a abrir la nueva seccion
                            $("#btn-paddle").click();
                        };
                    }

                    if ($(".extra-back-btn").hasClass("tb-back-btn")) {

                        // Ejecutamos la funcion que Oculta el Extra Layer y que a la vez manda a llamar la funcion accionesAlTerminar() para ejecutar la accion en el OnComplete aninado en la funcion
                        extraLayer.hideExtraLayer(accionesAlTerminar);

                        function accionesAlTerminar(){
                            // Damos click al boton donde vamos a abrir la nueva seccion
                            $("#btn-gabys").click();
                        };
                    }

                    if ($(".extra-back-btn").hasClass("adventures-back-btn")) {

                        // Ejecutamos la funcion que Oculta el Extra Layer y que a la vez manda a llamar la funcion accionesAlTerminar() para ejecutar la accion en el OnComplete aninado en la funcion
                        extraLayer.hideExtraLayer(accionesAlTerminar);

                        function accionesAlTerminar(){
                            // Damos click al boton donde vamos a abrir la nueva seccion
                            $("#btn-tb").click();
                        };
                    }
                });


                // =========================
                // BOTON SIGUIENTE
                // =========================

                $(".extra-forward-btn").on("click", function () {

                    closeVideo();

                    // Agregamos la clase no-visible a todos los Pages
                    extraLayer.hidePages();
                   

                    if ($(".extra-forward-btn").hasClass("catatonic-forward-btn")) {

                        // Ejecutamos la funcion que Oculta el Extra Layer y que a la vez manda a llamar la funcion accionesAlTerminar() para ejecutar la accion en el OnComplete aninado en la funcion
                        extraLayer.hideExtraLayer(accionesAlTerminar);

                        function accionesAlTerminar(){
                            // Damos click al boton donde vamos a abrir la nueva seccion
                            $("#btn-veranos").click();
                        };
                    }

                    if ($(".extra-forward-btn").hasClass("veranos-forward-btn")) {

                        // Ejecutamos la funcion que Oculta el Extra Layer y que a la vez manda a llamar la funcion accionesAlTerminar() para ejecutar la accion en el OnComplete aninado en la funcion
                        extraLayer.hideExtraLayer(accionesAlTerminar);

                        function accionesAlTerminar(){
                            // Damos click al boton donde vamos a abrir la nueva seccion
                            $("#btn-river").click();
                        };
                    }


                    if ($(".extra-forward-btn").hasClass("river-forward-btn")) {

                        // Ejecutamos la funcion que Oculta el Extra Layer y que a la vez manda a llamar la funcion accionesAlTerminar() para ejecutar la accion en el OnComplete aninado en la funcion
                        extraLayer.hideExtraLayer(accionesAlTerminar);

                        function accionesAlTerminar(){
                            // Damos click al boton donde vamos a abrir la nueva seccion
                            $("#btn-marina").click();
                        };
                    }

                    if ($(".extra-forward-btn").hasClass("marina-forward-btn")) {

                        // Ejecutamos la funcion que Oculta el Extra Layer y que a la vez manda a llamar la funcion accionesAlTerminar() para ejecutar la accion en el OnComplete aninado en la funcion
                        extraLayer.hideExtraLayer(accionesAlTerminar);

                        function accionesAlTerminar(){
                            // Damos click al boton donde vamos a abrir la nueva seccion
                            $("#btn-vista").click();
                        };
                    }

                    if ($(".extra-forward-btn").hasClass("vista-forward-btn")) {

                        // Ejecutamos la funcion que Oculta el Extra Layer y que a la vez manda a llamar la funcion accionesAlTerminar() para ejecutar la accion en el OnComplete aninado en la funcion
                        extraLayer.hideExtraLayer(accionesAlTerminar);

                        function accionesAlTerminar(){
                            // Damos click al boton donde vamos a abrir la nueva seccion
                            $("#btn-pirates").click();
                        };
                    }

                    if ($(".extra-forward-btn").hasClass("pirates-forward-btn")) {

                        // Ejecutamos la funcion que Oculta el Extra Layer y que a la vez manda a llamar la funcion accionesAlTerminar() para ejecutar la accion en el OnComplete aninado en la funcion
                        extraLayer.hideExtraLayer(accionesAlTerminar);

                        function accionesAlTerminar(){
                            // Damos click al boton donde vamos a abrir la nueva seccion
                            $("#btn-paddle").click();
                        };
                    }

                    if ($(".extra-forward-btn").hasClass("paddle-forward-btn")) {

                        // Ejecutamos la funcion que Oculta el Extra Layer y que a la vez manda a llamar la funcion accionesAlTerminar() para ejecutar la accion en el OnComplete aninado en la funcion
                        extraLayer.hideExtraLayer(accionesAlTerminar);

                        function accionesAlTerminar(){
                            // Damos click al boton donde vamos a abrir la nueva seccion
                            $("#btn-gabys").click();
                        };
                    }

                    if ($(".extra-forward-btn").hasClass("gabys-forward-btn")) {

                        // Ejecutamos la funcion que Oculta el Extra Layer y que a la vez manda a llamar la funcion accionesAlTerminar() para ejecutar la accion en el OnComplete aninado en la funcion
                        extraLayer.hideExtraLayer(accionesAlTerminar);

                        function accionesAlTerminar(){
                            // Damos click al boton donde vamos a abrir la nueva seccion
                            $("#btn-tb").click();
                        };
                    }

                    if ($(".extra-forward-btn").hasClass("tb-forward-btn")) {

                        // Ejecutamos la funcion que Oculta el Extra Layer y que a la vez manda a llamar la funcion accionesAlTerminar() para ejecutar la accion en el OnComplete aninado en la funcion
                        extraLayer.hideExtraLayer(accionesAlTerminar);

                        function accionesAlTerminar(){
                            // Damos click al boton donde vamos a abrir la nueva seccion
                            $("#btn-adventures").click();
                        };
                    }

                    if ($(".extra-forward-btn").hasClass("adventures-forward-btn")) {

                        // Ejecutamos la funcion que Oculta el Extra Layer y que a la vez manda a llamar la funcion accionesAlTerminar() para ejecutar la accion en el OnComplete aninado en la funcion
                        extraLayer.hideExtraLayer(accionesAlTerminar);

                        function accionesAlTerminar(){
                            // Damos click al boton donde vamos a abrir la nueva seccion
                            $(".extra-close-btn").click();
                        };
                    }

                });

                // =========================
                // CERRAR EXTRA LAYER
                // =========================
                $(".extra-close-btn").on("click", function () {

                    // Agregamos la clase no-visible a todos los Pages
                    extraLayer.hidePages();

                    // ga("send", "event", "site", "click", "cm-tag/open");

                    $("html, body").animate({
                        scrollTop: 0
                    });

                    $("#extra-layer").css("z-index", 200000);

                    
                    // Ejecutamos la funcion que Oculta el Extra Layer
                    extraLayer.hideExtraLayer();


                    // Mostramos Botones del MENU HOME
                    extraLayer.showBTNS();
    

                });
            },

            init() {
                this.events();
            }

            
        };

        // =========================================
        // INIT
        // =========================================

        extraLayer.init();

    });
})(jQuery);