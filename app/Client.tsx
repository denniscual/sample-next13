"use client";
import type { ReactNode } from "react";
import { useState } from "react";

export default function Client({ children }: { children: ReactNode }) {
  const [toggle, setToggle] = useState(false);
  return (
    <div>
      <div>
        <div>Im a Wrapper Client</div>
        <div>
          <button onClick={() => setToggle(!toggle)}>Toggle</button>
        </div>
      </div>
      <div
        style={{
          margin: "1em",
          border: `1px solid ${toggle ? "green" : "lightpink"}`,
        }}
      >
        {children}
      </div>
    </div>
  );
}
