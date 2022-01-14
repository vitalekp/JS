const getCustomersList = (obj) => {
  const idArr = Object.keys(obj);
  const usersArr = Object.values(obj);
  
  return usersArr
  .map((value, i) => {
    const userInfo = { ...value };
    userInfo.id = idArr[i];
    return userInfo;
  })
  .sort((a, b) => (a.age > b.age ? 1 : -1));
};

const customers = {
  'customer-id-1': {
    name: 'William',
    age: 54,
  },
  'customer-id-2': {
    name: 'Tom',
    age: 17,
  },
};

// console.log(customers);
const res = getCustomersList(customers);
console.log(res);
