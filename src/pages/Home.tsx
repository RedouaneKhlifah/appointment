import Logo from "../components/Logo";
import { appointment } from "../assets/img";
import Header from "../components/Header";
import Form from "../components/Form";
import SearchInpute from "../components/ui/SearchInpute";
import { searchIcon } from "../assets/img/index";
import SortButton from "../components/ui/SortButton";
import Appointments from "../components/Appointments";
import { useState, useEffect } from "react";

function Home() {
  interface Appointment {
    ownerName: string;
    petName: string;
    date: string;
    aptTime: string;
    note: string;
  }

  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [tempAppointments, setTempAppointments] = useState<Appointment[]>([]);

  const handleSubmit = (newAppointments: Appointment) => {
    setAppointments([...appointments, newAppointments]);
    setTempAppointments([...appointments, newAppointments]);
  };

  const handelSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = e.target.value.toLowerCase();

    setTempAppointments(
      appointments.filter((appointment: Appointment) => {
        return appointment.ownerName.toLowerCase().includes(searchValue);
      })
    );
  };

  // handel sort
  const [selectedValues, setSelectedValues] = useState({
    type: "",
    Asc_Desc: "",
  });

  useEffect(() => {
    const sortedAppointments = [...tempAppointments];
    const type = selectedValues.type as keyof Appointment;
    const order: 1 | -1 = selectedValues.Asc_Desc === "Asc" ? 1 : -1;

    sortedAppointments.sort((a: Appointment, b: Appointment) => {
      if (a[type] < b[type]) return -1 * order;
      if (a[type] > b[type]) return 1 * order;
      return 0;
    });
    setTempAppointments(sortedAppointments);
    console.log(tempAppointments);
  }, [selectedValues]);

  return (
    <>
      <div className="flex justify-center">
        <div className=" w-5/6">
          <div className="pt-2">
            <Logo logo={appointment} title="Your Apointement" />
          </div>
          <div className=" pt-2 ">
            <Header
              img={appointment}
              title="Your Apointement"
              className="bg-light-blue-200 flex items-center gap-2 py-3 pl-2 text-xs rounded-t-lg "
            />
          </div>
          <div>
            <Form func={handleSubmit} />
          </div>
          <div className="grid grid-cols-[90%_10%] pt-4">
            <SearchInpute func={handelSearch} title="Search" img={searchIcon} />
            <SortButton
              title="Sort"
              selectedValues={selectedValues}
              setSelectedValues={setSelectedValues}
            />
          </div>
          <div>
            {tempAppointments.map((appointment: Appointment, index: number) => {
              return <Appointments key={index} data={appointment} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
