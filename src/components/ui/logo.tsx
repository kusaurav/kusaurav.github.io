export const Logo = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      className="h-8 w-8"
      fill="currentColor"
    >
      <circle cx="24" cy="24" r="24" fill="url(#grad)" />
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dy=".35em"
        className="font-bold"
        fontSize="14"
        fill="white"
        fontFamily="sans-serif"
      >
        SK
      </text>
      <defs>
        <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgb(59,130,246)" />   {/* blue */}
          <stop offset="100%" stopColor="rgb(236,72,153)" /> {/* pink */}
        </linearGradient>
      </defs>
    </svg>
  );
  