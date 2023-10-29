interface Props {
  title: string;
}

function Button({ title }: Props) {
  return (
    <button
      type="submit"
      className=" font-medium text-gray-900 bg-light-blue-200 py-2 px-5 rounded-md hover:bg-light-blue-300 transition duration-100 ease-in transform  "
    >
      {title}
    </button>
  );
}

export default Button;
