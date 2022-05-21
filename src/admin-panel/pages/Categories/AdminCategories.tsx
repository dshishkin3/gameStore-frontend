import { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Wrapper from "../../components/ui/wrapper/Wrapper";

import { useCategories } from '../../../hooks/useCategories';

import styles from './Categories.module.scss';

import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';

import CategoriesItem from "./CategoriesItem/AdminCategoriesItem";
import CategoriesForm from "./CategoriesForm/CategoriesForm";
import axios from "axios";
import { ICategory } from "../../../utils/interfaces";
import PaginationControl from "../../components/ui/pagination/Pagination";

const AdminCategories: FC = () => {
	const { categories, isLoading } = useCategories();
	const [propduct, setProduct] = useState<ICategory[]>([]);

	const [page, setPage] = useState<number>(1);
	const [pageQty, setPageQty] = useState<number>(13);

	const init = Math.ceil(pageQty / 2)

	useEffect(() => {
		getCategories();
	}, [page, isLoading]);

	async function getCategories() {
		const response = await axios.get<ICategory[]>(`http://game-store12.herokuapp.com/api/categories?page=${page}&size=2`);
		setProduct(response.data);
		console.log(categories.length)
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
					<div className={styles.body}>
						{propduct.map(obj => (
							<div key={obj._id} className={styles.column}>
								<div className={styles.categorie}>
									<div className={styles.image}><img src={obj.urlImg} alt="" /></div>
									<h3 className={styles.title}>{obj.title}</h3>
								</div>
								<div className={styles.subcategorie}>
									{obj.subcategories.map((elem) => (
										<CategoriesItem key={obj._id + elem.id} urlImg={elem.urlImg} title={elem.title} />
									))}
								</div>
								<div className={styles.toCategorie}>
									<Link className={styles.btn} to="/admin/category">
										<span>Перейти на страницу категории</span>
										<span><ArrowForwardIosSharpIcon /></span>
									</Link>
								</div>
							</div>
						))}
					</div>
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