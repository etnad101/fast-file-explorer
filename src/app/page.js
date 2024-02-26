"use client";

import GetDir from "./getdir";
import { useState } from "react";

const root = "C:\\";

const tempDrive1 = "D:\\";

const tempDrive2 = "E:\\";

export default function Home() {
  const [dir, setDir] = useState(root);

  return (
    <main>
      <h1>Current path: {dir}</h1>
      <div className="flex-row">
        <button onClick={() => setDir(root)}>Root</button>
        <button className="pl-5" onClick={() => setDir(tempDrive1)}>D:\\</button>
        <button className="pl-5" onClick={() => setDir(tempDrive2)}>E:\\</button>
      </div>
      <GetDir dir={dir} setDir={setDir} />
    </main>
  );
}
