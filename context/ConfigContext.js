import * as React from "react";

import { SOUND_ENABLED_KEY } from "./constants.js";

const ConfigContext = React.createContext();

function ConfigProvider(props) {
  let initialSoundEnabled = true;

  if (typeof window !== "undefined") {
    initialSoundEnabled =
      window.localStorage.getItem(SOUND_ENABLED_KEY) === "false" ? false : true;
  }

  const [isSoundEnabled, rawSetIsSoundEnabled] =
    React.useState(initialSoundEnabled);

  const value = React.useMemo(() => {
    const setIsSoundEnabled = (newValue) => {
      window.localStorage.setItem(SOUND_ENABLED_KEY, newValue);
      rawSetIsSoundEnabled(newValue);
    };

    return {
      isSoundEnabled,
      setIsSoundEnabled,
    };
  }, [isSoundEnabled, rawSetIsSoundEnabled]);

  return <ConfigContext.Provider value={value} {...props} />;
}

function useConfig() {
  const context = React.useContext(ConfigContext);
  if (context) {
    throw new Error("useConfig should be used inside ConfigProvider");
  }
  return context;
}

export { ConfigProvider, useConfig };
