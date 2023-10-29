interface LogoProps {
  logo: string;
  title: string;
}
function Logo({ logo, title }: LogoProps) {
  return (
    <div className=" flex items-center gap-2">
      <img src={logo} alt="appointmentLogo" className="w-6 " />
      <h1 className=" text-xl ">{title}</h1>
    </div>
  );
}

export default Logo;
