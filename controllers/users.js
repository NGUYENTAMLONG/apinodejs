import { v4 as uuidv4 } from "uuid";
let users = [
  {
    firstName: "John",
    lastName: "Doe",
    age: 25,
  },
  {
    firstName: "Logan",
    lastName: "Doe",
    age: 21,
  },
  {
    firstName: "Lara",
    lastName: "Koe",
    age: 12,
  },
  {
    firstName: "Bobby",
    lastName: "Wick",
    age: 35,
  },
];

export const getUsers = (req, res) => {
  res.send(users);
};
export const createUser = (req, res) => {
  const user = req.body;
  //   const userId = uuidv4();
  //   const userWithId = { ...user, id: userId };

  //   const userWithId = { ...user, id: uuidv4() };

  users.push({ ...user, id: uuidv4() });

  res.send(`User with the name ${user.firstName} added to the database !`);
};
export const getUser = (req, res) => {
  const { id } = req.params;
  const foundUser = users.find((user, index) => user.id === id);
  res.send(foundUser);
};
export const deleteUser = (req, res) => {
  const { id } = req.params;
  users = users.filter((user) => user.id !== id);
  res.send(`User with the id ${id} deleted from the database.`);
};
export const updateUser = (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, age } = req.body;
  const user = users.find((user) => user.id === id);
  if (firstName) {
    user.firstName = firstName;
  }
  if (lastName) {
    user.lastName = lastName;
  }
  if (age) {
    user.age = age;
  }
  res.send(`User with the id ${id} has been updated`);
};
