const getTitle = () => document.querySelector('.title').textContent;


const getDescription = () => document.querySelector('.about').innerText;


const getPlans = () => document.querySelector('.plans').innerHTML;


const getGoal = () => document.querySelector('.goal').outerHTML;


export { getTitle, getDescription, getPlans, getGoal };

// console.log(getTitle());
// console.log(getDescription());
// console.log(getPlans());
// console.log(getGoal());
