import { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Wrapper from "../../components/ui/wrapper/Wrapper";

import { useCategories } from '../../../hooks/useCategories';

import styles from './Categories.module.scss';

import CategoriesForm from "./CategoriesForm/CategoriesForm";
import axios from "axios";
import { ICategory } from "../../../utils/interfaces";
import PaginationControl from "../../components/ui/pagination/Pagination";
import AdminCategoryItem from "./AdminCategoryItem/AdminCategoryItem";
import AddOrDeleteBtnForm from "../../components/ui/addOrDeleteBtnForm/AddOrDeleteBtnForm";


const AdminCategories: FC = () => {

	const [urlImageFrom, setUrlImageForm] = useState<string>('');
	const [titleForm, setTitleForm] = useState<string>('');

	const { categories,
		isLoading,
		getCategories,
		addCategory,
		getPageCategories,
		product,
		pageQty,
		setPage,
		page
	} = useCategories();
	// const [product, setProduct] = useState<ICategory[]>([]);

	// const [page, setPage] = useState<number>(1);
	// const [pageQty, setPageQty] = useState<number>(13);
	console.log(pageQty)
	const init = Math.ceil(pageQty / 2)

	useEffect(() => {
		getPageCategories();
	}, [page, isLoading]);

	const onChangeHandler = (e: any): void => {
		e.preventDefault();
		addCategory(titleForm, urlImageFrom);
	}
	console.log(page)
	return (
		<Wrapper title="Акции">
			<div className={styles.container}>
				<div className={styles.categories}>
					<div className={styles.subtitles}>
						<h2 className={styles.subtitle}>Информация о категории</h2>
						<h2 className={styles.subtitle}>Подкатегории</h2>
					</div>
					<AdminCategoryItem product={product} />
					<div className={styles.formContent}>
						<CategoriesForm
							urlImageFrom={urlImageFrom}
							setTitleForm={setTitleForm}
							titleForm={titleForm}
							setUrlImageForm={setUrlImageForm} />
						<AddOrDeleteBtnForm addCat onChangeHandler={onChangeHandler} text="Добавить категорию" />
					</div>
				</div>
				<div className={styles.pagination}>
					<PaginationControl count={init} page={page} setPage={setPage} />
				</div>
			</div>
		</Wrapper >
	);
}

export default AdminCategories; 