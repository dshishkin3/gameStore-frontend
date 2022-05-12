import React, { FC, useEffect, useState } from "react";
import { IProduct } from "../../utils/interfaces";




const Favories: FC = () => {
	const [product, setProduct] = useState<IProduct[]>([])
	const [productId, setProductId] = useState<string[]>([])


	return (
		<div>
			{/* <Card product={ } /> */}
		</div>
	);
};

export default Favories;
