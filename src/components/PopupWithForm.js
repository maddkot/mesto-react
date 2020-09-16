import React from 'react';

function PopupWidthForm(props) {
    return (
    <div className={`popup popup_${props.name} ${props.isOpen && 'popup_opened'}`}>
      <div className="popup__container">
        <button className="popup__close-button" type="button" aria-label="Close" onClick={props.isClose}>
        </button>
        <form className="popup__form" action="#" method={`${props.method}`} name={`${props.nameForm}`} noValidate>
          <h3 className="popup__title">{props.title}</h3>
          {props.children}
        </form>
      </div>
    </div>
    )
}

export default PopupWidthForm;