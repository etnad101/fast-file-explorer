'use client'

import { useEffect, useState } from 'react';
import { invoke } from '@tauri-apps/api/tauri'

export default function GetDir(props) {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    invoke('get_dir', { dir: props.dir })
      .then(result => setFiles(result))
      .catch(console.error)
  }, [])

  // Necessary because we will have to use Greet as a component later.
  return <div>{files.map((file) => (
    <p>
      {file}
    </p>
  ))}</div>;
}