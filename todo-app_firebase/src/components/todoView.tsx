"use client";
import { useContext } from "react";
import { TodoContents } from "@/app/page";

export const TodoView = () => {
  const { dataList, setDataList } = useContext(TodoContents);

  const handleDelete = (id: number) => {
    const updatedList = dataList.filter((item) => item.id !== id);
    setDataList(updatedList);
    localStorage.setItem("dataList", JSON.stringify(updatedList));
  };

  return (
    <div className="my-8 text-left px-4">
      <h1 className="text-left my-2 font-bold">YOUR TODO!!</h1>
      {!dataList || dataList.length === 0 ? (
        <h1 className="text-center my-8 text-gray-400">There is no TODO</h1>
      ) : (
        <ul>
          {dataList.map((data) => (
            <li key={data.id} className="py-2 border-b-2 flex justify-between">
              <div>
                <p className="text-xs my-1">ID: {data.id}</p>
                <h1 className="text-lg font-bold">{data.value}</h1>
              </div>
              <button
                onClick={() => handleDelete(data.id)}
                className="bg-red-500 text-white text-sm px-4 rounded mt-2 hover:bg-red-700"
              >
                完了
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
