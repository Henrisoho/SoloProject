import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

export default function TransWord() {
    const displayWord = useSelector(store => store.translateReducer)

    if (displayWord != undefined) {
        return (
            <div>
                <h1>{displayWord.transWord}</h1>
            </div>
        )
    } else {
        return (
            <h1>Loading</h1>
        )
    }
}

