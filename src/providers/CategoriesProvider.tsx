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
import { useNavigate } from "react-router-dom";
import { useNotification } from "../hooks/useNotification";

export const CategoriesContext = createContext<ICategoryContext>(
	{} as ICategoryContext
);

interface ICategoryProviderProps {
	children: ReactNode;
}

export const CategoriesProvider: FC<ICategoryProviderProps> = ({
	children,
}) => {
	const [categories, setCategories] = useState<ICategory[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [page, setPage] = useState<number>(1);
	const [pageQty, setPageQty] = useState<number>(13);
	const [product, setProduct] = useState<ICategory[]>([]);

	const {
		setSuccessMessage,
		setNotificaionSuccess,
		setErrorMessage,
		setNotificationError,
	} = useNotification();


	useEffect(() => {
		getCategories();
	}, []);

	const getCategories = async () => {
		setIsLoading(true);
		try {
			const res = await axios.get<ICategory[]>(
				`http://game-store12.herokuapp.com/api/categories`
			);
			setCategories(res.data);
		} catch (err: any) {
			console.log(err);
		} finally {
			setIsLoading(false);
		}
	};

	async function getPageCategories() {
		const response = await axios.get<ICategory[]>(`http://game-store12.herokuapp.com/api/categories?page=${page}&size=2`);
		setProduct(response.data);
		setPageQty(categories.length);
	};
	const addCategory = async (titleForm: string, urlImageFrom: string) => {
		try {
			const response = await axios.post('https://game-store12.herokuapp.com/api/categories/', { title: titleForm, urlImg: urlImageFrom })
			setSuccessMessage(response.data.message);
			setNotificaionSuccess(true);
			getCategories();
		} catch (error: any) {

			setErrorMessage(error.message);
			setNotificationError(true);
		}
	};
	const updateCategory = async (id: string) => {
		console.log('add category 1')
		try {
			const response = await axios.put(`https://game-store12.herokuapp.com/api/categories/${id}`)
			setSuccessMessage(response.data.message);
			setNotificaionSuccess(true);

		} catch (error: any) {
			setErrorMessage(error.message);
			setNotificationError(true);
		}
	};

	const deleteCategory = async (id: string) => {

		try {
			const response = await axios.delete(`https://game-store12.herokuapp.com/api/categories/${id}`);
			setSuccessMessage(response.data.message);
			setNotificaionSuccess(true);
			if (page === null) {
				setPage(page - 1)
			}
		} catch (error: any) {
			setErrorMessage(error.message);
			setNotificationError(true);
		}

	}



	const value = useMemo(
		() => ({
			categories,
			isLoading,
			getCategories,
			addCategory,
			getPageCategories,
			product,
			pageQty,
			setPage,
			page,
			updateCategory,
			deleteCategory
		}),
		[categories, page, product, isLoading]
	);

	return (
		<CategoriesContext.Provider value={value}>
			{children}
		</CategoriesContext.Provider>
	);
};
