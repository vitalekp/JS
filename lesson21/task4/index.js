const getTitle = () => {
  return document.querySelector('.title').textContent;
};

const getDescription = () => {
  return document.querySelector('.about').innerText;
};

const getPlans = () => {
  return document.querySelector('.plans').innerHTML;
};

const getGoal = () => {
  return document.querySelector('.goal').outerHTML;
};

export { getTitle, getDescription, getPlans, getGoal };

// console.log(getTitle());
// console.log(getDescription());
// console.log(getPlans());
// console.log(getGoal());
