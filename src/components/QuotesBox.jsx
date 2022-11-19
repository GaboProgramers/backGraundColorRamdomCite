import React from 'react'
import BtnNextCite from './BtnNextCite'
import ParagraphQuote from './ParagraphQuote'

const QuotesBox = ({ quoteRamdom, handleClick, colorRamdom, quotes }) => {

    const objColor = {
        color: colorRamdom
    }

    return (
        <article className='card' style={objColor}>
            <ParagraphQuote
                quoteRamdom={quoteRamdom}
                quote={quotes}
            />
            <BtnNextCite
                handleClick={handleClick}
                colorRamdom={colorRamdom}
            /> {/* Componente del button para cambio ramdom de cita */}
        </article>
    )
}

export default QuotesBox