function Prog({ scrollPercent }) {
  return (
    <svg className="absolute" width="44" height="44">
      <circle
        cx="22"
        cy="22"
        r="21"
        stroke="#5d2bc1"
        strokeWidth="2"
        fill="none"
        strokeDasharray={2 * Math.PI * 21}
        strokeDashoffset={2 * Math.PI * 21 * (1 - scrollPercent / 100)}
        style={{
          transition: "stroke-dashoffset 0.2s linear",
          transform: "rotate(-90deg)",
          transformOrigin: "50% 50%",
        }}
      />
    </svg>
  );
}

export default Prog;
