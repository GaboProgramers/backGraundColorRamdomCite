import React from 'react'

const ParagraphQuote = ({ quoteRamdom }) => {
    return (
        <div>
            <div className="card__paragraph">
                <i className='bx bxs-quote-left icon__left'></i>
                <p>
                    {quoteRamdom.quote}
                </p>
            </div>
            <h1 className='card__author'>{quoteRamdom.author}</h1>
        </div>

    )
}

export default ParagraphQuote