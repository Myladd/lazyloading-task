import { Suspense, lazy } from "react";
import "./App.css";
// import ProductsList from "./features/products/ProductsList";
import ProductsLayout from "./layouts/ProductsLayout";
import { QueryClient, QueryClientProvider } from "react-query";
import BuildUpLoading from "./components/BuildUpLoading";

const queryClient = new QueryClient();
const LazyLoad = lazy(() => import("./features/products/ProductsList"))

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ProductsLayout />
        <Suspense fallback={<BuildUpLoading/>}>
          <LazyLoad/>
        </Suspense>
      </QueryClientProvider>
    </>
  );
}

export default App;
