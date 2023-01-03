"use client";
import { User } from "./api";
import Link from "next/link";

export function UserListItem({ user }: { user: User }) {
  return (
    <li>
      <Link href={`/users/${user.id}?name=zion`}>{user.first_name}</Link>
    </li>
  );
}
