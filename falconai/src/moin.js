import { useEffect, useState } from 'react'
import { throttle } from 'lodash'
function useDocumentScrollThrottled(callback) {
    const [, setScrollPosition] = useState(0)
    let previousScrollTop = 0
    function handleDocumentScroll() {
        const { scrollTop: currentScrollTop } =
            document.documentElement || document.body
        setScrollPosition((previousPosition) => {
            previousScrollTop = previousPosition
            return currentScrollTop
        })
        callback({ currentScrollTop, previousScrollTop })
    }

    const handleDocumentScrollThrottled = throttle(handleDocumentScroll, 200)
    useEffect(() => {
        window.addEventListener('scroll', handleDocumentScrollThrottled)
        return () =>
            window.removeEventListener('scroll', handleDocumentScrollThrottled)
    }, [handleDocumentScrollThrottled])
}
export default useDocumentScrollThrottled
