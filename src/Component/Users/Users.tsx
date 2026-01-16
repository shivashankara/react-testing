import { useEffect, useState } from "react";

const Users = () => {
  const [users, setUsers] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setUsers(
          data.map((user: { name: string }) => {
            return user.name;
          })
        );
      })
      .catch((error) => setError("Error Fetching data"));
  }, []);
  return (
    <>
      <h1>Users List</h1>
      {error && <p>Error</p>}
      <ul>
        {users.map((user) => {
          return <li key={user}>{user}</li>;
        })}
      </ul>
    </>
  );
};

export default Users;
