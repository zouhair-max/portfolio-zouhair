import { motion } from 'framer-motion';

interface LogoProps {
  className?: string;
  showText?: boolean;
}

export function Logo({ className = '', showText = true }: LogoProps) {
  return (
    <motion.div
      className={`flex items-center gap-2 ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-white"
      >
        <path
          d="M16 2L4 9V23L16 30L28 23V9L16 2Z"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M16 8L10 11.5V18.5L16 22L22 18.5V11.5L16 8Z"
          fill="currentColor"
        />
        <circle cx="16" cy="15" r="3" fill="#0a0a0a" />
      </svg>
      {showText && (
        <div className="flex flex-col leading-none">
          <span className="text-sm font-bold tracking-wider">ZOUHAIR</span>
          <span className="text-sm font-bold tracking-wider">BOUDEIR</span>
        </div>
      )}
    </motion.div>
  );
}
