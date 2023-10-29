document.addEventListener("DOMContentLoaded", () => {
    var splide = new Splide( '.splide', {
        type   : 'loop',
        perPage: 3,
        width: '100%',
        gap: '5rem',
        padding: '5%',
        breakpoints:{
            640: {
                perPage: 1,
                width: '100%',
            },
        },
        
    }
    );
    splide.mount();
});
