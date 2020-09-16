import React from 'react'

function Card({card, onCardClick}) {
    
  function handleClick() {
    onCardClick(card);    
  } 

    return (
        <div className="element">
        <img className="element__photo" src={card.link} alt={card.name} onClick={handleClick}/>
        <div className="element__group">
          <h4 className="element__text">{card.name}</h4>
          <div className="element__container-like">
            <button className="element__button-like" type="button" aria-label="Like"></button>
            <span className="element__like-counter">{card.likes.length}</span>
          </div>        
        </div>
        <button className="element__basket" type="button" arial-label="basket"></button>
      </div> 
    )
}

export default Card