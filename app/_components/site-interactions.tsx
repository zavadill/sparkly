"use client";

import gsap from "gsap";
import { usePathname } from "next/navigation";
import { useLayoutEffect, useRef } from "react";

export function SiteInteractions({ children }: { children: React.ReactNode }) {
  const rootRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const cleanupTiltHandlers: Array<() => void> = [];

    const ctx = gsap.context(() => {
      const pageEnterNodes = gsap.utils.toArray<HTMLElement>("[data-page-enter]");
      gsap.fromTo(
        pageEnterNodes,
        { y: 18, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.55,
          ease: "power2.out",
          stagger: 0.06,
          clearProps: "opacity,transform",
        },
      );

      const revealNodes = gsap.utils.toArray<HTMLElement>("[data-reveal]");
      const revealObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            const element = entry.target as HTMLElement;
            gsap.fromTo(
              element,
              { y: 22, opacity: 0 },
              {
                y: 0,
                opacity: 1,
                duration: 0.6,
                ease: "power2.out",
                clearProps: "opacity,transform",
              },
            );
            revealObserver.unobserve(element);
          });
        },
        { rootMargin: "0px 0px -12% 0px", threshold: 0.15 },
      );

      revealNodes.forEach((element) => revealObserver.observe(element));

      const staggerContainers = gsap.utils.toArray<HTMLElement>("[data-stagger]");
      const staggerObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            const container = entry.target as HTMLElement;
            const staggerItems = Array.from(container.querySelectorAll<HTMLElement>("[data-stagger-item]"));

            if (staggerItems.length > 0) {
              gsap.fromTo(
                staggerItems,
                { y: 20, opacity: 0 },
                {
                  y: 0,
                  opacity: 1,
                  duration: 0.5,
                  ease: "power2.out",
                  stagger: 0.08,
                  clearProps: "opacity,transform",
                },
              );
            }

            staggerObserver.unobserve(container);
          });
        },
        { rootMargin: "0px 0px -12% 0px", threshold: 0.12 },
      );

      staggerContainers.forEach((container) => staggerObserver.observe(container));

      const interactiveCards = gsap.utils.toArray<HTMLElement>("[data-interactive-card]");
      interactiveCards.forEach((card) => {
        const handleMove = (event: MouseEvent) => {
          const bounds = card.getBoundingClientRect();
          const offsetX = (event.clientX - bounds.left) / bounds.width - 0.5;
          const offsetY = (event.clientY - bounds.top) / bounds.height - 0.5;

          gsap.to(card, {
            rotateY: offsetX * 5,
            rotateX: -offsetY * 5,
            y: -3,
            duration: 0.25,
            ease: "power2.out",
            transformPerspective: 900,
            transformOrigin: "center",
          });
        };

        const handleLeave = () => {
          gsap.to(card, {
            rotateY: 0,
            rotateX: 0,
            y: 0,
            duration: 0.3,
            ease: "power2.out",
          });
        };

        card.addEventListener("mousemove", handleMove);
        card.addEventListener("mouseleave", handleLeave);

        cleanupTiltHandlers.push(() => {
          card.removeEventListener("mousemove", handleMove);
          card.removeEventListener("mouseleave", handleLeave);
        });
      });

      cleanupTiltHandlers.push(() => {
        revealObserver.disconnect();
        staggerObserver.disconnect();
      });
    }, root);

    return () => {
      cleanupTiltHandlers.forEach((cleanup) => cleanup());
      ctx.revert();
    };
  }, [pathname]);

  return <div ref={rootRef}>{children}</div>;
}
