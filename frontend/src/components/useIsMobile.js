import { useEffect, useState } from "react";

export function useIsMobile(MOBILE_BREAKPOINT = 550) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT}px)`);

    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };

    mql.addEventListener("change", onChange);

    setIsMobile(mql.matches);

    // cleaning the event listener to avoid performance leaks
    return () => {
      mql.removeEventListener("change", onChange);
    };
  }, [MOBILE_BREAKPOINT]);

  return isMobile;
}
