import { motion } from "framer-motion";

export const Button = ({ children, variant = "primary", onClick, className = "", type = "button", disabled = false }) => {
  const styles = {
    primary: {
      background: "linear-gradient(135deg, #D4AF37 0%, #E5C158 50%, #D4AF37 100%)",
      color: "#090909",
      border: "none",
      fontWeight: 700,
      letterSpacing: "0.08em",
    },
    secondary: {
      background: "transparent",
      color: "#ffffff",
      border: "1.5px solid rgba(255,255,255,0.4)",
      fontWeight: 500,
      letterSpacing: "0.06em",
    },
    ghost: {
      background: "rgba(255,255,255,0.06)",
      color: "#ffffff",
      border: "1px solid rgba(255,255,255,0.15)",
      fontWeight: 500,
      letterSpacing: "0.05em",
    },
  };

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      style={{
        padding: "14px 36px",
        borderRadius: "100px",
        fontSize: "13px",
        textTransform: "uppercase",
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.6 : 1,
        transition: "box-shadow 0.3s",
        fontFamily: "\'Inter\', sans-serif",
        ...styles[variant],
      }}
      whileHover={{ scale: 1.04, boxShadow: variant === "primary" ? "0 8px 30px rgba(212,175,55,0.35)" : "0 8px 30px rgba(255,255,255,0.1)" }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
    >
      {children}
    </motion.button>
  );
};

export default Button;
