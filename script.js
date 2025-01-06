const galleryImages = document.querySelectorAll('.gallery img');
        const lightbox = document.getElementById('lightbox');
        const lightboxImage = lightbox.querySelector('img');
        const closeBtn = document.getElementById('close');

        galleryImages.forEach(image => {
            image.addEventListener('click', () => {
                lightboxImage.src = image.src;
                lightbox.classList.add('visible');
            });
        });

        closeBtn.addEventListener('click', () => {
            lightbox.classList.remove('visible');
        });

        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) {
                lightbox.classList.remove('visible');
            }
        });