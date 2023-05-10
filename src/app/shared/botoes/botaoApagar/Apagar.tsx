import { DeleteOutlined } from "@ant-design/icons";
import { Button } from "antd";
export default function Apagar({ action }: any) {
  return (
    <button
    //   onClick={action}
      className="w-full bg-red-600 rounded flex items-center justify-center p-1 text-white font-bold"
    >
      <DeleteOutlined />
      Apagar
    </button>
  );
}
