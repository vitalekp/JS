export const squaredNumbers = () => 
Array.from(document.querySelectorAll('.number'))
  .map(el => {
    const squaredNumber = el.dataset.number ** 2;
    el.dataset.squaredNumber = squaredNumber;
  });

// squaredNumbers();
