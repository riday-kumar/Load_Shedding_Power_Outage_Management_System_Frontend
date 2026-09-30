const Logo = () => {
  return (
    <div className="flex items-center relative">
      <img className="h-14 w-20" src="/logo.png" alt="logo" />
      <div className="font-bold text-4xl green-primary">
        Power <span className="red-primary">Sync</span>
      </div>
    </div>
  );
};

export default Logo;
