import React, {useState} from 'react';
import {accordionData} from "../../data/accordionData";
import './accordion.css';

const INITIAL_SHOW = {
    1: false,
    2: false,
    3: false,
}

const Accordion = () => {
    const [currentShowAnswer, setCurrentShowAnswer] = useState(INITIAL_SHOW);

    const handleClickShowAnswer = (id) => {
        setCurrentShowAnswer({...currentShowAnswer, [id]: !currentShowAnswer[id]});
    }

    return (
        <div className="accordion">
            <h1 className='main__title'>Frequently Asked Questions</h1>
            <ul className="accordion__list">
                {accordionData.map(({id, question, answer}) => (
                    <li key={id} className="accordion__item">
                        <h2 onClick={() => handleClickShowAnswer(id)}
                            className='accordion__item-question'>{question}
                            <img src="./images/down-arrow.png" alt="arrow-down"
                                 className={`icon ${currentShowAnswer[id] && 'rotate'}`}/>
                        </h2>
                        {currentShowAnswer[id] && <p className='accordion__item-answer'>{answer}</p>}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Accordion;