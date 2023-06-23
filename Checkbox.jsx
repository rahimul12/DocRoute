import { useState } from "react";
import { useDispatch } from "react-redux";
import { filterSpecialist } from "../../fetures/doctorsApi/doctorsSlice";

export default function Checkbox({ data }) {
  const { name } = data || {};
  const [checked, setChecked] = useState(true);
  const dispatch = useDispatch();

  // handler
  const handleFilter = (e) => {
    setChecked(e.target.checked);
    dispatch(filterSpecialist(name))
  }

  return (
    <div className="flex items-center gap-3 text-base text-gray-600">
      <input
        className="w-5 h-5 "
        type="checkbox"
        id={name}
        name={name}
        onChange={handleFilter}
        checked={checked}
      />
      <label htmlFor={name}>{name}</label>
    </div>
  );
}