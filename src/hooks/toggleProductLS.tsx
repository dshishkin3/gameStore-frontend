import { IProduct } from "../utils/interfaces";

function toggleProductLS(obj: IProduct, setFavorites: any): void {
	let old = [];


	if (localStorage.getItem("favorites")) {
		old = JSON.parse(localStorage.getItem("favorites") || "");
	} else {
		localStorage.setItem("favorites", JSON.stringify([obj]));
	}

	if (old.some((e: any) => e._id === obj._id)) {
		let old2 = old.filter((item: any) => item._id !== obj._id);
		localStorage.setItem("favorites", JSON.stringify([...old2]));
	} else {
		localStorage.setItem("favorites", JSON.stringify([...old, obj]));
	}

	if (!localStorage.getItem(obj._id)) {
		localStorage.setItem(obj._id, JSON.stringify([obj]));
		setFavorites(true);
	} else {
		localStorage.removeItem(obj._id);
		setFavorites(false);
	}
}
export default toggleProductLS;
