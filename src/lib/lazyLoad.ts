const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0
};


export const lazyLoad = (image: HTMLImageElement, src: string) => {
    const loaded = () => {
        image.classList.remove('opacity-0');
    };
    const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            image.src = src;

            if (image.complete) {
                loaded();
            } else {
                image.addEventListener('load', loaded);
            }
        }
    }, options);

    observer.observe(image); // intersection observer

    return {
        destroy() {
            image.removeEventListener('load', loaded); // clean up the event listener
        }
    };
};