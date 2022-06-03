import { FC } from "react";
import classNames from "classnames";

import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import CheckCircleOutlineSharpIcon from "@mui/icons-material/CheckCircleOutlineSharp";

import styles from "./ToggleBtn.module.scss";

interface ToggleBtnProps {
  onClick?: () => void;
  type: "saveBtn" | "deleteBtn";
  text: string;
  style?: string;
}

const ToggleBtn: FC<ToggleBtnProps> = ({ type, onClick, text, style }) => {
  return (
    <div
      onClick={onClick}
      className={classNames(styles.toggleBtn, {
        [styles.save]: type === "saveBtn",
        [styles.delete]: type === "deleteBtn",
      })}
    >
      <span>
        {type === "saveBtn" ? (
          <CheckCircleOutlineSharpIcon htmlColor="#FFFFFF" />
        ) : (
          <DeleteOutlineIcon htmlColor="#FFFFFF" />
        )}
      </span>
      <button>{text}</button>
    </div>
  );
};

export default ToggleBtn;
