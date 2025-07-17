// components/BackgroundBlobs.tsx
import { motion } from "framer-motion";

const blobBase = {
  borderRadius: "50%",
  filter: "blur(100px)",
  opacity: 0.6,
} as React.CSSProperties;

export default function BackgroundBlobs() {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden">
      {/* Blob 1 */}
      <div style={{ ...blobBase, width: 400, height: 400, backgroundColor: "#40AFCA", position: "absolute", top: "10%", left: "10%" }}>
        <motion.div
          animate={{
            x: [0, 100, 0, -100, 0],
            y: [0, -50, 50, -50, 0],
            scale: [1, 1.2, 1, 0.9, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      {/* Blob 2 */}
      <div style={{ ...blobBase, width: 500, height: 500, backgroundColor: "#2C456E", position: "absolute", top: "30%", left: "60%" }}>
        <motion.div
          animate={{
            x: [0, -80, 0, 80, 0],
            y: [0, 60, -60, 60, 0],
            scale: [1, 0.8, 1.1, 1, 1],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      {/* Blob 3 */}
      <div style={{ ...blobBase, width: 450, height: 450, backgroundColor: "#25304c", position: "absolute", top: "60%", left: "30%" }}>
        <motion.div
          animate={{
            x: [0, 70, -70, 70, 0],
            y: [0, -60, 60, -60, 0],
            scale: [1, 1.3, 0.9, 1.1, 1],
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      {/* Blob 4 */}
      <div style={{ ...blobBase, width: 400, height: 400, backgroundColor: "#f9ecd4", position: "absolute", top: "80%", left: "70%" }}>
        <motion.div
          animate={{
            x: [0, 40, -40, 40, 0],
            y: [0, -30, 30, -30, 0],
            scale: [1, 1.1, 0.95, 1.05, 1],
          }}
          transition={{
            duration: 28,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ width: "100%", height: "100%" }}
        />
      </div>
    </div>
  );
}