import React, { useLayoutEffect, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Safe isomorphic layout effect
const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

/**
 * Parses children (strings, em, br, span, etc.) into structured word items
 * so each individual word can be wrapped in an overflow-hidden mask for GSAP animation.
 */
function parseChildrenToWords(children) {
  const wordsList = [];

  const traverse = (node, context = {}) => {
    if (node === null || node === undefined || typeof node === "boolean") {
      return;
    }

    if (typeof node === "string" || typeof node === "number") {
      const text = String(node);
      const tokens = text.match(/\S+/g);
      if (tokens) {
        tokens.forEach((token) => {
          // If token has leading punctuation attached (e.g. ", Ideas" or ", "),
          // attach the punctuation to the previous word so spacing looks natural
          const punctMatch = token.match(/^([.,!?;:]+)(.*)$/);
          if (
            punctMatch &&
            wordsList.length > 0 &&
            wordsList[wordsList.length - 1].type === "word"
          ) {
            wordsList[wordsList.length - 1].text += punctMatch[1];
            if (punctMatch[2]) {
              wordsList.push({
                type: "word",
                text: punctMatch[2],
                isEm: context.isEm || false,
                className: context.className || "",
              });
            }
          } else {
            wordsList.push({
              type: "word",
              text: token,
              isEm: context.isEm || false,
              className: context.className || "",
            });
          }
        });
      }
      return;
    }

    if (React.isValidElement(node)) {
      if (node.type === "br") {
        wordsList.push({
          type: "br",
          className: node.props.className || "",
        });
        return;
      }

      const isEm = context.isEm || node.type === "em";
      const isSpan = node.type === "span";

      // If it's a dot span like <span>.</span>
      if (
        isSpan &&
        typeof node.props.children === "string" &&
        node.props.children.trim() === "."
      ) {
        if (
          wordsList.length > 0 &&
          wordsList[wordsList.length - 1].type === "word"
        ) {
          wordsList[wordsList.length - 1].hasDot = true;
          return;
        }
      }

      React.Children.forEach(node.props.children, (child) => {
        traverse(child, {
          isEm,
          className: node.props.className || context.className,
        });
      });
    }
  };

  React.Children.forEach(children, (child) => traverse(child));
  return wordsList;
}

/**
 * ScrollWordTitle
 * Animates heading title word-by-word with GSAP + ScrollTrigger.
 */
export default function ScrollWordTitle({
  as: Component = "h2",
  children,
  className = "",
  delay = 0,
  duration = 0.75,
  stagger = 0.045,
  start = "top 88%",
  scrub = false,
  ...props
}) {
  const headingRef = useRef(null);
  const words = parseChildrenToWords(children);

  useIsomorphicLayoutEffect(() => {
    const el = headingRef.current;
    if (!el) return;

    const wordInners = el.querySelectorAll(".word-inner");
    if (!wordInners.length) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        wordInners,
        {
          y: "115%",
          opacity: 0,
          rotateZ: 2,
        },
        {
          y: "0%",
          opacity: 1,
          rotateZ: 0,
          duration: duration,
          stagger: stagger,
          ease: "power3.out",
          delay: delay,
          scrollTrigger: {
            trigger: el,
            start: start,
            toggleActions: scrub ? undefined : "play none none reverse",
            scrub: scrub,
          },
        }
      );
    }, headingRef);

    return () => ctx.revert();
  }, [children, delay, duration, stagger, start, scrub]);

  return (
    <Component
      ref={headingRef}
      className={`scroll-word-heading ${className}`}
      {...props}
    >
      {words.map((item, index) => {
        if (item.type === "br") {
          return <br key={`br-${index}`} className={item.className} />;
        }

        const innerContent = item.isEm ? (
          <em className={item.className || ""}>
            {item.text}
            {item.hasDot && <span>.</span>}
          </em>
        ) : (
          <>
            {item.text}
            {item.hasDot && <span>.</span>}
          </>
        );

        return (
          <span
            key={`word-${index}`}
            className="word-mask inline-block overflow-hidden align-top mr-[0.24em] pb-[0.14em] -mb-[0.14em]"
          >
            <span className="word-inner inline-block will-change-transform">
              {innerContent}
            </span>
          </span>
        );
      })}
    </Component>
  );
}
