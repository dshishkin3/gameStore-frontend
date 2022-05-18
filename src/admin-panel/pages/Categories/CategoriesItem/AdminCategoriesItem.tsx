import { FC } from "react";
import styles from './CategoriesItem.module.scss';

interface AdminCategoriesItemProps {
	urlImg: string;
	title: string;
}

const AdminCategoriesItem: FC<AdminCategoriesItemProps> = ({ urlImg, title }) => {
	return (
		<div className={styles.item}>
			<div className={styles.image}><img src={urlImg} alt="" /></div>
			<h3 className={styles.title}>{title}</h3>
		</div>
	);
}

export default AdminCategoriesItem;