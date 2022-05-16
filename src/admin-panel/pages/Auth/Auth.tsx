import React, { FC } from "react";

import CircularProgress from "@mui/material/CircularProgress";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";

import { useAuth } from "../../../hooks/useAuth";

import styles from "./Auth.module.scss";

import logo from "../../../assets/images/header/logo.png";

const AdminAuth: FC = () => {
  const { isError, setIsError, setEmail, setPassword, login, isLoading } =
    useAuth();

  const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref
  ) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        {isLoading && (
          <div className={styles.loading}>
            <CircularProgress color="error" />
          </div>
        )}
        <Snackbar
          open={Boolean(isError)}
          autoHideDuration={4000}
          onClose={() => setIsError(null)}
        >
          <Alert
            onClose={() => setIsError(null)}
            severity="error"
            sx={{ width: "100%" }}
          >
            {isError}
          </Alert>
        </Snackbar>
        <div className={styles.logo}>
          <img src={logo} alt="" />
          <p>Game Store</p>
        </div>
        <p className={styles.title}>
          Вход в админ-панель <br /> game store
        </p>
        <p className={styles.subtitle}>Введите e-mail адрес и пароль</p>
        <div className={styles.inputs}>
          <div className={styles.input}>
            <p>EMAIL</p>
            <input
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email address"
              type="email"
            />
          </div>
          <div className={styles.input}>
            <p>PASSWORD</p>
            <input
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              type="password"
            />
          </div>
        </div>
        <button className={styles.login} onClick={() => login()}>
          Log In
        </button>
      </div>
    </div>
  );
};

export default AdminAuth;
