import { CategoriesProvider } from "./providers/CategoriesProvider";
import { ProductsProvider } from "./providers/ProductsProvider";

import Layout from "./components/Layout/Layout";
import AppRouter from "./config/Routes";

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
