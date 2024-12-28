import { useEffect, useRef } from 'react';

export const useObserver = (ref, canLoad, isLoading, callback) => {
    const observer = useRef();

    useEffect(() => {
        if (isLoading) return;
        if (observer.current) observer.current.disconnect();

        const cb = function (entries, observer) {
            if (entries[0].isIntersecting && canLoad) {
                console.log('Див в зоне видимости');
                callback();
            }
        };

        observer.current = new IntersectionObserver(cb);
        if (ref.current) {
            observer.current.observe(ref.current);
        }
    }, [isLoading]);
};
