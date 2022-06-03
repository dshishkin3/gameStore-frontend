import React, { FC } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

import styles from "./Breadcrumbs.module.scss";

function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

interface IMyPropsTitle {
  title: Array<string>;
  categorie?: Array<string>;
}
const ActiveLastBreadcrumb: FC<IMyPropsTitle> = ({ title }) => {
  const navigate = useNavigate();

  return (
    <div className={styles.container} role="presentation" onClick={handleClick}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link
          underline="hover"
          color="inherit"
          href="/"
          onClick={() => navigate("/")}
        >
          Главная страница
        </Link>
        {title[1] && (
          <Link
            underline="hover"
            color="inherit"
            href="/"
            onClick={() => navigate("/allCategories")}
          >
            {title[0]}
          </Link>
        )}
        {title.length < 1 && (
          <Typography color="text.primary">{title[0]}</Typography>
        )}
        {title[1] && <Typography color="text.primary">{title[1]}</Typography>}
        {!title[1] && <Typography color="text.primary">{title[0]}</Typography>}
      </Breadcrumbs>
    </div>
  );
};
export default ActiveLastBreadcrumb;
