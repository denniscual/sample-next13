export interface User {
  id: number;
  email: string;
  first_name: string;
}

export async function getUsers(): Promise<{
  page: number;
  data: User[];
}> {
  return new Promise(async (res) => {
    const response = await fetch(`https://reqres.in/api/users?page=1`);
    // Recommendation: handle errors
    if (!response.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error("Failed to fetch data");
    }
    setTimeout(() => {
      res(response.json());
    }, 2000);
  });
}

export async function getUser(id: string): Promise<{
  data: User;
}> {
  return new Promise(async (res) => {
    const response = await fetch(`https://reqres.in/api/users/${id}`);
    // Recommendation: handle errors
    if (!response.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error("Failed to fetch data");
    }
    setTimeout(() => {
      res(response.json());
    }, 2000);
  });
}
