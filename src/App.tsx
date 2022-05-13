import React from "react";

import { CategoriesProvider } from "./providers/CategoriesProvider";

import Layout from "./components/Layout/Layout";
import AppRouter from "./config/Routes";
import { ProductsProvider } from "./providers/ProductsProvider";

function App() {
  return (
    <ProductsProvider>
      <CategoriesProvider>
        <Layout>
          <AppRouter />
        </Layout>
      </CategoriesProvider>
    </ProductsProvider>
  );
}

export default App;
