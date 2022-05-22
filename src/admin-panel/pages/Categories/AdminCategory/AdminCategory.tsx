import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PageTitle from "../../../../components/ui/pageTitle/PageTitle";
import { useCategories } from "../../../../hooks/useCategories";

import ToggleBtn from "../../../components/ui/toggleBtn/ToggleBtn";
import Wrapper from "../../../components/ui/wrapper/Wrapper";
import CategoriesForm from "../CategoriesForm/CategoriesForm";
import CategoryHeader from "../CategoryHeader/CategoryHeader";

import styles from "./AdminCategory.module.scss";

const AdminCategory: FC = () => {
	const { categories, isLoading } = useCategories();
	const { id } = useParams<string>();
	const obj = categories.filter(item => item._id === id);

	const [categoryTitle, setCategoryTitle] = useState<string>('');
	const [categoryImg, setCategoryImg] = useState<string>('')
	useEffect(() => {
		setCategoryImg(obj[0] && obj[0].urlImg)
		setCategoryTitle(obj[0] && obj[0].title)

	}, [isLoading])

	return (
		<Wrapper title={''}>
			<div className={styles.category}>
				<PageTitle title={obj[0] ? obj[0].title : ''} />
				<CategoryHeader title={['Изображение категории', 'Наименование категории']} />

				<h3>Подкатегории</h3>
				<CategoryHeader title={['Изображение подкатегории', 'Наименование подкатегории']} />
			</div>
		</Wrapper >
	);
};

export default AdminCategory;
