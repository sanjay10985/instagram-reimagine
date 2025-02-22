const MaskedDiv = ({ children, maskType, className }) => {
  let maskStyle = {};

  switch (maskType) {
    case "type-1":
      maskStyle = {
        maskImage: "url(/mask-1.svg)",
        WebkitMaskImage: "url(/mask-1.svg)",
      };
      break;
    case "type-2":
      maskStyle = {
        maskImage: "url(/mask-2.svg)",
        WebkitMaskImage: "url(/mask-2.svg)",
      };
      break;
    case "type-3":
      maskStyle = {
        maskImage: "url(/mask-3.svg)",
        WebkitMaskImage: "url(/mask-3.svg)",
      };
      break;
    default:
      break;
  }

  return (
    <div
      className={`relative ${className}`}
      style={{
        ...maskStyle,
        maskSize: "cover",
        WebkitMaskSize: "cover",
        maskRepeat: "no-repeat",
        WebkitMaskRepeat: "no-repeat",
      }}
    >
      {children}
    </div>
  );
};

export default MaskedDiv;
