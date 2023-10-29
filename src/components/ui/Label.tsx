interface LabelProps {
  title: string;
}

function Label({ title }: LabelProps) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 pl-4">
        {title}
      </label>
    </div>
  );
}

export default Label;
