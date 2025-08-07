document.addEventListener('DOMContentLoaded', () => {
    const mainSwiper = new Swiper('.main-swiper', {
        // Direção da rolagem: 'vertical' para rolagem de página
        direction: 'vertical',
        // loop: true, // Geralmente NÃO é desejável para um site inteiro (header -> footer)

        // Paginação (pontinhos de navegação)
        pagination: {
            el: '.swiper-pagination',
            clickable: true, // Permite clicar nos pontinhos para navegar
        },

        // Navegação por Mouse Wheel (roda do mouse)
        mousewheel: {
            forceToAxis: true, // Força a rolagem apenas na direção vertical
            releaseOnEdges: true, // Se o conteúdo interno de um slide tiver scroll, permite rolar lá primeiro
        },
        // Navegação por Teclado
        keyboard: {
            enabled: true,
            onlyInViewport: true,
        },

        // Animação de entrada/saída dos slides
        // effect: 'slide', // Efeito padrão
        // effect: 'fade', // Efeito de transição suave
        // fadeEffect: {
        //     crossFade: true,
        // },

        // Parâmetros para deixar a rolagem mais suave e natural, como um "scroll"
        speed: 800, // Duração da transição entre slides em ms (mais lento para parecer rolagem)
        simulateTouch: true, // Permite arrastar os slides
        grabCursor: true, // Muda o cursor para "mão" ao passar por cima
        
        // Ativar Scrollbar (opcional, para visualização da posição)
        // scrollbar: {
        //     el: '.swiper-scrollbar',
        //     draggable: true,
        // },

        // Eventos do Swiper (opcional, para mais controle, como animar elementos internos)
        on: {
            slideChange: function () {
                // Ao mudar de slide, podemos, por exemplo, garantir que a linha animada reanime
                const currentSlide = this.slides[this.activeIndex];
                const animatedLine = currentSlide.querySelector('.animated-line');
                if (animatedLine) {
                    animatedLine.classList.remove('is-visible'); // Remove para resetar
                    setTimeout(() => { // Pequeno delay para reanimar
                        animatedLine.classList.add('is-visible');
                    }, 50); 
                }

                // Se houver vídeos ou outros carrosséis internos, pausar/iniciar
                // console.log('Slide mudou para:', this.activeIndex);
            },
            init: function() {
                // Disparar a animação da linha no primeiro slide se ele já contiver a linha
                // ou se a linha estiver em um slide específico que é o primeiro a ser visto.
                // Como a linha está em um slide separado (slide 4), a animação será disparada quando esse slide for visitado.
            }
        },
    });
});