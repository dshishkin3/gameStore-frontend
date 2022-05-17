import { FC, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import ActiveLastBreadcrumb from "../../components/ui/breadcrumbs/Breadcrumbs";
import { MyLoaderCategory } from "../../components/ui/contentLoader/ContentLoader";

import PageTitle from "../../components/ui/pageTitle/PageTitle";

import { useCategories } from "../../hooks/useCategories";

import styles from "./Subcategory.module.scss";

const Subcategory: FC = () => {
	let { name } = useParams();

	const { categories, isLoading, getCategories } = useCategories();

	useEffect(() => {
		getCategories();
	}, []);

	const category = categories.filter((item) => item.title === name);

	return (
		<div>
			<ActiveLastBreadcrumb categorie={["Компьютерная периферия", String(name)]} />
			<PageTitle title={String(name)} />
			<div className={styles.categories}>
				{isLoading ? (
					<MyLoaderCategory />
				) : (
					category[0].subcategories.map((item) => (
						<Link
							to={`/category/${item.title}`}
							className={styles.category}
							key={item.id}
						>
							<img src={item.urlImg} alt="" />
							<p>{item.title}</p>
						</Link>
					))
				)}
			</div>
		</div>
	);
};

export default Subcategory;
