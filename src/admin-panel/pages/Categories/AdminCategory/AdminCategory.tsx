import { FC } from "react";
import { useParams } from "react-router-dom";
import { useCategories } from "../../../../hooks/useCategories";

import ToggleBtn from "../../../components/ui/toggleBtn/ToggleBtn";
import Wrapper from "../../../components/ui/wrapper/Wrapper";

import styles from "./AdminCategory.module.scss";

const AdminCategory: FC = () => {
	const { categories, isLoading } = useCategories();
	const { id } = useParams<string>();


	const obj = categories.filter(item => item._id === id)


	console.log(obj)
	return (
		<Wrapper title={"text"}>
			<div className={styles.category}>
				<ToggleBtn type="saveBtn" text="Сохранить изменения" />
			</div>
		</Wrapper>
	);
};

export default AdminCategory;
