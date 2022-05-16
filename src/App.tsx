import { PrivateRoutes, PublicRoutes } from "./config/Routes";

import { useAuth } from "./hooks/useAuth";

function App() {
  const { auth } = useAuth();

  return auth ? <PrivateRoutes /> : <PublicRoutes />;
}

export default App;
