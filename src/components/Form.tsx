import Inpute from "./ui/Input";
import TextAria from "./ui/TextAria";
import Button from "./ui/Button";
import { useState } from "react";

interface Appointment {
  ownerName: string;
  petName: string;
  date: string;
  aptTime: string;
  note: string;
}

interface Props {
  func: (e: Appointment) => void;
}
function Form({ func }: Props) {
  const [formData, setFormData] = useState({
    ownerName: "",
    petName: "",
    date: "",
    aptTime: "",
    note: "",
  });

  const handelChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
      console.log(formData);
    }
  };

  const handelSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    func(formData);
    setFormData({
      ownerName: "",
      petName: "",
      date: "",
      aptTime: "",
      note: "",
    });
  };

  return (
    <>
      <form onSubmit={handelSubmit}>
        <div className="border-x-2 border-b-2  border-gray-300 p-4">
          <Inpute
            title="owner Name"
            type="text"
            name="ownerName"
            func={handelChange}
            value={formData.ownerName}
          />
          <Inpute
            title="pet Name"
            type="text"
            name="petName"
            func={handelChange}
            value={formData.petName}
          />
          <Inpute
            title="date"
            type="date"
            name="date"
            func={handelChange}
            value={formData.date}
          />
          <Inpute
            title="Apt Time"
            type="time"
            name="aptTime"
            func={handelChange}
            value={formData.aptTime}
          />
          <TextAria
            title="appointments note"
            name="note"
            func={handelChange}
            value={formData.note}
          />
          <div className=" flex justify-end pt-4">
            <Button title="submit" />
          </div>
        </div>
      </form>
    </>
  );
}

export default Form;
