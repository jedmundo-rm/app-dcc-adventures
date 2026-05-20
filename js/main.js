


(function($){
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
            $("#screen").addClass('active');
        }
        


        //============================================
        // TWEENMAX
        //============================================
    const extraLayer = {
        events() {
            // =========================
            // ABRIR EXTRA LAYER
            // =========================
            $("#extra-layer").on("click", function () {

                $(".extra-catatonic, .extra-veranos").addClass("no-visible-cm");

                $("html, body").animate({
                    scrollTop: 0
                });

                $("#extra-layer").css("z-index", 200000);
                $("#contacto").css("z-index", 100000);

                TweenMax.to("#extra-layer", 1, {
                    bottom: "0",
                    ease: Power3.easeOut,

                    onComplete() {

                        TweenMax.to($(".extra-close-btn"), 0.5, {
                            left: "-10px",
                            ease: Expo.easeOut
                        });

                        TweenMax.to($(".extra-catatonic"), 1.4, { autoAlpha: 1 });
                        TweenMax.to($(".extra-veranos"), 1.4, { autoAlpha: 1 });
                    }
                });
            });

            $("#btn-catatonic").on("click", function () {

                // ga("send", "event", "site", "click", "cm-tag/terminos");

                $(".extra-catatonic").removeClass("no-visible-cm");
                $(".extra-veranos").addClass("no-visible-cm");

                $("html, body, #extra-layer").animate({
                    scrollTop: 0
                });

                $("#extra-layer").css("z-index", 200000);

                TweenMax.to("#extra-layer", 1, {
                    bottom: "0",
                    ease: Power3.easeOut,

                    onComplete() {

                        TweenMax.to($(".extra-close-btn"), 0.5, {
                            left: "-10px",
                            ease: Expo.easeOut
                        });
                    }
                });
            });

           // =========================
            // CERRAR EXTRA LAYER
            // =========================
            $(".extra-close-btn, .extra-close-purple-btn").on("click", function () {

                TweenMax.to($("#extra-layer"), 1, {
                    bottom: "-100%",
                    ease: Power4.easeOut
                });

                TweenMax.to($(".extra-close-btn"), 0.7, {
                    left: "-100px",
                    ease: Expo.easeIn
                });

                TweenMax.to($(".extra-catatonic"), 0.2, {
                    autoAlpha: 0,
                    ease: Expo.easeOut
                });

                
                TweenMax.to($(".extra-veranos"), 0.2, {
                    autoAlpha: 0,
                    ease: Expo.easeOut
                });

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

