import React from 'react'
import "./Project2.scss"

const PageItem = ({ img, nextPage, prevPage, topPage }) => {

    return (

        <div className='project2__card__container' >
            <div className='project2__card js-color-stop' data-background-color='rgb(60, 191, 246)'>
                <img src={img} alt="book1" />
                <div className="project2__card2__info">
                    <p>Issue #6</p>
                    <p><a href='#'> BUY HERE </a></p>
                    <p>or in <a href='#'>selected stores</a></p>
                </div>
                <div className='project2__button__section'>
                    <button onClick={nextPage}>Next Page</button>
                    <button onClick={prevPage}>Prev Page</button>
                    <button onClick={topPage}>Top Page</button>
                </div>
            </div>
        </div>
    )
}

export default PageItem