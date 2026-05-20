
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

        //============================================
        // TWEENMAX
        //============================================

        const extraLayer = {

            // ========== FUNCIONES OCULTAR / MOSTRAR BOTONES ==========

            hideBTNS: function() {
                // OCULTAMOS Botones del HOME
                TweenMax.to("#home", 1, {
                    bottom: "-100%",
                    ease: Power3.easeOut
                });

                // OCULTAMOS Botones del MENU
                TweenMax.to("#screen", 0.1, {
                    bottom: "-40%",
                    ease: Power3.easeOut
                });
            },

            showBTNS: function() {
                // MOSTRAMOS Botones del HOME
                TweenMax.to("#home", 1, {
                    bottom: "0%",
                    ease: Power3.easeOut
                });

                
                // MOSTRAMOS Botones del MENU
                TweenMax.to("#screen", 0.1, {
                    bottom: "-200px",
                    ease: Power3.easeOut
                });
            },

            // ========== TERMINA FUNCIONES OCULTAR / MOSTRAR BOTONES ==========

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


        let timer;
        const tiempoEspera = 20000; // Tiempo en milisegundos (5 min)

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

      
        }


                // =========================
                // ABRIR EXTRA LAYER
                // =========================


                $("#btn-catatonic, #btn-veranos, #btn-river, #btn-marina, #btn-vista, #btn-pirates, #btn-paddle, #btn-gabys, #btn-tb, #btn-adventures").on("click", function () {

                    $("html, body, #extra-layer").animate({
                        scrollTop: 0
                    });

                    $("#extra-layer").css("z-index", 200000);


                    // Ocultamos Botones
                    extraLayer.hideBTNS();

                    TweenMax.to("#extra-layer", 1, {
                        bottom: "0",
                        ease: Power3.easeOut,

                        onComplete() {


                        }
                    });

                    TweenMax.to($(".extra-close-btn"), 0.5, {
                        left: "40px",
                        ease: Expo.easeOut
                    });


                });

                // =========================
                // LINKS
                // =========================

                $("#btn-catatonic").on("click", function () {
                    // ga("send", "event", "site", "click", "cm-tag/terminos");
                    $(".page-catatonic").removeClass("no-visible-cm");

                    // Ocultamos Botones
                    extraLayer.hideBTNS();

                    $(".close-btn-video").hide();
                });

                $("#btn-veranos").on("click", function () {
                    // ga("send", "event", "site", "click", "cm-tag/aviso");
                    $(".page-veranos").removeClass("no-visible-cm");
                });

                $("#btn-river").on("click", function () {
                    // ga("send", "event", "site", "click", "cm-tag/aviso");
                    $(".page-river").removeClass("no-visible-cm");
                });

                $("#btn-marina").on("click", function () {
                    // ga("send", "event", "site", "click", "cm-tag/aviso");
                    $(".page-marina").removeClass("no-visible-cm");

                    // Ocultamos Botones
                    extraLayer.hideBTNS();

                    $(".close-btn-video").hide();
                });

                $("#btn-vista").on("click", function () {
                    // ga("send", "event", "site", "click", "cm-tag/aviso");
                    $(".page-vista").removeClass("no-visible-cm");

                    // Ocultamos Botones
                    extraLayer.hideBTNS();

                    $(".close-btn-video").hide();
                });

                $("#btn-pirates").on("click", function () {
                    // ga("send", "event", "site", "click", "cm-tag/aviso");
                    $(".page-pirates").removeClass("no-visible-cm");
                });

                $("#btn-paddle").on("click", function () {
                    // ga("send", "event", "site", "click", "cm-tag/aviso");
                    $(".page-paddle").removeClass("no-visible-cm");
                });

                $("#btn-gabys").on("click", function () {
                    // ga("send", "event", "site", "click", "cm-tag/aviso");
                    $(".page-gabys").removeClass("no-visible-cm");

                    // Ocultamos Botones
                    extraLayer.hideBTNS();

                    $(".close-btn-video").hide();
                });

                $("#btn-tb").on("click", function () {
                    // ga("send", "event", "site", "click", "cm-tag/aviso");
                    $(".page-tb").removeClass("no-visible-cm");
                });

                $("#btn-adventures").on("click", function () {
                    // ga("send", "event", "site", "click", "cm-tag/aviso");
                    $(".page-adventures").removeClass("no-visible-cm");
                });


                // =========================
                // CERRAR EXTRA LAYER
                // =========================
                $(".extra-close-btn").on("click", function () {

                    $(".page-catatonic, .page-veranos, .page-river, .page-marina, .page-vista, .page-pirates, .page-paddle, .page-gabys, .page-tb, .page-adventures").addClass("no-visible-cm");

                    // ga("send", "event", "site", "click", "cm-tag/open");

                    $(".close-btn-video").show();

                    $("html, body").animate({
                        scrollTop: 0
                    });

                    $("#extra-layer").css("z-index", 200000);

                    TweenMax.to("#extra-layer", 1, {
                        bottom: "-100%",
                        ease: Power3.easeOut,

                        onComplete() {

                            TweenMax.to($(".extra-close-btn"), 0.5, {
                                left: "-150px",
                                ease: Expo.easeOut
                            });
                            TweenMax.to($(".page-catatonic"), 1.4, { 
                                autoAlpha: 1 
                            });
                            TweenMax.to($(".page-veranos"), 1.4, { 
                                autoAlpha: 1 
                            });
                            TweenMax.to($(".page-river"), 1.4, { 
                                autoAlpha: 1 
                            });
                            TweenMax.to($(".page-marina"), 1.4, { 
                                autoAlpha: 1 
                            });
                            TweenMax.to($(".page-vista"), 1.4, { 
                                autoAlpha: 1 
                            });
                            TweenMax.to($(".page-pirates"), 1.4, { 
                                autoAlpha: 1 
                            });
                            TweenMax.to($(".page-paddle"), 1.4, { 
                                autoAlpha: 1 
                            });
                        }
                    });
                    
                    // Mostramos Botones
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