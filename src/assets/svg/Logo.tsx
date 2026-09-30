const Logo = ({ textSize }: { textSize?: number }) => {
  return (
    <div className="flex items-center relative">
      <img className="h-14 w-20" src="/logo.png" alt="logo" />
      <div
        style={{ fontSize: textSize || "36px" }}
        className={`font-bold   green-primary`}
      >
        Power <span className="red-primary">Sync</span>
      </div>
    </div>
  );
};

export default Logo;
