"use client";

import { useEffect, useState } from "react";
import { invoke } from "@tauri-apps/api/tauri";

export default function GetDir({ dir, depth, handleClick }) {
  const [files, setFiles] = useState([[]]);

  useEffect(() => {
    invoke("get_dir", { dir: dir })
      .then((result) => setFiles(result))
      .catch(console.error);
  }, [dir]);

  return (
    <div className="flex justify-center items-center">
      <div className="text-center items-center">
        {files.map((file, i) => (
          <p
            className="hover:underline hover:bg-green-400 border border-gray-500 rounded-md w-64"
            key={i}
            onClick={() => handleClick(files[i][depth])}
          >
            {files[i][depth]}
          </p>
        ))}
      </div>
    </div>
  );
}
