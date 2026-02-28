/* ═════════════════════════════════════════════════════════
   Tag color system
   ═════════════════════════════════════════════════════════ */
const TAG_STYLES = {
  Marketing: { bg: "rgba(235,133,51,0.1)", text: "#FFB836" },
  Design: { bg: "rgba(255,101,80,0.1)", text: "#FF6550" },
  Business: { bg: "rgba(70,64,222,0.1)", text: "#4640DE" },
  Technology: { bg: "rgba(86,205,173,0.1)", text: "#56CDAD" },
  Engineering: { bg: "rgba(255,101,80,0.1)", text: "#FF6550" },
  Finance: { bg: "rgba(86,205,173,0.1)", text: "#56CDAD" },
  Sales: { bg: "rgba(235,133,51,0.1)", text: "#FFB836" },
  "Human Resource": { bg: "rgba(70,64,222,0.1)", text: "#4640DE" },
};

function getTagStyle(label) {
  return TAG_STYLES[label] || { bg: "rgba(70,64,222,0.1)", text: "#4640DE" };
}

/* ── Category tag pill ── */
export default function JobTag({ label, variant = "filled" }) {
  const s = getTagStyle(label);
  if (variant === "outline") {
    return (
      <span
        className="inline-flex items-center justify-center whitespace-nowrap rounded-[80px] border px-[10px] py-[6px] text-[14px] font-semibold leading-[1.6]"
        style={{ borderColor: s.text, color: s.text }}>
        {label}
      </span>
    );
  }
  return (
    <span
      className="inline-flex items-center justify-center whitespace-nowrap rounded-[80px] px-[10px] py-[6px] text-[14px] font-semibold leading-[1.6]"
      style={{ backgroundColor: s.bg, color: s.text }}>
      {label}
    </span>
  );
}
