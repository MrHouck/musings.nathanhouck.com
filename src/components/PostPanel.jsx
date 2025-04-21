import { AnimatePresence, motion } from "motion/react"
import { useState, useRef } from "react";
export const PostPanel = ({ title, date, description, id }) => {
    const [isExpanding, setIsExpanding] = useState(false);
    const linkRef = useRef(null);
    const [linkRect, setLinkRect] = useState(null);

    const handleClick = (e) => {
        if (e.altKey) {
            // If Alt key is pressed, open in new tab without animation
            window.open(props.href, "_blank");
            return;
        }

        e.preventDefault();
        if (linkRef.current) {
            const rect = linkRef.current.getBoundingClientRect();
            setLinkRect({
                top: rect.top,
                left: rect.left,
                width: rect.width,
                height: rect.height,
            });
        }
        setIsExpanding(true);
    };
    const handleAnimationComplete = (href) => {
        window.location.href = href;
        // Reset animation after 3 seconds
        setTimeout(() => {
          setIsExpanding(false);
          setLinkRect(null);
          window.location.href = "";
        }, 1000);
      };
    return (
        <>
            <motion.a
                className="flex flex-col basis-[250px] max-w-[350px] h-[250px] p-4 bg-[var(--card)] rounded-lg gap-3 grow"
                whileHover={{ scale: 1.03 }}
                onClick={handleClick}
                ref={linkRef}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                href={`/post/${id}`}
            >

                <div className="text-base font-light self-start">
                    <h1 className="text-lg">{title}</h1>
                    <h4 className="text-sm text-[var(--tertiary)]">{date}</h4>
                </div>
                <div>
                    <p className="line-clamp-5 text-[var(--secondary)]">{description}</p>
                </div>

            </motion.a>
            <AnimatePresence>
                {isExpanding && linkRect && (
                    <motion.div
                        initial={{
                            position: "fixed",
                            top: linkRect.top,
                            left: linkRect.left,
                            width: linkRect.width,
                            height: linkRect.height,
                            opacity: 0,
                            zIndex: 9999,
                            borderRadius: "9000px",
                        }}
                        animate={{
                            top: 0,
                            left: 0,
                            width: "100vw",
                            height: "100vh",
                            opacity: 1,
                        }}
                        className={"bg-[var(--bg)] rounded-lg"}
                        exit={{ opacity: 0 }}
                        transition={{
                            opacity: { duration: 0.1, ease: "linear" },
                            default: { duration: 0.5, ease: "circInOut" },
                        }}
                        onAnimationComplete={handleAnimationComplete(`/post/${id}`)}
                    />
                )}
            </AnimatePresence>
        </>
    )
}