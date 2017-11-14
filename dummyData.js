const casual = require('casual');

const genDB = () => {
  const users = new Array(25).fill().map((_, index) => ({
    email: casual.email,
    id: index.toString(),
    name: casual.full_name,
    password: casual.password,
  }));

  const oneOnOnes = new Array(100).fill().map((_, index) => ({
    agenda: casual.sentences(5),
    employeeId: users[Math.floor(Math.random() * users.length)].id,
    id: index.toString(),
    managerId: users[Math.floor(Math.random() * users.length)].id,
    title: casual.sentence,
  }));

  return { oneOnOnes, users };
};

module.exports = genDB;
