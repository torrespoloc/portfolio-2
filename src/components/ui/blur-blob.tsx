export function BlurBlob({
  size = 280,
  blur = 70,
  opacity = 0.15,
  top,
  left,
  animation = "animate-float-geometric",
  gradientFrom = "rgb(48, 62, 150)",
  gradientTo = "rgb(29, 48, 170)",
}: {
  size?: number;
  blur?: number;
  opacity?: number;
  top?: string;
  left?: string;
  animation?: string;
  gradientFrom?: string;
  gradientTo?: string;
}) {
  return (
    <div
      className={`absolute rounded-full ${animation}`}
      style={{
        width: size,
        height: size,
        background: `radial-gradient(50% 50%, ${gradientFrom} 0%, ${gradientTo} 100%)`,
        filter: `blur(${blur}px)`,
        opacity,
        top,
        left,
      }}
    />
  );
}
