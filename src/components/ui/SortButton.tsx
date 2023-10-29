import { HiChevronDown } from "react-icons/hi";
import { SortList } from "../SortList";
import { Dispatch, SetStateAction, useState } from "react";

interface Props {
  title: string;
  selectedValues: { type: string; Asc_Desc: string };
  setSelectedValues: Dispatch<
    SetStateAction<{ type: string; Asc_Desc: string }>
  >;
}

function SortButton({ title, selectedValues, setSelectedValues }: Props) {
  const [show, setShow] = useState<boolean>(false);
  const handelClick = () => {
    setShow((prev) => {
      return !prev;
    });
  };
  return (
    <>
      <div className="relative cursor-pointer ">
        <div className="relative">
          <button
            className=" font-medium text-sm bg-light-blue-200 py-2 px-4 hover:ring-light-blue-300 hover:bg-light-blue-300 transition duration-100 ease-in  outline-none w-full text-left pl-5 "
            onClick={handelClick}
          >
            {title}
            <div className="absolute top-2 right-5 text-xl ">
              <HiChevronDown />
            </div>
          </button>
          <div className="absolute right-4 pt-2">
            <SortList
              show={show}
              selectedValues={selectedValues}
              setSelectedValues={setSelectedValues}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default SortButton;
