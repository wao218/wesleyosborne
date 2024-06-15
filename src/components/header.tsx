'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathName = usePathname();

  return (
    <header className='fixed top-0 left-0 p-4 flex items-end w-full flex-col gap-2'>
      <div className='flex justify-end gap-2 flex-wrap'>
        {pathName !== '/' && <Link href='/'>Home</Link>}
        <Link href='https://github.com/wao218' target='_blank'>
          Github
        </Link>
        <Link href='https://www.linkedin.com/in/wesley-osborne' target='_blank'>
          LinkedIn
        </Link>
        <Link href='https://youtube.com/@wesosborne' target='_blank'>
          Youtube
        </Link>
        <Link href={'/projects'}>Projects</Link>
      </div>
    </header>
  );
}
