// app/hooks/useReloadOnReturn.js
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export function useReloadOnReturn() {
  const pathname = usePathname();

  useEffect(() => {
    let hasLeft = false;

    if (pathname === '/') {
      if (hasLeft) {
        window.location.reload();
      }
    } else {
      hasLeft = true;
    }

    return () => {
      if (pathname === '/') {
        hasLeft = true;
      }
    };
  }, [pathname]);
}