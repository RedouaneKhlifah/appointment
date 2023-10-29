import { BsFillTrashFill } from "react-icons/bs";

interface AppointmentData {
  ownerName: string;
  petName: string;
  note: string;
  date: string;
}

interface Props {
  data: AppointmentData;
}

function Appointments({ data }: Props) {
  return (
    <>
      <div className="mt-4 border-2 rounded-md px-4 py-3 flex justify-between">
        <div className="flex gap-3">
          <div className=" ">
            <div className=" bg-red-500 p-2 rounded-md text-white text-xs cursor-default ">
              <BsFillTrashFill />
            </div>
          </div>
          <div className="">
            <div>
              <p className=" font-semibold text-md text-blue-700 ">
                {data.ownerName}
              </p>
            </div>
            <div className="flex gap-1">
              <p className="text-sm text-blue-700 font-semibold">Owner : </p>
              <p className="text-sm">{data.petName}</p>
            </div>
            <div>
              <p>{data.note}</p>
            </div>
          </div>
        </div>
        <div>
          <span>{data.date}</span>
        </div>
      </div>
    </>
  );
}

export default Appointments;
