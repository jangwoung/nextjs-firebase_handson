"use client";
import { useEffect, useState, createContext } from "react";
import { AddToDo } from "@/components/addToDo";
import { TodoView } from "@/components/todoView";
import { Loading } from "@/components/loading";

interface Todo {
  id: number;
  value: string;
}

export const TodoContents = createContext<{
  dataList: Todo[];
  setDataList: React.Dispatch<React.SetStateAction<Todo[]>>;
}>({ dataList: [], setDataList: () => {} });

export default function Home() {
  const [dataList, setDataList] = useState<Todo[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const savedData = localStorage.getItem("dataList");
    const parsedData = savedData ? JSON.parse(savedData) : [];
    setDataList(parsedData);
    setIsLoading(false);
  }, []);

  return (
    <main className="flex min-h-screen flex-col text-center items-center justify-between p-24">
      <div>
        <TodoContents.Provider value={{ dataList, setDataList }}>
          <h1 className="text-lg font-bold my-8">TODO APP</h1>
          <AddToDo />
          {isLoading ? <Loading /> : <TodoView />}
        </TodoContents.Provider>
      </div>
    </main>
  );
}
