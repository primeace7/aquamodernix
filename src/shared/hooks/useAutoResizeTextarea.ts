import { useEffect, useRef } from "react";

/**
 * Auto-grows a textarea's height to fit its content, up to maxHeightPx.
 * Once content exceeds maxHeightPx, the textarea stops growing and
 * becomes internally scrollable instead.
 */
export function useAutoResizeTextarea(value: string, maxHeightPx = 280) {
  const ref = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    el.style.height = "auto";
    const nextHeight = Math.min(el.scrollHeight, maxHeightPx);
    el.style.height = `${nextHeight}px`;
    el.style.overflowY = el.scrollHeight > maxHeightPx ? "auto" : "hidden";
  }, [value, maxHeightPx]);

  return ref;
}
