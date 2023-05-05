import './pages/index.css'; // добавьте импорт главного файла стилей 
import { addCard } from './components/card';
import { enableValidation } from './components/validate';
import { getCards } from './components/api';
const allCards = document.querySelectorAll('.place-card');



// const initialCards = [
//     {
//         name: 'Mercedes',
//         link: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80'
//     },
//     {
//         name: 'Audi',
//         link: 'https://images.unsplash.com/photo-1541348263662-e068662d82af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
//     },
//     {
//         name: 'Ferrari ',
//         link: 'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80'
//     },
//     {
//         name: 'BMW',
//         link: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80'
//     },
//     {
//         name: 'Buhanka',
//         link: 'https://cdn.fishki.net/upload/post/2018/02/19/2516245/tn/duptx.jpg'
//     },
//     {
//         name: 'Walksvagen',
//         link: 'https://images.unsplash.com/photo-1616421275384-a4871cf679d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
//     }
// ];

// document.addEventListener('DOMContentLoaded', () => {
//     for (let i = initialCards.length - 1; i >= 0; i--) {
//         const asdasd = addCard(initialCards[i].name, initialCards[i].link);
//     }
// });

const setting = {
    inputErrorClass: 'popup__input_type_error',
    popupFormSelector: '.popup__profile-form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__submit-button',
    errorClass: 'popup__input-error_active',
    inactiveButtonClass: 'popup__submit-button_inactive',
}
//вызвали проверку валидации
enableValidation(setting);





getCards()
    .then((cards) => {
        console.log(cards)
        cards.forEach(card => {
            addCard(card.name, card.link)
            //логика добавления лайков-не проверял , ибо у всех в масиве число лайков равно нулю
            allCards.forEach(card => {
                console.log('cards')
                console.log(card.likes.length);
                card.querySelector('.place-card__like-number').textContent = `${card.likes.length}`;
            })
        });
    })

