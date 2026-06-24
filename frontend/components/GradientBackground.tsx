"use client";

import { useEffect, useRef } from "react";

const pastelColors = [
  "#fce4ec",
  "#f3e5f5",
  "#e8eaf6",
  "#e3f2fd",
  "#e0f7fa",
  "#e8f5e9",
  "#f1f8e9",
  "#fff9c4",
  "#fff3e0",
  "#fbe9e7",
  "#f9fbe7",
  "#ede7f6",
  "#e1f5fe",
  "#f0f4c3",
  "#ffecb3",
  "#d1c4e9",
  "#b2dfdb",
  "#c8e6c9",
  "#dcedc8",
  "#fff8e1",
];

const darkPastelColors = [
  "#2d1b33",
  "#1b2d33",
  "#1b332d",
  "#2d2d1b",
  "#332d1b",
  "#1b1b33",
  "#331b2d",
  "#2d331b",
  "#1b331b",
  "#331b1b",
  "#2a1f3d",
  "#1f2a3d",
  "#3d2a1f",
  "#1f3d2a",
  "#2a3d1f",
];

function getColors(isDark: boolean) {
  return isDark ? darkPastelColors : pastelColors;
}

function pickRandom<T>(arr: T[], exclude?: T): T {
  let item: T;
  do {
    item = arr[Math.floor(Math.random() * arr.length)];
  } while (item === exclude && arr.length > 1);
  return item;
}

function randomAngle() {
  return Math.floor(Math.random() * 360);
}

export default function GradientBackground() {
  const lastScroll = useRef(0);
  const lastColors = useRef<{ c1: string; c2: string }>({ c1: "", c2: "" });
  const ticking = useRef(false);

  useEffect(() => {
    const isDark = document.documentElement.classList.contains("dark");
    const colors = getColors(isDark);

    const c1 = pickRandom(colors);
    const c2 = pickRandom(colors, c1);
    lastColors.current = { c1, c2 };

    const angle = randomAngle();
    document.documentElement.style.setProperty(
      "--dynamic-bg",
      `linear-gradient(${angle}deg, ${c1}, ${c2})`
    );
  }, []);

  useEffect(() => {
    const isDark = document.documentElement.classList.contains("dark");
    const colors = getColors(isDark);

    function onScroll() {
      const scrollY = window.scrollY;
      const diff = Math.abs(scrollY - lastScroll.current);

      if (diff < 120) return;

      if (!ticking.current) {
        ticking.current = true;

        requestAnimationFrame(() => {
          lastScroll.current = scrollY;

          const c1 = pickRandom(colors, lastColors.current.c1);
          const c2 = pickRandom(colors, c1);
          lastColors.current = { c1, c2 };

          const angle = randomAngle();
          document.documentElement.style.setProperty(
            "--dynamic-bg",
            `linear-gradient(${angle}deg, ${c1}, ${c2})`
          );

          ticking.current = false;
        });
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return null;
}
