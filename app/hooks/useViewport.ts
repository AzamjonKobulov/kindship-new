// @ts-nocheck
import { useEffect, useRef, RefObject } from 'react';

const useViewport = (): RefObject<HTMLDivElement> => {
  const mainContent = useRef<HTMLDivElement>(null);

  const updateViewport = () => {
    if (mainContent.current) {
      const y =
        (window.innerHeight.toFixed() -
          (window?.visualViewport?.height || 0).toFixed()) -
        mainContent.current?.getBoundingClientRect().bottom.toFixed();
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined' && typeof window.visualViewport !== 'undefined') {
      updateViewport();

      window.visualViewport?.addEventListener('resize', updateViewport);

      return () => window.visualViewport?.removeEventListener('resize', updateViewport);
    }
  }, []);

  return mainContent;
};

export default useViewport;