import React, { FC } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
	event.preventDefault();
	console.info('You clicked a breadcrumb.');
}

interface IMyPropsTitle {
	title?: string;
	categorie?: Array<string>;
}
const ActiveLastBreadcrumb: FC<IMyPropsTitle> = ({ title }) => {
	const navigate = useNavigate()
	const pathname = useLocation()
	return (
		<div role="presentation" onClick={handleClick}>
			<Breadcrumbs aria-label="breadcrumb">
				<Link underline="hover" color="inherit" href="/" onClick={() => navigate("/")} >
					Home
				</Link>
				<Link underline="hover" color="inherit" href="/" onClick={() => navigate("/allCategories")} >
					Каталог товаров
				</Link>
				{title && <Typography color="text.primary">{title}</Typography>}

			</Breadcrumbs>
		</div >
	);
}
export default ActiveLastBreadcrumb;