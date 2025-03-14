interface SvgProps {
  color?: string;
  stroke?: string;
  fill?: boolean;
}

export const SearchIcon = ({ stroke = "#737A91" }: SvgProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    fill="none"
    viewBox="0 0 18 18"
  >
    <path
      stroke={stroke}
      strokeLinecap="round"
      strokeMiterlimit="10"
      strokeWidth="1.5"
      d="m16.5 17.024-2.594-2.593M13.098 7.573a6.049 6.049 0 1 1-1.467-3.97"
    ></path>
  </svg>
);

export const FlagIcon = ({ stroke = "#AAA", fill = false }: SvgProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="18"
    fill={fill ? stroke : "none"}
    viewBox="0 0 14 18"
  >
    <path
      stroke={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M1 3.915c0-1.02 0-1.53.208-1.92.182-.343.474-.622.832-.796C2.448 1 2.981 1 4.048 1H9.38c1.067 0 1.6 0 2.008.199.358.174.65.453.832.796.208.39.208.9.208 1.92v12.119c0 .443 0 .664-.097.785a.47.47 0 0 1-.352.18c-.159.01-.351-.113-.736-.358l-4.53-2.889-4.53 2.888c-.384.246-.576.369-.736.36a.5.5 0 0 1-.352-.18C1 16.697 1 16.476 1 16.033z"
    ></path>
  </svg>
);
