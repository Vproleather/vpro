"use client";

import Script from "next/script";
import { useCallback, useEffect, useRef, useState } from "react";

const TURNSTILE_SCRIPT_URL =
  "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";

type TurnstileOptions = {
  sitekey: string;
  action: string;
  theme: "light" | "dark" | "auto";
  size: "normal" | "compact" | "flexible";
  callback: (token: string) => void;
  "expired-callback": () => void;
  "error-callback": () => void;
};

type TurnstileApi = {
  render: (container: HTMLElement, options: TurnstileOptions) => string;
  reset: (widgetId?: string) => void;
  remove: (widgetId: string) => void;
};

declare global {
  interface Window {
    turnstile?: TurnstileApi;
  }
}

type TurnstileProps = {
  action: string;
  onTokenChange: (token: string) => void;
  resetSignal: number;
  siteKey: string;
};

export default function Turnstile({
  action,
  onTokenChange,
  resetSignal,
  siteKey,
}: TurnstileProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | null>(null);
  const onTokenChangeRef = useRef(onTokenChange);
  const previousResetSignalRef = useRef(resetSignal);
  const [widgetError, setWidgetError] = useState("");

  useEffect(() => {
    onTokenChangeRef.current = onTokenChange;
  }, [onTokenChange]);

  const renderWidget = useCallback(() => {
    if (
      !siteKey ||
      !containerRef.current ||
      !window.turnstile ||
      widgetIdRef.current
    ) {
      return;
    }

    try {
      widgetIdRef.current = window.turnstile.render(containerRef.current, {
        sitekey: siteKey,
        action,
        theme: "light",
        size: "flexible",
        callback: (token) => {
          setWidgetError("");
          onTokenChangeRef.current(token);
        },
        "expired-callback": () => {
          onTokenChangeRef.current("");
          if (widgetIdRef.current) {
            window.turnstile?.reset(widgetIdRef.current);
          }
        },
        "error-callback": () => {
          onTokenChangeRef.current("");
          setWidgetError("Verification failed to load. Please try again.");
        },
      });
    } catch {
      setWidgetError("Verification failed to load. Please refresh the page.");
    }
  }, [action, siteKey]);

  useEffect(() => {
    return () => {
      if (widgetIdRef.current && window.turnstile) {
        window.turnstile.remove(widgetIdRef.current);
        widgetIdRef.current = null;
      }
    };
  }, [renderWidget]);

  useEffect(() => {
    if (previousResetSignalRef.current === resetSignal) return;

    previousResetSignalRef.current = resetSignal;

    if (widgetIdRef.current) {
      window.turnstile?.reset(widgetIdRef.current);
    }
  }, [resetSignal]);

  if (!siteKey) {
    return (
      <p className="text-sm text-red-700" role="alert">
        Online verification is temporarily unavailable. Please call us to request
        service.
      </p>
    );
  }

  return (
    <div aria-label="Bot verification">
      <Script
        src={TURNSTILE_SCRIPT_URL}
        strategy="afterInteractive"
        onReady={renderWidget}
        onError={() =>
          setWidgetError("Verification failed to load. Please refresh the page.")
        }
      />
      <div ref={containerRef} className="min-h-[65px]" />
      {widgetError && (
        <p className="mt-2 text-sm text-red-700" role="alert">
          {widgetError}
        </p>
      )}
    </div>
  );
}
