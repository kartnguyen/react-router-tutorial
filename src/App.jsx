import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import About from "./routes/About";
import Home from "./routes/Home";
import Products from "./routes/Products";
import Shoppingcart from "./routes/Shoppingcart";
import ProductDetail from "./routes/ProductDetail";
import Root from "./routes/root";
import { AppProvider } from "./context/Appcontext";
import { ShoppingcartProvider } from "./context/Shoppingcartcontext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "products", element: <Products /> },
      { path: "shoppingcart", element: <Shoppingcart /> },
      { path: "products/:productId", element: <ProductDetail /> },
    ],
  },
]);
function App() {
  return (
    <AppProvider>
      <ShoppingcartProvider>
        <RouterProvider router={router} />
      </ShoppingcartProvider>
    </AppProvider>
  );
}

export default App;
