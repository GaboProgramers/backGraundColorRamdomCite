import React from 'react'
import BtnNextCite from './BtnNextCite'

const QuotesBox = ({ quoteRamdom, handleClick, colorRamdom }) => {

    const objColor = {
        color: colorRamdom
    }

    return (
        <article className='card' style={objColor}>
            <div className="card__paragraph">
                <i className='bx bxs-quote-left icon__left'></i>
                <p>
                    {quoteRamdom.quote}
                </p>
            </div>
            <h1 className='card__author'>{quoteRamdom.author}</h1>
            <BtnNextCite
                handleClick={handleClick}
                colorRamdom={colorRamdom}
            /> {/* Componente del button para cambio ramdom de cita */}
        </article>
    )
}

export default QuotesBox