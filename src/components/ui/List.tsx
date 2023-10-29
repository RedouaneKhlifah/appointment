interface props {
  title: string;
  collection: string;
  isChecked: boolean;
  value: string;
  func: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
import { HiCheck } from "react-icons/hi";

function List({ value, title, collection, func, isChecked }: props) {
  return (
    <label className=" bg text-sm font-medium text-gray-700 pl-4 cursor-pointer bg-gray-100 mt-1 rounded-md p-2 flex justify-between pr-6">
      <input
        className="sr-only"
        value={value}
        name={collection}
        type="radio"
        onChange={func}
      />
      {title}
      <div className={isChecked ? "" : "invisible"}>
        <HiCheck checked={isChecked} />
      </div>
    </label>
  );
}

export default List;
