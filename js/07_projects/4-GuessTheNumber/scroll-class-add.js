        ($ => {
            $(document).ready(() => {
                $(window).scroll(() => {
                    const navMenu = $('#ast-hf-menu-1 li');


                    let windowTop = $(window).scrollTop();
                    let aboutSection = $('#about-sec-part').offset().top - 101;
                    let moduleSection = $('#module-sec-part').offset().top - 101;
					

                    if (windowTop > moduleSection) {
                        if ($('#menu-item-544.current-menu-item').length === 0) {
                        	navMenu.removeClass('current-menu-item');
                            $('#menu-item-544').addClass('current-menu-item');
                        }

                    } else if (windowTop > aboutSection) {
                        if ( $('#menu-item-543.current-menu-item').length === 0 ) {
                        	navMenu.removeClass('current-menu-item');
                            $('#menu-item-543').addClass('current-menu-item');
                        }
                    } else {
                        if ( $('#menu-item-567.current-menu-item').length === 0 ) {
                        	navMenu.removeClass('current-menu-item');
                            $('#menu-item-567').addClass('current-menu-item');
                        }
                    }
                });
            });
        })(jQuery);
    
