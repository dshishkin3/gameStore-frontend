import React, { FC } from "react";
import { useParams } from "react-router-dom";

const Category: FC = () => {
  let { name } = useParams();

  return <div>Category - {name}</div>;
};

export default Category;
