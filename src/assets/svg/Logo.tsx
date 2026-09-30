import Link from "next/link";

const Logo = ({ textSize }: { textSize?: number }) => {
  return (
    <Link href="/" className="flex items-center relative">
      <img className="h-14 w-20" src="/logo.png" alt="logo" />
      <div
        style={{ fontSize: textSize || "36px" }}
        className={`font-bold   green-primary`}
      >
        Power <span className="red-primary">Sync</span>
      </div>
    </Link>
  );
};

export default Logo;
