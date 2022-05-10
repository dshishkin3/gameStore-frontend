<<<<<<< HEAD
import React, { FC } from "react";
import styles from "./product.module.scss";
=======
import React, { FC, useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import styles from './product.module.scss';

import ChevronLeftOutlinedIcon from '@mui/icons-material/ChevronLeftOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

import { IProduct } from '../../utils/interfaces';

import small1 from './img/small1.png';
import small2 from './img/small2.png';
import small3 from './img/small3.png';

import axios from "axios";

>>>>>>> 97528bfcac95409aa20bb250c91734e13274f8bc

const Product: FC = () => {

	const { id } = useParams<string>();

	const [product, setProduct] = useState<IProduct>({} as IProduct);

	useEffect(() => {
		fetchProduct()
	}, [])

	async function fetchProduct() {
		try {
			const response = await axios.get<IProduct>(`http://game-store12.herokuapp.com/api/products/product/${id}`)
			setProduct(response.data)
		} catch (e) {
			console.log(e)
		}
	}
	return (
		<div className={styles.product}>
			<div className={styles.header}>
				<NavLink to="/" className={styles.leftArrow}><ChevronLeftOutlinedIcon color="disabled" fontSize="medium" /></NavLink> <h2 className={styles.title}>{product.title}</h2>
			</div>
			<div className={styles.content}>
				<div className={styles.productImg}>
					<div className={styles.large}>
						<img src={product.urlImg} alt="productImage" />
					</div>
					<div className={styles.small}>
						<div><img src={small1} alt="small" /></div>
						<div><img src={small2} alt="small" /></div>
						<div><img src={small3} alt="small" /></div>
					</div>
				</div>
				<div className={styles.body}>
					<div className={styles.subtitle}>{product.desc}</div>
					<div className={styles.price}>
						<span>{product.price} ₽  </span>
						<span className="heartIcon"><FavoriteBorderOutlinedIcon /></span>
					</div>
				</div>
			</div>
			<div className={styles.desc}>
				<div className={styles.title}>{product.title}</div>
				<div className={styles.body}>{product.characteristic}</div>
			</div>
		</div >);
>>>>>>> 97528bfcac95409aa20bb250c91734e13274f8bc
};

export default Product;
