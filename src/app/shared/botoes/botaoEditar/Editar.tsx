import { EditOutlined } from "@ant-design/icons";
import { MouseEventHandler } from "react";

interface IButtonEditProps {
  action:
    | (MouseEventHandler<HTMLAnchorElement> &
        MouseEventHandler<HTMLButtonElement>)
    | undefined;
}

export default function Editar({ action }: any) {
  return (
    <button
      onClick={action}
      className="w-full bg-yellow-600 rounded flex items-center justify-center p-1 text-white font-bold"
    >
      <EditOutlined />
      Editar
    </button>
  );
}
