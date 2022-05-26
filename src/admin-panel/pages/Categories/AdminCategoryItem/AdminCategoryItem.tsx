import { FC } from "react";
import { Link } from "react-router-dom";

import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import { ICategory } from "../../../../utils/interfaces";

import styles from "./AdminCategoryItem.module.scss";
import AdminSubcategory from "../AdminSubcategory/AdminSubcategory";

interface AdminCategoryProps {
	product: ICategory[];
}
const AdminCategoryItem: FC<AdminCategoryProps> = ({ product }) => {

	console.log(product)
	return (
		<div className={styles.body}>
			{product.map((obj) => (
				<div key={obj._id} className={styles.column}>
					<div className={styles.categorie}>
						<div className={styles.image}>
							<img src={obj.urlImg} alt="" />
						</div>
						<h3 className={styles.title}>{obj.title}</h3>
					</div>
					<div className={styles.subcategorie}>
						{obj.subcategories.map((elem) => (
							<AdminSubcategory
								key={obj._id + elem.id}
								urlImg={elem.urlImg}
								title={elem.title}
							/>
						))}
					</div>
					<div className={styles.toCategorie}>
						<Link className={styles.btn} to={`/admin/categories/${obj._id}`}>
							<span>Перейти на страницу категории</span>
							<span>
								<ArrowForwardIosSharpIcon />
							</span>
						</Link>
					</div>
				</div>
			))}
		</div>
	);
};

export default AdminCategoryItem;
