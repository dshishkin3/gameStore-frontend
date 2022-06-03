import React, { FC } from "react";

import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";

import { useNotification } from "../../../../hooks/useNotification";

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Notification: FC = () => {
  const {
    notificationError,
    notificationSuccess,
    successMessage,
    errorMessage,
    setNotificaionSuccess,
    setNotificationError,
  } = useNotification();

  return (
    <>
      <Snackbar
        open={notificationSuccess}
        autoHideDuration={4000}
        onClose={() => setNotificaionSuccess(false)}
      >
        <Alert
          onClose={() => setNotificaionSuccess(false)}
          severity="success"
          sx={{ width: "100%" }}
        >
          {successMessage}
        </Alert>
      </Snackbar>

      <Snackbar
        open={notificationError}
        autoHideDuration={4000}
        onClose={() => setNotificationError(false)}
      >
        <Alert
          severity="error"
          onClose={() => setNotificationError(false)}
          sx={{ width: "100%" }}
        >
          {errorMessage}
        </Alert>
      </Snackbar>
    </>
  );
};

export default Notification;
