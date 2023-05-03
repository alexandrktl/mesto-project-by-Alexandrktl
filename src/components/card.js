//функционал только создание одной карточки!
const cardsGrid = document.querySelector('.places-grid');// контейнер для карточек
const bigImgPopup = document.querySelector('.popup_type-big-image');//попап большой картинки



import { closePopup } from "./modal";
import { addPhotoPopup } from "./modal";


//функция добавления карточки
function addCard(nameFromPopup, urlFromPopup) {
    const cardTemplate = document.querySelector('#card-template').content; // получаем контент из заготовки  в DOM
    const card = cardTemplate.querySelector('.place-card').cloneNode(true);  // клонируем содержимое дива из заготовки,
    card.querySelector('.place-card__desctiption-text').textContent = nameFromPopup;// тут меняем текст у картинки
    card.querySelector('.place-card__image').src = urlFromPopup; // тут меняем src у картинки

    //кнопка лайк у карточки
    card.querySelector('.place-card__like-button').addEventListener('click', function (evt) {
        evt.target.classList.toggle('place-card__like-button_active');
    });

    //кнопка удаления карточки
    card.querySelector('.place-card__trash-button').addEventListener('click', function (evt) {
        const eventTarget = evt.target;                 //опредилили где именно мы нажали на кнопку мусорки
        const parentElement = eventTarget.parentElement // находим родительский элемент
        parentElement.remove();                         //удаляем родителя 
    });

    //нажатие на картинку-открытие попапа БОЛЬШОЙ картинки
    card.querySelector('.place-card__image').addEventListener('click', function (evt) {
        const imgUrl = evt.target.src; // нашли ссылку на именно эту картинку
        bigImgPopup.classList.toggle('popup_opened');//нашли и переключили класс для активации попапа
        const mainImg = document.querySelector('.popup__main-photo');//нашли большую картинку
        mainImg.src = imgUrl;//добавили ей ссылку для отображения
        document.querySelector('.popup_text-big-image').textContent = card.querySelector('.place-card__desctiption-text').textContent;//нашли текст у попапа и заменили его на текст из карточки

    });

    cardsGrid.prepend(card); //вставили карточкy в начало
    closePopup(addPhotoPopup);
    return card;
}
export{addCard};


