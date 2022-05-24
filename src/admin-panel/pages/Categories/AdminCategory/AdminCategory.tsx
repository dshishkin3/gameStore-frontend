import axios from "axios";
import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PageTitle from "../../../../components/ui/pageTitle/PageTitle";
import { useCategories } from "../../../../hooks/useCategories";
import AddOrDeleteBtnForm from "../../../components/ui/addOrDeleteBtnForm/AddOrDeleteBtnForm";


import ToggleBtn from "../../../components/ui/toggleBtn/ToggleBtn";
import Wrapper from "../../../components/ui/wrapper/Wrapper";
import AdminSubcategory from "../AdminSubcategory/AdminSubcategory";
import CategoriesForm from "../CategoriesForm/CategoriesForm";
import CategoryHeader from "../CategoryHeader/CategoryHeader";

import styles from "./AdminCategory.module.scss";

const AdminCategory: FC = () => {
	const { categories, isLoading, updateCategory, deleteCategory, page } = useCategories();
	const { id } = useParams<string>();
	const obj = categories.filter(item => item._id === id);

	const [categoryTitle, setCategoryTitle] = useState<string>('');
	const [categoryImg, setCategoryImg] = useState<string>('');
	const [subCategoryTitle, setSubCategoryTitle] = useState<string>('');
	const [subCategoryImg, setSubCategoryImg] = useState<string>('');
	useEffect(() => {
		setCategoryImg(obj[0] && obj[0].urlImg)
		setCategoryTitle(obj[0] && obj[0].title)

	}, [isLoading, page])

	const deleteSubcategory = async (id: number) => {
		const response = await axios.put(`https://game-store12.herokuapp.com/api/categories/${id}`, {})
	}
	const addSubcategory = () => {
		console.log('add subcategory')
	}
	console.log(page)
	return (
		<Wrapper title={''}>
			<div className={styles.category}>
				<PageTitle title={obj[0] ? obj[0].title : ''} />
				<CategoryHeader title={['Изображение категории', 'Наименование категории']} />
				<div className={styles.blockForm}>
					<img src={obj[0] && obj[0].urlImg} alt="" />
					<CategoriesForm
						urlImageFrom={categoryImg}
						titleForm={categoryTitle}
						setTitleForm={setCategoryTitle}
						setUrlImageForm={setCategoryImg}
					/>
				</div>
				<h3 className={styles.title}>Подкатегории</h3>
				<CategoryHeader title={['Изображение подкатегории', 'Наименование подкатегории']} />
				{obj[0] && obj[0].subcategories.map(item => (
					<div key={item.id} className={styles.blockForm}>
						<img src={item.urlImg && item.urlImg} alt="" />
						<CategoriesForm
							urlImageFrom={item.urlImg}
							titleForm={item.title}
							setTitleForm={setSubCategoryTitle}
							setUrlImageForm={setSubCategoryImg}
						/>
						<AddOrDeleteBtnForm addCat={false} onChangeHandler={() => deleteSubcategory(item.id)} />
					</div>
				))}
				<div className={styles.lastblockForm}>
					<CategoriesForm
						urlImageFrom={subCategoryImg}
						titleForm={subCategoryTitle}
						setTitleForm={setSubCategoryTitle}
						setUrlImageForm={setSubCategoryImg}
					/>
					<AddOrDeleteBtnForm addCat onChangeHandler={addSubcategory} text="Добавить подкатегорию" />
				</div>

				<div className={styles.toggleBtn}>
					<ToggleBtn text="Сохранить изменения" type="saveBtn" onClick={() => updateCategory(obj[0]._id)} />
					<ToggleBtn text="Удалить категорию" type="deleteBtn" onClick={() => deleteCategory(obj[0]._id)} />
				</div>

			</div>
		</Wrapper >
	);
};

export default AdminCategory;
