// Simulazione di un database in memoria
const users = [];

exports.getAllUsers = async () => {
  return users;
};

exports.createUser = async (userData) => {
  const newUser = { id: users.length + 1, ...userData };
  users.push(newUser);
  return newUser;
};