"use client";

import { useEffect, useState } from "react";
import { invoke } from "@tauri-apps/api/tauri";

export default function GetDir({ dir, setDir }) {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    invoke("get_dir", { dir: dir })
      .then((result) => setFiles(result))
      .catch(console.error);
  }, [dir]);

  return (
    <div>
      <div>
        {files.map((file, i) => (
          <p className="hover:underline hover:bg-green-400" key={i} onClick={() => setDir(file)}>
            {file}
          </p>
        ))}
      </div>
    </div>
  );
}
