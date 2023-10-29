interface TextAriaProps {
  title: string;
  name: string;
  value: string;
  func: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

function TextAria({ title, name, func, value }: TextAriaProps) {
  return (
    <div className="grid pt-4 grid-cols-[40%_60%] ">
      <label className="block text-sm font-medium text-gray-700">{title}</label>
      <div className="mt-1">
        <textarea
          rows={4}
          onChange={func}
          name={name}
          value={value}
          className="pl-2  shadow-sm border-2 focus:ring-light-blue-300 focus:border-light-blue-300 block w-full sm:text-sm border-gray-300 rounded-md outline-none  focus:outline-none"
        />
      </div>
    </div>
  );
}

export default TextAria;
