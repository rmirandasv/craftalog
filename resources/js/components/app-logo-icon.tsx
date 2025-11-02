import { SVGAttributes } from 'react';

export default function AppLogoIcon(props: SVGAttributes<SVGElement>) {
  return (
    <svg {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <g>
        <path
          d="M5 3h12a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"
          opacity="0.3"
        />

        <path
          d="M4 2h12a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z"
          opacity="0.6"
        />
        <path
          d="M3 1h12a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2z"
          strokeWidth="1.5"
          stroke="currentColor"
          fill="currentColor"
        />
        <line
          x1="6"
          y1="6"
          x2="12"
          y2="6"
          stroke="white"
          strokeWidth="1"
          opacity="0.8"
        />
        <line
          x1="6"
          y1="9"
          x2="11"
          y2="9"
          stroke="white"
          strokeWidth="1"
          opacity="0.8"
        />
        <line
          x1="6"
          y1="12"
          x2="10"
          y2="12"
          stroke="white"
          strokeWidth="1"
          opacity="0.8"
        />
        <path d="M15 1 L17 1 L17 3 Z" fill="white" opacity="0.4" />
      </g>
    </svg>
  );
}
