"use client";
import { useState, useContext } from "react";
import { TodoContents } from "@/app/page";

export const AddToDo = () => {
  const { dataList, setDataList } = useContext(TodoContents);

  const [inputValue, setInputValue] = useState<string>("");

  const handleSave = () => {
    if (inputValue.trim() === "") return;

    // IDを付与したオブジェクトを作成
    const newData = {
      id: Date.now(),
      value: inputValue,
    };

    // 新しいデータを追加してlocalStorageに保存
    const updatedDataList = [...dataList, newData];
    setDataList(updatedDataList);
    localStorage.setItem("dataList", JSON.stringify(updatedDataList));

    // inputフィールドをクリア
    setInputValue("");
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSave();
    }
  };

  return (
    <div className="my-8">
      <h1 className="text-left my-2 mx-4 font-bold">New TODO!!</h1>
      <input
        type="text"
        className="p-2 shadow-inner rounded-lg mx-4 min-w-[40vw] bg-gray-100"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyPress}
        placeholder="Enter text and press Enter or click Save"
      />
      <button
        onClick={handleSave}
        className="bg-blue-500 px-4 py-2 rounded-lg text-white duration-200 shadow-md hover:bg-blue-700 hover:translate-y-[2px] hover:shadow-inner"
      >
        Save
      </button>
    </div>
  );
};
