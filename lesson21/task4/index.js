const getTitle = () => {
  return titleElem = document.querySelector('.title').textContent;
};

const getDescription = () => {
  return aboutElem = document.querySelector('.about').innerText;
};

const getPlans = () => {
  return plansElem = document.querySelector('.plans').innerHTML;
};

const getGoal = () => {
  return goalElem = document.querySelector('.goal').outerHTML;
};

export { getTitle, getDescription, getPlans, getGoal };

// console.log(getTitle());
// console.log(getDescription());
// console.log(getPlans());
// console.log(getGoal());
