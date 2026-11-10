

// import React from "react";
// import { motion } from "framer-motion";

// export default function Reveal({ children, delay = 0, className = "" }) {
//   return (
//     <motion.div
//       className={className}
//       initial={{
//         opacity: 0,
//         y: 24,
//         filter: "blur(4px)",
//       }}
//       whileInView={{
//         opacity: 1,
//         y: 0,
//         filter: "blur(0px)",
//       }}
//       viewport={{
//         once: true,
//         margin: "-80px",
//         amount: 0.15,
//       }}
//       transition={{
//         duration: 0.85,
//         delay,
//         ease: [0.22, 1, 0.36, 1],
//       }}
//     >
//       {children}
//     </motion.div>
//   );
// }




import React from "react";
import { motion, useReducedMotion } from "framer-motion";

export default function Reveal({ children, delay = 0, className = "" }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={
        reduceMotion ? false : { opacity: 0, y: 18, filter: "blur(3px)" }
      }
      whileInView={
        reduceMotion ? undefined : { opacity: 1, y: 0, filter: "blur(0px)" }
      }
      viewport={{
        once: true,
        margin: "-64px",
        amount: 0.12,
      }}
      transition={{
        duration: 0.72,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
