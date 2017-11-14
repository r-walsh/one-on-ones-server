const { find } = require('lodash');
const { oneOnOnes, users } = require('./dummyData')();

module.exports = {
  Query: {
    user(_, { id, email }) {
      if (id) {
        return find(users, { id });
      }

      if (email) {
        return find(users, { email });
      }
    },
    oneOnOne(_, { id }) {
      return find(oneOnOnes, { id });
    },
    oneOnOnes(_, { userId }) {
      return oneOnOnes.filter(
        ({ employeeId, managerId }) =>
          userId === employeeId || userId === managerId,
      );
    },
  },
  User: {
    oneOnOnes({ id }) {
      return oneOnOnes.filter(
        ({ employeeId, managerId }) =>
          userId === employeeId || userId === managerId,
      );
    },
  },
  OneOnOne: {
    employee({ employeeId }) {
      return users.find(({ id }) => id === employeeId);
    },
    manager({ managerId }) {
      return users.find(({ id }) => id === managerId);
    },
  },
};
