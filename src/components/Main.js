import React from 'react';
import { apiData } from '../utils/Api'
import Card from './Card'


function Main({ onEditAvatar, onEditProfile, onAddPlace, onCardClick }) {
    
const [userName, setUserName] = React.useState('');
const [userDescription, setUserDescription] = React.useState('');
const [userAvatar, setUserAvatar] = React.useState('');   
const [cards, setCards] = React.useState([])
    
    React.useEffect(() => {
        apiData.getUserInfo()
            .then((res) => {
                setUserName(res.name)
                setUserDescription(res.about)
                setUserAvatar(res.avatar)
            })
            .catch((error) => {
                console.log(error);
            })

        apiData.getInitialCards()
            .then((res) => {
                setCards(res);
            })
    },[])        
    

    return (
        <main className="content">

            <section className="profile">
                <button className="profile__avatar-button popup_opened" onClick={onEditAvatar}>
                    <img className="profile__avatar" src={userAvatar} alt="Изображение пользователя" />
                </button>
                <div className="profile__info">
                    <h1 className="profile__full-name">{userName}</h1>
                    <button className="profile__edit-button" type="button" aria-label="Edit" onClick={onEditProfile}>
                    </button>
                    <p className="profile__description">{userDescription}</p>
                </div>
                <button className="profile__add-button" type="button" aria-label="Add" onClick={onAddPlace}>
                </button>
            </section>

            <div className="elements">
                {cards.map((card) =>(
                    <Card
                    key={card._id}
                    card={card}
                    onCardClick={onCardClick}    
                    />
                )
                )}
            </div>
            
        </main>
    );
}

export default Main;