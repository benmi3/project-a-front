'use client'

import { useEffect, useState } from 'react';
import { invoke } from '@tauri-apps/api/tauri'

export default function Task() {
  const [task, setTask] = useState('');

  useEffect(() => {
    invoke<string>('task', { name: 'Next.js' })
      .then(result => setTask(result))
      .catch(console.error)
  }, [])

  // Necessary because we will have to use Greet as a component later.
  return <div>{task}</div>;
}
