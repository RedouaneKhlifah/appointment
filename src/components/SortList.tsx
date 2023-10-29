import List from "./ui/List";
import { Dispatch, SetStateAction } from "react";

interface props {
  show: boolean;
  selectedValues: { type: string; Asc_Desc: string };
  setSelectedValues: Dispatch<
    SetStateAction<{ type: string; Asc_Desc: string }>
  >;
}

export function SortList({ show, selectedValues, setSelectedValues }: props) {
  const handleSlectedType = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValues((prevValues) => ({
      ...prevValues,
      type: e.target.value,
    }));
  };

  const handleSlectedAscDesc = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValues((prevValues) => ({
      ...prevValues,
      Asc_Desc: e.target.value,
    }));
  };
  return (
    <>
      <div
        className={`bg-white border-2 p-2 w-64 rounded-md ${
          show ? "" : "invisible"
        }`}
      >
        <List
          collection="type"
          title="Pet Name"
          value="petName"
          func={handleSlectedType}
          isChecked={selectedValues.type == "petName"}
        />
        <List
          collection="type"
          title="Owner Name"
          value="ownerName"
          func={handleSlectedType}
          isChecked={selectedValues.type == "ownerName"}
        />
        <List
          collection="type"
          title="Date"
          value="date"
          func={handleSlectedType}
          isChecked={selectedValues.type == "date"}
        />

        <div className="border-t-2 my-2 border-gray-300"></div>

        <List
          collection="Asc_Desc"
          title="Asc"
          value="Asc"
          func={handleSlectedAscDesc}
          isChecked={selectedValues.Asc_Desc == "Asc"}
        />
        <List
          collection="Asc_Desc"
          title="Desc"
          value="Desc"
          func={handleSlectedAscDesc}
          isChecked={selectedValues.Asc_Desc == "Desc"}
        />
      </div>
    </>
  );
}
