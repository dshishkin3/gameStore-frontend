import React from "react";

import Layout from "./components/Layout/Layout";
import AppRouter from "./config/Routes";

function App() {
  return (
    <div>
      <Layout>
        <AppRouter />
      </Layout>
    </div>
  );
}

export default App;
