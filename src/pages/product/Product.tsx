import React, { FC } from "react";
import styles from './product.module.scss';

import large from './img/01.png';
import small1 from './img/small1.png';
import small2 from './img/small2.png';
import small3 from './img/small3.png';



const Product: FC = () => {
	return (
		<div className={styles.product}>
			<div className={styles.header}>
				<span className={styles.leftArrow}></span> <h2 className={styles.title}>Геймпад PlayStation DualSense Wireless Controller для PS5 белый</h2>
			</div>
			<div className={styles.content}>
				<div className={styles.productImg}>
					<div className={styles.large}>
						<img src={large} alt="product" />
					</div>
					<div className={styles.small}>
						<div><img src={small1} alt="small" /></div>
						<div><img src={small2} alt="small" /></div>
						<div><img src={small3} alt="small" /></div>
					</div>
				</div>
				<div className={styles.body}>
					<div className={styles.subtitle}>для PS5, беспроводной, USB Type-C, mini-jack, виброотдача, 10 м</div>
					<div className={styles.price}>
						<span>6 999 ₽ </span>
					</div>
				</div>
			</div>
			<div className={styles.desc}>
				<div className={styles.title}>Характеристики Геймпад PlayStation DualSense Wireless Controller для PS5 белый</div>
				<div className={styles.body}>Проводной геймпад OKLICK GP-200M является игровым манипулятором, обеспечивающим взаимодействие между пользователем и персональным компьютером. Эргономичный дизайн для удобного и простого управления, 2 режима работы: цифровой и аналоговый (светодиодная индикация режима), 8 направлений D-пад, длина кабеля - 140 см.</div>
			</div>
		</div >);
};

export default Product;
