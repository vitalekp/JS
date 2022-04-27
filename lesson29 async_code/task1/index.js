'use strict';

// input: string, func
// output: undefined

// algo
// 1 створити ел. img
// 2 добавити img всередину .page (load)
// 3 після загрузки викликати func callback (null, imgElem(DOM елемент загруженої сторінки))
// 4 якщо помилка при загрузці картинки, func callback має вивести текст
// 5 test

export const addImage = (imgSrc, callback) => {
  const imgElem = document.createElement('img');
  imgElem.setAttribute('alt', 'My photo');
  imgElem.src = imgSrc;

  const divElem = document.querySelector('.page');
  divElem.append(imgElem);

  const onImgLoaded = () => {
    callback(null, imgElem);
  };

  // const errorLoad = () => {
  //   callback('Image load is failed');
  // };

  imgElem.addEventListener('load', onImgLoaded);
  imgElem.addEventListener('error', () => callback('Image load is failed'));
};

// callack function
const onImageLoaded = (error, imgElem) => {
  if (error) {
    console.log(error);
    return;
  }

  const { width, height } = imgElem;
  const sizeElem = document.querySelector('.image-size');

  sizeElem.textContent = `${width} x ${height}`;
};

// examples
addImage(
  'https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg',
  onImageLoaded,
);
