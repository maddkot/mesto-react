import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWidthForm from './PopupWithForm';
import PopupImage from './PopupImage';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import { apiData } from '../utils/Api';
import EditProfilePopup from './EditProfilePopup';

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


  const [currentUser, setCurrentUser] = React.useState({});
  const [cards, setCards] = React.useState([])

  React.useEffect(() => {
    Promise.all([apiData.getUserInfo(), apiData.getInitialCards()])
      .then(([userData, initialCards]) => {
        setCurrentUser(userData)
        setCards(initialCards) 
      })   
      .catch((error) => {
        console.log(error);
    })
  }, [])

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    if (!isLiked) {
      apiData.setLike(card._id)
        .then((newCard) => {
          const newCards = cards.map((c) => c._id === card._id ? newCard : c);
          setCards(newCards);
        })
        .catch((error) => {
          console.log(error);
      });
    } else {
      apiData.deleteLike(card._id)
        .then((newCard) => {
          const newCards = cards.map((c) => c._id === card._id ? newCard : c);
          setCards(newCards);
        })
        .catch((error) => {
          console.log(error);
      })
    }
  }

  //происходит ошибка рендеринга. удаляеются все карточки, кроме удаляемой карточки 
  function handleCardDelete(card) {
      apiData.deleteCard(card._id)
        .then(() => {
          const NewCards = cards.filter((c) => c._id !== card._id );          
          setCards(NewCards);
        })
        .catch((error) => {
          console.log(error);
      })
  }

  function handleUpdateUser(items) {
      apiData.setUserInfo(items)
        .then((res) => {
          setCurrentUser(res)
          closeAllPopups()
        })
        .catch((error) => {
          console.log(error);
      })
    }
    

  return (
    <CurrentUserContext.Provider value={currentUser}>
    <div className="page">       
    
      <Header />
      <Main
        cards={cards}    
        onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onCardClick={handleCardClick}
        onCardLike={handleCardLike}
        onCardDelete={handleCardDelete}  
      />
      <Footer />
    
      

    <section className="popups">  

    <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          isClose={closeAllPopups}>
          onUpdateUser={handleUpdateUser}  
    </EditProfilePopup>
          
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
  </CurrentUserContext.Provider>
      
  );
}

export default App;
