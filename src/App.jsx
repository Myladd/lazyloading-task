import "./App.css";
import ProductsList from "./features/products/ProductsList";
import ProductsLayout from "./layouts/ProductsLayout";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ProductsLayout />
        <ProductsList/>
      </QueryClientProvider>
    </>
  );
}

export default App;
