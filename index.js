document.addEventListener('DOMContentLoaded', () => {
    const trackTop = document.querySelector('.carousel-track.track-top');
    const trackBottom = document.querySelector('.carousel-track.track-bottom');

    if (!trackTop || !trackBottom) {
        console.warn('Carrossel tracks não encontrados. Verifique as classes HTML.');
        return;
    }

    // Define a velocidade base em segundos.
    // Quanto MENOR o número, MAIOR a velocidade.
    const baseScrollSpeedSeconds = 30; // Altere para 30s para um pouco mais de velocidade (era 60s)

    // Ajusta a velocidade diretamente no elemento raiz (<html>) via variável CSS
    document.documentElement.style.setProperty('--scroll-speed', `${baseScrollSpeedSeconds}s`);

    // Adiciona a classe 'animate' para iniciar as animações CSS
    trackTop.classList.add('animate');
    trackBottom.classList.add('animate');

    // Função para lidar com a pausa e play no hover
    const handleHover = (trackElement, isPaused) => {
        trackElement.style.animationPlayState = isPaused ? 'paused' : 'running';
    };

    // Adiciona event listeners para a linha de cima
    trackTop.addEventListener('mouseenter', () => handleHover(trackTop, true));
    trackTop.addEventListener('mouseleave', () => handleHover(trackTop, false));

    // Adiciona event listeners para a linha de baixo
    trackBottom.addEventListener('mouseenter', () => handleHover(trackBottom, true));
    trackBottom.addEventListener('mouseleave', () => handleHover(trackBottom, false));
});

document.addEventListener('DOMContentLoaded', () => {
    // ... (Seu código JavaScript existente para o carrossel, etc.) ...

    // --- Animação da Linha Separadora ---
    const animatedLine = document.querySelector('.animated-line');

    if (animatedLine) { // Verifica se o elemento da linha existe
        const observerOptions = {
            root: null, // viewport como root
            rootMargin: '0px',
            threshold: 0.5 // 50% do elemento visível
        };

        const lineObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Se a linha está visível, adiciona a classe para animar
                    entry.target.classList.add('is-visible');
                    // Opcional: Para animar apenas uma vez, desconecte o observer
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        // Inicia a observação da linha
        lineObserver.observe(animatedLine);
    }
});