import { motion } from "framer-motion";

export const Card = ({ children, className = "", hover = true, style = {} }) => {
  return (
    <motion.div
      className="glass"
      style={{ borderRadius: "16px", padding: "28px", ...style }}
      whileHover={hover ? { scale: 1.02, boxShadow: "0 20px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(212,175,55,0.12)" } : {}}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
    >
      {children}
    </motion.div>
  );
};

export default Card;
