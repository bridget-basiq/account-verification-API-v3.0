export function StepLogo({ src, alt }) {
  return (
    <div className="flex justify-center">
      {/* Square sized svgs recommended for consistency between product logo and institution (square) logo */}
      <img className="rounded-lg w-16 h-16 sm:w-24 sm:h-24" src={src} alt={alt} />
    </div>
  );
}
