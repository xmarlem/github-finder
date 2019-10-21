import React from 'react'
import PlayContext from './playContext'


const PlayState = props => {
    return <PlayContext.Provider
        value={{text}}>

        {props.children}
        </PlayContext.Provider>
    
}

export default PlayState;
