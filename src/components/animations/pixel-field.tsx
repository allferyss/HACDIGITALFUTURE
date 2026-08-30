export function PixelField({ className = "" }: { className?: string }) {
  const dots = [
    [0, 0], [1, 0], [2, 1], [0, 2], [2, 2], [3, 1], [1, 3], [3, 3], [2, 4],
  ];
  return (
    <svg
      viewBox="0 0 80 80"
      className={className}
      aria-hidden="true"
    >
      {dots.map(([x, y], i) => (
        <rect
          key={i}
          x={x * 16}
          y={y * 16}
          width="9"
          height="9"
          rx="1.5"
          fill="#6E96FF"
          className="animate-pixel-blink"
          style={{ animationDelay: `${i * 0.3}s` }}
        />
      ))}
    </svg>
  );
}
