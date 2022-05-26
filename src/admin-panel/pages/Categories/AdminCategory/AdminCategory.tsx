import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PageTitle from "../../../../components/ui/pageTitle/PageTitle";
import { useCategories } from "../../../../hooks/useCategories";
import AddOrDeleteBtnForm from "../../../components/ui/addOrDeleteBtnForm/AddOrDeleteBtnForm";

import ToggleBtn from "../../../components/ui/toggleBtn/ToggleBtn";
import Wrapper from "../../../components/ui/wrapper/Wrapper";

import CategoriesForm from "../CategoriesForm/CategoriesForm";
import CategoryHeader from "../CategoryHeader/CategoryHeader";

import styles from "./AdminCategory.module.scss";

const AdminCategory: FC = () => {
	const { categories, isLoading, updateCategory, deleteCategory, deleteSubcategory, addSubcategory, setPage, page, setSubCategory } = useCategories();
	const { id } = useParams<string>();
	const obj = categories.categories && categories.categories.filter(item => item._id === id);
	const [categoryTitle, setCategoryTitle] = useState<string>("");
	const [categoryImg, setCategoryImg] = useState<string>("");

	const [subCategoryTitle, setSubCategoryTitle] = useState<string>("");
	const [subCategoryImg, setSubCategoryImg] = useState<string>("");
	const [lastSubCategoryTitle, setLastSubCategoryTitle] = useState<string>("");
	const [lastSubCategoryImg, setLastSubCategoryImg] = useState<string>("");


	useEffect(() => {
		if (obj) {
			setCategoryImg(obj[0] && obj[0].urlImg);
			setCategoryTitle(obj[0] && obj[0].title);
			setSubCategory(obj[0] && obj[0].subcategories)
		}
	}, [isLoading, page, categories]);

	return (
		<Wrapper title={''}>
			{isLoading ? (
				<h1>loading...</h1>
			) : (
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
							<AddOrDeleteBtnForm
								addCat={false}
								onChangeHandler={() => deleteSubcategory(item.id, obj[0]._id, obj[0].urlImg, obj[0].title)} />
						</div>
					))}
					<div className={styles.lastblockForm}>
						<CategoriesForm
							urlImageFrom={lastSubCategoryImg}
							titleForm={lastSubCategoryTitle}
							setTitleForm={setLastSubCategoryTitle}
							setUrlImageForm={setLastSubCategoryImg}
						/>
						<AddOrDeleteBtnForm
							addCat
							onChangeHandler={() => addSubcategory(obj[0]._id, obj[0].urlImg, obj[0].title, lastSubCategoryTitle, lastSubCategoryImg)}
							text="Добавить подкатегорию" />
					</div>

					<div className={styles.toggleBtn}>
						<ToggleBtn
							text="Сохранить изменения"
							type="saveBtn"
							onClick={() => updateCategory(obj[0]._id)} />
						<ToggleBtn
							text="Удалить категорию"
							type="deleteBtn"
							onClick={() => deleteCategory(obj[0]._id)} />
					</div>

				</div>)}
		</Wrapper >
	);

};
export default AdminCategory;
