import { ICategory, IProduct } from "../utils/interfaces";

export interface ICategoryContext {
	categories: ICategory[];
	getCategories: () => void;
	isLoading: boolean;
}

export interface IProductsContext {
	allProducts: IProduct[];
	hits: IProduct[];
	promotions: IProduct[];
	searchProducts: IProduct[];
	categoryProducts: IProduct[];
	product: IProduct;
	newProduct: IProduct;

	setCategoryProducts: (arg0: IProduct[]) => void;
	setIsLoading: (arg0: boolean) => void;
	setSearchProducts: (arg0: IProduct[]) => void;
	setProduct: (arg0: IProduct) => void;
	setNewProduct: (arg0: IProduct) => void;

	getAllProducts: (arg0: number) => void;
	getHits: () => void;
	getPromotions: () => void;
	getSearchProducts: ({ name }: { name: string }) => void;
	getCategoryProducts: ({ name }: { name: string }) => void;
	getProduct: ({ id }: { id: string }) => void;
	updateProduct: (id: string) => void;
	deleteProduct: (id: string) => void;
	addProduct: () => void;

	isLoading: boolean;
}

export interface IAuthContext {
	email: string;
	password: string;
	isLoading: boolean;
	auth: boolean;
	isError: null | string;

	setEmail: (arg0: string) => void;
	setPassword: (arg0: string) => void;
	setIsLoading: (arg0: boolean) => void;
	setIsError: (arg0: null | string) => void;

	login: () => void;
}

export interface INotificationContext {
	notificationSuccess: boolean;
	notificationError: boolean;
	successMessage: null | string;
	errorMessage: null | string;

	setNotificaionSuccess: (arg0: boolean) => void;
	setNotificationError: (arg0: boolean) => void;
	setSuccessMessage: (arg0: string) => void;
	setErrorMessage: (arg0: string) => void;
}
