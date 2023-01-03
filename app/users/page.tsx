import { getUsers } from "./api";
import { UserListItem } from "./UserListItem";

async function Users() {
  const users = await getUsers();

  return (
    <main>
      <h1>Users</h1>
      <ul>
        {users.data.map((user) => (
          <UserListItem key={user.id} user={user} />
        ))}
      </ul>
    </main>
  );
}

export default Users;
