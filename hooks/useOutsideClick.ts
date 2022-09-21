import { useRef, useEffect } from "react";

const useOutsideClick = (callback: () => void, isActive: boolean) => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (isActive === true) {
      const handleClick = (event: any) => {
        if (ref.current && !ref.current.contains(event.target)) {
          callback();
        }
      };
      document.addEventListener("click", handleClick);

      return () => {
        document.removeEventListener("click", handleClick);
      };
    }
  }, [isActive]);
  return ref;
};

export default useOutsideClick;
