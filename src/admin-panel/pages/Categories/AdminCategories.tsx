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

const AdminCategories: FC = () => {
	const { categories, isLoading } = useCategories();
	const [product, setProduct] = useState<ICategory[]>([]);

	const [page, setPage] = useState<number>(1);
	const [pageQty, setPageQty] = useState<number>(13);

	const init = Math.ceil(pageQty / 2)

	useEffect(() => {
		getCategories();
	}, [page, isLoading]);

	async function getCategories() {
		const response = await axios.get<ICategory[]>(`http://game-store12.herokuapp.com/api/categories?page=${page}&size=2`);
		setProduct(response.data);
		setPageQty(categories.length);
	}

	return (
		<Wrapper title="Акции">
			<div className={styles.container}>
				<div className={styles.categories}>
					<div className={styles.subtitles}>
						<h2 className={styles.subtitle}>Информация о категории</h2>
						<h2 className={styles.subtitle}>Подкатегории</h2>
					</div>
					<AdminCategoryItem product={product} />
					<CategoriesForm />
				</div>
				<div className={styles.pagination}>
					<PaginationControl count={init} page={page} setPage={setPage} />
				</div>
			</div>
		</Wrapper >
	);
}

export default AdminCategories; 