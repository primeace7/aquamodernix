import * as React from "react";
import { cn } from "@/shared/lib/utils";
import { useAutoResizeTextarea } from "@/shared/hooks/useAutoResizeTextarea";

export interface AutoResizeTextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  maxHeightPx?: number;
}

/**
 * Textarea that grows with content and caps out at maxHeightPx (default 280px,
 * roughly 10-12 lines), after which it scrolls internally instead of pushing
 * the rest of the form down.
 */
export const AutoResizeTextarea = React.forwardRef<
  HTMLTextAreaElement,
  AutoResizeTextareaProps
>(({ className, maxHeightPx = 280, value, onChange, ...props }, forwardedRef) => {
  const innerRef = useAutoResizeTextarea(String(value ?? ""), maxHeightPx);

  return (
    <textarea
      ref={(node) => {
        innerRef.current = node;
        if (typeof forwardedRef === "function") forwardedRef(node);
        else if (forwardedRef) forwardedRef.current = node;
      }}
      rows={3}
      value={value}
      onChange={onChange}
      className={cn(
        "flex w-full resize-none rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground transition-[height] duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    />
  );
});
AutoResizeTextarea.displayName = "AutoResizeTextarea";
