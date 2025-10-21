import { useEffect, useRef, useState } from 'react'

export const useScrollAnimation = (options = {}) => {
    const elementRef = useRef(null)
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true)
                // Once visible, stop observing (animation happens once)
                if (options.once !== false) {
                    observer.unobserve(entry.target)
                }
            }
        }, {
            threshold: options.threshold || 0.1,
            rootMargin: options.rootMargin || '0px'
        })

        const currentElement = elementRef.current
        if (currentElement) {
            observer.observe(currentElement)
        }

        return () => {
            if (currentElement) {
                observer.unobserve(currentElement)
            }
        }
    }, [options.threshold, options.rootMargin, options.once])

    return [elementRef, isVisible]
}

