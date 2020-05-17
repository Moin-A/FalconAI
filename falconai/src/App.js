import React, { useState } from 'react'
import logo from './logo.svg'
import Header from './Header'

import AppContext from './AppContext'

const App = () => {
    const Theme = useState('Theme')
    return (
        <AppContext.Provider value={Theme}>
            <div className="Container">
                <Header />
                <div></div>
            </div>
        </AppContext.Provider>
    )
}

export default App
