"use client";

import GetDir from "./getdir";
import { useState } from "react";

const root = "C:\\";

const tempDrive1 = "D:\\";

const tempDrive2 = "E:\\";

export default function Home() {
  const [dir, setDir] = useState(root);
  const [depth, setDepth] = useState(1);

  const nextFile = (next) => {
    setDepth(depth + 1);
    let path = dir + next + "\\";
    setDir(path);
  }

  const goToDrive = (drive) => {
    setDepth(1);
    setDir(drive)
  }

  return (
    <main className="h-[100vw] bg-sky-500">
      <div className="flex-row text-center">
        <h1>Current path: {dir}</h1>
        <div>
          <button onClick={() => goToDrive(root)}>Root</button>
          <button className="pl-5" onClick={() => goToDrive(tempDrive1)}>
            D:\\
          </button>
          <button className="pl-5" onClick={() => goToDrive(tempDrive2)}>
            E:\\
          </button>
        </div>
      </div>
      <GetDir dir={dir} depth={depth} handleClick={nextFile} />
    </main>
  );
}
