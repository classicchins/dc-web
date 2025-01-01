import { useEffect, RefObject } from 'react';

const WHEEL_TIMEOUT = 500; // Debounce timeout in ms

export function useWheel(
  ref: RefObject<HTMLElement>,
  onWheel: (direction: number) => void
) {
  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    let lastWheelTime = 0;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      
      const now = Date.now();
      if (now - lastWheelTime < WHEEL_TIMEOUT) return;
      lastWheelTime = now;

      const direction = Math.sign(e.deltaY);
      onWheel(direction);
    };

    element.addEventListener('wheel', handleWheel, { passive: false });
    return () => element.removeEventListener('wheel', handleWheel);
  }, [ref, onWheel]);
}