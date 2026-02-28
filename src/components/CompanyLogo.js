/* ═════════════════════════════════════════════════════════
   Company Logo — first letter with deterministic color + shape
   ═════════════════════════════════════════════════════════ */
const LOGO_COLORS = [
  "#4640DE",
  "#FF6550",
  "#FFB836",
  "#56CDAD",
  "#26A4FF",
  "#7B61FF",
  "#E05D5D",
  "#0D9488",
  "#515B6F",
  "#EB8533",
];

const LOGO_SHAPES = [
  "rounded-full", // circle
  "rounded-[16px]", // rounded square
  "rounded-[20px_4px_20px_4px]", // diagonal pill
  "rounded-[4px_20px_4px_20px]", // inverse diagonal
  "rounded-[24px_8px]", // asymmetric
  "rounded-[8px_24px]", // asymmetric inverse
];

function hashStr(str) {
  let h = 0;
  for (let i = 0; i < str.length; i++) {
    h = (h * 31 + str.charCodeAt(i)) | 0;
  }
  return Math.abs(h);
}

export default function CompanyLogo({ company, size = 80 }) {
  const name = company || "C";
  const h = hashStr(name);
  const color = LOGO_COLORS[h % LOGO_COLORS.length];
  const shape = LOGO_SHAPES[h % LOGO_SHAPES.length];
  const letter = name.charAt(0).toUpperCase();

  return (
    <div
      className={`flex items-center justify-center ${shape}`}
      style={{
        width: size,
        height: size,
        backgroundColor: color,
        fontSize: size * 0.4,
        fontWeight: 700,
        color: "#FFFFFF",
        lineHeight: 1,
      }}>
      {letter}
    </div>
  );
}
