import { FC, useState, useMemo, createContext, ReactNode } from "react";

import { INotificationContext } from "./types";

export const NotificationContext = createContext<INotificationContext>(
  {} as INotificationContext
);

interface INotificationProviderProps {
  children: ReactNode;
}

export const NotificationProvider: FC<INotificationProviderProps> = ({
  children,
}) => {
  const [notificationSuccess, setNotificaionSuccess] = useState<boolean>(false);
  const [notificationError, setNotificationError] = useState<boolean>(false);

  const [successMessage, setSuccessMessage] = useState<null | string>("");
  const [errorMessage, setErrorMessage] = useState<null | string>("");

  const value = useMemo(
    () => ({
      notificationSuccess,
      notificationError,
      successMessage,
      errorMessage,

      setNotificaionSuccess,
      setNotificationError,
      setSuccessMessage,
      setErrorMessage,
    }),
    [notificationSuccess, notificationError]
  );

  return (
    <NotificationContext.Provider value={value}>
      {children}
    </NotificationContext.Provider>
  );
};
