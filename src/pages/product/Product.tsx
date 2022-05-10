import React, { FC, useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import styles from "./product.module.scss";

import ChevronLeftOutlinedIcon from "@mui/icons-material/ChevronLeftOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

import { IProduct } from "../../utils/interfaces";

import small1 from "../../assets/images/product/small1.png";
import small2 from "../../assets/images/product/small2.png";
import small3 from "../../assets/images/product/small3.png";

import axios from "axios";

const Product: FC = () => {
	const { id } = useParams<string>();

	const [product, setProduct] = useState<IProduct>({} as IProduct);
	const [loading, setLoading] = useState<boolean>(true);
	const [largeImg, setLargeImg] = useState<string>();
	const [favorites, setFavorites] = useState<IProduct[]>([])

	useEffect(() => {
		fetchProduct();
	}, []);
	async function fetchProduct() {
		try {
			const response = await axios.get<IProduct>(`http://game-store12.herokuapp.com/api/products/product/${id}`)
			setProduct(response.data)
			setLoading(false)
		} catch (e) {
			console.log(e)
		}
	}
	const addToFavorites = (obj: any): void => { // исправить типизацию

	}
	const onClickImgHandle = (img: string): void => {
		setLargeImg(img);
	}

	return (
		<div className={styles.product}>
			<div className={styles.header}>
				<NavLink to="/" className={styles.leftArrow}><ChevronLeftOutlinedIcon color="disabled" fontSize="medium" /></NavLink> <h2 className={styles.title}>{product.title}</h2>
			</div>
			<div className={styles.content}>
				<div className={styles.productImg}>
					<div className={styles.large}>
						{!loading && <img src={largeImg ? largeImg : product.urlImages[0]} alt="productImage" />}
					</div>
					<div className={styles.small}>
						{!loading && product.urlImages.slice(1).map(img => (
							<div onClick={() => onClickImgHandle(img)} key={img}>
								<img src={img} alt="small" />
							</div>
						))}



					</div>
				</div>
				<div className={styles.body}>
					<div className={styles.subtitle}>{product.desc}</div>
					<div className={styles.price}>
						<span>{product.price} ₽  </span>
						<span onClick={() => addToFavorites(product)} className={styles.heartIcon}><FavoriteBorderOutlinedIcon /></span>
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
