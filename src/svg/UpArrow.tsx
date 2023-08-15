import { SvgElementType } from "../types";

const UpArrow: React.FC<SvgElementType> = ({ onClick }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="7"
      onClick={onClick}
    >
      <path
        fill="none"
        stroke="#1E213F"
        strokeOpacity=".25"
        strokeWidth="2"
        d="M1 6l6-4 6 4"
      />
    </svg>
  );
};

export default UpArrow;
