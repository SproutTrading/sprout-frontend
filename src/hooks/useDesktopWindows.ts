import { useState, useCallback } from 'react';

interface WindowStates {
  sprout: boolean;
  profile: boolean;
  deployer: boolean;
  v2: boolean;
}

export function useDesktopWindows() {
  const [windows, setWindows] = useState<WindowStates>({
    sprout: false,
    profile: false,
    deployer: false,
    v2: false
  });

  const [minimized, setMinimized] = useState<WindowStates>({
    sprout: false,
    profile: false,
    deployer: false,
    v2: false
  });

  const handleToggleWindow = useCallback((window: keyof WindowStates, state: boolean) => {
    setWindows(prev => ({ ...prev, [window]: state }));
    if (state) {
      setMinimized(prev => ({ ...prev, [window]: false }));
    }
  }, []);

  const handleMinimize = useCallback((window: keyof WindowStates) => {
    setMinimized(prev => ({ ...prev, [window]: true }));
  }, []);

  const handleRestore = useCallback((window: keyof WindowStates) => {
    setMinimized(prev => ({ ...prev, [window]: false }));
  }, []);

  return {
    windows,
    minimized,
    handleToggleWindow,
    handleMinimize,
    handleRestore
  };
}