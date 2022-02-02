const getTitle = () => {
  const titleElem = document.querySelector('.title');

  return titleElem.textContent;
};

const getDescription = () => {
  const aboutElem = document.querySelector('.about');

  return aboutElem.innerText;
};

const getPlans = () => {
  const plansElem = document.querySelector('.plans');

  return plansElem.innerHTML;
};

const getGoal = () => {
  const goalElem = document.querySelector('.goal');

  return goalElem.outerHTML;
};

export { getTitle, getDescription, getPlans, getGoal };

console.log(getTitle());
console.log(getDescription());
console.log(getPlans());
console.log(getGoal());
