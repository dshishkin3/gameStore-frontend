import { FC } from "react";
import classNames from "classnames";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import ClearIcon from "@mui/icons-material/Clear";

import styles from "./AddOrDeleteBtnForm.module.scss";

interface addOrDeleteBtnFormProps {
  addCat: boolean;
  onChangeHandler: any;
  text?: string;
}

const AddOrDeleteBtnForm: FC<addOrDeleteBtnFormProps> = ({
  addCat,
  onChangeHandler,
  text,
}) => {
  return (
    <div
      onClick={onChangeHandler}
      className={classNames({
        [styles.addCategory]: addCat,
        [styles.deleteCategory]: !addCat,
      })}
    >
      {addCat ? (
        <AddCircleIcon htmlColor="#1BC100" />
      ) : (
        <ClearIcon htmlColor="#FFFFFF" />
      )}
      <span>{text}</span>
    </div>
  );
};

export default AddOrDeleteBtnForm;
