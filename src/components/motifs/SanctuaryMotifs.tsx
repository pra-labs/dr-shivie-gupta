import React from 'react';

export interface MotifProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  size?: number | string;
  color?: string;
}

/**
 * BotanicalLeafMotif
 * Soft olive/sage botanical branch/leaf illustration with organic, flowing lines.
 * Strictly aria-hidden="true" for decorative enhancement.
 */
export const BotanicalLeafMotif: React.FC<MotifProps> = ({
  className = '',
  size = 64,
  color = 'currentColor',
  ...props
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 pointer-events-none select-none transition-opacity duration-300 ${className}`}
      aria-hidden="true"
      {...props}
    >
      {/* Central Stem */}
      <path
        d="M20 100C32 82 48 58 72 34C84 22 96 15 102 12"
        stroke={color}
        strokeWidth="2.25"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeOpacity="0.45"
      />
      {/* Leaf 1 (Left Lower) */}
      <path
        d="M36 78C30 70 26 58 34 50C44 54 48 64 47 70"
        fill={color}
        fillOpacity="0.12"
        stroke={color}
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeOpacity="0.5"
      />
      {/* Leaf 2 (Right Lower) */}
      <path
        d="M48 68C56 62 68 62 70 72C62 78 52 76 48 68Z"
        fill={color}
        fillOpacity="0.14"
        stroke={color}
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeOpacity="0.55"
      />
      {/* Leaf 3 (Left Mid) */}
      <path
        d="M58 52C50 42 48 30 58 24C66 30 68 42 66 48"
        fill={color}
        fillOpacity="0.15"
        stroke={color}
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeOpacity="0.6"
      />
      {/* Leaf 4 (Right Mid) */}
      <path
        d="M68 42C78 36 90 38 90 48C80 54 70 50 68 42Z"
        fill={color}
        fillOpacity="0.14"
        stroke={color}
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeOpacity="0.55"
      />
      {/* Leaf 5 (Apex / Terminal Bud) */}
      <path
        d="M84 26C88 18 96 14 104 12C102 20 98 28 90 32C86 29 84 27 84 26Z"
        fill={color}
        fillOpacity="0.2"
        stroke={color}
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeOpacity="0.65"
      />
      {/* Subtle organic spore/accent dots */}
      <circle cx="28" cy="94" r="1.5" fill={color} fillOpacity="0.3" />
      <circle cx="98" cy="28" r="1.25" fill={color} fillOpacity="0.35" />
    </svg>
  );
};

/**
 * CalmWavesMotif
 * Gentle, flowing organic wave divider or background horizontal accent.
 * Responsive vector path with soft gradient opacity.
 */
export const CalmWavesMotif: React.FC<MotifProps> = ({
  className = '',
  size = '100%',
  color = 'currentColor',
  ...props
}) => {
  return (
    <svg
      width={size}
      height="36"
      viewBox="0 0 600 36"
      fill="none"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-full shrink-0 pointer-events-none select-none ${className}`}
      aria-hidden="true"
      {...props}
    >
      <path
        d="M0 24C90 12 180 32 300 20C420 8 510 26 600 16"
        stroke={color}
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeOpacity="0.35"
      />
      <path
        d="M0 16C120 28 220 10 320 24C440 34 520 18 600 26"
        stroke={color}
        strokeWidth="1.25"
        strokeDasharray="4 6"
        strokeLinecap="round"
        strokeOpacity="0.22"
      />
    </svg>
  );
};

/**
 * QuietCupPhoneMotif
 * Delicate teacup and subtle soundwave arcs.
 * Symbolizes warm, camera-off tele-therapy listening with safe sanctuary hospitality.
 */
export const QuietCupPhoneMotif: React.FC<MotifProps> = ({
  className = '',
  size = 56,
  color = 'currentColor',
  ...props
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 pointer-events-none select-none ${className}`}
      aria-hidden="true"
      {...props}
    >
      {/* Cup Body */}
      <path
        d="M16 28C16 41 24 49 36 49C48 49 54 41 54 28H16Z"
        fill={color}
        fillOpacity="0.08"
        stroke={color}
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeOpacity="0.6"
      />
      {/* Cup Rim */}
      <path
        d="M14 28H56"
        stroke={color}
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeOpacity="0.75"
      />
      {/* Cup Handle */}
      <path
        d="M54 32C58 32 61 35 60 39C59 42 56 44 52 44"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeOpacity="0.5"
      />
      {/* Saucer / Gentle Base */}
      <path
        d="M20 53H50"
        stroke={color}
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeOpacity="0.45"
      />
      {/* Gentle Steam / Listening soundwave ripples rising softly */}
      <path
        d="M27 22C27 18 31 16 31 12"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeOpacity="0.4"
      />
      <path
        d="M37 22C37 17 41 15 41 10"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeOpacity="0.5"
      />
      {/* Phone receiver / Soft acoustic listening wave arc */}
      <path
        d="M12 24C10 20 10 14 14 10C16 8 20 8 22 10"
        stroke={color}
        strokeWidth="1.25"
        strokeDasharray="2 3"
        strokeLinecap="round"
        strokeOpacity="0.35"
      />
    </svg>
  );
};

/**
 * RelationshipArcsMotif
 * Soft overlapping organic arcs symbolizing couple, relational and family connection,
 * empathy, non-judgmental holding, and quiet harmony.
 */
export const RelationshipArcsMotif: React.FC<MotifProps> = ({
  className = '',
  size = 64,
  color = 'currentColor',
  ...props
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 pointer-events-none select-none ${className}`}
      aria-hidden="true"
      {...props}
    >
      {/* Primary Left Circle / Arc */}
      <circle
        cx="32"
        cy="40"
        r="24"
        stroke={color}
        strokeWidth="1.75"
        strokeOpacity="0.45"
        strokeDasharray="3 4"
      />
      {/* Primary Right Circle / Arc */}
      <circle
        cx="48"
        cy="40"
        r="24"
        stroke={color}
        strokeWidth="1.75"
        strokeOpacity="0.55"
      />
      {/* Central Overlap Lens - Soft Fill */}
      <path
        d="M40 21.6C44.8 26.8 48 33 48 40C48 47 44.8 53.2 40 58.4C35.2 53.2 32 47 32 40C32 33 35.2 26.8 40 21.6Z"
        fill={color}
        fillOpacity="0.12"
      />
      {/* Subtle organic anchor dots */}
      <circle cx="40" cy="40" r="2.5" fill={color} fillOpacity="0.65" />
      <circle cx="20" cy="40" r="1.5" fill={color} fillOpacity="0.3" />
      <circle cx="60" cy="40" r="1.5" fill={color} fillOpacity="0.3" />
    </svg>
  );
};
