import React, { FC, useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import styles from "./product.module.scss";

import ChevronLeftOutlinedIcon from "@mui/icons-material/ChevronLeftOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

import { IProduct } from "../../utils/interfaces";

import axios from "axios";
import PageTitle from "../../components/ui/pageTitle/PageTitle";

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
		if (!localStorage.getItem('favorites')) localStorage.setItem('favorites', JSON.stringify([obj]))
		if (localStorage.getItem('favorites')) {
			let a: Array<IProduct> = JSON.parse(localStorage.getItem('favorites') || '')
			a.forEach((item, index) => {
				if (item._id !== obj._id) {
					a.push(obj)
				}

			})
			localStorage.setItem('favorites', JSON.stringify(a))
		}


	}
	const onClickImgHandle = (img: string): void => {
		setLargeImg(img);
	}

	return (
		<div className={styles.product}>
			<div className={styles.header}>
				<PageTitle title={product.title} />
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
						<span onClick={() => addToFavorites(product)} className={styles.heartIcon}><FavoriteBorderOutlinedIcon color="success" /></span>
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
