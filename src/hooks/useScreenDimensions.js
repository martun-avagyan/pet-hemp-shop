import { useState, useEffect } from 'react';

function useScreenDimensions() {
  const [screenDimensions, setScreenDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  function handleWindowSizeChange() {
    setScreenDimensions({ width: window.innerWidth, height: window.innerHeight });
  }

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);

  return screenDimensions;
}

export default useScreenDimensions;
