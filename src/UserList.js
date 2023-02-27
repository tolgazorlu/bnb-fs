import React,{useState, useEffect} from "react";

export default function UserList() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  const getUsers = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    setUsers(data);
  };

  useEffect(() => {
    getUsers();
  }, []);

  // useEffect(() => {}, [abc])   >>>>>> ComponentDidUpdate, with dependencies
  // useEffect(() => {}, [])      >>>>>> ComponentWillMount, ComponentDidMount
  // useEffect(() => {}, [])      >>>>>> ComponentDidUpdate, without dependencies

  const onSearch = (event) => {
    setSearch(event.target.value);
  }

  return (
    <div>
        <input value={search} onChange={onSearch} />
      {users.filter(user => user.name.toLocaleLowerCase().includes(search)).map((user) => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  );
}
