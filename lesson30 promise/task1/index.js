// input: string
// output: object

export const addImage = imgSrc => {
  const promise = new Promise((resolve, reject) => {
    const imgElem = document.createElement('img');
    imgElem.setAttribute('alt', 'My photo');
    imgElem.src = imgSrc;

    const divElem = document.querySelector('.page');
    divElem.append(imgElem);

    const onImgLoaded = () => {
      const { width, height } = imgElem;
      resolve({ width, height });
    };

    imgElem.addEventListener('load', onImgLoaded);
    imgElem.addEventListener('error', () => reject(new Error('Image load is failed...')));
  });

  return promise;
};

// examples
const imgSrc =
  'https://p.bigstockphoto.om/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg';
const resultPromise = addImage(imgSrc);

resultPromise.then(data => {
  const sizeElem = document.querySelector('.image-size');
  sizeElem.textContent = `${data.width} x ${data.height}`;
});
resultPromise.catch(error => console.log(error));
