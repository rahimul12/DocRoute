import Checkbox from "./Checkbox";

const inputData = [
  {
    id: 1,
    name: 'Urologist',
  },
  {
    id: 2,
    name: 'Neurologist',
  },
  {
    id: 3,
    name: 'Orthopedic',
  },
  {
    id: 4,
    name: 'Cardiologist',
  },
  {
    id: 5,
    name: 'Dentist',
  },
  {
    id: 6,
    name: 'Gastroenterologist',
  },
];

export default function Form() {
  return (
    <div>
      {
        inputData.map((data) => <Checkbox key={data.id} data={data} />)
      }
      {/* <button type="submit" className="bg-blue-500 text-white w-full py-2 rounded-md my-4 hover:bg-blue-300 duration-300">
        Search
      </button> */}
    </div>
  )
}