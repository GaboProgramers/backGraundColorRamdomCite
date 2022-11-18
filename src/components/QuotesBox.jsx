import React from 'react'

const QuotesBox = ({ quoteRamdom, handleClick, colorRamdom }) => {

    const objColor = {
        color: colorRamdom
    }

    const objColorBtn = {
        backgroundColor: colorRamdom
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
            <button style={objColorBtn} className='btn' onClick={handleClick}><i className='bx bx-chevron-right icon'></i></button>
        </article>
    )
}

export default QuotesBox