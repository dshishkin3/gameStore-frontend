import { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Wrapper from "../../components/ui/wrapper/Wrapper";

import { useCategories } from "../../../hooks/useCategories";

import styles from "./Categories.module.scss";

import CategoriesForm from "./CategoriesForm/CategoriesForm";
import axios from "axios";
import { ICategory } from "../../../utils/interfaces";
import PaginationControl from "../../components/ui/pagination/Pagination";
import AdminCategoryItem from "./AdminCategoryItem/AdminCategoryItem";
import AddOrDeleteBtnForm from "../../components/ui/addOrDeleteBtnForm/AddOrDeleteBtnForm";

const AdminCategories: FC = () => {
	const [urlImageFrom, setUrlImageForm] = useState<string>("");
	const [titleForm, setTitleForm] = useState<string>("");

	const {
		categories,
		isLoading,
		getCategories,
		addCategory,
		setPage,
		page
	} = useCategories();


	const init = Math.ceil(categories.count / 4)

	useEffect(() => {
		getCategories(page, 4);
	}, [page]);

	const onChangeHandler = (e: any): void => {
		e.preventDefault();
		addCategory(titleForm, urlImageFrom);
	}

	return (
		<Wrapper title="Акции">
			{isLoading ? (
				<h1>loading...</h1>
			) : (
				<div className={styles.container}>
					<div className={styles.categories}>
						<div className={styles.subtitles}>
							<h2 className={styles.subtitle}>Информация о категории</h2>
							<h2 className={styles.subtitle}>Подкатегории</h2>
						</div>
						<AdminCategoryItem product={categories.categories} />
						<div className={styles.formContent}>
							<CategoriesForm
								urlImageFrom={urlImageFrom}
								setTitleForm={setTitleForm}
								titleForm={titleForm}
								setUrlImageForm={setUrlImageForm}
							/>
							<AddOrDeleteBtnForm
								addCat
								onChangeHandler={onChangeHandler}
								text="Добавить категорию"
							/>
						</div>
					</div>
					<div className={styles.pagination}>
						<PaginationControl count={init} page={page} setPage={setPage} />
					</div>
				</div>
			)}
		</Wrapper>
	);
}

export default AdminCategories;

