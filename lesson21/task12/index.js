export const squaredNumbers = () => {
  Array.from(document.querySelectorAll('.number')).map(el => {
    const res = el.dataset.number ** 2;
    el.dataset.squaredNumber = res;
  })
};

// squaredNumbers();
