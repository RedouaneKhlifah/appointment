interface Props {
  title: string;
  img: string;
  func: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function SearchInpute({ title, img, func }: Props) {
  return (
    <>
      <div className="relative">
        <input
          className="text-md font-medium border-y-2 border-l-2 border-gray-200 rounded-l-md py-1 pl-8  w-full outline-none  focus:ring-light-blue-300 focus:border-light-blue-300"
          type="text"
          placeholder={title}
          onChange={func}
        />
        <img className="w-4 absolute left-2 top-2" src={img} alt="img" />
      </div>
    </>
  );
}

export default SearchInpute;
