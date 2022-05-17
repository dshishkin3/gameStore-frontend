import { FC } from "react";

import styles from './Categories.module.scss';

interface CategoriesProps {

}

const Categories: FC<CategoriesProps> = () => {
	return (
		<div className={styles.container}>
			<h1 className={styles.title}>Акции</h1>
			<div className={styles.categories}>
				<div className={styles.subtitles}>
					<h2 className={styles.subtitle}>Информация о категории</h2>
					<h2 className={styles.subtitle}>Подкатегории</h2>
				</div>
				<div className={styles.body}>
					<div className={styles.categorie}></div>
					<div className={styles.subcategorie}></div>
				</div>


			</div>
		</div>
	);
}

export default Categories; 