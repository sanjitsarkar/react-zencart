import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Layout from "../../components/Layout";
import Loader from "../../components/Loader";
import { useProduct } from "../../context/ProductsContext";
import ProductInfo from "./ProductInfo";

const SingleVideoPage = () => {
  const location = useLocation();
  const { fetchProductInfo, productInfo } = useProduct();
  useEffect(() => {
    let pathName = location.pathname.split("/");
    let productId = pathName[pathName.length - 1];
    console.log(productId);
    fetchProductInfo(productId);
  }, [location]);
  useEffect(() => {
    console.log(productInfo);
  }, [productInfo]);
  return (
    <Layout>
      <div className="row flex-wrap ">
        {productInfo.loading && <Loader />}
        {!productInfo.loading && productInfo.data.length !== 0 && (
          <>
            <ProductInfo productInfo={productInfo.data} />
          </>
        )}

        {!productInfo.loading && productInfo.data.length === 0 && (
          <div className="w-full h-4-6 grid place-content-center place-items-center gap-1">
            <h2>Product is not found</h2>
            <Link to="/" className="btn btn-primary w-fit">
              Go to Home
            </Link>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default SingleVideoPage;
