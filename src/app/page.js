"use client";

import GetDir from "./getdir";

const root = "/";

let current_dir = null;

export default function Home() {
  if (!current_dir) {
    current_dir = root;
  }

  return (
    <main>
      <GetDir root={current_dir} />
    </main>
  );
}
