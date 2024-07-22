import { useState, useEffect } from 'react';

function useMediaQuery(width: number) {
  const [targetReached, setTargetReached] = useState(false);

  useEffect(() => {
    const updateTarget = (e: MediaQueryListEvent) => {
      if (e.matches) {
        setTargetReached(true);
      } else {
        setTargetReached(false);
      }
    };

    const media = window.matchMedia(`(min-width: ${width}px)`);
    media.addListener(updateTarget);

    // Check on mount (callback is not called until a change occurs)
    if (media.matches) {
      setTargetReached(true);
    }

    return () => media.removeListener(updateTarget);
  }, [width]);

  return targetReached;
}

export default useMediaQuery;
