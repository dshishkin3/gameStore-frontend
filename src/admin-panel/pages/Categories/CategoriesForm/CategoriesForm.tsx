import { FC } from "react";
import styles from './CategoriesForm.module.scss';

interface CategoriesFormProps {
	urlImageFrom: string;
	setUrlImageForm: any;
	titleForm: string;
	setTitleForm: any;
}
const CategoriesForm: FC<CategoriesFormProps> = ({ urlImageFrom, setUrlImageForm, titleForm, setTitleForm }) => {
	return (
		<form className={styles.form} >
			<div className={styles.input}><input onChange={(e) => setUrlImageForm(e.target.value)} type="text" value={urlImageFrom} name="urlImg" placeholder="Укажите ссылку на изображение" /></div>
			<div className={styles.input}><input onChange={(e) => setTitleForm(e.target.value)} type="text" value={titleForm} name="title" placeholder="Наименование категории" /></div>
		</form>
	);
}

export default CategoriesForm;