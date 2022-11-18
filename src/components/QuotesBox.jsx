import React from 'react'
import BtnNextCite from './BtnNextCite'

const QuotesBox = ({ quoteRamdom, handleClick, colorRamdom }) => {

    const objColor = {
        color: colorRamdom
    }

    return (
        <article className='card' style={objColor}>
            <div className="paragraph">
                <i className='bx bxs-quote-left'></i>
                <p>
                    {quoteRamdom.quote}
                </p>
            </div>
            <h1 className='card__author'>{quoteRamdom.author}</h1>
            <BtnNextCite
                handleClick={handleClick}
                colorRamdom={colorRamdom}
            />
        </article>
    )
}

export default QuotesBox