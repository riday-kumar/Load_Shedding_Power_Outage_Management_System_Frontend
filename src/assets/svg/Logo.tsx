import Link from "next/link";

type LogoProps = {
  className?: string;
  imageClassName?: string;
  textClassName?: string;
};

const Logo = ({
  className = "",
  imageClassName = "",
  textClassName = "",
}: LogoProps) => {
  return (
    <Link href="/" className={`flex items-center gap-1 ${className}`}>
      <img
        src="/logo.png"
        alt="PowerSync logo"
        className={`h-10 w-14 sm:h-12 sm:w-16 lg:h-14 lg:w-20 ${imageClassName}`}
      />

      <div
        className={`text-xl sm:text-2xl lg:text-3xl font-bold green-primary ${textClassName}`}
      >
        Power <span className="red-primary">Sync</span>
      </div>
    </Link>
  );
};

export default Logo;
