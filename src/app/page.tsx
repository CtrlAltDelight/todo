import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-gray-800">
      <div className="p-10">
        <h1 className="p-3">TODO</h1>
        <div>
          <p className="p-3 hover:bg-pink-700 bg-blue-400 rounded-t-lg">
            Add your todo's here
          </p>
          <p className="p-3 hover:bg-pink-700 bg-blue-400 rounded-b-lg">
            Add your todo's here
          </p>
        </div>
        <button className="m-3 ease-in-out duration-300 hover:scale-110 hover:bg-green-700 rounded-lg bg-gray-400 p-2">
          Add Item
        </button>
        <button className="m-3 ease-in-out duration-300 hover:scale-110 hover:bg-red-700 rounded-lg bg-gray-400 p-2">
          Remove Item
        </button>
      </div>
    </div>
  );
}
