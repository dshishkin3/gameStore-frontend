import React, { FC, useEffect, useState } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Link } from "react-router-dom";

import { IProduct } from "../../../utils/interfaces";

import styles from "./Card.module.scss";
interface ICardProps {
	product: IProduct;
}
const Card: FC<ICardProps> = ({ product }) => {
	const [favorites, setFavorites] = useState<boolean>(false);
	useEffect(() => {
		if (localStorage.getItem(product._id)) {
			setFavorites(true);
		}
	}, [localStorage.getItem(product._id)]);

	function toggleFavorites(obj: IProduct): void {
		console.log(obj);
		let old = [];
		if (localStorage.getItem("favorites")) {
			old = JSON.parse(localStorage.getItem("favorites") || "");
		} else {
			setFavorites(true);
			localStorage.setItem("favorites", JSON.stringify([obj]));
		}

		if (old.some((e: any) => e._id === obj._id)) {
			let old2 = old.filter((item: any) => item._id !== obj._id);
			console.log(old2);
			setFavorites(false);
			localStorage.setItem("favorites", JSON.stringify([...old2]));
			console.log("exist");
		} else {
			setFavorites(true);
			localStorage.setItem("favorites", JSON.stringify([...old, obj]));
		}


		if (!localStorage.getItem(obj._id)) {
			localStorage.setItem(obj._id, JSON.stringify([obj]));
			setFavorites(true);
		} else {
			localStorage.removeItem(obj._id);
			setFavorites(false);
		}
	}

	return (
		<div className={styles.wrapper}>
			<div className={styles.container}>
				<div className={styles.header}>
					<div className={styles.info}>
						{product.hit && <p className={styles.hit}>ХИТ</p>}
						{product.promotion && <p className={styles.promotion}>АКЦИЯ</p>}
					</div>
					<div onClick={() => toggleFavorites(product)} className={styles.favorite}>
						{favorites ? <FavoriteIcon fontSize="medium" color="success" /> : <FavoriteBorderIcon fontSize="medium" color="success" />}
					</div>
				</div>
				<Link to={`/product/${product._id}`}>
					<img className={styles.img} src={product.urlImages[0]} alt="" />
					<p className={styles.title}>
						{product.title.length < 49
							? product.title
							: product.title.slice(0, 49) + "..."}
					</p>
					<div className={styles.prices}>
						<p className={styles.price}>{product.price} ₽</p>
						{product.oldPrice && (
							<p className={styles.oldPrice}>{product.oldPrice} ₽</p>
						)}
					</div>
				</Link>
			</div>
		</div>
	);
};

export default Card;
