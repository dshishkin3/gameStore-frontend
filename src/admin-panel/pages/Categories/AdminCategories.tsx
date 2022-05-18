import { FC } from "react";
import { Link } from "react-router-dom";

import Wrapper from "../../components/ui/wrapper/Wrapper";

import { useCategories } from '../../../hooks/useCategories';

import styles from './Categories.module.scss';

import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';

import CategoriesItem from "./CategoriesItem/AdminCategoriesItem";
import CategoriesForm from "./CategoriesForm/CategoriesForm";

const AdminCategories: FC = () => {
	const { categories, isLoading } = useCategories();
	const array = categories.slice(4)

	return (
		<Wrapper title="Акции">
			<div className={styles.container}>

				<div className={styles.categories}>
					<div className={styles.subtitles}>
						<h2 className={styles.subtitle}>Информация о категории</h2>
						<h2 className={styles.subtitle}>Подкатегории</h2>
					</div>
					<div className={styles.body}>
						{array.map(obj => (
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
			</div>
		</Wrapper >
	);
}

export default AdminCategories; 