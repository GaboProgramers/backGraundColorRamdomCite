import React from 'react'

const BtnNextCite = ({ handleClick, colorRamdom }) => {

    const objColorBtn = {
        backgroundColor: colorRamdom
    }

    return (
        <button style={objColorBtn}
            className='btn'
            onClick={handleClick}>
            <i className='bx bx-chevron-right icon'></i>
        </button>
    )
}

export default BtnNextCite