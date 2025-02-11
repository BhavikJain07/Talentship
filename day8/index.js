import axios from "axios";

const fetchUsers = async () => {
  const result = await axios.get(`https://jsonplaceholder.typicode.com/users`);
  const data = await result.data;
  return data;
};

const filterUsers = (users) => {
  return users.map(({id, name, email, ...rest}) => ({id, name, email}));
};

const addUser = (users) => {
    return [...users, {
        id:11,
        name: "Bhavik P",
        email: "bhavikjainhp@gmail.com",
    }]
}

const removeDuplicates = (users) => {
    return new Set(users);
}

console.log(removeDuplicates(addUser(filterUsers(await fetchUsers()))));