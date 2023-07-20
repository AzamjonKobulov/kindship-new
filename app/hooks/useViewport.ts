// @ts-nocheck
import { useEffect, useRef, RefObject } from 'react';

const useViewport = (): RefObject<HTMLDivElement> => {
  const mainContent = useRef<HTMLDivElement>(null);

  const updateViewport = () => {
    if (mainContent.current) {
      const height = window.innerHeight.toFixed()
      const viewportHeight = window?.visualViewport?.height.toFixed()
      const contentDistanceBottom =  height - mainContent.current?.parentElement.getBoundingClientRect().bottom.toFixed()
      const y =  (height - viewportHeight) - contentDistanceBottom;

      window.scrollTo({ top: y, behavior: 'smooth' })
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