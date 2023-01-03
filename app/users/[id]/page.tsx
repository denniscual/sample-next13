import { getUser } from "../api";

async function User({ params, searchParams }: any) {
  console.log({ searchParams });
  const user = await getUser(params.id);

  return (
    <main>
      <h1>User Info</h1>
      <p>Name: {user.data.first_name}</p>
      <p>Email: {user.data.email}</p>
    </main>
  );
}

export default User;
