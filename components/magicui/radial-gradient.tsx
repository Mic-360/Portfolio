import { CSSProperties } from "react";

type Type = "circle" | "ellipse";

type Origin =
  | "center"
  | "top"
  | "bottom"
  | "left"
  | "right"
  | "top left"
  | "top right"
  | "bottom left"
  | "bottom right";

interface RadialProps {
  type?: Type;
  from?: string;
  to?: string;
  size?: number;
  origin?: Origin;
  className?: string;
}

const RadialGradient = ({
  type = "circle",
  from = "hsla(0, 0%, 0%, 0)",
  to = "#121212",
  size = 500,
  origin = "center",
  className,
}: RadialProps) => {
  const styles: CSSProperties = {
    position: "absolute",
    pointerEvents: "none",
    inset: 0,
    backgroundImage: `radial-gradient(${type} ${size}px at ${origin}, ${from}, ${to})`,
  };

  return <div className={className} style={styles} />;
};

export default RadialGradient;
