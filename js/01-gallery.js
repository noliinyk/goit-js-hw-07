import { galleryItems } from './gallery-items.js';
// Change code below this line

//+Создание и рендер разметки по массиву данных galleryItems и предоставленному шаблону элемента галереи.
//+Реализация делегирования на div.gallery и получение url большого изображения.
//+Подключение скрипта и стилей библиотеки модального окна basicLightbox. Используй CDN сервис jsdelivr и добавь в проект ссылки на минифицированные (.min) файлы библиотеки.
//Открытие модального окна по клику на элементе галереи. Для этого ознакомься с документацией и примерами.
//Замена значения атрибута src элемента <img> в модальном окне перед открытием. Используй готовую разметку модального окна с изображением из примеров библиотеки basicLightbox.



const galleryContainer = document.querySelector('.gallery');
const galleryMarkup = createGalleryMarkup(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);
let instance; 


function createGalleryMarkup(galleryItems) {
    return galleryItems
      .map(({ preview, original, description }) => {
        return `
        <div class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </div>
      `
      })
      .join('');
  };
 
galleryContainer.addEventListener('click', onGalleryContainerClick);
function onGalleryContainerClick (event){

 event.preventDefault();
 openModal(event);
 closeModal();
}

  

  
  function openModal(event){
   /* if (event.target.nodeName !== "img") {
      return;
    };*/
    const url = event.target.dataset.source;
    instance = basicLightbox.create(`<img src="${url}" width="800" height="600">`);
    instance.element().querySelector('img').src = event.target.getAttribute('data-source');
   
    instance.show();
  }
  
  function closeModal() {
    document.addEventListener("keydown", (e) => {
      if (e.code !== "Escape") {
          return;
      }
      instance.close();
  });
    
}







