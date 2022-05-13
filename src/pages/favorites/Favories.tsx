import { FC, useEffect, useState } from "react";

import { IProduct } from "../../utils/interfaces";

import Card from "../../components/ui/card/Card";
import PageTitle from "../../components/ui/pageTitle/PageTitle";

import styles from "./Favories.module.scss";

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
		<div className="container">
			<PageTitle title="Мои закладки" />
			<div className={styles.favorites}>
				{product.map((obj) => (
					<div className={styles.card} key={obj._id}>
						<Card product={obj} />
					</div>
				))}
			</div>
		</div>
	);
};

export default Favories;