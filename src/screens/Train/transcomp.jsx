import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

export default function TransWord({transWord}) {

        return(
            <div>
                <h1>{transWord}</h1>
            </div>
        )
}

