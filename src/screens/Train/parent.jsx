import React, { useState } from 'react'
import Continue from './continue';
import Train from './index';

export default function TrainParent() {
const [isGlobalCorrect, setIsGlobalCorrect] = useState(null);

  return (
      <>
        <div>
          <div>
            <Train isGlobalCorrect={isGlobalCorrect} setIsGlobalCorrect={setIsGlobalCorrect} />
        </div>
        <div>
            <Continue/>
        </div>
        </div>
      </>
    );
  } 

