import { NextApiHandler } from "next";
import queryString from "query-string";

const handler: NextApiHandler = async function (req, res) {
  const response = await fetch(
    `https://reqres.in/api/users?${queryString.stringify(req.query)}`
  );
  // Recommendation: handle errors
  if (!response.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  res.status(200).json(await response.json());
};

export default handler;
