import React, { Children } from "react";
import Link from "next/link";

export default function Header() {
  return (
    <body>
      <header>
        <h1> This is my website</h1>
        <nav>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
          </ul>
        </nav>
      </header>
    </body>
  );
}
