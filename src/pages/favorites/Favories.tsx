import { FC, useEffect, useState } from "react";

import { IProduct } from "../../utils/interfaces";

import Card from "../../components/ui/card/Card";
import PageTitle from "../../components/ui/pageTitle/PageTitle";
import Empty from "./Empty";
import ScrollToTop from "../../components/ui/scroll/ScrollToTop";

import styles from "./Favories.module.scss";
import ActiveLastBreadcrumb from "../../components/ui/breadcrumbs/Breadcrumbs";



const Favories: FC = () => {
	const [product, setProduct] = useState<IProduct[]>([]);
	
	useEffect(() => {
		getProductFormLS();
	}, []);

	function getProductFormLS() {
		if (localStorage.getItem("favorites")) {
			setProduct(JSON.parse(localStorage.getItem("favorites") || ""));
		}
	}


	return (
		<div className={styles.container}>
			<ActiveLastBreadcrumb />
			{!product.length ? < Empty /> : product.length && <><PageTitle title="Мои закладки" />
				<div className={styles.favorites}>
					{product.map((obj) => (
						<Card key={obj._id} product={obj} />
					))}
				</div> </>}
			<ScrollToTop />
		</div>
	);
};

export default Favories;
