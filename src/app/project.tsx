'use client'

import { useEffect, useState } from 'react';
import { invoke } from '@tauri-apps/api/tauri'

export default function Project() {
  const [project, setProject] = useState('');

  useEffect(() => {
    invoke<string>('project', { name: 'Project - 1' })
      .then(result => setProject(result))
      .catch(console.error)
  }, [])

  // Necessary because we will have to use Greet as a component later.
  return <div>{project}</div>;
}
