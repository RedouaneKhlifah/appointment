interface HeaderProps {
  img: string;
  title: string;
  className: string;
}

function Header({ img, title, className }: HeaderProps) {
  return (
    <div className={className}>
      <img src={img} alt="appointmentLogo" className="w-5 h-5" />
      <p className=" text-">{title}</p>
    </div>
  );
}

export default Header;
