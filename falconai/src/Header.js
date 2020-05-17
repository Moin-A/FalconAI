import React, { useState } from 'react'

import { Link, Router } from '@reach/router'

import useDocumentScrollThrottled from './moin'

const Header = () => {
    const [shouldHideHeader, setShouldHideHeader] = useState(false)
    const [shouldShowShadow, setShouldShowShadow] = useState(false)

    useDocumentScrollThrottled((callbackData) => {
        const { previousScrollTop, currentScrollTop } = callbackData
        const isScrolledDown = previousScrollTop < currentScrollTop

        setShouldShowShadow(currentScrollTop > 210)

        setShouldHideHeader(isScrolledDown)
    })

    const shadowStyle = shouldShowShadow ? 'shadow' : ''
    const hiddenStyle = shouldHideHeader ? 'issticky' : ''
    return <nav className={`main-nav ${hiddenStyle} ${shadowStyle}`}></nav>
}
export default Header
