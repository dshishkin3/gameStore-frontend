import axios from "axios";
import React, { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";

import { useProducts } from "../../../hooks/useProducts";

import HeaderItems from "../../components/ui/headerItems/HeaderItems";
import ToggleBtn from "../../components/ui/toggleBtn/ToggleBtn";
import Wrapper from "../../components/ui/wrapper/Wrapper";
import Category from "./category/Category";
import Characteristics from "./characteristics/Characteristics";
import Desc from "./desc/Desc";
import Hit from "./hit/Hit";
import ImagesBlock from "./images/Images";
import Price from "./price/Price";
import styles from "./Product.module.scss";
import Promotion from "./promotion/Promotion";
import Title from "./title/Title";
import Flex from "../../components/ui/flexBox/Flex";

// navigation alert

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const AdminProduct: FC = () => {
  const { id } = useParams();
  const { getProduct, product, isLoading } = useProducts();

  const [loading, setLoading] = useState<boolean>(true);

  // notifications
  const [open, setOpen] = useState<boolean>(false);
  const [message, setMessage] = useState<null | string>("");

  const [openError, setOpenError] = useState<boolean>(false);
  const [error, setError] = useState<null | string>("");

  useEffect(() => {
    if (id !== undefined) {
      getProduct({ id });
      setLoading(false);
    }
  }, []);

  const updateProduct = async () => {
    try {
      const res = await axios.put(
        `https://game-store12.herokuapp.com/api/products/${id}`,
        product
      );
      if (res.status === 200) {
        setMessage(res.data.message);
        setOpen(true);
      }
    } catch (error: any) {
      console.log(error);
      setError(error.message);
      setOpenError(true);
    }
  };

  return (
    <Wrapper title={product.title} backBtn>
      {isLoading || loading ? (
        <h1>loading...</h1>
      ) : (
        <>
          <HeaderItems
            items={[
              "Изображения товара",
              "Наименование товара",
              "Цена",
              "Старая цена (не обяз.)",
            ]}
          />
          <Flex>
            <ImagesBlock />
            <Title type="change" />
            <Price type="change" />
          </Flex>
          <HeaderItems items={["Подкатегория", "Хит", "Акция"]} />
          <Flex>
            <Category type="change" />
            <Hit type="change" />
            <Promotion type="change" />
          </Flex>
          <HeaderItems items={["Описание", "Характеристики"]} />
          <Flex>
            <Desc type="change" />
            <Characteristics type="change" />
          </Flex>
          <div className={styles.buttons}>
            <ToggleBtn
              onClick={updateProduct}
              type="saveBtn"
              text="Сохранить изменения"
            />
            <ToggleBtn type="deleteBtn" text="Удалить продукт" />
          </div>

          {/* notifications */}
          <Snackbar
            open={open}
            autoHideDuration={4000}
            onClose={() => setOpen(false)}
          >
            <Alert
              onClose={() => setOpen(false)}
              severity="success"
              sx={{ width: "100%" }}
            >
              {message}
            </Alert>
          </Snackbar>

          <Snackbar
            open={openError}
            autoHideDuration={4000}
            onClose={() => setOpenError(false)}
          >
            <Alert
              severity="error"
              onClose={() => setOpenError(false)}
              sx={{ width: "100%" }}
            >
              {error}
            </Alert>
          </Snackbar>
        </>
      )}
    </Wrapper>
  );
};

export default AdminProduct;
