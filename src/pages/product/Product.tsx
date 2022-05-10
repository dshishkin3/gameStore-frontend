import React, { FC, useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import styles from "./product.module.scss";

import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';

import { IProduct } from "../../utils/interfaces";

import axios from "axios";
import PageTitle from "../../components/ui/pageTitle/PageTitle";

const Product: FC = () => {
	const { id } = useParams<string>();

	const [product, setProduct] = useState<IProduct>({} as IProduct);
	const [loading, setLoading] = useState<boolean>(true);
	const [largeImg, setLargeImg] = useState<number>(0);
	// const [largeImg, setLargeImg] = useState<string>();
	const [favorites, setFavorites] = useState<boolean>(false)
	useEffect(() => {
		fetchProduct();
		if (localStorage.getItem(product._id)) {
			setFavorites(true);
		}
		console.log('fetch')
	}, []);
	useEffect(() => {

		if (localStorage.getItem(product._id)) {
			setFavorites(true);
		}

	}, [localStorage.getItem(product._id)]);
	async function fetchProduct() {
		try {
			const response = await axios.get<IProduct>(`http://game-store12.herokuapp.com/api/products/product/${id}`)
			setProduct(response.data)
			setLoading(false)
		} catch (e) {
			console.log(e)
		}
	}
	function addToFavorites(obj: IProduct): void { // исправить типизацию
		if (!localStorage.getItem(obj._id)) {
			localStorage.setItem(obj._id, JSON.stringify([obj]));
			setFavorites(true);
		}
		else {
			localStorage.removeItem(obj._id);
			setFavorites(false);
		}


	}
	const onClickImgHandle = (index: number): void => {
		setLargeImg(index);
	}

	return (
		<div className={styles.product}>
			<div className={styles.header}>
				<PageTitle title={product.title} />
			</div>
			<div className={styles.content}>
				<div className={styles.productImg}>
					<div className={styles.large}>
						{!loading && <img src={product.urlImages[largeImg]} alt="productImage" />}
					</div>
					<div className={styles.small}>
						{!loading && product.urlImages.slice(1).map((img, index) => (
							<div className={index === largeImg ? styles.active : ''} onClick={() => onClickImgHandle(index)} key={img}>
								<img src={product.urlImages[index]} alt="small" />
							</div>
						))}



					</div>
				</div>
				<div className={styles.body}>
					<div className={styles.subtitle}>{product.desc}</div>
					<div className={styles.price}>
						<span>{product.price} ₽  </span>
						<span onClick={() => addToFavorites(product)} className={styles.heartIcon}> {favorites ? <FavoriteOutlinedIcon color="success" /> : <FavoriteBorderOutlinedIcon color="success" />}</span>
					</div>
				</div>
			</div>
			<div className={styles.desc}>
				<div className={styles.title}>{product.title}</div>
				<div className={styles.body}>{product.characteristic}</div>
			</div>
		</div >);
};

export default Product;
