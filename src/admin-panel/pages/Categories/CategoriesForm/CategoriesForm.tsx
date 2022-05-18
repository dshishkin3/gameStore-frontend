import { FC } from "react";

import AddCircleIcon from '@mui/icons-material/AddCircle';
import styles from './CategoriesForm.module.scss';
import axios from "axios";

const addCategoriesHandle = (e: any): void => {
	e.preventDefault();
	const title: string = e.target.elements.title.value;
	const urlImg: string = e.target.elements.urlImg.value;
	try {
		axios.post(' https://game-store12.herokuapp.com/api/categories/', { title, urlImg })
			.then(response => {
				console.log(response.data)
			})
	} catch (e) {
		console.log(e)
	}
}


const CategoriesForm: FC = () => {
	return (
		<form className={styles.form} onSubmit={addCategoriesHandle} >
			<div className={styles.input}><input type="text" name="urlImg" placeholder="Укажите ссылку на изображение" /></div>
			<div className={styles.input}><input type="text" name="title" placeholder="Наименование категории" /></div>
			<div className={styles.addCategory}><span><AddCircleIcon htmlColor="#1BC100" /></span><input type="submit" value="Добавить подкатегорию" /></div>
		</form>
	);
}

export default CategoriesForm;