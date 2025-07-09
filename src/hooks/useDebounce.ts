import { useRef } from "react";

export default function useDebounce<T extends (...args: any) => any>(
  cb: T,
  delay: number,
): (args: Parameters<T>) => void {
  const timeoutId = useRef<ReturnType<typeof setTimeout> | null>(null);
  return function (args: Parameters<T>) {
    if (timeoutId.current) {
      clearTimeout(timeoutId.current);
    }
    timeoutId.current = setTimeout(() => {
      cb(...args);
    }, delay);
  };
}
