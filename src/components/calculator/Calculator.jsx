import React, { useRef, useEffect, useState} from "react";

import './calculator.css';

import { btns, BTN_ACTIONS} from './btnConfig';

const Calculator = () => {

    const btnsRef = useRef(null);
    const expRef = useRef(null);

    const [expression, setExpression] = useState('');

    return (
        <div className="calculator">
            <div className="calculator__result">
                <div className="calculator__result__exp"></div>
                <div className="calculator__result__exp"></div>
            </div>
            <div className="calculator__btns">
                {
                    btns.map((item, index) => (
                        <button
                            key={index}
                            className={item.class}
                            
                        >
                            {item.display}
                        </button>
                    ) )
                }
            </div>
        </div>
    )
}

export default Calculator;