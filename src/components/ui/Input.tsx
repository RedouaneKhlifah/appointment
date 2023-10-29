import Label from "./Label";
interface Props {
  title: string;
  type: string;
  name: string;
  value: string;
  func: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function Input({ title, name, type, func, value }: Props) {
  return (
    <div className=" grid grid-cols-[40%_60%] pt-4">
      <Label title={title} />
      <div className="mt-1 w-full">
        <input
          type={type}
          name={name}
          onChange={func}
          value={value}
          className=" text-sm py-1 pl-2 border-2 border-gray-200 rounded-md w-6/12 focus:ring-light-blue-300 focus:border-light-blue-300 outline-none  focus:outline-none "
          placeholder=""
        />
      </div>
    </div>
  );
}

export default Input;
