import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWidthForm from './PopupWithForm';
import PopupImage from './PopupImage';

function App() {

  const [isEditProfilePopupOpen, setEditProfile] = React.useState(false)  
  function handleEditProfileClick() {
    setEditProfile(true);
  }
  
  const [isEditAvatarPopupOpen, setEditAvatar] = React.useState(false)
  function handleEditAvatarClick() {
    setEditAvatar(true);
  }

  const [isAddPlacePopupOpen, setAddCard] = React.useState(false)
  function handleAddPlaceClick() {
    setAddCard(true)
  }

  const [selectedCard, setSelectCardClick] = React.useState('')
  function handleCardClick(card) {
    setSelectCardClick(card)
  }

  function closeAllPopups() {
    setEditProfile(false)
    setEditAvatar(false)
    setAddCard(false)
    handleCardClick('')
  }

  return (
    <div className="page">       
    
      <Header />
      <Main
        onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onCardClick={handleCardClick}
      />
      <Footer />
    
      

    <section className="popups">
    <PopupWidthForm 
          name='edit-profile'
          title='Редактировать профиль'
          nameForm='popup__form_edit-profile'
          method="GET"
          isOpen={isEditProfilePopupOpen}
          isClose ={closeAllPopups}
          children={
            <>
          <div className="popup__inputs">
            <input id="full-name-input" className="popup__input popup__input_full-name" type="text"
              name="fullName" required placeholder="Введите имя" minLength="2" maxLength="40"
              autoComplete="off" pattern="[А-Яа-я ёЁ A-Za-z -]{1,}"/>
            <span id="full-name-input-error" className="popup__input-error"></span>
            <input id="descriptions-input" className="popup__input popup__input_description" type="text"
              name="description" required placeholder="Введите профессию" minLength="2" maxLength="200"
              autoComplete="off"/>
            <span id="descriptions-input-error" className="popup__input-error"></span>
          </div>

          <button className="popup__button-save popup__button-save_profile" type="submit" aria-label="Save">Сохранить</button>
          </>
          }
    />

    <PopupWidthForm
          name='add-form'
          title='Новое место'
          nameForm='popup__form_add-newCard'
          method='GET'
          isOpen={isAddPlacePopupOpen}
          isClose ={closeAllPopups}
          children={
            <>
            <div className="popup__inputs">
              <input id="card-title-input" className="popup__input popup__input_title" type="text" name="title"
              required placeholder="Название" minLength="1" maxLength="30" autoComplete="off"/>
              <span id="card-title-input-error" className="popup__input-error"></span>
              <input id="url-input" className="popup__input popup__input_url" type="url" name="url" required
              placeholder="Cсылка на картинку (url)" autoComplete="off"/>
              <span id="url-input-error" className="popup__input-error"></span>
          </div>
          <button className="popup__button-save popup__button-save_form_add" type="submit" aria-label="Save">Создать</button> 
            </>  
          }
    />

    <PopupWidthForm
          name='delete-card'
          title='Вы уверены?'
          nameForm='popup__form_delete-card'
          method='POST'
          isClose ={closeAllPopups}
          children={
            <>
              <button className="popup__button-delete" type="submit">Да</button>
            </>
          }
    />

    <PopupWidthForm
          name='avatar'
          title='Обновить аватар'
          nameForm='popup__form_avatar'
          method='GET'
          isOpen={isEditAvatarPopupOpen}
          isClose ={closeAllPopups}
          children={
            <>
            <div className="popup__inputs">
              <input id="avatar-input" className="popup__input popup__input_url" type="url" name="url" required placeholder="https://..." autoComplete="off"/>
              <span id="avatar-input-error" className="popup__input-error"></span>
            </div>
            <button className="popup__button-save popup__button-save_profile" type="submit" aria-label="Save">Сохранить</button>
            </>
          }        
        />
        
    <PopupImage
        card={selectedCard}
        onClose={closeAllPopups}  
    />
        
    </section>

    </div>
  );
}

export default App;
