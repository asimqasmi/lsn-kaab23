import axios from "axios";
import { MouseEvent } from "react";
import useSWR from "swr";
import ThreeDotsWave from "../motions/ThreeDotsWave";

const TableOfPeriods = () => {
  const { data } = useSWR("/api/periods");
  if (!data) return <ThreeDotsWave />;

  const { data: periods } = data;

  const handleDelete = async (
    e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
  ) => {
    const id = (e.target as HTMLButtonElement).value;
    console.log(id);
    await axios.delete(`api/periods/${id}`);
  };

  return (
    <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-gray-500">
        <tr>
          <th scope="col" className="py-3 pl-4">
            <div className="flex items-center h-5">
              <input
                id="checkbox-all"
                type="checkbox"
                className="text-blue-600 border-gray-200 rounded focus:ring-blue-500"
              />
              <label htmlFor="checkbox" className="sr-only">
                Checkbox
              </label>
            </div>
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-xs font-bold text-center uppercase"
          >
            ID
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-xs font-bold text-center uppercase"
          >
            الحصة
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-xs font-bold text-center uppercase"
          >
            اليوم
          </th>
          {/* <th
            scope="col"
            className="px-6 py-3 text-xs font-bold text-right uppercase"
          >
            Edit
          </th> */}
          {/* <th
            scope="col"
            className="px-6 py-3 text-xs font-bold text-right uppercase"
          >
            Delete
          </th> */}
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-200">
        {periods.map((period: any, ind: any) => {
          return (
            <tr key={period.WeekPeriodNum}>
              <td className="py-3 pl-4">
                <div className="flex items-center h-5">
                  <input
                    type="checkbox"
                    className="text-blue-600 border-gray-200 rounded focus:ring-blue-500"
                  />
                  <label htmlFor="checkbox" className="sr-only">
                    Checkbox
                  </label>
                </div>
              </td>
              <td className="px-6 py-4 text-sm font-medium whitespace-nowrap">
                {period.WeekPeriodNum}
              </td>
              <td className="table_cell">{period.title}</td>
              <td className="table_cell">{period.day}</td>
              {/* <td className="table_cell">
                <a className="text-green-500 hover:text-green-700" href="#">
                  Edit
                </a>
              </td> */}
              {/* <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                <a className="text-red-500 hover:text-red-700" href="#">
                  <button
                    value={period._id}
                    onClick={(e) => {
                      handleDelete(e);
                    }}
                  >
                    Delete
                  </button>
                </a>
              </td> */}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TableOfPeriods;
