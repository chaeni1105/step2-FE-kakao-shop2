import React, { Suspense } from "react"; // eslint-disable-line no-unused-vars
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignInPage from "../pages/SignInPage";
import SignUpPage from "../pages/SignUpPage";
import HomePage from "../pages/HomePage";
import MainLayout from "../layouts/MainLayout";
import ProductDetailPage from "../pages/ProductDetailPage";
import Loader from "../components/atoms/Loader";
import ErrorPage from "../pages/ErrorPage";
import CartsPage from "../pages/CartsPage";
import OrderPage from "../pages/OrderPage";

const staticServerUrl = process.env.REACT_APP_PATH || "";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Routes>
          {/* 단독 레이아웃 */}
          <Route path={staticServerUrl + "/login"} element={<SignInPage />} />
          <Route path={staticServerUrl + "/signup"} element={<SignUpPage />} />
          <Route path={staticServerUrl + "/cart"} element={<CartsPage />} />
          <Route path={staticServerUrl + "/order"} element={<OrderPage />} />
          {/* 공통 레이아웃 */}
          <Route element={<MainLayout />}>
            <Route path={staticServerUrl + "/"} element={<HomePage />} />
            <Route path={staticServerUrl + "/product/:id"} element={<ProductDetailPage />} />
          </Route>
          {/* 에러페이지: 정해진 경로가 아닌 경우에 해당 페이지로 이동 */}
          <Route path={staticServerUrl + "/*"} element={<ErrorPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};
export default AppRoutes;
