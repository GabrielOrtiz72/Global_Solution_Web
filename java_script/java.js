const fadeElements = document.querySelectorAll('.fade-in');

        const options = {
            threshold: 0.5, // Porcentagem de visibilidade do elemento para disparar a animação
            rootMargin: '0px 0px -100px 0px' // Define uma margem inferior para que a animação seja iniciada antes do elemento ficar totalmente visível
        };

        const fadeInObserver = new IntersectionObserver(function(entries, observer) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in-animation');
                    observer.unobserve(entry.target);
                }
            });
        }, options);

        fadeElements.forEach(element => {
            fadeInObserver.observe(element);
        });