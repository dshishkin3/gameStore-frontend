
import { FC } from "react";
import classNames from "classnames";

import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import CheckCircleOutlineSharpIcon from '@mui/icons-material/CheckCircleOutlineSharp';

import styles from './ToggleBtn.module.scss';

interface ToggleBtnProps {
	saveBtn: boolean;
	deleteBtn: boolean;
	text: string;

}

const ToggleBtn: FC<ToggleBtnProps> = ({ saveBtn, deleteBtn, text }) => {
	return (
		<div className={classNames(styles.toggleBtn, { [styles.save]: saveBtn, [styles.delete]: deleteBtn })}>
			<span>{saveBtn ? <CheckCircleOutlineSharpIcon htmlColor="#FFFFFF" /> : <DeleteOutlineIcon htmlColor="#FFFFFF" />}</span>
			<button>{text}</button>
		</div>

	);
}

export default ToggleBtn;