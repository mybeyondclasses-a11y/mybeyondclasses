"use client";

import { useEffect, useRef } from "react";
import { usePathname, useSearchParams } from "next/navigation";

const STORAGE_KEY = "mbc-scroll-positions";

function readPositions(): Record<string, number> {
  try {
    return JSON.parse(sessionStorage.getItem(STORAGE_KEY) || "{}");
  } catch {
    return {};
  }
}

function writePosition(key: string, position: number) {
  const positions = readPositions();
  positions[key] = position;
  try {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(positions));
  } catch {}
}

export function RouteScrollManager() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const isPopNavigation = useRef(false);
  const previousPathname = useRef(pathname);

  useEffect(() => {
    const previousRestoration = history.scrollRestoration;
    history.scrollRestoration = "manual";

    const saveCurrent = () => {
      const key = `${pathname}${window.location.search}${window.location.hash}`;
      writePosition(key, window.scrollY);
    };

    const handlePopState = () => {
      isPopNavigation.current = true;
    };

    const handleScroll = () => {
      window.requestAnimationFrame(saveCurrent);
    };

    window.addEventListener("popstate", handlePopState);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      history.scrollRestoration = previousRestoration;
      window.removeEventListener("popstate", handlePopState);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname]);

  useEffect(() => {
    const search = searchParams.toString();
    const hash = window.location.hash;
    const routeChanged = previousPathname.current !== pathname;

    const frame = window.requestAnimationFrame(() => {
      if (hash) {
        const target = document.querySelector(hash);
        if (target) {
          window.setTimeout(() => target.scrollIntoView({ behavior: "smooth", block: "start" }), 80);
        }
      } else if (isPopNavigation.current) {
        const key = `${pathname}${search ? `?${search}` : ""}`;
        const position = readPositions()[key] ?? 0;
        window.scrollTo({ top: position, behavior: "auto" });
      } else if (routeChanged) {
        window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      }

      previousPathname.current = pathname;
      isPopNavigation.current = false;
    });

    return () => window.cancelAnimationFrame(frame);
  }, [pathname, searchParams]);

  return null;
}
