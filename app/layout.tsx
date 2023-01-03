import "./globals.css";
import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div>
          <header
            style={{
              margin: "1em",
            }}
          >
            App header
          </header>
          <nav
            style={{
              margin: "1em",
              display: "flex",
              columnGap: 16,
            }}
          >
            <Link href="/">Home</Link>
            <Link href="/users">Users</Link>
          </nav>
          <div
            style={{
              margin: "1em",
            }}
          >
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
