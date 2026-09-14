import { useState } from "react";

const AddTask = ({ handleAddTask }: { handleAddTask: (text: string) => void }) => {
  const [text, setText] = useState("");

  return (
    <div className="flex gap-1">
      <input
        type="text"
        name="text"
        className="flex-1 rounded border px-3 py-2 focus:ring-2 focus:ring-orange-400 focus:outline-0"
        placeholder="여행 계획 입력"
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      <button
        type="button"
        className="rounded bg-orange-500 px-4 py-2 text-white transition hover:bg-orange-600"
        onClick={() => handleAddTask(text)}
      >
        Add
      </button>
    </div>
  );
};

export default AddTask;
