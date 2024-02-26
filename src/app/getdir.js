"use client";

import { useEffect, useState } from "react";
import { invoke } from "@tauri-apps/api/tauri";

export default function GetDir(props) {
  const [files, setFiles] = useState([]);
  const [dir, setDir] = useState("");

  if (dir === "") {
    setDir(props.root);
  }

  useEffect(() => {
    invoke("get_dir", { dir: dir })
      .then((result) => setFiles(result))
      .catch(console.error);
  }, [dir]);

  return (
    <div>
      {files.map((file, i) => (
        <p key={i} onClick={() => setDir(file)}>
          {file}
        </p>
      ))}
    </div>
  );
}
