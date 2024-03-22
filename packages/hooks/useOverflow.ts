import { RefObject, useEffect, useRef, useState } from "react";

type ElementRefType<T> = RefObject<T>;

export const useOverflow = <T extends HTMLElement>() => {
  const ref: ElementRefType<T> = useRef<T>(null);
  const [isOverflow, setIsOverflow] = useState({
    horizontal: false,
    vertical: false,
  });
  useEffect(() => {
    const { current } = ref;
    if (current) {
      const verticalOverflow = current.scrollHeight > current.offsetHeight;
      const horizontalOverflow = current.scrollWidth > current.offsetWidth;
      setIsOverflow({
        horizontal: horizontalOverflow,
        vertical: verticalOverflow,
      });
    }
  }, [ref]);
  return { ref, isOverflow };
};
