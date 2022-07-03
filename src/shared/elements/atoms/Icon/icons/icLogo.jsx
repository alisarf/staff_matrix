const icLogo = ({ className }) => {
  return (
    <svg
      className={className}
      width="30"
      height="32"
      viewBox="0 0 30 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="15" cy="12" r="11.5" stroke="#F76A76" strokeDasharray="3 3" />
      <g filter="url(#filter0_d_2_80)">
        <circle cx="15" cy="12" r="5" fill="#F76A76" />
        <circle
          cx="15"
          cy="12"
          r="4.5"
          stroke="#F76A76"
          strokeDasharray="5 5"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_2_80"
          x="0"
          y="2"
          width="30"
          height="30"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="5" />
          <feGaussianBlur stdDeviation="5" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_2_80"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_2_80"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default icLogo;
