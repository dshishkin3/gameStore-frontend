import {
	FC,
	useState,
	useMemo,
	createContext,
	ReactNode,
	useEffect,
} from "react";
import axios from "axios";

import { ICategory } from "../utils/interfaces";
import { ICategoryContext } from "./types";
import { useNotification } from "../hooks/useNotification";

export const CategoriesContext = createContext<ICategoryContext>(
	{} as ICategoryContext
);
//
interface ICategoryProviderProps {
	children: ReactNode;
}
export interface ICategories {
	categories: ICategory[];
	count: number;
}

export interface ICategories {
	categories: ICategory[];
	count: number;
}

export const CategoriesProvider: FC<ICategoryProviderProps> = ({
	children,
}) => {
	const [categories, setCategories] = useState<ICategories>({} as ICategories);
	const [category, setCategory] = useState<ICategory>({} as ICategory);
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [page, setPage] = useState<number>(1);

	const [product, setProduct] = useState<ICategories>({} as ICategories);
	const [subCategory, setSubCategory] = useState<any[]>([]);

	const {
		setSuccessMessage,
		setNotificaionSuccess,
		setErrorMessage,
		setNotificationError,
	} = useNotification();

	useEffect(() => {
		getCategories(1, 14);
	}, []);

	useEffect(() => {
		console.log(categories);
	}, [categories]);

	const getCategories = async (page: number, size: number) => {
		setIsLoading(true);
		try {
			const res = await axios.get(
				`http://game-store12.herokuapp.com/api/categories/?page=${page}&size=${size}`
			);
			setCategories(res.data);
			setProduct(res.data);
		} catch (err: any) {
			console.log(err);
		} finally {
			setIsLoading(false);
		}
	};

	const addCategory = async (titleForm: string, urlImageFrom: string) => {
		try {
			const response = await axios.post(
				"https://game-store12.herokuapp.com/api/categories/",
				{ title: titleForm, urlImg: urlImageFrom }
			);
			setSuccessMessage(response.data.message);
			setNotificaionSuccess(true);
			getCategories(1, 4);
		} catch (error: any) {
			setErrorMessage(error.message);
			setNotificationError(true);
		}
	};
	const updateCategory = async (category: ICategory) => {
		try {
			console.log(category);

			const response = await axios.put(
				`https://game-store12.herokuapp.com/api/categories/${category._id}`,
				category
			);
			console.log(response);

			setSuccessMessage(response.data.message);
			setNotificaionSuccess(true);
		} catch (error: any) {
			setErrorMessage(error.message);
			setNotificationError(true);
		}
	};

	const deleteCategory = async (id: string) => {
		try {
			const response = await axios.delete(
				`https://game-store12.herokuapp.com/api/categories/${id}`
			);
			setSuccessMessage(response.data.message);
			setNotificaionSuccess(true);
		} catch (error: any) {
			setErrorMessage(error.message);
			setNotificationError(true);
		}
	};

	const addSubcategory = async (
		objId: string,
		urlImg: string,
		title: string,
		subCategoryTitle: string,
		subCategoryImg: string
	) => {
		try {
			const response = await axios.put(
				`https://game-store12.herokuapp.com/api/categories/${objId}`,
				{
					title: title,
					urlImg: urlImg,
					subcategories: [{ title: subCategoryTitle, urlImg: subCategoryImg }],
				}
			);
			console.log(response.data)
			setSuccessMessage(response.data.message);
			setNotificaionSuccess(true);
		} catch (error: any) {
			setErrorMessage(error.message);
			setNotificationError(true);
		}
	};
	const value = useMemo(
		() => ({
			categories,
			isLoading,
			getCategories,
			addCategory,
			product,
			setPage,
			page,
			updateCategory,
			deleteCategory,
			addSubcategory,
			setSubCategory,
			category,
			setCategory,
		}),
		[categories, page, product, isLoading]
	);

	return (
		<CategoriesContext.Provider value={value}>
			{children}
		</CategoriesContext.Provider>
	);
};
