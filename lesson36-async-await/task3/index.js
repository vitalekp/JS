// in [str, str, str]
// out promise

// algo
// 1 getUsersBlogs(['google', 'facebook', 'reactjs']) ==>
// ["https://opensource.google/", "https://opensource.fb.com", "https://reactjs.org"]
// test

const baseUrl = 'https://api.github.com/users/';

const fetchUser = async userId => {
  const response = await fetch(`${baseUrl}${userId}`);

  if (response.ok) {
    return response.json();
  }

  throw new Error('Failed to get user data');
};

export const getUsersBlogs = users => {
  try {
    const link = users.map(userId => {
      return fetchUser(userId).then(user => user.blog);
    });
    return Promise.all(link);
  } catch (err) {
    alert(err.message);
  }
};

// test data
getUsersBlogs(['google', 'facebook', 'reactjs']).then(linksList => console.log(linksList)); // ==> ["https://opensource.google/", "https://opensource.fb.com", "https://reactjs.org"]
getUsersBlogs(['microsoft']).then(linksList => console.log(linksList)); // ==> ["https://opensource.microsoft.com"]
