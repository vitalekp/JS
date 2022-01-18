const contacts = [
  {
    name: 'Jom',
  },
  {
    name: 'Ann',
  },
  {
    name: 'Bar',
  },
];
const sortContacts = (contacts, isAsc = true) => {
  if (!Array.isArray(contacts)) {
    return null;
  }

  if (isAsc === false) {
    return contacts.sort((a, b) => b.name.localeCompare(a.name));
  }

  return contacts.sort((a, b) => a.name.localeCompare(b.name));
};

console.log(sortContacts(contacts, false));
