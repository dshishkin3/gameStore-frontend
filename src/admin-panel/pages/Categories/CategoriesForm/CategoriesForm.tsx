import { FC, useState } from "react";

import AddCircleIcon from '@mui/icons-material/AddCircle';
import styles from './CategoriesForm.module.scss';
import axios from "axios";




const CategoriesForm: FC = () => {
	const [urlImageFrom, setUrlImageForm] = useState<string>('');
	const [titleForm, setTitleForm] = useState<string>('');
	const onChangeHandler = (e: any): void => {
		e.preventDefault();
		try {
			axios.post(' https://game-store12.herokuapp.com/api/categories/', { titleForm, urlImageFrom })
				.then(response => {
					console.log(response.data)
				})
		} catch (e) {
			console.log(e)
		}
	}
	return (
		<div className={styles.container}>
			<form className={styles.form} >
				<div className={styles.input}><input onChange={(e) => setUrlImageForm(e.target.value)} type="text" value={urlImageFrom} name="urlImg" placeholder="Укажите ссылку на изображение" /></div>
				<div className={styles.input}><input onChange={(e) => setTitleForm(e.target.value)} type="text" value={titleForm} name="title" placeholder="Наименование категории" /></div>
			</form>
			<div onClick={onChangeHandler} className={styles.addCategory}><span><AddCircleIcon htmlColor="#1BC100" /></span> <span>Добавить категорию</span></div>
		</div>
	);
}

export default CategoriesForm;